import { NextRequest } from "next/server";
import { currentCaptain, failure, privateJson, readMutation, RequestProblem } from "@/lib/account-server";
import { answerRanked, enterQueue, cancelQueue, matchView, rankedProfile } from "@/lib/ranked-server";
import { db } from "@/db";
import { rankedMatches, rankedQueue } from "@/db/schema";
import { and, eq, sql, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) return privateJson({ captain: null });
    const [profile, activeMatch] = await Promise.all([
      rankedProfile(captain.id),
      db.select({ id: rankedMatches.id })
        .from(rankedMatches)
        .where(and(eq(rankedMatches.status, "active"), sql`(${rankedMatches.accountA} = ${captain.id} OR ${rankedMatches.accountB} = ${captain.id})`))
        .orderBy(desc(rankedMatches.id))
        .limit(1),
    ]);
    const view = activeMatch[0] ? await matchView(captain.id, activeMatch[0].id) : null;
    return privateJson({ captain: profile, activeMatch: view });
  } catch (err) { return failure(err); }
}

export async function POST(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) throw new RequestProblem(401, "Sign in to play Ranked.");
    const body = await readMutation(req, 2048);
    if (body.action === "cancel") {
      await cancelQueue(captain.id);
      return privateJson({ ok: true });
    }
    if (body.action !== "search") throw new RequestProblem(400, "Unknown ranked action.");
    // If already in a battle, return it. Otherwise enter the queue.
    const [existing] = await db.select({ id: rankedMatches.id }).from(rankedMatches)
      .where(and(eq(rankedMatches.status, "active"), sql`(${rankedMatches.accountA} = ${captain.id} OR ${rankedMatches.accountB} = ${captain.id})`))
      .orderBy(desc(rankedMatches.id)).limit(1);
    if (existing) return privateJson({ state: "matched", match: await matchView(captain.id, existing.id) });
    const joined = await enterQueue(captain.id);
    if (joined.opponentFound) {
      const [m] = await db.select({ id: rankedMatches.id }).from(rankedMatches)
        .where(and(eq(rankedMatches.status, "active"), sql`(${rankedMatches.accountA} = ${captain.id} OR ${rankedMatches.accountB} = ${captain.id})`))
        .orderBy(desc(rankedMatches.id)).limit(1);
      return privateJson({ state: "matched", match: m ? await matchView(captain.id, m.id) : null });
    }
    const [queueCount] = await db.select({ n: sql<number>`count(*)::int` }).from(rankedQueue);
    return privateJson({ state: "queued", opponents: queueCount?.n ?? 1 });
  } catch (err) { return failure(err); }
}

export async function PATCH(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) throw new RequestProblem(401, "Sign in to play Ranked.");
    const body = await readMutation(req, 4096);
    const matchId = typeof body.matchId === "number" ? body.matchId : Number(body.matchId);
    if (!Number.isFinite(matchId)) throw new RequestProblem(400, "Which match?");
    const result = await answerRanked(captain.id, matchId, typeof body.guess === "string" ? body.guess : "");
    return privateJson({ ok: true, match: result.view });
  } catch (err) { return failure(err); }
}
