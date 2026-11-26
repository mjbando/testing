import { randomUUID } from "node:crypto";
import { and, asc, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { accounts, adventureAttempts, adventureClears, adventureProgress } from "@/db/schema";
import { ADVENTURE_POINTS, ADVENTURE_QUESTIONS, ADVENTURE_SECONDS, ADVENTURE_SAGAS, ARC_NAMES, adventureLevel, adventureTitle, nextAdventureTitle } from "@/data/adventure/levels";
import { adventureFact, answerAdventure, levelQuestions, suggestAdventure } from "@/data/adventure/questions";
import { RequestProblem } from "./account-server";
import type { AdventureAttemptView, AdventureProfile, AdventureRecap, AdventureResponse, AdventureState } from "./adventure-types";

type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];
type Attempt = typeof adventureAttempts.$inferSelect;
const duration = ADVENTURE_SECONDS * 1000;
const isUUID = (value: unknown): value is string => typeof value === "string" && /^[0-9a-f-]{36}$/i.test(value);
export function adventureScore(state: AdventureState) { return Object.values(state.rounds).filter(r=>r.status==="solved").length * ADVENTURE_POINTS; }

export function emptyAdventureProfile(): AdventureProfile {
  return { completed:0,unlockedThrough:1,title:adventureTitle(0),nextTitle:nextAdventureTitle(0),clears:[],
    badges:ADVENTURE_SAGAS.map(s=>({saga:s.number,name:`${s.name} Conqueror`,earned:false,emblem:s.emblem,atLevel:s.number*10})),
    ultimate:{id:"adventure-pirate-king",title:"Pirate King",earned:false} };
}
async function profileFor(tx: Tx, accountId: string): Promise<AdventureProfile> {
  const [saved] = await tx.select().from(adventureProgress).where(eq(adventureProgress.accountId, accountId)).limit(1);
  const clears = await tx.select().from(adventureClears).where(eq(adventureClears.accountId, accountId)).orderBy(asc(adventureClears.level));
  const completed = saved?.completed ?? 0;
  return { completed,unlockedThrough:Math.min(100,completed+1),title:adventureTitle(completed),nextTitle:nextAdventureTitle(completed),
    clears:clears.map(c=>({level:c.level,bestScore:c.bestScore,completedAt:c.clearedAt.toISOString()})),
    badges:ADVENTURE_SAGAS.map(s=>({saga:s.number,name:`${s.name} Conqueror`,earned:completed>=s.number*10,emblem:s.emblem,atLevel:s.number*10})),
    ultimate:{id:"adventure-pirate-king",title:"Pirate King",earned:completed===100} };
}
function recap(attempt: Attempt, index: number): AdventureRecap {
  const fact=adventureFact(attempt.state.questionIds[index]);
  const r=attempt.state.rounds[index];
  return { depth:fact.depth,prompt:fact.prompt,answer:r?.answer??null,correct:r?.status==="solved",points:r?.status==="solved"?ADVENTURE_POINTS:0,attempts:r?.attempts??0,
    accepted:fact.answers.split('|').map(a=>a.trim()) };
}
function serialize(attempt: Attempt | undefined | null): AdventureAttemptView | null {
  if (!attempt) return null;
  const {state,status}=attempt;
  const r=state.rounds[state.cursor];
  const fact=status==="active" && r?.startedAt ? adventureFact(state.questionIds[state.cursor]) : null;
  const last=state.cursor>0 ? recap(attempt,state.cursor-1) : null;
  // Answers to future questions never leave the server before a completed attempt.
  return { id:attempt.id,level:attempt.level,status,cursor:state.cursor,score:adventureScore(state),correct:adventureScore(state)/ADVENTURE_POINTS,
    deadline:fact && r ? r.startedAt+duration : null,
    question:fact?{id:fact.id,prompt:fact.prompt,hint:`From ${ARC_NAMES[fact.arc]}. Full names and common aliases are accepted.`,depth:fact.depth}:null,
    outcomes:Array.from({length:ADVENTURE_QUESTIONS},(_,i)=>state.rounds[i]?.status??null),
    lastResult:fact?null:last,
    recap:status==="passed"||status==="failed" ? state.questionIds.map((_,i)=>recap(attempt,i)) : null };
}
async function writeAttempt(tx: Tx, attempt: Attempt): Promise<Attempt> {
  const level=adventureLevel(attempt.level)!;
  if (attempt.status==="active" && attempt.state.cursor===ADVENTURE_QUESTIONS) {
    attempt.status=adventureScore(attempt.state)>=level.target?"passed":"failed";
    if (attempt.status==="passed") {
      const [profile]=await tx.select().from(adventureProgress).where(eq(adventureProgress.accountId,attempt.accountId)).limit(1);
      const completed=profile?.completed??0;
      if (attempt.level>completed+1) throw new RequestProblem(403,"Complete the earlier levels first.");
      await tx.insert(adventureClears).values({accountId:attempt.accountId,level:attempt.level,bestScore:adventureScore(attempt.state)})
        .onConflictDoUpdate({target:[adventureClears.accountId,adventureClears.level],set:{bestScore:sql`greatest(${adventureClears.bestScore}, ${adventureScore(attempt.state)})`}});
      await tx.insert(adventureProgress).values({accountId:attempt.accountId,completed:Math.max(completed,attempt.level)})
        .onConflictDoUpdate({target:adventureProgress.accountId,set:{completed:Math.max(completed,attempt.level),updatedAt:new Date()}});
    }
  }
  const [saved]=await tx.update(adventureAttempts).set({state:attempt.state,status:attempt.status,updatedAt:new Date()}).where(eq(adventureAttempts.id,attempt.id)).returning();
  return saved;
}
async function expire(tx: Tx, attempt: Attempt): Promise<Attempt> {
  const r=attempt.state.rounds[attempt.state.cursor];
  if (attempt.status!=="active" || !r || r.status || Date.now()<r.startedAt+duration) return attempt;
  r.status="expired";r.resolvedAt=Date.now();attempt.state.cursor++;
  return writeAttempt(tx,attempt);
}
async function lockedCaptain(tx: Tx, accountId: string) {
  const [account]=await tx.select({id:accounts.id}).from(accounts).where(eq(accounts.id,accountId)).for("update");
  if (!account) throw new RequestProblem(401,"Sign in again to continue your adventure.");
}
async function ownedAttempt(tx: Tx, accountId: string, id: unknown): Promise<Attempt> {
  if (!isUUID(id)) throw new RequestProblem(400,"Choose an active level attempt.");
  const [row]=await tx.select().from(adventureAttempts).where(and(eq(adventureAttempts.id,id),eq(adventureAttempts.accountId,accountId))).limit(1);
  if (!row) throw new RequestProblem(404,"This attempt is not in your Captain's Log.");
  return row;
}

