// Run against the production preview: npx tsx scripts/check-achievements.ts
import "dotenv/config";
import assert from "node:assert/strict";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { and, eq, inArray } from "drizzle-orm";
import { db, pool } from "../src/db";
import { accounts, achievementUnlocks, authWindows, runs } from "../src/db/schema";
import { checkGuess, getDailyRun, parseEntries } from "../src/lib/daily";
import type { AchievementReport } from "../src/lib/achievements";

const origin='http://localhost:3000';
const suffix=randomUUID().replaceAll('-','').slice(0,10);
const names=['a','b','c'].map(n=>`ach_${suffix}_${n}`);
const password=randomBytes(24).toString('base64url');
const address=`achievements-${suffix}`;
const accountIds: string[]=[];
const guestIds=new Set<string>();

class Browser {
  cookies=new Map<string,string>();
  async send(path: string, method='GET', body?: unknown, status=200) {
    const res=await fetch(origin+path,{method,headers:{origin,'content-type':'application/json','x-real-ip':address,cookie:[...this.cookies].map(([k,v])=>`${k}=${v}`).join('; ')},body:body===undefined?undefined:JSON.stringify(body)});
    for(const cookie of res.headers.getSetCookie()) {
      const pair=cookie.split(';')[0], index=pair.indexOf('='), k=pair.slice(0,index),v=pair.slice(index+1);
      if(v)this.cookies.set(k,v);else this.cookies.delete(k);
      if(k==='luffillion_guest' && v) guestIds.add(v);
    }
    const data=await res.json();
    assert.equal(res.status,status,`${method} ${path}: ${data.error??res.status}`);
    return data;
  }
  async register(name: string, includeGuest=false) {
    const data=await this.send('/api/account','POST',{action:'register',username:name,password,includeGuest},201);
    accountIds.push(data.captain.id);
    return data.captain.id as string;
  }
  report(): Promise<AchievementReport> { return this.send('/api/account/achievements'); }
}
const unlocked=(report: AchievementReport)=>report.achievements.filter(a=>a.unlocked).map(a=>a.id);

