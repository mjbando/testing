// Browser UI test with real account/checkpoint/completion endpoints.
// Only the guess response is stubbed to avoid polluting public per-answer solve counts.
import "dotenv/config";
import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { eq, inArray } from "drizzle-orm";
import { db, pool } from "../src/db";
import { accounts, authWindows, runs } from "../src/db/schema";
import { checkGuess, getDailyRun, parseEntries } from "../src/lib/daily";

const origin='http://localhost:3000';
const name=`ui_${randomUUID().replaceAll('-','').slice(0,12)}`;
const password=randomBytes(24).toString('base64url');
const ip=`ui-achievements-${name}`;
const errors:string[]=[];

async function main(){
  const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
  try {
    const context=await browser.newContext({viewport:{width:1280,height:900},baseURL:origin,extraHTTPHeaders:{'x-real-ip':ip}});
    await context.addInitScript(()=>localStorage.setItem('luffillion:muted','1'));
    const page=await context.newPage();
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto('/');
    await expect(page.getByRole('button',{name:/⚓ SET SAIL/})).toBeVisible();
    await expect(page.getByRole('tab',{name:'Achievements',exact:true})).toHaveCount(0);
    await page.getByRole('button',{name:'Open game menu'}).click();
    const menu=page.getByRole('dialog',{name:'Game menu'});
    for(const label of ['Run Log','Achievements','Archive'])await expect(menu.getByRole('tab',{name:label,exact:true})).toBeVisible();
    await menu.getByRole('tab',{name:'Achievements',exact:true}).click();
    const locked=page.getByRole('dialog',{name:'A captain needs an account'});
    await expect(locked).toBeVisible();
    await expect(locked).toContainText('all 15 achievements');
    await locked.getByRole('button',{name:'Keep playing as a guest'}).click();
    await expect(locked).not.toBeVisible();
    await expect(page.getByRole('button',{name:/⚓ SET SAIL/})).toBeVisible();
    console.log('PASS actual hamburger options, guest popup, and no duplicate main-screen achievement button');

    await page.getByRole('button',{name:'Open game menu'}).click();
    await menu.getByRole('tab',{name:'Achievements',exact:true}).click();
    await locked.getByRole('button',{name:/SIGN IN \/ CREATE ACCOUNT/}).click();
    const account=page.getByRole('dialog',{name:"Captain's Log"});
    await account.getByRole('button',{name:'Create account',exact:true}).click();
    await account.getByLabel('USERNAME',{exact:true}).fill(name);
    await account.getByLabel('PASSWORD',{exact:true}).fill(password);
    await account.getByLabel('CONFIRM PASSWORD',{exact:true}).fill(password);
    await account.getByRole('button',{name:/CREATE MY ACCOUNT/}).click();
    await expect(account).not.toBeVisible({timeout:15000});
    await expect(menu).toBeVisible();
    await expect(menu.locator('[data-achievement]')).toHaveCount(15);
    await expect(menu.locator('[data-earned="true"]')).toHaveCount(0);
    await expect(menu.locator('[data-achievement="one-in-a-luffillion"] svg rect')).not.toHaveCount(0);
    await page.waitForTimeout(1100);
    const focused=await page.evaluate(()=>document.activeElement?.getAttribute('id'));
    await menu.getByRole('tab',{name:'Archive',exact:true}).focus();
    await page.waitForTimeout(600);
    await expect(menu.getByRole('tab',{name:'Archive',exact:true})).toBeFocused();
    assert.ok(focused);
    await menu.getByRole('button',{name:'Close menu',exact:true}).click();
    console.log('PASS account creation opens a private collection with 15 emblems; menu focus survives clock ticks');

    const daily=await (await context.request.get('/api/daily')).json();
    const questions=getDailyRun(daily.day);
    const answers=questions.map(q=>parseEntries(q).find(e=>e.tier==='luffillion' && checkGuess(q,e.name)?.tier==='luffillion')!.name);
    await page.route('**/api/guess',async route=>{
      const body=route.request().postDataJSON() as {questionId:string;guess:string};
      const q=questions.find(q=>q.id===body.questionId)!;
      const match=checkGuess(q,body.guess);
      await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(match?{correct:true,name:match.name,tier:match.tier,points:match.points}:{correct:false,suggestion:null})});
    });
    await page.getByRole('button',{name:/⚓ SET SAIL/}).click();
    for(let i=0;i<7;i++){
      await page.getByRole('textbox',{name:'Your answer',exact:true}).fill(answers[i]);
      await page.getByRole('button',{name:'RUN',exact:true}).click();
      if(i<6) {
        await expect(page.getByRole('button',{name:'NEXT ▸',exact:true})).toBeVisible();
        if(i===0){
          const toast=page.locator('.achievement-toast');
          await expect(toast).toContainText('One in a Luffillion',{timeout:12000});
          await page.waitForTimeout(5100);
          await expect(toast).toHaveCount(0);
          await page.getByRole('button',{name:'Open game menu'}).click();
          await menu.getByRole('tab',{name:'Achievements',exact:true}).click();
          await expect(menu.locator('[data-achievement="one-in-a-luffillion"]')).toHaveAttribute('data-earned','true');
          await expect(menu.locator('[data-achievement="first-voyage"]')).toHaveAttribute('data-earned','false');
          await menu.getByRole('button',{name:'Earned',exact:true}).click();
          await expect(menu.locator('[data-achievement]')).toHaveCount(1);
          await menu.getByRole('button',{name:'All',exact:true}).click();
          await menu.getByRole('button',{name:'Close menu',exact:true}).click();
        }
        await page.getByRole('button',{name:'NEXT ▸',exact:true}).click();
      }
    }
    await expect(page.getByText("TODAY'S VOYAGE IS OVER",{exact:true})).toBeVisible({timeout:15000});
    await page.getByRole('button',{name:'Open game menu'}).click();
    await menu.getByRole('tab',{name:'Achievements',exact:true}).click();
    await expect(menu.locator('[data-earned="true"]')).toHaveCount(6,{timeout:12000});
    await expect(menu.locator('[data-achievement="pirate-king"]')).toHaveAttribute('data-earned','false');
    await expect(menu).toContainText('leaderboard closes');
    await page.screenshot({path:'artifacts/achievements-desktop.png'});
    await page.setViewportSize({width:390,height:844});
    await page.screenshot({path:'artifacts/achievements-mobile.png'});
    const bounds=await menu.boundingBox();
    assert.ok(bounds && bounds.x>=0 && bounds.x+bounds.width<=391 && bounds.y+bounds.height<=844);
    await menu.getByRole('button',{name:'Locked',exact:true}).click();
    await expect(menu.locator('[data-achievement]')).toHaveCount(9);
    await menu.getByRole('button',{name:'All',exact:true}).click();
    await menu.locator('[data-achievement="laugh-tale"] summary').click();
    await expect(menu.locator('[data-achievement="laugh-tale"]')).toContainText('500 points');
    console.log('PASS immediate gold hat badge, self-dismissing toast, all 7 questions, completion badges, filters, and mobile drawer');
    await page.reload();
    await expect(page.getByText("TODAY'S VOYAGE IS OVER",{exact:true})).toBeVisible();
    await page.getByRole('button',{name:'Open game menu'}).click();
    await menu.getByRole('tab',{name:'Achievements',exact:true}).click();
    await expect(menu.locator('[data-earned="true"]')).toHaveCount(6);
    assert.deepEqual(errors,[],'no browser runtime errors');
    console.log('PASS earned badges survive a reload; browser emitted no runtime errors');
  } finally { await browser.close(); }
}
main().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{
  const rows=await db.select({id:accounts.id}).from(accounts).where(eq(accounts.usernameKey,name));
  if(rows.length){ await db.delete(runs).where(inArray(runs.accountId,rows.map(r=>r.id))); await db.delete(accounts).where(eq(accounts.usernameKey,name)); }
  await db.delete(authWindows).where(inArray(authWindows.bucket,[`ip:${ip}`,`name:${name}`].map(v=>createHash('sha256').update(v).digest('hex'))));
  await pool.end();
  console.log('Removed temporary browser-test account and score.');
});
