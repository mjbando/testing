import { QUESTION_BANK, type Question } from "@/data/questions";
import { inSeason, seasonalQuestionsFor, SEASONAL_QUESTIONS } from "@/data/seasonal";
import { DAILY_QUESTION_COUNT, TIER_CONFIG, TIER_ORDER, type Tier } from "@/data/tiers";

export interface ParsedEntry {
  name: string;
  tier: Tier;
  points: number;
  rawParts: string[];
  keys: string[];
}

export function todayKey(date: Date = new Date()): string {
  // Eastern Time (12:00 AM EST reset) keeps the daily cycle identical for every player.
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date); // returns YYYY-MM-DD
}

export function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/^the /, "")
    .trim();
}

function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function getQuestionById(id: string): Question | undefined {
  if (id.startsWith("seasonal--")) return SEASONAL_QUESTIONS.find((q) => q.id === id);
  return QUESTION_BANK.find((q) => q.id === id);
}

// A fresh random set of 7 for a new run, avoiding recently seen questions when possible.
export function pickRunQuestions(exclude: string[] = [], rand: () => number = Math.random): Question[] {
  const ex = new Set(exclude);
  const shuffle = <T,>(arr: T[]) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // Weighted shuffle so every *kind* of question (starts-with, contains, unions, originals...)
  // gets a fair share instead of the most numerous kind dominating.
  const kindOf = (q: Question) => (q.id.includes("--or--") ? "or" : (q.id.split("--")[1] ?? "base").replace(/-.*/, ""));
  const kindCount = new Map<string, number>();
  for (const q of QUESTION_BANK) kindCount.set(kindOf(q), (kindCount.get(kindOf(q)) ?? 0) + 1);
  const KIND_WEIGHT: Record<string, number> = { base: 6, or: 2, starts: 0.6 };
  const weightOf = (q: Question) => (KIND_WEIGHT[kindOf(q)] ?? 1) / (kindCount.get(kindOf(q)) ?? 1);
  const weighted = (arr: Question[]) =>
    arr
      .map((q) => ({ q, k: Math.pow(rand(), 1 / weightOf(q)) }))
      .sort((x, y) => y.k - x.k)
      .map((x) => x.q);
  const fresh = weighted(QUESTION_BANK.filter((q) => !ex.has(q.id)));
  const seen = shuffle(QUESTION_BANK.filter((q) => ex.has(q.id)));
  // Variety: at most one question per base category (e.g. one "characters" twist per run).
  const groupOf = (q: Question) => q.id.split("--")[0];
  const picked: Question[] = [];
  const groups = new Set<string>();
  for (const q of [...fresh, ...seen]) {
    if (picked.length >= DAILY_QUESTION_COUNT) break;
    const parts = q.id.split("--or--");
    const gs = parts.length > 1 ? parts.map((p) => p.split("--")[0]) : [groupOf(q)];
    if (gs.some((g) => groups.has(g))) continue;
    // Keep letter questions rare: at most one per run.
    if (kindOf(q) === "starts" && picked.some((x) => kindOf(x) === "starts")) continue;
    gs.forEach((g) => groups.add(g));
    picked.push(q);
  }
  for (const q of fresh) if (picked.length < DAILY_QUESTION_COUNT && !picked.includes(q) && kindOf(q) !== "starts") picked.push(q);
  return picked;
}

// ---------- Daily run: one shared set of 7 per day (resets at 12:00 AM EST) ----------
const dailyCache = new Map<string, Question[]>();

function shiftDay(day: string, delta: number): string {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
}

// Same 7 questions for every player on a given day, avoiding the previous week's picks.
export function getDailyRun(day: string): Question[] {
  const cached = dailyCache.get(day);
  if (cached) return cached;
  if (inSeason(day)) {
    const run = seasonalQuestionsFor(day);
    dailyCache.set(day, run);
    return run;
  }
  const exclude: string[] = [];
  for (let k = 1; k <= 7; k++) {
    const prev = shiftDay(day, -k);
    exclude.push(...pickRunQuestions([], mulberry32(hash(`luffillion-daily-${prev}`))).map((q) => q.id));
  }
  const run = pickRunQuestions(exclude, mulberry32(hash(`luffillion-daily-${day}`)));
  dailyCache.set(day, run);
  return run;
}

