// Local integration check: run `npx tsx scripts/check-accounts.ts` against the production preview.
import "dotenv/config";
import assert from "node:assert/strict";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { inArray } from "drizzle-orm";
import { db, pool } from "../src/db";
import { accounts, authWindows, runs } from "../src/db/schema";
import { getDailyRun, parseEntries } from "../src/lib/daily";

const origin = 'http://localhost:3000';
const suffix = randomUUID().replaceAll('-', '').slice(0, 12);
const names = ['a', 'b'].map(x => `qa_${suffix}_${x}`);
const password = randomBytes(24).toString('base64url');
const guestKeys = new Set<string>();
const address = `account-test-${suffix}`;

class Browser {
  cookies = new Map<string,string>();
  async send(path: string, method = 'GET', body?: unknown, expected = 200) {
    const res = await fetch(origin + path, { method, headers: {
      origin, 'content-type': 'application/json', 'x-real-ip': address,
      cookie: [...this.cookies].map(([k,v])=>`${k}=${v}`).join('; '),
    }, body: body === undefined ? undefined : JSON.stringify(body) });
    for (const cookie of res.headers.getSetCookie()) {
      const [pair] = cookie.split(';');
      const n = pair.indexOf('=');
      const k = pair.slice(0,n), v = pair.slice(n+1);
      assert.match(cookie, /HttpOnly/i);
      if (v) this.cookies.set(k,v); else this.cookies.delete(k);
      if (k === 'luffillion_guest' && v) guestKeys.add(v);
    }
    const data = await res.json();
    assert.equal(res.status, expected, `${method} ${path}: ${data.error ?? res.status}`);
    return data;
  }
  login(username: string) { return this.send('/api/account','POST',{action:'login', username, password}); }
}

