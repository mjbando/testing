"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { ArrowLeft, Flag, Swords, Volume2, VolumeX } from "lucide-react";
import IslandArt from "./IslandArt";
import PixelEmblem from "../pixel-emblems";
import { runnerSprite } from "../pixel/runners";
import { ADVENTURE_LEVELS, ADVENTURE_MAX, ADVENTURE_POINTS, ADVENTURE_QUESTIONS, ADVENTURE_SECONDS, ADVENTURE_SAGAS, ADVENTURE_TITLES } from "@/data/adventure/levels";
import type { AdventureAction, AdventureResponse } from "@/lib/adventure-types";
import { characterById, type CharacterId } from "@/data/playable-characters";
import { playAchievement, playClick, playNext, playPull, playSetSail, playTick, playTimeout, playWrong, startRunSound } from "@/lib/sound";

function Runner({characterId,moving}:{characterId:CharacterId;moving:boolean}){
  const [time,setTime]=useState(0);
  useEffect(()=>{if(!moving)return;const id=setInterval(()=>setTime(t=>t+110),110);return()=>clearInterval(id);},[moving]);
  const sprite=runnerSprite(characterId,moving,time);
  return <svg viewBox="0 0 32 32" width="100" height="100" shapeRendering="crispEdges" aria-hidden="true">{sprite.rows.flatMap((row,y)=>[...row].map((p,x)=>sprite.palette[p]?<rect key={`${x}:${y}`} x={Math.floor((32-sprite.width)/2)+x} y={31-sprite.height+y} width={1} height={1} fill={sprite.palette[p]}/>:null))}</svg>;
}