export function msUntilNextDay(now: Date = new Date()): number {
  const currentKey = todayKey(now);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).formatToParts(now);
  const h = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10) % 24;
  const m = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const s = parseInt(parts.find((p) => p.type === "second")?.value ?? "0", 10);
  const ms = now.getMilliseconds();

  // Approximate ms remaining until 12:00 AM Eastern:
  const approxRemaining = ((23 - h) * 3600 + (59 - m) * 60 + (60 - s)) * 1000 - ms;
  let target = new Date(now.getTime() + approxRemaining);

  // Exact boundary alignment when the Eastern date key changes:
  while (todayKey(target) === currentKey) {
    target = new Date(target.getTime() + 1000);
  }
  while (todayKey(new Date(target.getTime() - 1000)) !== currentKey) {
    target = new Date(target.getTime() - 1000);
  }
  return Math.max(0, target.getTime() - now.getTime());
}

// Deterministically picks today's 7 questions from the bank (same for everyone that day).
export function getDailyQuestions(day: string): Question[] {
  if (inSeason(day)) return seasonalQuestionsFor(day);
  const rand = mulberry32(hash(`luffillion-${day}`));
  const order = QUESTION_BANK.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.slice(0, DAILY_QUESTION_COUNT).map((i) => QUESTION_BANK[i]);
}

export function parseEntries(question: Question): ParsedEntry[] {
  const out: ParsedEntry[] = [];
  const seenNames = new Set<string>();
  for (const tier of TIER_ORDER) {
    for (const raw of question.tiers[tier]) {
      const names = raw.split("|").map((s) => s.trim()).filter(Boolean);
      if (names.length === 0) continue;
      const canonKey = normalize(names[0]);
      if (seenNames.has(canonKey)) continue;
      seenNames.add(canonKey);
      out.push({
        name: names[0],
        tier,
        points: TIER_CONFIG[tier].points,
        rawParts: names,
        keys: names.map(normalize).filter(Boolean),
      });
    }
  }
  return out;
}

function deriveVariants(questionId: string, entry: ParsedEntry): string[] {
  const variants = new Set<string>();
  const isLuffillion = entry.tier === "luffillion";

  for (const key of entry.keys) {
    if (questionId === "devil-fruits") {
      if (key.includes(" no mi")) {
        variants.add(key.replace(/ no mi\b/g, "").replace(/\s+/g, " ").trim());
        variants.add(key.replace(/ no mi\b/g, " fruit").replace(/\s+/g, " ").trim());
      }
      if (key.endsWith(" fruit")) {
        variants.add(key.slice(0, -6).trim());
      }
      if (!isLuffillion && key.includes(" model ")) {
        const afterModel = key.split(" model ")[1]?.trim();
        if (afterModel && afterModel.length >= 4) {
          variants.add(afterModel);
          variants.add(`model ${afterModel}`);
          variants.add(`${afterModel} fruit`);
        }
      }
    } else if (questionId === "arcs") {
      const stripped = key.replace(/ (arc|saga|special)$/, "").trim();
      if (stripped.length >= 3) variants.add(stripped);
      if (!key.endsWith(" arc")) variants.add(`${key} arc`);
    } else if (questionId === "locations" && !isLuffillion) {
      const stripped = key.replace(/ (island|islands|kingdom|village|town|archipelago|country|city)$/, "").trim();
      if (stripped.length >= 4) variants.add(stripped);
    } else if (questionId === "crews" && !isLuffillion) {
      const stripped = key.replace(/ (pirates|crew|family|clan|army|alliance|navy|marines)$/, "").trim();
      if (stripped.length >= 4) {
        variants.add(stripped);
        variants.add(`${stripped} crew`);
        variants.add(`${stripped} pirates`);
      }
    } else if (questionId === "techniques") {
      if (key.startsWith("gomu gomu no ")) {
        const move = key.slice("gomu gomu no ".length).trim();
        variants.add(`gum gum ${move}`);
        if (!isLuffillion && move.length >= 4) variants.add(move);
      }
      if (key.startsWith("gum gum ")) {
        const move = key.slice("gum gum ".length).trim();
        variants.add(`gomu gomu no ${move}`);
        if (!isLuffillion && move.length >= 4) variants.add(move);
      }
    } else if (questionId === "characters" && !isLuffillion) {
      const stripped = key
        .replace(
          /^(monkey d|portgas d|gol d|marshall d|trafalgar d water|trafalgar|jaguar d|rocks d|nefertari|donquixote|charlotte|vinsmoke|kozuki|shimotsuki|kurozumi|figarland|saint|dr|captain|vice admiral|admiral|princess|king|queen|duke|master|sir) /,
          "",
        )
        .trim();
      if (stripped.length >= 4) variants.add(stripped);
    } else if ((questionId === "swords" || questionId === "ships") && !isLuffillion) {
      const stripped = key.replace(/ (sword|swords|blade|blades|ship|boat)$/, "").trim();
      if (stripped.length >= 4) variants.add(stripped);
    }
  }

  if (questionId === "techniques" && !isLuffillion) {
    for (const raw of entry.rawParts) {
      if (raw.includes(":")) {
        const parts = raw.split(":").map((p) => normalize(p));
        for (const p of parts) {
          if (p.length >= 4) variants.add(p);
        }
      }
    }
  }

  return [...variants].filter(Boolean);
}

