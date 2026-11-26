import type { Question } from "./questions";
import { TIER_ORDER, type Tier } from "./tiers";

// Generates hundreds of extra questions from the hand-written base banks by
// filtering their answers (starting letter, letters contained, length, ...) or
// combining two categories. Rarity tiers are inherited from the base answers.

const MIN_ANSWERS = 12;

const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const letters = (s: string) => norm(s).replace(/[^a-z]/g, "");

// "Name a Devil Fruit." -> "a Devil Fruit"; "Name a member of the Marines." -> "a member of the Marines"
function phraseOf(q: Question) {
  return q.prompt
    .replace(/^Name\s+/i, "")
    .replace(/[.?!]$/, "")
    .replace(/\s*\(.*?\)/g, "")
    .replace(/,\s*(past or present|from any era)$/i, "")
    .trim();
}

type PartFilter = (alias: string) => boolean;

// Keep only aliases that satisfy the filter; the first matching alias becomes the display name.
function filterQuestion(base: Question, id: string, prompt: string, hint: string, pass: PartFilter): Question | null {
  const tiers = Object.fromEntries(TIER_ORDER.map((t) => [t, [] as string[]])) as Record<Tier, string[]>;
  const seen = new Set<string>();
  let total = 0;
  for (const tier of TIER_ORDER) {
    for (const raw of base.tiers[tier]) {
      const parts = raw.split("|").map((p) => p.trim()).filter(Boolean);
      const ok = parts.filter(pass);
      if (ok.length === 0) continue;
      const key = norm(ok[0]);
      if (seen.has(key)) continue;
      seen.add(key);
      tiers[tier].push(ok.join("|"));
      total++;
    }
  }
  if (total < MIN_ANSWERS) return null;
  return finalize({ id, prompt, hint, tiers });
}

// Guarantee exactly one "One in a Luffillion" answer: keep the base one if present,
// otherwise promote the most obscure remaining answer.
function finalize(q: Question): Question {
  const t = q.tiers;
  if (t.luffillion.length > 1) {
    t.epic.push(...t.luffillion.slice(1));
    t.luffillion = t.luffillion.slice(0, 1);
  }
  if (t.luffillion.length === 0) {
    for (const tier of ["epic", "rare", "uncommon"] as Tier[]) {
      if (t[tier].length > 0) {
        t.luffillion = [t[tier].pop() as string];
        break;
      }
    }
  }
  return q;
}

function union(a: Question, b: Question): Question | null {
  const tiers = Object.fromEntries(TIER_ORDER.map((t) => [t, [] as string[]])) as Record<Tier, string[]>;
  const seen = new Set<string>();
  for (const q of [a, b]) {
    for (const tier of TIER_ORDER) {
      for (const raw of q.tiers[tier]) {
        const key = norm(raw.split("|")[0]);
        if (seen.has(key)) continue;
        seen.add(key);
        tiers[tier].push(raw);
      }
    }
  }
  return finalize({
    id: `${a.id}--or--${b.id}`,
    prompt: `Name ${phraseOf(a)} or ${phraseOf(b)}.`,
    hint: "Either category counts. Rarer answers score more.",
    tiers,
  });
}

export function buildDerived(base: Question[]): Question[] {
  const out: Question[] = [];
  const add = (q: Question | null) => {
    if (q) out.push(q);
  };

  for (const q of base) {
    const lead = `Name ${phraseOf(q)}`;

    // Starting letter
    for (const L of "abcdefghijklmnopqrstuvwxyz") {
      add(
        filterQuestion(q, `${q.id}--starts-${L}`, `${lead} that starts with the letter "${L.toUpperCase()}".`, `The answer (or a name it goes by) must begin with ${L.toUpperCase()}.`, (p) =>
          letters(p).startsWith(L),
        ),
      );
    }
  }

  // Unions of two big categories
  const big = base.filter((q) => Object.values(q.tiers).flat().length >= 10);
  for (let i = 0; i < big.length; i++) for (let j = i + 1; j < big.length; j++) add(union(big[i], big[j]));

  return out;
}