export default function AdventureLevel({data,busy,error,muted,onMute,onMap,onAction,onSelect}:{
  data:AdventureResponse;busy:boolean;error:string;muted:boolean;onMute:()=>void;onMap:()=>void;
  onAction:(action:AdventureAction,guess?:string)=>Promise<void>;onSelect:(level:number)=>void;
}){
  const attempt=data.attempt!;
  const level=ADVENTURE_LEVELS[attempt.level-1],saga=ADVENTURE_SAGAS[level.saga-1];
  const done=attempt.status!=="active",passed=attempt.status==="passed";
  const [guess,setGuess]=useState('');
  const [now,setNow]=useState(0);
  const [moving,setMoving]=useState(false);
  const clock=useRef({server:data.serverNow,perf:0});
  const input=useRef<HTMLInputElement>(null);
  const lastEffect=useRef(''),lastTick=useRef(''),expiring=useRef(false);
  const runTimer=useRef<ReturnType<typeof setTimeout>|null>(null),stopSteps=useRef<(()=>void)|null>(null);
  useEffect(()=>()=>{if(runTimer.current)clearTimeout(runTimer.current);stopSteps.current?.();},[]);
  useEffect(()=>{clock.current={server:data.serverNow,perf:performance.now()};setNow(performance.now());},[data.serverNow]);
  useEffect(()=>{const id=setInterval(()=>setNow(performance.now()),100);return()=>clearInterval(id);},[]);
  const remaining=attempt.deadline?Math.min(ADVENTURE_SECONDS,Math.max(0,Math.ceil((attempt.deadline-(clock.current.server+now-clock.current.perf))/1000))):ADVENTURE_SECONDS;
  useEffect(()=>{setGuess('');if(attempt.question)input.current?.focus();},[attempt.id,attempt.cursor,attempt.question?.id]);
  useEffect(()=>{
    if(!attempt.question||remaining>0||busy||expiring.current)return;
    expiring.current=true;
    void onAction('timeout').finally(()=>{expiring.current=false;});
  },[attempt.question,remaining,busy,onAction]);
  useEffect(()=>{
    if(!attempt.question||remaining>5||remaining<1)return;
    const key=`${attempt.id}:${attempt.cursor}:${remaining}`;
    if(lastTick.current!==key){lastTick.current=key;playTick(remaining<=3);}
  },[remaining,attempt.id,attempt.cursor,attempt.question]);
  useEffect(()=>{
    const key=`${attempt.id}:${attempt.cursor}:${data.feedback?.kind}:${data.serverNow}`;
    if(!data.feedback||lastEffect.current===key)return;
    lastEffect.current=key;
    if(data.feedback.kind==='correct'){
      const depth=attempt.lastResult?.depth??1;
      const tier=depth>=5?'epic':depth>=3?'rare':'uncommon';
      playPull(tier);setMoving(true);
      if(runTimer.current)clearTimeout(runTimer.current);
      stopSteps.current?.();
      const stop=startRunSound(tier);stopSteps.current=stop;
      runTimer.current=setTimeout(()=>{stop();setMoving(false);if(passed)playAchievement();},1200);
    }
    if(data.feedback.kind==='wrong')playWrong();
    if(data.feedback.kind==='expired')playTimeout();
  },[data.feedback?.kind,data.serverNow,attempt.id,attempt.cursor,attempt.lastResult?.depth,passed]);

  function submit(e:FormEvent){e.preventDefault();if(!guess.trim()||busy)return;playClick();void onAction('guess',guess.trim());setGuess('');}
  const titleAward=ADVENTURE_TITLES.find(t=>t.level===level.number);
  const last=attempt.lastResult;
  return <main className={`adv-play adv-play-saga-${level.saga}`} style={{'--saga-color':saga.color} as CSSProperties}>
    <div className="adv-play-island"><IslandArt arc={level.arc}/></div><div className="adv-play-shore"/>
    <header className="adv-play-header"><button type="button" onClick={()=>{playClick();onMap();}}><ArrowLeft size={16}/> Island map</button><span>ADVENTURE · LEVEL {level.number}</span><button type="button" onClick={onMute} aria-label={muted?'Unmute sound effects':'Mute sound effects'}>{muted?<VolumeX size={18}/>:<Volume2 size={18}/>}</button></header>
    <section className="adv-play-hud"><div><p className="adv-eyebrow">{level.boss?'BOSS CHALLENGE':saga.name.toUpperCase()}</p><h1>{level.name}</h1><p>{level.difficulty}</p></div><div className="adv-play-score"><span>{attempt.score}<small> / 700</small></span><p>TARGET {level.target} PTS</p></div></section>
    <div className="adv-round-dots" aria-label="Question progress">{attempt.outcomes.map((status,i)=><span key={i} className={status==='solved'?'is-correct':status==='expired'?'is-expired':i===attempt.cursor?'is-current':''} aria-label={`Question ${i+1}: ${status??(i===attempt.cursor?'current':'not started')}`}>{status==='solved'?'✓':status==='expired'?'×':i+1}</span>)}</div>
    <section className="adv-question px-box px-scan" aria-live="polite">
      {done?<>
        <p className="adv-eyebrow">{passed?'ISLAND CLEARED':attempt.status==='abandoned'?'VOYAGE ABANDONED':'NOT QUITE THERE YET'}</p>
        <h2>{passed?(level.number===100?'You are the Pirate King!':level.boss?'Boss defeated!':'Onward, captain.'):"Another voyage awaits."}</h2>
        <p>{attempt.correct}/7 correct · <strong>{attempt.score}/{ADVENTURE_MAX} points</strong> · {passed?'Target reached.':`${level.target} points needed.`}</p>
        {passed&&titleAward&&<div className="adv-earned-title"><PixelEmblem kind={level.number===100?'pirate-king':'seal'} size={36}/><span><small>ADVENTURE TITLE EARNED</small><strong>{titleAward.title}</strong></span></div>}
        {passed&&level.boss&&<p className="adv-badge-note">✓ {saga.name} badge added to your Captain&apos;s Log.</p>}
        {passed&&level.number<100&&<p className="adv-badge-note">Level {level.number+1} · {ADVENTURE_LEVELS[level.number].name} is unlocked.</p>}
        <div className="adv-result-actions"><button type="button" className="adv-primary" disabled={busy} onClick={()=>{playNext();onSelect(passed&&level.number<100?level.number+1:level.number);}}>{passed&&level.number<100?'NEXT LEVEL ▸':'RETRY LEVEL ↻'}</button><button type="button" className="adv-secondary" onClick={()=>{playClick();onMap();}}>VIEW MAP</button></div>
        {attempt.recap&&<details className="adv-recap"><summary onClick={playClick}>Review all 7 answers ↓</summary><ol>{attempt.recap.map((r,i)=><li key={i}><p>{i+1}. {r.prompt}</p><strong className={r.correct?'text-emerald-300':'text-rose-300'}>{r.correct?`✓ ${r.answer} · +100`:'Time expired · 0 pts'}</strong><span>Accepted: {r.accepted.join(' / ')}</span></li>)}</ol></details>}
      </>:attempt.question?<>
        <p className="adv-eyebrow">QUESTION {attempt.cursor+1} OF 7 · {attempt.question.depth>=5?'DEEP LORE':attempt.question.depth>=3?'STORY DETAIL':'CORE LORE'}</p>
        <h2>{attempt.question.prompt}</h2><p>{attempt.question.hint}</p><span className="adv-question-value">100 POINTS · UNLIMITED GUESSES UNTIL THE TIMER ENDS</span>
      </>:<>
        <p className="adv-eyebrow">{last?`QUESTION ${attempt.cursor} COMPLETE`:level.boss?'PREPARE FOR THE BOSS':'YOUR NEXT ISLAND'}</p>
        {last?<><h2 className={last.correct?'text-emerald-200':'text-rose-200'}>{last.correct?'+100 points!':"Time's up."}</h2><p>{last.correct?last.answer:'No points this question. Keep sailing.'}</p></>:<><h2>{level.boss?'Ready for a real challenge?':'Ready to set sail?'}</h2><p>{level.boss?'Seven of this saga’s deepest lore questions.':'Seven questions about this arc.'} Reach <strong>{level.target} points</strong> to clear the level.</p><p>25 seconds per question · 100 points per correct answer.<br/>Your progress is saved. Retry as often as you like.</p></>}
        <button type="button" className="adv-primary" disabled={busy} onClick={()=>{last?playNext():playSetSail();void onAction('begin');}}>{busy?'READYING…':last?'NEXT QUESTION ▸':'⚓ SET SAIL ▸'}</button>
        <small>The next question stays hidden until you start its timer.</small>
      </>}
      {error&&<p role="alert" className="adv-error">{error}</p>}
    </section>
    <div className={`adv-traveler ${moving?'is-moving':''}`} style={{left:`${15+attempt.score/ADVENTURE_MAX*68}%`}}><Runner characterId={data.equippedCharacter} moving={moving}/><span>{characterById(data.equippedCharacter).shortName}</span></div>
    {attempt.question&&!done&&<footer className="adv-answer-bar">
      {data.feedback?.kind==='wrong'&&<div className="adv-feedback" role="status">{data.feedback.suggestion?<button type="button" disabled={busy} onClick={()=>{playClick();void onAction('guess',data.feedback!.suggestion!);}}>Did you mean <strong>{data.feedback.suggestion}</strong>? Use this answer ▸</button>:"Not quite. Keep guessing—there's no penalty."}</div>}
      <form onSubmit={submit}><div className={`adv-clock ${remaining<=5?'urgent':''}`} aria-label={`${remaining} seconds remaining`}><svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="24"/><circle cx="28" cy="28" r="24" style={{strokeDasharray:150.8,strokeDashoffset:150.8*(1-remaining/ADVENTURE_SECONDS)}}/></svg><span>{remaining}</span></div>
        <input ref={input} value={guess} onChange={e=>setGuess(e.target.value)} maxLength={256} placeholder="Type one answer…" aria-label="Adventure answer" autoComplete="off" disabled={remaining===0}/>
        <button type="submit" disabled={busy||!guess.trim()||remaining===0} className="adv-primary">{busy?'…':'ANSWER ▸'}</button>
      </form><p><Flag size={12}/> {attempt.score} / {level.target} points to clear {level.boss&&<Swords size={12}/>}</p>
    </footer>}
  </main>;
}
