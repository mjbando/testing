import { and, eq, sql } from "drizzle-orm";
import { NextRequest } from "next/server";
import { db } from "@/db";
import { runs } from "@/db/schema";
import { todayKey } from "@/lib/daily";
import { MAX_POINTS } from "@/data/tiers";
import { currentCaptain, failure, guestId, privateJson, readMutation, RequestProblem } from "@/lib/account-server";
import { finishVoyage, ownerOf, ownsRun, validAnswers, type Owner } from "@/lib/voyage-server";

export const dynamic = "force-dynamic";
const BIN_SIZE = 50;
const BIN_COUNT = Math.ceil((MAX_POINTS + 1) / BIN_SIZE);
function recentDay(day: unknown): day is string {
  const today = todayKey();
  const prior = new Date(`${today}T12:00:00Z`);
  prior.setUTCDate(prior.getUTCDate() - 1);
  return day === today || day === prior.toISOString().slice(0, 10);
}

async function buildStats(day: string, owner: Owner | null) {
  const rows = await db.select({ score: runs.score, n: sql<number>`count(*)::int` }).from(runs).where(eq(runs.dayKey, day)).groupBy(runs.score);
  const bins = Array.from({ length: BIN_COUNT }, (_, i) => ({ from: i * BIN_SIZE, to: Math.min(MAX_POINTS, i * BIN_SIZE + BIN_SIZE - 1), count: 0 }));
  let total = 0, sum = 0, top = 0;
  for (const r of rows) {
    bins[Math.min(BIN_COUNT - 1, Math.floor(r.score / BIN_SIZE))].count += r.n;
    total += r.n; sum += r.score * r.n; top = Math.max(top, r.score);
  }
  let you = null;
  if (owner) {
    const [mine] = await db.select({ score: runs.score, solved: runs.solved }).from(runs).where(and(eq(runs.dayKey, day), ownsRun(owner))).limit(1);
    if (mine) {
      const lower = rows.reduce((n, r) => n + (r.score < mine.score ? r.n : 0), 0);
      const higher = rows.reduce((n, r) => n + (r.score > mine.score ? r.n : 0), 0);
      you = { ...mine, beat: total > 1 ? Math.floor(100 * lower / (total - 1)) : 0, rank: higher + 1 };
    }
  }
  return { day, total, average: total ? Math.round(sum / total) : 0, top, binSize: BIN_SIZE, bins, you };
}

export async function GET(req: NextRequest) {
  try {
    const captain = await currentCaptain(req), day = req.nextUrl.searchParams.get("day");
    return privateJson(await buildStats(recentDay(day) ? day : todayKey(), ownerOf(captain?.id ?? null, guestId(req))));
  } catch (err) { return failure(err); }
}

export async function POST(req: NextRequest) {
  try {
    const body = await readMutation(req, 8192);
    const captain = await currentCaptain(req);
    const accountId = captain?.id ?? null;
    if ((body.accountId ?? null) !== accountId) throw new RequestProblem(401, "Your session changed. Sign in again or reload before saving.");
    const owner = ownerOf(accountId, guestId(req));
    if (!owner) throw new RequestProblem(401, "Enable site cookies and reload to save today's voyage.");
    if (!recentDay(body.day)) throw new RequestProblem(400, "That run has expired.");
    if (!validAnswers(body.answers)) throw new RequestProblem(400, "Send one answer or miss for each of the seven questions.");
    if (body.mistakes != null && (typeof body.mistakes !== "number" || !Number.isInteger(body.mistakes) || body.mistakes < 0 || body.mistakes > 1000000)) {
      throw new RequestProblem(400, "Invalid mistake count.");
    }
    const mistakes = typeof body.mistakes === "number" ? body.mistakes : undefined;
    const { final: finished, newlyUnlocked } = await finishVoyage(owner, body.day, body.answers, { mistakes });
    if (!finished) throw new RequestProblem(409, "This voyage is already in a captain's log. Reload to continue.");
    return privateJson({ ...await buildStats(body.day, owner), finished, newlyUnlocked });
  } catch (err) { return failure(err); }
}