async function main() {
  const a = new Browser();
  const daily = await a.send('/api/daily');
  assert.equal(daily.captain, null);
  await a.send('/api/account/history', 'GET', undefined, 401);
  const day: string = daily.day;
  const qs = getDailyRun(day);
  const entries = qs.map(q => parseEntries(q)[0]);
  const answers = entries.map((e,i)=>i < 5 ? e.name : '');
  const score = entries.slice(0,5).reduce((sum,e)=>sum+e.points,0);
  const guest = await a.send('/api/run','POST',{day,answers});
  assert.equal(guest.you.score, score); assert.equal(guest.you.solved, 5);
  const reg = await a.send('/api/account','POST',{action:'register',username:names[0],password,includeGuest:true},201);
  assert.equal(reg.imported, 1); assert.equal(reg.captain.username,names[0]);
  const me = await a.send('/api/account');
  assert.deepEqual(Object.keys(me.captain).sort(), ['id','username']);
  const hist = await a.send('/api/account/history');
  assert.equal(hist.summary.count,1); assert.equal(hist.summary.best,score); assert.equal(hist.voyages[0].legs.length,7);
  assert.deepEqual(hist.voyages[0].legs.map((v:{answer:string|null})=>v.answer??''),answers);
  const personal = await a.send('/api/run');
  assert.equal(personal.total,guest.total); assert.equal(personal.you.score,score);
  const resubmit = await a.send('/api/run','POST',{accountId:reg.captain.id,day,answers:Array(7).fill('')});
  assert.equal(resubmit.you.score,score); assert.equal(resubmit.total,guest.total);
  console.log('PASS guest play, registration, opt-in history linking and first-result preservation');

  const newDevice = new Browser();
  await newDevice.send('/api/daily');
  await newDevice.send('/api/account','POST',{action:'login', username:names[0],password:'incorrect password'},401);
  await newDevice.send('/api/account','POST',{action:'register', username:names[0].toUpperCase(), password},409);
  await newDevice.login(names[0].toUpperCase());
  const restored = await newDevice.send('/api/daily');
  assert.equal(restored.captain.id,reg.captain.id); assert.deepEqual(restored.finished,hist.voyages[0]);
  const oldToken = newDevice.cookies.get('luffillion_session')!;
  await newDevice.send('/api/account','POST',{action:'logout'});
  assert.equal((await newDevice.send('/api/account')).captain,null);
  newDevice.cookies.set('luffillion_session',oldToken);
  await newDevice.send('/api/account/history','GET',undefined,401);
  console.log('PASS login validation, cross-device completed voyage and logout revocation');

  const b = new Browser();
  await b.send('/api/daily');
  const regB = await b.send('/api/account','POST',{action:'register',username:names[1],password,includeGuest:false},201);
  const idB = regB.captain.id;
  assert.equal((await b.send('/api/account/history')).summary.count,0);
  const started = Date.now()-3000;
  const payload = {day, ids:qs.map(q=>q.id), q:{0:{started:started-5000, status:'solved',answer:entries[0].name, attempts:1,wrong:[]},1:{started,attempts:1,wrong:['not an answer']}}};
  // No prior PUT: signing out itself must flush the last answer and running clock.
  await b.send('/api/account','POST',{action:'logout',accountId:idB,progress:payload});
  await b.login(names[1]);
  const unfinishedGuest = new Browser(); await unfinishedGuest.send('/api/daily');
  await unfinishedGuest.send('/api/run','POST',{day,answers:Array(7).fill('')});
  const keepCheckpoint = await unfinishedGuest.send('/api/account','POST',{action:'login',username:names[1],password,includeGuest:true});
  assert.equal(keepCheckpoint.imported,0);
  assert.equal((await b.send('/api/daily')).finished,null);
  const b2 = new Browser(); await b2.send('/api/daily'); await b2.login(names[1]);
  const resumed = await b2.send('/api/daily');
  assert.equal(resumed.checkpoint.q[1].started,started); assert.equal(resumed.checkpoint.q[0].points,entries[0].points);
  await b2.send('/api/account/progress','PUT',{accountId:idB,progress:{...payload,q:{0:{started,attempts:0,wrong:[]}}}});
  const merge = (await b.send('/api/daily')).checkpoint;
  assert.equal(merge.q[0].answer,entries[0].name); assert.equal(merge.q[1].started,started);
  const bDone = await b2.send('/api/run','POST',{accountId:idB,day,answers:Array(7).fill('')});
  assert.equal(bDone.you.score,entries[0].points); assert.equal(bDone.you.solved,1);
  const savedB = await b.send('/api/daily');
  assert.equal(savedB.checkpoint,null); assert.equal(savedB.finished.solved,1);
  assert.equal((await a.send('/api/account/history')).summary.count,1);
  console.log('PASS private account isolation, cross-device checkpoints, timer preservation and completion');

  const other = new Browser(); await other.send('/api/daily');
  await other.send('/api/run','POST',{day,answers:Array(7).fill('')});
  const conflicting = await other.send('/api/account','POST',{action:'login',username:names[0],password,includeGuest:true});
  assert.equal(conflicting.imported,0);
  assert.equal((await other.send('/api/daily')).finished.score,score);
  console.log('PASS importing a guest run cannot overwrite an existing account result');

  const earlier = Array.from({length:13},(_,i)=>{
    const d = new Date(`${day}T12:00:00Z`); d.setUTCDate(d.getUTCDate()-i-1);
    return { dayKey:d.toISOString().slice(0,10), playerId:`account:${idB}`, accountId:idB, score:0, solved:0 };
  });
  await db.insert(runs).values(earlier);
  const page1 = await b.send('/api/account/history');
  const page2 = await b.send(`/api/account/history?before=${page1.nextBefore}`);
  assert.equal(page1.summary.count,14); assert.equal(page1.voyages.length,12); assert.equal(page2.voyages.length,2);
  assert.equal(page2.nextBefore,null); assert.equal(new Set([...page1.voyages,...page2.voyages].map(v=>v.day)).size,14);
  console.log('PASS historical totals and pagination');
}

main().catch(e=>{ console.error(e); process.exitCode=1; }).finally(async()=>{
  if (guestKeys.size) await db.delete(runs).where(inArray(runs.playerId,[...guestKeys]));
  await db.delete(accounts).where(inArray(accounts.usernameKey,names));
  const budgetKeys = [`ip:${address}`,...names.map(n=>`name:${n}`)].map(s=>createHash('sha256').update(s).digest('hex'));
  await db.delete(authWindows).where(inArray(authWindows.bucket,budgetKeys));
  await pool.end();
  console.log('Removed temporary account test records.');
});
