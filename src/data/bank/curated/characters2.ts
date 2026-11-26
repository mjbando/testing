import type { Question } from "../../questions";
import { C, ranked } from "./names";

// Each list is ordered least niche -> most niche. The last answer is the One in a Luffillion.
export const CURATED_CHARACTERS_2: Question[] = [
  ranked("q-uses-sword", "Name a character who uses a sword.", "Swordsmen and swordswomen of any kind.",
    "Zoro, Mihawk, Brook, Kinemon, Shanks, Tashigi, Oden, Ryuma, Kuina, Kaku, Fujitora, Cavendish, Vista, Kyros, Rebecca, Law, Kawamatsu, Denjiro, Raizo, Izou, Shiryu, Killer, Cracker, Smoothie, Diamante, Pica, Hody, Hatchan, Cabaji, Hyouzou, Gladius, Momonga, Yasuie, Kanjuro, Kiku, Hawkins, Tokikake, Rayleigh, Saturn, Nusjuro, Garling, Shamrock, Elizabello, Onigumo, TBone, Bastille, Gion, Hyogoro, Charlotte Amande|Amande, Shimotsuki Kozaburo|Kozaburo, Koushirou|Koshiro, Mr. 7", C),

  ranked("q-wears-hat", "Name a character who wears a hat.", "Any hat, helmet, or cap worn regularly.",
    "Luffy, Shanks, Ace, Law, Chopper, Sabo, Roger, Smoker, Buggy, Mihawk, Brook, Kizaru, Garp, Bege, Apoo, Weevil, BigMom, Moria, Koby, Helmeppo, Kuma, Cavendish, Hawkins, Drake, Absalom, Perona, Bartolomeo, Lucci, Morgan, Krieg, Gin, Pearl, Wapol, Igaram, Mr3, Foxy, Senor, Machvise, Kureha, Chimney, Hiriluk, Dalton, Pandaman", C),

  ranked("q-died", "Name a character who has died in the series.", "Characters who died on screen or in the story's past.",
    "Ace, Whitebeard, Roger, Oden, Corazon, Bellmere, Hiriluk, Kuina, Thatch, Otohime, FisherTiger, Toki, Olvia, Clover, Noland, Kalgara, Yasuie, Rouge, Ryuma, Xebec, Pedro, Cobra, Kanjuro, Monet, Orochi, Vinsmoke Sora|Sora, Ginny, Mother Carmel|Carmel, Donquixote Homing|Homing, Shimotsuki Ushimaru|Ushimaru, Kurozumi Higurashi|Higurashi, Scarlet, Yorki, Lami", C),

  ranked("q-royalty", "Name a character who has been a king or queen.", "Kings, queens, and empresses who have ruled a nation.",
    "Cobra, Neptune, Wapol, Doflamingo, Riku Doldo III|Riku|King Riku, Hancock, BigMom, Vinsmoke Judge|Judge, Kuma, Elizabello, Dalton, Otohime, Sterry|King Sterry, Harald|King Harald, Nefertari Titi|Titi", C),

  ranked("q-imprisoned", "Name a character who has been imprisoned.", "Locked up in a prison, cell, or labor camp at some point.",
    "Luffy, Ace, Jinbe, Crocodile, BonClay, Buggy, Mr3, Kid, Doflamingo, Shiki, Kinemon, Hyogoro, Momonosuke, Robin, Hody, Arlong, Daz, Caesar, Hancock, FisherTiger, Koala, Kuma, Shiryu, Devon, Wolf, Shot, Pizarro, Douglas Bullet, Kalgara, Noland, Decken, Mr11", C),

  ranked("q-ate-fruit", "Name a character who has eaten a Devil Fruit.", "Any confirmed Devil Fruit user, past or present.",
    "Luffy, Chopper, Robin, Brook, Ace, Law, Blackbeard, Whitebeard, Doflamingo, Crocodile, Enel, Kaido, BigMom, Katakuri, Hancock, Smoker, Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, Buggy, Moria, Kuma, Marco, Sabo, Yamato, Kid, Lucci, Kaku, Perona, Absalom, Caesar, Momonosuke, Sugar, Monet, Bonney, Bartolomeo, Pudding, Cracker, Smoothie, Perospero, Brulee, Oven, Daifuku, Kanjuro, Orochi, Queen, King, Jack, Ulti, PageOne, Magellan, Ivankov, BonClay, Mr3, Daz, Mr5, Valentine, Drake, Hawkins, Apoo, Bege, Senor, Diamante, Pica, Trebol, Baby5, Machvise, Buffalo, Gladius, Dellinger, Corazon, Wapol, Foxy, Kalifa, Jabra, Blueno, Spandam, Hody, Shiryu, Burgess, Augur, Devon, Pizarro, Sengoku, Tsuru, Momonga, Kujaku, Grus, Bluegrass, Shiki, Toki, Kiku, Saturn, Garling, Laffitte, Mr4, MerryXmas, Mansherry, Pekoms, Carmel|Mother Carmel, Stronger", C),

  ranked("q-haki", "Name a character who has used Haki.", "Any confirmed user of Observation, Armament, or Conqueror's Haki.",
    "Luffy, Zoro, Sanji, Shanks, Rayleigh, Kaido, BigMom, Whitebeard, Roger, Garp, Katakuri, Yamato, Oden, Ace, Sabo, Law, Kid, Hancock, Mihawk, Doflamingo, Usopp, Koby, Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, Smoker, Marco, King, Queen, Jack, Lucci, Vergo, Blackbeard, Killer, Jinbe, Kinemon, Kiku, Raizo, Kawamatsu, Denjiro, Ashura, Izou, Hyogoro, Cracker, Perospero, Pudding, Brulee, Momonga, Sentomaru, Helmeppo, Tashigi, Sengoku, Tsuru, Shiryu, Burgess, Cavendish, Bartolomeo, Bellamy, Rebecca, Kyros, Diamante, Pica, Trebol, Hawkins, Drake, Apoo, Bege, Urouge, Bonney, Saturn, Garling, Shamrock, Uta, Beckman, Roux, Yasopp, Rockstar, Viola, Sanji, Wyper, Enel, Satori, Aisa, Conis, Gan Fall|GanFall, Ohm, Shura, Gedatsu, Kalgara", C),

  ranked("q-east-blue", "Name a character who has appeared in the East Blue Saga.", "From Romance Dawn through Loguetown.",
    "Luffy, Zoro, Nami, Usopp, Sanji, Shanks, Buggy, Arlong, Koby, Helmeppo, Smoker, Tashigi, Mihawk, Kuro, Krieg, Alvida, Morgan, Zeff, Makino, Kaya, Bellmere, Nojiko, Genzo, Gin, Hatchan, Chew, Kuroobi, Dragon, Kuina, Jango, Cabaji, Mohji, Beckman, Roux, Yasopp, Gaimon, Patty, Carne, Pearl, Fullbody, Johnny, Yosaku, Merry, Ninjin, Piiman, Tamanegi, Nezumi, Woop Slap, Higuma, Chouchou, Boodle, Richie, Sham, Buchi, Daddy Masterson|Daddy the Father, Ririka, Rika", C),
];
