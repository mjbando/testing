// Shared client/server ranked constants and score math.
// Nothing here talks to the database; it is pure.

export const RANKED_ROUNDS = 10;
export const RANKED_LIVES = 2;
export const RANKED_SECONDS = 10;

export interface RankDef {
  name: string;
  at: number;
  color: string;
  glow: string;
}
export const RANKS: RankDef[] = [
  { name: "Bronze",   at: 0,    color: "#cd7f32", glow: "#cd7f3255" },
  { name: "Silver",   at: 250,  color: "#c0c0c0", glow: "#c0c0c055" },
  { name: "Gold",     at: 500,  color: "#ffd700", glow: "#ffd70055" },
  { name: "Platinum", at: 1000, color: "#67e8f9", glow: "#67e8f966" },
  { name: "Diamond",  at: 1500, color: "#a5f3fc", glow: "#a5f3fc77" },
  { name: "Champion", at: 2000, color: "#fb923c", glow: "#fb923c66" },
  { name: "Legend",   at: 3000, color: "#f0abfc", glow: "#f0abfc88" },
];

export function rankIndex(rating: number) {
  let index = 0;
  for (let i = 0; i < RANKS.length; i++) if (rating >= RANKS[i].at) index = i;
  return index;
}
export function rankFor(rating: number) {
  const idx = rankIndex(rating);
  const current = RANKS[idx];
  const next = RANKS[idx + 1] as RankDef | undefined;
  const progress = next ? (rating - current.at) / (next.at - current.at) : 1;
  return {
    index: idx,
    name: current.name,
    color: current.color,
    glow: current.glow,
    rating,
    nextAt: next?.at ?? null,
    nextName: next?.name ?? null,
    intoNext: next ? next.at - rating : 0,
    progress: Math.min(1, Math.max(0, progress)),
  };
}

export type Outcome = "win" | "lose" | "draw";

// Base values for a same-rank outcome.
const WIN_SAME = 30;
const LOSE_SAME = -15;
const DRAW = 10;
// Win values indexed by (your rank − opponent rank), clamped to ±3.
// Positive = you were the underdog and beat a higher-ranked opponent.
const WIN_BY_DIFF: Record<number, number> = { [-3]: 5, [-2]: 12, [-1]: 20, 0: 30, 1: 40, 2: 55, 3: 75 };
// Lose values indexed by (opponent rank − your rank); the more your opponent outmatches you,
// the less you lose. The lower your opponent is ranked, the more you lose.
const LOSE_BY_DIFF: Record<number, number> = { [-3]: -45, [-2]: -35, [-1]: -25, 0: -15, 1: -10, 2: -7, 3: -5 };
const clampedDiff = (a: number, b: number) => Math.max(-3, Math.min(3, a - b));

export interface OutcomeDelta {
  base: number;
  gap: number; // rating-tier adjustment applied on top of the base
  streakBonus: number;
  total: number;
  outcome: Outcome;
}

export function outcomeDelta(yourRating: number, opponentRating: number, outcome: Outcome, winStreakAfter: number): OutcomeDelta {
  const you = rankIndex(yourRating), opp = rankIndex(opponentRating);
  const diff = clampedDiff(opp, you); // >0 when opponent is more highly ranked

  let base: number;
  let gap = 0;
  if (outcome === "draw") {
    base = DRAW;
  } else if (outcome === "win") {
    base = WIN_SAME;
    gap = WIN_BY_DIFF[diff] - WIN_SAME;
  } else {
    base = LOSE_SAME;
    gap = LOSE_BY_DIFF[diff] - LOSE_SAME;
  }

  let streakBonus = 0;
  if (outcome === "win") {
    if (winStreakAfter >= 10) streakBonus = 50;
    else if (winStreakAfter >= 5) streakBonus = 20;
    else if (winStreakAfter >= 3) streakBonus = 10;
  }

  const gapBase = outcome === "draw" ? DRAW : (outcome === "win" ? WIN_BY_DIFF[diff] : LOSE_BY_DIFF[diff]);
  const total = gapBase + streakBonus;
  return { base: outcome === "draw" ? DRAW : base, gap, streakBonus, total, outcome };
}

export interface RankedRoundResult {
  round: number;
  you: { points: number; tier: string } | null;
  opponent: { points: number; tier: string } | null;
  outcome: "win" | "lose" | "draw";
  lifeLost: "you" | "opponent" | "none";
}

export interface RankedMatchRow {
  id: number;
  status: "active" | "done";
  winnerId: string | null; // null = not decided or draw
  draw: boolean;
  scoreYou: number;
  scoreOpponent: number;
  livesYou: number;
  livesOpponent: number;
  round: number; // index of the current round, RANKED_ROUNDS when finished
  totalRounds: number;
  closedRounds: number;
  ratingDeltaYou: number | null;
  ratingDeltaOpponent: number | null;
}
