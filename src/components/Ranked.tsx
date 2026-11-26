"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import CharacterPortrait from "./CharacterPortrait";
import PixelEmblem from "./pixel-emblems";
import { playClick, playWrong, playPull, playAchievement, playNext, playSetSail, startRunSound, playTick, playTimeout, playWrong as playWrongNope } from "@/lib/sound";
import type { Tier } from "@/data/tiers";
import type { CharacterId } from "@/data/playable-characters";
import type { Outcome, OutcomeDelta, RankDef } from "@/lib/ranked";
import { RANKED_LIVES, RANKED_ROUNDS, RANKED_SECONDS, RANKS, rankFor } from "@/lib/ranked";

interface PlayerCard {
  id: string;
  username: string;
  title: string;
  character: string;
  rank: NonNullable<Awaited<ReturnType<typeof rankFor>>> & { name: string; color: string; glow: string; nextAt: number | null; nextName: string | null; progress: number; rating: number };
  bounty: number;
  rating: number;
  wins: number;
  losses: number;
  draws: number;
  streak: number;
  bestStreak: number;
}
export interface RankedView {
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
  roundResult: { you: { answered: boolean; points: number; tier: string }; opponent: { answered: boolean; points: number; tier: string }; verdict: "win" | "lose" | "draw" | null } | null;
  done: boolean;
  result: { you: Outcome; delta: OutcomeDelta; opponentDelta: OutcomeDelta; oldRating: number; newRating: number; streak: number } | null;
}
interface LobbyData {
  captain: PlayerCard | null;
  activeMatch: RankedView | null;
}
type LobbyState = "idle" | "searching" | "matched";

const TIER_BY_LABEL: Record<string, Tier> = { common: "common", uncommon: "uncommon", rare: "rare", epic: "epic", luffillion: "luffillion" };

function Heart({ filled, cracked }: { filled: boolean; cracked?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-block leading-none">
      {filled ? (
        <svg width="22" height="22" viewBox="0 0 16 16">
          <path fill="#e0303a" d="M8 13c-4.5-3.5-7-5.5-7-9 0-2.2 1.7-3.5 3.4-3.5 1.4 0 2.7.9 3.6 1.9 1-1 2.2-1.9 3.6-1.9C13.3.5 15 2 15 4c0 3.5-2.5 5.5-7 9z" stroke="#5b0b12" strokeWidth="1"/>
          {cracked && <path stroke="#5b0b12" strokeWidth="1" d="M8 3l-1 3 2 2-1 3" />}
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 16 16">
          <path fill="#2a3447" d="M8 13c-4.5-3.5-7-5.5-7-9 0-2.2 1.7-3.5 3.4-3.5 1.4 0 2.7.9 3.6 1.9 1-1 2.2-1.9 3.6-1.9C13.3.5 15 2 15 4c0 3.5-2.5 5.5-7 9z" stroke="#141a25" strokeWidth="1"/>
        </svg>
      )}
    </span>
  );
}

function RankBadge({ rank, size = 28 }: { rank: PlayerCard["rank"]; size?: number }) {
  const label = rank.name.toUpperCase();
  return (
    <span className="inline-flex flex-col items-center" aria-label={`${rank.name}, ${rank.rating} rating`}>
      <span
        className="grid place-items-center rounded-sm border border-black/30"
        style={{ width: size, height: size, background: `radial-gradient(circle at 45% 40%, ${rank.color}, ${rank.glow})`, boxShadow: "0 2px 0 rgba(0,0,0,0.45)" }}
      >
        <svg width={size - 8} height={size - 8} viewBox="0 0 16 16">
          <path fill="#0b1020" d="M8 1l6 2v5c0 4-3 7-6 8-3-1-6-4-6-8V3l6-2z" />
          <path fill={rank.color} d="M8 3l4 1.3v4.2c0 2.8-2.2 5-4 5.7-1.8-.8-4-3-4-5.7V4.3L8 3z" opacity="0.55" />
          <path fill="#ffffff" opacity="0.85" d="M8 5.5l-1 4 1 1 1-1-1-4z" />
        </svg>
      </span>
      <span className="mt-1 text-xs tracking-widest" style={{ color: rank.color }}>{label}</span>
    </span>
  );
}

