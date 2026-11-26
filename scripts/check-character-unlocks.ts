// Live API + browser regression: npx tsx scripts/check-character-unlocks.ts
// Hard-to-earn badges are seeded ONLY on temporary test accounts. Cleanup removes every test record.
import "dotenv/config";
import assert from "node:assert/strict";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { eq, inArray } from "drizzle-orm";
import { chromium, expect } from "@playwright/test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { db, pool } from "../src/db";
import { accounts, achievementUnlocks, authWindows, runs } from "../src/db/schema";
import { ACHIEVEMENTS } from "../src/lib/achievements";
import { checkGuess, getDailyRun, parseEntries } from "../src/lib/daily";
import { PLAYABLE_CHARACTERS } from "../src/data/playable-characters";
import CharacterPortrait from "../src/components/CharacterPortrait";

const origin = 'http://localhost:3000';
const suffix = randomUUID().replaceAll('-', '').slice(0,10);
const names = ['a','b'].map(n=>`crew_${suffix}_${n}`);
const password = randomBytes(24).toString('base64url');
const address = `crew-test-${suffix}`;
const accountIds: string[]=[];

class Browser {
  cookies=new Map<string,string>();
  async send(path:string, method='GET', body?:unknown, expected=200){
    const res=await fetch(origin+path,{method,headers:{origin,'content-type':'application/json','x-real-ip':address,cookie:[...this.cookies].map(([k,v])=>`${k}=${v}`).join('; ')},body:body===undefined?undefined:JSON.stringify(body)});
    for(const cookie of res.headers.getSetCookie()){
      const pair=cookie.split(';')[0], n=pair.indexOf('='), k=pair.slice(0,n),v=pair.slice(n+1);
      if(v)this.cookies.set(k,v);else this.cookies.delete(k);
    }
    const data=await res.json();
    assert.equal(res.status,expected,`${method} ${path}: ${data.error??res.status}`);
    return data;
  }
  async register(name:string){
    const data=await this.send('/api/account','POST',{action:'register',username:name,password,includeGuest:false},201);
    accountIds.push(data.captain.id);return data.captain.id as string;
  }
}

