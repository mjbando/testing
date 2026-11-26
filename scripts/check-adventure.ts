// Plays all 100 Adventure levels against the production API, then checks the real map/player in Chromium.
// All fixtures belong to temporary captains and are removed in finally.
import "dotenv/config";
import assert from "node:assert/strict";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { and, eq, inArray } from "drizzle-orm";
import { chromium, expect } from "@playwright/test";
import { db, pool } from "../src/db";
import { accounts, adventureAttempts, authWindows, runs } from "../src/db/schema";
import { ADVENTURE_LEVELS, adventureTitle } from "../src/data/adventure/levels";
import { adventureFact } from "../src/data/adventure/questions";
import type { AdventureResponse } from "../src/lib/adventure-types";

const origin='http://localhost:3000';
const suffix=randomUUID().replaceAll('-','').slice(0,10);
const names=['a','b'].map(n=>`adv_${suffix}_${n}`),password=randomBytes(24).toString('base64url'),address=`adventure-test-${suffix}`;
const ids:string[]=[];
class Browser {
  cookies=new Map<string,string>();
  async send(path:string,method='GET',body?:unknown,expected=200){
    const res=await fetch(origin+path,{method,headers:{origin,'content-type':'application/json','x-real-ip':address,cookie:[...this.cookies].map(([k,v])=>`${k}=${v}`).join('; ')},body:body===undefined?undefined:JSON.stringify(body)});
    for(const raw of res.headers.getSetCookie()){const pair=raw.split(';')[0],n=pair.indexOf('='),k=pair.slice(0,n),v=pair.slice(n+1);if(v)this.cookies.set(k,v);else this.cookies.delete(k);}
    const data=await res.json();assert.equal(res.status,expected,`${method} ${path}: ${data.error??res.status}`);return data;
  }
  async register(name:string){const d=await this.send('/api/account','POST',{action:'register',username:name,password,includeGuest:false},201);ids.push(d.captain.id);return d.captain.id as string;}
  async action(accountId:string,action:string,attempt:AdventureResponse['attempt'],extra:Record<string,unknown>={},status=200):Promise<AdventureResponse>{
    return this.send('/api/adventure','POST',{accountId,action,attemptId:attempt?.id,cursor:attempt?.cursor,...extra},status);
  }
}
async function ageRound(id:string,cursor:number){
  const [attempt]=await db.select().from(adventureAttempts).where(eq(adventureAttempts.id,id));
  attempt.state.rounds[cursor].startedAt=Date.now()-26000;
  await db.update(adventureAttempts).set({state:attempt.state}).where(eq(adventureAttempts.id,id));
}

