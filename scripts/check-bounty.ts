// Live check of the bounty system. Temporary accounts are cleaned up afterward.
import "dotenv/config";
import assert from "node:assert/strict";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { and, eq, inArray } from "drizzle-orm";
import { db, pool } from "../src/db";
import { accounts, authWindows, bounties, bountyGains, runs } from "../src/db/schema";
import { getDailyRun, parseEntries } from "../src/lib/daily";
import { BASE_PER_CORRECT, BONUS_PER_POINT } from "../src/lib/bounty-server";

const origin = 'http://localhost:3000';
const suffix = randomUUID().replaceAll('-', '').slice(0, 10);
const password = randomBytes(24).toString('base64url');
const address = `bounty-test-${suffix}`;
const username = `bounty_${suffix}`;

class Browser {
  cookies = new Map<string, string>();
  async send(path: string, method = 'GET', body?: unknown, expected = 200) {
    const res = await fetch(origin + path, {
      method,
      headers: { origin, 'content-type': 'application/json', 'x-real-ip': address,
        cookie: [...this.cookies].map(([k, v]) => `${k}=${v}`).join('; ') },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    for (const raw of res.headers.getSetCookie()) {
      const pair = raw.split(';')[0]; const n = pair.indexOf('='); const k = pair.slice(0, n), v = pair.slice(n + 1);
      if (v) this.cookies.set(k, v); else this.cookies.delete(k);
    }
    const data = await res.json();
    assert.equal(res.status, expected, `${method} ${path}: ${data.error ?? res.status}`);
    return data;
  }
}

async function main() {
  // 1) Public board reachable by a guest.
  const guestBrowser = new Browser();
  await guestBrowser.send('/api/daily');
  const board = await guestBrowser.send('/api/bounties');
  assert.ok(Array.isArray(board.top));
  assert.equal(board.you, null, 'guests are not credited a bounty');
  console.log('PASS public top-50 board available to guests; no bounty awarded');

  // 2) Guest plays and finishes a voyage first.
  const daily = await guestBrowser.send('/api/daily');
  const day = daily.day as string;
  const questions = getDailyRun(day);
  const picked = questions.map(q => {
    for (const tier of ['luffillion', 'epic'] as const) {
      const match = parseEntries(q).find(e => e.tier === tier);
      if (match) return match.name;
    }
    return '';
  });
  assert.equal(picked.filter(Boolean).length, 7);
  const answered = questions.map((q, i) => picked[i]);
  const expectedGain = questions.reduce((sum, q, i) => {
    const match = parseEntries(q).find(e => e.name === answered[i]);
    return sum + (match ? BASE_PER_CORRECT + match.points * BONUS_PER_POINT : 0);
  }, 0);
  assert.ok(expectedGain > 0 && expectedGain <= 7 * 250);

  await guestBrowser.send('/api/run', 'POST', { day, answers: answered, mistakes: 0 });
  const guestBoard = await guestBrowser.send('/api/bounties');
  assert.equal(guestBoard.you, null, 'guest still receives no bounty');
  console.log('PASS guest finishes daily voyage without gaining a bounty');

  // 3) Guest registers and links: bounty backfills once, exactly once.
  const reg = await guestBrowser.send('/api/account', 'POST', { action: 'register', username, password, includeGuest: true }, 201);
  const accountId = reg.captain.id as string;
  const after = await guestBrowser.send('/api/bounties');
  assert.equal(after.you.total, expectedGain, `expected ${expectedGain}, got ${after.you.total}`);
  assert.equal(after.you.today, expectedGain);
  assert.equal(after.you.rank >= 1 && after.you.rank <= Math.max(50, after.you.count), true);
  assert.equal(after.you.count >= 1, true);
  const rows = await db.select().from(bounties).where(eq(bounties.accountId, accountId));
  assert.equal(rows[0]?.total, expectedGain);
  console.log(`PASS account creation backfills guest voyage: bounty = ${expectedGain}`);

  // 4) Resuming / re-running the same day must not re-award the bounty.
  const firstBoard = await guestBrowser.send('/api/bounties');
  await guestBrowser.send('/api/daily');
  await guestBrowser.send('/api/run', 'POST', { accountId, day, answers: Array(7).fill(''), mistakes: 9 });
  const secondBoard = await guestBrowser.send('/api/bounties');
  assert.equal(secondBoard.you.total, firstBoard.you.total, 'bounty must never grow on resubmission');
  assert.equal(secondBoard.you.today, expectedGain, 'today gain must not double');
  console.log('PASS resubmission of the same voyage is idempotent');

  // 5) Leaderboard shows usernames and totals, sorted by total.
  const boardAfter = await guestBrowser.send('/api/bounties');
  const ranks = boardAfter.top.map((r: { total: number }) => r.total);
  assert.deepEqual(ranks, [...ranks].sort((a, b) => b - a), 'board sorted by bounty');
  assert.ok(boardAfter.top.every((r: { username: string; total: number }) => typeof r.username === 'string' && r.username.length > 0 && typeof r.total === 'number'));
  assert.equal(boardAfter.top.length, Math.min(50, boardAfter.you.count));
  assert.equal(boardAfter.top.find((r: { isYou: boolean; username: string }) => r.isYou)?.username, username);
  console.log(`PASS top-50 board with usernames and totals (${boardAfter.top.length} of ${boardAfter.you.count} captains)`);

  // 6) Another proper captain joins, finishes, gains, and ranks by bounty.
  const second = new Browser();
  const secondReg = await second.send('/api/account', 'POST', { action: 'register', username: `${username}_b`, password, includeGuest: false }, 201);
  const secondId = secondReg.captain.id as string;
  const secondAnswered = questions.map((q, i) => (i < 3 ? '' : answered[i]));
  // Only 4 answers: some unsolved; each correct answer must increase the ledger once.
  await second.send('/api/run', 'POST', { accountId: secondId, day, answers: secondAnswered, mistakes: 2 });
  const expectedSecond = questions.reduce((sum, q, i) => {
    const match = parseEntries(q).find(e => e.name === secondAnswered[i]);
    return sum + (match ? BASE_PER_CORRECT + match.points * BONUS_PER_POINT : 0);
  }, 0);
  const board2 = await second.send('/api/bounties');
  assert.equal(board2.you.total, expectedSecond);
  assert.ok(board2.top.some((r: { username: string }) => r.username === `${username}_b`), 'joining captain on the board');
  console.log(`PASS second captain: bounty = ${expectedSecond}, on the leaderboard`);
}

main().then(async () => {
  // cleanup
  await db.delete(runs).where(inArray(runs.accountId, [(await db.select({ id: accounts.id }).from(accounts).where(eq(accounts.usernameKey, username)))[0]?.id ?? '00000000-0000-4000-8000-000000000000']));
  const ids = [username, `${username}_b`];
  const accountRows = await db.select({ id: accounts.id }).from(accounts).where(inArray(accounts.usernameKey, ids));
  for (const row of accountRows) {
    await db.delete(bounties).where(eq(bounties.accountId, row.id));
    await db.delete(bountyGains).where(eq(bountyGains.accountId, row.id));
  }
  await db.delete(accounts).where(inArray(accounts.usernameKey, ids));
  await db.delete(authWindows).where(inArray(authWindows.bucket, [`ip:${address}`, `name:${username}`, `name:${username}_b`].map(v => createHash('sha256').update(v).digest('hex'))));
  await pool.end();
  console.log('Removed temporary bounty accounts, bounties, gains and scores.');
}).catch(async e => {
  console.error(e);
  const accountRows = await db.select({ id: accounts.id }).from(accounts).where(inArray(accounts.usernameKey, [username, `${username}_b`]));
  for (const row of accountRows) {
    await db.delete(bounties).where(eq(bounties.accountId, row.id));
    await db.delete(bountyGains).where(eq(bountyGains.accountId, row.id));
    await db.delete(runs).where(eq(runs.accountId, row.id));
    await db.delete(accounts).where(eq(accounts.id, row.id));
  }
  const keys = [`ip:${address}`, `name:${username}`, `name:${username}_b`].map(v => createHash('sha256').update(v).digest('hex'));
  await db.delete(authWindows).where(inArray(authWindows.bucket, keys));
  await pool.end();
  process.exit(1);
});
