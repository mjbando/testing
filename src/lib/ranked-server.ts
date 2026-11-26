import { and, asc, eq, isNull, not, sql } from "drizzle-orm";
import { db } from "@/db";
import { accounts, adventureProgress, bounties, rankedMatches, rankedPlayers, rankedQueue } from "@/db/schema";
import { QUESTION_SECONDS, TIER_CONFIG, DAILY_QUESTION_COUNT } from "@/data/tiers";
import { checkGuess, getQuestionById } from "@/lib/daily";
import { QUESTION_BANK } from "@/data/questions";
import { adventureTitle } from "@/data/adventure/levels";
import { rankFor, outcomeDelta, type Outcome, type OutcomeDelta } from "@/lib/ranked";
import { equippedCharacterFor } from "@/lib/crew-server";
import { RequestProblem } from "@/lib/account-server";

export const RANKED_ROUNDS = DAILY_QUESTION_COUNT; // 7 rounds per match — same format as a daily voyage
export const RANKED_SECONDS = QUESTION_SECONDS;
export const RANKED_LIVES = 2;
export const MATCHMAKING_RATING_GAP = 1000;
const MAX_EXPIRY_MS = 45 * 60 * 1000;

interface RankedRow { accountId: string; rating: number; wins: number; losses: number; draws: number; streak: number; bestStreak: number }

// Identity + progression shared by the lobby and the battle screen.
export interface PlayerCard {
  id: string;
  username: string;
  title: string;
  character: string;
  rank: ReturnType<typeof rankFor>;
  bounty: number;
  rating: number;
  wins: number;
  losses: number;
  draws: number;
  streak: number;
  bestStreak: number;
}

async function playerCard(tx: any, accountId: string): Promise<PlayerCard & { character: string }> {
  const [account] = await tx.select({ id: accounts.id, username: accounts.username }).from(accounts).where(eq(accounts.id, accountId)).limit(1);
  if (!account) throw new RequestProblem(401, "Sign in to play Ranked.");
  const [ranked] = await tx.select().from(rankedPlayers).where(eq(rankedPlayers.accountId, accountId)).limit(1);
  const [bounty] = await tx.select({ total: bounties.total }).from(bounties).where(eq(bounties.accountId, accountId)).limit(1);
  const [adventure] = await tx.select({ completed: adventureProgress.completed }).from(adventureProgress).where(eq(adventureProgress.accountId, accountId)).limit(1);
  const character = await equippedCharacterFor(accountId);
  const rating = ranked?.rating ?? 0;
  return {
    id: account.id as string,
    username: account.username as string,
    title: adventure?.completed ? adventureTitle(adventure.completed) : "Aspiring Pirate",
    character,
    rank: rankFor(rating),
    bounty: bounty?.total ?? 0,
    rating,
    wins: ranked?.wins ?? 0,
    losses: ranked?.losses ?? 0,
    draws: ranked?.draws ?? 0,
    streak: ranked?.streak ?? 0,
    bestStreak: ranked?.bestStreak ?? 0,
  };
}

export async function rankedProfile(accountId: string) {
  return db.transaction(tx => playerCard(tx, accountId));
}

