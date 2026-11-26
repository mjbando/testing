"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { Anchor, ArrowLeft, Check, Compass, LockKeyhole, Swords, Trophy } from "lucide-react";
import IslandArt from "./IslandArt";
import CharacterPortrait from "../CharacterPortrait";
import { ADVENTURE_LEVELS, ADVENTURE_SAGAS, ADVENTURE_MAX } from "@/data/adventure/levels";
import type { AdventureResponse } from "@/lib/adventure-types";
import { playClick } from "@/lib/sound";

export default function AdventureMap({data,busy,error,onSelect,onResume,onAbandon,onAccount}:{
  data:AdventureResponse;busy:boolean;error:string;onSelect:(level:number)=>void;onResume:()=>void;onAbandon:()=>void;onAccount:()=>void;
}){
  const {profile,captain,attempt}=data;
  const next=ADVENTURE_LEVELS[Math.min(profile.completed,99)];
  const [chart,setChart]=useState(next.saga);
  const active=attempt?.status==="active"?attempt:null;
  const best=new Map(profile.clears.map(c=>[c.level,c.bestScore]));
  function jump(saga:number){playClick();setChart(saga);document.getElementById(`adventure-saga-${saga}`)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
  return <main className="adventure-map">
    <header className="adv-topbar">
      <Link href="/" onClick={playClick} className="adv-back"><ArrowLeft size={16}/> Daily voyage</Link>
      <div className="adv-brand"><Anchor size={20}/><span>LUFFILLION <small>ADVENTURE</small></span></div>
      <button type="button" onClick={onAccount} className="adv-account">{captain?captain.username:"Sign in / Join the crew"}</button>
    </header>
    <div className="adv-page">
      <section className="adv-intro">
        <p className="adv-eyebrow">A NEW WAY TO SET SAIL</p>
        <h1>The Grand Line awaits.</h1>
        <p>100 levels. 10 sagas. One destination. Follow the story, clear each island, and earn your place at Laugh Tale.</p>
        <div className="adv-intro-stats"><span><Compass size={15}/> Arc-specific questions</span><span><Swords size={15}/> 10 boss challenges</span><span><Anchor size={15}/> Saved to your account</span></div>
      </section>
      <div className="adv-layout">
        <aside className="adv-aside">
          <div className="adv-passport">
            <div className="adv-passport-head"><CharacterPortrait characterId={data.equippedCharacter} size={68}/><div><p className="adv-eyebrow">{captain?`CAPTAIN ${captain.username}`:"YOUR JOURNEY STARTS HERE"}</p><h2>{profile.title}</h2><span>{profile.completed} / 100 levels cleared</span></div></div>
            <div className="adv-progress"><div style={{width:`${profile.completed}%`}}/></div>
            <p className="adv-next-title">{profile.nextTitle?<>Next title: <strong>{profile.nextTitle.title}</strong> at level {profile.nextTitle.level}</>:<>The Grand Line is yours. <strong>Pirate King.</strong></>}</p>
            <div className="adv-current-island"><IslandArt arc={next.arc}/></div>
            <p className="adv-eyebrow">{profile.completed===100?"FINAL ISLAND REACHED":"CURRENT COURSE"}</p>
            <h3>Level {next.number} · {next.name}</h3>
            <p className="adv-small">{next.target}/{ADVENTURE_MAX} points to clear · {next.difficulty}</p>
            <button type="button" disabled={busy} className="adv-primary" onClick={()=>onSelect(active?.level??next.number)}>{busy?"CHARTING COURSE…":active?"RESUME YOUR VOYAGE ▸":profile.completed===100?"REVISIT LAUGH TALE ▸":"SAIL TO THIS LEVEL ▸"}</button>
            <button type="button" className="adv-quiet" onClick={()=>{playClick();document.getElementById(`adventure-level-${next.number}`)?.scrollIntoView({block:'center',behavior:'smooth'});}}>Find my next level ↓</button>
          </div>
          <div className="adv-rules">
            <h3>THE PIRATE CODE</h3>
            <p>7 questions per level. 25 seconds each. Every correct answer earns 100 points.</p>
            <p>Finish all seven and meet the score target to unlock the next island. Retry as often as you like.</p>
            <p>Bosses test deep lore. Adventure never uses your daily attempt or changes the daily leaderboard.</p>
          </div>
        </aside>
        <div className="adv-chart">
          <nav className="adv-saga-nav" aria-label="Jump to saga">
            {ADVENTURE_SAGAS.map(s=><button type="button" key={s.number} onClick={()=>jump(s.number)} aria-pressed={chart===s.number} title={s.name} style={{'--saga-color':s.color} as CSSProperties}>
              <span>{String(s.number).padStart(2,'0')}</span><span>{s.name}</span>{profile.completed>=s.number*10&&<Check size={12}/>}</button>)}
          </nav>
          {!captain&&<div className="adv-callout"><LockKeyhole size={18}/><p>Explore the whole map. <button type="button" onClick={onAccount}>Sign in or create an account</button> to begin level 1 and save your voyage.</p></div>}
          {active&&<div className="adv-resume"><div><p className="adv-eyebrow">A VOYAGE IS IN PROGRESS</p><p>Level {active.level} · {ADVENTURE_LEVELS[active.level-1].name}</p><small>A started question&apos;s timer keeps running when you leave.</small></div><button type="button" onClick={onResume} disabled={busy}>Resume ▸</button><button type="button" onClick={onAbandon} disabled={busy} className="adv-abandon">Abandon</button></div>}
          {error&&<p role="alert" className="adv-error">{error}</p>}
          <div className="adv-map-key"><span><i className="key-current"/> Available</span><span><i className="key-cleared"/> Cleared</span><span><i className="key-locked"/> Locked</span><span><Swords size={12}/> Boss</span></div>
          {ADVENTURE_SAGAS.map(saga=>{
            const levels=ADVENTURE_LEVELS.filter(l=>l.saga===saga.number);
            const cleared=Math.max(0,Math.min(10,profile.completed-(saga.number-1)*10));
            return <section key={saga.number} id={`adventure-saga-${saga.number}`} className="adv-saga" style={{'--saga-color':saga.color} as CSSProperties} aria-labelledby={`saga-title-${saga.number}`}>
              <div className="adv-saga-heading"><span className="adv-saga-number">{String(saga.number).padStart(2,'0')}</span><div><p className="adv-eyebrow">LEVELS {(saga.number-1)*10+1}—{saga.number*10} · {levels[0].difficulty}</p><h2 id={`saga-title-${saga.number}`}>{saga.name}</h2><p>{saga.subtitle}</p></div><span className="adv-saga-clear">{cleared===10?<Trophy size={20}/>:<>{cleared}<small>/10</small></>}</span></div>
              <div className="adv-level-grid">
                <svg className="adv-route adv-route-desktop" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true"><path d="M100 82H900V262H100"/></svg>
                <svg className="adv-route adv-route-mobile" viewBox="0 0 500 900" preserveAspectRatio="none" aria-hidden="true"><path d="M125 82H375V262H125V442H375V622H125V802H375"/></svg>
                {levels.map((level,index)=>{
                  const locked=level.number>profile.unlockedThrough, done=level.number<=profile.completed;
                  const row=Math.floor(index/5),col=row%2===0?index%5:4-index%5;
                  const mobileRow=Math.floor(index/2),mobileCol=mobileRow%2===0?index%2:1-index%2;
                  return <button type="button" key={level.number} id={`adventure-level-${level.number}`} data-level={level.number} data-state={locked?'locked':done?'cleared':'available'}
                    disabled={locked||busy} onClick={()=>onSelect(level.number)} title={locked?`Clear level ${level.number-1} to unlock`:level.name}
                    aria-label={`Level ${level.number}: ${level.name}. ${locked?'Locked':done?'Cleared, replay available':'Available'}. Target ${level.target} points.`}
                    className={`adv-level ${level.boss?'adv-boss':''}`}
                    style={{'--col':col+1,'--row':row+1,'--mcol':mobileCol+1,'--mrow':mobileRow+1} as CSSProperties}>
                    <span className="adv-level-art"><IslandArt arc={level.arc}/><span className="adv-level-status">{locked?<LockKeyhole size={12}/>:done?<Check size={14}/>:<Anchor size={14}/>}</span></span>
                    <span className="adv-level-number">{level.boss&&<Swords size={12}/>} {String(level.number).padStart(2,'0')}</span>
                    <span className="adv-level-name">{level.number===100?"Pirate King Final":level.boss?"Boss Challenge":level.name}</span>
                    <span className="adv-level-score">{done?`Best ${best.get(level.number)??0} / 700`:locked?'Uncharted':`Target ${level.target} pts`}</span>
                  </button>;
                })}
              </div>
              <div className="adv-saga-footer"><span>{cleared===10?"✓ Saga badge earned":`Clear level ${saga.number*10} to earn this saga's badge`}</span><span>{saga.number===10?"Final title: Pirate King":`Title: ${["Bounty Hunter","Rookie Pirate","Veteran Pirate","Notorious Pirate","Supernova","Commander","Legendary Pirate","Warlord","Emperor of the Sea"][saga.number-1]}`}</span></div>
            </section>;
          })}
          <footer className="adv-map-footer"><Anchor size={20}/><p>The journey is the treasure.</p><span>Laugh Tale is a fan-imagined destination; its full canonical appearance remains unrevealed.</span><Link href="/" onClick={playClick}>← Return to the daily voyage</Link></footer>
        </div>
      </div>
    </div>
  </main>;
}