async function main(){
  const a=new Browser(),b=new Browser();
  const guest:AdventureResponse=await a.send('/api/adventure');assert.equal(guest.captain,null);assert.equal(guest.profile.unlockedThrough,1);
  await a.action(randomUUID(),'start',null,{level:1},401);
  const idA=await a.register(names[0]);
  await a.action(idA,'start',null,{level:100},403);
  await a.action(idA,'start',null,{level:0},400);
  await a.action(idA,'finish',null,{score:700},400);
  let d=await a.action(idA,'start',null,{level:1});
  const initialId=d.attempt!.id;
  assert.equal(d.attempt!.question,null);assert.equal(d.attempt!.deadline,null);
  d=await a.action(idA,'start',null,{level:1});assert.equal(d.attempt!.id,initialId,'duplicate start resumes');
  d=await a.action(idA,'begin',d.attempt);const deadline=d.attempt!.deadline;
  const repeat=await a.action(idA,'begin',d.attempt);assert.equal(repeat.attempt!.deadline,deadline,'cannot reset timer');
  await ageRound(d.attempt!.id,0);
  d=await a.action(idA,'guess',d.attempt,{guess:adventureFact(d.attempt!.question!.id).answers.split('|')[0],score:700});
  assert.equal(d.attempt!.score,0);assert.equal(d.attempt!.cursor,1);assert.equal(d.feedback?.kind,'expired');
  for(let i=1;i<7;i++){d=await a.action(idA,'begin',d.attempt);await ageRound(d.attempt!.id,i);d=await a.action(idA,'timeout',d.attempt);}
  assert.equal(d.attempt!.status,'failed');assert.equal(d.profile.completed,0);assert.equal(d.profile.unlockedThrough,1);
  await a.action(idA,'start',null,{level:2},403);
  console.log('PASS guest restrictions, sequential locks, server timer, duplicate start and failed-level retry gate');

  await b.send('/api/adventure');const idB=await b.register(names[1]);
  await b.send(`/api/adventure?attempt=${initialId}`,'GET',undefined,404);
  for(let level=1;level<=100;level++){
    d=await a.action(idA,'start',null,{level});
    assert.equal(d.attempt!.cursor,0);assert.equal(d.attempt!.question,null);
    for(let cursor=0;cursor<7;cursor++){
      d=await a.action(idA,'begin',d.attempt);const q=d.attempt!.question!;
      assert.ok(q);assert.equal(d.attempt!.recap,null);assert.equal('questionIds' in d.attempt!,false);
      const fact=adventureFact(q.id);
      if(!ADVENTURE_LEVELS[level-1].boss)assert.equal(fact.arc,ADVENTURE_LEVELS[level-1].arc);else assert.equal(fact.depth,5);
      if(level===1&&cursor===0){d=await a.action(idA,'guess',d.attempt,{guess:'gibberish impossible answer',score:700});assert.equal(d.feedback?.kind,'wrong');assert.equal(d.attempt!.score,0);}
      const old=d.attempt;
      d=await a.action(idA,'guess',d.attempt,{guess:fact.answers.split('|')[0],points:9999});
      assert.equal(d.attempt!.score,(cursor+1)*100);assert.equal(d.attempt!.cursor,cursor+1);
      if(level===1&&cursor===0){const duplicate=await a.action(idA,'guess',old,{guess:fact.answers.split('|')[0]});assert.equal(duplicate.attempt!.score,100);assert.equal(duplicate.attempt!.cursor,1);}
    }
    assert.equal(d.attempt!.status,'passed');assert.equal(d.profile.completed,level);assert.equal(d.profile.title,adventureTitle(level));
    assert.equal(d.profile.unlockedThrough,Math.min(100,level+1));assert.equal(d.profile.badges.filter(b=>b.earned).length,Math.floor(level/10));
    assert.equal(d.profile.ultimate.earned,level===100);assert.equal(d.attempt!.recap!.length,7);
    if(level%10===0)console.log(`PASS saga ${level/10}: ${level} levels cleared · ${d.profile.title}`);
    if(level%20===0&&level<99)await a.action(idA,'start',null,{level:level+2},403);
  }
  const scoreRows=await db.select().from(runs).where(eq(runs.accountId,idA));assert.equal(scoreRows.length,0,'Adventure does not create daily leaderboard scores');
  const oldBest=d.profile.clears.find(c=>c.level===1)!;
  d=await a.action(idA,'start',null,{level:1});
  for(let cursor=0;cursor<7;cursor++){
    d=await a.action(idA,'begin',d.attempt);
    if(cursor<4)d=await a.action(idA,'guess',d.attempt,{guess:adventureFact(d.attempt!.question!.id).answers.split('|')[0]});
    else{await ageRound(d.attempt!.id,cursor);d=await a.action(idA,'timeout',d.attempt);}
  }
  assert.equal(d.attempt!.score,400);assert.equal(d.attempt!.status,'passed');assert.equal(d.profile.completed,100);
  assert.deepEqual(d.profile.clears.find(c=>c.level===1),oldBest,'replaying preserves best score and first-clear date');
  const secondDevice=new Browser();await secondDevice.send('/api/account','POST',{action:'login',username:names[0],password});
  const restored:AdventureResponse=await secondDevice.send('/api/adventure');assert.equal(restored.profile.completed,100);assert.equal(restored.profile.title,'Pirate King');
  assert.equal((await b.send('/api/adventure')).profile.completed,0);
  console.log('PASS all 100 levels, 11 titles, 10 saga badges, ultimate achievement, best scores and cross-device persistence');

  const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
  try{
    const context=await browser.newContext({baseURL:origin,viewport:{width:1440,height:1000},extraHTTPHeaders:{'x-real-ip':address}});
    await context.addInitScript(()=>localStorage.setItem('luffillion:muted','1'));
    await context.request.post('/api/account',{data:{action:'login',username:names[1],password}});
    const page=await context.newPage();const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('/');await expect(page.getByRole('button',{name:/⚓ SET SAIL/})).toBeVisible();
    await page.getByRole('link',{name:/ADVENTURE MODE/}).click();
    await expect(page.getByRole('heading',{name:'The Grand Line awaits.'})).toBeVisible();
    await expect(page.locator('.adv-level')).toHaveCount(100);await expect(page.locator('.adv-level[data-state="available"]')).toHaveCount(1);
    await expect(page.locator('[data-level="100"]')).toBeDisabled();
    await page.screenshot({path:'artifacts/adventure-map-desktop.png'});
    await page.setViewportSize({width:390,height:844});
    await page.locator('#adventure-saga-1').scrollIntoViewIfNeeded();
    await page.screenshot({path:'artifacts/adventure-map-mobile.png'});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    await page.setViewportSize({width:1440,height:1000});
    await page.locator('[data-level="1"]').click();
    await expect(page.getByRole('heading',{name:'Ready to set sail?'})).toBeVisible();
    await expect(page.getByRole('textbox',{name:'Adventure answer'})).toHaveCount(0);
    await page.getByRole('button',{name:/⚓ SET SAIL/}).click();
    let testedSuggestion=false;
    for(let cursor=0;cursor<7;cursor++){
      const input=page.getByRole('textbox',{name:'Adventure answer',exact:true});await expect(input).toBeVisible();
      const state:AdventureResponse=await (await context.request.get('/api/adventure')).json();const fact=adventureFact(state.attempt!.question!.id);
      const answer=fact.answers.split('|')[0];
      if(!testedSuggestion&&answer.length>=5){
        await input.fill(answer.slice(0,-1));await page.getByRole('button',{name:'ANSWER ▸',exact:true}).click();
        const suggestion=page.getByRole('button',{name:/Did you mean/});
        await expect(suggestion).toBeVisible();await suggestion.click();testedSuggestion=true;
      }else{await input.fill(answer);await page.getByRole('button',{name:'ANSWER ▸',exact:true}).click();}
      if(cursor<6){
        await expect(page.getByRole('button',{name:'NEXT QUESTION ▸',exact:true})).toBeVisible();
        if(cursor===0){
          await page.screenshot({path:'artifacts/adventure-level-desktop.png'});
          await page.getByRole('button',{name:'Island map',exact:true}).click();await page.reload();
          await expect(page.getByRole('button',{name:'Resume ▸',exact:true})).toBeVisible();await page.getByRole('button',{name:'Resume ▸',exact:true}).click();
          await expect(page.getByText('QUESTION 1 COMPLETE',{exact:true})).toBeVisible();
        }
        await page.getByRole('button',{name:'NEXT QUESTION ▸',exact:true}).click();
      }
    }
    await expect(page.getByRole('heading',{name:'Onward, captain.'})).toBeVisible();
    await expect(page.locator('.adv-earned-title')).toContainText('Cabin Boy');
    await page.getByRole('button',{name:'VIEW MAP',exact:true}).click();
    await expect(page.locator('[data-level="1"]')).toHaveAttribute('data-state','cleared');
    await expect(page.locator('[data-level="2"]')).toHaveAttribute('data-state','available');
    await expect(page.locator('[data-level="3"]')).toBeDisabled();
    await page.locator('.adv-account').click();const log=page.getByRole('dialog',{name:"Captain's Log"});
    await expect(log.locator('.adventure-log')).toContainText('Cabin Boy');await expect(log.locator('.adventure-log')).toContainText('1/100 levels cleared');
    await log.getByRole('button',{name:"Close Captain's Log",exact:true}).click();
    assert.ok(testedSuggestion);
    console.log('PASS main-screen entry, 100 visible nodes, locked map, mobile layout, live seven-question round, spelling help, resume and Cabin Boy badge log');

    const king=await browser.newContext({baseURL:origin,viewport:{width:1440,height:1000},extraHTTPHeaders:{'x-real-ip':address}});
    await king.request.post('/api/account',{data:{action:'login',username:names[0],password}});
    const kingPage=await king.newPage();kingPage.on('pageerror',e=>errors.push(e.message));await kingPage.goto('/adventure');
    await expect(kingPage.locator('.adv-passport')).toContainText('Pirate King');
    await kingPage.getByTitle('Wano & Final Saga',{exact:true}).click();await kingPage.waitForTimeout(700);
    await kingPage.screenshot({path:'artifacts/adventure-final-saga.png'});
    await kingPage.locator('.adv-account').click();
    await expect(kingPage.getByRole('dialog',{name:"Captain's Log"}).locator('.adventure-log')).toContainText('Earned — all 100 levels conquered.');
    assert.deepEqual(errors,[],'No browser runtime errors');
    console.log('PASS final map, Pirate King title and ultimate achievement in Captain’s Log');
  }finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{
  if(ids.length)await db.delete(accounts).where(inArray(accounts.id,ids));
  await db.delete(authWindows).where(inArray(authWindows.bucket,[`ip:${address}`,...names.map(n=>`name:${n}`)].map(s=>createHash('sha256').update(s).digest('hex'))));
  await pool.end();console.log('Removed temporary Adventure accounts, attempts, clears and progress.');
});
