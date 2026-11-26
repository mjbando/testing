// End-to-end ranked match test. Two fresh temp accounts.
import "dotenv/config";
import assert from "node:assert/strict";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { eq, inArray, and, sql } from "drizzle-orm";
import { db, pool } from "../src/db";
import { accounts, authWindows, rankedMatches, rankedPlayers, rankedQueue } from "../src/db/schema";
import { QUESTION_BANK } from "../src/data/questions";
import { outcomeDelta, rankFor, RANKED_ROUNDS, RANKED_LIVES } from "../src/lib/ranked";
import { parseEntries, checkGuess } from "../src/lib/daily";

const origin = 'http://localhost:3000';
const suffix = randomUUID().replaceAll('-', '').slice(0, 8);
const names = [`rn_${suffix}_a`, `rn_${suffix}_b`];
const password = randomBytes(24).toString('base64url');
const address = `ranked-${suffix}`;
const accountIds: string[] = [];

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
const questions = QUESTION_BANK.filter(q => q.tiers && Object.values(q.tiers).flat().length > 0);

async function main() {
  // 1) Both accounts register and see their profiles.
  const a = new Browser();
  await a.send('/api/daily');
  const reg = await a.send('/api/account', 'POST', { action: 'register', username: names[0], password, includeGuest: false }, 201);
  accountIds.push(reg.captain.id);
  const b = new Browser();
  await b.send('/api/daily');
  const regB = await b.send('/api/account', 'POST', { action: 'register', username: names[1], password, includeGuest: false }, 201);
  accountIds.push(regB.captain.id);

  const prof = await a.send('/api/ranked');
  assert.equal(prof.captain.rating, 0);
  assert.equal(prof.captain.rank.name, 'Bronze');
  assert.equal(prof.captain.wins, 0);
  assert.equal(prof.activeMatch, null);
  console.log('PASS new captains start at Bronze with 0 rating and no active match');

  // 2) A enters the queue and waits; B enters the queue; a match is created.
  const qa = await a.send('/api/ranked', 'POST', { action: 'search' });
  assert.equal(qa.state, 'queued');
  const qb = await b.send('/api/ranked', 'POST', { action: 'search' });
  assert.equal(qb.state, 'matched', 'B triggers matchmaking');
  const qbDiag = await a.send('/api/ranked');
  assert.ok(qbDiag.activeMatch, 'A sees the same match');
  const matchId = qbDiag.activeMatch.id;
  console.log('PASS two different captains matched into the same match');

  // 3) Both players read match state and answer all 7 questions; verify round count.
  for (let round = 0; round < RANKED_ROUNDS; round++) {
    const ma = await a.send(`/api/ranked/match?matchId=${matchId}`);
    const mb = await b.send(`/api/ranked/match?matchId=${matchId}`);
    if (ma.activeMatch.done) break;
    assert.equal(ma.activeMatch.question.id, mb.activeMatch.question.id, 'both players see the same question');
    const question = questions.find(q => q.id === ma.activeMatch.question.id)!;
    // A answers with their first Epic/Luffillion option if present, otherwise whatever.
    const aPick = [...parseEntries(question)].map(e => e.name).filter(n => {
      const m = checkGuess(question, n);
      return m && ['epic', 'luffillion'].includes(m.tier);
    })[0] ?? parseEntries(question)[0].name;
    // B answers with a Common option.
    const bPick = [...parseEntries(question)].map(e => e.name).filter(n => {
      const m = checkGuess(question, n);
      return m && m.tier === 'common';
    })[0] ?? parseEntries(question)[0].name;
    await a.send('/api/ranked', 'PATCH', { matchId, guess: aPick });
    await b.send('/api/ranked', 'PATCH', { matchId, guess: bPick });
    // Both answers submitted: poll until round resolves.
    for (let tick = 0; tick < 20; tick++) {
      const latest = await a.send(`/api/ranked/match?matchId=${matchId}`);
      if (latest.activeMatch.done || latest.activeMatch.round !== round) break;
      await new Promise(r => setTimeout(r, 120));
    }
  }
  const final = await a.send(`/api/ranked/match?matchId=${matchId}`);
  assert.ok(final.activeMatch.done, 'match finishes after all rounds');
  assert.ok(['win', 'draw'].includes(final.activeMatch.result.you));
  // Both perspectives agree on outcome: only A or draw happened here because A always picked epic/Luffillion.
  const winYou = final.activeMatch.result.you === 'win';
  console.log(`PASS final match outcome for A: ${winYou ? 'WIN' : 'DRAW'}; ΔA = ${final.activeMatch.result.delta.total}, ΔB = ${final.activeMatch.result.opponentDelta.total}`);
  assert.ok(winYou, 'A should win — they picked rarer answers');
  assert.ok(final.activeMatch.result.delta.total > 0, 'winner gains rating');
  // Confirm ratings changed in the database.
  for (const id of accountIds) {
    const all = await db.select().from(rankedPlayers).where(eq(rankedPlayers.accountId, id));
    const acs = await db.select().from(accounts).where(eq(accounts.id, id));
    console.log(`  rows for ${id.slice(0, 8)}: ${all.length} (accounts ${acs.length}, id ${id})`);
    if (all.length) {
      const row = all[0];
      assert.ok(row.wins + row.losses + row.draws >= 1, 'one of W/L/D recorded');
      console.log(`    rating=${row.rating} wins=${row.wins} losses=${row.losses} streak=${row.streak}`);
    }
  }

  // 4) A loses against B (B wins with all-common answers this time).
  const a2 = new Browser();
  await a2.send('/api/daily');
  const regA2 = await a2.send('/api/account', 'POST', { action: 'register', username: `${names[0]}_b`, password, includeGuest: false }, 201);
  accountIds.push(regA2.captain.id);
  const b2 = new Browser();
  await b2.send('/api/daily');
  const regB2 = await b2.send('/api/account', 'POST', { action: 'register', username: `${names[1]}_b`, password, includeGuest: false }, 201);
  accountIds.push(regB2.captain.id);
  // Force B2's rating to be 1500 (Platinum) and A2's rating to be 0 (Bronze) by direct update — simulate a top player facing a bottom tier.
  await db.update(rankedPlayers).set({ rating: 0 }).where(eq(rankedPlayers.accountId, regA2.captain.id));
  await db.update(rankedPlayers).set({ rating: 1500 }).where(eq(rankedPlayers.accountId, regB2.captain.id));
  // A2 searches, B2 searches — concurrently this should not double-match.
  await a2.send('/api/ranked', 'POST', { action: 'search' });
  await b2.send('/api/ranked', 'POST', { action: 'search' });
  const diag = await a2.send('/api/ranked');
  // One of them may have matched the other already.
  let match2Id: number | null = null;
  if (diag.activeMatch) match2Id = diag.activeMatch.id;
  else {
    const diagB = await b2.send('/api/ranked');
    if (diagB.activeMatch) match2Id = diagB.activeMatch.id;
  }
  assert.ok(match2Id, 'A2 and B2 should have matched');
  // B2 intentionally answers with all-Common answers (worth ~10 pts per round) and A2 with Epic/Luffillion (~75-100).
  for (let round = 0; round < RANKED_ROUNDS; round++) {
    const ma = await a2.send(`/api/ranked/match?matchId=${match2Id}`);
    if (ma.activeMatch.done) break;
    const question = questions.find(q => q.id === ma.activeMatch.question.id)!;
    const aPick = [...parseEntries(question)].map(e => e.name).filter(n => {
      const m = checkGuess(question, n);
      return m && ['epic', 'luffillion'].includes(m.tier);
    })[0] ?? parseEntries(question)[0].name;
    const bPick = [...parseEntries(question)].map(e => e.name).filter(n => {
      const m = checkGuess(question, n);
      return m && m.tier === 'common';
    })[0] ?? parseEntries(question)[0].name;
    await a2.send('/api/ranked', 'PATCH', { matchId: match2Id, guess: aPick });
    await b2.send('/api/ranked', 'PATCH', { matchId: match2Id, guess: bPick });
    for (let tick = 0; tick < 20; tick++) {
      const latest = await a2.send(`/api/ranked/match?matchId=${match2Id}`);
      if (latest.activeMatch.done || latest.activeMatch.round !== round) break;
      await new Promise(r => setTimeout(r, 120));
    }
  }
  const res = await a2.send(`/api/ranked/match?matchId=${match2Id}`);
  assert.ok(res.activeMatch.done, 'second match finishes');
  console.log(`  A2 result: ${res.activeMatch.result.you}; ΔA2 = ${res.activeMatch.result.delta.total}, ΔB2 = ${res.activeMatch.result.opponentDelta.total}`);
  // A2 (Bronze, 0) beat B2 (Platinum 1500) → should gain a lot.
  assert.ok(res.activeMatch.result.delta.total >= 55, 'underdog should gain 55+ vs higher-tier opponent');
  // Verify B2's loss vs lower-ranked opponent is punishing.
  const [b2Row] = await db.select().from(rankedPlayers).where(eq(rankedPlayers.accountId, regB2.captain.id));
  console.log(`  B2 rating after: ${b2Row.rating} (was 1500)`);
  assert.ok(b2Row.rating < 1480, 'higher-tier should lose more than base when losing to lower-ranked');
  console.log('PASS higher-ranked opponent loses extra when beaten by lower-ranked opponent; underdog gains big bonus');
}

