import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { ACHIEVEMENTS } from "../src/lib/achievements";
import { PLAYABLE_CHARACTERS, characterById, characterReward, DEFAULT_CHARACTER, isCharacterId } from "../src/data/playable-characters";
import { runnerSprite } from "../src/components/pixel/runners";
import { drawGoldHat, drawSprite } from "../src/components/pixel/art";

assert.equal(PLAYABLE_CHARACTERS.length,16);
assert.equal(PLAYABLE_CHARACTERS.filter(c=>!c.achievementId).length,1);
assert.equal(characterById(undefined).id,DEFAULT_CHARACTER);
assert.equal(isCharacterId('fake-roger'),false);
assert.equal(new Set(ACHIEVEMENTS.map(a=>a.rewardCharacter)).size,15);
for(const badge of ACHIEVEMENTS){
  const recruit=characterById(badge.rewardCharacter);
  assert.notEqual(recruit.id,DEFAULT_CHARACTER);
  assert.equal(recruit.achievementId,badge.id);
  assert.equal(characterReward(badge.id)?.id,recruit.id);
}
assert.equal(characterReward('first-voyage')?.id,'chopper');
assert.equal(characterReward('pirate-king')?.id,'roger');
assert.equal(characterReward('the-will-of-d')?.id,'gear-5');
assert.equal(characterReward('unstoppable')?.id,'kaido');

const distinct=new Set<string>();
for(const character of PLAYABLE_CHARACTERS){
  for(const [running,time] of [[false,0],[true,0],[true,110]] as const){
    const sprite=runnerSprite(character.id,running,time);
    assert.equal(sprite.rows.length,sprite.height);
    assert.ok(sprite.rows.every(row=>row.length===sprite.width && [...row].every(p=>p==='.' || p in sprite.palette)),character.id);
    assert.ok(sprite.width<=32 && sprite.height<=31);
    assert.ok(sprite.goldHat.x>=0 && sprite.goldHat.x+16<=sprite.width);
    const calls:{color:string;x:number;y:number;w:number;h:number}[]=[];
    const canvas={fillStyle:'',fillRect(x:number,y:number,w:number,h:number){calls.push({color:String(this.fillStyle),x,y,w,h});}};
    drawSprite(canvas as unknown as CanvasRenderingContext2D,sprite.rows,20,20,sprite.palette);
    assert.ok(calls.length>=70,character.id);
    drawGoldHat(canvas as unknown as CanvasRenderingContext2D,20+sprite.goldHat.x,20+sprite.goldHat.y,240);
    assert.ok(calls.some(p=>p.color==='#ffd700'),`${character.id} supports the gold hat`);
    if(!running) distinct.add(createHash('sha256').update(JSON.stringify(calls)).digest('hex'));
  }
  assert.notDeepEqual(runnerSprite(character.id,true,0).rows,runnerSprite(character.id,true,110).rows,`${character.id} has two run poses`);
}
assert.equal(distinct.size,16,'every character has its own art');
console.log('PASS 15 unique achievement recruits + default Luffy; 16 distinct sprites, animated feet, and gold hat compatibility.');
