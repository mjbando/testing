"use client";

import { useEffect, useState } from "react";
import PixelEmblem from "./pixel-emblems";
import type { Captain } from "@/lib/voyage";
import { voyageRequest } from "@/lib/voyage-client";
import { playClick } from "@/lib/sound";

interface BoardRow { rank: number; username: string; total: number; isYou: boolean }
interface BoardData {
  top: BoardRow[];
  you: { total: number; today: number; rank: number; count: number } | null;
  today: string;
}

export default function BountiesPanel({ captain, onSignIn }: { captain: Captain | null; onSignIn: () => void }) {
  const [data, setData] = useState<BoardData | null>(null);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let live = true;
    setError("");
    voyageRequest<BoardData>("/api/bounties")
      .then(d => { if (live) setData(d); })
      .catch(e => { if (live) setError(e instanceof Error ? e.message : "Couldn't load the bounty board."); });
    return () => { live = false; };
  }, [captain?.id, retry]);

  const you = data?.you ?? null;

  return (
    <div className="px-3 py-3">
      <header className="mb-3 flex items-center gap-3">
        <div className="grid h-14 w-14 shrink-0 place-items-center border border-amber-300/25 bg-amber-300/[.06]">
          <PixelEmblem kind="treasure" size={36} />
        </div>
        <div className="flex-1">
          <p className="text-xs tracking-[.25em] text-amber-300">DEEP-SEA BOUNTIES</p>
          <h2 className="font-pixel-display text-xl font-bold text-white">Top 50 bounties</h2>
          <p className="text-sm text-slate-400">Highest bounties after the daily voyage. Ranked by total.</p>
        </div>
      </header>

      {error && (
        <p role="alert" className="mb-3 border-l-2 border-rose-400 px-2 py-1 text-base text-rose-200">
          {error} <button type="button" onClick={() => { playClick(); setRetry(n => n + 1); }} className="underline">Retry</button>
        </p>
      )}
      {!data && !error && <p className="py-6 text-center text-cyan-200">Consulting the bounty board…</p>}

      {data && (
        <div className="space-y-3">
          {captain ? (
            <div className="border border-cyan-300/25 bg-cyan-300/[.05] p-3">
              <p className="text-xs tracking-[.2em] text-cyan-200">YOUR BOUNTY</p>
              <p className="font-pixel-display text-4xl text-white">
                {you?.total ?? 0}
                <span className="ml-1 text-base text-slate-400">berries</span>
              </p>
              <div className="mt-2 grid grid-cols-3 gap-1.5 text-center">
                {[["RANK", you ? `#${you.rank}` : "—"], ["TODAY +", you && you.today ? `+${you.today}` : "—"], ["CREW", `#${you?.count ?? 0}`]].map(([label, value]) => (
                  <div key={label} className="bg-white/5 py-1">
                    <p className="text-xs tracking-widest text-slate-500">{label}</p>
                    <p className="text-lg text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="border border-amber-300/30 bg-amber-300/[.07] p-3 text-center">
              <p className="text-base leading-tight text-slate-200">Bounties are earned by signed-in captains only.</p>
              <p className="mt-1 text-sm text-slate-400">Create a free account to start a streak and stack berries.</p>
              <button type="button" onClick={() => { playClick(); onSignIn(); }} className="px-btn mt-2 h-9 bg-amber-400 px-5 text-base text-amber-950 hover:bg-amber-300">
                SIGN IN / CREATE ACCOUNT ▸
              </button>
            </div>
          )}

          <ol className="max-h-72 space-y-1 overflow-y-auto pr-1">
            {data.top.map(row => (
              <li
                key={row.rank}
                className={`flex items-center gap-2 border px-2 py-1.5 ${row.isYou ? "border-amber-300/60 bg-amber-300/10 text-amber-100" : "border-white/5 bg-white/[.03] text-slate-300"}`}
              >
                <span className={`w-8 text-right font-pixel-display text-base ${row.isYou ? "text-amber-300" : row.rank <= 3 ? "text-amber-200" : "text-slate-500"}`}>
                  {row.rank <= 3 ? `#${row.rank}` : `${row.rank}`}
                </span>
                <span className="min-w-0 flex-1 truncate text-base">{row.username}{row.isYou && <span className="ml-1.5 text-xs tracking-widest text-amber-300">YOU</span>}</span>
                <span className="shrink-0 text-lg tabular-nums text-amber-200">{row.total}</span>
              </li>
            ))}
          </ol>
          {data.top.length === 0 && (
            <p className="border border-dashed border-white/15 px-3 py-4 text-center text-base text-slate-400">No captains on the board yet. Be the first to lay a bounty.</p>
          )}
          <p className="text-xs leading-snug text-slate-500">Correct answers earn 50 berries. Bonus berries are added for every point traveled, so rarer and higher-distance runs pay best. Board refreshes each daily voyage.</p>
        </div>
      )}
    </div>
  );
}