// ---------- Queue + pairing ----------
export async function enterQueue(accountId: string): Promise<{ opponentFound: boolean }> {
  // Lock the captain row and abandon any stale queue entry.
  const myRating = await db.transaction(async tx => {
    await tx.select({ id: accounts.id }).from(accounts).where(eq(accounts.id, accountId)).for("update");
    await tx.delete(rankedQueue).where(eq(rankedQueue.accountId, accountId));
    const [ranked] = await tx.select({ rating: rankedPlayers.rating }).from(rankedPlayers).where(eq(rankedPlayers.accountId, accountId)).limit(1);
    await tx.insert(rankedPlayers).values({ accountId, rating: ranked?.rating ?? 0 }).onConflictDoNothing();
    await tx.insert(rankedQueue).values({ accountId }).onConflictDoNothing();
    return ranked?.rating ?? 0;
  });

  const candidates = await db
    .select({ accountId: rankedQueue.accountId, joinedAt: rankedQueue.joinedAt, rating: rankedPlayers.rating })
    .from(rankedQueue)
    .leftJoin(rankedPlayers, eq(rankedPlayers.accountId, rankedQueue.accountId))
    .where(not(eq(rankedQueue.accountId, accountId)))
    .orderBy(asc(rankedQueue.joinedAt))
    .limit(20);

  const preferred = candidates.filter(c => Math.abs((c.rating ?? 0) - myRating) <= MATCHMAKING_RATING_GAP);
  const pickList = preferred.length ? preferred : candidates;
  const opponent = pickList[0];
  if (!opponent) return { opponentFound: false };

  return db.transaction(async tx => {
    // Atomically claim the opponent (or whoever got there first).
    const [opTaken] = await tx.delete(rankedQueue).where(eq(rankedQueue.accountId, opponent.accountId)).returning();
    if (!opTaken) return { opponentFound: false };
    const [meTaken] = await tx.delete(rankedQueue).where(eq(rankedQueue.accountId, accountId)).returning();
    if (!meTaken) {
      await tx.insert(rankedQueue).values({ accountId: opponent.accountId }).onConflictDoNothing();
      return { opponentFound: false };
    }
    // 7 random questions, exactly like a voyage.
    const qIds = [...QUESTION_BANK].sort(() => Math.random() - 0.5).slice(0, RANKED_ROUNDS).map(q => q.id);
    const [created] = await tx.insert(rankedMatches).values({
      accountA: accountId,
      accountB: opponent.accountId,
      ratingA: myRating,
      ratingB: opponent.rating ?? 0,
      index: 0,
      livesA: RANKED_LIVES,
      livesB: RANKED_LIVES,
      scoreA: 0,
      scoreB: 0,
      state: { rounds: { questionIds: qIds, livesA: RANKED_LIVES, livesB: RANKED_LIVES, scoreA: 0, scoreB: 0, startedAt: Date.now(), answersA: {}, answersB: {}, closed: [], ratingA: null, ratingB: null, deltaA: null, deltaB: null, streakAfterA: 0, streakAfterB: 0 } },
    }).returning({ id: rankedMatches.id });
    return { opponentFound: true, matchId: created.id } as never;
  });
}

export async function cancelQueue(accountId: string) {
  await db.delete(rankedQueue).where(eq(rankedQueue.accountId, accountId));
}

export async function queueSize() {
  const [opponent] = await db.select({ n: sql<number>`count(*)::int` }).from(rankedQueue);
  return opponent?.n ?? 0;
}

// ---------- Match view for the browser ----------
export interface RankedMatchView {
  id: number;
  me: PlayerCard;
  opponent: PlayerCard;
  round: number;
  totalRounds: number;
  secondsLeft: number;
  remainingMs: number;
  livesYou: number;
  livesOpponent: number;
  scoreYou: number;
  scoreOpponent: number;
  answeredYou: boolean;
  answeredOpponent: boolean;
  question: { id: string; prompt: string; hint: string } | null;
  roundResult: { you: { answered: boolean; points: number; tier: string } | null; opponent: { answered: boolean; points: number; tier: string } | null; verdict: "win" | "lose" | "draw" | null } | null;
  done: boolean;
  result: { you: "win" | "lose" | "draw"; delta: OutcomeDelta; opponentDelta: OutcomeDelta; oldRating: number; newRating: number; streak: number } | null;
}
function secondsLeft(startedAt: number, now = Date.now()) {
  const ms = Math.max(0, RANKED_SECONDS * 1000 - (now - startedAt));
  return { ms, sec: Math.ceil(ms / 1000) };
}

