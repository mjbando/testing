import type { Question } from "../../questions";
import { C, ranked } from "./names";

// Each list is ordered least niche -> most niche. The last answer is the One in a Luffillion.
export const CURATED_POWERS: Question[] = [
  // ---------------- Devil Fruits & Powers ----------------
  ranked("q-logia-user", "Name a character with a Logia Devil Fruit.", "Users of elemental Logia fruits.",
    "Ace, Akainu, Aokiji, Kizaru, Enel, Crocodile, Smoker, Blackbeard, Sabo, Caesar, Monet, Ryokugyu, Caribou, Gasparde", C),

  ranked("q-zoan-user", "Name a character with a Zoan Devil Fruit.", "Regular, Ancient, Mythical, and Artificial Zoan users.",
    "Chopper, Marco, Kaido, Yamato, Lucci, Kaku, Luffy, King, Queen, Jack, Ulti, PageOne, Drake, Sengoku, Momonosuke, Orochi, WhosWho, BlackMaria, Sasaki, Dalton, Jabra, Pell, Chaka, Devon, Morgans|Big News Morgans, Bunbuku, Pierre, Stronger, Funkfreed, Lassoo", C),

  ranked("q-paramecia-user", "Name a character with a Paramecia Devil Fruit.", "Users of Paramecia fruits.",
    "Law, Doflamingo, Whitebeard, BigMom, Katakuri, Hancock, Buggy, Moria, Kuma, Kid, Brook, Robin, Bonney, Bartolomeo, Sugar, Perona, Absalom, Mr3, BonClay, Ivankov, Magellan, Daz, Mr5, Valentine, Cracker, Smoothie, Perospero, Brulee, Pudding, Oven, Daifuku, Kanjuro, Trebol, Diamante, Pica, Baby5, Machvise, Senor, Buffalo, Gladius, Corazon, Wapol, Foxy, Kalifa, Blueno, Hawkins, Apoo, Bege, Fujitora, Shiryu, Burgess, Augur, Pizarro, Tsuru, Kujaku, Bluegrass, Shiki, Toki, Mansherry, Charlotte Newshi|Newshi", C),

  ranked("q-transform-fruit", "Name a Devil Fruit that allows its user to transform.", "Fruits that change the user's body into another form.",
    "Hito Hito no Mi|Human-Human Fruit, Tori Tori no Mi, Model: Phoenix|Phoenix, Uo Uo no Mi, Model: Seiryu|Seiryu, Gomu Gomu no Mi|Gum-Gum Fruit|Hito Hito no Mi, Model: Nika, Neko Neko no Mi, Model: Leopard|Leopard, Ushi Ushi no Mi, Model: Giraffe|Giraffe, Inu Inu no Mi, Model: Okuchi no Makami|Okuchi no Makami, Mane Mane no Mi|Clone-Clone Fruit, Hito Hito no Mi, Model: Daibutsu|Daibutsu, Ryu Ryu no Mi, Model: Pteranodon|Pteranodon, Ryu Ryu no Mi, Model: Brachiosaurus|Brachiosaurus, Zou Zou no Mi, Model: Mammoth|Mammoth, Hebi Hebi no Mi, Model: Yamata no Orochi|Yamata no Orochi, Inu Inu no Mi, Model: Wolf|Wolf, Ushi Ushi no Mi, Model: Bison|Bison, Tori Tori no Mi, Model: Falcon|Falcon, Inu Inu no Mi, Model: Jackal|Jackal, Hebi Hebi no Mi, Model: Anaconda|Anaconda, Hebi Hebi no Mi, Model: King Cobra|King Cobra, Inu Inu no Mi, Model: Kyubi no Kitsune|Kyubi no Kitsune, Mogu Mogu no Mi|Mole-Mole Fruit, Uma Uma no Mi|Horse-Horse Fruit, Inu Inu no Mi, Model: Dachshund|Dachshund"),

  ranked("q-fire", "Name a character who can control fire.", "Fire, magma, or flames of any kind.",
    "Ace, Sabo, Akainu, Marco, Kaido, King, Sanji, Kinemon, BigMom, Oven, Usopp, Prometheus"),

  ranked("q-ice", "Name a character who can control ice or snow.", "Ice, snow, or freezing attacks.",
    "Aokiji, Monet, Brook, Yamato, Nami"),

  ranked("q-lightning", "Name a character who can control lightning.", "Lightning or electricity.",
    "Enel, Nami, BigMom, Kaido, Yamato, Luffy, Vinsmoke Niji|Niji, Zeus", C),

  ranked("q-body", "Name a character who can manipulate their body.", "Stretching, splitting, sprouting, hardening, or reshaping their own body.",
    "Luffy, Buggy, Chopper, Robin, Ivankov, BonClay, Daz, Jozu, Franky, Katakuri, Trebol, Baby5, Machvise", C),

  ranked("q-fly", "Name a character who can fly.", "Flight by power, technique, or wings.",
    "Marco, Kaido, King, Luffy, Sanji, Pell, Enel, Shiki, Momonosuke, Perona, Lucci, Kaku, Robin, Karasu, Laffitte", C),

  ranked("q-awakened", "Name a character who has awakened their Devil Fruit.", "Confirmed Devil Fruit awakenings.",
    "Luffy, Law, Kid, Katakuri, Doflamingo, Lucci, Kaku, Killingham", C),

  ranked("q-conqueror", "Name a character who can use Conqueror's Haki.", "Confirmed Supreme King Haki users.",
    "Luffy, Shanks, Kaido, BigMom, Whitebeard, Roger, Zoro, Hancock, Katakuri, Doflamingo, Yamato, Kid, Ace, Oden, Rayleigh, Chinjao", C),

  ranked("q-observation", "Name a character who can use Observation Haki.", "Confirmed Observation Haki (Mantra) users.",
    "Luffy, Zoro, Sanji, Katakuri, Usopp, Koby, Shanks, Rayleigh, Kaido, BigMom, Yamato, Law, Kid, Hancock, Enel, Shiryu, Garp, Fujitora, Kizaru, Akainu, Aokiji, Marco, King, Jinbe, Momonga, Oden, Wyper, Satori, Ohm, Shura, Gedatsu, Aisa", C),

  ranked("q-armament", "Name a character who can use Armament Haki.", "Confirmed Armament Haki users.",
    "Luffy, Zoro, Sanji, Shanks, Garp, Rayleigh, Kaido, BigMom, Whitebeard, Katakuri, Yamato, Smoker, Koby, Akainu, Aokiji, Kizaru, Fujitora, Doflamingo, Vergo, Law, Kid, Killer, Jinbe, King, Queen, Jack, Lucci, Cavendish, Diamante, Pica, Kinemon, Kiku, Raizo, Kawamatsu, Denjiro, Ashura, Izou, Helmeppo, Tashigi, Momonga, Sentomaru, Beckman, Yasopp, Roux, Hyogoro", C),

  ranked("q-animal-fruit", "Name a character who has a Devil Fruit with an animal-based ability.", "Zoans, SMILEs, and other animal-type powers.",
    "Chopper, Marco, Kaido, Lucci, Kaku, Yamato, Jack, Queen, King, Ulti, PageOne, Drake, WhosWho, BlackMaria, Sasaki, Orochi, Sengoku, Momonosuke, Dalton, Jabra, Pell, Chaka, Devon, Holdem, Speed, Babanuki, Daifugo, Sheepshead, Ginrummy, Bao Huang, Pierre, Stronger, Funkfreed, Lassoo, Mouseman", C),

  // ---------------- Weapons & Fighting ----------------
  ranked("q-gun", "Name a character who fights with a gun.", "Pistols, rifles, and cannons.",
    "Yasopp, Beckman, Augur, Bege, Krieg, Roux, Franky, Kid, Vito, Gotti, Mr. 7", C),

  ranked("q-staff", "Name a character who uses a staff, pole, or club.", "Staffs, pipes, clubs, jitte, or rods.",
    "Nami, Sabo, Smoker, Enel, Kaido, Yamato, Alvida, Kumadori", C),

  ranked("q-fists", "Name a character who uses their fists to fight.", "Brawlers and punchers.",
    "Luffy, Garp, Jinbe, Koby, Franky, Kuma, Sengoku, Hack, Koala, Chinjao, Bellamy, Hody, Ulti, Sai, Ideo", C),

  ranked("q-non-sword-weapon", "Name a character who uses a weapon other than a sword.", "Slingshots, clubs, guns, claws, chakrams, and more.",
    "Usopp, Nami, Franky, Kaido, Yamato, Smoker, Enel, Buggy, Killer, Jango, Kuro, Krieg, Alvida, Morgan, Gin, Helmeppo, Bege, Yasopp, Augur, Kumadori, Mr. 7", C),

  ranked("q-martial-arts", "Name a character who uses a fighting style based on martial arts.", "Black Leg, Fish-Man Karate, Rokushiki, Okama Kenpo, and others.",
    "Sanji, Jinbe, Lucci, BonClay, Ivankov, Koala, Hack, Kaku, Zeff, Chinjao, Sai, Kalifa, Jabra, Blueno, Kumadori, Fukurou, Hody, Ideo, Wanze", C),

  ranked("q-legendary-weapon", "Name a character who has a legendary weapon.", "Wielders of graded Meito blades or iconic named weapons.",
    "Zoro, Mihawk, Shanks, Oden, Whitebeard, Ryuma, Law, Fujitora, Tashigi, Brook, BigMom, Shiryu, Cavendish, Koushirou|Koshiro, Shimotsuki Kozaburo|Kozaburo", C),

  ranked("q-spear", "Name a character who uses a spear, trident, or lance.", "Polearm fighters.",
    "Katakuri, Neptune, GanFall, Krieg, Shura", C),

  ranked("q-named-attack", "Name a character who has used a named attack.", "Anyone who has shouted the name of an attack.",
    "Luffy, Zoro, Sanji, Usopp, Nami, Chopper, Robin, Franky, Brook, Jinbe, Ace, Sabo, Law, Kid, Shanks, Kaido, BigMom, Whitebeard, Mihawk, Doflamingo, Crocodile, Enel, Lucci, Arlong, Buggy, Akainu, Aokiji, Kizaru, Fujitora, Smoker, Koby, Garp, Katakuri, Yamato, King, Queen, Hody, Moria, Kuro, Krieg, BonClay, Mr3, Daz, Ivankov, Mr. 9", C),

  ranked("q-fought-yonko", "Name a character who has fought one of the Four Emperors.", "Fought Kaido, Big Mom, Shanks, Whitebeard, Blackbeard, or another Emperor.",
    "Luffy, Roger, Whitebeard, Garp, Ace, Zoro, Law, Kid, Oden, Yamato, Marco, Kinemon, Shanks, Akainu, Aokiji, Kizaru, Blackbeard, Killer, Jinbe, Kiku, Raizo, Kawamatsu, Denjiro, Ashura, Izou, Squard", C),

  ranked("q-fought-admiral", "Name a character who has fought an Admiral.", "Fought Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, or a past Admiral.",
    "Luffy, Whitebeard, Marco, Ace, Zoro, Jinbe, Crocodile, Rayleigh, Sabo, Garp, Vista, Jozu", C),

  ranked("q-fought-commander", "Name a character who has fought a Yonko Commander.", "Fought an Emperor's top officers (All-Stars, Sweet Commanders, etc.).",
    "Luffy, Zoro, Sanji, Nami, Usopp, Robin, Brook, Jinbe, Franky, Marco, Inuarashi, Nekomamushi, Kinemon, Kawamatsu, Izou, Kiku, Yamato, Pedro, Raizo", C),

  ranked("q-fought-alongside", "Name a character who has fought alongside Luffy.", "Allies who battled on Luffy's side.",
    "Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Ace, Sabo, Law, Kid, Yamato, Kinemon, Marco, BonClay, Ivankov, Crocodile, Bartolomeo, Cavendish, Rebecca, Kyros, Viola, Momonosuke, Kiku, Hyogoro, Inuarashi, Nekomamushi, Carrot, Pedro, Bege, Killer, Vivi, Wyper, Shirahoshi, Fukaboshi, Bonney, Hajrudin, Sai, Leo, Ideo, Orlumbus, Mr3, Inazuma, Buggy, Gambia", C),
];
