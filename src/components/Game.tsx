"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { SAGAS, sagaAt, travelFor } from "@/data/arcs";
import { characterById, DEFAULT_CHARACTER, isCharacterId, type CharacterId } from "@/data/playable-characters";
import {
  DAILY_QUESTION_COUNT,
  MAX_POINTS,
  QUESTION_SECONDS,
  TIER_CONFIG,
  TIER_LABELS,
  TIER_ORDER,
  type Tier,
} from "@/data/tiers";
import PixelWorld, { type RunSignal, type WorldStatus } from "./PixelWorld";
import Effects from "./Effects";
import CaptainLog, { LogIcon } from "./CaptainLog";
import BountiesPanel from "./BountiesPanel";
import MenuPanel, { type MenuTab } from "./MenuPanel";
import AchievementsPanel from "./AchievementsPanel";
import ArchivePanel from "./ArchivePanel";
import AchievementToast from "./AchievementToast";
import LockedAchievements from "./LockedAchievements";
import { ACHIEVEMENTS, countMistakes, type AchievementDef } from "@/lib/achievements";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { firstOpen, fromRecap, mergeProgress, type Captain, type FinishedVoyage, type Progress, type QState } from "@/lib/voyage";
import { cacheRun, checkpointBody, clearCaptainCache, clearLinkedGuest, readLocalRun, voyageRequest } from "@/lib/voyage-client";
import {
  isMuted,
  playClick,
  playNext,
  playPull,
  playSaga,
  playSetSail,
  playSuggest,
  playTick,
  playTimeout,
  playWrong,
  setMuted,
} from "@/lib/sound";

interface DailyQuestion {
  index: number;
  id: string;
  prompt: string;
  hint: string;
  counts: Record<Tier, number>;
}

interface DailyResponse {
  day: string;
  captain: Captain | null;
  equippedCharacter: CharacterId;
  newlyUnlocked?: string[];
  finished: FinishedVoyage | null;
  checkpoint: Progress | null;
  nextRunInMs: number;
  questions: DailyQuestion[];
  seconds: number;
  maxPoints: number;
  serverNow: number;
}

interface RevealItem {
  name: string;
  points: number;
  found: number;
}

interface Reveal {
  total: number;
  totalFound: number;
  tiers: Record<Tier, RevealItem[]>;
}

const EMPTY_Q: QState = { attempts: 0, wrong: [] };
const LIMIT_MS = QUESTION_SECONDS * 1000;
interface RunStats {
  day: string;
  total: number;
  average: number;
  top: number;
  binSize: number;
  bins: { from: number; to: number; count: number }[];
  you: { score: number; solved: number; beat: number; rank: number } | null;
}

