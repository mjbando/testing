import type { Question } from "../../questions";
import { C, ranked } from "./names";

// Each list is ordered least niche -> most niche. The last answer is the One in a Luffillion.
export const CURATED_CHARACTERS: Question[] = [
  ranked("q-impel-down", "Name a character who has appeared in Impel Down.", "Prisoners, guards, wardens, or anyone who set foot inside.",
    "Luffy, Ace, Buggy, Crocodile, BonClay, Ivankov, Magellan, Jinbe, Hannyabal, Blackbeard, Mr3, Inazuma, Sadie, Shiryu, Domino, Saldeath, Daz, Hancock, Shiki, Devon, Wolf, Shot, Burgess, Augur, Laffitte, DocQ, Hody, Weevil, Momonga, Sengoku, Mr11, Cabaji, Mohji, Minotaurus, Minorhinoceros, Minokoala, Minozebra, Minochihuahua, Bluejam, Douglas Bullet", C),

  ranked("q-straw-hats", "Name a character who has been part of the Straw Hat Pirates.", "Official crew, plus allies who sailed with them.",
    "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Vivi, Karoo|Carue, Yamato, Momonosuke, Kinemon, Carrot, Pedro, Going Merry|Merry", C),

  ranked("q-worst-generation", "Name a member of the Worst Generation.", "The Supernovas at Sabaody, plus Blackbeard.",
    "Luffy, Law, Kid, Zoro, Killer, Bonney, Blackbeard, Hawkins, Drake, Bege, Apoo, Urouge", C),

  ranked("q-has-bounty", "Name a character who has a bounty.", "Anyone who has had a bounty placed on them.",
    "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Shanks, Blackbeard, Kaido, BigMom, Whitebeard, Roger, Ace, Law, Kid, Mihawk, Crocodile, Buggy, Doflamingo, Hancock, Marco, Katakuri, Arlong, Kuro, Krieg, Alvida, Bonney, Killer, Hawkins, Drake, Bege, Apoo, Urouge, Weevil, Cavendish, Bartolomeo, Bellamy, Foxy, Kuma, Moria, King, Queen, Jack, Smoothie, Cracker, Perospero, Oven, Daifuku, Shiryu, Burgess, Augur, Laffitte, DocQ, Devon, Wolf, Shot, Pizarro, Dragon, Sabo, Ivankov, Yamato, Ulti, PageOne, Hody, Ideo, Leo, Sai, Chinjao, Orlumbus, Hajrudin, Abdullah, Jeet, Blue Gilly, Elizabello, Gin, Chew, Kuroobi, Hatchan, Jango, Masira, Shoujou, Porche, Squard, Whitey Bay, Bluejam, Bakkin|Buckingham Stussy", C),

  ranked("q-warlords", "Name a member of the Seven Warlords of the Sea.", "Anyone who held a Warlord seat before the system was abolished.",
    "Mihawk, Hancock, Doflamingo, Crocodile, Kuma, Moria, Law, Jinbe, Blackbeard, Buggy, Weevil, Hanafuda", C),

  ranked("q-marines", "Name a character who has been a Marine.", "Current or former Marines of any rank.",
    "Garp, Akainu, Aokiji, Kizaru, Koby, Smoker, Fujitora, Ryokugyu, Sengoku, Tashigi, Helmeppo, Tsuru, Kong, Zephyr, Momonga, Sentomaru, Hina, Corazon, Vergo, Drake, Saul, Bogard, Grus, Kujaku, Hibari, Gion, Tokikake, Doll, Onigumo, Strawberry, Doberman, Yamakaji, Bastille, Dalmatian, Comil, Lacroix, TBone, Fullbody, Morgan, Nezumi, Jango, Brannew, Attach, Very Good, Mozambia, Cancer, Rokkaku, Ripper, Shu, Maynard, John Giant, Stainless, Kadar, Jonathan|Vice Admiral Jonathan", C),

  ranked("q-blackbeard-pirates", "Name a member of the Blackbeard Pirates.", "Blackbeard and his Ten Titanic Captains.",
    "Blackbeard, Burgess, Laffitte, Augur, DocQ, Shiryu, Aokiji, Devon, Wolf, Shot, Pizarro, Stronger", C),

  ranked("q-red-hair-pirates", "Name a member of the Red Hair Pirates.", "Shanks and his crew, past or present.",
    "Shanks, Beckman, Roux, Yasopp, Uta, Rockstar, Limejuice, Bonk Punch, Monster, Building Snake, Hongo, Howling Gab", C),

  ranked("q-whitebeard-pirates", "Name a member of the Whitebeard Pirates.", "Whitebeard, his division commanders, and crew.",
    "Whitebeard, Marco, Ace, Jozu, Vista, Thatch, Izou, Blackbeard, Oden, Blamenco, Rakuyo, Namur, Blenheim, Curiel, Kingdew, Haruta, Atmos, Speed Jiru, Fossa, Kinemon, Kanjuro, Weevil, Bakkin|Buckingham Stussy", C),

  ranked("q-fought-luffy", "Name a character who has fought Luffy.", "Anyone who has traded blows with Luffy on screen.",
    "Kaido, Katakuri, Doflamingo, Crocodile, Enel, Lucci, Arlong, Moria, BigMom, Buggy, Kuro, Krieg, Alvida, Morgan, Wapol, Mr3, Smoker, Akainu, Kizaru, Aokiji, Fujitora, Hody, Blackbeard, Magellan, Bellamy, Caesar, Cracker, Foxy, Oars, Absalom, Garp, Koby, Zoro, Usopp, Saturn, Lilith, Ryokugyu, Ulti, WhosWho, Hawkins, Kid, Shiki, BonClay, Burgess, Sabo, Perospero, Wadatsumi, Hannyabal, Decken, Satori, Gedatsu, Ohm, Shura, Wyper, GanFall, Mohji, Cabaji, Jango, Mr5, Sugar, Chew, Kuroobi, Pandaman", C),

  ranked("q-fought-zoro", "Name a character who has fought Zoro.", "Anyone Zoro has crossed swords with on screen.",
    "Mihawk, King, Kaku, Pica, Daz, Hody, Ryuma, Kuma, Oars, Kuro, Cabaji, Jango, Mr5, Hatchan, Ohm, Shura, Mr3, Smoker, Tashigi, Kizaru, Lucci, Fujitora, Kinemon, Sanji, Luffy, Kaido, Absalom, Kumadori, Miss Monday, Mr9, Valentine, Mr. 7, Chaka, Kuina, Chew, Gin, Morgan, Kalifa, Yamato, WhosWho, Jack, Hyogoro, Ushimaru|Shimotsuki Ushimaru, Monet, Onimaru|Gyukimaru, Daifugo, Babanuki", C),

  ranked("q-female", "Name a female character in One Piece.", "Any female character.",
    "Nami, Robin, Hancock, Vivi, Yamato, BigMom, Perona, Tashigi, Uta, Shirahoshi, Bonney, Carrot, Rebecca, Koala, Hina, Pudding, Makino, Kaya, Kuina, Bellmere, Nojiko, Kureha, Alvida, Kalifa, Monet, Viola, Sugar, Baby5, Hiyori, Kiku, Tama, Otohime, Camie, Conis, Smoothie, Brulee, Lola, Chiffon, Tsuru, Shakuyaku|Shakky, Toki, Shinobu, Ulti, BlackMaria, Valentine, Doublefinger, Goldenweek, MerryXmas, Porche, BeloBetty, Rouge, Olvia, Kujaku, Hibari, Doll, Bluegrass, Gion, Lilith, Mansherry, Kokoro, Chimney, Aisa, Laki, Rindo, Ran, Marguerite, Sweet Pea, Aphelandra, Kikyo, Belladonna, Gloriosa|Elder Nyon, Boa Sandersonia|Sandersonia, Boa Marigold|Marigold, Shalria, Vinsmoke Reiju|Reiju, Vinsmoke Sora|Sora, Charlotte Amande|Amande, Charlotte Galette|Galette, Charlotte Praline|Praline, Charlotte Flampe|Flampe, Shyarly|Madam Shyarly, Ishilly, Kairen, Seira, Meroie, Hiramera, Victoria Cindry|Cindry, Miss Catherina", C),
];
