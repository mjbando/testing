import type { Question } from "./questions";
import type { Tier } from "./tiers";
import { QUESTION_BANK } from "./questions";
import { normalize } from "@/lib/daily";

// ---------------------------------------------------------------------------
// 31 daily questions for Nov 26 – Dec 26, 2026. Every answer is guaranteed by
// construction: each question is the intersection of two or three of the
// audited attribute lists, so anything that fits is already listed.
// ---------------------------------------------------------------------------

const CHAR = "char" as const, LOC = "loc" as const;
type Kind = typeof CHAR | typeof LOC;

// id -> natural-language fragment (uses "that ..." for locations and "who ..." for characters)
const FRAG: Record<string, { kind: Kind; phrase: string }> = {
  "q-impel-down": { kind: CHAR, phrase: "appeared in Impel Down" },
  "q-straw-hats": { kind: CHAR, phrase: "has been part of the Straw Hat Pirates" },
  "q-worst-generation": { kind: CHAR, phrase: "is a member of the Worst Generation" },
  "q-has-bounty": { kind: CHAR, phrase: "has a bounty" },
  "q-warlords": { kind: CHAR, phrase: "is or was a Warlord of the Sea" },
  "q-marines": { kind: CHAR, phrase: "has served as a Marine" },
  "q-blackbeard-pirates": { kind: CHAR, phrase: "is a member of the Blackbeard Pirates" },
  "q-red-hair-pirates": { kind: CHAR, phrase: "is a member of the Red Hair Pirates" },
  "q-whitebeard-pirates": { kind: CHAR, phrase: "is a member of the Whitebeard Pirates" },
  "q-fought-luffy": { kind: CHAR, phrase: "has fought Luffy" },
  "q-fought-zoro": { kind: CHAR, phrase: "has fought Zoro" },
  "q-female": { kind: CHAR, phrase: "is a female character" },
  "q-uses-sword": { kind: CHAR, phrase: "uses a sword" },
  "q-wears-hat": { kind: CHAR, phrase: "wears a hat" },
  "q-died": { kind: CHAR, phrase: "has died in the series" },
  "q-royalty": { kind: CHAR, phrase: "has been a king or queen" },
  "q-imprisoned": { kind: CHAR, phrase: "has been imprisoned" },
  "q-ate-fruit": { kind: CHAR, phrase: "has eaten a Devil Fruit" },
  "q-haki": { kind: CHAR, phrase: "has used Haki" },
  "q-east-blue": { kind: CHAR, phrase: "appeared in the East Blue Saga" },
  "q-logia-user": { kind: CHAR, phrase: "has a Logia Devil Fruit" },
  "q-zoan-user": { kind: CHAR, phrase: "has a Zoan Devil Fruit" },
  "q-paramecia-user": { kind: CHAR, phrase: "has a Paramecia Devil Fruit" },
  "q-transform-fruit": { kind: CHAR, phrase: "has a Devil Fruit that allows them to transform" },
  "q-fire": { kind: CHAR, phrase: "can control fire" },
  "q-ice": { kind: CHAR, phrase: "can control ice" },
  "q-lightning": { kind: CHAR, phrase: "can control lightning" },
  "q-body": { kind: CHAR, phrase: "can manipulate their body" },
  "q-fly": { kind: CHAR, phrase: "can fly" },
  "q-awakened": { kind: CHAR, phrase: "has an awakened Devil Fruit" },
  "q-conqueror": { kind: CHAR, phrase: "can use Conqueror's Haki" },
  "q-observation": { kind: CHAR, phrase: "can use Observation Haki" },
  "q-armament": { kind: CHAR, phrase: "can use Armament Haki" },
  "q-animal-fruit": { kind: CHAR, phrase: "has a Devil Fruit with an animal-based ability" },
  "q-gun": { kind: CHAR, phrase: "fights with a gun" },
  "q-staff": { kind: CHAR, phrase: "uses a staff, pole, or club" },
  "q-fists": { kind: CHAR, phrase: "fights using their fists" },
  "q-non-sword-weapon": { kind: CHAR, phrase: "uses a weapon other than a sword" },
  "q-martial-arts": { kind: CHAR, phrase: "uses a fighting style based on martial arts" },
  "q-legendary-weapon": { kind: CHAR, phrase: "wields a legendary weapon" },
  "q-spear": { kind: CHAR, phrase: "uses a spear, trident, or lance" },
  "q-named-attack": { kind: CHAR, phrase: "has used a named attack" },
  "q-fought-yonko": { kind: CHAR, phrase: "has fought a Four Emperor" },
  "q-fought-admiral": { kind: CHAR, phrase: "has fought an Admiral" },
  "q-fought-commander": { kind: CHAR, phrase: "has fought a Yonko Commander" },
  "q-fought-alongside": { kind: CHAR, phrase: "has fought alongside Luffy" },
  "q-bounty-100m": { kind: CHAR, phrase: "has a bounty over 100 million berries" },
  "q-bounty-500m": { kind: CHAR, phrase: "has a bounty over 500 million berries" },
  "q-bounty-1b": { kind: CHAR, phrase: "has a bounty over 1 billion berries" },
  "q-bounty-increased": { kind: CHAR, phrase: "has had their bounty increased" },
  "q-bounty-frozen": { kind: CHAR, phrase: "has had their bounty frozen" },
  "q-former-warlord-bounty": { kind: CHAR, phrase: "is a former Warlord with a bounty" },
  "q-post-timeskip-bounty": { kind: CHAR, phrase: "received or kept a bounty after the time skip" },
  "q-emperors": { kind: CHAR, phrase: "is or was a Four Emperor" },
  "q-admirals": { kind: CHAR, phrase: "has been an Admiral" },
  "q-commanders": { kind: CHAR, phrase: "has been a Yonko Commander" },
  "q-marine-family": { kind: CHAR, phrase: "has a family member in the Marines" },
  "q-sibling": { kind: CHAR, phrase: "has a brother or sister" },
  "q-betrayed": { kind: CHAR, phrase: "has betrayed someone" },
  "q-switched-sides": { kind: CHAR, phrase: "has switched sides" },
  "q-revolutionary": { kind: CHAR, phrase: "has been part of the Revolutionary Army" },
  "q-void-century": { kind: CHAR, phrase: "knows about the Void Century" },
  "q-met-celestial": { kind: CHAR, phrase: "has encountered a Celestial Dragon" },
  "q-been-skypiea": { kind: CHAR, phrase: "has been to Skypiea" },
  "q-been-wano": { kind: CHAR, phrase: "has been to Wano" },
  "q-been-fishman": { kind: CHAR, phrase: "has been to Fish-Man Island" },
  "q-oro-jackson": { kind: CHAR, phrase: "has been on Roger's ship" },
  "q-baroque": { kind: CHAR, phrase: "has been part of Baroque Works" },
  "q-cp": { kind: CHAR, phrase: "has been part of CP9 or CP0" },
  "q-pre-post-skip": { kind: CHAR, phrase: "appeared both before and after the time skip" },
  "q-fought-wg": { kind: CHAR, phrase: "has fought against the World Government" },
  // Locations
  "q-visited-islands": { kind: LOC, phrase: "was visited by the Straw Hats" },
  "q-grand-line": { kind: LOC, phrase: "is in the Grand Line" },
  "q-new-world": { kind: LOC, phrase: "is in the New World" },
  "q-east-blue-loc": { kind: LOC, phrase: "is in the East Blue" },
  "q-alabasta-saga-loc": { kind: LOC, phrase: "was visited during the Alabasta Saga" },
  "q-water7-saga-loc": { kind: LOC, phrase: "was visited during the Water 7 Saga" },
  "q-summit-saga-loc": { kind: LOC, phrase: "was visited during the Summit War Saga" },
  "q-emperors-saga-loc": { kind: LOC, phrase: "was visited during the Four Emperors Saga" },
  "q-villain-fight-loc": { kind: LOC, phrase: "was the site of a major villain battle" },
  "q-marine-encounter-loc": { kind: LOC, phrase: "was where the Straw Hats encountered the Marines" },
  "q-poneglyph-loc": { kind: LOC, phrase: "hosts a Poneglyph" },
  "q-prison-loc": { kind: LOC, phrase: "is a prison or a prison-related place" },
  "q-villain-ruled": { kind: LOC, phrase: "was ruled by a powerful villain" },
  "q-destroyed-loc": { kind: LOC, phrase: "was destroyed or ruined" },
  "q-reunion-loc": { kind: LOC, phrase: "is a Straw Hat reunion site" },
};