async function loadFor(tx: any, accountId: string, matchId?: number | null) {
  const where = matchId
    ? and(eq(rankedMatches.id, matchId), sql`(${rankedMatches.accountA} = ${accountId} OR ${rankedMatches.accountB} = ${accountId})`)
    : and(eq(rankedMatches.status, "active"), sql`(${rankedMatches.accountA} = ${accountId} OR ${rankedMatches.accountB} = ${accountId})`);
  const [row] = await tx.select().from(rankedMatches).where(where).limit(1);
  return row ?? null;
}

export async function matchView(accountId: string, matchId?: number | null): Promise<RankedMatchView | null> {
  return db.transaction(async tx => {
    const match = await loadFor(tx, accountId, matchId);
    if (!match) return null;
    const latest = await settleMatchIfNeeded(tx, match);
    return buildView(tx, latest, accountId);
  });
}

async function buildView(tx: any, match: any, accountId: string): Promise<RankedMatchView> {
  const aIsMe = match.accountA === accountId;
  const meId = aIsMe ? match.accountA : match.accountB;
  const opId = aIsMe ? match.accountB : match.accountA;
  const me = await playerCard(tx, meId), opponent = await playerCard(tx, opId);
  const s = match.state.rounds;
  const myA = aIsMe ? s.answersA : s.answersB;
  const opA = aIsMe ? s.answersB : s.answersA;
  const done = match.status === "done";
  const cur = done ? s.questionIds.length : s.closed.length;
  const rem = secondsLeft(s.startedAt);
  const qId = !done && cur < s.questionIds.length ? s.questionIds[cur] : null;
  const q = qId ? getQuestionById(qId) : null;
  const youRating = match.state.rounds.ratingA == null ? me.rating : (aIsMe ? match.state.rounds.ratingA : match.state.rounds.ratingB);
  const opRating = match.state.rounds.ratingB == null ? opponent.rating : (aIsMe ? match.state.rounds.ratingB : match.state.rounds.ratingA);
  const oldRatingYou = aIsMe ? match.ratingA : match.ratingB;
  const newRatingYou = match.state.rounds.ratingA ?? oldRatingYou;
  const newRatingOpponent = match.state.rounds.ratingB ?? (aIsMe ? match.ratingB : match.ratingA);
  const myDelta = done ? (aIsMe ? match.state.rounds.deltaA! : match.state.rounds.deltaB!) : 0;
  const opDelta = done ? (aIsMe ? match.state.rounds.deltaB! : match.state.rounds.deltaA!) : 0;
  const myOutcome: Outcome = done ? (match.draw ? "draw" : match.winner === meId ? "win" : "lose") : "draw";
  const opOutcome: Outcome = done ? (match.draw ? "draw" : match.winner === opId ? "win" : "lose") : "draw";
  void youRating; void opRating;
  return {
    id: match.id, me, opponent,
    round: cur, totalRounds: s.questionIds.length,
    secondsLeft: rem.sec, remainingMs: rem.ms,
    livesYou: aIsMe ? s.livesA : s.livesB,
    livesOpponent: aIsMe ? s.livesB : s.livesA,
    scoreYou: aIsMe ? s.scoreA : s.scoreB,
    scoreOpponent: aIsMe ? s.scoreB : s.scoreA,
    answeredYou: !!myA[cur], answeredOpponent: !!opA[cur],
    question: q ? { id: q.id, prompt: q.prompt, hint: q.hint } : null,
    roundResult: done || cur > 0
      ? { you: myA[cur - 1] ? { answered: true, points: myA[cur - 1].points, tier: myA[cur - 1].tier ?? "common" } : { answered: false, points: 0, tier: "common" },
          opponent: opA[cur - 1] ? { answered: true, points: opA[cur - 1].points, tier: opA[cur - 1].tier ?? "common" } : { answered: false, points: 0, tier: "common" },
          verdict: (() => { const a = myA[cur - 1]?.points ?? 0, b = opA[cur - 1]?.points ?? 0; return a > b ? "win" : a < b ? "lose" : "draw"; })() }
      : null,
    done,
    result: done
      ? { you: myOutcome, delta: outcomeDelta(oldRatingYou, aIsMe ? match.ratingB : match.ratingA, myOutcome, rankedStreak(aIsMe ? match.state.rounds.streakAfterA : match.state.rounds.streakAfterB)), opponentDelta: outcomeDelta(aIsMe ? match.ratingB : match.ratingA, oldRatingYou, opOutcome, rankedStreak(aIsMe ? match.state.rounds.streakAfterB : match.state.rounds.streakAfterA)), oldRating: oldRatingYou, newRating: newRatingYou, streak: rankedStreak(aIsMe ? match.state.rounds.streakAfterA : match.state.rounds.streakAfterB) }
      : null,
  };
}
const rankedStreak = (s: number) => s; // state carries streak after the finish

