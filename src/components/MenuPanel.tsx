"use client";

import { useEffect, useRef, type ReactNode, type KeyboardEvent } from "react";
import { Archive, ScrollText, X, Trophy } from "lucide-react";
import PixelEmblem from "./pixel-emblems";
import type { Captain } from "@/lib/voyage";
import { playClick } from "@/lib/sound";

export type MenuTab = "log" | "achievements" | "archive" | "bounties";
const options = [
  { id: "log", title: "Run Log" },
  { id: "achievements", title: "Achievements" },
  { id: "archive", title: "Archive" },
  { id: "bounties", title: "Bounties" },
] as const;

export default function MenuPanel({ tab, captain, onSwitch, onClose, children }: {
  tab: MenuTab;
  captain: Captain | null;
  onSwitch: (tab: MenuTab) => void;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; }, [onClose]);
  // The game clock updates ten times a second. Never steal focus on those renders.
  useEffect(() => {
    const previous = document.activeElement;
    ref.current?.querySelector<HTMLButtonElement>('[role="tab"][aria-selected="true"]')?.focus();
    const close = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") { playClick(); closeRef.current(); }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      if (previous instanceof HTMLElement && previous.isConnected) previous.focus();
    };
  }, []);
  function navigate(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = e.key === "ArrowRight" ? (index + 1) % 4 : e.key === "ArrowLeft" ? (index + 3) % 4 : e.key === "Home" ? 0 : e.key === "End" ? 3 : -1;
    if (next < 0) return;
    e.preventDefault();
    ref.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }
  return <div ref={ref} id="game-menu" role="dialog" aria-label="Game menu" className="voyage-menu px-box px-scan">
    <div className="flex shrink-0 items-stretch border-b border-white/10">
      <div role="tablist" aria-label="Game menu sections" className="grid min-w-0 flex-1 grid-cols-4">
        {options.map((item, index) => <button key={item.id} type="button" id={`menu-tab-${item.id}`} role="tab"
          aria-selected={tab === item.id} aria-controls={`menu-panel-${item.id}`} onKeyDown={e => navigate(e, index)}
          onClick={() => { playClick(); onSwitch(item.id); }}
          className={`flex h-14 flex-col items-center justify-center gap-0.5 border-b-2 text-base transition-colors ${tab === item.id ? "border-amber-300 bg-[#21314a] text-amber-200" : "border-transparent text-slate-300 hover:bg-white/5 hover:text-white"}`}>
          {item.id === "achievements" ? <PixelEmblem kind="seal" size={18} /> : item.id === "archive" ? <Archive size={16} aria-hidden="true"/> : item.id === "bounties" ? <Trophy size={16} aria-hidden="true"/> : <ScrollText size={16} aria-hidden="true"/>}
          {item.title}
        </button>)}
      </div>
      <button type="button" aria-label="Close menu" onClick={() => { playClick(); onClose(); }} className="w-9 shrink-0 border-l border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"><X size={16} className="mx-auto"/></button>
    </div>
    <div role="tabpanel" id={`menu-panel-${tab}`} aria-labelledby={`menu-tab-${tab}`} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
      {children}
    </div>
    <div className="shrink-0 border-t border-white/10 px-4 py-1.5 text-sm text-slate-400">{captain ? `Captain ${captain.username} · saved across devices` : "Guest voyage · saved on this device"}</div>
  </div>;
}
