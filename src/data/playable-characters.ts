// One unique, permanent cosmetic recruit per achievement. Luffy is always free.
export const PLAYABLE_CHARACTERS = [
  { id: "luffy", name: "Monkey D. Luffy", shortName: "Luffy", epithet: "Straw Hat Captain", achievementId: null, grade: "Starter", color: "#f49c81", detail: "Your original captain. Always ready to set sail." },
  { id: "chopper", name: "Tony Tony Chopper", shortName: "Chopper", epithet: "Cotton Candy Lover", achievementId: "first-voyage", grade: "Crew", color: "#f59fca", detail: "A little reindeer with a big dream. Blue hat, antlers, and tiny hooves." },
  { id: "zoro", name: "Roronoa Zoro", shortName: "Zoro", epithet: "Pirate Hunter", achievementId: "perfect-run", grade: "Crew", color: "#8bda83", detail: "Green hair, a haramaki sash, and three swords. Don't let him navigate." },
  { id: "sanji", name: "Vinsmoke Sanji", shortName: "Sanji", epithet: "Black Leg", achievementId: "no-mistakes", grade: "Elite", color: "#e9c876", detail: "A sharp black suit and a golden fringe, for a perfectly executed voyage." },
  { id: "nami", name: "Nami", shortName: "Nami", epithet: "Cat Burglar", achievementId: "daily-dedication", grade: "Crew", color: "#fbac64", detail: "Orange hair and her blue Clima-Tact. Your course is in good hands." },
  { id: "usopp", name: "Usopp", shortName: "Usopp", epithet: "Brave Warrior of the Sea", achievementId: "rookie-pirate", grade: "Crew", color: "#cfb78b", detail: "Goggles, a long nose, and a trusty slingshot. Ten voyages worth of stories." },
  { id: "robin", name: "Nico Robin", shortName: "Robin", epithet: "Devil Child", achievementId: "encyclopedia", grade: "Elite", color: "#b69eea", detail: "An archaeologist in a blue jacket, with a book full of secrets." },
  { id: "jinbe", name: "Jinbe", shortName: "Jinbe", epithet: "Knight of the Sea", achievementId: "grand-line-explorer", grade: "Elite", color: "#77c8e9", detail: "Blue skin, tusks, and an orange kimono. A veteran of the Grand Line." },
  { id: "ace", name: "Portgas D. Ace", shortName: "Ace", epithet: "Fire Fist", achievementId: "one-in-a-luffillion", grade: "Elite", color: "#ff9562", detail: "An orange hat, red beads, and a little fire in his hand. A reward for a truly rare pull." },
  { id: "law", name: "Trafalgar Law", shortName: "Law", epithet: "Surgeon of Death", achievementId: "rising-supernova", grade: "Legendary", color: "#e0c254", detail: "Spotted hat, yellow coat, and Kikoku. An exceptional recruit for an exceptional score." },
  { id: "rayleigh", name: "Silvers Rayleigh", shortName: "Rayleigh", epithet: "Dark King", achievementId: "deep-lore", grade: "Legendary", color: "#9ce3ce", detail: "Silver hair, round glasses, and a green cloak. The reward for a scholar of pirate lore." },
  { id: "whitebeard", name: "Edward Newgate", shortName: "Whitebeard", epithet: "The Strongest Man", achievementId: "yonko-status", grade: "Legendary", color: "#e9dcba", detail: "An enormous white coat, a crescent moustache, and Murakumogiri." },
  { id: "shanks", name: "Shanks", shortName: "Shanks", epithet: "Red-Haired Emperor", achievementId: "laugh-tale", grade: "Legendary", color: "#ef8491", detail: "Red hair, a black cape, and Gryphon. A fitting welcome to the final island." },
  { id: "kaido", name: "Kaido", shortName: "Kaido", epithet: "The Strongest Creature", achievementId: "unstoppable", grade: "Mythic", color: "#b694f6", detail: "Great horns, a purple sash, and a spiked kanabo. Thirty days of unstoppable resolve." },
  { id: "roger", name: "Gol D. Roger", shortName: "Roger", epithet: "King of the Pirates", achievementId: "pirate-king", grade: "Mythic", color: "#f6c45a", detail: "A red captain's coat, gold epaulettes, and the Pirate King's unmistakable moustache." },
  { id: "gear-5", name: "Luffy · Gear 5", shortName: "Gear 5 Luffy", epithet: "Warrior of Liberation", achievementId: "the-will-of-d", grade: "Mythic", color: "#e5c3ff", detail: "Cloud-white hair, a flowing smoke scarf, and a fearless grin. The ultimate 100-voyage reward." },
] as const;

export type CharacterId = (typeof PLAYABLE_CHARACTERS)[number]["id"];
export type PlayableCharacter = (typeof PLAYABLE_CHARACTERS)[number];
export const DEFAULT_CHARACTER: CharacterId = "luffy";
export function isCharacterId(id: unknown): id is CharacterId {
  return typeof id === "string" && PLAYABLE_CHARACTERS.some(character => character.id === id);
}
export function characterById(id: string | null | undefined): PlayableCharacter {
  return PLAYABLE_CHARACTERS.find(character => character.id === id) ?? PLAYABLE_CHARACTERS[0];
}
export function characterReward(achievementId: string): PlayableCharacter | undefined {
  return PLAYABLE_CHARACTERS.find(character => character.achievementId === achievementId);
}