export default function Game() {
  const [daily, setDaily] = useState<DailyResponse | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [viewIndex, setViewIndex] = useState(0);
  const [reveals, setReveals] = useState<Record<number, Reveal>>({});
  const [now, setNow] = useState(0);
  const [guess, setGuess] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<{ q: number; name: string; typed: string } | null>(null);
  const [fx, setFx] = useState<{ id: number; tier: Tier } | null>(null);
  const [runSignal, setRunSignal] = useState<RunSignal | null>(null);
  const [initialPos, setInitialPos] = useState(0);
  const [sagaBanner, setSagaBanner] = useState<{ id: number; saga: number } | null>(null);
  const lastSaga = useRef<number | null>(null);
  const [nopeOn, setNopeOn] = useState(false);
  const [copied, setCopied] = useState(false);
  const [world, setWorld] = useState<WorldStatus>({ pct: 0, arc: "East Blue", saga: 0, running: false });
  const [menuTab, setMenuTab] = useState<MenuTab | null>(null);
  const [lockedAchievementsOpen, setLockedAchievementsOpen] = useState(false);
  const [unlockedToast, setUnlockedToast] = useState<AchievementDef[]>([]);
  const [achievementRevision, setAchievementRevision] = useState(0);
  const [equippedCharacter, setEquippedCharacter] = useState<CharacterId>(DEFAULT_CHARACTER);
  const announcedAwards = useRef(new Set<string>());
  const awardOwner = useRef<string | null>(null);
  const returnToMenu = useRef<MenuTab | null>(null);
  const [nextRunAt, setNextRunAt] = useState(0);
  const [showCountdown, setShowCountdown] = useState(true);
  const [stats, setStats] = useState<RunStats | null>(null);
  const [muted, setMutedState] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const scopeVersion = useRef(0);
  const revealLoading = useRef(new Set<number>());
  const nopeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const lastTickRef = useRef<string>("");

  useEffect(() => {
    setMutedState(isMuted());
  }, []);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    if (!next) playClick();
  }

  const queueUnlocks = useCallback((ids: string[]) => {
    const fresh = [...new Set(ids)].filter(id => !announcedAwards.current.has(id));
    const badges = fresh.map(id => ACHIEVEMENTS.find(a => a.id === id)).filter((a): a is AchievementDef => !!a);
    if (!badges.length) return;
    badges.forEach(badge => announcedAwards.current.add(badge.id));
    setUnlockedToast(previous => [...previous, ...badges]);
  }, []);
  const dismissUnlock = useCallback(() => setUnlockedToast(previous => previous.slice(1)), []);
  const handleEquip = useCallback((id: CharacterId, accountId: string) => {
    if (awardOwner.current !== accountId || !isCharacterId(id)) return;
    setEquippedCharacter(id);
  }, []);

  // Hydrate the session and its save together, before enabling any timer or write.
  const loadRun = useCallback(async (expectedCaptain?: string | null) => {
    const version = ++scopeVersion.current;
    const d = await voyageRequest<DailyResponse>("/api/daily");
    if (version !== scopeVersion.current) return;
    if (expectedCaptain !== undefined && (d.captain?.id ?? null) !== expectedCaptain) {
      throw new Error("The session cookie wasn't available. Allow site cookies and try again.");
    }
    const ids = d.questions.map(q => q.id);
    const local = readLocalRun(d.day, ids, d.captain?.id);
    let p: Progress = local ?? { day: d.day, ids, q: {}, runs: [] };
    if (d.checkpoint) p = mergeProgress(d.checkpoint, p);
    if (d.finished) p = fromRecap(d.finished) ?? p;
    const complete = !!d.finished || firstOpen(p) >= DAILY_QUESTION_COUNT;
    revealLoading.current.clear();
    setReveals({}); setGuess(""); setMessage(null); setSuggestion(null); setBusy(false);
    setMenuTab(null);
    setUnlockedToast([]); setLockedAchievementsOpen(false);
    if (awardOwner.current !== (d.captain?.id ?? null)) {
      announcedAwards.current.clear(); awardOwner.current = d.captain?.id ?? null;
    }
    setRunSignal(null); setFx(null); setSagaBanner(null); setCopied(false);
    lastSaga.current = null; finishedLive.current = complete;
    setSaveMessage(""); setStats(null); setLoadError(null);
    setNextRunAt(Date.now() + d.nextRunInMs); setShowCountdown(complete);
    setDaily(d); setProgress(p); setViewIndex(complete ? DAILY_QUESTION_COUNT : firstOpen(p));
    setEquippedCharacter(d.captain && isCharacterId(d.equippedCharacter) ? d.equippedCharacter : DEFAULT_CHARACTER);
    setInitialPos(d.finished?.score ?? p.runs.reduce((sum, r) => sum + travelFor(r.points), 0));
    setNow(Date.now());
    if (d.captain) queueUnlocks(d.newlyUnlocked ?? []);
    setAchievementRevision(n => n + 1);
  }, [queueUnlocks]);

  function openAccount() { playClick(); setMenuTab(null); setAccountOpen(true); }
  function openAccountForMenu(tab: MenuTab) { playClick(); returnToMenu.current = tab; setMenuTab(null); setAccountOpen(true); }
  async function sessionChanged(captain: Captain | null, linkedGuest: boolean) {
    const previous = daily?.captain?.id;
    await loadRun(captain?.id ?? null);
    if (captain && returnToMenu.current) {
      const target = returnToMenu.current;
      returnToMenu.current = null;
      setAccountOpen(false); setMenuTab(target);
    }
    if (previous && previous !== captain?.id) clearCaptainCache(previous);
    if (linkedGuest && daily) clearLinkedGuest(daily.day);
    try { localStorage.setItem("luffillion:session-changed", String(Date.now())); } catch { /* Optional tab notification. */ }
  }

  const activeCaptainId = daily?.captain?.id;
  useEffect(() => {
    const refreshSession = (event: StorageEvent) => {
      if (event.key !== "luffillion:session-changed") return;
      if (activeCaptainId) clearCaptainCache(activeCaptainId);
      setAccountOpen(false); setDaily(null); setProgress(null); setStats(null);
      loadRun().catch(() => setLoadError("Your session changed. Refresh to reopen the game."));
    };
    window.addEventListener("storage", refreshSession);
    return () => window.removeEventListener("storage", refreshSession);
  }, [activeCaptainId, loadRun]);

  useEffect(() => {
    loadRun().catch(() => setLoadError("Could not load today's run. Please refresh."));
  }, [loadRun]);

  // Finishing live: let the finale run + effects play, then show the countdown.
  const finishedLive = useRef(false);
  useEffect(() => {
    if (!progress || firstOpen(progress) < DAILY_QUESTION_COUNT || showCountdown || finishedLive.current) return;
    finishedLive.current = true;
    const id = setTimeout(() => setShowCountdown(true), 5000);
    return () => clearTimeout(id);
  }, [progress, showCountdown]);

  // When the countdown reaches zero, the next day's run loads automatically.
  useEffect(() => {
    if (nextRunAt && now >= nextRunAt) {
      setNextRunAt(0);
      loadRun().catch(() => setMessage("Could not load the new run. Please refresh."));
    }
  }, [now, nextRunAt, loadRun]);

  const runDone = !!daily?.finished || (!!progress && firstOpen(progress) >= DAILY_QUESTION_COUNT);

  // First completion is immutable on the server. A restored run only fetches stats.
  useEffect(() => {
    if (!runDone || !progress || !daily) return;
    let live = true;
    let retry: ReturnType<typeof setTimeout>;
    const version = scopeVersion.current;
    const current = () => live && scopeVersion.current === version;
    const save = async () => {
      try {
        const accountId = daily.captain?.id ?? null;
        const answers = daily.questions.map((_, i) => progress.q[i]?.answer ?? "");
        const mistakes = countMistakes(progress);
        // Backfill old guest score-only recaps if the browser still has the answers.
        const backfill = daily.finished && !daily.finished.legs && firstOpen(progress) === DAILY_QUESTION_COUNT;
        const data = !daily.finished || backfill
          ? await voyageRequest<RunStats & { finished?: FinishedVoyage; newlyUnlocked?: string[] }>("/api/run", "POST", { accountId, day: progress.day, answers, mistakes })
          : await voyageRequest<RunStats & { finished?: FinishedVoyage; newlyUnlocked?: string[] }>(`/api/run?day=${progress.day}`);
        if (!current()) return;
        if (!data.you) throw new Error("Your session changed. Reload the game to reconnect.");
        if (data.finished?.legs?.some((leg, i) => (leg.answer ?? "") !== answers[i])) {
          await loadRun(accountId); // Another device finished first.
          return;
        }
        setStats(data); setSaveMessage(daily.captain ? "✓ Voyage saved to your Captain's Log." : "");
        if (daily.captain) queueUnlocks(data.newlyUnlocked ?? []);
        setAchievementRevision(n => n + 1);
      } catch (e) {
        if (!current()) return;
        setSaveMessage(e instanceof Error ? e.message : "Couldn't save your score. Retrying…");
        retry = setTimeout(save, 8000);
      }
    };
    void save();
    return () => { live = false; clearTimeout(retry); };
  }, [runDone, progress, daily, loadRun, queueUnlocks]);

  useEffect(() => {
    if (!runDone || !showCountdown || !daily) return;
    let live = true;
    const refresh = () => voyageRequest<RunStats>(`/api/run?day=${daily.day}`)
      .then(d => { if (live && d.you) setStats(d); }).catch(() => undefined);
    const id = setInterval(refresh, 30000);
    return () => { live = false; clearInterval(id); };
  }, [runDone, showCountdown, daily]);

  // Guest saves remain on this device. Captain saves are also checkpointed to Postgres.
  useEffect(() => {
    if (!progress || !daily) return;
    const accountId = daily.captain?.id;
    cacheRun(progress, accountId);
    if (!accountId || runDone || !Object.keys(progress.q).length) return;
    let live = true;
    let retry: ReturnType<typeof setTimeout>;
    const version = scopeVersion.current;
    const current = () => live && version === scopeVersion.current;
    const sync = async () => {
      try {
        setSaveMessage("Saving checkpoint…");
        const saved = await voyageRequest<{ complete: boolean; progress: Progress | null; newlyUnlocked?: string[] }>("/api/account/progress", "PUT", {
          accountId, progress: checkpointBody(progress),
        });
        if (!current()) return;
        if (saved.complete) { await loadRun(accountId); return; }
        if (saved.progress && Object.entries(saved.progress.q).some(([i, v]) => {
          const local = progress.q[Number(i)];
          return !local || v.started !== local.started || v.status !== local.status || v.answer !== local.answer || v.attempts !== local.attempts;
        })) {
          setProgress(saved.progress);
          setViewIndex(firstOpen(saved.progress));
        }
        setSaveMessage("✓ Checkpoint saved. Your timer follows you across devices.");
        queueUnlocks(saved.newlyUnlocked ?? []);
        setAchievementRevision(n => n + 1);
      } catch (e) {
        if (!current()) return;
        setSaveMessage(e instanceof Error ? e.message : "Checkpoint not synced. Retrying…");
        retry = setTimeout(sync, 6000);
      }
    };
    void sync();
    return () => { live = false; clearTimeout(retry); };
  }, [daily, progress, runDone, loadRun, queueUnlocks]);

  // Clock tick for the countdown.
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(id);
  }, []);

  const activeIndex = runDone ? DAILY_QUESTION_COUNT : progress ? firstOpen(progress) : 0;
  const allDone = progress ? activeIndex >= DAILY_QUESTION_COUNT : false;

  // Time out the active question.
  useEffect(() => {
    if (!progress || activeIndex >= DAILY_QUESTION_COUNT) return;
    const st = progress.q[activeIndex];
    if (st?.started && !st.status && now - st.started >= LIMIT_MS) {
      playTimeout();
      setProgress((p) =>
        p
          ? {
              ...p,
              q: { ...p.q, [activeIndex]: { ...(p.q[activeIndex] ?? EMPTY_Q), status: "expired", points: 0 } },
            }
          : p,
      );
      // Last question timed out: still give Luffy his closing victory run.
      if (activeIndex === DAILY_QUESTION_COUNT - 1) {
        const pos = progress.runs.reduce((sum, r) => sum + travelFor(r.points), 0);
        setRunSignal({ id: Date.now(), to: pos, ms: 2600, tier: null, final: true });
      }
    }
  }, [now, progress, activeIndex]);

  // Answer lists stay hidden until all 7 questions are over, then load for the recap.
  useEffect(() => {
    if (!progress || !daily) return;
    if (!runDone) return;
    const version = scopeVersion.current;
    for (let i = 0; i < DAILY_QUESTION_COUNT; i++) {
      if (!reveals[i] && !revealLoading.current.has(i)) {
        revealLoading.current.add(i);
        fetch(`/api/reveal?q=${encodeURIComponent(daily.questions[i].id)}`)
          .then((r) => r.json())
          .then((data: Reveal & { error?: string }) => {
            if (version === scopeVersion.current && !data.error) setReveals((prev) => ({ ...prev, [i]: data }));
          })
          .catch(() => undefined)
          .finally(() => { if (version === scopeVersion.current) revealLoading.current.delete(i); });
      }
    }
  }, [progress, daily, reveals, runDone]);

  const question = daily?.questions[viewIndex];
  const qs: QState = progress?.q[viewIndex] ?? EMPTY_Q;
  const isActive = viewIndex === activeIndex && !allDone;
  const waitingToStart = isActive && !qs.started;
  const timerRunning = isActive && Boolean(qs.started) && !qs.status;
  const remainingMs = qs.started && !qs.status ? Math.max(0, LIMIT_MS - (now - qs.started)) : LIMIT_MS;
  const remainingSec = Math.ceil(remainingMs / 1000);
  const totalScore = daily?.finished?.score ?? (progress
    ? Object.values(progress.q).reduce((sum, q) => sum + (q?.status === "solved" ? q.points ?? 0 : 0), 0)
    : 0);
  const journeyPos = daily?.finished?.score ?? (progress ? progress.runs.reduce((sum, r) => sum + travelFor(r.points), 0) : 0);
  const activeCharacter = characterById(equippedCharacter);
  const hasGoldHat = Boolean(
    daily?.finished?.legs?.some((leg) => leg.tier === "luffillion") ||
      (progress &&
        (Object.values(progress.q).some((st) => st?.status === "solved" && st.tier === "luffillion") ||
          progress.runs.some((r) => r.tier === "luffillion"))),
  );

  useEffect(() => {
    if (timerRunning) inputRef.current?.focus();
  }, [timerRunning, viewIndex]);

  // Subtle countdown ticks in the final 5 seconds of a question.
  useEffect(() => {
    if (!timerRunning || remainingSec > 5 || remainingSec < 1) return;
    const key = `${viewIndex}:${remainingSec}`;
    if (lastTickRef.current === key) return;
    lastTickRef.current = key;
    playTick(remainingSec <= 3);
  }, [timerRunning, remainingSec, viewIndex]);

  function handleWorld(status: WorldStatus) {
    setWorld(status);
    if (lastSaga.current === null) {
      lastSaga.current = status.saga;
      return;
    }
    if (status.saga !== lastSaga.current) {
      lastSaga.current = status.saga;
      if (status.saga > 0) {
        playSaga();
        setSagaBanner({ id: Date.now(), saga: status.saga });
      }
    }
  }

  function triggerNope() {
    setNopeOn(true);
    if (nopeTimer.current) clearTimeout(nopeTimer.current);
    nopeTimer.current = setTimeout(() => setNopeOn(false), 450);
  }

  function submitGuess(e: FormEvent) {
    e.preventDefault();
    if (!guess.trim()) return;
    playClick();
    void sendGuess(guess.trim());
  }

  function acceptSuggestion() {
    if (!suggestion || suggestion.q !== viewIndex) return;
    playSuggest();
    void sendGuess(suggestion.name);
  }

  async function sendGuess(text: string) {
    if (!daily || !progress || busy || !isActive) return;
    if (!text || !qs.started || qs.status) return;
    if (Date.now() - qs.started >= LIMIT_MS) return;

    const version = scopeVersion.current;
    setBusy(true);
    setMessage(null);
    setSuggestion(null);
    try {
      const res = await fetch("/api/guess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: daily.questions[viewIndex].id, guess: text }),
      });
      const data = await res.json();
      if (version !== scopeVersion.current) return;
      if (!res.ok) {
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      if (data.correct) {
        const tier = data.tier as Tier;
        const points = data.points as number;
        const newTotal = journeyPos + travelFor(points);
        const arc = sagaAt(newTotal).name;
        const stamp = Date.now();
        setProgress((p) =>
          p
            ? {
                ...p,
                q: {
                  ...p.q,
                  [viewIndex]: {
                    ...qs,
                    attempts: qs.attempts + 1,
                    status: "solved",
                    tier,
                    points,
                    answer: data.name as string,
                  },
                },
                runs: [...p.runs, { questionIndex: viewIndex, tier, points, arc }],
              }
            : p,
        );
        playPull(tier);
        setRunSignal({
          id: stamp,
          to: newTotal,
          ms: TIER_CONFIG[tier].runMs,
          tier,
          final: viewIndex === DAILY_QUESTION_COUNT - 1,
        });
        setFx({ id: stamp, tier });
        setGuess("");
      } else {
        playWrong();
        const wrong = qs.wrong.some((w) => w.toLowerCase() === text.toLowerCase()) ? qs.wrong : [text, ...qs.wrong];
        setProgress((p) =>
          p
            ? {
                ...p,
                q: { ...p.q, [viewIndex]: { ...qs, attempts: qs.attempts + 1, wrong } },
              }
            : p,
        );
        triggerNope();
        setGuess("");
        if (typeof data.suggestion === "string" && data.suggestion) {
          setSuggestion({ q: viewIndex, name: data.suggestion, typed: text });
        }
      }
    } catch {
      if (version === scopeVersion.current) setMessage("Network hiccup. Try again.");
    } finally {
      if (version === scopeVersion.current) setBusy(false);
    }
  }

  function startActiveQuestion() {
    playSetSail();
    const stamp = Date.now();
    setNow(stamp);
    setSuggestion(null);
    setMessage(null);
    setGuess("");
    setViewIndex(activeIndex);
    setProgress((p) => {
      if (!p || activeIndex >= DAILY_QUESTION_COUNT || p.q[activeIndex]?.started) return p;
      return {
        ...p,
        q: {
          ...p.q,
          [activeIndex]: { ...(p.q[activeIndex] ?? EMPTY_Q), started: stamp },
        },
      };
    });
  }

  function nextQuestion() {
    playNext();
    const target = viewIndex + 1 < activeIndex ? activeIndex : viewIndex + 1;
    const stamp = Date.now();
    setNow(stamp);
    setSuggestion(null);
    setMessage(null);
    setGuess("");
    setViewIndex(target);
    if (target === activeIndex && target < DAILY_QUESTION_COUNT) {
      setProgress((p) => {
        if (!p || p.q[target]?.started) return p;
        return {
          ...p,
          q: {
            ...p.q,
            [target]: { ...(p.q[target] ?? EMPTY_Q), started: stamp },
          },
        };
      });
    }
  }

  function shareResults() {
    playClick();
    if (!progress || !daily) return;
    const grid = daily.questions
      .map((_, i) => {
        const st = progress.q[i];
        return st?.status === "solved" && st.tier ? TIER_CONFIG[st.tier].emoji : "⬛";
      })
      .join("");
    const beat = stats?.you && stats.total > 1 ? `\nBeat ${stats.you.beat}% of players` : "";
    const result = daily.finished && !daily.finished.legs && firstOpen(progress) < DAILY_QUESTION_COUNT
      ? `${daily.finished.solved}/${DAILY_QUESTION_COUNT} answered` : grid;
    const text = `Luffillion ${daily.day}: ${totalScore}/${MAX_POINTS}${beat}\n${result}`;
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  if (loadError) {
    return <div className="grid min-h-screen place-items-center text-rose-300">{loadError}</div>;
  }

  if (!daily || !progress) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#05070f]">
        <div className="animate-pulse text-amber-200">Setting sail…</div>
      </div>
    );
  }

  const lowTime = remainingSec <= 8;
  const shownQuestion = !allDone ? viewIndex + 1 : DAILY_QUESTION_COUNT;

  return (
    <div id="game-root" className="fixed inset-0 overflow-hidden bg-[#05070f]">
      {accountOpen && <CaptainLog captain={daily.captain} progress={progress} clockRunning={Boolean(progress.q[activeIndex]?.started && !progress.q[activeIndex]?.status)}
        historyRevision={`${daily.day}:${stats?.you?.score ?? "pending"}`} saveMessage={saveMessage}
        onSessionChange={sessionChanged} onClose={() => setAccountOpen(false)} />}
      <PixelWorld key={`${daily.day}:${daily.captain?.id ?? "guest"}`} storageKey={daily.captain ? undefined : `luffillion-pos:${daily.day}`} signal={runSignal} initialPos={Math.max(initialPos, journeyPos)} goldHat={hasGoldHat} characterId={equippedCharacter} onStatus={handleWorld} />
      {sagaBanner && (
        <div
          key={sagaBanner.id}
          className="saga-banner pointer-events-none fixed inset-x-0 bottom-[118px] z-30 flex justify-center px-3"
        >
          <div className="px-box px-scan border-t-2 border-amber-300 px-6 py-2 text-center">
            <p className="text-sm tracking-[0.4em] text-amber-300">
              SAGA {sagaBanner.saga + 1} / {SAGAS.length}
            </p>
            <p className="font-pixel-display text-2xl font-bold text-white">{SAGAS[sagaBanner.saga].name}</p>
            <p className="text-base text-slate-400">{SAGAS[sagaBanner.saga].subtitle}</p>
          </div>
        </div>
      )}
      {fx && <Effects key={fx.id} tier={fx.tier} />}
      {allDone && showCountdown && (
        <CountdownScreen
          msLeft={nextRunAt - now}
          score={totalScore}
          saga={world.arc}
          travelerName={activeCharacter.shortName}
          solved={daily.finished?.solved ?? daily.questions.filter((_, i) => progress.q[i]?.status === "solved").length}
          onAccount={openAccount}
          signedIn={!!daily.captain}
          saveMessage={saveMessage}
          copied={copied}
          stats={stats}
          onShare={shareResults}
          onClose={() => {
            playClick();
            setShowCountdown(false);
          }}
        />
      )}

      {/* ---------- Top HUD ---------- */}
      <div className="pointer-events-none fixed inset-x-0 top-3 z-20 mx-auto flex max-w-3xl items-start justify-between gap-3 px-3">
        <div className="px-box px-scan pointer-events-auto w-32 px-4 py-2 sm:w-44">
          <p className="text-sm tracking-[0.3em] text-slate-400">JOURNEY</p>
          <p className="text-3xl leading-none tabular-nums text-cyan-300">{world.pct}%</p>
          <p className="truncate text-sm leading-tight text-slate-400">
            {world.saga + 1}/{SAGAS.length} · {world.arc}
          </p>
        </div>

        <div className="pointer-events-auto flex flex-col items-center pt-2">
          <div className="flex gap-1">
            {daily.questions.map((_, i) => {
              const st = progress.q[i];
              const solved = st?.status === "solved" && st.tier;
              const expired = st?.status === "expired";
              const current = i === viewIndex && !allDone;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (i <= activeIndex) {
                      playClick();
                      setViewIndex(i);
                    }
                  }}
                  disabled={i > activeIndex}
                  aria-label={`Question ${i + 1}`}
                  className={`h-4 w-4 border-2 transition sm:h-5 sm:w-5 ${
                    current
                      ? waitingToStart
                        ? "border-amber-300 bg-[#0b1426]"
                        : "border-white bg-[#ff4f7b]"
                      : solved
                        ? "border-amber-200 bg-amber-300"
                        : expired
                          ? "border-rose-900 bg-rose-700/80"
                          : "border-[#1c2a4a] bg-[#0b1426]"
                  } disabled:cursor-default`}
                />
              );
            })}
          </div>
          <p className="mt-1 text-sm tracking-[0.3em] text-slate-200 [text-shadow:0_1px_0_#000]">
            {waitingToStart && activeIndex === 0
              ? "READY TO SET SAIL"
              : `QUESTION ${shownQuestion} OF ${DAILY_QUESTION_COUNT}`}
          </p>
          <p className="font-pixel-display text-[11px] tracking-[0.25em] text-amber-200 [text-shadow:0_1px_0_#000]">
            LUFFILLION · DAILY · {daily.day}
          </p>
          <button type="button" onClick={openAccount} aria-haspopup="dialog" aria-expanded={accountOpen}
            className="captain-entry px-btn mt-1 inline-flex h-7 max-w-48 items-center gap-1.5 border border-[#415674] bg-[#122039] px-2 text-sm text-cyan-100 hover:border-cyan-300">
            <LogIcon /><span className="truncate">{daily.captain ? `Log · ${daily.captain.username}` : "Sign in / Create account"}</span>
          </button>
        </div>

        <div className="px-box px-scan pointer-events-auto w-32 px-4 py-2 text-right sm:w-44">
          <p className="text-sm tracking-[0.3em] text-slate-400">SCORE</p>
          <p className="text-3xl leading-none tabular-nums text-[#ff4f7b]">{totalScore}</p>
          <p className="text-sm leading-tight text-slate-500">of {MAX_POINTS}</p>
        </div>
      </div>

      {/* ---------- Three-lines menu + drawer ---------- */}
      <button
        type="button"
        onClick={() => {
          playClick();
          setMenuTab((t) => (t ? null : "log"));
        }}
        aria-label={menuTab ? "Close game menu" : "Open game menu"}
        aria-expanded={menuTab !== null}
        aria-controls="game-menu"
        className="px-btn fixed left-3 top-[104px] z-[60] grid h-9 w-10 place-items-center border-2 border-[#2a3a5c] bg-[#1a2540]/95 text-slate-200 hover:bg-[#24335a]"
      >
        {menuTab ? <CloseIcon size={17} aria-hidden="true" /> : <MenuIcon size={17} aria-hidden="true" />}
      </button>

      <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
        title={muted ? "Unmute sound effects" : "Mute sound effects"}
        className="px-btn fixed right-3 top-[104px] z-30 grid h-9 w-10 place-items-center border-2 border-[#2a3a5c] bg-[#1a2540]/95 text-lg text-slate-200 hover:bg-[#24335a]">
        {muted ? "🔇" : "🔊"}
      </button>

      {menuTab && (
        <MenuPanel
          tab={menuTab}
          captain={daily.captain}
          onSwitch={(next) => {
            if (next === "achievements" && !daily.captain) {
              setMenuTab(null);
              setLockedAchievementsOpen(true);
              return;
            }
            setMenuTab(next);
          }}
          onClose={() => setMenuTab(null)}
        >
          {menuTab === "log" && (
            <div className="px-3 py-3">
              <p className="mb-2 text-sm tracking-[0.3em] text-[#ff4f7b]">RUN LOG</p>
              {progress.runs.length === 0 ? (
                <p className="text-base text-slate-400">No runs yet. Land a correct answer to get your character moving.</p>
              ) : (
                <ul className="space-y-1.5">
                  {[...progress.runs].reverse().map((r, idx) => (
                    <li key={`${r.questionIndex}-${idx}`} className="flex items-center justify-between gap-2 bg-white/5 px-2 py-1 text-base">
                      <span className="min-w-0 truncate">
                        <span className={TIER_CONFIG[r.tier].text}>{TIER_LABELS[r.tier]}</span>
                        <span className="text-slate-500"> · Q{r.questionIndex + 1} · {r.arc}</span>
                      </span>
                      <span className="shrink-0 tabular-nums text-white">+{r.points}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-3 border-t border-white/10 pt-2 text-sm leading-snug text-slate-400">
                {TIER_ORDER.map((t) => (
                  <div key={t} className="flex justify-between">
                    <span className={TIER_CONFIG[t].text}>{TIER_LABELS[t]}</span>
                    <span>{TIER_CONFIG[t].points} pts</span>
                  </div>
                ))}
                <p className="mt-2 text-slate-500">Rarer answers send Luffy farther and faster. Reach 500 points to find Laugh Tale.</p>
              </div>
            </div>
          )}
          {menuTab === "achievements" && daily.captain && <AchievementsPanel key={daily.captain.id} captain={daily.captain} refreshKey={`${daily.day}:${achievementRevision}`} onUnlock={queueUnlocks} equippedCharacter={equippedCharacter} onEquip={handleEquip} />}
          {menuTab === "archive" && <ArchivePanel captain={daily.captain} refreshKey={`${daily.day}:${stats?.you?.score ?? "pending"}`} />}
          {menuTab === "bounties" && <BountiesPanel captain={daily.captain} onSignIn={() => openAccountForMenu("bounties")} />}
        </MenuPanel>
      )}

      {lockedAchievementsOpen && (
        <LockedAchievements
          onSignIn={() => {
            returnToMenu.current = "achievements";
            setLockedAchievementsOpen(false);
            setAccountOpen(true);
          }}
          onClose={() => setLockedAchievementsOpen(false)}
        />
      )}
      {daily.captain && unlockedToast.length > 0 && <AchievementToast unlocked={unlockedToast} onDone={dismissUnlock} />}

      {/* ---------- Center prompt card ---------- */}
      <div className="pointer-events-none fixed inset-x-0 top-[112px] z-10 flex justify-center px-3 sm:top-[120px]">
        <div
          className={`px-box px-scan pointer-events-auto max-h-[calc(100vh-260px)] w-full max-w-xl overflow-y-auto px-6 py-5 ${
            nopeOn ? "nope" : ""
          }`}
        >
          {waitingToStart ? (
            <div className="text-center">
              <p className="text-base tracking-[0.35em] text-[#ff4f7b]">
                {activeIndex === 0
                  ? `DAILY VOYAGE · ${daily.day}`
                  : `QUESTION ${activeIndex + 1} OF ${DAILY_QUESTION_COUNT} · READY`}
              </p>
              <h2 className="mt-1 font-pixel-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                {activeIndex === 0 ? "Ready to Set Sail?" : `Ready for Question ${activeIndex + 1}?`}
              </h2>
              <p className="mt-1.5 text-base leading-snug text-slate-300">
                {activeIndex === 0
                  ? `${DAILY_QUESTION_COUNT} One Piece questions · ${QUESTION_SECONDS} seconds each · infinite attempts, 1 correct answer. Rarer pulls score more points and send ${activeCharacter.shortName} farther toward Laugh Tale.`
                  : `The question stays hidden until you begin. Hit Set Sail to start the ${QUESTION_SECONDS}-second timer.`}
              </p>
              {activeIndex === 0 && (
                <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-sm">
                  {TIER_ORDER.map((t) => (
                    <span key={t} className={`px-2 py-0.5 ring-1 ${TIER_CONFIG[t].badge}`}>
                      {TIER_LABELS[t]} · {TIER_CONFIG[t].points}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-2 text-sm text-slate-400">Sailing as <span style={{ color: activeCharacter.color }}>{activeCharacter.shortName}</span> · {activeCharacter.epithet}</p>
              <div className="mt-4">
                <button
                  type="button"
                  autoFocus
                  onClick={startActiveQuestion}
                  className="px-btn h-12 bg-amber-400 px-7 font-pixel-display text-2xl font-bold tracking-[0.22em] text-amber-950 transition hover:bg-amber-300"
                >
                  ⚓ SET SAIL ▸
                </button>
              </div>
              {activeIndex === 0 && <>
                <Link href="/adventure" onClick={playClick} className="daily-adventure-entry">
                  <span className="daily-adventure-mark">↗</span><span><strong>ADVENTURE MODE</strong><small>100 levels · 10 sagas · unlimited retries</small></span><span aria-hidden="true">▸</span>
                </Link>
                <Link href="/ranked" onClick={playClick} className="daily-adventure-entry">
                  <span className="daily-adventure-mark">⚔</span><span><strong>RANKED BATTLE</strong><small>Online niche knowledge showdown · Bronze → Legend</small></span><span aria-hidden="true">▸</span>
                </Link>
              </>}
            </div>
          ) : !allDone && question ? (
            <>
              <p className="text-base tracking-[0.35em] text-[#ff4f7b]">
                QUESTION {viewIndex + 1} OF {DAILY_QUESTION_COUNT}
              </p>
              <h2 className="mt-1 font-pixel-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                {question.prompt}
              </h2>
              <p className="mt-1 text-base leading-snug text-slate-400">{question.hint}</p>
              {!qs.status && (
                <p className="mt-2 text-base tracking-[0.18em] text-slate-300">
                  ▼ {Object.values(question.counts).reduce((a, b) => a + b, 0)} valid answers · rarer runs farther ▼
                </p>
              )}
              {qs.status && <ResultPanel qs={qs} />}
            </>
          ) : (
            <Summary daily={daily} progress={progress} reveals={reveals} totalScore={totalScore} />
          )}
        </div>
      </div>

      {/* ---------- Bottom answer bar ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#040812] via-[#040812]/90 to-transparent pb-5 pt-12">
        {!qs.status && !waitingToStart && !allDone && qs.wrong.length > 0 && (
          <div className="mx-auto mb-2 flex max-w-2xl flex-wrap justify-center gap-1 px-3">
            {qs.wrong.slice(0, 8).map((w) => (
              <span key={w} className="bg-rose-950/80 px-2 text-base text-rose-200 line-through decoration-rose-400/70">
                {w}
              </span>
            ))}
          </div>
        )}
        {message && <p className="mb-2 text-center text-base text-rose-300">{message}</p>}
        {suggestion && suggestion.q === viewIndex && timerRunning && (
          <div className="mx-auto mb-2 flex max-w-2xl justify-center px-3">
            <button
              type="button"
              onClick={acceptSuggestion}
              disabled={busy}
              className="suggest-pop px-btn flex items-center gap-2 border-2 border-amber-300/80 bg-[#1a2540]/95 px-3 py-1 text-lg text-slate-200 hover:bg-[#24335a]"
            >
              <span className="text-slate-400">
                &ldquo;<span className="line-through decoration-rose-400/70">{suggestion.typed}</span>&rdquo; → did you mean
              </span>
              <span className="text-amber-200">{suggestion.name}</span>
              <span className="text-slate-400">?</span>
              <span className="ml-1 bg-amber-300 px-1.5 text-base text-amber-950">YES · TAB</span>
            </button>
          </div>
        )}

        <div className="mx-auto flex max-w-2xl items-center gap-3 px-3">
          {waitingToStart ? (
            <div className="mx-auto flex items-center gap-3">
              <TimerRing remainingMs={LIMIT_MS} seconds={QUESTION_SECONDS} low={false} />
              <p className="text-base tracking-[0.2em] text-slate-400">
                Press <span className="text-amber-300">⚓ SET SAIL ▸</span> above to begin
              </p>
            </div>
          ) : timerRunning ? (
            <>
              <TimerRing remainingMs={remainingMs} seconds={remainingSec} low={lowTime} />
              <form onSubmit={submitGuess} className="flex flex-1 items-center gap-3">
                <div className="flex-1">
                  <input
                    ref={inputRef}
                    autoFocus
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Tab" && suggestion && suggestion.q === viewIndex && !guess.trim()) {
                        e.preventDefault();
                        acceptSuggestion();
                      }
                    }}
                    maxLength={80}
                    placeholder="type one answer…"
                    aria-label="Your answer"
                    className="h-11 w-full border-2 border-cyan-400/70 bg-[#0a1428] px-3 text-xl tracking-wider text-white placeholder:text-slate-500 outline-none focus:border-cyan-300"
                  />
                  <div className="mt-1 h-1 bg-white/10">
                    <div
                      className={`h-full transition-[width] duration-100 ${lowTime ? "bg-rose-400" : "bg-cyan-400"}`}
                      style={{ width: `${(remainingMs / LIMIT_MS) * 100}%` }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={busy || !guess.trim()}
                  className="px-btn -mt-2 h-11 bg-[#c2345f] px-5 text-xl tracking-[0.3em] text-white transition hover:bg-[#d8406d] disabled:opacity-50"
                >
                  {busy ? "…" : "RUN"}
                </button>
              </form>
            </>
          ) : allDone ? (
            <div className="mx-auto flex gap-3">
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setShowCountdown(true);
                }}
                className="px-btn h-11 bg-amber-400 px-5 text-xl tracking-[0.2em] text-amber-950 hover:bg-amber-300"
              >
                ⏳ NEXT RUN {formatCountdown(nextRunAt - now)}
              </button>
              <button
                type="button"
                onClick={shareResults}
                className="px-btn h-11 bg-[#c2345f] px-5 text-xl tracking-[0.25em] text-white hover:bg-[#d8406d]"
              >
                {copied ? "COPIED!" : "SHARE"}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={nextQuestion}
              className="px-btn mx-auto h-11 bg-[#c2345f] px-6 text-xl tracking-[0.3em] text-white hover:bg-[#d8406d]"
            >
              {viewIndex === DAILY_QUESTION_COUNT - 1
                ? "SEE RESULTS ▸"
                : viewIndex + 1 < activeIndex
                  ? `BACK TO Q${activeIndex + 1} ▸`
                  : "NEXT ▸"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function TimerRing({ remainingMs, seconds, low }: { remainingMs: number; seconds: number; low: boolean }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const frac = remainingMs / LIMIT_MS;
  return (
    <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#0a1428] ring-2 ring-[#1c2a4a]">
      <svg viewBox="0 0 56 56" className="absolute inset-0 -rotate-90">
        <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke={low ? "#fb7185" : "#22d3ee"}
          strokeWidth="4"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - frac)}
        />
      </svg>
      <span className={`relative text-2xl tabular-nums ${low ? "timer-low text-rose-400" : "text-cyan-300"}`}>{seconds}</span>
    </div>
  );
}

function ResultPanel({ qs }: { qs: QState }) {
  const solved = qs.status === "solved" && qs.tier;
  return (
    <div className="mt-4 space-y-4">
      <div className="border-l-4 border-[#ff4f7b] bg-white/5 px-4 py-3">
        {solved ? (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-2 py-0.5 text-base tracking-wider ring-1 ${TIER_CONFIG[qs.tier!].badge}`}>
                {TIER_LABELS[qs.tier!].toUpperCase()}
              </span>
              <span className="text-2xl text-white">+{qs.points} pts</span>
            </div>
            <p className="mt-1 text-xl text-slate-200">
              ✓ <span className="text-white">{qs.answer}</span>
            </p>
            <p className="text-base text-slate-400">{TIER_CONFIG[qs.tier!].blurb}</p>
          </>
        ) : (
          <>
            <p className="text-2xl text-rose-300">TIME&apos;S UP</p>
            <p className="text-base text-slate-400">No points this time. Here&apos;s every answer.</p>
          </>
        )}
      </div>
      <p className="border border-dashed border-white/15 px-3 py-2 text-base text-slate-400">
        🔒 Every possible answer unlocks after question {DAILY_QUESTION_COUNT}. You&apos;ll get a recap where you can
        explore each question&apos;s full list.
      </p>
    </div>
  );
}

function AnswerList({ reveal, mine }: { reveal: Reveal; mine?: string }) {
  const [filter, setFilter] = useState("");
  const q = filter.trim().toLowerCase();

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-base tracking-[0.25em] text-slate-300">ALL ANSWERS</h4>
          <span className="text-sm text-slate-500">
            {reveal.total} total · {reveal.totalFound} solves today
          </span>
        </div>
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={`search ${reveal.total} answers…`}
          aria-label="Filter revealed answers"
          className="h-8 w-44 border border-white/15 bg-[#0a1428] px-2.5 text-base text-slate-200 placeholder:text-slate-500 outline-none focus:border-cyan-400/70"
        />
      </div>
      <div className="space-y-3">
        {[...TIER_ORDER].reverse().map((t) => {
          const allItems = reveal.tiers[t] ?? [];
          const items = q ? allItems.filter((item) => item.name.toLowerCase().includes(q)) : allItems;
          if (items.length === 0) return null;
          return (
            <section key={t}>
              <h5 className={`mb-1 text-base tracking-wider ${TIER_CONFIG[t].text}`}>
                {TIER_LABELS[t].toUpperCase()}{" "}
                <span className="text-sm tracking-normal text-slate-500">
                  · {q ? `${items.length}/${allItems.length}` : allItems.length} · {TIER_CONFIG[t].points} pts
                </span>
              </h5>
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {items.map((item) => {
                  const isMine = mine === item.name;
                  return (
                    <li
                      key={item.name}
                      className={`flex items-center justify-between gap-2 px-2 py-0.5 text-base ${
                        isMine ? "bg-amber-300/15 text-amber-100 ring-1 ring-amber-300/60" : "bg-white/5 text-slate-300"
                      }`}
                    >
                      <span className="truncate">
                        {isMine && "✓ "}
                        {item.name}
                      </span>
                      <span className="shrink-0 text-sm text-slate-500">{item.found > 0 ? `×${item.found}` : "—"}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function Summary({
  daily,
  progress,
  reveals,
  totalScore,
}: {
  daily: DailyResponse;
  progress: Progress;
  reveals: Record<number, Reveal>;
  totalScore: number;
}) {
  const solvedCount = daily.finished?.solved ?? daily.questions.filter((_, i) => progress.q[i]?.status === "solved").length;
  return (
    <div>
      <p className="text-base tracking-[0.35em] text-[#ff4f7b]">VOYAGE COMPLETE</p>
      <h2 className="mt-1 font-pixel-display text-3xl font-bold text-white">
        {totalScore} <span className="text-lg text-slate-400">/ {MAX_POINTS} pts</span>
      </h2>
      <p className="text-base text-slate-400">
        {solvedCount} of {DAILY_QUESTION_COUNT} answered. A brand-new run unlocks tomorrow.
      </p>
      <p className="mt-2 text-base tracking-[0.2em] text-amber-200">▼ ALL ANSWERS UNLOCKED · TAP A QUESTION ▼</p>

      <div className="mt-4 space-y-2">
        {daily.questions.map((q, i) => {
          const st = progress.q[i];
          const reveal = reveals[i];
          return (
            <details key={q.id} className="group bg-white/5 px-3 py-2 open:bg-white/[0.08] hover:bg-white/[0.08]">
              <summary
                onClick={() => playClick()}
                className="flex cursor-pointer list-none items-center justify-between gap-3 text-lg"
              >
                <span className="min-w-0">
                  <span className="block truncate">
                    <span className="inline-block text-amber-300 transition-transform group-open:rotate-90">▸</span>{" "}
                    <span className="text-slate-500">Q{i + 1}</span> <span className="text-white">{q.prompt}</span>
                  </span>
                  <span className="block pl-4 text-sm tracking-wider text-cyan-300/80 group-open:hidden">
                    Tap to discover all {Object.values(q.counts).reduce((x, y) => x + y, 0)} answers
                  </span>
                </span>
                {st?.status === "solved" && st.tier ? (
                  <span className={`shrink-0 ${TIER_CONFIG[st.tier].text}`}>
                    {st.answer} · +{st.points}
                  </span>
                ) : (
                  <span className="shrink-0 text-rose-300">{daily.finished && !daily.finished.legs && !st?.status ? "archived" : "missed"}</span>
                )}
              </summary>
              <div className="mt-2">
                {reveal ? (
                  <AnswerList reveal={reveal} mine={st?.status === "solved" ? st.answer : undefined} />
                ) : (
                  <p className="text-base text-slate-500">Loading answers…</p>
                )}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

function formatCountdown(ms: number): string {
  const t = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const sec = t % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function percentMessage(stats: RunStats): string {
  const you = stats.you;
  if (!you) return "";
  if (stats.total <= 1) return "You're the first player to finish today!";
  if (you.beat >= 100) return "You did better than every other player today!";
  if (you.rank === 1) return "You're tied for #1 today!";
  if (you.beat <= 0) return "You beat 0% of players today. A new voyage awaits tomorrow!";
  return `You did better than ${you.beat}% of players today!`;
}

function ScoreGraph({ stats }: { stats: RunStats }) {
  const max = Math.max(1, ...stats.bins.map((b) => b.count));
  const yourBin = stats.you ? Math.min(stats.bins.length - 1, Math.floor(stats.you.score / stats.binSize)) : -1;
  return (
    <div className="mt-3">
      <div className="flex h-28 items-end gap-[3px] border-b-2 border-slate-600 px-1">
        {stats.bins.map((b, i) => {
          const mine = i === yourBin;
          const h = b.count === 0 ? 2 : Math.max(6, Math.round((b.count / max) * 100));
          return (
            <div key={b.from} className="group relative flex h-full flex-1 flex-col items-center justify-end">
              {mine && <span className="graph-you mb-0.5 text-sm leading-none text-amber-300">YOU</span>}
              <div
                className={`graph-bar w-full ${mine ? "bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.7)]" : b.count ? "bg-cyan-500/80" : "bg-slate-700"}`}
                style={{ height: `${h}%`, animationDelay: `${i * 35}ms` }}
              />
              <span className="pointer-events-none absolute bottom-full z-10 mb-5 hidden whitespace-nowrap bg-black/90 px-1.5 text-sm text-slate-200 group-hover:block">
                {b.from}–{b.to}: {b.count} {b.count === 1 ? "player" : "players"}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between px-1 text-sm text-slate-500">
        <span>0</span>
        <span>{Math.round(MAX_POINTS / 2)}</span>
        <span>{MAX_POINTS} pts</span>
      </div>
    </div>
  );
}

function CountdownScreen({
  onAccount, signedIn, saveMessage,
  msLeft,
  score,
  saga,
  travelerName,
  solved,
  copied,
  stats,
  onShare,
  onClose,
}: {
  onAccount: () => void;
  signedIn: boolean;
  saveMessage: string;
  msLeft: number;
  score: number;
  saga: string;
  travelerName: string;
  solved: number;
  copied: boolean;
  stats: RunStats | null;
  onShare: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-[#05070f]/80 px-4 py-6 backdrop-blur-sm">
      <div className="px-box px-scan countdown-pop w-full max-w-md px-7 py-6 text-center">
        <p className="text-base tracking-[0.4em] text-[#ff4f7b]">TODAY&apos;S VOYAGE IS OVER</p>
        <p className="mt-1 font-pixel-display text-3xl font-bold text-white">
          {score} <span className="text-lg text-slate-400">/ {MAX_POINTS} pts</span>
        </p>
        <p className="text-base text-slate-400">
          {solved} of {DAILY_QUESTION_COUNT} answered · {travelerName} reached <span className="text-amber-200">{saga}</span>
        </p>

        <div className="mt-4 border-t border-white/10 pt-3">
          <p className="text-sm tracking-[0.35em] text-slate-400">HOW EVERYONE DID TODAY</p>
          {stats && stats.you ? (
            <>
              <p className="mt-1 font-pixel-display text-xl font-bold text-amber-200">{percentMessage(stats)}</p>
              <ScoreGraph stats={stats} />
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/5 py-1">
                  <p className="text-sm tracking-widest text-slate-500">RANK</p>
                  <p className="text-xl text-white">
                    #{stats.you.rank}
                    <span className="text-sm text-slate-500"> / {stats.total}</span>
                  </p>
                </div>
                <div className="bg-white/5 py-1">
                  <p className="text-sm tracking-widest text-slate-500">AVERAGE</p>
                  <p className="text-xl text-cyan-300">{stats.average}</p>
                </div>
                <div className="bg-white/5 py-1">
                  <p className="text-sm tracking-widest text-slate-500">TOP SCORE</p>
                  <p className="text-xl text-[#ff4f7b]">{stats.top}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-2 animate-pulse text-base text-slate-500">Comparing your run with everyone else…</p>
          )}
        </div>

        <p className="mt-4 text-sm tracking-[0.35em] text-slate-400">NEXT RUN IN</p>
        <p className="font-pixel-display text-5xl font-bold tabular-nums text-cyan-300 [text-shadow:0_3px_0_#0b1426]">
          {formatCountdown(msLeft)}
        </p>
        <p className="text-sm text-slate-500">New questions for everyone at 12:00 AM EST every day.</p>

        <div className="mt-5 flex justify-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-btn h-11 bg-amber-400 px-5 text-xl tracking-[0.2em] text-amber-950 hover:bg-amber-300"
          >
            VIEW ANSWERS
          </button>
          <button
            type="button"
            onClick={onShare}
            className="px-btn h-11 bg-[#c2345f] px-5 text-xl tracking-[0.25em] text-white hover:bg-[#d8406d]"
          >
            {copied ? "COPIED!" : "SHARE"}
          </button>
        </div>
        <Link href="/adventure" onClick={playClick} className="daily-adventure-entry"><span className="daily-adventure-mark">↗</span><span><strong>KEEP SAILING IN ADVENTURE</strong><small>A separate 100-level journey awaits</small></span><span aria-hidden="true">▸</span></Link>
        <Link href="/ranked" onClick={playClick} className="daily-adventure-entry"><span className="daily-adventure-mark">⚔</span><span><strong>RANKED BATTLE</strong><small>Take on captains online and climb the ladder</small></span><span aria-hidden="true">▸</span></Link>
        {saveMessage && <p role="status" className="mt-3 text-sm text-slate-300">{saveMessage}</p>}
        <button type="button" aria-haspopup="dialog" onClick={onAccount} className="mt-2 inline-flex items-center justify-center gap-2 py-1.5 text-base text-cyan-200 underline-offset-4 hover:underline">
          <LogIcon />{signedIn ? "Open my Captain's Log" : "Sign in or create an account to keep this voyage"} ▸
        </button>
      </div>
    </div>
  );
}
