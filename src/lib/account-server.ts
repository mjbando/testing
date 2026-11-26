import { createHash, randomBytes, randomUUID, scrypt, timingSafeEqual } from "node:crypto";
import { and, eq, gt, lt, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { accounts, authWindows, sessions } from "@/db/schema";
import type { Captain } from "./voyage";

export const SESSION = "luffillion_session";
export const GUEST = "luffillion_guest";
const SESSION_SECONDS = 30 * 86400;
const digest = (value: string) => createHash("sha256").update(value).digest("hex");
const uuid4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class RequestProblem extends Error {
  constructor(public readonly status: number, message: string) { super(message); }
}
export function privateJson(payload: unknown, status = 200) {
  return NextResponse.json(payload, { status, headers: { "Cache-Control": "private, no-store", Vary: "Cookie" } });
}
export function failure(error: unknown) {
  if (error instanceof RequestProblem) return privateJson({ error: error.message }, error.status);
  // Don't return database errors, tokens, or password material to the client.
  console.error("[ownership-failure]", error);
  if (process.env.DEBUG_RANKED === "1" && error instanceof Error) return privateJson({ error: error.message, stack: error.stack }, 500);
  return privateJson({ error: "The logbook is unavailable right now. Please try again." }, 500);
}

export async function readMutation(req: NextRequest, maxBytes = 4096): Promise<Record<string, unknown>> {
  const origin = req.headers.get("origin");
  const hosts = [req.nextUrl.host, req.headers.get("host"), req.headers.get("x-forwarded-host")?.split(",")[0].trim()];
  if (req.headers.get("sec-fetch-site") === "cross-site" || (origin && !hosts.some((h) => h && (origin === `https://${h}` || origin === `http://${h}`)))) {
    throw new RequestProblem(403, "Open this page to make that change.");
  }
  if (req.headers.get("content-type")?.split(";")[0].trim() !== "application/json") throw new RequestProblem(415, "A JSON request is required.");
  const reader = req.body?.getReader();
  if (!reader) throw new RequestProblem(400, "Missing request body.");
  const decoder = new TextDecoder();
  let text = "", size = 0;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBytes) { await reader.cancel(); throw new RequestProblem(413, "Request is too large."); }
    text += decoder.decode(value, { stream: true });
  }
  try {
    const obj: unknown = JSON.parse(text + decoder.decode());
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) throw new Error();
    return obj as Record<string, unknown>;
  } catch { throw new RequestProblem(400, "Invalid request."); }
}

export async function currentCaptain(req: NextRequest): Promise<Captain | null> {
  const token = req.cookies.get(SESSION)?.value;
  if (!token || !/^[A-Za-z0-9_-]{43}$/.test(token)) return null;
  const [captain] = await db.select({ id: accounts.id, username: accounts.username }).from(sessions)
    .innerJoin(accounts, eq(accounts.id, sessions.accountId))
    .where(and(eq(sessions.tokenHash, digest(token)), gt(sessions.expiresAt, new Date()))).limit(1);
  return captain ?? null;
}

export function guestId(req: NextRequest): string | null {
  const id = req.cookies.get(GUEST)?.value;
  return id && uuid4.test(id) ? id : null;
}

function cookieOptions(req: NextRequest, maxAge: number) {
  const secure = process.env.NODE_ENV === "production" || req.nextUrl.protocol === "https:";
  const embedded = secure && req.headers.get("x-voyage-embedded") === "1";
  return { httpOnly: true, path: "/", secure, sameSite: embedded ? "none" as const : "lax" as const,
    ...(embedded ? { partitioned: true } : {}), maxAge };
}

export function ensureGuest(req: NextRequest, res: NextResponse) {
  if (guestId(req)) return;
  // The previous game used a random v4 UUID as its anonymous bearer credential.
  // Migrate that device credential once; never accept an account ID here.
  const oldKey = req.headers.get("x-voyage-legacy-guest");
  res.cookies.set(GUEST, oldKey && uuid4.test(oldKey) ? oldKey : randomUUID(), cookieOptions(req, 365 * 86400));
}
export function rotateGuest(req: NextRequest, res: NextResponse) {
  res.cookies.set(GUEST, randomUUID(), cookieOptions(req, 365 * 86400));
}

// Version 1: scrypt N=32768, r=8, p=3; a fresh 128-bit salt per password.
function derive(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => scrypt(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 },
    (err, key) => err ? reject(err) : resolve(key)));
}
export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  return `s1:${salt.toString("hex")}:${(await derive(password, salt)).toString("hex")}`;
}
export async function verifyPassword(password: string, encoded?: string) {
  // Unknown accounts take the same KDF path as accounts with a wrong password.
  const [, salt, key] = (encoded ?? `s1:${"00".repeat(16)}:${"00".repeat(64)}`).split(":");
  const actual = await derive(password, Buffer.from(salt, "hex"));
  const expected = Buffer.from(key, "hex");
  return expected.length === actual.length && timingSafeEqual(actual, expected) && !!encoded;
}

export async function checkAuthBudget(req: NextRequest, usernameKey: string) {
  const now = new Date(), expiry = new Date(now.getTime() + 15 * 60000);
  const address = (req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for")?.split(",")[0] || "local").slice(0, 100);
  await db.delete(authWindows).where(lt(authWindows.expiresAt, now));
  for (const [bucket, limit] of [[`ip:${address}`, 60], [`name:${usernameKey}`, 15]] as const) {
    const [window] = await db.insert(authWindows).values({ bucket: digest(bucket), count: 1, expiresAt: expiry })
      .onConflictDoUpdate({ target: authWindows.bucket, set: { count: sql`${authWindows.count} + 1` } }).returning({ count: authWindows.count });
    if (window.count > limit) throw new RequestProblem(429, "Too many attempts. Try again in 15 minutes.");
  }
}

export async function startSession(req: NextRequest, res: NextResponse, accountId: string) {
  const token = randomBytes(32).toString("base64url");
  await db.delete(sessions).where(lt(sessions.expiresAt, new Date()));
  await db.insert(sessions).values({ accountId, tokenHash: digest(token), expiresAt: new Date(Date.now() + SESSION_SECONDS * 1000) });
  res.cookies.set(SESSION, token, cookieOptions(req, SESSION_SECONDS));
}
export async function endSession(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get(SESSION)?.value;
  if (token) await db.delete(sessions).where(eq(sessions.tokenHash, digest(token)));
  res.cookies.set(SESSION, "", cookieOptions(req, 0));
}
