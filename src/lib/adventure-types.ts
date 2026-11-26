import type { Captain } from "./voyage";
import type { CharacterId } from "@/data/playable-characters";
import type { AdventureLevel } from "@/data/adventure/levels";
import type { EmblemKind } from "@/data/achievement-emblems";

export type AdventureStatus = "active" | "passed" | "failed" | "abandoned";
export interface AdventureRound { startedAt:number; attempts:number; status?:"solved"|"expired"; answer?:string; resolvedAt?:number }
export interface AdventureState { questionIds:string[]; cursor:number; rounds:Record<number,AdventureRound> }
export interface AdventureQuestionView { id:string; prompt:string; hint:string; depth:number }
export interface AdventureRecap { depth:number; prompt:string; answer:string|null; accepted:string[]; correct:boolean; points:number; attempts:number }
export interface AdventureAttemptView {
  id:string; level:number; status:AdventureStatus; cursor:number; score:number; correct:number; deadline:number|null;
  outcomes:("solved"|"expired"|null)[];
  question:AdventureQuestionView|null; lastResult:AdventureRecap|null; recap:AdventureRecap[]|null;
}
export interface AdventureBadge { saga:number; name:string; earned:boolean; emblem:EmblemKind; atLevel:number }
export interface AdventureProfile {
  completed:number; unlockedThrough:number; title:string; nextTitle:{level:number;title:string}|null;
  clears:{level:number; bestScore:number; completedAt:string}[];
  badges:AdventureBadge[];
  ultimate:{id:"adventure-pirate-king"; title:"Pirate King"; earned:boolean};
}
export interface AdventureResponse {
  captain:Captain|null; equippedCharacter:CharacterId; profile:AdventureProfile; attempt:AdventureAttemptView|null; serverNow:number;
  feedback?:{kind:"correct"|"wrong"|"expired"; suggestion?:string|null};
}
export type AdventureAction = "start" | "begin" | "guess" | "timeout" | "abandon";
export interface AdventureRequest { action:AdventureAction; level?:number; attemptId?:string; cursor?:number; guess?:string }
export type { AdventureLevel };
