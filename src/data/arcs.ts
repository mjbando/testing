import { MAX_POINTS } from "./tiers";


// Luffy's journey is cumulative: every correct answer moves him forward by the
// points it earned. The world is split into 12 sagas; a perfect day reaches Laugh Tale.
export interface Saga {
  name: string;
  subtitle: string;
  at: number; // journey points where the saga begins
}

// Journey distance = points earned. Laugh Tale (saga 12) begins at 500 points,
// so it takes a strong day (e.g. mostly Rare/Epic pulls) to reach it.
export const LAUGH_TALE_AT = 500;
export const SAGA_LENGTH = LAUGH_TALE_AT / 11; // ~45.5 points per saga
export const JOURNEY_MAX = MAX_POINTS; // 700: Luffy keeps exploring Laugh Tale past 500

export function travelFor(points: number): number {
  return Math.max(0, points);
}

const NAMES: [string, string][] = [
  ["East Blue", "A quiet seaside village"],
  ["Alabasta", "Village in the desert"],
  ["Sky Island", "Village above the clouds"],
  ["Enies Lobby", "Fortress in the middle of the sea"],
  ["Thriller Bark", "The haunted cemetery"],
  ["Marineford", "The Marine headquarters"],
  ["Fish-Man Island", "City at the bottom of the sea"],
  ["Dressrosa", "The Corrida Colosseum"],
  ["Whole Cake Island", "A land made of sweets"],
  ["Wano", "The land of samurai"],
  ["Elbaph", "The land of giants"],
  ["Laugh Tale", "The final island and its treasure"],
];

export const SAGAS: Saga[] = NAMES.map(([name, subtitle], i) => ({ name, subtitle, at: i * SAGA_LENGTH }));

export function sagaIndexAt(points: number): number {
  return Math.max(0, Math.min(SAGAS.length - 1, Math.floor(points / SAGA_LENGTH)));
}

export function sagaAt(points: number): Saga {
  return SAGAS[sagaIndexAt(points)];
}
