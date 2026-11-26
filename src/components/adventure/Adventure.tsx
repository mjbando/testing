"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import AdventureMap from "./AdventureMap";
import AdventureLevel from "./AdventureLevel";
import CaptainLog from "../CaptainLog";
import type { Captain, FinishedVoyage, Progress } from "@/lib/voyage";
import { fromRecap, mergeProgress } from "@/lib/voyage";
import { clearCaptainCache, clearLinkedGuest, readLocalRun, voyageRequest } from "@/lib/voyage-client";
import type { AdventureAction, AdventureResponse } from "@/lib/adventure-types";
import { isMuted, playClick, setMuted } from "@/lib/sound";

export default function Adventure(){
  const [data,setData]=useState<AdventureResponse|null>(null);
  const [view,setView]=useState<'map'|'play'>('map');
  const [busy,setBusy]=useState(false),[error,setError]=useState('');
  const [muted,setMutedState]=useState(false);
  const [accountOpen,setAccountOpen]=useState(false),[authProgress,setAuthProgress]=useState<Progress|undefined>();
  const inFlight=useRef(false),scope=useRef(0);
  const load=useCallback(async()=>{
    const version=++scope.current;
    const d=await voyageRequest<AdventureResponse>('/api/adventure');
    if(version!==scope.current)return;
    setData(d);setError('');setBusy(false);inFlight.current=false;
    return d;
  },[]);
  useEffect(()=>{setMutedState(isMuted());void load().catch(e=>setError(e.message));},[load]);
  useEffect(()=>{
    const listener=(event:StorageEvent)=>{if(event.key==='luffillion:session-changed'){setView('map');setAccountOpen(false);void load().catch(e=>setError(e.message));}};
    window.addEventListener('storage',listener);return()=>window.removeEventListener('storage',listener);
  },[load]);
  function toggleMute(){const m=!muted;setMuted(m);setMutedState(m);if(!m)playClick();}
  async function openAccount(){
    playClick();setAuthProgress(undefined);const version=scope.current;
    // Reuse the existing account dialog without starting the daily game or its clock.
    try{
      const d=await voyageRequest<{day:string;questions:{id:string}[];captain:Captain|null;checkpoint:Progress|null;finished:FinishedVoyage|null}>('/api/daily');
      if(version!==scope.current)return;
      const ids=d.questions.map(q=>q.id);
      let p=readLocalRun(d.day,ids,d.captain?.id)??{day:d.day,ids,q:{},runs:[]};
      if(d.checkpoint)p=mergeProgress(d.checkpoint,p);
      if(d.finished)p=fromRecap(d.finished)??p;
      setAuthProgress(p);
    }catch{ /* Sign-in remains available if the daily metadata is offline. */ }
    if(version===scope.current)setAccountOpen(true);
  }
  async function sessionChanged(captain:Captain|null,linkedGuest:boolean){
    const prior=data?.captain?.id;
    await load();setView('map');setAccountOpen(false);
    if(prior&&prior!==captain?.id)clearCaptainCache(prior);
    if(linkedGuest&&authProgress)clearLinkedGuest(authProgress.day);
    try{localStorage.setItem('luffillion:session-changed',String(Date.now()));}catch{}
  }
  async function mutate(action:AdventureAction,guess?:string,level?:number){
    if(inFlight.current||!data)return;
    if(!data.captain){void openAccount();return;}
    inFlight.current=true;setBusy(true);setError('');const version=scope.current;
    try{
      const d=await voyageRequest<AdventureResponse>('/api/adventure','POST',{
        accountId:data.captain.id,action,level,attemptId:data.attempt?.id,cursor:data.attempt?.cursor,guess,
      });
      if(version!==scope.current)return;
      setData(d);if(action==='start')setView('play');if(action==='abandon')setView('map');
    }catch(e){if(version===scope.current)setError(e instanceof Error?e.message:'Could not reach your sea chart. Try again.');}
    finally{if(version===scope.current){setBusy(false);inFlight.current=false;}}
  }
  function selectLevel(level:number){playClick();void mutate('start',undefined,level);}
  async function resume(){
    if(!data?.attempt||inFlight.current)return;playClick();setBusy(true);inFlight.current=true;
    const version=scope.current;
    try{const d=await voyageRequest<AdventureResponse>(`/api/adventure?attempt=${data.attempt.id}`);if(version!==scope.current)return;setData(d);setView('play');setError('');}
    catch(e){if(version===scope.current)setError(e instanceof Error?e.message:'Could not resume.');}
    finally{if(version===scope.current){inFlight.current=false;setBusy(false);}}
  }
  function abandon(){playClick();if(window.confirm('Abandon this level attempt? Your cleared islands are safe, but this attempt will not unlock a level.'))void mutate('abandon');}
  if(!data)return <main className="adv-loading"><span className="adv-eyebrow">LUFFILLION ADVENTURE</span><h1>Charting the Grand Line…</h1>{error&&<><p role="alert">{error}</p><button type="button" onClick={()=>void load().catch(e=>setError(e.message))}>Try again</button></>}<Link href="/">← Daily voyage</Link></main>;
  return <>
    {accountOpen&&<CaptainLog captain={data.captain} progress={authProgress} clockRunning={!!data.attempt?.question} historyRevision={`adventure:${data.profile.completed}:${data.attempt?.id??''}`} saveMessage="Adventure progress is saved separately from your daily voyage." onSessionChange={sessionChanged} onClose={()=>setAccountOpen(false)}/>}
    {view==='play'&&data.attempt?<AdventureLevel key={data.attempt.id} data={data} busy={busy} error={error} muted={muted} onMute={toggleMute} onMap={()=>setView('map')} onAction={mutate} onSelect={selectLevel}/>
      :<AdventureMap data={data} busy={busy} error={error} onSelect={selectLevel} onResume={()=>void resume()} onAbandon={abandon} onAccount={()=>void openAccount()}/>}
  </>;
}
