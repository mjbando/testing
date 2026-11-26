import { and, desc, eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { accounts, bounties, bountyGains } from "@/db/schema";
import type { VoyageLeg } from "./voyage";

// Bounty formula: each correct answer earns a base amount, plus one bonus per
// point of journey traveled in that answer. Rare and epic runs are
// farther, and therefore worth more.
export const BASE_PER_CORRECT = 50;
export const BONUS_PER_POINT = 2;

export function bountyGain(legs: Pick<VoyageLeg, "tier" | "points">[]): number {
  return legs.reduce((sum, leg) => sum + (leg.tier ? BASE_PER_CORRECT + (leg.points ?? 0) * BONUS_PER_POINT : 0), 0);
}

export async function awardBounty(tx: any, accountId: string, day: string, gain: number): Promise<number> {
  if (gain <= 0) return 0;
  const inserted = await tx.insert(bountyGains).values({ accountId, dayKey: day, amount: gain })
    .onConflictDoNothing().returning({ dayKey: bountyGains.dayKey });
  if (!inserted.length) return 0; // this day is already credited to this account
  await tx.insert(bounties).values({ accountId, total: gain, lastDay: day, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: bounties.accountId,
      set: { total: sql`${bounties.total} + ${gain}`, lastDay: day, updatedAt: new Date() },
    });
  return gain;
}

// Top 50: highest total bounties. Ties break on the account that last gained
// earliest, then on username, so the board is stable and fair.
export async function bountyBoard(tx: any, ownerId: string | null, today: string) {
  const top = await tx
    .select({ accountId: accounts.id, username: accounts.username, total: bounties.total })
    .from(bounties)
    .innerJoin(accounts, eq(accounts.id, bounties.accountId))
    .orderBy(desc(bounties.total), bounties.lastDay, accounts.username)
    .limit(50);
  const ranked = top.map((row: { accountId: string; username: string; total: number }, i: number) => ({ rank: i + 1, username: row.username, total: row.total, isYou: row.accountId === ownerId }));
  let you = null;
  if (ownerId) {
    const [mine] = await tx.select({ total: bounties.total }).from(bounties).where(eq(bounties.accountId, ownerId)).limit(1);
    const total = mine?.total ?? 0;
    const [todayRow] = await tx.select({ amount: bountyGains.amount }).from(bountyGains)
      .where(and(eq(bountyGains.accountId, ownerId), eq(bountyGains.dayKey, today))).limit(1);
    const [higher] = await tx.select({ n: sql<number>`count(*)::int` }).from(bounties).where(sql`${bounties.total} > ${total}`);
    const [count] = await tx.select({ n: sql<number>`count(*)::int` }).from(bounties);
    you = { total, today: todayRow?.amount ?? 0, rank: (higher?.n ?? 0) + 1, count: count?.n ?? 0 };
  }
  return { top: ranked, you };
}
