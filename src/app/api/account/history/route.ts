import { and, desc, eq, lt, sql } from "drizzle-orm";
import { NextRequest } from "next/server";
import { db } from "@/db";
import { runs } from "@/db/schema";
import { currentCaptain, failure, privateJson, RequestProblem } from "@/lib/account-server";
import { runFields } from "@/lib/voyage-server";

export const dynamic = "force-dynamic";
const PAGE = 12;

export async function GET(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) throw new RequestProblem(401, "Sign in to read your voyage log.");
    const before = req.nextUrl.searchParams.get("before");
    if (before && !/^\d{4}-\d{2}-\d{2}$/.test(before)) throw new RequestProblem(400, "Invalid page.");
    const mine = eq(runs.accountId, captain.id);
    const [rows, [summary]] = await Promise.all([
      db.select(runFields).from(runs).where(and(mine, before ? lt(runs.dayKey, before) : undefined)).orderBy(desc(runs.dayKey)).limit(PAGE + 1),
      db.select({ count: sql<number>`count(*)::int`, best: sql<number>`coalesce(max(${runs.score}),0)::int`, average: sql<number>`coalesce(round(avg(${runs.score})),0)::int` }).from(runs).where(mine),
    ]);
    return privateJson({ voyages: rows.slice(0, PAGE), summary, nextBefore: rows.length > PAGE ? rows[PAGE - 1].day : null });
  } catch (err) { return failure(err); }
}
