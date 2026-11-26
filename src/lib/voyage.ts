import { sagaAt, travelFor } from "@/data/arcs";
import { DAILY_QUESTION_COUNT, type Tier } from "@/data/tiers";

export interface Captain { id: string; username: string }
export interface QState {
  started?: number;
  status?: "solved" | "expired";
  tier?: Tier;
  points?: number;
  answer?: string;
  attempts: number;
  wrong: string[];
}
export interface Progress {
  day: string;
  ids?: string[];
  q: Record<number, QState>;
  runs: { questionIndex: number; tier: Tier; points: number; arc: string }[];
}
export interface VoyageLeg {
  questionId: string;
  prompt: string;
  answer: string | null;
  tier: Tier | null;
  points: number;
}
export interface FinishedVoyage {
  day: string;
  score: number;
  solved: number;
  // Older, anonymous score records predate per-question recaps.
  legs: VoyageLeg[] | null;
  niche?: number | null;
  mistakes?: number | null;
  beat?: number | null;
  rank?: number | null;
}
export interface VoyageHistory {
  voyages: FinishedVoyage[];
  nextBefore: string | null;
  summary: { count: number; best: number; average: number };
}

export function firstOpen(p: Progress): number {
  for (let i = 0; i < DAILY_QUESTION_COUNT; i++) if (!p.q[i]?.status) return i;
  return DAILY_QUESTION_COUNT;
}

export function fromQuestions(day: string, ids: string[], q: Progress["q"]): Progress {
  const runs: Progress["runs"] = [];
  let distance = 0;
  for (let i = 0; i < ids.length; i++) {
    const state = q[i];
    if (state?.status === "solved" && state.tier && typeof state.points === "number") {
      distance += travelFor(state.points);
      runs.push({ questionIndex: i, tier: state.tier, points: state.points, arc: sagaAt(distance).name });
    }
  }
  return { day, ids, q, runs };
}

// Keep the first settled answer, and never start an active question's clock again.
export function mergeProgress(saved: Progress, incoming: Progress): Progress {
  if (saved.day !== incoming.day || saved.ids?.join() !== incoming.ids?.join()) return saved;
  const q: Progress["q"] = {};
  for (let i = 0; i < DAILY_QUESTION_COUNT; i++) {
    const a = saved.q[i], b = incoming.q[i];
    if (!a && !b) break;
    if (a?.status || !b) q[i] = a;
    else if (!a) q[i] = b;
    else q[i] = {
      ...b,
      started: a.started && b.started ? Math.min(a.started, b.started) : a.started ?? b.started,
      // A pending state's attempts are rejected guesses. Settling it on another
      // device cannot erase those guesses or move the start time forward.
      attempts: Math.max(a.attempts + (b.status === "solved" ? 1 : 0), b.attempts),
      wrong: [...new Set([...b.wrong, ...a.wrong])].slice(0, 40),
    };
    if (!q[i].status) break;
  }
  return fromQuestions(saved.day, saved.ids ?? [], q);
}

export function fromRecap(run: FinishedVoyage): Progress | null {
  if (!run.legs || run.legs.length !== DAILY_QUESTION_COUNT) return null;
  const q: Progress["q"] = {};
  run.legs.forEach((leg, i) => {
    q[i] = leg.answer && leg.tier
      ? { status: "solved", answer: leg.answer, tier: leg.tier, points: leg.points, attempts: 1, wrong: [] }
      : { status: "expired", points: 0, attempts: 0, wrong: [] };
  });
  return fromQuestions(run.day, run.legs.map((leg) => leg.questionId), q);
}
