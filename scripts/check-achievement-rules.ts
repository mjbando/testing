import assert from "node:assert/strict";
import { ACHIEVEMENTS, bestStreak, countMistakes, evaluateAchievements, type RunLike } from "../src/lib/achievements";
import { EMBLEM_SPRITES } from "../src/data/achievement-emblems";
import { fromQuestions, mergeProgress, type Progress } from "../src/lib/voyage";

function day(n: number) { const date = new Date('2024-02-01T12:00:00Z'); date.setUTCDate(date.getUTCDate() + n); return date.toISOString().slice(0,10); }
const row = (n: number, overrides: Partial<RunLike> = {}): RunLike => ({ dayKey: day(n), score: 10, solved: 1, mistakes: 1, niche: 0, ...overrides });
const list = (n: number, overrides: Partial<RunLike> = {}) => Array.from({length:n},(_,i)=>row(i,overrides));
function achieved(id: string, rows: RunLike[], active: Progress[] = []) { return evaluateAchievements(rows,new Map(),active).achievements.find(a=>a.id===id)!; }
const check = (id: string, before: RunLike[], after: RunLike[]) => {
  assert.equal(achieved(id,before).unlocked,false,`${id} before threshold`);
  assert.equal(achieved(id,after).unlocked,true,`${id} at threshold`);
};

assert.equal(ACHIEVEMENTS.length,15);
assert.equal(new Set(ACHIEVEMENTS.map(a=>a.id)).size,15);
assert.equal(new Set(ACHIEVEMENTS.map(a=>a.emblem)).size,15);
assert.equal(ACHIEVEMENTS.find(a=>a.id==='one-in-a-luffillion')!.emblem,'gold-hat');
for (const [id, sprite] of Object.entries(EMBLEM_SPRITES)) {
  assert.ok(sprite.rows.length <= 16);
  assert.ok(sprite.rows.every(row=>row.length<=16 && [...row].every(c=>c==='.' || c in sprite.palette)),id);
  assert.ok(sprite.rows.join('').replaceAll('.','').length>12,`${id} is nonempty`);
}
for (const [id,n] of [['first-voyage',1],['rookie-pirate',10],['grand-line-explorer',25],['the-will-of-d',100]] as const) check(id,list(n-1),list(n));
check('perfect-run',[row(0,{solved:6})],[row(0,{solved:7})]);
check('no-mistakes',[row(0,{solved:7,mistakes:1})],[row(0,{solved:7,mistakes:0})]);
assert.equal(achieved('no-mistakes',[row(0,{solved:7,mistakes:null})]).unlocked,false);
assert.equal(achieved('no-mistakes',[row(0,{solved:7,mistakes:undefined})]).unlocked,false);
assert.equal(achieved('no-mistakes',[row(0,{solved:6,mistakes:0})]).unlocked,false);
check('daily-dedication',list(6),list(7));
check('unstoppable',list(29),list(30));
assert.equal(bestStreak([day(1),day(1),day(3),day(4),day(5)]),3);
assert.equal(bestStreak(['2024-02-28','2024-02-29','2024-03-01']),3);
assert.equal(bestStreak(['2024-12-31','2025-01-01']),2);
assert.equal(achieved('rookie-pirate',Array(10).fill(row(1))).unlocked,false,'duplicate submissions do not count twice');
check('rising-supernova',[row(0,{score:629})],[row(0,{score:630})]);
check('laugh-tale',[row(0,{score:499})],[row(0,{score:500})]);
check('encyclopedia',[...list(14,{solved:7}),row(14,{solved:1})],[...list(14,{solved:7}),row(14,{solved:2})]);
check('deep-lore',[...list(7,{niche:7}),row(7,{niche:0})],[...list(7,{niche:7}),row(7,{niche:1})]);
check('one-in-a-luffillion',[row(0,{legs:[{tier:'epic'}]})],[row(0,{legs:[{tier:'luffillion'}]})]);

