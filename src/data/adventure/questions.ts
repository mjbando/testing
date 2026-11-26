import { ARC_NAMES, ADVENTURE_SAGAS, ADVENTURE_QUESTIONS, type AdventureArc, type AdventureLevel } from "./levels";
import { EAST_LORE } from "./lore-east";
import { PARADISE_LORE } from "./lore-paradise";
import { NEW_WORLD_LORE } from "./lore-new-world";
import type { LoreSet } from "./lore-types";
import type { Question } from "../questions";
import { checkGuess, suggestGuess } from "@/lib/daily";

// Server-side question bank. Client components import level metadata, never this module.
export interface AdventureFact { id:string; arc:AdventureArc; prompt:string; answers:string; depth:1|3|5 }
const lore: Record<string,LoreSet> = { ...EAST_LORE, ...PARADISE_LORE, ...NEW_WORLD_LORE };
export const ADVENTURE_FACTS: AdventureFact[] = Object.entries(lore).flatMap(([arc,set])=>
  (['core','lore','deep'] as const).flatMap((category,part)=>set[category].trim().split('\n').filter(Boolean).map((line,index)=>{
    const [prompt,answers] = line.split(' :: ');
    if (!prompt || !answers) throw new Error(`Malformed adventure question: ${arc}/${category}/${index}`);
    return {id:`adv-${arc}-${category}-${index}`,arc:arc as AdventureArc,prompt:prompt.trim(),answers:answers.trim(),depth:([1,3,5] as const)[part]};
  })),
);
const factIndex = new Map(ADVENTURE_FACTS.map(f=>[f.id,f]));
export function adventureFact(id: string) {
  const found=factIndex.get(id);
  if (!found) throw new Error(`Unknown adventure question ${id}`);
  return found;
}
function seeded(seed: string) {
  let n=2166136261;
  for(const c of seed) n=Math.imul(n ^ c.charCodeAt(0),16777619);
  return () => { n+=0x6d2b79f5; let t=Math.imul(n ^ n>>>15,1|n);t^=t+Math.imul(t^t>>>7,61|t);return ((t^t>>>14)>>>0)/4294967296; };
}
export function levelQuestions(level: AdventureLevel, seed: string): AdventureFact[] {
  const allowed=level.number===100 ? Object.keys(ARC_NAMES) : level.boss ? ADVENTURE_SAGAS[level.saga-1].arcs : [level.arc];
  const pool=ADVENTURE_FACTS.filter(f=>allowed.includes(f.arc) && (!level.boss || f.depth===5) && (level.number<=40 || f.depth>=3) && (level.boss || level.number>20 || f.depth<=3));
  const target=level.boss?5:Math.min(5,1+Math.floor((level.number-1)/20));
  const random=seeded(`adventure-v1:${level.number}:${seed}`);
  return pool.map(f=>({f,key:-Math.log(Math.max(0.000001,random()))*(1+Math.abs(f.depth-target)*1.5)}))
    .sort((a,b)=>a.key-b.key).slice(0,ADVENTURE_QUESTIONS).map(item=>item.f);
}
function matchQuestion(fact: AdventureFact): Question {
  return { id:fact.id,prompt:fact.prompt,hint:ARC_NAMES[fact.arc],tiers:{common:[fact.answers],uncommon:[],rare:[],epic:[],luffillion:[]} };
}
export function answerAdventure(fact: AdventureFact, guess: string) { return checkGuess(matchQuestion(fact),guess); }
export function suggestAdventure(fact: AdventureFact, guess: string) { return suggestGuess(matchQuestion(fact),guess); }
