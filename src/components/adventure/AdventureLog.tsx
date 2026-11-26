"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PixelEmblem from "../pixel-emblems";
import type { AdventureResponse } from "@/lib/adventure-types";
import { ADVENTURE_TITLES } from "@/data/adventure/levels";
import { voyageRequest } from "@/lib/voyage-client";
import { playClick } from "@/lib/sound";

export default function AdventureLog({accountId,revision}:{accountId:string;revision:string}){
  const [data,setData]=useState<AdventureResponse|null>(null);
  const [error,setError]=useState('');
  const [retry,setRetry]=useState(0);
  useEffect(()=>{
    const ctrl=new AbortController();setError('');
    voyageRequest<AdventureResponse>('/api/adventure','GET',undefined,ctrl.signal).then(d=>{if(!ctrl.signal.aborted&&d.captain?.id===accountId)setData(d);})
      .catch(e=>{if(!ctrl.signal.aborted)setError(e instanceof Error?e.message:'Could not read your Adventure log.');});
    return()=>ctrl.abort();
  },[accountId,revision,retry]);
  return <section className="adventure-log" aria-labelledby="adventure-log-title">
    <div className="flex items-center justify-between gap-2"><h3 id="adventure-log-title" className="text-sm tracking-[.22em] text-amber-200">GRAND LINE ADVENTURE</h3><Link href="/adventure" onClick={playClick} className="text-sm text-cyan-200 hover:underline">Open map ▸</Link></div>
    {error?<p role="alert" className="text-base text-rose-200">{error} <button type="button" onClick={()=>{playClick();setRetry(n=>n+1);}} className="underline">Retry</button></p>:!data?<p className="py-3 text-slate-400">Reading your sea chart…</p>:<>
      <div className="mt-2 flex items-center justify-between gap-3"><div><p className="font-pixel-display text-xl text-white">{data.profile.title}</p><p className="text-sm text-slate-400">{data.profile.completed}/100 levels cleared · {data.profile.badges.filter(b=>b.earned).length}/10 saga badges</p></div><PixelEmblem kind={data.profile.ultimate.earned?'pirate-king':'first-voyage'} size={40}/></div>
      <div className="my-3 h-1 bg-white/10"><div className="h-full bg-amber-300" style={{width:`${data.profile.completed}%`}}/></div>
      <div className="grid grid-cols-5 gap-1.5" aria-label="Adventure saga badges">{data.profile.badges.map(b=><div key={b.saga} title={`${b.name} — ${b.earned?'Earned':`Clear level ${b.atLevel}`}`} aria-label={`${b.name}: ${b.earned?'Earned':'Locked'}`} className={`grid place-items-center border p-1 ${b.earned?'border-amber-300/40 bg-amber-300/5':'border-white/10 grayscale'}`}><PixelEmblem kind={b.emblem} size={32} dim={!b.earned}/><span className={`text-xs ${b.earned?'text-amber-200':'text-slate-500'}`}>SAGA {b.saga}</span></div>)}</div>
      <details className="mt-3"><summary onClick={playClick} className="cursor-pointer text-base text-cyan-200">Adventure titles ({ADVENTURE_TITLES.filter(t=>t.level<=data.profile.completed).length}/{ADVENTURE_TITLES.length})</summary><ul className="mt-2 space-y-1">{ADVENTURE_TITLES.map(t=><li key={t.level} className={`flex justify-between gap-2 text-base ${data.profile.completed>=t.level?'text-amber-100':'text-slate-500'}`}><span>{data.profile.completed>=t.level?'✓':'◇'} {t.title}</span><span>Level {t.level}</span></li>)}</ul></details>
      <div className={`mt-3 flex items-center gap-2 border p-2 ${data.profile.ultimate.earned?'border-amber-300/50 bg-amber-300/10':'border-white/10'}`}>
        <PixelEmblem kind="pirate-king" size={32} dim={!data.profile.ultimate.earned}/><div><p className="font-pixel-display text-sm text-amber-100">Pirate King · Ultimate Adventure</p><p className="text-sm text-slate-400">{data.profile.ultimate.earned?'Earned — all 100 levels conquered.':'Clear all 100 levels to earn this achievement and title.'}</p></div>
      </div>
    </>}
  </section>;
}