function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

interface Entry { name: string; keys: string[]; raw: string; tier: Tier; index: number }
interface Combo { ids: string[]; kind: Kind; members: Entry[]; signature: string }
const TIER_ORDER: Tier[] = ["common", "uncommon", "rare", "epic", "luffillion"];

function buildRanked(q: Question): Entry[] {
  const out: Entry[] = [];
  for (const tier of TIER_ORDER) {
    for (const raw of q.tiers[tier]) {
      const names = raw.split("|").map(s => s.trim());
      out.push({ name: names[0], keys: names.map(normalize).filter(Boolean), raw, tier, index: out.length });
    }
  }
  return out;
}

function intersectionOf(sets: Entry[][]): Entry[] {
  const [first, ...rest] = sets;
  if (!first) return [];
  const lookup = rest.map(set => {
    const setNames = new Set(set.map(e => e.name));
    return setNames;
  });
  return first.filter(entry => lookup.every(names => names.has(entry.name)));
}

function createSeasonal(): Question[] {
  const base = QUESTION_BANK.filter(q => q.id.startsWith("q-") && FRAG[q.id])
    .map(q => ({ q, kind: FRAG[q.id].kind, entries: buildRanked(q) }));
  const byId = new Map(base.map(b => [b.q.id, b]));
  const ranked = (ids: string[]) => ids.map(id => byId.get(id)!);
  const seen = new Set<string>();
  const combos: Combo[] = [];

  const addCombo = (ids: string[]) => {
    const parts = ranked(ids);
    const kind = parts[0].kind;
    if (parts.some(p => p.kind !== kind)) return;
    const members = intersectionOf(parts.map(p => p.entries));
    if (members.length < 8) return;
    const minParent = Math.min(...parts.map(p => p.entries.length));
    if (minParent > 0 && members.length / minParent >= 0.8) return; // effectively a subset of a parent
    const signature = members.map(m => m.name).sort().join("⚓");
    if (seen.has(signature)) return;
    seen.add(signature);
    combos.push({ ids, kind, members, signature });
  };
  for (let i = 0; i < base.length; i++) for (let j = i + 1; j < base.length; j++) addCombo([base[i].q.id, base[j].q.id]);
  for (let i = 0; i < base.length; i++)
    for (let j = i + 1; j < base.length; j++)
      for (let k = j + 1; k < base.length; k++) addCombo([base[i].q.id, base[j].q.id, base[k].q.id]);

  // Sort by pool richness; deterministic order is fine since every combo is tested.
  combos.sort((a, b) => b.members.length - a.members.length || a.ids.join().localeCompare(b.ids.join()));
  // Interleave large/medium/small pools so the seasonal mix runs from accessible to deep.
  const large = combos.filter(c => c.members.length >= 18);
  const medium = combos.filter(c => c.members.length >= 12 && c.members.length < 18);
  const small = combos.filter(c => c.members.length < 12);
  const mixed = [];
  const buckets = [large, medium, small];
  let added = true;
  while (mixed.length < 217 && added) {
    added = false;
    for (const b of buckets) {
      const c = b.shift();
      if (c) { mixed.push(c); added = true; }
      if (mixed.length >= 217) break;
    }
  }
  const shuffled = [...mixed];
  const rand = mulberry32(hash("seasonal-shuffle-november-december-2026"));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.map(toQuestion);
}

