import { and, eq, inArray, lte, sql } from "drizzle-orm";
import { db } from "@/db";
import { accounts, achievementUnlocks, checkpoints, runs } from "@/db/schema";
import { evaluateAchievements, type AchievementReport, type RunLike } from "./achievements";
import { todayKey } from "./daily";

type AchievementDB = Pick<typeof db, "select" | "insert">;

/** Called with the captain row locked by the caller's transaction. */
export async function evaluateAchievementsFor(tx: AchievementDB, accountId: string): Promise<AchievementReport> {
  const today = todayKey();
  const rows: RunLike[] = await tx.select({ dayKey: runs.dayKey, score: runs.score, solved: runs.solved,
    niche: runs.niche, mistakes: runs.mistakes, legs: runs.legs,
  }).from(runs).where(and(eq(runs.accountId, accountId), lte(runs.dayKey, today)));
  const active = await tx.select({ progress: checkpoints.progress }).from(checkpoints)
    .where(and(eq(checkpoints.accountId, accountId), lte(checkpoints.dayKey, today)));
  const unlocked = await tx.select({ id: achievementUnlocks.achievementId, at: achievementUnlocks.unlockedAt })
    .from(achievementUnlocks).where(eq(achievementUnlocks.accountId, accountId));
  const existing = new Map(unlocked.map(u => [u.id, u.at]));

  // A rank at submission is provisional. Use the actual scores of ALL players
  // for that daily challenge once its Eastern calendar day has ended.
  const days = [...new Set(rows.map(r => r.dayKey).filter(day => day < today))];
  const scores = days.length ? await tx.select({ day: runs.dayKey, score: runs.score, count: sql<number>`count(*)::int` })
    .from(runs).where(inArray(runs.dayKey, days)).groupBy(runs.dayKey, runs.score) : [];
  const byDay = new Map<string, typeof scores>();
  for (const score of scores) {
    const buckets = byDay.get(score.day) ?? [];
    buckets.push(score);
    byDay.set(score.day, buckets);
  }
  for (const row of rows) {
    const buckets = byDay.get(row.dayKey) ?? [];
    row.standing = {
      finalized: row.dayKey < today,
      others: Math.max(0, buckets.reduce((n, b) => n + b.count, 0) - 1),
      beaten: buckets.reduce((n, b) => n + (b.score < row.score ? b.count : 0), 0),
      rank: 1 + buckets.reduce((n, b) => n + (b.score > row.score ? b.count : 0), 0),
    };
  }

  const report = evaluateAchievements(rows, existing, active.map(a => a.progress));
  const inserted = report.newlyUnlocked.length ? await tx.insert(achievementUnlocks)
    .values(report.newlyUnlocked.map(id => ({ accountId, achievementId: id })))
    .onConflictDoNothing().returning({ id: achievementUnlocks.achievementId, at: achievementUnlocks.unlockedAt }) : [];
  for (const row of inserted) existing.set(row.id, row.at);
  const result = evaluateAchievements(rows, existing, active.map(a => a.progress));
  return { ...result, newlyUnlocked: inserted.map(row => row.id) };
}

// Opening the collection also backfills eligible old voyages and finalized leaderboards.
export async function loadAchievements(accountId: string): Promise<AchievementReport> {
  return db.transaction(async tx => {
    await tx.select({ id: accounts.id }).from(accounts).where(eq(accounts.id, accountId)).for("update");
    return evaluateAchievementsFor(tx, accountId);
  });
}
