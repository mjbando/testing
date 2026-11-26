"use client";

import { useEffect, useRef, useState } from "react";
import PixelEmblem from "./pixel-emblems";
import CharacterPortrait from "./CharacterPortrait";
import { ACHIEVEMENTS, type AchievementReport } from "@/lib/achievements";
import { PLAYABLE_CHARACTERS, characterById, type CharacterId } from "@/data/playable-characters";
import type { Captain } from "@/lib/voyage";
import { voyageRequest } from "@/lib/voyage-client";
import { playClick } from "@/lib/sound";

const dateLabel = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
type Collection = AchievementReport & { equippedCharacter: CharacterId };

export default function AchievementsPanel({ captain, refreshKey, onUnlock, equippedCharacter, onEquip }: {
  captain: Captain;
  refreshKey: string;
  onUnlock: (ids: string[]) => void;
  equippedCharacter: CharacterId;
  onEquip: (id: CharacterId, accountId: string) => void;
}) {
  const [report, setReport] = useState<Collection | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [retry, setRetry] = useState(0);
  const [filter, setFilter] = useState<"all" | "earned" | "locked">("all");
  const [view, setView] = useState<"badges" | "crew">("badges");
  const [equipping, setEquipping] = useState<CharacterId | null>(null);
  const [showRequirement, setShowRequirement] = useState<string | null>(null);
  const section = useRef<HTMLElement>(null);
  const live = useRef(true);
  const selectionVersion = useRef(0);
  useEffect(() => { live.current = true; return () => { live.current = false; }; }, []);

  useEffect(() => {
    setError("");
    const version = selectionVersion.current;
    const ctrl = new AbortController();
    voyageRequest<Collection>("/api/account/achievements", "GET", undefined, ctrl.signal)
      .then(d => {
        if (ctrl.signal.aborted) return;
        setReport(d); onUnlock(d.newlyUnlocked);
        if (version === selectionVersion.current) onEquip(d.equippedCharacter, captain.id);
      }).catch(e => { if (!ctrl.signal.aborted) setError(e instanceof Error ? e.message : "Couldn't load achievements."); });
    return () => ctrl.abort();
  }, [captain.id, retry, refreshKey, onUnlock, onEquip]);

  useEffect(() => {
    if (view !== "badges" || !showRequirement) return;
    const el = section.current?.querySelector<HTMLDetailsElement>(`[data-achievement="${showRequirement}"]`);
    if (el) { el.open = true; el.scrollIntoView({ block: "nearest" }); el.querySelector<HTMLElement>("summary")?.focus(); }
    setShowRequirement(null);
  }, [view, showRequirement]);

  async function equip(id: CharacterId) {
    if (equipping || id === equippedCharacter) return;
    playClick(); setEquipping(id); setError(""); setNotice("");
    selectionVersion.current++;
    try {
      const data = await voyageRequest<{ equippedCharacter: CharacterId; accountId: string; newlyUnlocked: string[] }>("/api/account/character", "PUT", { accountId: captain.id, characterId: id });
      if (!live.current) return;
      selectionVersion.current++;
      onEquip(data.equippedCharacter, data.accountId); onUnlock(data.newlyUnlocked);
      setNotice(`Now sailing as ${characterById(data.equippedCharacter).shortName}. Saved to your account.`);
    } catch (e) {
      if (live.current) setError(e instanceof Error ? e.message : "Couldn't equip this character. Try again.");
    } finally { if (live.current) setEquipping(null); }
  }

  const earnedIds = new Set(report?.achievements.filter(a => a.unlocked).map(a => a.id) ?? []);
  const earned = earnedIds.size;
  const total = report?.achievements.length ?? 15;
  const badges = report?.achievements.filter(a => filter === "all" || (filter === "earned" ? a.unlocked : !a.unlocked)) ?? [];
  const current = characterById(equippedCharacter);
  const recruitCount = 1 + earned;
  return <section ref={section} className="p-4" aria-labelledby="achievement-title">
    <header className="flex items-center gap-3">
      <div className="grid h-14 w-14 shrink-0 place-items-center border border-amber-300/25 bg-amber-300/[.06]"><PixelEmblem kind="seal" size={40}/></div>
      <div className="flex-1"><p className="text-xs tracking-[.25em] text-amber-300">CAPTAIN&apos;S COLLECTION</p><h2 id="achievement-title" className="font-pixel-display text-xl text-white">Achievements</h2><p className="text-base text-slate-400">Earn emblems. Recruit legends.</p></div>
      <span className="text-2xl text-amber-200" aria-label={`${earned} of ${total} achievements earned`}>{earned}<small className="text-base text-slate-500">/{total}</small></span>
    </header>
    <div className="my-3 h-1 bg-white/10"><div className="h-full bg-amber-300 transition-[width]" style={{ width: `${earned / total * 100}%` }}/></div>

    <div className="crew-equipped flex items-center gap-3 border border-white/15 p-2.5" style={{ borderLeftColor: current.color }}>
      <CharacterPortrait characterId={current.id} size={64} className="shrink-0"/>
      <div className="min-w-0 flex-1"><p className="text-xs tracking-[.2em] text-slate-400">SAILING AS</p><p className="font-pixel-display text-base text-white">{current.name}</p><p className="text-sm" style={{ color: current.color }}>{current.epithet}</p></div>
      <span className="self-start text-sm text-emerald-300">✓ Equipped</span>
    </div>
    <div className="mb-3 mt-3 grid grid-cols-2 border border-[#34445e] bg-[#0b1628] p-1" aria-label="Collection view">
      <button type="button" aria-pressed={view === "badges"} onClick={() => { playClick(); setView("badges"); }} className={`h-9 text-lg ${view === "badges" ? "bg-[#24364e] text-amber-200" : "text-slate-400 hover:text-white"}`}>Badges · {earned}/{total}</button>
      <button type="button" aria-pressed={view === "crew"} onClick={() => { playClick(); setView("crew"); }} className={`h-9 text-lg ${view === "crew" ? "bg-[#24364e] text-amber-200" : "text-slate-400 hover:text-white"}`}>Characters · {recruitCount}/16</button>
    </div>
    {error && <p role="alert" className="mb-3 border-l-2 border-rose-400 px-2 py-1 text-base text-rose-200">{error} <button type="button" onClick={() => { playClick(); setRetry(n => n + 1); }} className="underline">Retry</button></p>}
    {notice && <p role="status" className="mb-3 border-l-2 border-emerald-400 px-2 py-1 text-base text-emerald-200">{notice}</p>}
    {!report && !error && <p role="status" className="py-6 text-center text-cyan-200">Reading your achievements and crew…</p>}

    {view === "crew" ? <>
      <p className="mb-3 text-base leading-tight text-slate-400">One unique recruit per achievement. The toughest challenges unlock Emperors, the Pirate King, and Gear 5.</p>
      <div className="grid grid-cols-2 gap-2" aria-label="Unlockable characters">
        {PLAYABLE_CHARACTERS.map(character => {
          const available = !character.achievementId || earnedIds.has(character.achievementId);
          const selected = character.id === equippedCharacter;
          const requirement = report?.achievements.find(a => a.id === character.achievementId) ?? ACHIEVEMENTS.find(a => a.id === character.achievementId);
          return <article key={character.id} data-crew={character.id} data-unlocked={available} data-equipped={selected}
            className={`crew-card flex flex-col border ${selected ? "border-amber-300/70" : "border-[#2d3d55]"}`}>
            <div className={`crew-stage relative grid h-24 place-items-center ${available ? "" : "grayscale"}`}>
              <CharacterPortrait characterId={character.id} size={88} dim={!available}/>
              <span className="absolute left-2 top-1 text-xs tracking-wider" style={{ color: available ? character.color : "#8390a4" }}>{character.grade.toUpperCase()}</span>
              {selected && <span className="absolute right-2 top-1 text-amber-300">✓</span>}
            </div>
            <div className="flex flex-1 flex-col p-2.5">
              <h3 className="font-pixel-display text-sm text-slate-100">{character.shortName}</h3>
              <p className="mb-2 text-sm leading-tight text-slate-400">{character.epithet}</p>
              {available ? <button type="button" disabled={selected || !!equipping} onClick={() => equip(character.id)} aria-label={selected ? `${character.shortName} equipped` : `Equip ${character.shortName}`}
                className={`px-btn mt-auto h-8 w-full text-base ${selected ? "bg-amber-300/15 text-amber-200" : "bg-[#25415a] text-cyan-100 hover:bg-[#31566e] disabled:opacity-50"}`}>
                {selected ? "✓ Equipped" : equipping === character.id ? "Equipping…" : "Equip ▸"}
              </button> : <button type="button" onClick={() => { playClick(); setFilter("all"); setView("badges"); setShowRequirement(character.achievementId); }}
                className="mt-auto min-h-8 text-left text-sm leading-tight text-slate-400 underline-offset-2 hover:text-amber-200 hover:underline" aria-label={`View ${requirement?.title} requirement`}>
                ◇ Earn {requirement?.title}
              </button>}
            </div>
          </article>;
        })}
      </div>
    </> : <>
      <div className="mb-3 flex gap-1.5" aria-label="Filter achievements">
        {([['all', 'All'], ['earned', 'Earned'], ['locked', 'Locked']] as const).map(([id, label]) => <button key={id} type="button" aria-pressed={filter === id}
          onClick={() => { playClick(); setFilter(id); }} className={`border px-3 py-1 text-base ${filter === id ? "border-cyan-300/70 bg-cyan-300/10 text-cyan-100" : "border-white/10 text-slate-400 hover:text-white"}`}>{label}</button>)}
        <button type="button" aria-label="Refresh achievements" onClick={() => { playClick(); setRetry(n => n + 1); }} className="ml-auto px-2 text-xl text-slate-400 hover:text-cyan-200">↻</button>
      </div>
      {report && <div className="space-y-2">
        {badges.length === 0 && <p className="border border-dashed border-white/20 p-5 text-center text-slate-400">{filter === "earned" ? "Your first recruit is waiting. Set sail!" : "Every emblem earned. The entire crew is yours."}</p>}
        {badges.map(a => {
          const reward = characterById(a.rewardCharacter), selected = reward.id === equippedCharacter;
          return <details key={a.id} className={`group achievement-card ${a.unlocked ? "achievement-earned" : ""}`} data-achievement={a.id} data-earned={a.unlocked}>
            <summary onClick={playClick} className="flex cursor-pointer list-none gap-3 p-3">
              <div className={`grid h-12 w-12 shrink-0 place-items-center border border-white/10 bg-[#081326] ${a.unlocked ? "" : "grayscale"}`}><PixelEmblem kind={a.emblem} size={40} dim={!a.unlocked}/></div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2"><h3 className={`font-pixel-display text-base leading-snug ${a.unlocked ? "text-amber-100" : "text-slate-200"}`}>{a.title}</h3><span className={`shrink-0 text-sm ${a.unlocked ? "text-amber-300" : "text-slate-500"}`}>{a.unlocked ? "✓" : "◇"}</span></div>
                <p className="mt-0.5 text-base leading-tight text-slate-400">{a.description}</p>
                <p className="mt-1 text-base leading-tight" style={{ color: reward.color }}>{a.unlocked ? "Recruited" : "Unlocks"}: {reward.shortName} <span className="text-xs text-slate-500">· {reward.grade}</span></p>
                {a.unlocked ? <p className="mt-1 text-sm text-emerald-300">Earned{a.unlockedAt ? ` · ${dateLabel(a.unlockedAt)}` : ""}</p> : <>
                  <p className="mt-1 text-sm leading-tight text-cyan-200/70">{a.progressLabel}</p>
                  <div role="progressbar" aria-label={`${a.title} progress`} aria-valuemin={0} aria-valuemax={a.target} aria-valuenow={a.progress} className="mt-1 h-1 bg-[#24334a]">
                    <div className="h-full bg-cyan-400/80 transition-[width]" style={{ width: `${Math.min(100, a.progress / a.target * 100)}%` }}/>
                  </div>
                </>}
              </div>
            </summary>
            <div className="border-t border-white/10 px-3 py-2.5">
              <p className="text-base leading-snug text-slate-300">{a.detail}</p>
              <div className="mt-2 flex items-center gap-3 border border-white/10 bg-[#0a1628] p-2">
                <CharacterPortrait characterId={reward.id} size={64} dim={!a.unlocked} className={a.unlocked ? "shrink-0" : "shrink-0 grayscale"}/>
                <div className="min-w-0 flex-1"><p className="font-pixel-display text-sm text-white">{reward.name}</p><p className="text-sm leading-tight text-slate-400">{reward.detail}</p></div>
              </div>
              {a.unlocked && <button type="button" onClick={() => equip(reward.id)} disabled={selected || !!equipping}
                aria-label={selected ? `${reward.shortName} equipped` : `Equip ${reward.shortName}`} className="px-btn mt-2 h-9 w-full bg-amber-400 text-base tracking-wider text-amber-950 hover:bg-amber-300 disabled:bg-amber-300/15 disabled:text-amber-200">
                {selected ? `✓ ${reward.shortName} equipped` : equipping === reward.id ? "Equipping…" : `EQUIP ${reward.shortName.toUpperCase()} ▸`}
              </button>}
            </div>
          </details>;
        })}
      </div>}
    </>}
    <p className="mt-4 text-sm leading-snug text-slate-400">Characters are cosmetic: same timer, score and travel distance. All recruits and your selected character are saved to your account. Niche means Rare or better. Leaderboard medals settle after the Eastern daily reset.</p>
  </section>;
}