const indexCache = new Map<string, Map<string, ParsedEntry>>();

function getIndex(question: Question): Map<string, ParsedEntry> {
  const cached = indexCache.get(question.id);
  if (cached) return cached;

  const entries = parseEntries(question);
  const map = new Map<string, ParsedEntry>();

  // Pass 1: Explicit aliases always take priority.
  for (const entry of entries) {
    for (const key of entry.keys) {
      if (!map.has(key)) map.set(key, entry);
    }
  }

  // Pass 2: Derived convenience aliases (only added when unambiguous across the whole question).
  const candidates = new Map<string, ParsedEntry | null>();
  for (const entry of entries) {
    for (const variant of deriveVariants(question.matchAs ?? question.id, entry)) {
      if (map.has(variant)) continue;
      const existing = candidates.get(variant);
      if (existing === undefined) {
        candidates.set(variant, entry);
      } else if (existing !== entry) {
        candidates.set(variant, null); // ambiguous -> skip
      }
    }
  }

  for (const [variant, entry] of candidates) {
    if (entry && !map.has(variant)) {
      map.set(variant, entry);
    }
  }

  indexCache.set(question.id, map);
  return map;
}

export function checkGuess(question: Question, guess: string): ParsedEntry | null {
  const key = normalize(guess);
  if (!key) return null;
  return getIndex(question).get(key) ?? null;
}

export function totalAnswers(question: Question): number {
  return parseEntries(question).length;
}

export function tierCounts(question: Question): Record<Tier, number> {
  const counts: Record<Tier, number> = {
    common: 0,
    uncommon: 0,
    rare: 0,
    epic: 0,
    luffillion: 0,
  };
  for (const entry of parseEntries(question)) {
    counts[entry.tier]++;
  }
  return counts;
}

// ---------- Auto-correct: find the closest answer to a near-miss ----------
function levenshtein(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev2: number[] = [];
  let prev: number[] = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur: number[] = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      // swapped neighbours count as one typo ("zoor" -> "zoro")
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev2 = prev;
    prev = cur;
  }
  return prev[b.length];
}

function allowedDistance(len: number): number {
  if (len <= 2) return 0;
  if (len <= 4) return 1;
  if (len <= 7) return 2;
  if (len <= 12) return 3;
  return 4;
}

const compact = (s: string) => s.replace(/ /g, "");

