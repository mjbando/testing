import type { CharacterId } from "@/data/playable-characters";
import type { EmblemKind } from "@/data/achievement-emblems";
import { LAUGH_TALE_AT } from "@/data/arcs";
import { DAILY_QUESTION_COUNT, MAX_POINTS } from "@/data/tiers";
import type { Progress } from "./voyage";

export interface AchievementDef {
  id: string;
  title: string;
  description: string;
  detail: string;
  emblem: EmblemKind;
  rewardCharacter: CharacterId;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: "first-voyage", title: "First Voyage", description: "Complete your first daily challenge.", detail: "Finish all seven questions, answered or timed out.", emblem: "first-voyage", rewardCharacter: "chopper" },
  { id: "perfect-run", title: "Perfect Run", description: "Answer all 7 questions correctly.", detail: "Every question solved in one daily voyage. Wrong guesses are allowed.", emblem: "perfect", rewardCharacter: "zoro" },
  { id: "no-mistakes", title: "No Mistakes", description: "Complete a voyage without a wrong answer.", detail: "Seven correct answers, zero rejected guesses and no timeouts.", emblem: "no-mistakes", rewardCharacter: "sanji" },
  { id: "daily-dedication", title: "Daily Dedication", description: "Play 7 days in a row.", detail: "Start a question on seven consecutive daily challenges. Days follow the game's Eastern reset.", emblem: "dedicated", rewardCharacter: "nami" },
  { id: "unstoppable", title: "Unstoppable", description: "Play 30 days in a row.", detail: "Start a question on thirty consecutive daily challenges. Earned badges never reset.", emblem: "unstoppable", rewardCharacter: "kaido" },
  { id: "rookie-pirate", title: "Rookie Pirate", description: "Complete 10 voyages.", detail: "Ten completed daily challenges; they don't have to be consecutive.", emblem: "rookie", rewardCharacter: "usopp" },
  { id: "rising-supernova", title: "Rising Supernova", description: "Score 90% or higher.", detail: "Earn at least 630 of the possible 700 points in a completed voyage.", emblem: "rising", rewardCharacter: "law" },
  { id: "yonko-status", title: "Yonko Status", description: "Beat 90% of players in a daily voyage.", detail: "Score strictly higher than at least 90% of the other players. Awarded after the daily leaderboard closes; ties are not wins.", emblem: "yonko", rewardCharacter: "whitebeard" },
  { id: "pirate-king", title: "Pirate King", description: "Finish #1 on the daily leaderboard.", detail: "Hold the highest score when the daily leaderboard closes. Tied winners share #1. At least one other player must finish.", emblem: "pirate-king", rewardCharacter: "roger" },
  { id: "encyclopedia", title: "Encyclopedia", description: "Answer 100 questions correctly.", detail: "Correct answers accumulate across your saved daily voyages, including the current one.", emblem: "encyclopedia", rewardCharacter: "robin" },
  { id: "grand-line-explorer", title: "Grand Line Explorer", description: "Complete 25 voyages.", detail: "Twenty-five completed daily challenges, consecutive or not.", emblem: "explorer", rewardCharacter: "jinbe" },
  { id: "deep-lore", title: "Deep Lore", description: "Correctly answer 50 niche questions.", detail: "Rare, Epic and One in a Luffillion answers count. Progress is cumulative.", emblem: "deep-lore", rewardCharacter: "rayleigh" },
  { id: "the-will-of-d", title: "The Will of D.", description: "Complete 100 daily voyages.", detail: "One hundred completed daily challenges. Every saved voyage counts once.", emblem: "will", rewardCharacter: "gear-5" },
  { id: "one-in-a-luffillion", title: "One in a Luffillion", description: "Get a One in a Luffillion answer.", detail: "Earn a 100-point pull. The badge is permanent; Luffy's gold hat lasts for that run.", emblem: "gold-hat", rewardCharacter: "ace" },
  { id: "laugh-tale", title: "Laugh Tale", description: "Make it to Laugh Tale.", detail: "Reach 500 points in a single voyage. Unlocks as soon as the score is saved.", emblem: "treasure", rewardCharacter: "shanks" },
];

export const RISING_SUPERNOVA_SCORE = Math.ceil(MAX_POINTS * 0.9);
export interface Standing {
  others: number;
  beaten: number;
  rank: number;
  finalized: boolean;
}
export interface RunLike {
  dayKey: string;
  score: number;
  solved: number;
  niche?: number | null;
  mistakes?: number | null;
  legs?: { tier: string | null }[] | null;
  // Calculated from the day's actual scores, never a client-provided percentile.
  standing?: Standing;
}
export interface AchievementStatus extends AchievementDef {
  unlocked: boolean;
  unlockedAt: string | null;
  progress: number;
  target: number;
  progressLabel: string;
}
export interface AchievementReport {
  achievements: AchievementStatus[];
  newlyUnlocked: string[];
}

export function bestStreak(days: string[]): number {
  const ordered = [...new Set(days)].filter(day => /^\d{4}-\d{2}-\d{2}$/.test(day)).sort();
  let best = 0, length = 0, previous = -Infinity;
  for (const day of ordered) {
    const time = Date.parse(`${day}T12:00:00Z`);
    if (!Number.isFinite(time)) continue;
    length = time - previous === 86400000 ? length + 1 : 1;
    best = Math.max(best, length);
    previous = time;
  }
  return best;
}