function TierProgress({ rank }: { rank: PlayerCard["rank"] }) {
  if (rank.nextAt == null) return <p className="text-sm text-amber-300">Legend — the pinnacle.</p>;
  return (
    <div>
      <div className="flex justify-between text-xs tracking-widest text-slate-400">
        <span>{rank.name.toUpperCase()}</span>
        <span>{rank.rating} → {rank.nextAt}</span>
        <span>{rank.nextName?.toUpperCase()}</span>
      </div>
      <div className="mt-1 h-2.5 w-full border border-white/10 bg-[#0f1a2e]">
        <div className="h-full transition-[width] duration-500" style={{ width: `${rank.progress * 100}%`, background: rank.color }} />
      </div>
    </div>
  );
}

export default function Ranked() {
  const [data, setData] = useState<{ captain: PlayerCard | null; activeMatch: RankedView | null } | null>(null);
  const [lobby, setLobby] = useState<LobbyState>("idle");
  const [searching, setSearching] = useState(0);
  const [guess, setGuess] = useState("");
  const [busy, setBusy] = useState(false);
  const [answerError, setAnswerError] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(RANKED_SECONDS);
  const audioUnlocked = useRef(false);

  const fetchLobby = useCallback(async () => {
    try {
      const res = await fetch("/api/ranked", { cache: "no-store" });
      const json = await res.json();
      setData(json);
    } catch {
      // keep stale data, retry on next tick
    }
  }, []);

  useEffect(() => {
    setMuted(typeof window !== "undefined" && localStorage.getItem("luffillion:muted") === "1");
    fetchLobby();
  }, [fetchLobby]);

  const match = data?.activeMatch ?? null;
  useEffect(() => {
    if (match) { setLobby("matched"); setAnswerError(null); }
    else setLobby("idle");
  }, [match?.id]);

  const secondsLeftRef = useRef(secondsLeft);
  useEffect(() => {
    secondsLeftRef.current = secondsLeft;
  }, [secondsLeft]);

  // Poll for match updates and handle countdown locally
  useEffect(() => {
    if (!match) return undefined;
    let cancelled = false;
    const pump = async () => {
      try {
        const res = await fetch(`/api/ranked/match?matchId=${match.id}`, { cache: "no-store" });
        const json = await res.json();
        if (!cancelled && json.activeMatch) {
          setData((prev) => (prev ? { ...prev, activeMatch: json.activeMatch } : prev));
        }
      } catch {
        // ignore transient errors, retry on next tick
      }
    };
    const id = setInterval(pump, 400);
    pump();
    return () => { cancelled = true; clearInterval(id); };
  }, [match?.id]);

  // 10s ring countdown each round, aligned with the server clock.
  useEffect(() => {
    if (!match) { setSecondsLeft(RANKED_SECONDS); return undefined; }
    if (match.done) return undefined;
    // If our clock is ahead of the server view (poll latency), gently align.
    setSecondsLeft((prev) => {
      if (secondsLeftRef.current === prev) return secondsLeftRef.current;
      return secondsLeftRef.current > match.secondsLeft ? match.secondsLeft : secondsLeftRef.current;
    });
    const base = Math.max(0, match.secondsLeft);
    setSecondsLeft(base);
    const id = setInterval(() => setSecondsLeft((prev) => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(id);
  }, [match?.round, match?.secondsLeft, match?.done]);

  // Low-time ticks
  useEffect(() => {
    if (secondsLeft === 3 || secondsLeft === 2 || secondsLeft === 1) playTick(true);
  }, [secondsLeft]);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    localStorage.setItem("luffillion:muted", next ? "1" : "0");
    if (!next) playClick();
  }

  async function startSearch() {
    if (busy) return;
    if (!data?.captain) return;
    playSetSail();
    setBusy(true);
    setLobby("searching");
    try {
      const res = await fetch("/api/ranked", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "search" }),
      });
      const json = await res.json();
      if (json.state === "matched" && json.match) {
        setData(json.match ? { captain: json.match.me, activeMatch: json.match } : null);
      } else {
        setSearching(1);
      }
    } catch {
      setLobby("idle");
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    if (lobby !== "searching") return undefined;
    let cancelled = false;
    const pump = async () => {
      try {
        const res = await fetch("/api/ranked", { cache: "no-store" });
        const json = await res.json();
        if (!cancelled) {
          setData(json);
          if (json.activeMatch) setLobby("matched");
        }
      } catch {
        // retry
      }
    };
    const id = setInterval(pump, 700);
    const started = Date.now();
    return () => { cancelled = true; clearInterval(id); };
  }, [lobby]);

  async function cancelSearch() {
    playClick();
    setBusy(true);
    try {
      await fetch("/api/ranked", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "cancel" }) });
      setLobby("idle");
    } finally {
      setBusy(false);
    }
  }

  async function submitAnswer(e: FormEvent) {
    e.preventDefault();
    if (!match || busy || !guess.trim() || match.done || secondsLeft === 0) return;
    setBusy(true);
    setAnswerError(null);
    try {
      const res = await fetch("/api/ranked", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matchId: match.id, guess: guess.trim() }),
      });
      const json = await res.json();
      if (json.match) setData((prev) => ({ ...(prev ?? { captain: match.me }), activeMatch: json.match, captain: json.match.me }));
      setGuess("");
    } catch (err) {
      setAnswerError(err instanceof Error ? err.message : "Answer not submitted.");
    } finally {
      setBusy(false);
      (document.querySelector("#ranked-answer") as HTMLInputElement | null)?.focus();
    }
  }

  if (!data) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#05070f] text-amber-200">
        <p className="animate-pulse">Loading ranked…</p>
      </main>
    );
  }

  // ---------- Battle screen ----------
  if (match) {
    const me = match.me, opponent = match.opponent;
    const done = match.done;
    // Prefer server-aligned countdown; show 0 when matched server clock expires.
    const sec = secondsLeft;
    const lowTime = sec <= 3 && !done;
    return (
      <main className="fixed inset-0 z-40 overflow-hidden bg-[#05070f] text-slate-100">
        {/* Battle backdrop */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-1/4 top-1/3 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-fuchsia-400/10 blur-3xl" />
        </div>

        {/* Header bar */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-3 backdrop-blur">
          <Link href="/" className="text-sm tracking-widest text-cyan-200 hover:text-cyan-100">← MAIN MENU</Link>
          <p className="text-xs tracking-[0.3em] text-slate-400">RANKED BATTLE · RESETTING AT 12 AM EST</p>
          <button type="button" onClick={toggleMute} className="border border-white/10 bg-black/40 px-2 py-1 text-lg" aria-label={muted ? "Unmute" : "Mute"}>{muted ? "🔇" : "🔊"}</button>
        </header>

        {/* VS HUD */}
        <div className="relative z-10 mx-auto mt-4 flex max-w-5xl items-stretch gap-3 px-3">
          {/* You */}
          <div className="flex items-center gap-3 border border-cyan-300/40 bg-cyan-400/5 px-3 py-2">
            <CharacterPortrait characterId={me.character as CharacterId} size={80} dim={false} />
            <div>
              <p className="text-xs tracking-widest text-cyan-300">YOU</p>
              <p className="font-pixel-display text-lg text-white">{me.username}</p>
              <p className="text-sm text-slate-400">{me.title}</p>
              <div className="mt-1 flex items-center gap-2">
                <RankBadge rank={me.rank} size={22} />
                <p className="text-sm text-amber-300">
                  {me.bounty} <span className="text-slate-500">bounty</span>
                </p>
              </div>
              <div className="mt-1 flex items-center gap-1" aria-label={`Your ${match.livesYou} lives`}>
                {Array.from({ length: RANKED_LIVES }).map((_, i) => <Heart key={i} filled={i < match.livesYou} />)}
              </div>
            </div>
            <div className="ml-4 flex flex-col items-end">
              <p className="text-4xl font-pixel-display text-cyan-300">{match.scoreYou}</p>
              <p className="text-xs text-slate-400">points</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-1">
            <span className="font-pixel-display text-4xl text-amber-300" style={{ textShadow: "2px 2px 0 #3a2500" }}>VS</span>
            <span className="mt-1 text-xs tracking-widest text-slate-500">{match.round + (done ? 0 : 1)}/{match.totalRounds}</span>
          </div>

          {/* Opponent */}
          <div className="flex items-center gap-3 border border-fuchsia-300/40 bg-fuchsia-400/5 px-3 py-2">
            <div className="mr-2 flex flex-col items-end">
              <p className="text-4xl font-pixel-display text-fuchsia-300">{match.scoreOpponent}</p>
              <p className="text-xs text-slate-400">points</p>
            </div>
            <CharacterPortrait characterId={opponent.character as CharacterId} size={80} dim={false} />
            <div>
              <p className="text-xs tracking-widest text-fuchsia-300">OPPONENT</p>
              <p className="font-pixel-display text-lg text-white">{opponent.username}</p>
              <p className="text-sm text-slate-400">{opponent.title}</p>
              <div className="mt-1 flex items-center gap-2">
                <RankBadge rank={opponent.rank} size={22} />
                <p className="text-sm text-amber-300">{opponent.bounty} <span className="text-slate-500">bounty</span></p>
              </div>
              <div className="mt-1 flex items-center gap-1" aria-label={`Opponent ${match.livesOpponent} lives`}>
                {Array.from({ length: RANKED_LIVES }).map((_, i) => <Heart key={i} filled={i < match.livesOpponent} cracked />)}
              </div>
            </div>
          </div>
        </div>

        {/* Question + answers */}
        {!match.done && match.question && (
          <section className="relative z-10 mx-auto mt-6 w-full max-w-3xl px-3">
            <div className="pixel-box border-2 border-amber-300/50 bg-[#0c1626] px-5 py-4 shadow-[0_0_30px_rgba(218,182,35,0.15)]">
              <div className="flex items-center justify-between text-xs tracking-widest text-slate-400">
                <span>ROUND {match.round + 1} OF {match.totalRounds}</span>
                <div className="flex items-center gap-2"><span className={lowTime ? "text-red-400" : "text-green-300"}>{sec}s</span>
                  <div className="h-2 w-28 border border-white/10 bg-[#141a2e]"><div className={`h-full transition-[width] duration-1000 ${lowTime ? "bg-red-500" : "bg-green-400"}`} style={{ width: `${(sec / RANKED_SECONDS) * 100}%` }} /></div>
                </div>
              </div>
              <h1 className="mt-2 font-pixel-display text-2xl leading-snug text-slate-50">{match.question.prompt}</h1>
              <p className="mt-1 text-sm text-slate-400">{match.question.hint}</p>
              <form onSubmit={submitAnswer} className="mt-4 flex gap-2">
                <input
                  id="ranked-answer"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  disabled={busy || match.answeredYou || secondsLeft === 0}
                  placeholder={match.answeredYou ? "Locked in…" : "Type your answer…"}
                  aria-label="Your answer"
                  className="h-12 flex-1 border-2 border-cyan-300/60 bg-[#0a1220] px-4 font-pixel text-xl tracking-wide text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-200 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={busy || match.answeredYou || !guess.trim() || secondsLeft === 0}
                  className="h-12 border-2 border-amber-300/70 bg-amber-400 px-6 font-pixel-display text-xl tracking-widest text-amber-950 shadow-[0_4px_0_#3a2500] transition hover:bg-amber-300 disabled:opacity-50"
                >LOCK IN</button>
              </form>
              {answerError && <p role="alert" className="mt-2 text-sm text-rose-300">{answerError}</p>}
            </div>
          </section>
        )}
        {match.done && match.result && (
          <section className="relative z-10 mx-auto mt-6 w-full max-w-3xl px-3">
            <div className="pixel-box border-2 border-amber-300/50 bg-[#0c1626] px-6 py-5 text-center">
              <p className="text-sm tracking-[0.4em] text-amber-300">{match.result.you === "win" ? "VICTORY" : match.result.you === "lose" ? "DEFEAT" : "DRAW"}</p>
              <h2 className="mt-1 font-pixel-display text-4xl text-white">{match.result.you === "win" ? "Rival crushed!" : match.result.you === "lose" ? "Outsailed this time." : "A battle evenly matched."}</h2>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="border border-white/10 bg-[#101a2c] p-2"><p className="text-slate-400">Rating change</p><p className={`font-pixel-display text-3xl ${match.result.delta.total >= 0 ? "text-green-300" : "text-rose-300"}`}>{match.result.delta.total >= 0 ? `+${match.result.delta.total}` : match.result.delta.total}</p></div>
                <div className="border border-white/10 bg-[#101a2c] p-2"><p className="text-slate-400">New rating</p><p className="font-pixel-display text-3xl text-white">{match.result.newRating}</p></div>
                <div className="border border-white/10 bg-[#101a2c] p-2"><p className="text-slate-400">Best streak</p><p className="font-pixel-display text-3xl text-white">{match.me.bestStreak}</p></div>
              </div>
              <div className="mt-3 border border-white/10 bg-[#101a2c] p-3 text-left text-sm text-slate-300">
                <div className="flex justify-between"><span>Base</span><span>{match.result.delta.base >= 0 ? `+${match.result.delta.base}` : match.result.delta.base}</span></div>
                <div className="flex justify-between"><span>Strength gap</span><span>{match.result.delta.gap >= 0 ? `+${match.result.delta.gap}` : match.result.delta.gap}</span></div>
                <div className="flex justify-between"><span>Streak bonus</span><span>+{match.result.delta.streakBonus}</span></div>
                <div className="flex justify-between border-t border-white/10 pt-1 mt-1 text-amber-300"><span>Total</span><span>{match.result.delta.total >= 0 ? `+${match.result.delta.total}` : match.result.delta.total}</span></div>
              </div>
              <p className="mt-3 text-sm text-slate-400">Current streak: {match.result.streak} win{match.result.streak === 1 ? "" : "s"}</p>
              <TierProgress rank={match.me.rank} />
              <div className="mt-4 flex justify-center gap-3">
                <button onClick={async () => { playNext(); setBusy(true); await fetch("/api/ranked", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "search" }) }).catch(() => undefined); setData((prev) => prev ? { ...prev, activeMatch: null, captain: null } : prev); setLobby("idle"); setBusy(false); }} className="pixel-btn bg-amber-400 px-4 py-2 text-amber-950 hover:bg-amber-300">SEARCH AGAIN</button>
                <Link href="/" onClick={() => playClick()} className="pixel-btn border border-white/20 bg-[#172033] px-4 py-2 text-slate-200 hover:text-white">MAIN MENU</Link>
              </div>
            </div>
          </section>
        )}

        {/* Opponent answer flash (show while you answered but opponent hasn't yet) */}
        {match.answeredYou && !match.answeredOpponent && !match.done && (
          <p className="relative z-10 mx-auto mt-4 w-fit border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">Your move locked in. Waiting for {opponent.username}…</p>
        )}
        {match.roundResult && !match.done && (
          <section className="relative z-10 mx-auto mt-4 w-fit border border-white/15 bg-black/60 px-4 py-2 text-center backdrop-blur">
            <p className="text-xs tracking-widest text-slate-400">ROUND {match.round} RESULT</p>
            <p className="mt-1 text-xl">{match.roundResult.you.points > match.roundResult.opponent.points ? <span className="text-amber-300">Round won!</span> : match.roundResult.you.points < match.roundResult.opponent.points ? <span className="text-rose-300">Round lost.</span> : <span className="text-slate-300">Round drawn.</span>}</p>
            <p className="text-sm text-slate-400">You {match.roundResult.you.points} pt · {opponent.username} {match.roundResult.opponent.points} pt</p>
          </section>
        )}
      </main>
    );
  }

  // ---------- Out-of-match states ----------
  const captain = data.captain;
  if (!captain) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#05070f] px-6 text-center text-slate-300">
        <div className="max-w-md">
          <p className="text-5xl">🏆</p>
          <h1 className="mt-3 font-pixel-display text-3xl">RANKED BATTLE</h1>
          <p className="mt-2">A 10-second-per-question, 2-life niche-knowledge showdown against another captain. Sign in to climb the ladder from Bronze to Legend.</p>
          <Link href="/" className="mt-4 inline-block border-2 border-amber-300/60 bg-amber-400 px-5 py-2 font-pixel-display text-lg text-amber-950 hover:bg-amber-300">SIGN IN FROM MAIN MENU →</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#05070f] text-slate-100">
      <div className="w-full max-w-3xl border border-white/10 bg-gradient-to-br from-[#0c1626] to-[#131b2d] p-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <RankBadge rank={captain.rank} size={72} />
          <div>
            <h1 className="font-pixel-display text-4xl text-white">{captain.username}</h1>
            <p className="mt-1 text-slate-400">{captain.title}</p>
          </div>
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="border border-white/10 bg-[#101a2c] p-2"><p className="text-xs text-slate-400">BOUNTY</p><p className="font-pixel-display text-2xl text-amber-300">{captain.bounty}</p></div>
            <div className="border border-white/10 bg-[#101a2c] p-2"><p className="text-xs text-slate-400">RATING</p><p className="font-pixel-display text-2xl text-white">{captain.rating}</p></div>
            <div className="border border-white/10 bg-[#101a2c] p-2"><p className="text-xs text-slate-400">WIN / LOSS / DRAW</p><p className="font-pixel-display text-lg text-slate-200">{captain.wins}W · {captain.losses}L · {captain.draws}D</p></div>
            <div className="border border-white/10 bg-[#101a2c] p-2"><p className="text-xs text-slate-400">BEST STREAK</p><p className="font-pixel-display text-2xl text-fuchsia-300">{captain.bestStreak}</p></div>
          </div>
          <TierProgress rank={captain.rank} />
        </div>
        <p className="mt-4 text-center text-sm text-slate-500">10 seconds per question. Two lives each. Lower score per round loses a life.</p>

        {lobby === "searching" ? (
          <div className="mt-5 flex flex-col items-center gap-3">
            <div className="search-radar" aria-label="Searching for opponent" />
            <p className="text-lg text-amber-300">Searching for an opponent…</p>
            <p className="text-sm text-slate-400">Matching up with a captain with a similar rating.</p>
            <button type="button" onClick={cancelSearch} className="pixel-btn border border-white/20 bg-[#172033] px-4 py-2 text-slate-200 hover:text-white">CANCEL SEARCH</button>
          </div>
        ) : (
          <div className="mt-5 flex flex-col items-center gap-3">
            <button onClick={startSearch} className="pixel-btn bg-amber-400 px-8 py-4 font-pixel-display text-3xl tracking-widest text-amber-950 shadow-[0_6px_0_#3a2500] transition hover:bg-amber-300">SEARCH FOR MATCH</button>
            <p className="text-xs text-slate-500">Winning against a stronger opponent earns more points. Losing to a weaker one costs more.</p>
          </div>
        )}

        <Link href="/" className="mt-6 block text-center text-sm text-slate-500 hover:text-slate-300">← Back to the daily voyage</Link>
      </div>
    </main>
  );
}
