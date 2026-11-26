import type { Question } from "../../questions";
import { C, ranked } from "./names";

// Each list is ordered least niche -> most niche. The last answer is the One in a Luffillion.
export const CURATED_WORLD: Question[] = [
  // ---------------- Locations & Story Arcs ----------------
  ranked("q-visited-islands", "Name an island visited by the Straw Hats.", "Any island at least one Straw Hat has set foot on.",
    "Alabasta, Skypiea, Water 7, Enies Lobby, Thriller Bark, Sabaody Archipelago|Sabaody, Fish-Man Island, Punk Hazard, Dressrosa, Zou, Whole Cake Island, Wano Country|Wano, Egghead, Elbaph, Drum Island, Little Garden, Whisky Peak, Jaya, Loguetown, Dawn Island, Conomi Islands, Gecko Islands, Long Ring Long Land, Amazon Lily, Rusukaina, Kuraigana Island, Boin Archipelago, Momoiro Island, Weatheria, Karakuri Island, Namakura Island, Torino Kingdom, Kenzan Island, Cactus Island, Island of Rare Animals"),

  ranked("q-grand-line", "Name a location in the Grand Line.", "Paradise (the first half) of the Grand Line.",
    "Reverse Mountain, Alabasta, Skypiea, Water 7, Enies Lobby, Sabaody Archipelago|Sabaody, Thriller Bark, Marineford, Impel Down, Amazon Lily, Drum Island, Little Garden, Whisky Peak, Jaya, Long Ring Long Land, Mary Geoise, Twin Cape, Mock Town, Upper Yard, Banaro Island, Kuraigana Island, Weatheria, Boin Archipelago, Kumate Island"),

  ranked("q-new-world", "Name a location in the New World.", "Anywhere in the second half of the Grand Line.",
    "Wano Country|Wano, Dressrosa, Whole Cake Island, Punk Hazard, Zou, Egghead, Elbaph, Laugh Tale, Onigashima, Green Bit, New Marineford, Hachinosu, Totto Land, Cacao Island, Mokomo Dukedom, Sphinx, Prodence Kingdom, Corrida Colosseum, Lodestar Island"),

  ranked("q-east-blue-loc", "Name a location in the East Blue.", "Islands, towns, and villages of the East Blue.",
    "Foosha Village, Loguetown, Shells Town, Orange Town, Syrup Village, Baratie, Arlong Park, Cocoyasi Village, Goa Kingdom, Gray Terminal, Mt. Colubo, Shimotsuki Village, Dawn Island, Conomi Islands, Gecko Islands, Island of Rare Animals, Organ Islands, Tequila Wolf, Polestar Islands"),

  ranked("q-alabasta-saga-loc", "Name a location in the Alabasta Saga.", "From Reverse Mountain to Alabasta.",
    "Alabasta, Reverse Mountain, Whisky Peak, Little Garden, Drum Island, Alubarna, Rainbase, Nanohana, Yuba, Twin Cape, Cactus Island, Rain Dinners, Spiders Cafe, Katorea, Erumalu, Sandora Desert, Tomb of the Kings, Drum Castle, Bighorn, Cocoa Weed, Gyasta, Robelle"),

  ranked("q-water7-saga-loc", "Name a location visited during the Water 7 Saga.", "Long Ring Long Land, Water 7, and Enies Lobby.",
    "Water 7, Enies Lobby, Long Ring Long Land, Tower of Justice, Gates of Justice, Franky House, Galley-La Headquarters|Dock One, Blue Station, Bridge of Hesitation, Judicial Island, St. Poplar, Pucci, San Faldo, Scrap Island, Shift Station"),

  ranked("q-summit-saga-loc", "Name a location visited during the Summit War Saga.", "Sabaody through the post-war arcs.",
    "Marineford, Impel Down, Sabaody Archipelago|Sabaody, Amazon Lily, Rusukaina, Kuraigana Island, Shakky's Rip-Off Bar|Shakky's Bar, Human Auctioning House, Newkama Land, Dawn Island, Gray Terminal, Goa Kingdom, Mt. Colubo, Boin Archipelago, Momoiro Island, Weatheria, Karakuri Island, Namakura Island, Torino Kingdom, Kenzan Island"),

  ranked("q-emperors-saga-loc", "Name a location visited during the Four Emperors Saga.", "Zou, Whole Cake Island, the Reverie, and Wano.",
    "Wano Country|Wano, Whole Cake Island, Zou, Onigashima, Mary Geoise, Totto Land, Sweet City, Whole Cake Chateau, Cacao Island, Seducing Woods, Flower Capital, Kuri, Udon, Ringo, Hakumai, Kibi, Okobore Town, Bakura Town, Ebisu Town, Amigasa Village, Mokomo Dukedom, Whale Forest, Nuts Island, Jam Island, Mirro-World|Mirror World"),

  ranked("q-villain-fight-loc", "Name a location where Luffy has fought a major villain.", "Sites of Luffy's big battles.",
    "Arlong Park, Alabasta, Enies Lobby, Thriller Bark, Dressrosa, Onigashima, Whole Cake Island, Skypiea, Fish-Man Island, Egghead, Punk Hazard, Marineford, Impel Down, Shells Town, Orange Town, Syrup Village, Baratie, Drum Island, Loguetown, Little Garden, Long Ring Long Land, Corrida Colosseum, Mock Town"),

  ranked("q-marine-encounter-loc", "Name a location where the Straw Hats have encountered the Marines.", "Places the crew clashed with or met the Navy.",
    "Loguetown, Alabasta, Enies Lobby, Marineford, Sabaody Archipelago|Sabaody, Shells Town, Water 7, Punk Hazard, Dressrosa, Egghead, Wano Country|Wano, Long Ring Long Land, Arlong Park, Navarone|G-8"),

  ranked("q-poneglyph-loc", "Name a place where a Poneglyph has been found.", "Locations with a Poneglyph or Road Poneglyph.",
    "Alabasta, Skypiea, Fish-Man Island, Zou, Whole Cake Island, Wano Country|Wano, Laugh Tale, Onigashima, Sea Forest, Tomb of the Kings, Shandora"),

  ranked("q-prison-loc", "Name a prison or prison-related location.", "Prisons, prison levels, and places of captivity.",
    "Impel Down, Enies Lobby, Udon Prisoner Mine|Udon, Level 6|Eternal Hell, Level 5|Freezing Hell, Newkama Land|Level 5.5, Level 4|Blazing Hell, Level 3|Starvation Hell, Level 2|Beast Hell, Level 1|Crimson Hell, Tower of Justice, Shells Town, Toy House"),

  ranked("q-villain-ruled", "Name an island ruled by a powerful villain.", "Places controlled by a tyrant or villainous crew.",
    "Dressrosa, Wano Country|Wano, Whole Cake Island, Alabasta, Arlong Park, Thriller Bark, Skypiea, Drum Island, Punk Hazard, Onigashima, Shells Town, Orange Town, Mary Geoise, Hachinosu"),

  ranked("q-destroyed-loc", "Name a location that has been destroyed.", "Islands or places wiped out or heavily ruined.",
    "Ohara, Marineford, Enies Lobby, Arlong Park, Lulusia Kingdom, God Valley, Flevance, Gray Terminal, Punk Hazard, Shandora, Banaro Island"),

  ranked("q-reunion-loc", "Name a location where the Straw Hats have reunited.", "Where the crew came back together.",
    "Sabaody Archipelago|Sabaody, Zou, Wano Country|Wano, Whole Cake Island, Water 7, Kuri, Shakky's Rip-Off Bar|Shakky's Bar"),

  // ---------------- Bounties & Rankings ----------------
  ranked("q-bounty-100m", "Name a character with a bounty over 100 million berries.", "Any known bounty above 100,000,000.",
    "Luffy, Zoro, Sanji, Nami, Usopp, Robin, Franky, Brook, Jinbe, Law, Kid, Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Roger, Ace, Mihawk, Crocodile, Buggy, Doflamingo, Hancock, Marco, Katakuri, Killer, Bonney, Hawkins, Drake, Bege, Apoo, Urouge, Cavendish, Bartolomeo, King, Queen, Jack, Smoothie, Cracker, Perospero, Oven, Daifuku, Weevil, Kuma, Moria, Bellamy, Ulti, PageOne, Arlong, Ideo, Leo, Sai, Orlumbus, Hajrudin, Chinjao, Elizabello, Abdullah, Jeet, Blue Gilly, Brulee"),

  ranked("q-bounty-500m", "Name a character with a bounty over 500 million berries.", "Any known bounty above 500,000,000.",
    "Luffy, Zoro, Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Roger, Law, Kid, Mihawk, Crocodile, Buggy, Sanji, Hancock, Marco, Katakuri, Doflamingo, Jinbe, King, Queen, Jack, Ace, Smoothie, Cracker, Perospero, Robin, Usopp, Franky, Brook, Killer, Weevil"),

  ranked("q-bounty-1b", "Name a character with a bounty over 1 billion berries.", "Any known bounty above 1,000,000,000.",
    "Luffy, Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Roger, Zoro, Law, Kid, Sanji, Mihawk, Crocodile, Buggy, Hancock, Jinbe, Katakuri, Marco, King, Queen"),

  ranked("q-bounty-increased", "Name a character whose bounty has increased.", "Characters who received a higher bounty later on.",
    "Luffy, Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Law, Kid, Ace, Buggy, Killer, Bonney, Bege, Hawkins, Apoo, Crocodile, Mihawk, Hancock, Blackbeard, Urouge"),

  ranked("q-bounty-frozen", "Name a character who has had their bounty frozen.", "Warlords whose bounties were suspended.",
    "Mihawk, Hancock, Doflamingo, Crocodile, Kuma, Moria, Law, Jinbe, Blackbeard, Buggy, Weevil"),

  ranked("q-former-warlord-bounty", "Name a former Warlord with a bounty.", "Ex-Warlords whose bounties are active again.",
    "Mihawk, Crocodile, Buggy, Hancock, Law, Jinbe, Blackbeard, Doflamingo, Moria, Weevil, Kuma"),

  ranked("q-post-timeskip-bounty", "Name a character who has been given a bounty after the time skip.", "Bounties issued or updated after the two-year skip.",
    "Luffy, Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Law, Kid, Killer, Mihawk, Crocodile, Buggy, Hancock, Cavendish, Bartolomeo, Marco, Katakuri, Smoothie, Cracker, Perospero, King, Queen, Jack, Ulti, PageOne, Bege, Hawkins, Apoo, Urouge, Bonney, Weevil, Burgess, Shiryu, Augur, Laffitte, DocQ, Devon, Wolf, Shot, Pizarro, Ideo, Leo, Hajrudin, Chinjao, Orlumbus"),

  ranked("q-emperors", "Name a member of the Four Emperors.", "Anyone who has held the title of Yonko.",
    "Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Luffy, Buggy"),

  ranked("q-admirals", "Name a character who has been an Admiral.", "Admirals and Fleet Admirals, past or present.",
    "Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, Sengoku, Kong, Zephyr"),

  ranked("q-commanders", "Name a character who has been a Yonko Commander.", "Top officers of an Emperor's crew.",
    "Marco, Jozu, Vista, Ace, Thatch, Izou, King, Queen, Jack, Katakuri, Smoothie, Cracker, Beckman, Roux, Yasopp, Burgess, Augur, Laffitte, DocQ, Devon, Wolf, Shot, Pizarro, Shiryu, Oden, Blamenco, Rakuyo, Namur, Blenheim, Curiel, Kingdew, Haruta, Atmos, Speed Jiru, Fossa", C),

  // ---------------- Ships, Objects & Items ----------------
  ranked("q-pirate-ship", "Name a ship belonging to a pirate crew.", "Any pirate crew's ship.",
    "Going Merry|Merry, Thousand Sunny|Sunny, Oro Jackson, Moby Dick, Red Force, Polar Tang, Victoria Punk, Queen Mama Chanter, Saber of Xebec, Perfume Yuda, Thriller Bark, Going Luffy-senpai, Nostra Castello, Big Top, Miss Love Duck, Sexy Foxy, Yonta Maria, Shark Superb, Flying Dutchman, Striker, Numancia Flamingo"),

  ranked("q-supreme-blades", "Name one of the 12 Supreme Grade Blades.", "The known Saijo O Wazamono.",
    "Yoru, Murakumogiri, Ace, Shodai Kitetsu, Yakuza Kasen"),

  ranked("q-ancient-weapons", "Name one of the Ancient Weapons.", "The legendary weapons of the Void Century.",
    "Pluton, Poseidon, Uranus"),

  ranked("q-den-den", "Name a type of Den Den Mushi.", "Varieties of transponder snail.",
    "Den Den Mushi, Baby Den Den Mushi, Visual Den Den Mushi|Video Den Den Mushi, Black Den Den Mushi, White Den Den Mushi, Golden Den Den Mushi, Projector Den Den Mushi, Silver Den Den Mushi"),

  ranked("q-grand-line-travel", "Name an item that can be used to travel through the Grand Line.", "Navigation tools and travel gear.",
    "Log Pose, Eternal Pose, Vivre Card, Ship Coating|Coating, Waver, Puffing Tom|Sea Train, Sea Prism Stone hull|Kairoseki hull, Coup de Burst, Mini Merry, Shark Submerge"),

  ranked("q-seastone-item", "Name a type of Sea Stone item.", "Objects made of Sea Prism Stone (Kairoseki).",
    "Seastone handcuffs|Sea Prism Stone handcuffs, Smoker's jitte|Jitte, Seastone cage, Seastone net, Seastone bullets, Kairoseki hull|Seastone hull, Seastone shackles, Seastone wall"),

  ranked("q-roger-objects", "Name an object associated with Gol D. Roger.", "Things linked to the Pirate King.",
    "Straw Hat, One Piece, Oro Jackson, Ace (sword)|Ace, Execution platform|Loguetown execution platform, Roger's Jolly Roger|Jolly Roger, Oden's Journal|Oden's log"),

  ranked("q-straw-hat-items", "Name an item that belonged to a Straw Hat member.", "Weapons, tools, and keepsakes of the crew.",
    "Straw Hat, Wado Ichimonji, Enma, Clima-Tact, Sandai Kitetsu, Kabuto|Black Kabuto, Rumble Ball, Soul Solid, Raid Suit, Sogeking Mask, Ace's Vivre Card|Vivre Card, Shusui, Log Pose, Zoro's Bandana|Bandana, Chopper's Hat, Tangerine Trees|Bellmere's Tangerine Trees, Pop Green"),

  ranked("q-vegapunk-tech", "Name a piece of technology created by Vegapunk.", "Inventions of the world's greatest scientist.",
    "Pacifista, Seraphim, Punk Records, Mother Flame, Artificial Devil Fruits, SAD, Frontier Dome, Vegaforce-01"),

  // ---------------- Random One Piece Knowledge ----------------
  ranked("q-marine-family", "Name a character who has a family member in the Marines.", "Relatives of Marines.",
    "Luffy, Dragon, Ace, Sabo, Doflamingo, Helmeppo", C),

  ranked("q-sibling", "Name a character who has a brother or sister.", "Blood or sworn siblings.",
    "Luffy, Ace, Sabo, Sanji, Nami, Nojiko, Doflamingo, Corazon, Hancock, Katakuri, Pudding, Smoothie, Cracker, Perospero, Brulee, Oven, Daifuku, Lola, Chiffon, Vinsmoke Reiju|Reiju, Vinsmoke Ichiji|Ichiji, Vinsmoke Niji|Niji, Vinsmoke Yonji|Yonji, Shirahoshi, Fukaboshi, Ryuboshi, Manboshi, Momonosuke, Hiyori, Boa Sandersonia|Sandersonia, Boa Marigold|Marigold, Law, Lami", C),

  ranked("q-betrayed", "Name a character who has betrayed someone.", "Traitors, double agents, and backstabbers.",
    "Blackbeard, Kanjuro, Robin, Pudding, Lucci, Kaku, Kalifa, Blueno, Kuro, Krieg, Vergo, Monet, Orochi, Drake, Hawkins, Corazon, Kurozumi Higurashi|Higurashi", C),

  ranked("q-switched-sides", "Name a character who has switched sides.", "Characters who changed allegiance.",
    "Robin, Jinbe, Franky, Aokiji, Drake, BonClay, Crocodile, Bege, Pudding, Hawkins, Yamato, Shiryu, Mr3, WhosWho, Corazon, Kanjuro, Bellamy, Viola, Vivi, Igaram", C),

  ranked("q-revolutionary", "Name a character who has been part of the Revolutionary Army.", "Leaders, commanders, and members.",
    "Dragon, Sabo, Koala, Ivankov, Kuma, Inazuma, Hack, BeloBetty, Morley, Lindbergh, Karasu, Robin, Ahiru, Bunny Joe, Ushiano, Jiron, Terry Gilteo", C),

  ranked("q-void-century", "Name a character who knows about the Void Century.", "Those who know (some of) the hidden history.",
    "Robin, Imu, Vegapunk, Saturn, Rayleigh, Roger, Clover, Olvia, Oden, Mars, Warcury, Nusjuro, JuPeter, Saul, Toki", C),

  ranked("q-met-celestial", "Name a character who has encountered a Celestial Dragon.", "Met, fought, or served a World Noble.",
    "Luffy, Hancock, Doflamingo, Corazon, Koala, FisherTiger, Kuma, Sabo, Bonney, Vivi, Shirahoshi, Hatchan, Camie, Rayleigh, Law, Mjosgard", C),

  ranked("q-been-skypiea", "Name a character who has been to Skypiea.", "Anyone who has been in the sky islands.",
    "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Enel, Conis, Wyper, GanFall, Pagaya, Aisa, Laki, Ohm, Satori, Shura, Gedatsu, Kalgara, Noland, Pierre, Braham, Genbo, Kamakiri, McKinley, Su", C),

  ranked("q-been-wano", "Name a character who has been to Wano.", "Anyone who set foot in Wano Country.",
    "Luffy, Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Kaido, Yamato, Oden, Law, Kid, Killer, Marco, BigMom, Roger, Whitebeard, Kinemon, Momonosuke, Hiyori, Kiku, Orochi, Kanjuro, Hawkins, Apoo, Drake, Hyogoro, Tama, Ryokugyu, King, Queen, Jack, Sasaki, Ulti, PageOne, WhosWho, BlackMaria, Komachiyo", C),

  ranked("q-been-fishman", "Name a character who has been to Fish-Man Island.", "Anyone who visited or lived on Fish-Man Island.",
    "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Shirahoshi, Neptune, Hody, Decken, Fukaboshi, Ryuboshi, Manboshi, Shyarly|Madam Shyarly, Camie, Hatchan, Otohime, FisherTiger, Arlong, Pekoms, Tamago, Caribou, Wadatsumi, Aladdin, Kuroobi, Chew, Den", C),

  ranked("q-oro-jackson", "Name a character who has been on Roger's ship.", "Crew and passengers of the Oro Jackson.",
    "Roger, Rayleigh, Shanks, Buggy, Oden, Crocus, Gaban, Inuarashi, Nekomamushi, Toki", C),

  ranked("q-baroque", "Name a character who has been part of Baroque Works.", "Agents, partners, and Billions/Millions.",
    "Crocodile, Robin, BonClay, Daz, Mr3, Doublefinger, Goldenweek, Mr4, MerryXmas, Mr5, Valentine, Vivi, Igaram, Mr9, Mr. 7, Miss Father's Day, Mr11, Miss Monday, Lassoo, Mr. 13, Miss Friday", C),

  ranked("q-cp", "Name a character who has been part of CP9 or CP0.", "Agents of Cipher Pol's most secret units.",
    "Lucci, Kaku, Kalifa, Jabra, Blueno, Kumadori, Fukurou, Spandam, Stussy, Hattori, Joseph, Gismonda, Guernica, Maha", C),

  ranked("q-pre-post-skip", "Name a character who has appeared both before and after the time skip.", "Characters seen in both halves of the story.",
    "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Shanks, Buggy, Smoker, Koby, Garp, Blackbeard, Law, Kid, Hancock, Mihawk, Crocodile, BonClay, Vivi, Doflamingo, Akainu, Kizaru, Aokiji, Sengoku, Tashigi, Helmeppo, Rayleigh, Perona, Bellamy, Hody, Shirahoshi, Camie, Hatchan, Iceburg, Paulie, Kokoro, Wapol, Dalton, Kureha, Makino, Dadan, Zeff, Kaya, Nojiko, Genzo, Pandaman", C),

  ranked("q-fought-wg", "Name a character who has fought against the World Government.", "Rebels, pirates, and others who defied the World Government.",
    "Luffy, Robin, Franky, Usopp, Sabo, Dragon, Koala, FisherTiger, Kuma, Bonney, Vegapunk, Ivankov, Saul, Clover, Olvia, Morley, BeloBetty, Lindbergh, Inazuma, Hack, Karasu", C),
];