export const isNiche = (tier: string | null | undefined) => tier === "rare" || tier === "epic" || tier === "luffillion";

/** Wrong guesses, including repeats. Null means the old record has no reliable attempt history. */
export function countMistakes(p: Progress): number | null {
  let total = 0;
  for (let i = 0; i < DAILY_QUESTION_COUNT; i++) {
    const state = p.q[i];
    if (!state || !state.status || !Number.isInteger(state.attempts) || state.attempts < (state.status === "solved" ? 1 : 0)) return null;
    total += Math.max(state.wrong.length, state.attempts - (state.status === "solved" ? 1 : 0));
  }
  return total;
}

/** Pure evaluation: completed voyages count once; checkpoints can advance answer/participation badges. */
export function evaluateAchievements(
  rows: RunLike[],
  existing: Map<string, Date>,
  checkpoints: Progress[] = [],
): AchievementReport {
  const complete = [...new Map(rows.map(row => [row.dayKey, row])).values()];
  const finishedDays = new Set(complete.map(row => row.dayKey));
  const active = [...new Map(checkpoints.filter(p => !finishedDays.has(p.day)).map(p => [p.day, p])).values()];
  const played = active.filter(p => Object.values(p.q).some(q => q.started || q.status));
  const streak = bestStreak([...finishedDays, ...played.map(p => p.day)]);
  const successes = active.flatMap(p => Object.values(p.q).filter(q => q.status === "solved"));
  const totalCorrect = complete.reduce((sum, r) => sum + r.solved, 0) + successes.length;
  const totalNiche = complete.reduce((sum, r) => sum + (r.legs ? r.legs.filter(l => isNiche(l.tier)).length : r.niche ?? 0), 0)
    + successes.filter(q => isNiche(q.tier)).length;
  const bestSolved = complete.reduce((n, r) => Math.max(n, r.solved), 0);
  const bestScore = complete.reduce((n, r) => Math.max(n, r.score), 0);
  const currentBest = active.reduce((best, p) => Math.max(best, Object.values(p.q).reduce((n, q) => n + (q.status === "solved" ? q.points ?? 0 : 0), 0)), bestScore);
  const flawless = complete.some(r => r.solved === DAILY_QUESTION_COUNT && r.mistakes === 0);
  const hasLuff = successes.some(q => q.tier === "luffillion") || complete.some(r => r.legs?.some(l => l.tier === "luffillion"));
  const competitive = complete.filter(r => r.standing?.finalized && r.standing.others > 0);
  const bestBeat = competitive.reduce((n, r) => Math.max(n, 100 * r.standing!.beaten / r.standing!.others), 0);
  const king = competitive.some(r => r.score > 0 && r.standing!.rank === 1);
  const waiting = complete.some(r => r.standing && !r.standing.finalized);
  const leagueLabel = waiting ? "Today's leaderboard closes at the daily reset" : "Complete a voyage with other players";
  const goals: Record<string, { n: number; target: number; label: string }> = {
    "first-voyage": { n: complete.length, target: 1, label: `${complete.length} completed` },
    "perfect-run": { n: bestSolved, target: 7, label: `${bestSolved} / 7 correct in your best voyage` },
    "no-mistakes": { n: flawless ? 1 : 0, target: 1, label: flawless ? "Seven correct, no wrong guesses" : "Finish all 7 without a wrong guess" },
    "daily-dedication": { n: streak, target: 7, label: `${streak} / 7 consecutive days` },
    "unstoppable": { n: streak, target: 30, label: `${streak} / 30 consecutive days` },
    "rookie-pirate": { n: complete.length, target: 10, label: `${complete.length} / 10 voyages` },
    "rising-supernova": { n: bestScore, target: RISING_SUPERNOVA_SCORE, label: `${bestScore} / ${RISING_SUPERNOVA_SCORE} points` },
    "yonko-status": { n: bestBeat, target: 90, label: competitive.length ? `${Math.floor(bestBeat * 10) / 10}% beaten · target 90%` : leagueLabel },
    "pirate-king": { n: king ? 1 : 0, target: 1, label: king ? "#1 on a closed daily leaderboard" : leagueLabel },
    "encyclopedia": { n: totalCorrect, target: 100, label: `${totalCorrect} / 100 correct answers` },
    "grand-line-explorer": { n: complete.length, target: 25, label: `${complete.length} / 25 voyages` },
    "deep-lore": { n: totalNiche, target: 50, label: `${totalNiche} / 50 Rare-or-better answers` },
    "the-will-of-d": { n: complete.length, target: 100, label: `${complete.length} / 100 voyages` },
    "one-in-a-luffillion": { n: hasLuff ? 1 : 0, target: 1, label: hasLuff ? "100-point pull found" : "Find a 100-point answer" },
    "laugh-tale": { n: currentBest, target: LAUGH_TALE_AT, label: `${currentBest} / ${LAUGH_TALE_AT} points in one voyage` },
  };
  const achievements = ACHIEVEMENTS.map(def => {
    const goal = goals[def.id];
    const unlockedAt = existing.get(def.id);
    const unlocked = !!unlockedAt || goal.n >= goal.target;
    return { ...def, unlocked, unlockedAt: unlockedAt?.toISOString() ?? null,
      progress: unlocked ? goal.target : Math.min(goal.n, goal.target), target: goal.target, progressLabel: goal.label };
  });
  return { achievements, newlyUnlocked: achievements.filter(a => a.unlocked && !existing.has(a.id)).map(a => a.id) };
}