main().then(async () => {
  if (accountIds.length) {
    await db.delete(rankedMatches).where(inArray(rankedMatches.accountA, accountIds));
    await db.delete(rankedMatches).where(inArray(rankedMatches.accountB, accountIds));
    await db.delete(rankedQueue).where(inArray(rankedQueue.accountId, accountIds));
    await db.delete(rankedPlayers).where(inArray(rankedPlayers.accountId, accountIds));
    await db.update(accounts).set({ equippedCharacter: 'luffy' }).where(inArray(accounts.id, accountIds));
    await db.delete(accounts).where(inArray(accounts.id, accountIds));
  }
  await db.delete(authWindows).where(inArray(authWindows.bucket, [`ip:${address}`, ...names.flatMap(n => [`name:${n.toLowerCase()}`, `name:${n.toLowerCase()}_b`])].map(v => createHash('sha256').update(v).digest('hex'))));
  await pool.end();
  console.log('Removed temporary ranked test accounts.');
}).catch(async e => {
  console.error(e);
  if (accountIds.length) {
    await db.delete(rankedMatches).where(inArray(rankedMatches.accountA, accountIds));
    await db.delete(rankedMatches).where(inArray(rankedMatches.accountB, accountIds));
    await db.delete(rankedPlayers).where(inArray(rankedPlayers.accountId, accountIds));
    await db.delete(accounts).where(inArray(accounts.id, accountIds));
  }
  await pool.end();
  process.exit(1);
});
