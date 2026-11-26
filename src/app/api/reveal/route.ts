import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { solves } from "@/db/schema";
import { getQuestionById, parseEntries, todayKey } from "@/lib/daily";
import { TIER_ORDER, type Tier } from "@/data/tiers";

export const dynamic = "force-dynamic";

// Returns every possible answer for one of today's questions, grouped by tier,
// with how many players have found each one. Called after a question is finished.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const question = getQuestionById(url.searchParams.get("q") ?? "");
  if (!question) {
    return Response.json({ error: "Invalid question." }, { status: 400 });
  }
  const day = todayKey();

  const rows = await db
    .select({ answer: solves.answer, found: sql<number>`count(*)::int` })
    .from(solves)
    .where(and(eq(solves.dayKey, day), eq(solves.questionId, question.id)))
    .groupBy(solves.answer);

  const foundMap = new Map(rows.map((r) => [r.answer, r.found]));
  const totalFound = rows.reduce((sum, r) => sum + r.found, 0);

  const tiers = Object.fromEntries(TIER_ORDER.map((t) => [t, [] as { name: string; points: number; found: number }[]])) as Record<
    Tier,
    { name: string; points: number; found: number }[]
  >;

  for (const entry of parseEntries(question)) {
    tiers[entry.tier].push({
      name: entry.name,
      points: entry.points,
      found: foundMap.get(entry.name) ?? 0,
    });
  }

  const total = TIER_ORDER.reduce((sum, t) => sum + tiers[t].length, 0);

  return Response.json({
    questionId: question.id,
    prompt: question.prompt,
    total,
    totalFound,
    tiers,
  });
}