async function main(){
  const a=new Browser();
  const daily=await a.send('/api/daily');
  await a.send('/api/account/achievements','GET',undefined,401);
  const day=daily.day as string;
  const questions=getDailyRun(day);
  const answers=questions.map(q=>{
    const entry=parseEntries(q).find(e=>e.tier==='luffillion' && checkGuess(q,e.name)?.tier==='luffillion');
    assert.ok(entry,`Luffillion canonical answer in ${q.id}`);return entry.name;
  });
  const id=await a.register(names[0]);
  assert.equal(unlocked(await a.report()).length,0);
  const ids=questions.map(q=>q.id);
  const checkpoint=(count:number)=>({day,ids,q:Object.fromEntries(Array.from({length:count},(_,i)=>[i,{started:Date.now()-3000,status:'solved',answer:answers[i],attempts:1,wrong:[] as string[]}]))});
  const first=await a.send('/api/account/progress','PUT',{accountId:id,progress:checkpoint(1)});
  assert.ok(first.newlyUnlocked.includes('one-in-a-luffillion'));
  assert.equal(unlocked(await a.report()).includes('first-voyage'),false);
  const five=await a.send('/api/account/progress','PUT',{accountId:id,progress:checkpoint(5)});
  assert.ok(five.newlyUnlocked.includes('laugh-tale'));
  console.log('PASS Luffillion and Laugh Tale unlock during the run, not just at the end');

  const finished=await a.send('/api/run','POST',{accountId:id,day,answers,mistakes:0});
  assert.equal(finished.finished.score,700);assert.equal(finished.finished.niche,7);assert.equal(finished.finished.mistakes,0);
  const earned=await a.report();
  for(const badge of ['first-voyage','perfect-run','no-mistakes','rising-supernova','one-in-a-luffillion','laugh-tale'])assert.ok(unlocked(earned).includes(badge),badge);
  for(const badge of ['pirate-king','yonko-status'])assert.equal(unlocked(earned).includes(badge),false,'today has not closed');
  assert.ok(earned.achievements.filter(a=>a.unlocked).every(a=>a.unlockedAt));
  const re=await a.send('/api/run','POST',{accountId:id,day,answers:Array(7).fill(''),mistakes:15});
  assert.equal(re.finished.score,700);assert.equal(re.finished.mistakes,0);assert.equal(re.newlyUnlocked.length,0);
  assert.equal(re.total,finished.total);
  console.log('PASS saved dates, six immediate badges, daily leaderboard pending, and idempotent completion');

  const b=new Browser();await b.send('/api/daily');const idB=await b.register(names[1]);
  const errorCheckpoint=checkpoint(1);errorCheckpoint.q[0].wrong=['bad guess'];errorCheckpoint.q[0].attempts=3;
  await b.send('/api/account/progress','PUT',{accountId:idB,progress:errorCheckpoint});
  const bad=await b.send('/api/run','POST',{accountId:idB,day,answers,mistakes:0});
  assert.equal(bad.finished.mistakes,2);
  assert.equal(unlocked(await b.report()).includes('no-mistakes'),false);
  assert.equal(unlocked(await b.report()).includes('perfect-run'),true);
  console.log('PASS recorded wrong guesses cannot be erased by a zero-mistake submission');

  const historyDays=Array.from({length:99},(_,i)=>{
    const d=new Date('2001-01-01T12:00:00Z'); d.setUTCDate(d.getUTCDate()+i);return d.toISOString().slice(0,10);
  });
  await db.insert(runs).values(historyDays.map(dayKey=>({dayKey,accountId:id,playerId:`account:${id}`,score:700,solved:7,niche:7,mistakes:0,legs:finished.finished.legs})));
  const leagueDay=historyDays[98];
  const competitors=Array.from({length:10},(_,i)=>({dayKey:leagueDay,playerId:`ach-${suffix}-peer-${i}`,score:i*50,solved:3}));
  competitors.forEach(c=>guestIds.add(c.playerId));
  await db.insert(runs).values(competitors);
  const historyAwards=await a.report();
  assert.equal(unlocked(historyAwards).length,15);
  assert.equal(historyAwards.newlyUnlocked.length,9);
  assert.equal((await a.report()).newlyUnlocked.length,0);
  const otherDevice=new Browser();await otherDevice.send('/api/daily');await otherDevice.send('/api/account','POST',{action:'login',username:names[0],password});
  assert.equal(unlocked(await otherDevice.report()).length,15);
  assert.equal(unlocked(await b.report()).includes('rookie-pirate'),false);
  const persisted=await db.select().from(achievementUnlocks).where(eq(achievementUnlocks.accountId,id));
  assert.equal(persisted.length,15);
  console.log('PASS all 15 achievements are obtainable, backfilled, persisted and isolated across accounts');

  const c=new Browser();await c.send('/api/daily');
  await c.send('/api/run','POST',{day,answers,mistakes:0});
  const idC=await c.register(names[2],true);
  assert.ok(idC);
  const importedDaily=await c.send('/api/daily');
  assert.ok(importedDaily.newlyUnlocked.includes('first-voyage'));
  assert.equal(unlocked(await c.report()).includes('no-mistakes'),true);
  await c.send('/api/account','POST',{action:'logout'});
  await c.send('/api/account/achievements','GET',undefined,401);
  console.log('PASS guest history claim and signed-out access denial');
}
main().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{
  // Remove ONLY rows created by this test; never leave fake leaderboard scores.
  if(accountIds.length) {
    await db.delete(runs).where(inArray(runs.accountId,accountIds));
    await db.delete(accounts).where(inArray(accounts.id,accountIds));
  }
  if(guestIds.size)await db.delete(runs).where(and(inArray(runs.playerId,[...guestIds])));
  await db.delete(authWindows).where(inArray(authWindows.bucket,[`ip:${address}`,...names.map(n=>`name:${n}`)].map(v=>createHash('sha256').update(v).digest('hex'))));
  await pool.end();
  console.log('Removed temporary achievement accounts, runs and rate-limit records.');
});