export async function readAdventure(accountId: string | null, attemptId?: string | null) {
  if (!accountId) {
    if (attemptId) throw new RequestProblem(401,"Sign in to resume your level.");
    return {profile:emptyAdventureProfile(),attempt:null};
  }
  return db.transaction(async tx=>{
    await lockedCaptain(tx,accountId);
    let attempt: Attempt | undefined;
    if (attemptId) attempt=await ownedAttempt(tx,accountId,attemptId);
    else [attempt]=await tx.select().from(adventureAttempts).where(and(eq(adventureAttempts.accountId,accountId),eq(adventureAttempts.status,"active"))).orderBy(desc(adventureAttempts.createdAt)).limit(1);
    if (attempt) attempt=await expire(tx,attempt);
    return {profile:await profileFor(tx,accountId),attempt:serialize(attempt)};
  });
}

export async function adventureAction(accountId: string, body: Record<string,unknown>) {
  return db.transaction(async tx=>{
    await lockedCaptain(tx,accountId);
    if (body.action==="start") {
      const level=adventureLevel(body.level);
      if (!level) throw new RequestProblem(400,"Choose a level from 1 to 100.");
      let [active]=await tx.select().from(adventureAttempts).where(and(eq(adventureAttempts.accountId,accountId),eq(adventureAttempts.status,"active"))).limit(1);
      if (active) active=await expire(tx,active);
      const profile=await profileFor(tx,accountId);
      if (level.number>profile.unlockedThrough) throw new RequestProblem(403,`Clear level ${level.number-1} to unlock this island.`);
      if (active?.status==="active") {
        if (active.level!==level.number) throw new RequestProblem(409,`Resume or abandon level ${active.level} before starting another level.`);
        return {profile,attempt:serialize(active)};
      }
      const id=randomUUID();
      const selected=levelQuestions(level,id);
      if (selected.length!==ADVENTURE_QUESTIONS) throw new RequestProblem(500,"This level's question chart is incomplete.");
      const [created]=await tx.insert(adventureAttempts).values({id,accountId,level:level.number,state:{questionIds:selected.map(q=>q.id),cursor:0,rounds:{}}}).returning();
      return {profile,attempt:serialize(created)};
    }
    if (!["begin","guess","timeout","abandon"].includes(String(body.action))) throw new RequestProblem(400,"Unknown adventure action.");
    let attempt=await ownedAttempt(tx,accountId,body.attemptId);
    const previous=attempt.state.cursor;
    attempt=await expire(tx,attempt);
    let feedback: AdventureResponse["feedback"];
    if (body.action==="abandon" && attempt.status==="active") {
      attempt.status="abandoned";attempt=await writeAttempt(tx,attempt);
    } else if (attempt.status==="active" && previous===attempt.state.cursor && body.cursor===attempt.state.cursor) {
      const cursor=attempt.state.cursor;
      const round=attempt.state.rounds[cursor];
      if (body.action==="begin") {
        if (!round) { attempt.state.rounds[cursor]={startedAt:Date.now(),attempts:0};attempt=await writeAttempt(tx,attempt); }
      } else if (body.action==="guess") {
        if (!round) throw new RequestProblem(409,"Press Set Sail before answering.");
        if (typeof body.guess!=="string" || !body.guess.trim() || body.guess.length>256) throw new RequestProblem(400,"Type one answer (up to 256 characters).");
        const fact=adventureFact(attempt.state.questionIds[cursor]);
        const match=answerAdventure(fact,body.guess.trim());
        round.attempts++;
        if (match) {
          round.status="solved";round.answer=match.name;round.resolvedAt=Date.now();attempt.state.cursor++;
          feedback={kind:"correct"};
        } else feedback={kind:"wrong",suggestion:suggestAdventure(fact,body.guess)};
        attempt=await writeAttempt(tx,attempt);
      }
    }
    if (previous!==attempt.state.cursor && attempt.state.rounds[previous]?.status==="expired") feedback={kind:"expired"};
    return {profile:await profileFor(tx,accountId),attempt:serialize(attempt),feedback};
  });
}