// ---------- Round resolution ----------
async function settleMatchIfNeeded(tx: any, match: any): Promise<any> {
  const s = match.state.rounds;
  if (match.status === "done") return match;
  const now = Date.now();
  const created = new Date(match.createdAt).getTime();
  const cur = s.closed.length;

  // Forfeit / resolve expired or contested round one at a time.
  const advance = async () => {
    const myA = s.answersA[cur], opB = s.answersB[cur];
    const expired = now - s.startedAt >= RANKED_SECONDS * 1000;
    if (!(myA && opB) && !expired) return match; // round still live
    const aPts = myA?.points ?? 0, bPts = opB?.points ?? 0;
    if (aPts < bPts) s.livesA -= 1; else if (bPts < aPts) s.livesB -= 1;
    s.scoreA += aPts; s.scoreB += bPts;
    s.closed = [...s.closed, cur];
    s.startedAt = now; // shared 10s clock restarts for the next round
    if (s.livesA <= 0 || s.livesB <= 0 || cur + 1 >= s.questionIds.length) {
      return finishMatchLocked(tx, match);
    }
    const [updated] = await tx.update(rankedMatches).set({
      state: { ...match.state, rounds: { ...s } },
      index: s.closed.length, livesA: s.livesA, livesB: s.livesB, scoreA: s.scoreA, scoreB: s.scoreB,
    }).where(eq(rankedMatches.id, match.id)).returning();
    return updated;
  };
  let current = match;
  // In poll-driven mode we resolve at most one round per call; a fast pass will catch up on later polls.
  current = await advance();
  return current;
}