function makeId(ids: string[]) {
  return `seasonal--${ids.join("__")}`;
}
function toQuestion(combo: Combo): Question {
  const { kind, ids, members } = combo;
  const fragments = ids.map(id => FRAG[id].phrase);
  const sorted = [...members].sort((a, b) => a.index - b.index);
  const luff = sorted[sorted.length - 1];
  const rest = sorted.slice(0, -1);
  const nCommon = Math.ceil(rest.length * 0.10), nUncommon = Math.ceil(rest.length * 0.42), nRare = Math.ceil(rest.length * 0.78);
  const tiers: Record<Tier, string[]> = {
    common: rest.slice(0, nCommon).map(m => m.raw),
    uncommon: rest.slice(nCommon, nUncommon).map(m => m.raw),
    rare: rest.slice(nUncommon, nRare).map(m => m.raw),
    epic: rest.slice(nRare).map(m => m.raw),
    luffillion: [luff.raw],
  };
  const prompt = kind === "char"
    ? `Name a One Piece character who ${fragments.join(" and ")}.`
    : `Name a location in One Piece that ${fragments.join(" and ")}.`;
  return {
    id: makeId(ids),
    prompt,
    hint: kind === "char" ? "Any character satisfying BOTH conditions counts. Every listed answer qualifies." : "Any place satisfying BOTH conditions counts. Every listed answer qualifies.",
    tiers,
  };
}

export const SEASONAL_QUESTIONS: Question[] = createSeasonal();

export const SEASON_START = "2026-11-26";
export const SEASON_END = "2026-12-26";

export function inSeason(day: string): boolean {
  return day >= SEASON_START && day <= SEASON_END;
}

const DAY_MS = 86_400_000;
const START_MS = Date.parse(`${SEASON_START}T00:00:00Z`);
const END_MS = Date.parse(`${SEASON_END}T00:00:00Z`);
const DAY_COUNT = Math.round((END_MS - START_MS) / DAY_MS) + 1;

// Each day gets a non-overlapping slice of the seasonal pool so the whole season
// never repeats a question across days.
export function seasonalQuestionsFor(day: string): Question[] {
  const dayMs = Date.parse(`${day}T00:00:00Z`);
  const index = Math.round((dayMs - START_MS) / DAY_MS);
  if (index < 0 || index >= DAY_COUNT) throw new Error("Different daily rotation is needed for " + day);
  return SEASONAL_QUESTIONS.slice(index * 7, index * 7 + 7);
}