async function main(){
  const a=new Browser(), b=new Browser();
  const daily=await a.send('/api/daily');
  assert.equal(daily.equippedCharacter,'luffy');
  await a.send('/api/account/character','PUT',{accountId:randomUUID(),characterId:'roger'},401);
  const idA=await a.register(names[0]);
  await a.send('/api/account/character','PUT',{accountId:idA,characterId:'zoro'},403);
  await a.send('/api/account/character','PUT',{accountId:idA,characterId:'not-a-character'},400);
  await a.send('/api/account/character','PUT',{accountId:randomUUID(),characterId:'luffy'},409);
  const finished=await a.send('/api/run','POST',{accountId:idA,day:daily.day,answers:Array(7).fill(''),mistakes:0});
  assert.ok(finished.newlyUnlocked.includes('first-voyage'));
  await a.send('/api/account/character','PUT',{accountId:idA,characterId:'chopper'});
  assert.equal((await a.send('/api/daily')).equippedCharacter,'chopper');
  const collection=await a.send('/api/account/achievements');
  assert.equal(collection.achievements.find((r:{id:string})=>r.id==='first-voyage').rewardCharacter,'chopper');
  assert.equal(collection.equippedCharacter,'chopper');
  await b.send('/api/daily');const idB=await b.register(names[1]);
  await b.send('/api/account/character','PUT',{accountId:idB,characterId:'chopper'},403);
  const otherDevice=new Browser();await otherDevice.send('/api/daily');
  await otherDevice.send('/api/account','POST',{action:'login',username:names[0],password});
  assert.equal((await otherDevice.send('/api/daily')).equippedCharacter,'chopper');
  await otherDevice.send('/api/account','POST',{action:'logout'});
  assert.equal((await otherDevice.send('/api/daily')).equippedCharacter,'luffy');
  console.log('PASS default Luffy, real achievement reward, locked/invalid character rejection, account isolation and cross-device selection');

  await db.insert(achievementUnlocks).values(ACHIEVEMENTS.map(badge=>({accountId:idA,achievementId:badge.id}))).onConflictDoNothing();
  const before=(await a.send('/api/daily')).finished;
  for(const recruit of PLAYABLE_CHARACTERS){
    const chosen=await a.send('/api/account/character','PUT',{accountId:idA,characterId:recruit.id});
    assert.equal(chosen.equippedCharacter,recruit.id);
    const saved=await a.send('/api/daily');
    assert.equal(saved.equippedCharacter,recruit.id);assert.deepEqual(saved.finished,before);
  }
  console.log('PASS all 16 characters equip and persist without changing the score or completed voyage');

  const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
  try{
    const context=await browser.newContext({baseURL:origin,viewport:{width:1280,height:900},extraHTTPHeaders:{'x-real-ip':address}});
    await context.addInitScript(()=>localStorage.setItem('luffillion:muted','1'));
    await context.request.post('/api/account',{data:{action:'login',username:names[0],password}});
    const page=await context.newPage();const browserErrors:string[]=[];
    page.on('pageerror',error=>browserErrors.push(error.message));
    await page.goto('/');
    await expect(page.locator('canvas')).toHaveAttribute('data-character','gear-5');
    await page.getByRole('button',{name:'Open game menu'}).click();
    const menu=page.getByRole('dialog',{name:'Game menu'});
    await menu.getByRole('tab',{name:'Achievements',exact:true}).click();
    await expect(menu.locator('[data-achievement]')).toHaveCount(15);
    await menu.getByRole('button',{name:/^Characters/}).click();
    await expect(menu.locator('[data-crew]')).toHaveCount(16);
    await expect(menu.locator('[data-unlocked="true"]')).toHaveCount(16);
    for(const recruit of PLAYABLE_CHARACTERS){
      if(await menu.getByRole('button',{name:`${recruit.shortName} equipped`,exact:true}).count())continue;
      await menu.getByRole('button',{name:`Equip ${recruit.shortName}`,exact:true}).click();
      await expect(page.locator('canvas')).toHaveAttribute('data-character',recruit.id);
      await expect(menu.getByRole('button',{name:`${recruit.shortName} equipped`,exact:true})).toBeDisabled();
    }
    await menu.getByRole('heading',{name:'Achievements',exact:true}).scrollIntoViewIfNeeded();
    await page.screenshot({path:'artifacts/character-collection-desktop.png'});
    await page.setViewportSize({width:390,height:844});
    await page.screenshot({path:'artifacts/character-collection-mobile.png'});
    const bounds=await menu.boundingBox();assert.ok(bounds && bounds.x>=0 && bounds.x+bounds.width<=391 && bounds.y+bounds.height<=844);
    await page.reload();
    await expect(page.locator('canvas')).toHaveAttribute('data-character','gear-5');

    // Inspect the entire hand-drawn roster in one contact sheet.
    const sheet=await context.newPage();await sheet.setViewportSize({width:896,height:1040});
    const tiles=PLAYABLE_CHARACTERS.map(c=>`<div class="tile"><small style="color:${c.color}">${c.grade.toUpperCase()}</small>${renderToStaticMarkup(createElement(CharacterPortrait,{characterId:c.id,size:144}))}<strong>${c.name}</strong><span>${c.epithet}</span></div>`).join('');
    await sheet.setContent(`<html><head><style>body{margin:0;background:#081121;color:#edf4ff;font:13px monospace;padding:20px}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.tile{background:#142339;border:1px solid #2e415b;padding:12px;text-align:center;display:flex;align-items:center;flex-direction:column;min-height:210px}small{letter-spacing:2px}strong{margin-top:6px;font-size:12px}span{color:#a1b6cc;font-size:11px;margin-top:5px}</style></head><body><div class="grid">${tiles}</div></body></html>`);
    await sheet.screenshot({path:'artifacts/character-sprite-roster.png',fullPage:true});
    await sheet.close();
    console.log('PASS all selectable UI recruits, mobile collection bounds, and equipped character after reload');

    // Separate fresh captain: swapping while a real 25-second timer is active.
    await db.insert(achievementUnlocks).values({accountId:idB,achievementId:'first-voyage'});
    const contextB=await browser.newContext({baseURL:origin,viewport:{width:1280,height:900},extraHTTPHeaders:{'x-real-ip':address}});
    await contextB.addInitScript(()=>localStorage.setItem('luffillion:muted','1'));
    await contextB.request.post('/api/account',{data:{action:'login',username:names[1],password}});
    const p=await contextB.newPage();p.on('pageerror',e=>browserErrors.push(e.message));
    await p.goto('/');await p.getByRole('button',{name:/⚓ SET SAIL/}).click();
    await expect.poll(async()=>((await (await contextB.request.get('/api/daily')).json()).checkpoint?.q[0]?.started)).toBeTruthy();
    const started=((await (await contextB.request.get('/api/daily')).json()).checkpoint.q[0].started) as number;
    await p.locator('canvas').evaluate(el=>el.setAttribute('data-instance-test','original'));
    await p.getByRole('button',{name:'Open game menu'}).click();
    const picker=p.getByRole('dialog',{name:'Game menu'});
    await picker.getByRole('tab',{name:'Achievements',exact:true}).click();
    await picker.getByRole('button',{name:/^Characters/}).click();
    await picker.getByRole('button',{name:'Equip Chopper',exact:true}).click();
    await expect(p.locator('canvas')).toHaveAttribute('data-character','chopper');
    await expect(p.locator('canvas')).toHaveAttribute('data-instance-test','original');
    assert.equal((await (await contextB.request.get('/api/daily')).json()).checkpoint.q[0].started,started);
    await picker.getByRole('button',{name:'Close menu',exact:true}).click();

    const question=getDailyRun(daily.day)[0];
    const pull=parseEntries(question).find(e=>e.tier==='luffillion' && checkGuess(question,e.name)?.tier==='luffillion')!;
    await p.route('**/api/guess',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({correct:true,name:pull.name,tier:pull.tier,points:pull.points})}));
    await p.getByRole('textbox',{name:'Your answer',exact:true}).fill(pull.name);
    await p.getByRole('button',{name:'RUN',exact:true}).click();
    await expect(p.locator('canvas')).toHaveAttribute('data-gold-hat','true');
    await expect(p.locator('.achievement-toast')).toContainText('Ace',{timeout:12000});
    await p.getByRole('button',{name:'Open game menu'}).click();
    await picker.getByRole('tab',{name:'Achievements',exact:true}).click();
    await picker.getByRole('button',{name:/^Characters/}).click();
    await picker.getByRole('button',{name:'Equip Ace',exact:true}).click();
    await expect(p.locator('canvas')).toHaveAttribute('data-character','ace');
    await expect(p.locator('canvas')).toHaveAttribute('data-instance-test','original');
    await expect(p.locator('canvas')).toHaveAttribute('data-gold-hat','true');
    await p.reload();
    await expect(p.locator('canvas')).toHaveAttribute('data-character','ace');
    await expect(p.locator('canvas')).toHaveAttribute('data-gold-hat','true');
    assert.deepEqual(browserErrors,[]);
    console.log('PASS equipping keeps timer and canvas instance, live Ace unlock, gold-hat compatibility and account restoration');
  }finally{await browser.close();}
}

main().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{
  if(accountIds.length){await db.delete(runs).where(inArray(runs.accountId,accountIds));await db.delete(accounts).where(inArray(accounts.id,accountIds));}
  await db.delete(authWindows).where(inArray(authWindows.bucket,[`ip:${address}`,...names.map(n=>`name:${n}`)].map(v=>createHash('sha256').update(v).digest('hex'))));
  await pool.end();
  console.log('Removed temporary character-test accounts, badges, saves and scores.');
});