// Sound-alike skeleton so common misspellings collapse to the same key:
// "Rayleigh"/"Raleigh", "Kaido"/"Kaidou", "Shirahoshi"/"Shirahosi", "Zorro"/"Zoro", "Chopper"/"Choper".
function phonetic(s: string): string {
  let p = compact(s);
  p = p
    .replace(/ph/g, "f")
    .replace(/ck/g, "k")
    .replace(/q/g, "k")
    .replace(/c(?=[eiy])/g, "s")
    .replace(/c/g, "k")
    .replace(/x/g, "ks")
    .replace(/z/g, "s")
    .replace(/y/g, "i")
    .replace(/w/g, "u")
    .replace(/v/g, "b")
    .replace(/gh/g, "")
    .replace(/(?!^)h/g, "")
    .replace(/ou|oo|uu/g, "u")
    .replace(/ee|ie|ei|ii/g, "i")
    .replace(/ai|ay/g, "ai")
    .replace(/([a-z])\1+/g, "$1");
  // trailing vowels are often dropped/added ("Enel"/"Eneru", "Kaidou")
  return p.replace(/([^aeiou])[aeiou]$/, "$1");
}

interface FuzzyKey {
  entry: ParsedEntry;
  raw: string;
  ph: string;
  tokens: string[];
}

const fuzzyCache = new Map<string, FuzzyKey[]>();

function getFuzzyKeys(question: Question): FuzzyKey[] {
  const cached = fuzzyCache.get(question.id);
  if (cached) return cached;
  const out: FuzzyKey[] = [];
  for (const [candidate, entry] of getIndex(question)) {
    const raw = compact(candidate);
    if (raw.length < 3) continue;
    out.push({
      entry,
      raw,
      ph: phonetic(candidate),
      tokens: candidate.split(" ").filter((w) => w.length >= 5 && !["model", "fruit", "pirates", "island", "kingdom"].includes(w)),
    });
  }
  fuzzyCache.set(question.id, out);
  return out;
}

// Returns the display name of the closest answer if the guess looks like a misspelling.
export function suggestGuess(question: Question, guess: string): string | null {
  const key = normalize(guess);
  if (key.length < 3) return null;
  const ck = compact(key);
  const pk = phonetic(key);
  const tierRank: Record<Tier, number> = { common: 0, uncommon: 1, rare: 2, epic: 3, luffillion: 4 };
  let best: { entry: ParsedEntry; score: number } | null = null;

  const consider = (entry: ParsedEntry, score: number) => {
    // Prefer lower edit score; on ties prefer the more famous (lower tier) answer.
    if (!best || score < best.score || (score === best.score && tierRank[entry.tier] < tierRank[best.entry.tier])) {
      best = { entry, score };
    }
  };

  for (const fk of getFuzzyKeys(question)) {
    if (fk.raw === ck) return fk.entry.name; // only spacing/punctuation differs
    if (fk.ph === pk && pk.length >= 3) {
      consider(fk.entry, 0.5); // sounds the same
      continue;
    }
    const max = allowedDistance(Math.min(fk.raw.length, ck.length));
    if (max > 0) {
      // Short guesses must at least start with the same letter to avoid wild guesses.
      if (ck.length <= 4 && fk.raw[0] !== ck[0]) continue;
      const d = levenshtein(ck, fk.raw, max);
      if (d <= max) consider(fk.entry, d);
      const pmax = Math.max(1, max - 1);
      const pd = levenshtein(pk, fk.ph, pmax);
      if (pd <= pmax) consider(fk.entry, pd + 0.25);
    }
    // Misspelled single word of a longer name ("Doflamigo", "Katakri", "Neferteri").
    if (ck.length >= 5 && !key.includes(" ")) {
      for (const tok of fk.tokens) {
        const tmax = tok.length <= 7 ? 1 : 2;
        const td = levenshtein(ck, tok, tmax);
        if (td <= tmax) consider(fk.entry, td + 0.6);
        else if (phonetic(tok) === pk) consider(fk.entry, 0.9);
      }
    }
  }
  const found = best as { entry: ParsedEntry; score: number } | null;
  return found ? found.entry.name : null;
}
