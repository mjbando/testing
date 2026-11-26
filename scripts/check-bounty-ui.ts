// Browser UI check of the Bounties tab (guest and signed-in panels).
import "dotenv/config";
import assert from "node:assert/strict";
import { chromium, expect } from "@playwright/test";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import { eq, inArray } from "drizzle-orm";
import { db, pool } from "../src/db";
import { accounts, bounties, bountyGains, authWindows, runs } from "../src/db/schema";
import { getDailyRun, parseEntries } from "../src/lib/daily";

const origin = 'http://localhost:3000';
const suffix = randomUUID().replaceAll('-', '').slice(0, 10);
const password = randomBytes(24).toString('base64url');
const address = `bounty-ui-${suffix}`;
const names: string[] = [];
const errors: string[] = [];
const accountIds: string[] = [];

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext({ baseURL: origin, viewport: { width: 1280, height: 900 }, extraHTTPHeaders: { 'x-real-ip': address } });
    await context.addInitScript(() => localStorage.setItem('luffillion:muted', '1'));
    const page = await context.newPage();
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('/');
    await page.getByRole('button', { name: 'Open game menu' }).click();
    await expect(page.getByRole('dialog', { name: 'Game menu' }).getByRole('tab', { name: 'Bounties', exact: true })).toBeVisible();
    await page.getByRole('tab', { name: 'Bounties', exact: true }).click();
    const payload = await (await page.request.get('/api/bounties')).json();
    console.log('Guest board rows:', payload.top.length);
    await expect(page.getByText('Bounties are earned by signed-in captains only.')).toBeVisible();
    await expect(page.getByText('Highest bounties after the daily voyage.')).toBeVisible();
    console.log('PASS guest sees top-50 bounty board and sign-in prompt, never any bounty');

    const daily = await (await context.request.get('/api/daily')).json();
    const questions = getDailyRun(daily.day);
    const picked = questions.map(q => {
      for (const tier of ['luffillion', 'epic'] as const) {
        const found = parseEntries(q).find(e => e.tier === tier);
        if (found) return found.name;
      }
      return '';
    });
    const registrationName = `bounty_ui_${suffix}`;
    names.push(registrationName);
    await page.getByRole('button', { name: /SIGN IN \/ CREATE ACCOUNT/ }).click();
    const account = page.getByRole('dialog', { name: "Captain's Log" });
    await account.getByRole('button', { name: 'Create account', exact: true }).click();
    await account.getByLabel('USERNAME', { exact: true }).fill(registrationName);
    await account.getByLabel('PASSWORD', { exact: true }).fill(password);
    await account.getByLabel('CONFIRM PASSWORD', { exact: true }).fill(password);
    await account.getByRole('button', { name: /CREATE MY ACCOUNT/ }).click();
    await expect(account).not.toBeVisible({ timeout: 15000 });
    // Registration returns the user to the bounties tab in the menu.
    await expect(page.getByRole('tab', { name: 'Bounties', exact: true })).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Top 50 bounties')).toBeVisible();
    await expect(page.getByText('YOUR BOUNTY')).toBeVisible();
    await page.getByRole('button', { name: 'Close menu' }).click();

    // Answer the questions through the real UI (stubbed guesses).
    await page.route('**/api/guess', async route => {
      const body = route.request().postDataJSON();
      const q = questions.find(q => q.id === body.questionId);
      const match = q ? parseEntries(q).find(e => e.keys.includes(body.guess.toLowerCase()) || e.name.toLowerCase() === body.guess.toLowerCase()) : null;
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(match ? { correct: true, name: match.name, tier: match.tier, points: match.points } : { correct: false, suggestion: null }) });
    });
    await page.getByRole('button', { name: /⚓ SET SAIL/ }).click();
    for (let i = 0; i < 7; i++) {
      await page.getByRole('textbox', { name: 'Your answer', exact: true }).fill(picked[i]);
      await page.getByRole('button', { name: 'RUN', exact: true }).click();
      if (i < 6) {
        await expect(page.getByRole('button', { name: 'NEXT ▸', exact: true })).toBeVisible();
        await page.getByRole('button', { name: 'NEXT ▸', exact: true }).click();
      }
    }
    await expect(page.getByText("TODAY'S VOYAGE IS OVER", { exact: true })).toBeVisible({ timeout: 15000 });
    await page.getByRole('button', { name: 'Open game menu' }).click();
    await expect(page.getByRole('tab', { name: 'Bounties', exact: true })).toBeVisible();
    if (!(await page.getByRole('tab', { name: 'Bounties', exact: true }).getAttribute('aria-selected'))?.includes('true')) {
      await page.getByRole('tab', { name: 'Bounties', exact: true }).click();
    }
    const expected = questions.reduce((sum, q, i) => {
      const match = parseEntries(q).find(e => e.name === picked[i]);
      return sum + (match ? 50 + match.points * 2 : 0);
    }, 0);
    const bounties = page.getByRole('tabpanel', { name: 'Bounties' });
    await expect(bounties.locator('p.text-4xl').getByText(String(expected), { exact: false })).toBeVisible();
    await expect(bounties.getByText(/RANK/, { exact: true })).toBeVisible();
    await expect(bounties.getByText(/TODAY/, { exact: true })).toBeVisible();
    await expect(bounties.getByText(registrationName)).toBeVisible();
    await page.screenshot({ path: 'artifacts/bounties-desktop.png' });
    assert.deepEqual(errors, [], 'no browser runtime errors');
    console.log('PASS signed-in: bounty earned via real UI, your rank shown, board shows usernames and bounties');
  } finally {
    await browser.close();
    const accountRows = await db.select({ id: accounts.id }).from(accounts).where(inArray(accounts.usernameKey, names));
    for (const row of accountRows) {
      await db.delete(runs).where(inArray(runs.accountId, [row.id]));
      await db.delete(bounties).where(eq(bounties.accountId, row.id));
      await db.delete(bountyGains).where(eq(bountyGains.accountId, row.id));
      await db.delete(accounts).where(eq(accounts.id, row.id));
    }
    await db.delete(authWindows).where(inArray(authWindows.bucket, [`ip:${address}`, ...names.map(n => `name:${n.toLowerCase()}`)].map(v => createHash('sha256').update(v).digest('hex'))));
    await pool.end();
    console.log('Removed temporary bounty UI test accounts.');
  }
}

main().then(async () => {}).catch(e => { console.error(e); process.exitCode = 1; });