async function finishMatchLocked(tx: any, match: any) {
  const s = match.state.rounds;
  const aId = match.accountA as string, bId = match.accountB as string;
  await tx.insert(rankedPlayers).values({ accountId: aId, rating: match.ratingA }).onConflictDoNothing();
  await tx.insert(rankedPlayers).values({ accountId: bId, rating: match.ratingB }).onConflictDoNothing();
  const [pA] = await tx.select().from(rankedPlayers).where(eq(rankedPlayers.accountId, aId)).limit(1);
  const [pB] = await tx.select().from(rankedPlayers).where(eq(rankedPlayers.accountId, bId)).limit(1);
  const aDone = s.livesA <= 0, bDone = s.livesB <= 0;
  let winner: string | null = null;
  let draw = false;
  if (aDone && bDone) draw = true;
  else if (aDone) winner = bId;
  else if (bDone) winner = aId;
  else if (s.scoreA > s.scoreB) winner = aId;
  else if (s.scoreB > s.scoreA) winner = bId;
  else draw = true; // equal score, equal lives, max rounds

  const outcomeA: Outcome = draw ? "draw" : winner === aId ? "win" : "lose";
  const outcomeB: Outcome = draw ? "draw" : winner === bId ? "win" : "lose";
  const aStreak = outcomeA === "win" ? (pA?.streak ?? 0) + 1 : outcomeA === "lose" ? 0 : pA?.streak ?? 0;
  const bStreak = outcomeB === "win" ? (pB?.streak ?? 0) + 1 : outcomeB === "lose" ? 0 : pB?.streak ?? 0;
  const ratingA = pA?.rating ?? match.ratingA, ratingB = pB?.rating ?? match.ratingB;
  const dA = outcomeDelta(ratingA, ratingB, outcomeA, aStreak);
  const dB = outcomeDelta(ratingB, ratingA, outcomeB, bStreak);
  const newA = Math.max(0, ratingA + dA.total);
  const newB = Math.max(0, ratingB + dB.total);

  await tx.update(rankedPlayers).set({
    rating: newA,
    wins: (pA?.wins ?? 0) + (outcomeA === "win" ? 1 : 0),
    losses: (pA?.losses ?? 0) + (outcomeA === "lose" ? 1 : 0),
    draws: (pA?.draws ?? 0) + (outcomeA === "draw" ? 1 : 0),
    streak: aStreak, bestStreak: Math.max(pA?.bestStreak ?? 0, aStreak),
    lastMatchId: match.id, updatedAt: new Date(),
  }).where(eq(rankedPlayers.accountId, aId));
  await tx.update(rankedPlayers).set({
    rating: newB,
    wins: (pB?.wins ?? 0) + (outcomeB === "win" ? 1 : 0),
    losses: (pB?.losses ?? 0) + (outcomeB === "lose" ? 1 : 0),
    draws: (pB?.draws ?? 0) + (outcomeB === "draw" ? 1 : 0),
    streak: bStreak, bestStreak: Math.max(pB?.bestStreak ?? 0, bStreak),
    lastMatchId: match.id, updatedAt: new Date(),
  }).where(eq(rankedPlayers.accountId, bId));

  const [updated] = await tx.update(rankedMatches).set({
    status: "done",
    winner,
    draw,
    deltaA: dA.total,
    deltaB: dB.total,
    index: s.questionIds.length,
    livesA: s.livesA,
    livesB: s.livesB,
    scoreA: s.scoreA,
    scoreB: s.scoreB,
    state: { ...match.state, rounds: { ...s, ratingA: newA, ratingB: newB, deltaA: dA.total, deltaB: dB.total, streakAfterA: aStreak, streakAfterB: bStreak } },
    finishedAt: new Date(),
  }).where(eq(rankedMatches.id, match.id)).returning();
  return updated;
}

// ---------- Answers ----------
export async function answerRanked(accountId: string, matchId: number, guess: string) {
  return db.transaction(async tx => {
    const match = await loadFor(tx, accountId, matchId);
    if (!match) throw new RequestProblem(404, "That match is not in your log.");
    if (match.status !== "active") throw new RequestProblem(400, "This match has ended.");
    const s = { ...match.state.rounds };
    const cur = s.closed.length;
    if (cur >= s.questionIds.length) return { ok: true, view: await buildView(tx, match, accountId) };
    const aIsMe = match.accountA === accountId;
    const already = aIsMe ? s.answersA[cur] : s.answersB[cur];
    if (already) return { ok: true, view: await buildView(tx, match, accountId) };
    const question = getQuestionById(s.questionIds[cur]);
    if (!question) throw new RequestProblem(500, "Round question is missing.");
    const trimmed = typeof guess === "string" ? guess.trim().slice(0, 80) : "";
    const matched = trimmed ? checkGuess(question, trimmed) : null;
    const entry = { points: matched ? TIER_CONFIG[matched.tier!].points : 0, tier: matched?.tier ?? "common", at: Date.now() };
    if (aIsMe) s.answersA = { ...s.answersA, [cur]: entry }; else s.answersB = { ...s.answersB, [cur]: entry };
    await tx.update(rankedMatches).set({ state: { ...match.state, rounds: s } }).where(eq(rankedMatches.id, match.id));
    const settled = await settleMatchIfNeeded(tx, { ...match, state: { ...match.state, rounds: s } });
    return { ok: true, view: await buildView(tx, settled, accountId) };
  });
}

// Used by the daily preparation guard: is this account currently in a live battle?
