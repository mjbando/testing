import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import { db } from "@/db";
import { accounts } from "@/db/schema";
import { checkAuthBudget, currentCaptain, endSession, failure, guestId, hashPassword, privateJson, readMutation, RequestProblem, rotateGuest, startSession, verifyPassword } from "@/lib/account-server";
import { claimGuestVoyages, finishVoyage, readCheckpoint, saveCheckpoint } from "@/lib/voyage-server";
import { todayKey } from "@/lib/daily";
import { countMistakes } from "@/lib/achievements";
import { firstOpen, type Captain } from "@/lib/voyage";
import { DAILY_QUESTION_COUNT } from "@/data/tiers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try { return privateJson({ captain: await currentCaptain(req) }); }
  catch (err) { return failure(err); }
}

export async function POST(req: NextRequest) {
  try {
    const body = await readMutation(req, 65536);
    if (body.action === "logout") {
      const captain = await currentCaptain(req);
      if (captain && body.accountId && body.accountId !== captain.id) throw new RequestProblem(409, "Your session changed. Reload before signing out.");
      // Flush the clock/last answer before revoking this browser's session. An
      // expired session or a score-only historic run can still sign out normally.
      if (captain && body.accountId === captain.id && body.progress && typeof body.progress === "object" && "day" in body.progress && body.progress.day === todayKey()) {
        const p = readCheckpoint(body.progress);
        if (firstOpen(p) === DAILY_QUESTION_COUNT) {
          await finishVoyage({ accountId: captain.id, playerId: `account:${captain.id}` }, p.day, Array.from({ length: DAILY_QUESTION_COUNT }, (_, i) => p.q[i]?.answer ?? ""), { mistakes: countMistakes(p) ?? undefined });
        } else if (Object.keys(p.q).length) await saveCheckpoint(captain.id, p);
      }
      const res = privateJson({ captain: null });
      await endSession(req, res);
      return res;
    }
    if (body.action !== "login" && body.action !== "register") throw new RequestProblem(400, "Unknown account action.");
    if (await currentCaptain(req)) throw new RequestProblem(409, "Sign out before choosing another account.");
    const username = typeof body.username === "string" ? body.username.trim() : "";
    if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]{2,23}$/.test(username)) throw new RequestProblem(400, "Use 3–24 letters, numbers, underscores or dashes. Start with a letter or number.");
    const password = body.password;
    if (typeof password !== "string" || !password.length || password.length > 128) throw new RequestProblem(400, "Enter a password of up to 128 characters.");
    if (body.action === "register" && password.length < 12) throw new RequestProblem(400, "Use a password or passphrase with at least 12 characters.");
    const key = username.toLowerCase();
    await checkAuthBudget(req, key);
    const guest = body.includeGuest === true ? guestId(req) : null;
    const progress = guest && body.progress && typeof body.progress === "object" && "day" in body.progress && body.progress.day === todayKey()
      ? readCheckpoint(body.progress) : null;
    let captain: Captain;
    if (body.action === "register") {
      const [created] = await db.insert(accounts).values({ username, usernameKey: key, passwordHash: await hashPassword(password) })
        .onConflictDoNothing({ target: accounts.usernameKey }).returning({ id: accounts.id, username: accounts.username });
      if (!created) throw new RequestProblem(409, "That username is taken. Choose another, or sign in.");
      captain = created;
    } else {
      const [found] = await db.select({ id: accounts.id, username: accounts.username, hash: accounts.passwordHash }).from(accounts).where(eq(accounts.usernameKey, key)).limit(1);
      if (!(await verifyPassword(password, found?.hash)) || !found) throw new RequestProblem(401, "The username or password is incorrect.");
      captain = { id: found.id, username: found.username };
    }
    const imported = guest ? await claimGuestVoyages(captain.id, guest, progress) : 0;
    const res = privateJson({ captain, imported, linkedGuest: !!guest }, body.action === "register" ? 201 : 200);
    await startSession(req, res, captain.id);
    if (guest) rotateGuest(req, res);
    return res;
  } catch (err) { return failure(err); }
}
