import type { Tier } from "./tiers";
import { ARCS_QUESTION } from "./bank/arcs";
import { CHARACTERS_QUESTION } from "./bank/characters";
import { CREWS_QUESTION } from "./bank/crews";
import { DEVIL_FRUITS_QUESTION } from "./bank/devilFruits";
import { LOCATIONS_QUESTION } from "./bank/locations";
import { SHIPS_QUESTION } from "./bank/ships";
import { SWORDS_QUESTION } from "./bank/swords";
import { TECHNIQUES_QUESTION } from "./bank/techniques";
import { EXTRA_QUESTIONS } from "./bank/extra";
import { buildDerived } from "./derived";
import { CURATED_CHARACTERS } from "./bank/curated/characters";
import { CURATED_CHARACTERS_2 } from "./bank/curated/characters2";
import { CURATED_POWERS } from "./bank/curated/powers";
import { CURATED_WORLD } from "./bank/curated/world";

// Each entry is "Display Name|alias|alias". The display name is what gets revealed.
// Matching ignores case, accents, punctuation and extra spaces, plus smart category aliases.
export interface Question {
  id: string;
  prompt: string;
  hint: string;
  tiers: Record<Tier, string[]>;
  matchAs?: string; // reuse another category's matching shortcuts (e.g. "characters")
}

const BASE_QUESTIONS: Question[] = [
  CHARACTERS_QUESTION,
  DEVIL_FRUITS_QUESTION,
  LOCATIONS_QUESTION,
  TECHNIQUES_QUESTION,
  SWORDS_QUESTION,
  SHIPS_QUESTION,
  CREWS_QUESTION,
  ARCS_QUESTION,
  ...EXTRA_QUESTIONS,
];

// Hand-written questions + hundreds of generated variants (letters, length, unions...).
const CURATED_QUESTIONS: Question[] = [...CURATED_CHARACTERS, ...CURATED_CHARACTERS_2, ...CURATED_POWERS, ...CURATED_WORLD];

export const QUESTION_BANK: Question[] = [...BASE_QUESTIONS, ...CURATED_QUESTIONS, ...buildDerived(BASE_QUESTIONS)];