const standing = {others:10,beaten:9,rank:1,finalized:true};
check('yonko-status',[row(0,{standing:{...standing,beaten:8}})],[row(0,{standing})]);
assert.equal(achieved('yonko-status',[row(0,{standing:{...standing,others:29,beaten:26}})]).unlocked,false,'89.65% is not 90%');
check('pirate-king',[row(0,{standing:{...standing,rank:2}})],[row(0,{standing})]);
for (const id of ['yonko-status','pirate-king']) {
  assert.equal(achieved(id,[row(0,{standing:{...standing,others:0,beaten:0}})]).unlocked,false,'no solo leaderboard reward');
  assert.equal(achieved(id,[row(0,{standing:{...standing,finalized:false}})]).unlocked,false,'live rank is provisional');
}
assert.equal(achieved('yonko-status',[row(0,{standing:{others:10,beaten:0,rank:1,finalized:true}})]).unlocked,false,'ties are not beaten');
assert.equal(achieved('pirate-king',[row(0,{score:700,standing:{others:10,beaten:0,rank:1,finalized:true}})]).unlocked,true,'tied highest score counts as #1');

const ids=Array.from({length:7},(_,i)=>`q-${i}`);
const checkpoint=fromQuestions(day(99),ids,{
  0:{started:100,status:'solved',tier:'luffillion',points:100,answer:'a',attempts:1,wrong:[]},
  1:{started:120,status:'solved',tier:'epic',points:75,answer:'b',attempts:1,wrong:[]},
  2:{started:130,attempts:0,wrong:[]},
});
assert.equal(achieved('one-in-a-luffillion',[],[checkpoint]).unlocked,true,'live pull unlocks');
assert.equal(achieved('encyclopedia',list(14,{solved:7}),[checkpoint]).unlocked,true,'live cumulative correct answers');
assert.equal(achieved('deep-lore',list(8,{niche:6}),[checkpoint]).unlocked,true,'live niche answers');
assert.equal(achieved('first-voyage',[],[checkpoint]).unlocked,false,'in-progress is not complete');
const checkpoints = Array.from({length:7},(_,i)=>({...checkpoint,day:day(i)}));
assert.equal(achieved('daily-dedication',[],checkpoints).unlocked,true,'starting a daily question counts as participation');
assert.equal(achieved('daily-dedication',[],checkpoints.map(p=>({...p,q:{}}))).unlocked,false,'page visits do not count as play');
assert.equal(achieved('encyclopedia',list(14,{solved:7}),[{...checkpoint,day:day(0)}]).unlocked,false,'checkpoint from completed day does not double count');
const goldProgress=fromQuestions(day(99),ids,Object.fromEntries(Array.from({length:5},(_,i)=>[i,{status:'solved',answer:'a',tier:'luffillion',points:100,attempts:1,wrong:[]}])));
assert.equal(achieved('laugh-tale',[],[goldProgress]).unlocked,true,'500 points mid-voyage');

const perfect=fromQuestions(day(99),ids,Object.fromEntries(Array.from({length:7},(_,i)=>[i,{status:'solved',answer:'a',tier:'common',points:10,attempts:1,wrong:[]}])));
assert.equal(countMistakes(perfect),0);
perfect.q[0].attempts=4; perfect.q[0].wrong=['same wrong answer'];
assert.equal(countMistakes(perfect),3,'repeated wrong guesses still count');
assert.equal(countMistakes(checkpoint),null,'partial history is not known to be flawless');
const pending=fromQuestions(day(99),ids,{0:{started:100,attempts:3,wrong:['repeat wrong']}});
const settled=fromQuestions(day(99),ids,{0:{started:200,status:'solved',answer:'a',tier:'common',points:10,attempts:1,wrong:[]}});
const merged=mergeProgress(pending,settled);
assert.equal(merged.q[0].started,100,'sync keeps earliest start time');
assert.equal(merged.q[0].attempts,4,'sync preserves rejected attempts before success');
assert.deepEqual(merged.q[0].wrong,['repeat wrong']);
const previous = new Map(ACHIEVEMENTS.map(a=>[a.id,new Date('2024-01-01T00:00:00Z')]));
const retained=evaluateAchievements([],previous);
assert.ok(retained.achievements.every(a=>a.unlocked && a.unlockedAt && a.progress===a.target));
assert.equal(retained.newlyUnlocked.length,0);
console.log('PASS all 15 achievement thresholds, streaks, ties, live progress, unknown history, persistence, and pixel emblems.');
