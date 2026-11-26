import assert from "node:assert/strict";
import { ADVENTURE_LEVELS, ADVENTURE_SAGAS, ADVENTURE_TITLES, adventureLevel, adventureTitle } from "../src/data/adventure/levels";
import { ADVENTURE_FACTS, answerAdventure, levelQuestions } from "../src/data/adventure/questions";

assert.equal(ADVENTURE_LEVELS.length,100);assert.equal(ADVENTURE_SAGAS.length,10);
assert.equal(ADVENTURE_LEVELS.filter(l=>l.boss).length,10);
const expected=[
 ['romance-dawn','romance-dawn','orange-town','syrup-village','baratie','baratie','arlong-park','arlong-park','loguetown'],
 ['reverse-mountain','whisky-peak','little-garden','drum-island','alabasta','alabasta','alabasta','alabasta','alabasta'],
 ['jaya','jaya','skypiea','skypiea','skypiea','skypiea','skypiea','skypiea','skypiea'],
 ['long-ring','water-7','water-7','water-7','enies-lobby','enies-lobby','enies-lobby','post-enies','post-enies'],
 Array(9).fill('thriller-bark'),
 ['sabaody','sabaody','amazon-lily','impel-down','impel-down','impel-down','marineford','marineford','post-war'],
 ['return-sabaody',...Array(8).fill('fishman-island')],
 ['punk-hazard','punk-hazard','punk-hazard',...Array(6).fill('dressrosa')],
 ['zou','zou',...Array(6).fill('whole-cake'),'reverie'],
 ['wano','wano','wano','wano','wano','egghead','egghead','egghead','elbaph'],
];
for(let saga=0;saga<10;saga++)assert.deepEqual(ADVENTURE_LEVELS.slice(saga*10,saga*10+9).map(l=>l.arc),expected[saga]);
assert.equal(ADVENTURE_LEVELS[99].arc,'laugh-tale');assert.equal(ADVENTURE_LEVELS[99].difficulty,'Legendary');
assert.equal(ADVENTURE_LEVELS[99].target,700);
assert.equal(adventureLevel(0),null);assert.equal(adventureLevel(101),null);assert.equal(adventureLevel(1.5),null);assert.equal(adventureLevel('1'),null);
assert.equal(adventureTitle(0),'Aspiring Pirate');
for(const t of ADVENTURE_TITLES){assert.equal(adventureTitle(t.level),t.title);assert.notEqual(adventureTitle(t.level-1),t.title);}
assert.equal(new Set(ADVENTURE_FACTS.map(q=>q.id)).size,ADVENTURE_FACTS.length);
assert.ok(ADVENTURE_FACTS.length>=500);
for(const q of ADVENTURE_FACTS){
 assert.ok(q.prompt.endsWith('?'),q.id);
 for(const a of q.answers.split('|'))assert.ok(answerAdventure(q,a),`${q.id}: ${a}`);
 assert.equal(answerAdventure(q,'asdfghjkl totally wrong'),null);
}
for(const level of ADVENTURE_LEVELS){
 assert.equal(level.boss,level.number%10===0);assert.ok(level.target>=400 && level.target<=700 && level.target%100===0);
 const seen=new Set<string>();
 for(let seed=0;seed<10;seed++){
  const q=levelQuestions(level,String(seed));
  assert.equal(q.length,7);assert.equal(new Set(q.map(f=>f.id)).size,7);
  assert.deepEqual(q,levelQuestions(level,String(seed)));
  const scope=level.number===100?ADVENTURE_FACTS.map(f=>f.arc):ADVENTURE_SAGAS[level.saga-1].arcs;
  for(const fact of q){
   if(!level.boss)assert.equal(fact.arc,level.arc);else{assert.equal(fact.depth,5);assert.ok(scope.includes(fact.arc));}
   if(level.number<=20&&!level.boss)assert.ok(fact.depth<=3);
   if(level.number>40)assert.ok(fact.depth>=3);
  }
  seen.add(q.map(f=>f.id).join(','));
 }
 assert.ok(seen.size>1,`Level ${level.number} retries vary`);
}
console.log(`PASS exact 100-level route, 10 bosses, 11 titles, attainable targets, and ${ADVENTURE_FACTS.length} lore questions.`);
