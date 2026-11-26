"use client";

import { useEffect, useRef } from "react";
import PixelEmblem from "./pixel-emblems";
import { playAchievement, playClick } from "@/lib/sound";
import type { AchievementDef } from "@/lib/achievements";
import CharacterPortrait from "./CharacterPortrait";
import { characterById } from "@/data/playable-characters";

export default function AchievementToast({ unlocked, onDone }: { unlocked: AchievementDef[]; onDone: () => void }) {
  const current = unlocked[0];
  const doneRef = useRef(onDone);
  useEffect(() => { doneRef.current = onDone; }, [onDone]);
  useEffect(() => {
    if (!current?.id) return;
    playAchievement();
    const id = setTimeout(() => doneRef.current(), 4500);
    return () => clearTimeout(id);
  }, [current?.id]);
  if (!current) return null;
  const recruit = characterById(current.rewardCharacter);
  return <div className="achievement-toast" role="status" aria-live="polite" aria-atomic="true">
    <div className="relative shrink-0 border border-amber-300/25 bg-amber-300/5 p-1">
      <CharacterPortrait characterId={recruit.id} size={52}/>
      <PixelEmblem kind={current.emblem} size={18} className="absolute -bottom-1 -right-1"/>
    </div>
    <div className="min-w-0 flex-1"><p className="text-xs tracking-[.2em] text-amber-300">CHARACTER UNLOCKED</p><p className="font-pixel-display text-base leading-snug text-amber-100">{recruit.shortName}</p>
      <p className="text-sm text-slate-300">{current.title} · {recruit.grade}</p>
      {unlocked.length > 1 && <p className="text-sm text-slate-400">+{unlocked.length - 1} more recruits</p>}
    </div>
    <button type="button" aria-label="Dismiss achievement notification" onClick={() => { playClick(); doneRef.current(); }} className="self-start px-1 text-lg text-slate-400 hover:text-white">×</button>
  </div>;
}
