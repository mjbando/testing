import type { EmblemKind } from "../achievement-emblems";

export const ADVENTURE_QUESTIONS = 7;
export const ADVENTURE_SECONDS = 25;
export const ADVENTURE_POINTS = 100;
export const ADVENTURE_MAX = 700;

export const ARC_NAMES = {
  "romance-dawn": "Romance Dawn", "orange-town": "Orange Town", "syrup-village": "Syrup Village", baratie: "Baratie", "arlong-park": "Arlong Park", loguetown: "Loguetown",
  "reverse-mountain": "Reverse Mountain", "whisky-peak": "Whisky Peak", "little-garden": "Little Garden", "drum-island": "Drum Island", alabasta: "Alabasta",
  jaya: "Jaya", skypiea: "Skypiea", "long-ring": "Long Ring Long Land", "water-7": "Water 7", "enies-lobby": "Enies Lobby", "post-enies": "Post-Enies Lobby",
  "thriller-bark": "Thriller Bark", sabaody: "Sabaody Archipelago", "amazon-lily": "Amazon Lily", "impel-down": "Impel Down", marineford: "Marineford", "post-war": "Post-War",
  "return-sabaody": "Return to Sabaody", "fishman-island": "Fish-Man Island", "punk-hazard": "Punk Hazard", dressrosa: "Dressrosa", zou: "Zou", "whole-cake": "Whole Cake Island", reverie: "Levely / Reverie",
  wano: "Wano Country", egghead: "Egghead", elbaph: "Elbaph / Final Saga", "laugh-tale": "Laugh Tale",
} as const;
export type AdventureArc = keyof typeof ARC_NAMES;
export interface AdventureSaga {
  number: number; name: string; subtitle: string; color: string; theme: AdventureArc; emblem: EmblemKind; arcs: AdventureArc[];
}
const repeat = (id: AdventureArc, count: number) => Array<AdventureArc>(count).fill(id);
export const ADVENTURE_SAGAS: AdventureSaga[] = [
  { number:1, name:"East Blue", subtitle:"Where a promise becomes a voyage", color:"#8cdca0", theme:"romance-dawn", emblem:"first-voyage", arcs:[...repeat("romance-dawn",2),"orange-town","syrup-village",...repeat("baratie",2),...repeat("arlong-park",2),"loguetown","loguetown"] },
  { number:2, name:"Alabasta", subtitle:"Across the desert, beneath the crown", color:"#f2ca78", theme:"alabasta", emblem:"rookie", arcs:["reverse-mountain","whisky-peak","little-garden","drum-island",...repeat("alabasta",6)] },
  { number:3, name:"Sky Island", subtitle:"The city of gold above the clouds", color:"#b9e8fa", theme:"skypiea", emblem:"rising", arcs:[...repeat("jaya",2),...repeat("skypiea",8)] },
  { number:4, name:"Water 7", subtitle:"A promise worth declaring war for", color:"#79cce6", theme:"water-7", emblem:"encyclopedia", arcs:["long-ring",...repeat("water-7",3),...repeat("enies-lobby",3),...repeat("post-enies",2),"enies-lobby"] },
  { number:5, name:"Thriller Bark", subtitle:"Follow the shadows into the mist", color:"#b19bdd", theme:"thriller-bark", emblem:"deep-lore", arcs:repeat("thriller-bark",10) },
  { number:6, name:"Summit War", subtitle:"A brother's promise. A world at war.", color:"#b6cfec", theme:"marineford", emblem:"no-mistakes", arcs:[...repeat("sabaody",2),"amazon-lily",...repeat("impel-down",3),...repeat("marineford",2),"post-war","marineford"] },
  { number:7, name:"Fish-Man Island", subtitle:"Ten thousand meters beneath the sea", color:"#6de0d2", theme:"fishman-island", emblem:"explorer", arcs:["return-sabaody",...repeat("fishman-island",9)] },
  { number:8, name:"Dressrosa", subtitle:"Break the strings. Remember the forgotten.", color:"#f7ab7c", theme:"dressrosa", emblem:"perfect", arcs:[...repeat("punk-hazard",3),...repeat("dressrosa",7)] },
  { number:9, name:"Whole Cake Island", subtitle:"A sweet kingdom with a bitter secret", color:"#f3a4cd", theme:"whole-cake", emblem:"dedicated", arcs:[...repeat("zou",2),...repeat("whole-cake",6),"reverie","whole-cake"] },
  { number:10, name:"Wano & Final Saga", subtitle:"The final road to Laugh Tale", color:"#eec95e", theme:"wano", emblem:"pirate-king", arcs:[...repeat("wano",5),...repeat("egghead",3),"elbaph","laugh-tale"] },
];

export const ADVENTURE_TITLES = [
  { level:1, title:"Cabin Boy" }, { level:10, title:"Bounty Hunter" }, { level:20, title:"Rookie Pirate" },
  { level:30, title:"Veteran Pirate" }, { level:40, title:"Notorious Pirate" }, { level:50, title:"Supernova" },
  { level:60, title:"Commander" }, { level:70, title:"Legendary Pirate" }, { level:80, title:"Warlord" },
  { level:90, title:"Emperor of the Sea" }, { level:100, title:"Pirate King" },
] as const;
export const adventureTitle = (completed: number): string => [...ADVENTURE_TITLES].reverse().find(t=>completed>=t.level)?.title ?? "Aspiring Pirate";
export const nextAdventureTitle = (completed: number) => ADVENTURE_TITLES.find(t=>t.level>completed) ?? null;

export function adventureDifficulty(level: number) {
  if (level===100) return "Legendary";
  if (level<=20) return "Beginner";
  if (level<=40) return "Easy / Intermediate";
  if (level<=60) return "Intermediate / Advanced";
  if (level<=80) return "Advanced";
  return "Expert / Deep Lore";
}
export interface AdventureLevel { number:number; saga:number; arc:AdventureArc; name:string; boss:boolean; target:number; difficulty:string }
export const ADVENTURE_LEVELS: AdventureLevel[] = ADVENTURE_SAGAS.flatMap(saga=>saga.arcs.map((arc,index)=>{
  const number=(saga.number-1)*10+index+1, boss=index===9;
  const base=number<=20?400:number<=60?500:600;
  return {number,saga:saga.number,arc,boss,
    name:number===100?"Pirate King Final Challenge":boss?`${saga.number===9?"Whole Cake":saga.name} Boss Challenge`:ARC_NAMES[arc],
    target:Math.min(700,base+(boss?100:0)),difficulty:adventureDifficulty(number)};
}));
export function adventureLevel(number: unknown): AdventureLevel | null {
  return typeof number==="number" && Number.isInteger(number) && number>=1 && number<=100 ? ADVENTURE_LEVELS[number-1] : null;
}
