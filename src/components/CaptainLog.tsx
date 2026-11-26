"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { sagaAt } from "@/data/arcs";
import { DAILY_QUESTION_COUNT, TIER_CONFIG } from "@/data/tiers";
import { playClick } from "@/lib/sound";
import AdventureLog from "./adventure/AdventureLog";
import type { Captain, Progress, VoyageHistory } from "@/lib/voyage";
import { checkpointBody, voyageRequest } from "@/lib/voyage-client";

type Mode = "login" | "register";
interface Props {
  captain: Captain | null;
  progress?: Progress;
  clockRunning: boolean;
  historyRevision: string;
  saveMessage: string;
  onSessionChange: (captain: Captain | null, linkedGuest: boolean) => Promise<void>;
  onClose: () => void;
}
const field = "mt-1 h-11 w-full border border-[#344665] bg-[#091326] px-3 font-sans text-sm text-slate-100 outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300";
const dateLabel = (day: string) => new Date(`${day}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export function LogIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" shapeRendering="crispEdges">
    <path d="M3 2h10v12H3z" stroke="currentColor" strokeWidth="1.5"/><path d="M5 2v12M7 5h4M7 8h4" stroke="currentColor"/>
  </svg>;
}

export default function CaptainLog({ captain, progress, clockRunning, historyRevision, saveMessage, onSessionChange, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [mode, setMode] = useState<Mode>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [includeGuest, setIncludeGuest] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [history, setHistory] = useState<VoyageHistory | null>(null);
  const [historyError, setHistoryError] = useState("");
  const [olderBusy, setOlderBusy] = useState(false);
  const [retry, setRetry] = useState(0);
  const captainId = captain?.id;

  useEffect(() => {
    const el = dialog.current;
    el?.showModal();
    return () => el?.close();
  }, []);

  useEffect(() => {
    setHistory(null);
    setHistoryError("");
    if (!captainId) return;
    const ctrl = new AbortController();
    voyageRequest<VoyageHistory>("/api/account/history", "GET", undefined, ctrl.signal)
      .then(d => { if (!ctrl.signal.aborted) setHistory(d); })
      .catch(e => { if (!ctrl.signal.aborted) setHistoryError(e.message || "Couldn't load the voyage log."); });
    return () => ctrl.abort();
  }, [captainId, historyRevision, retry]);

  function close() { if (!busy) { playClick(); onClose(); } }
  function choose(next: Mode) {
    playClick(); setMode(next); setError(""); setNotice(""); setPassword(""); setConfirmation("");
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    playClick(); setError(""); setNotice("");
    if (mode === "register" && confirmation !== password) { setError("The passwords don't match."); return; }
    setBusy(true);
    try {
      const d = await voyageRequest<{ captain: Captain; imported: number; linkedGuest: boolean }>("/api/account", "POST", {
        action: mode, username, password, includeGuest,
        ...(includeGuest && progress ? { progress: checkpointBody(progress) } : {}),
      });
      setPassword(""); setConfirmation("");
      await onSessionChange(d.captain, d.linkedGuest);
      setNotice(`${mode === "register" ? "Welcome aboard" : "Welcome back"}, ${d.captain.username}!${d.imported ? ` ${d.imported} guest voyage${d.imported === 1 ? "" : "s"} added to your log.` : ""}`);
    } catch (e) { setError(e instanceof Error ? e.message : "Couldn't sign in. Please try again."); }
    finally { setBusy(false); }
  }
  async function logout() {
    if (busy) return;
    playClick(); setBusy(true); setError("");
    try {
      await voyageRequest("/api/account", "POST", { action: "logout", accountId: captain?.id, ...(progress ? { progress: checkpointBody(progress) } : {}) });
      await onSessionChange(null, false);
      onClose();
    } catch (e) { setError(e instanceof Error ? e.message : "Couldn't sign out."); }
    finally { setBusy(false); }
  }
  async function older() {
    if (olderBusy || !history?.nextBefore) return;
    playClick(); setOlderBusy(true); setHistoryError("");
    try {
      const d = await voyageRequest<VoyageHistory>(`/api/account/history?before=${encodeURIComponent(history.nextBefore)}`);
      setHistory(old => old ? { ...d, voyages: [...old.voyages, ...d.voyages] } : d);
    } catch (e) { setHistoryError(e instanceof Error ? e.message : "Couldn't load older voyages."); }
    finally { setOlderBusy(false); }
  }

  return <dialog ref={dialog} aria-labelledby="captain-log-title" className="captain-dialog"
    onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === e.currentTarget) close(); }}>
    <div className="border border-[#374966] border-t-[3px] border-t-amber-300 bg-[#0d182b] text-slate-100">
      <header className="px-scan flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
        <div>
          <p className="flex items-center gap-2 text-sm tracking-[.24em] text-amber-300"><LogIcon /> GRAND LINE ARCHIVES</p>
          <h2 id="captain-log-title" className="mt-1 font-pixel-display text-3xl font-bold">Captain&apos;s Log</h2>
          <p className="text-base text-slate-400">{captain ? `Private log of ${captain.username}` : "One captain. Every voyage."}</p>
        </div>
        <button type="button" disabled={busy} onClick={close} aria-label="Close Captain's Log" className="h-9 w-9 shrink-0 border border-slate-600 text-xl text-slate-300 hover:border-amber-200 hover:text-white">✕</button>
      </header>
      <div className="px-5 py-4 sm:px-6">
        {clockRunning && <p role="status" className="mb-3 text-base text-amber-200">Your question timer is still running.</p>}
        {notice && <p role="status" className="mb-3 border-l-2 border-cyan-300 bg-cyan-300/5 px-3 py-1 text-cyan-200">{notice}</p>}
        {error && <p role="alert" className="mb-3 border-l-2 border-rose-400 px-3 text-rose-200">{error}</p>}
        {!captain ? <>
          <div className="mb-4 grid grid-cols-2 border border-[#344665] bg-[#091326] p-1" aria-label="Account options">
            {([['login', 'Sign in'], ['register', 'Create account']] as const).map(([value, label]) =>
              <button type="button" key={value} disabled={busy} onClick={() => choose(value)} aria-pressed={mode === value}
                className={`h-9 text-lg ${mode === value ? "bg-[#24364e] text-amber-200" : "text-slate-400 hover:text-white"}`}>{label}</button>)}
          </div>
          <p className="mb-3 text-lg leading-tight text-slate-300">{mode === "login" ? "Sign in to resume today's voyage and revisit your past scores." : "Choose a captain name to save your progress across devices. No email required."}</p>
          <form onSubmit={submit} className="space-y-3">
            <fieldset disabled={busy} className="space-y-3">
              <label className="block text-sm tracking-widest text-slate-300" htmlFor="captain-name">USERNAME
                <input id="captain-name" name="username" className={field} value={username} onChange={e => setUsername(e.target.value)}
                  placeholder="Your captain name" required minLength={3} maxLength={24} pattern="[a-zA-Z0-9][a-zA-Z0-9_\-]{2,23}"
                  title="3–24 letters, numbers, underscores or dashes" autoComplete="username" autoCapitalize="none" autoCorrect="off" spellCheck={false}/>
              </label>
              <label className="block text-sm tracking-widest text-slate-300" htmlFor="captain-password">PASSWORD
                <input id="captain-password" name="password" type="password" className={field} value={password} onChange={e => setPassword(e.target.value)}
                  placeholder={mode === "register" ? "At least 12 characters" : "Enter your password"} required minLength={mode === "register" ? 12 : 1} maxLength={128}
                  autoComplete={mode === "register" ? "new-password" : "current-password"}/>
              </label>
              {mode === "register" && <label className="block text-sm tracking-widest text-slate-300" htmlFor="captain-confirm">CONFIRM PASSWORD
                <input id="captain-confirm" name="confirmation" type="password" className={field} value={confirmation} onChange={e => setConfirmation(e.target.value)}
                  required maxLength={128} placeholder="Re-enter your password" autoComplete="new-password"/>
              </label>}
              <label className="flex cursor-pointer items-start gap-2.5 border-y border-white/10 py-2.5 text-base leading-tight text-slate-300">
                <input type="checkbox" checked={includeGuest} onChange={e => setIncludeGuest(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-amber-300"/>
                <span>Save this browser&apos;s guest voyages to my log.<small className="mt-1 block text-sm text-slate-400">Existing account results and in-progress voyages take priority.</small></span>
              </label>
            </fieldset>
            <button type="submit" disabled={busy} className="px-btn h-11 w-full bg-amber-400 text-lg tracking-[.15em] text-amber-950 hover:bg-amber-300 disabled:opacity-50">
              {busy ? "OPENING LOG…" : mode === "register" ? "CREATE MY ACCOUNT ▸" : "SIGN IN ▸"}
            </button>
          </form>
          <button type="button" disabled={busy} onClick={close} className="mt-3 w-full py-1 text-base text-slate-400 underline-offset-4 hover:text-white hover:underline">Keep playing as a guest</button>
        </> : <>
          {saveMessage && <p role="status" className="mb-2 text-sm text-cyan-200">{saveMessage}</p>}
          {historyError && <p role="alert" className="mb-3 text-rose-200">{historyError} <button type="button" className="underline" onClick={() => { playClick(); setRetry(n => n + 1); }}>Retry</button></p>}
          {!history && !historyError && <p role="status" className="py-5 text-cyan-200">Fetching your voyages…</p>}
          <AdventureLog key={captain.id} accountId={captain.id} revision={historyRevision}/>
          {history && <>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[["VOYAGES", history.summary.count], ["BEST / 700", history.summary.best], ["AVERAGE", history.summary.average]].map(([label, value]) =>
                <div key={label} className="border border-white/10 bg-white/[.035] py-2"><p className="text-xs tracking-widest text-slate-400">{label}</p><p className="font-pixel-display text-xl text-cyan-200">{value}</p></div>)}
            </div>
            <h3 className="mb-2 mt-5 text-sm tracking-[.24em] text-amber-200">DAILY VOYAGE HISTORY</h3>
            {!history.voyages.length ? <div className="border border-dashed border-slate-600 px-3 py-4 text-center">
              <p className="text-xl text-white">Your first entry awaits.</p><p className="text-base text-slate-400">Finish the seven daily questions to add a voyage here.</p>
            </div> : <div className="space-y-2">
              {history.voyages.map(v => <details key={v.day} className="group border border-[#30415a] bg-[#101e33]">
                <summary onClick={playClick} className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-2 hover:bg-white/5">
                  <span><span className="block text-lg text-white"><span className="mr-1 inline-block text-amber-300 group-open:rotate-90">▸</span>{dateLabel(v.day)}</span>
                  <span className="ml-4 block text-sm text-slate-400">{sagaAt(v.score).name} · {v.solved}/{DAILY_QUESTION_COUNT} answered</span></span>
                  <span className="shrink-0 text-xl text-cyan-300">{v.score} <small className="text-sm">PTS</small></span>
                </summary>
                <div className="border-t border-white/10 px-3 pb-2">
                  {v.legs ? <ol className="divide-y divide-white/5">{v.legs.map((leg, i) => <li key={i} className="py-1.5">
                    <p className="text-sm text-slate-400">Q{i + 1} · {leg.prompt}</p>
                    {leg.tier ? <p className="flex justify-between gap-2 text-base"><span className={TIER_CONFIG[leg.tier].text}>{leg.answer} · {TIER_CONFIG[leg.tier].label}</span><span className="shrink-0 text-white">+{leg.points}</span></p>
                    : <span className="text-base text-rose-300">Time expired · 0 pts</span>}
                  </li>)}</ol> : <p className="py-2 text-base text-slate-400">This older voyage was saved before question recaps were recorded.</p>}
                </div>
              </details>)}
              {history.nextBefore && <button type="button" disabled={olderBusy} onClick={older} className="w-full border border-slate-600 py-1.5 text-cyan-200 hover:bg-white/5">{olderBusy ? "Loading…" : "Load older voyages ↓"}</button>}
            </div>}
          </>}
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
            <button type="button" onClick={logout} disabled={busy} className="px-1 py-2 text-base text-slate-400 underline-offset-4 hover:text-white hover:underline">{busy ? "Signing out…" : "Sign out"}</button>
            <button type="button" onClick={close} disabled={busy} className="px-btn h-10 bg-amber-400 px-4 text-lg text-amber-950 hover:bg-amber-300">BACK TO VOYAGE ▸</button>
          </div>
        </>}
      </div>
    </div>
  </dialog>;
}
