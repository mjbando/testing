module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/daily/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/daily.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/account-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crew$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crew-server.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crew$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crew$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const dynamic = "force-dynamic";
async function GET(req) {
    try {
        const now = new Date(), day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["todayKey"])(now);
        const captain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentCaptain"])(req);
        const awards = captain ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadAchievements"])(captain.id) : null;
        const equippedCharacter = captain ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crew$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["equippedCharacterFor"])(captain.id) : "luffy";
        const save = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dailySave"])(day, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownerOf"])(captain?.id ?? null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guestId"])(req)));
        const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDailyRun"])(day).map((q, index)=>({
                index,
                id: q.id,
                prompt: q.prompt,
                hint: q.hint,
                counts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tierCounts"])(q)
            }));
        // Only the current player's submitted answers are included, never the answer bank.
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["privateJson"])({
            day,
            runId: day,
            questions,
            seconds: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"],
            maxPoints: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_POINTS"],
            serverNow: now.getTime(),
            nextRunInMs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["msUntilNextDay"])(now),
            captain,
            equippedCharacter,
            newlyUnlocked: awards?.newlyUnlocked ?? [],
            ...save
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureGuest"])(req, res);
        return res;
    } catch (err) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["failure"])(err);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/data/arcs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOURNEY_MAX",
    ()=>JOURNEY_MAX,
    "LAUGH_TALE_AT",
    ()=>LAUGH_TALE_AT,
    "SAGAS",
    ()=>SAGAS,
    "SAGA_LENGTH",
    ()=>SAGA_LENGTH,
    "sagaAt",
    ()=>sagaAt,
    "sagaIndexAt",
    ()=>sagaIndexAt,
    "travelFor",
    ()=>travelFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-route] (ecmascript)");
;
const LAUGH_TALE_AT = 500;
const SAGA_LENGTH = LAUGH_TALE_AT / 11; // ~45.5 points per saga
const JOURNEY_MAX = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_POINTS"]; // 700: Luffy keeps exploring Laugh Tale past 500
function travelFor(points) {
    return Math.max(0, points);
}
const NAMES = [
    [
        "East Blue",
        "A quiet seaside village"
    ],
    [
        "Alabasta",
        "Village in the desert"
    ],
    [
        "Sky Island",
        "Village above the clouds"
    ],
    [
        "Enies Lobby",
        "Fortress in the middle of the sea"
    ],
    [
        "Thriller Bark",
        "The haunted cemetery"
    ],
    [
        "Marineford",
        "The Marine headquarters"
    ],
    [
        "Fish-Man Island",
        "City at the bottom of the sea"
    ],
    [
        "Dressrosa",
        "The Corrida Colosseum"
    ],
    [
        "Whole Cake Island",
        "A land made of sweets"
    ],
    [
        "Wano",
        "The land of samurai"
    ],
    [
        "Elbaph",
        "The land of giants"
    ],
    [
        "Laugh Tale",
        "The final island and its treasure"
    ]
];
const SAGAS = NAMES.map(([name, subtitle], i)=>({
        name,
        subtitle,
        at: i * SAGA_LENGTH
    }));
function sagaIndexAt(points) {
    return Math.max(0, Math.min(SAGAS.length - 1, Math.floor(points / SAGA_LENGTH)));
}
function sagaAt(points) {
    return SAGAS[sagaIndexAt(points)];
}
}),
"[project]/src/data/bank/arcs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARCS_QUESTION",
    ()=>ARCS_QUESTION
]);
const ARCS_QUESTION = {
    id: "arcs",
    prompt: "Name an arc of One Piece.",
    hint: "Canon manga arcs, sagas, anime filler arcs, or manga cover story arcs — with or without 'Arc'.",
    tiers: {
        common: [
            "Romance Dawn Arc|Romance Dawn",
            "Arlong Park Arc|Arlong Park",
            "Alabasta Arc|Arabasta Arc|Alabasta|Arabasta",
            "Skypiea Arc|Skypiea|Sky Island",
            "Enies Lobby Arc|Enies Lobby",
            "Marineford Arc|Marineford|Summit War of Marineford",
            "Dressrosa Arc|Dressrosa",
            "Whole Cake Island Arc|Whole Cake Island|Totto Land",
            "Wano Country Arc|Wano Arc|Wano Country|Wano",
            "Egghead Arc|Egghead|Future Island Egghead"
        ],
        uncommon: [
            "Orange Town Arc|Orange Town",
            "Syrup Village Arc|Syrup Village",
            "Baratie Arc|Baratie",
            "Loguetown Arc|Loguetown|Logue Town",
            "Water 7 Arc|Water 7|Water Seven",
            "Thriller Bark Arc|Thriller Bark",
            "Sabaody Archipelago Arc|Sabaody|Shabondy",
            "Impel Down Arc|Impel Down",
            "Fish-Man Island Arc|Fishman Island Arc|Fish-Man Island|Fishman Island",
            "Punk Hazard Arc|Punk Hazard",
            "Zou Arc|Zou",
            "Elbaph Arc|Elbaf Arc|Elbaph|Elbaf"
        ],
        rare: [
            "Reverse Mountain Arc|Reverse Mountain|Laboon Arc",
            "Whisky Peak Arc|Whiskey Peak Arc|Whisky Peak|Whiskey Peak",
            "Little Garden Arc|Little Garden",
            "Drum Island Arc|Drum Island|Drum Kingdom Arc",
            "Jaya Arc|Jaya",
            "Long Ring Long Land Arc|Long Ring Long Land|Davy Back Fight Arc|Davy Back Fight",
            "Post-Enies Lobby Arc|Post-Enies Lobby|Post Enies Lobby",
            "Amazon Lily Arc|Amazon Lily",
            "Post-War Arc|Post-War|Post War|ASL Flashback",
            "Return to Sabaody Arc|Return to Sabaody",
            "Levely Arc|Reverie Arc|Levely|Reverie",
            "G-8 Arc|G-8|Navarone Arc",
            "East Blue Saga|East Blue",
            "Alabasta Saga|Baroque Works Saga",
            "Sky Island Saga",
            "Water 7 Saga|CP9 Saga",
            "Thriller Bark Saga",
            "Summit War Saga|Paramount War Saga",
            "Fish-Man Island Saga",
            "Dressrosa Saga|Pirate Alliance Saga",
            "Whole Cake Island Saga|Four Emperors Saga|Yonko Saga",
            "Wano Country Saga",
            "Final Saga",
            "Shells Town Arc|Shells Town|Morgan Arc",
            "Gaimon Arc|Island of Rare Animals"
        ],
        epic: [
            "Post-Alabasta Arc|Post-Alabasta",
            "Warship Island Arc|Warship Island|Apis Arc",
            "Goat Island Arc|Goat Island",
            "Ocean's Dream Arc|Ocean's Dream",
            "Foxy's Return Arc|Foxy's Return",
            "Ice Hunter Arc|Ice Hunter|Lovely Land Arc",
            "Spa Island Arc|Spa Island",
            "Little East Blue Arc|Little East Blue",
            "Z's Ambition Arc|Z's Ambition",
            "Caesar Retrieval Arc|Caesar Retrieval|Breed Arc",
            "Silver Mine Arc|Silver Mine",
            "Marine Rookie Arc|Marine Rookie",
            "Cidre Guild Arc|Cidre Guild|Carbonic Acid King",
            "Uta's Past Arc|Uta's Past",
            "Onigashima Raid|Raid on Onigashima",
            "Oden Flashback|Kozuki Oden Flashback",
            "God Valley Incident|God Valley Flashback",
            "Buggy's Crew Adventure Chronicles|Buggy's Crew: After the Battle",
            "Diary of Koby-Meppo|Koby-Meppo",
            "Jango's Dance Paradise",
            "Hatchan's Sea-Floor Stroll",
            "Wapol's Omnivorous Hurrah",
            "Ace's Great Blackbeard Search",
            "Gedatsu's Accidental Blue-Sea Life",
            "Miss Goldenweek's Operation: Meet Baroque Works",
            "Enel's Great Space Operations",
            "CP9's Independent Report",
            "Straw Hat's Separation Serial",
            "From the Decks of the World",
            "From the Decks of the World: The 500,000,000 Man Arc",
            "Caribou's Kehihihihi in the New World",
            "Solo Journey of Jinbe, Knight of the Sea|Jinbe's Solo Journey",
            "Stories of the Self-Proclaimed Straw Hat Grand Fleet",
            "Germa 66's Ahh... An Emotionless Excursion",
            "Oni Child Yamato's Golden Harvest Surrogate Pilgrimage",
            "Boss Luffy Historical Special|Boss Luffy",
            "Chopperman Special|Chopperman",
            "Monsters: 103 Mercies Dragon Damnation|Monsters",
            "One Piece Fan Letter|Fan Letter",
            "Episode of East Blue",
            "Episode of Nami",
            "Episode of Merry",
            "Episode of Sabo",
            "Episode of Skypiea",
            "3D2Y",
            "Adventure of Nebulandia",
            "Heart of Gold",
            "Noland and Kalgara Flashback|Shandora Flashback",
            "Ohara Incident|Ohara Flashback",
            "Fisher Tiger Flashback|Sun Pirates Flashback",
            "Law and Corazon Flashback|Flevance Flashback",
            "Bartholomew Kuma Flashback|Kuma Flashback",
            "Sanji and Zeff Flashback",
            "Chopper and Hiriluk Flashback",
            "One Piece: The Movie",
            "Clockwork Island Adventure",
            "Chopper's Kingdom on the Island of Strange Animals",
            "Dead End Adventure",
            "The Cursed Holy Sword",
            "Baron Omatsuri and the Secret Island|Baron Omatsuri",
            "Giant Mecha Soldier of Karakuri Castle",
            "Strong World|One Piece Film: Strong World",
            "Film: Z|One Piece Film: Z|Film Z",
            "Film: Gold|One Piece Film: Gold|Film Gold",
            "Stampede|One Piece: Stampede",
            "Film: Red|One Piece Film: Red|Film Red"
        ],
        luffillion: [
            "Ruluka Island Arc|Rainbow Mist Arc|Ruluka Island|Rainbow Mist"
        ]
    }
};
}),
"[project]/src/data/bank/characters.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARACTERS_QUESTION",
    ()=>CHARACTERS_QUESTION
]);
const CHARACTERS_QUESTION = {
    id: "characters",
    prompt: "Name a One Piece character.",
    hint: "Any named character across the manga, SBS, cover stories, or films.",
    tiers: {
        common: [
            "Monkey D. Luffy|Luffy|Straw Hat Luffy|Lucy|Luffytaro",
            "Roronoa Zoro|Zoro|Pirate Hunter Zoro|Zorojuro",
            "Nami|Cat Burglar Nami|Onami",
            "Usopp|Sogeking|Sniper King|God Usopp|Usohachi",
            "Sanji|Vinsmoke Sanji|Black Leg Sanji|Sangoro|O-Soba Mask|Stealth Black",
            "Tony Tony Chopper|Chopper|Choppemon",
            "Nico Robin|Robin|Miss All Sunday|O-Robi|Devil Child",
            "Franky|Cutty Flam|Franosuke",
            "Brook|Soul King|Bonekichi",
            "Jinbe|Jimbei|Knight of the Sea|First Son of the Sea"
        ],
        uncommon: [
            "Nefertari Vivi|Vivi|Miss Wednesday",
            "Portgas D. Ace|Ace|Gol D. Ace|Fire Fist Ace",
            "Sabo",
            "Shanks|Red-Haired Shanks|Red Hair Shanks",
            "Trafalgar D. Water Law|Trafalgar Law|Law",
            "Eustass Kid|Captain Kid|Kid",
            "Boa Hancock|Hancock|Pirate Empress",
            "Kaido|Kaidou",
            "Charlotte Linlin|Big Mom|Linlin",
            "Marshall D. Teach|Blackbeard|Teach",
            "Edward Newgate|Whitebeard|Newgate",
            "Gol D. Roger|Gold Roger|Roger",
            "Monkey D. Garp|Garp",
            "Monkey D. Dragon|Dragon",
            "Silvers Rayleigh|Rayleigh|Dark King",
            "Dracule Mihawk|Mihawk|Hawk-Eyes|Hawk Eyes Mihawk",
            "Donquixote Doflamingo|Doflamingo|Doffy|Joker",
            "Crocodile|Sir Crocodile|Mr. 0|Mr 0",
            "Buggy|Buggy the Clown|Buggy the Star Clown",
            "Smoker|White Hunter",
            "Koby|Coby",
            "Sakazuki|Akainu",
            "Kuzan|Aokiji",
            "Borsalino|Kizaru",
            "Issho|Fujitora",
            "Sengoku|Sengoku the Buddha",
            "Bartholomew Kuma|Kuma|Tyrant Kuma",
            "Marco|Marco the Phoenix",
            "Charlotte Katakuri|Katakuri",
            "Yamato",
            "Kozuki Oden|Oden",
            "Rob Lucci|Lucci",
            "Enel|Eneru|God Enel",
            "Arlong",
            "Gecko Moria|Moria",
            "Jewelry Bonney|Bonney",
            "Dr. Vegapunk|Vegapunk|Stella",
            "Bentham|Bon Clay|Mr. 2|Mr 2|Mr. 2 Bon Kurei",
            "Emporio Ivankov|Ivankov|Iva",
            "Donquixote Rosinante|Corazon|Rosinante"
        ],
        rare: [
            "Caesar Clown|Caesar|Gangster Gastino",
            "Bepo",
            "Karoo|Carue",
            "Laboon",
            "Imu|Im",
            "Killer|Kamazo",
            "Scratchmen Apoo|Apoo",
            "Basil Hawkins|Hawkins",
            "Capone Bege|Bege",
            "X Drake|Diez Drake|Drake",
            "Urouge|Mad Monk Urouge",
            "King|Alber",
            "Queen|Queen the Plague",
            "Jack|Jack the Drought",
            "Ulti",
            "Page One",
            "Who's-Who|Whos Who",
            "Black Maria",
            "Sasaki",
            "Charlotte Cracker|Cracker",
            "Charlotte Smoothie|Smoothie",
            "Charlotte Perospero|Perospero",
            "Charlotte Pudding|Pudding",
            "Charlotte Brulee|Brulee",
            "Charlotte Oven|Oven",
            "Charlotte Daifuku|Daifuku",
            "Pekoms",
            "Tamago|Baron Tamago|Viscount Hiyoko|Count Niwatori",
            "Pedro",
            "Carrot",
            "Wanda",
            "Kin'emon|Kinemon|Foxfire Kinemon",
            "Kozuki Momonosuke|Momonosuke|Momo",
            "Kozuki Hiyori|Hiyori|Komurasaki",
            "Kurozumi Kanjuro|Kanjuro",
            "Denjiro|Kyoshiro",
            "Kawamatsu",
            "Ashura Doji|Shutenmaru",
            "Raizo",
            "Kikunojo|Kiku|O-Kiku",
            "Izou|Izo",
            "Shinobu",
            "Kurozumi Orochi|Orochi",
            "Tama|Otama|O-Tama",
            "Hyogoro|Boss Hyogoro",
            "Toko|Otoko|O-Toko",
            "Shiryu|Shiliew|Shiryu of the Rain",
            "Jesus Burgess|Burgess",
            "Van Augur",
            "Laffitte|Lafitte",
            "Doc Q",
            "Stronger",
            "Catarina Devon|Devon",
            "Sanjuan Wolf",
            "Vasco Shot",
            "Avalo Pizarro|Pizarro",
            "Benn Beckman|Ben Beckman|Beckman",
            "Lucky Roux|Lucky Roo",
            "Yasopp",
            "Rockstar",
            "Uta",
            "Jozu|Diamond Jozu",
            "Vista|Flower Sword Vista",
            "Thatch",
            "Portgas D. Rouge|Rouge",
            "Edward Weevil|Weevil",
            "Buckingham Stussy|Miss Bakkin|Bakkin",
            "Kaku",
            "Jabra|Jyabura",
            "Blueno",
            "Kumadori",
            "Fukurou|Fukuro",
            "Kalifa|Califa",
            "Spandam",
            "Stussy",
            "Hattori",
            "Iceburg|Iceberg",
            "Paulie",
            "Tom",
            "Kokoro",
            "Chimney",
            "Magellan",
            "Hannyabal",
            "Sadie|Sadi",
            "Saldeath",
            "Domino",
            "Inazuma",
            "Koala",
            "Hack",
            "Morley",
            "Belo Betty",
            "Lindbergh",
            "Karasu",
            "Aramaki|Ryokugyu|Green Bull",
            "Tashigi",
            "Helmeppo",
            "Hina|Black Cage Hina",
            "Tsuru",
            "Momonga",
            "Sentomaru",
            "Kong",
            "Jaguar D. Saul|Saul",
            "Bogard",
            "Saint Jaygarcia Saturn|Saturn|Jaygarcia Saturn",
            "Saint Marcus Mars|Marcus Mars",
            "Saint Topman Warcury|Warcury|Topman Warcury",
            "Saint Ethanbaron V. Nusjuro|Nusjuro|Ethanbaron V. Nusjuro",
            "Saint Shepherd Ju Peter|Ju Peter|Shepherd Ju Peter",
            "Saint Figarland Garling|Figarland Garling|Garling",
            "Figarland Shamrock|Shamrock",
            "Loki",
            "Bartolomeo",
            "Cavendish|Hakuba",
            "Sai|Don Sai",
            "Rebecca",
            "Kyros|Thunder Soldier",
            "Viola|Violet",
            "Sugar",
            "Senor Pink",
            "Pica",
            "Diamante",
            "Trebol",
            "Vergo",
            "Monet",
            "Bellamy",
            "Perona",
            "Dr. Hogback|Hogback",
            "Absalom",
            "Oars",
            "Charlotte Lola|Lola",
            "Shimotsuki Ryuma|Ryuma",
            "Shirahoshi|Poseidon",
            "Neptune|King Neptune",
            "Fisher Tiger",
            "Otohime|Queen Otohime",
            "Hatchan|Hachi",
            "Camie|Keimi",
            "Pappag",
            "Hody Jones|Hody",
            "Vander Decken IX|Vander Decken",
            "Chew|Choo",
            "Kuroobi",
            "Zeff|Red-Leg Zeff",
            "Bell-mere|Bellemere",
            "Nojiko",
            "Genzo",
            "Kaya",
            "Merry",
            "Kuro|Captain Kuro|Klahadore",
            "Don Krieg|Krieg",
            "Gin",
            "Alvida|Iron Mace Alvida",
            "Morgan|Axe-Hand Morgan|Captain Morgan",
            "Jango",
            "Fullbody",
            "Makino",
            "Curly Dadan|Dadan",
            "Woop Slap",
            "Kuina",
            "Koushirou|Koshiro",
            "Dr. Kureha|Kureha|Doctorine",
            "Dr. Hiriluk|Hiriluk|Hiruluk",
            "Wapol",
            "Dalton",
            "Nefertari Cobra|Cobra|King Cobra",
            "Pell",
            "Chaka",
            "Igaram|Mr. 8|Mr 8",
            "Koza|Kohza",
            "Daz Bonez|Mr. 1|Mr 1|Daz Bones",
            "Galdino|Mr. 3|Mr 3",
            "Mikita|Miss Valentine|Ms. Valentine",
            "Gem|Mr. 5|Mr 5",
            "Zala|Paula|Miss Doublefinger|Ms. Doublefinger",
            "Drophy|Miss Merry Christmas",
            "Babe|Mr. 4|Mr 4",
            "Marianne|Miss Goldenweek",
            "Gan Fall",
            "Wyper|Wiper",
            "Conis",
            "Mont Blanc Noland|Noland",
            "Kalgara|Calgara",
            "Mont Blanc Cricket|Cricket",
            "Ohm",
            "Gedatsu",
            "Satori",
            "Shura",
            "Foxy|Silver Fox Foxy",
            "Porche",
            "Hamburg",
            "Dorry",
            "Brogy",
            "Hajrudin",
            "Oimo",
            "Kashii|Kashi",
            "Vinsmoke Judge|Judge",
            "Vinsmoke Reiju|Reiju|Poison Pink",
            "Vinsmoke Ichiji|Ichiji|Sparking Red",
            "Vinsmoke Niji|Niji|Dengeki Blue",
            "Vinsmoke Yonji|Yonji|Winch Green",
            "Vinsmoke Sora|Sora",
            "Shakuyaku|Shakky",
            "Scopper Gaban|Gaban|Gyaban",
            "Crocus",
            "Rocks D. Xebec|Xebec|Rocks",
            "Shiki|Golden Lion Shiki",
            "Zephyr|Z",
            "Gild Tesoro|Tesoro",
            "Douglas Bullet|Bullet",
            "Shaka",
            "Lilith",
            "Edison",
            "Pythagoras",
            "Atlas",
            "York",
            "S-Snake",
            "S-Hawk",
            "S-Bear",
            "S-Shark",
            "Prince Grus|Grus",
            "Kujaku",
            "Hibari",
            "Doll",
            "Bluegrass",
            "Red King",
            "Guillotine",
            "Pomsky",
            "Tosa",
            "Urban",
            "Hound",
            "Gion|Momousagi",
            "Tokikake|Chaton",
            "Gerd",
            "Goldberg",
            "Road",
            "Stansen",
            "Jarul",
            "Jorul",
            "Ripley",
            "Colon",
            "Harald|King Harald",
            "Ida",
            "Mother Carmel|Carmel",
            "Saint Rimoshifu Killingham|Killingham",
            "Saint Shepherd Sommers|Sommers",
            "Gunko",
            "Kozuki Toki|Toki",
            "Kozuki Sukiyaki|Sukiyaki|Tenguyama Hitetsu|Hitetsu",
            "Shimotsuki Yasuie|Yasuie|Tonoyasu",
            "Shimotsuki Ushimaru|Ushimaru",
            "Shimotsuki Kozaburo|Kozaburo",
            "Kurozumi Higurashi|Higurashi",
            "Kurozumi Semimaru|Semimaru",
            "Kurozumi Tama|Kurozumi",
            "Fukurokuju",
            "Hotei",
            "Onimaru|Gyukimaru",
            "Babanuki",
            "Daifugo",
            "Solitaire",
            "Speed",
            "Holdem",
            "Sheepshead",
            "Ginrummy",
            "Bao Huang",
            "Sarahebi",
            "Briscola",
            "Fourtricks",
            "Hamlet",
            "Mizerka",
            "Poker",
            "Dobon",
            "Alpacaman",
            "Madilloman",
            "Gazelleman",
            "Mouseman",
            "Batman",
            "Urashima",
            "Tsurujo|O-Tsuru|Otsuru",
            "Hatcha",
            "Jaki",
            "Gokki",
            "Nangi",
            "Juki",
            "Inbi",
            "Fuga",
            "Zanki",
            "Rokki",
            "Kunyun",
            "Charlotte Amande|Amande",
            "Charlotte Mont-d'Or|Mont-d'Or|Mont dOr",
            "Charlotte Galette|Galette",
            "Charlotte Opera|Opera",
            "Charlotte Flampe|Flampe",
            "Charlotte Chiffon|Chiffon",
            "Charlotte Praline|Praline",
            "Charlotte Compote|Compote",
            "Charlotte Snack|Snack",
            "Charlotte Moscato|Moscato",
            "Charlotte Counter|Counter",
            "Charlotte Cadenza|Cadenza",
            "Charlotte Cabaletta|Cabaletta",
            "Charlotte Raisin|Raisin",
            "Charlotte Yuen|Yuen",
            "Charlotte Brownie|Brownie",
            "Charlotte Joconde|Joconde",
            "Charlotte Custard|Custard",
            "Charlotte Angel|Angel",
            "Charlotte Citron|Citron",
            "Charlotte Cinnamon|Cinnamon",
            "Charlotte Mascarpone|Mascarpone",
            "Charlotte Joscarpone|Joscarpone",
            "Charlotte Bavarois|Bavarois",
            "Charlotte Noisette|Noisette",
            "Charlotte Nusstorte|Nusstorte",
            "Charlotte Basskarte|Basskarte",
            "Charlotte Dosmarche|Dosmarche",
            "Charlotte Kato|Kato",
            "Charlotte Poire|Poire",
            "Charlotte Effilee|Effilee",
            "Charlotte Myukuru|Myukuru",
            "Charlotte Anana|Anana",
            "Charlotte Dolce|Dolce",
            "Charlotte Dragee|Dragee",
            "Streusen",
            "Zeus",
            "Prometheus"
        ],
        epic: [
            "Napoleon",
            "Kingbaum",
            "Randolph",
            "Bobbin",
            "Diesel",
            "Pound",
            "Morgans|Big News Morgans",
            "Du Feld",
            "Drug Peclo",
            "Giberson",
            "Umit",
            "Capone Pez|Pez",
            "Vito",
            "Gotti",
            "Inuarashi|Duke Dogstorm|Dogstorm",
            "Nekomamushi|Master Cat Viper|Cat Viper",
            "Shishilian|Sicilian",
            "Concelot",
            "Giovanni",
            "Roddy",
            "Black Back",
            "Bariete",
            "Miyagi",
            "Tristan",
            "Milky",
            "Zepo",
            "Zunesha|Zunisha",
            "Lao G",
            "Machvise",
            "Dellinger",
            "Gladius",
            "Buffalo",
            "Baby 5|Baby Five",
            "Giolla|Jora",
            "Suleiman",
            "Ideo",
            "Blue Gilly",
            "Abdullah",
            "Jeet",
            "Orlumbus",
            "Columbus",
            "Elizabello II|Elizabello",
            "Dagama",
            "Leo",
            "Kabu",
            "Bian",
            "Mansherry|Princess Mansherry",
            "Gancho",
            "Wicca",
            "Rampo",
            "Flapper",
            "Riku Doldo III|King Riku|Riku",
            "Scarlet",
            "Tank Lepanto",
            "Chinjao|Don Chinjao",
            "Boo",
            "Kelly Funk",
            "Bobby Funk",
            "Gambia",
            "Mocha",
            "Brownbeard",
            "Rock",
            "Scotch",
            "Fukaboshi",
            "Ryuboshi",
            "Manboshi",
            "Shyarly|Madam Shyarly",
            "Dosun",
            "Zeo",
            "Daruma",
            "Ikaros Much",
            "Hyouzou|Hyozou",
            "Hammond",
            "Wadatsumi",
            "Surume|Kraken",
            "Aladdin",
            "Caribou",
            "Coribou",
            "Gyro",
            "Albion",
            "Boa Sandersonia|Sandersonia",
            "Boa Marigold|Marigold",
            "Marguerite",
            "Sweet Pea",
            "Aphelandra",
            "Gloriosa|Elder Nyon",
            "Kikyo",
            "Belladonna",
            "Ran",
            "Rindo",
            "Duval",
            "Disco",
            "Peterman",
            "Saint Charlos|Charlos",
            "Saint Rosward|Rosward",
            "Saint Shalria|Shalria",
            "Saint Mjosgard|Mjosgard|Donquixote Mjosgard",
            "Little Oars Jr.|Oars Jr.",
            "Squard",
            "Whitey Bay",
            "Curiel",
            "Blamenco",
            "Rakuyo",
            "Namur",
            "Blenheim",
            "Kingdew",
            "Haruta",
            "Atmos",
            "Speed Jiru",
            "Fossa",
            "Doma",
            "McGuy",
            "Minotaurus",
            "Minorhinoceros",
            "Minokoala",
            "Minozebra",
            "Minochihuahua",
            "Onigumo",
            "Doberman",
            "Strawberry",
            "Yamakaji",
            "Bastille",
            "Dalmatian",
            "Maynard",
            "Stainless",
            "John Giant",
            "Lacroix",
            "Ronse",
            "T-Bone|T Bone",
            "Shu",
            "Very Good",
            "Sharinguru",
            "Victoria Cindry|Cindry",
            "Kumashi",
            "Tararan",
            "Jigoro",
            "Inuppe",
            "Captain John",
            "Risky Brothers",
            "Zambai",
            "Mozu",
            "Kiwi",
            "Tilestone",
            "Peepley Lulu",
            "Yokozuna",
            "Sodom",
            "Gomorrah",
            "Jerry",
            "Wanze",
            "Nero",
            "Spandine",
            "Professor Clover|Clover",
            "Nico Olvia|Olvia",
            "Aisa",
            "Laki",
            "Kamakiri",
            "Braham",
            "Genbo",
            "Pagaya",
            "McKinley",
            "Pierre",
            "Su",
            "Nola",
            "Masira",
            "Shoujou|Shojo",
            "Roshio",
            "Sarquiss|Sarkies",
            "Tonjit",
            "Shelly",
            "Pickles",
            "Big Pan",
            "Capote",
            "Monda",
            "Itomimizu",
            "Toto",
            "Terracotta",
            "Matsuge|Eyelashes",
            "Lassoo|Lasso",
            "Mr. 7|Mr 7",
            "Miss Father's Day",
            "Mr. 9|Mr 9",
            "Mr. 11|Mr 11",
            "Mr. 13|Mr 13",
            "Miss Friday",
            "Chess",
            "Kuromarimo",
            "Chessmarimo",
            "Robson",
            "Negikuma Maria",
            "Higuma",
            "Mohji",
            "Cabaji",
            "Richie",
            "Sham",
            "Buchi",
            "Ninjin",
            "Piiman",
            "Tamanegi",
            "Chouchou|ChouChou|Shushu",
            "Boodle",
            "Gaimon",
            "Sarfunkel",
            "Johnny",
            "Yosaku",
            "Patty",
            "Carne",
            "Pearl",
            "Nezumi",
            "Momoo|Mohmoo",
            "Nako",
            "Ipponmatsu",
            "Daddy Masterson|Daddy the Father",
            "Shachi",
            "Penguin",
            "Jean Bart",
            "Heat",
            "Wire",
            "Pandaman",
            "Limejuice",
            "Bonk Punch",
            "Monster",
            "Building Snake",
            "Hongo",
            "Howling Gab",
            "Gerotini",
            "Sunbell",
            "Seagull Guns Nozdon|Nozdon",
            "Taro",
            "Doringo",
            "Millet Pine",
            "Spencer",
            "Petermoo",
            "Jacksonbanner",
            "Blumarine",
            "Max Marks",
            "Moon Isaac Jr.",
            "Momonora",
            "Silver Axe|Kyo",
            "Ochoku|Wang Zhi",
            "Ganzui",
            "Gill Bastar",
            "Ikkaku",
            "Uni",
            "Clione",
            "Hakugan",
            "Gig",
            "Dive",
            "Bubblegum",
            "Ahiru",
            "Ushiano",
            "Gyogyo",
            "Jiron",
            "Moda",
            "Bunny Joe",
            "Terry Gilteo",
            "Ginny",
            "Clapp",
            "Bekori|King Bekori",
            "Alpha",
            "Connie",
            "Brannew",
            "Comil",
            "Mozambia",
            "Cancer",
            "Kadar",
            "Attach",
            "Ripper",
            "Rokkaku",
            "Ukki",
            "Lines",
            "Pudding Pudding",
            "Pisaro",
            "Take",
            "Shioyaki",
            "Macro",
            "Gyaro",
            "Tansui",
            "Mero",
            "Octopako",
            "Minister of the Left",
            "Minister of the Right",
            "Den",
            "Maria Napole",
            "Ishilly",
            "Hiramera",
            "Seira",
            "Meroie",
            "Kairen",
            "Yama",
            "Hotori",
            "Kotori",
            "Fuza",
            "Holy",
            "Kashigami",
            "Mousse",
            "Herb",
            "Seto",
            "Mayushika",
            "Warashi",
            "Isa",
            "Amazon",
            "Moyle",
            "Goro",
            "Dr. Tsukimi|Tsukimi",
            "Spacey",
            "Cosmo",
            "Galaxy",
            "Captain Seamars|Seamars",
            "Hyota",
            "Brahm",
            "Arrow",
            "Barrel",
            "Farafra",
            "Erik",
            "Kebi",
            "Okame",
            "Kappa",
            "Stomp",
            "Ivan X",
            "Cowboy",
            "Bourbon Jr.",
            "Kentauros",
            "Hikoichi",
            "Scissors",
            "Banchi",
            "Miss Catherina",
            "Mr. Beans|Beans",
            "Puppu",
            "Spoil",
            "Gyoro",
            "Nin",
            "Bao",
            "Buhichuck",
            "Hippo Gentleman",
            "Cerberus",
            "Unigaro",
            "MocDonald",
            "Motzel",
            "Baskerville",
            "Kerville",
            "Bas",
            "Princess",
            "Gatherine",
            "Michael",
            "Hoichael",
            "Schollzo",
            "Mikazuki",
            "Jorge",
            "Corgi",
            "Tamagon",
            "Kiev",
            "Kop",
            "Stevie",
            "Torto",
            "Bluejam",
            "Porchemy",
            "Dogra",
            "Magra",
            "Minatomo",
            "Sabagashira",
            "Outlook III",
            "Didit",
            "Sterry|Stelly|King Sterry",
            "Sarie Nantokanette",
            "Naguri",
            "Batchee",
            "Moodie",
            "Motobaro",
            "Epoida",
            "Decalvan Brothers",
            "A.O",
            "Delacuaji",
            "Zodia",
            "Palms",
            "Bizarre",
            "Blondie",
            "Karma",
            "Amadob",
            "Islewan",
            "Andre",
            "Hangan",
            "Ninth",
            "Reforte",
            "Pavlik",
            "Ramba",
            "Elmy",
            "Agsilly",
            "Brew",
            "Choi",
            "Arthur",
            "Nosgarl",
            "Lip Doughty",
            "Demaro Black|Fake Luffy",
            "Chocolat",
            "Manjaro",
            "Drip",
            "Turco",
            "Cocoa",
            "Mounblutain",
            "Nora Gitsune",
            "Haredas",
            "Heracles|Heracles'n",
            "Shanba",
            "Kitton",
            "Taroimo",
            "Pekkori",
            "Tibany|Elizabeth",
            "Caroline",
            "Soran",
            "Kinderella",
            "Musshuru",
            "Saga",
            "Gasparde",
            "Baron Omatsuri",
            "Byrnndi World",
            "Patrick Redfield",
            "Carina",
            "Baccarat",
            "Dice",
            "Tanaka",
            "Buena Festa",
            "Ann",
            "Gordon",
            "Tot Musica",
            "Jonathan|Vice Admiral Jonathan",
            "Jessica",
            "Apis",
            "Nelson Royale",
            "Eric",
            "Zenny",
            "Henzo",
            "Wetton",
            "Komei",
            "Don Accino",
            "Breed",
            "Bill",
            "Mad Treasure",
            "Grount",
            "Cidre",
            "Pandawoman",
            "Tomato Gang",
            "Unforgivable Mask",
            "Charlotte Newshi|Newshi",
            "Charlotte Tablet|Tablet",
            "Charlotte Saint-Marc|Saint-Marc",
            "Charlotte Dacquoise|Dacquoise",
            "Charlotte Laurin|Laurin",
            "Charlotte Montb|Montb",
            "Charlotte High-Fat|High-Fat",
            "Charlotte Compo|Compo",
            "Charlotte Normande|Normande",
            "Charlotte Mozart|Mozart",
            "Charlotte Marnier|Marnier",
            "Charlotte Panna|Panna",
            "Charlotte Hachis|Hachis",
            "Charlotte Gala|Gala",
            "Charlotte Nutmeg|Nutmeg",
            "Charlotte Akimeg|Akimeg",
            "Charlotte Allmeg|Allmeg",
            "Charlotte Harumeg|Harumeg",
            "Charlotte Fuyumeg|Fuyumeg",
            "Pandora",
            "Nitro",
            "Rabiyan",
            "Noble Croc",
            "Acilia",
            "Meadows",
            "Rolling Logan",
            "Mummy",
            "Damask",
            "Spartan",
            "Gatz",
            "Kyuin",
            "Bomba",
            "Bobomba",
            "Cotton",
            "Inhel",
            "Chao",
            "Maujii",
            "Nure-Onna",
            "Yatappe",
            "Omasa",
            "Tsunagoro",
            "Cho",
            "Kuni",
            "Kakuji",
            "Suke",
            "Bingo",
            "Bongo",
            "Bungo",
            "Some|Osome",
            "Chuji",
            "Chome",
            "Buhihomaru",
            "Tenguyama",
            "Hihimaru",
            "Komachiyo",
            "Nora",
            "Yurikah",
            "Kyuji",
            "Komane"
        ],
        luffillion: [
            "Ahho Desunen IX|Ahho Desunen"
        ]
    }
};
}),
"[project]/src/data/bank/crews.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREWS_QUESTION",
    ()=>CREWS_QUESTION
]);
const CREWS_QUESTION = {
    id: "crews",
    prompt: "Name a pirate crew or organization.",
    hint: "Pirate crews, Marine units, World Government branches, Cipher Pol, armies, families, or alliances.",
    tiers: {
        common: [
            "Straw Hat Pirates|Straw Hats|Straw Hat Crew|Mugiwara Pirates",
            "Marines|Marine|Navy",
            "World Government",
            "Revolutionary Army|Revolutionaries",
            "Whitebeard Pirates",
            "Red Hair Pirates|Red-Haired Pirates",
            "Roger Pirates",
            "Blackbeard Pirates",
            "Big Mom Pirates",
            "Beast Pirates|Animal Kingdom Pirates"
        ],
        uncommon: [
            "Rocks Pirates",
            "Cross Guild",
            "Heart Pirates",
            "Kid Pirates",
            "Donquixote Pirates|Donquixote Family",
            "Buggy Pirates",
            "Arlong Pirates",
            "Kuja Pirates",
            "Sun Pirates",
            "Baroque Works",
            "Celestial Dragons|World Nobles",
            "Cipher Pol",
            "CP9|Cipher Pol 9",
            "CP0|CP-AIGIS0|Cipher Pol 0",
            "Seven Warlords of the Sea|Shichibukai|Warlords",
            "Four Emperors|Yonko",
            "Worst Generation|Eleven Supernovas|Supernovas",
            "Five Elders|Gorosei",
            "Straw Hat Grand Fleet|Grand Fleet",
            "Germa 66"
        ],
        rare: [
            "SWORD",
            "Holy Knights|God's Knights",
            "Seraphim",
            "Pacifista",
            "SSG|Special Science Group",
            "MADS",
            "Impel Down",
            "Barto Club",
            "Beautiful Pirates",
            "Happo Navy",
            "Tontatta Pirates|Tonta Corps",
            "New Giant Warrior Pirates",
            "Giant Warrior Pirates",
            "Yonta Maria Grand Fleet",
            "Ideo Pirates|XXX Gym Martial Arts Alliance",
            "Bonney Pirates",
            "Hawkins Pirates",
            "On Air Pirates",
            "Drake Pirates",
            "Fire Tank Pirates",
            "Fallen Monk Pirates",
            "Spade Pirates",
            "Rumbar Pirates",
            "Thriller Bark Pirates",
            "Golden Lion Pirates",
            "Foxy Pirates",
            "Bellamy Pirates",
            "Black Cat Pirates",
            "Krieg Pirates|Pirate Armada",
            "Alvida Pirates",
            "Usopp Pirates",
            "New Fish-Man Pirates|New Fishman Pirates",
            "Flying Pirates",
            "Caribou Pirates",
            "Galley-La Company|Galley-La",
            "Franky Family",
            "Nine Red Scabbards|Akazaya Nine|Red Scabbards",
            "Kozuki Family|Kozuki Clan",
            "Tobiroppo|Flying Six",
            "All-Stars|Lead Performers|Disasters",
            "Sweet Commanders|Three Sweet Generals",
            "Charlotte Family",
            "Vinsmoke Family",
            "Nefertari Family",
            "Dadan Family|Mountain Bandits",
            "Buggy's Delivery",
            "Neo Marines",
            "Saruyama Alliance",
            "Masira Pirates",
            "Shoujou Pirates",
            "Bliking Pirates",
            "Bluejam Pirates",
            "Rolling Pirates",
            "Brownbeard Pirates",
            "Macro Pirates",
            "Cook Pirates",
            "Roshio Pirates",
            "Barto Club Alliance",
            "Ninja-Pirate-Mink-Samurai Alliance",
            "Heart-Straw Hat Alliance"
        ],
        epic: [
            "Kurozumi Family|Kurozumi Clan",
            "Shimotsuki Family|Shimotsuki Clan",
            "Oniwabanshu",
            "Mimawarigumi",
            "Numbers",
            "Shinuchi|Headliners",
            "Gifters",
            "Pleasures",
            "Waiters",
            "Armored Division",
            "Marys",
            "Inuarashi Musketeer Squad|Musketeer Squad",
            "Guardians|Whale Forest Guardians",
            "Shandia|Shandians",
            "God's Army",
            "White Berets",
            "Alabasta Royal Guard",
            "Tsumegeri Guard",
            "Rebel Army|Alabasta Rebel Army",
            "Super Spot-Billed Duck Troops",
            "Kung-Fu Dugongs",
            "Bananawani",
            "Isshi-20|Twenty MDs",
            "Sakura Kingdom Royal Guard",
            "Ryugu Royal Army|Neptune Army",
            "Riku Royal Army",
            "Corrida Colosseum Gladiators",
            "Chinjao Family",
            "Yeti Cool Brothers",
            "Caesar's Patrol Unit",
            "Ten Titanic Captains|Titanic Captains",
            "CP8|Cipher Pol 8",
            "CP7|Cipher Pol 7",
            "CP6|Cipher Pol 6",
            "CP5|Cipher Pol 5",
            "G-5 Marines",
            "G-8 Marines",
            "Giant Squad",
            "World Economic Journal|World Economy News Paper",
            "Fake Straw Hat Crew|Fake Straw Hats",
            "Duval's Rosy Life Riders|Rosy Life Riders|Flying Fish Riders",
            "Higuma Bandits",
            "Space Pirates",
            "World Pirates",
            "Red Arrows Pirates",
            "Gasparde Pirates",
            "Amigo Pirates",
            "Trump Pirates",
            "Silver Mine Alliance",
            "Cidre Guild",
            "Candy Pirates",
            "Peachbeard Pirates",
            "Gyro Pirates",
            "Nox Pirates",
            "Phoenix Pirates",
            "Yes Pirates",
            "Barrels Pirates|Diez Barrels Pirates",
            "Wetton Pirates",
            "Pumpkin Pirates",
            "Zenny Pirates",
            "Accino Family",
            "Moustache Pirates",
            "Big Helmet Pirates",
            "New Age Pirates",
            "Hound Pets",
            "Risky Brothers Pirates",
            "Long Long Pirates",
            "Puddle Pirates",
            "Kibagaeru Pirates",
            "Masked Deuce's Crew",
            "Whitey Bay's Crew",
            "Decalvan Brothers Crew",
            "Maelstrom Spider Pirates|Squard's Crew",
            "Kyo's Crew",
            "Ramba's Crew",
            "Epoida's Crew",
            "Bonney's Sorbet Crew",
            "Tontatta Recon Squad",
            "Pink Bee Squad",
            "Yellow Kabu Squad",
            "Kyoshiro Family",
            "Yakuza of Wano",
            "Billions",
            "Millions",
            "Officer Agents",
            "Frontier Agents",
            "Unluckies",
            "Blugori|Blue Gorillas",
            "Jailer Beasts",
            "Demon Guards",
            "Newkama",
            "Okama",
            "Automata",
            "Bounty Hunters of Whisky Peak",
            "Gally Pirates",
            "Ganzack Pirates",
            "Crown Island Animals",
            "Treasure Pirates|Mad Treasure Pirates",
            "Gran Tesoro Security",
            "Chess Peacekeepers|Totto Land Chess Soldiers",
            "Homies",
            "Germa Clone Army",
            "Kano Kingdom Navy",
            "Gorgon Sisters",
            "ASL|Ace Sabo Luffy",
            "Bell-mere's Family",
            "Ohara Archaeologists|Tree of Knowledge Scholars"
        ],
        luffillion: [
            "Tulip Pirates"
        ]
    }
};
}),
"[project]/src/data/bank/curated/characters.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CURATED_CHARACTERS",
    ()=>CURATED_CHARACTERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/names.ts [app-route] (ecmascript)");
;
const CURATED_CHARACTERS = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-impel-down", "Name a character who has appeared in Impel Down.", "Prisoners, guards, wardens, or anyone who set foot inside.", "Luffy, Ace, Buggy, Crocodile, BonClay, Ivankov, Magellan, Jinbe, Hannyabal, Blackbeard, Mr3, Inazuma, Sadie, Shiryu, Domino, Saldeath, Daz, Hancock, Shiki, Devon, Wolf, Shot, Burgess, Augur, Laffitte, DocQ, Hody, Weevil, Momonga, Sengoku, Mr11, Cabaji, Mohji, Minotaurus, Minorhinoceros, Minokoala, Minozebra, Minochihuahua, Bluejam, Douglas Bullet", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-straw-hats", "Name a character who has been part of the Straw Hat Pirates.", "Official crew, plus allies who sailed with them.", "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Vivi, Karoo|Carue, Yamato, Momonosuke, Kinemon, Carrot, Pedro, Going Merry|Merry", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-worst-generation", "Name a member of the Worst Generation.", "The Supernovas at Sabaody, plus Blackbeard.", "Luffy, Law, Kid, Zoro, Killer, Bonney, Blackbeard, Hawkins, Drake, Bege, Apoo, Urouge", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-has-bounty", "Name a character who has a bounty.", "Anyone who has had a bounty placed on them.", "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Shanks, Blackbeard, Kaido, BigMom, Whitebeard, Roger, Ace, Law, Kid, Mihawk, Crocodile, Buggy, Doflamingo, Hancock, Marco, Katakuri, Arlong, Kuro, Krieg, Alvida, Bonney, Killer, Hawkins, Drake, Bege, Apoo, Urouge, Weevil, Cavendish, Bartolomeo, Bellamy, Foxy, Kuma, Moria, King, Queen, Jack, Smoothie, Cracker, Perospero, Oven, Daifuku, Shiryu, Burgess, Augur, Laffitte, DocQ, Devon, Wolf, Shot, Pizarro, Dragon, Sabo, Ivankov, Yamato, Ulti, PageOne, Hody, Ideo, Leo, Sai, Chinjao, Orlumbus, Hajrudin, Abdullah, Jeet, Blue Gilly, Elizabello, Gin, Chew, Kuroobi, Hatchan, Jango, Masira, Shoujou, Porche, Squard, Whitey Bay, Bluejam, Bakkin|Buckingham Stussy", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-warlords", "Name a member of the Seven Warlords of the Sea.", "Anyone who held a Warlord seat before the system was abolished.", "Mihawk, Hancock, Doflamingo, Crocodile, Kuma, Moria, Law, Jinbe, Blackbeard, Buggy, Weevil, Hanafuda", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-marines", "Name a character who has been a Marine.", "Current or former Marines of any rank.", "Garp, Akainu, Aokiji, Kizaru, Koby, Smoker, Fujitora, Ryokugyu, Sengoku, Tashigi, Helmeppo, Tsuru, Kong, Zephyr, Momonga, Sentomaru, Hina, Corazon, Vergo, Drake, Saul, Bogard, Grus, Kujaku, Hibari, Gion, Tokikake, Doll, Onigumo, Strawberry, Doberman, Yamakaji, Bastille, Dalmatian, Comil, Lacroix, TBone, Fullbody, Morgan, Nezumi, Jango, Brannew, Attach, Very Good, Mozambia, Cancer, Rokkaku, Ripper, Shu, Maynard, John Giant, Stainless, Kadar, Jonathan|Vice Admiral Jonathan", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-blackbeard-pirates", "Name a member of the Blackbeard Pirates.", "Blackbeard and his Ten Titanic Captains.", "Blackbeard, Burgess, Laffitte, Augur, DocQ, Shiryu, Aokiji, Devon, Wolf, Shot, Pizarro, Stronger", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-red-hair-pirates", "Name a member of the Red Hair Pirates.", "Shanks and his crew, past or present.", "Shanks, Beckman, Roux, Yasopp, Uta, Rockstar, Limejuice, Bonk Punch, Monster, Building Snake, Hongo, Howling Gab", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-whitebeard-pirates", "Name a member of the Whitebeard Pirates.", "Whitebeard, his division commanders, and crew.", "Whitebeard, Marco, Ace, Jozu, Vista, Thatch, Izou, Blackbeard, Oden, Blamenco, Rakuyo, Namur, Blenheim, Curiel, Kingdew, Haruta, Atmos, Speed Jiru, Fossa, Kinemon, Kanjuro, Weevil, Bakkin|Buckingham Stussy", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fought-luffy", "Name a character who has fought Luffy.", "Anyone who has traded blows with Luffy on screen.", "Kaido, Katakuri, Doflamingo, Crocodile, Enel, Lucci, Arlong, Moria, BigMom, Buggy, Kuro, Krieg, Alvida, Morgan, Wapol, Mr3, Smoker, Akainu, Kizaru, Aokiji, Fujitora, Hody, Blackbeard, Magellan, Bellamy, Caesar, Cracker, Foxy, Oars, Absalom, Garp, Koby, Zoro, Usopp, Saturn, Lilith, Ryokugyu, Ulti, WhosWho, Hawkins, Kid, Shiki, BonClay, Burgess, Sabo, Perospero, Wadatsumi, Hannyabal, Decken, Satori, Gedatsu, Ohm, Shura, Wyper, GanFall, Mohji, Cabaji, Jango, Mr5, Sugar, Chew, Kuroobi, Pandaman", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fought-zoro", "Name a character who has fought Zoro.", "Anyone Zoro has crossed swords with on screen.", "Mihawk, King, Kaku, Pica, Daz, Hody, Ryuma, Kuma, Oars, Kuro, Cabaji, Jango, Mr5, Hatchan, Ohm, Shura, Mr3, Smoker, Tashigi, Kizaru, Lucci, Fujitora, Kinemon, Sanji, Luffy, Kaido, Absalom, Kumadori, Miss Monday, Mr9, Valentine, Mr. 7, Chaka, Kuina, Chew, Gin, Morgan, Kalifa, Yamato, WhosWho, Jack, Hyogoro, Ushimaru|Shimotsuki Ushimaru, Monet, Onimaru|Gyukimaru, Daifugo, Babanuki", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-female", "Name a female character in One Piece.", "Any female character.", "Nami, Robin, Hancock, Vivi, Yamato, BigMom, Perona, Tashigi, Uta, Shirahoshi, Bonney, Carrot, Rebecca, Koala, Hina, Pudding, Makino, Kaya, Kuina, Bellmere, Nojiko, Kureha, Alvida, Kalifa, Monet, Viola, Sugar, Baby5, Hiyori, Kiku, Tama, Otohime, Camie, Conis, Smoothie, Brulee, Lola, Chiffon, Tsuru, Shakuyaku|Shakky, Toki, Shinobu, Ulti, BlackMaria, Valentine, Doublefinger, Goldenweek, MerryXmas, Porche, BeloBetty, Rouge, Olvia, Kujaku, Hibari, Doll, Bluegrass, Gion, Lilith, Mansherry, Kokoro, Chimney, Aisa, Laki, Rindo, Ran, Marguerite, Sweet Pea, Aphelandra, Kikyo, Belladonna, Gloriosa|Elder Nyon, Boa Sandersonia|Sandersonia, Boa Marigold|Marigold, Shalria, Vinsmoke Reiju|Reiju, Vinsmoke Sora|Sora, Charlotte Amande|Amande, Charlotte Galette|Galette, Charlotte Praline|Praline, Charlotte Flampe|Flampe, Shyarly|Madam Shyarly, Ishilly, Kairen, Seira, Meroie, Hiramera, Victoria Cindry|Cindry, Miss Catherina", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"])
];
}),
"[project]/src/data/bank/curated/characters2.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CURATED_CHARACTERS_2",
    ()=>CURATED_CHARACTERS_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/names.ts [app-route] (ecmascript)");
;
const CURATED_CHARACTERS_2 = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-uses-sword", "Name a character who uses a sword.", "Swordsmen and swordswomen of any kind.", "Zoro, Mihawk, Brook, Kinemon, Shanks, Tashigi, Oden, Ryuma, Kuina, Kaku, Fujitora, Cavendish, Vista, Kyros, Rebecca, Law, Kawamatsu, Denjiro, Raizo, Izou, Shiryu, Killer, Cracker, Smoothie, Diamante, Pica, Hody, Hatchan, Cabaji, Hyouzou, Gladius, Momonga, Yasuie, Kanjuro, Kiku, Hawkins, Tokikake, Rayleigh, Saturn, Nusjuro, Garling, Shamrock, Elizabello, Onigumo, TBone, Bastille, Gion, Hyogoro, Charlotte Amande|Amande, Shimotsuki Kozaburo|Kozaburo, Koushirou|Koshiro, Mr. 7", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-wears-hat", "Name a character who wears a hat.", "Any hat, helmet, or cap worn regularly.", "Luffy, Shanks, Ace, Law, Chopper, Sabo, Roger, Smoker, Buggy, Mihawk, Brook, Kizaru, Garp, Bege, Apoo, Weevil, BigMom, Moria, Koby, Helmeppo, Kuma, Cavendish, Hawkins, Drake, Absalom, Perona, Bartolomeo, Lucci, Morgan, Krieg, Gin, Pearl, Wapol, Igaram, Mr3, Foxy, Senor, Machvise, Kureha, Chimney, Hiriluk, Dalton, Pandaman", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-died", "Name a character who has died in the series.", "Characters who died on screen or in the story's past.", "Ace, Whitebeard, Roger, Oden, Corazon, Bellmere, Hiriluk, Kuina, Thatch, Otohime, FisherTiger, Toki, Olvia, Clover, Noland, Kalgara, Yasuie, Rouge, Ryuma, Xebec, Pedro, Cobra, Kanjuro, Monet, Orochi, Vinsmoke Sora|Sora, Ginny, Mother Carmel|Carmel, Donquixote Homing|Homing, Shimotsuki Ushimaru|Ushimaru, Kurozumi Higurashi|Higurashi, Scarlet, Yorki, Lami", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-royalty", "Name a character who has been a king or queen.", "Kings, queens, and empresses who have ruled a nation.", "Cobra, Neptune, Wapol, Doflamingo, Riku Doldo III|Riku|King Riku, Hancock, BigMom, Vinsmoke Judge|Judge, Kuma, Elizabello, Dalton, Otohime, Sterry|King Sterry, Harald|King Harald, Nefertari Titi|Titi", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-imprisoned", "Name a character who has been imprisoned.", "Locked up in a prison, cell, or labor camp at some point.", "Luffy, Ace, Jinbe, Crocodile, BonClay, Buggy, Mr3, Kid, Doflamingo, Shiki, Kinemon, Hyogoro, Momonosuke, Robin, Hody, Arlong, Daz, Caesar, Hancock, FisherTiger, Koala, Kuma, Shiryu, Devon, Wolf, Shot, Pizarro, Douglas Bullet, Kalgara, Noland, Decken, Mr11", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-ate-fruit", "Name a character who has eaten a Devil Fruit.", "Any confirmed Devil Fruit user, past or present.", "Luffy, Chopper, Robin, Brook, Ace, Law, Blackbeard, Whitebeard, Doflamingo, Crocodile, Enel, Kaido, BigMom, Katakuri, Hancock, Smoker, Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, Buggy, Moria, Kuma, Marco, Sabo, Yamato, Kid, Lucci, Kaku, Perona, Absalom, Caesar, Momonosuke, Sugar, Monet, Bonney, Bartolomeo, Pudding, Cracker, Smoothie, Perospero, Brulee, Oven, Daifuku, Kanjuro, Orochi, Queen, King, Jack, Ulti, PageOne, Magellan, Ivankov, BonClay, Mr3, Daz, Mr5, Valentine, Drake, Hawkins, Apoo, Bege, Senor, Diamante, Pica, Trebol, Baby5, Machvise, Buffalo, Gladius, Dellinger, Corazon, Wapol, Foxy, Kalifa, Jabra, Blueno, Spandam, Hody, Shiryu, Burgess, Augur, Devon, Pizarro, Sengoku, Tsuru, Momonga, Kujaku, Grus, Bluegrass, Shiki, Toki, Kiku, Saturn, Garling, Laffitte, Mr4, MerryXmas, Mansherry, Pekoms, Carmel|Mother Carmel, Stronger", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-haki", "Name a character who has used Haki.", "Any confirmed user of Observation, Armament, or Conqueror's Haki.", "Luffy, Zoro, Sanji, Shanks, Rayleigh, Kaido, BigMom, Whitebeard, Roger, Garp, Katakuri, Yamato, Oden, Ace, Sabo, Law, Kid, Hancock, Mihawk, Doflamingo, Usopp, Koby, Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, Smoker, Marco, King, Queen, Jack, Lucci, Vergo, Blackbeard, Killer, Jinbe, Kinemon, Kiku, Raizo, Kawamatsu, Denjiro, Ashura, Izou, Hyogoro, Cracker, Perospero, Pudding, Brulee, Momonga, Sentomaru, Helmeppo, Tashigi, Sengoku, Tsuru, Shiryu, Burgess, Cavendish, Bartolomeo, Bellamy, Rebecca, Kyros, Diamante, Pica, Trebol, Hawkins, Drake, Apoo, Bege, Urouge, Bonney, Saturn, Garling, Shamrock, Uta, Beckman, Roux, Yasopp, Rockstar, Viola, Sanji, Wyper, Enel, Satori, Aisa, Conis, Gan Fall|GanFall, Ohm, Shura, Gedatsu, Kalgara", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-east-blue", "Name a character who has appeared in the East Blue Saga.", "From Romance Dawn through Loguetown.", "Luffy, Zoro, Nami, Usopp, Sanji, Shanks, Buggy, Arlong, Koby, Helmeppo, Smoker, Tashigi, Mihawk, Kuro, Krieg, Alvida, Morgan, Zeff, Makino, Kaya, Bellmere, Nojiko, Genzo, Gin, Hatchan, Chew, Kuroobi, Dragon, Kuina, Jango, Cabaji, Mohji, Beckman, Roux, Yasopp, Gaimon, Patty, Carne, Pearl, Fullbody, Johnny, Yosaku, Merry, Ninjin, Piiman, Tamanegi, Nezumi, Woop Slap, Higuma, Chouchou, Boodle, Richie, Sham, Buchi, Daddy Masterson|Daddy the Father, Ririka, Rika", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"])
];
}),
"[project]/src/data/bank/curated/names.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>C,
    "D",
    ()=>D,
    "ranked",
    ()=>ranked
]);
const D = {
    Luffy: "Monkey D. Luffy|Luffy|Straw Hat Luffy",
    Zoro: "Roronoa Zoro|Zoro",
    Nami: "Nami",
    Usopp: "Usopp|Sogeking",
    Sanji: "Sanji|Vinsmoke Sanji|Black Leg Sanji",
    Chopper: "Tony Tony Chopper|Chopper",
    Robin: "Nico Robin|Robin|Miss All Sunday",
    Franky: "Franky|Cutty Flam",
    Brook: "Brook|Soul King",
    Jinbe: "Jinbe|Jimbei",
    Ace: "Portgas D. Ace|Ace|Fire Fist Ace",
    Sabo: "Sabo",
    Shanks: "Shanks|Red-Haired Shanks|Red Hair Shanks",
    Law: "Trafalgar Law|Law|Trafalgar D. Water Law",
    Kid: "Eustass Kid|Kid|Captain Kid",
    Hancock: "Boa Hancock|Hancock",
    Kaido: "Kaido|Kaidou",
    BigMom: "Big Mom|Charlotte Linlin|Linlin",
    Blackbeard: "Marshall D. Teach|Blackbeard|Teach",
    Whitebeard: "Whitebeard|Edward Newgate|Newgate",
    Roger: "Gol D. Roger|Roger|Gold Roger",
    Garp: "Monkey D. Garp|Garp",
    Dragon: "Monkey D. Dragon|Dragon",
    Rayleigh: "Silvers Rayleigh|Rayleigh",
    Mihawk: "Dracule Mihawk|Mihawk|Hawk-Eyes",
    Doflamingo: "Donquixote Doflamingo|Doflamingo|Doffy",
    Crocodile: "Crocodile|Sir Crocodile|Mr. 0",
    Buggy: "Buggy|Buggy the Clown",
    Smoker: "Smoker",
    Koby: "Koby|Coby",
    Akainu: "Akainu|Sakazuki",
    Aokiji: "Aokiji|Kuzan",
    Kizaru: "Kizaru|Borsalino",
    Fujitora: "Fujitora|Issho",
    Ryokugyu: "Ryokugyu|Aramaki|Green Bull",
    Sengoku: "Sengoku",
    Kuma: "Bartholomew Kuma|Kuma",
    Moria: "Gecko Moria|Moria",
    Marco: "Marco|Marco the Phoenix",
    Katakuri: "Charlotte Katakuri|Katakuri",
    Yamato: "Yamato",
    Oden: "Kozuki Oden|Oden",
    Lucci: "Rob Lucci|Lucci",
    Enel: "Enel|Eneru",
    Arlong: "Arlong",
    Bonney: "Jewelry Bonney|Bonney",
    Vegapunk: "Dr. Vegapunk|Vegapunk",
    BonClay: "Bon Clay|Mr. 2|Bentham",
    Ivankov: "Emporio Ivankov|Ivankov|Iva",
    Corazon: "Donquixote Rosinante|Corazon|Rosinante",
    Vivi: "Nefertari Vivi|Vivi|Miss Wednesday",
    Caesar: "Caesar Clown|Caesar",
    Killer: "Killer",
    Hawkins: "Basil Hawkins|Hawkins",
    Drake: "X Drake|Drake",
    Apoo: "Scratchmen Apoo|Apoo",
    Bege: "Capone Bege|Bege",
    Urouge: "Urouge",
    King: "King|Alber",
    Queen: "Queen",
    Jack: "Jack",
    Weevil: "Edward Weevil|Weevil",
    Tashigi: "Tashigi",
    Helmeppo: "Helmeppo",
    Hina: "Hina",
    Tsuru: "Tsuru",
    Momonga: "Momonga",
    Kong: "Kong",
    Zephyr: "Zephyr|Z",
    Magellan: "Magellan",
    Hannyabal: "Hannyabal",
    Shiryu: "Shiryu",
    Burgess: "Jesus Burgess|Burgess",
    Augur: "Van Augur|Augur",
    Laffitte: "Laffitte",
    DocQ: "Doc Q",
    Devon: "Catarina Devon|Devon",
    Wolf: "Sanjuan Wolf",
    Shot: "Vasco Shot",
    Pizarro: "Avalo Pizarro|Pizarro",
    Beckman: "Benn Beckman|Beckman",
    Roux: "Lucky Roux|Lucky Roo",
    Yasopp: "Yasopp",
    Rockstar: "Rockstar",
    Uta: "Uta",
    Jozu: "Jozu|Diamond Jozu",
    Vista: "Vista",
    Thatch: "Thatch",
    Izou: "Izou|Izo",
    Kinemon: "Kin'emon|Kinemon",
    Momonosuke: "Kozuki Momonosuke|Momonosuke|Momo",
    Kanjuro: "Kurozumi Kanjuro|Kanjuro",
    Kiku: "Kikunojo|O-Kiku|Kiku",
    Hiyori: "Kozuki Hiyori|Hiyori|Komurasaki",
    Orochi: "Kurozumi Orochi|Orochi",
    Perona: "Perona",
    Absalom: "Absalom",
    Hogback: "Dr. Hogback|Hogback",
    Bellamy: "Bellamy",
    Cavendish: "Cavendish",
    Bartolomeo: "Bartolomeo",
    Hody: "Hody Jones|Hody",
    Pudding: "Charlotte Pudding|Pudding",
    Cracker: "Charlotte Cracker|Cracker",
    Smoothie: "Charlotte Smoothie|Smoothie",
    Perospero: "Charlotte Perospero|Perospero",
    Oven: "Charlotte Oven|Oven",
    Daifuku: "Charlotte Daifuku|Daifuku",
    Brulee: "Charlotte Brulee|Brulee",
    Kuro: "Kuro|Captain Kuro|Klahadore",
    Krieg: "Don Krieg|Krieg",
    Alvida: "Alvida",
    Morgan: "Morgan|Axe-Hand Morgan|Captain Morgan",
    Wapol: "Wapol",
    Pell: "Pell",
    Chaka: "Chaka",
    Cobra: "Nefertari Cobra|Cobra",
    Daz: "Daz Bonez|Mr. 1",
    Mr3: "Galdino|Mr. 3",
    Zeff: "Zeff|Red-Leg Zeff",
    Kureha: "Dr. Kureha|Kureha|Doctorine",
    Pedro: "Pedro",
    Carrot: "Carrot",
    Inuarashi: "Inuarashi|Duke Dogstorm",
    Nekomamushi: "Nekomamushi|Master Cat Viper",
    Shirahoshi: "Shirahoshi",
    Neptune: "Neptune|King Neptune",
    FisherTiger: "Fisher Tiger",
    Hatchan: "Hatchan|Hachi",
    Camie: "Camie|Keimi",
    Kyros: "Kyros",
    Rebecca: "Rebecca",
    Viola: "Viola|Violet",
    Sugar: "Sugar",
    Diamante: "Diamante",
    Pica: "Pica",
    Trebol: "Trebol",
    Vergo: "Vergo",
    Monet: "Monet",
    Senor: "Senor Pink",
    LaoG: "Lao G",
    Machvise: "Machvise",
    Dellinger: "Dellinger",
    Baby5: "Baby 5|Baby Five",
    Buffalo: "Buffalo",
    Gladius: "Gladius",
    Sai: "Sai",
    Ideo: "Ideo",
    Leo: "Leo",
    Mansherry: "Mansherry",
    Spandam: "Spandam",
    Kaku: "Kaku",
    Jabra: "Jabra",
    Blueno: "Blueno",
    Kalifa: "Kalifa",
    Kumadori: "Kumadori",
    Fukurou: "Fukurou",
    Stussy: "Stussy",
    Ulti: "Ulti",
    PageOne: "Page One",
    WhosWho: "Who's-Who|Whos Who",
    BlackMaria: "Black Maria",
    Sasaki: "Sasaki",
    Holdem: "Holdem",
    Kawamatsu: "Kawamatsu",
    Denjiro: "Denjiro",
    Raizo: "Raizo",
    Ashura: "Ashura Doji",
    Inazuma: "Inazuma",
    Koala: "Koala",
    Hack: "Hack",
    Morley: "Morley",
    BeloBetty: "Belo Betty",
    Lindbergh: "Lindbergh",
    Karasu: "Karasu",
    Wyper: "Wyper|Wiper",
    GanFall: "Gan Fall",
    Conis: "Conis",
    Noland: "Mont Blanc Noland|Noland",
    Cricket: "Mont Blanc Cricket|Cricket",
    Kalgara: "Kalgara",
    Foxy: "Foxy",
    Dorry: "Dorry",
    Brogy: "Brogy",
    Oars: "Oars",
    Squard: "Squard",
    Shiki: "Shiki|Golden Lion Shiki",
    Gaban: "Scopper Gaban|Gaban",
    Crocus: "Crocus",
    Xebec: "Rocks D. Xebec|Xebec|Rocks",
    Saturn: "Saint Jaygarcia Saturn|Saturn",
    Imu: "Imu",
    Saul: "Jaguar D. Saul|Saul",
    Olvia: "Nico Olvia|Olvia",
    Clover: "Professor Clover|Clover",
    Tom: "Tom",
    Iceburg: "Iceburg",
    Paulie: "Paulie",
    Kokoro: "Kokoro",
    Hajrudin: "Hajrudin",
    Kujaku: "Kujaku",
    Grus: "Prince Grus|Grus",
    Garling: "Saint Figarland Garling|Garling",
    Shamrock: "Figarland Shamrock|Shamrock",
    Lilith: "Lilith",
    York: "York",
    Atlas: "Atlas",
    Edison: "Edison",
    Pythagoras: "Pythagoras",
    Shaka: "Shaka",
    Loki: "Loki",
    Kashii: "Kashii",
    Oimo: "Oimo",
    Pekoms: "Pekoms",
    Bepo: "Bepo",
    Tamago: "Tamago|Baron Tamago",
    Lola: "Charlotte Lola|Lola",
    Chiffon: "Charlotte Chiffon|Chiffon",
    Gin: "Gin",
    Kaya: "Kaya",
    Makino: "Makino",
    Dadan: "Curly Dadan|Dadan",
    Kuina: "Kuina",
    Bellmere: "Bell-mere|Bellemere",
    Nojiko: "Nojiko",
    Genzo: "Genzo",
    Chew: "Chew",
    Kuroobi: "Kuroobi",
    Mr5: "Mr. 5|Gem",
    Valentine: "Miss Valentine",
    Doublefinger: "Miss Doublefinger|Zala",
    Goldenweek: "Miss Goldenweek",
    Mr4: "Mr. 4",
    MerryXmas: "Miss Merry Christmas",
    Igaram: "Igaram|Mr. 8",
    Koza: "Koza|Kohza",
    Hiriluk: "Dr. Hiriluk|Hiriluk",
    Dalton: "Dalton",
    Rouge: "Portgas D. Rouge|Rouge",
    Charlos: "Saint Charlos|Charlos",
    Rosward: "Saint Rosward|Rosward",
    Shalria: "Saint Shalria|Shalria",
    Mjosgard: "Donquixote Mjosgard|Mjosgard",
    Otohime: "Otohime",
    Fukaboshi: "Fukaboshi",
    Decken: "Vander Decken IX|Vander Decken",
    Wadatsumi: "Wadatsumi",
    Aladdin: "Aladdin",
    Hyogoro: "Hyogoro",
    Tama: "Tama|O-Tama",
    Toki: "Kozuki Toki|Toki",
    Ryuma: "Shimotsuki Ryuma|Ryuma",
    Yasuie: "Shimotsuki Yasuie|Yasuie",
    Shinobu: "Shinobu",
    Gion: "Gion|Momousagi",
    Tokikake: "Tokikake|Chaton",
    Doll: "Doll",
    Onigumo: "Onigumo",
    Strawberry: "Strawberry",
    TBone: "T-Bone",
    Fullbody: "Fullbody",
    Jango: "Jango",
    Nezumi: "Nezumi",
    Bastille: "Bastille",
    Sentomaru: "Sentomaru",
    Bogard: "Bogard",
    Hibari: "Hibari",
    Mr9: "Mr. 9",
    Kumashi: "Kumashi",
    Ohm: "Ohm",
    Satori: "Satori",
    Gedatsu: "Gedatsu",
    Shura: "Shura",
    Kalifa2: "Kalifa",
    Hachi: "Hatchan|Hachi",
    Shachi: "Shachi",
    Penguin: "Penguin",
    JeanBart: "Jean Bart",
    Heat: "Heat",
    Wire: "Wire",
    Sadie: "Sadie",
    Domino: "Domino",
    Saldeath: "Saldeath",
    Mr11: "Mr. 11",
    Gaimon: "Gaimon",
    Cabaji: "Cabaji",
    Mohji: "Mohji",
    Chess: "Chess",
    Kuromarimo: "Kuromarimo",
    Hyouzou: "Hyouzou",
    Bluegrass: "Bluegrass",
    Mars: "Saint Marcus Mars|Mars",
    Warcury: "Saint Topman Warcury|Warcury",
    Nusjuro: "Saint Ethanbaron V. Nusjuro|Nusjuro",
    JuPeter: "Saint Shepherd Ju Peter|Ju Peter",
    Killingham: "Saint Rimoshifu Killingham|Killingham",
    Sommers: "Saint Shepherd Sommers|Sommers",
    Gunko: "Gunko",
    Dorry2: "Dorry"
};
function ranked(id, prompt, hint, list, matchAs) {
    const seen = new Set();
    const items = list.split(",").map((s)=>s.trim()).filter(Boolean).map((k)=>D[k] ?? k).filter((full)=>{
        const key = full.split("|")[0].toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    const n = items.length;
    const luff = items.slice(-1);
    const rest = items.slice(0, -1);
    const nc = Math.min(10, Math.max(2, Math.round(n * 0.08)));
    const common = rest.slice(0, nc);
    const remaining = rest.slice(nc);
    // Tuned so answers beyond the top ~20% reach Rare, and deep lore reaches Epic:
    const u = Math.max(1, Math.round(remaining.length * 0.14));
    const r = Math.max(1, Math.round(remaining.length * 0.36));
    return {
        id,
        prompt,
        hint,
        matchAs,
        tiers: {
            common,
            uncommon: remaining.slice(0, u),
            rare: remaining.slice(u, u + r),
            epic: remaining.slice(u + r),
            luffillion: luff
        }
    };
}
const C = "characters"; // match like character names (given-name shortcuts, etc.)
}),
"[project]/src/data/bank/curated/powers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CURATED_POWERS",
    ()=>CURATED_POWERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/names.ts [app-route] (ecmascript)");
;
const CURATED_POWERS = [
    // ---------------- Devil Fruits & Powers ----------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-logia-user", "Name a character with a Logia Devil Fruit.", "Users of elemental Logia fruits.", "Ace, Akainu, Aokiji, Kizaru, Enel, Crocodile, Smoker, Blackbeard, Sabo, Caesar, Monet, Ryokugyu, Caribou, Gasparde", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-zoan-user", "Name a character with a Zoan Devil Fruit.", "Regular, Ancient, Mythical, and Artificial Zoan users.", "Chopper, Marco, Kaido, Yamato, Lucci, Kaku, Luffy, King, Queen, Jack, Ulti, PageOne, Drake, Sengoku, Momonosuke, Orochi, WhosWho, BlackMaria, Sasaki, Dalton, Jabra, Pell, Chaka, Devon, Morgans|Big News Morgans, Bunbuku, Pierre, Stronger, Funkfreed, Lassoo", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-paramecia-user", "Name a character with a Paramecia Devil Fruit.", "Users of Paramecia fruits.", "Law, Doflamingo, Whitebeard, BigMom, Katakuri, Hancock, Buggy, Moria, Kuma, Kid, Brook, Robin, Bonney, Bartolomeo, Sugar, Perona, Absalom, Mr3, BonClay, Ivankov, Magellan, Daz, Mr5, Valentine, Cracker, Smoothie, Perospero, Brulee, Pudding, Oven, Daifuku, Kanjuro, Trebol, Diamante, Pica, Baby5, Machvise, Senor, Buffalo, Gladius, Corazon, Wapol, Foxy, Kalifa, Blueno, Hawkins, Apoo, Bege, Fujitora, Shiryu, Burgess, Augur, Pizarro, Tsuru, Kujaku, Bluegrass, Shiki, Toki, Mansherry, Charlotte Newshi|Newshi", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-transform-fruit", "Name a Devil Fruit that allows its user to transform.", "Fruits that change the user's body into another form.", "Hito Hito no Mi|Human-Human Fruit, Tori Tori no Mi, Model: Phoenix|Phoenix, Uo Uo no Mi, Model: Seiryu|Seiryu, Gomu Gomu no Mi|Gum-Gum Fruit|Hito Hito no Mi, Model: Nika, Neko Neko no Mi, Model: Leopard|Leopard, Ushi Ushi no Mi, Model: Giraffe|Giraffe, Inu Inu no Mi, Model: Okuchi no Makami|Okuchi no Makami, Mane Mane no Mi|Clone-Clone Fruit, Hito Hito no Mi, Model: Daibutsu|Daibutsu, Ryu Ryu no Mi, Model: Pteranodon|Pteranodon, Ryu Ryu no Mi, Model: Brachiosaurus|Brachiosaurus, Zou Zou no Mi, Model: Mammoth|Mammoth, Hebi Hebi no Mi, Model: Yamata no Orochi|Yamata no Orochi, Inu Inu no Mi, Model: Wolf|Wolf, Ushi Ushi no Mi, Model: Bison|Bison, Tori Tori no Mi, Model: Falcon|Falcon, Inu Inu no Mi, Model: Jackal|Jackal, Hebi Hebi no Mi, Model: Anaconda|Anaconda, Hebi Hebi no Mi, Model: King Cobra|King Cobra, Inu Inu no Mi, Model: Kyubi no Kitsune|Kyubi no Kitsune, Mogu Mogu no Mi|Mole-Mole Fruit, Uma Uma no Mi|Horse-Horse Fruit, Inu Inu no Mi, Model: Dachshund|Dachshund"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fire", "Name a character who can control fire.", "Fire, magma, or flames of any kind.", "Ace, Sabo, Akainu, Marco, Kaido, King, Sanji, Kinemon, BigMom, Oven, Usopp, Prometheus"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-ice", "Name a character who can control ice or snow.", "Ice, snow, or freezing attacks.", "Aokiji, Monet, Brook, Yamato, Nami"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-lightning", "Name a character who can control lightning.", "Lightning or electricity.", "Enel, Nami, BigMom, Kaido, Yamato, Luffy, Vinsmoke Niji|Niji, Zeus", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-body", "Name a character who can manipulate their body.", "Stretching, splitting, sprouting, hardening, or reshaping their own body.", "Luffy, Buggy, Chopper, Robin, Ivankov, BonClay, Daz, Jozu, Franky, Katakuri, Trebol, Baby5, Machvise", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fly", "Name a character who can fly.", "Flight by power, technique, or wings.", "Marco, Kaido, King, Luffy, Sanji, Pell, Enel, Shiki, Momonosuke, Perona, Lucci, Kaku, Robin, Karasu, Laffitte", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-awakened", "Name a character who has awakened their Devil Fruit.", "Confirmed Devil Fruit awakenings.", "Luffy, Law, Kid, Katakuri, Doflamingo, Lucci, Kaku, Killingham", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-conqueror", "Name a character who can use Conqueror's Haki.", "Confirmed Supreme King Haki users.", "Luffy, Shanks, Kaido, BigMom, Whitebeard, Roger, Zoro, Hancock, Katakuri, Doflamingo, Yamato, Kid, Ace, Oden, Rayleigh, Chinjao", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-observation", "Name a character who can use Observation Haki.", "Confirmed Observation Haki (Mantra) users.", "Luffy, Zoro, Sanji, Katakuri, Usopp, Koby, Shanks, Rayleigh, Kaido, BigMom, Yamato, Law, Kid, Hancock, Enel, Shiryu, Garp, Fujitora, Kizaru, Akainu, Aokiji, Marco, King, Jinbe, Momonga, Oden, Wyper, Satori, Ohm, Shura, Gedatsu, Aisa", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-armament", "Name a character who can use Armament Haki.", "Confirmed Armament Haki users.", "Luffy, Zoro, Sanji, Shanks, Garp, Rayleigh, Kaido, BigMom, Whitebeard, Katakuri, Yamato, Smoker, Koby, Akainu, Aokiji, Kizaru, Fujitora, Doflamingo, Vergo, Law, Kid, Killer, Jinbe, King, Queen, Jack, Lucci, Cavendish, Diamante, Pica, Kinemon, Kiku, Raizo, Kawamatsu, Denjiro, Ashura, Izou, Helmeppo, Tashigi, Momonga, Sentomaru, Beckman, Yasopp, Roux, Hyogoro", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-animal-fruit", "Name a character who has a Devil Fruit with an animal-based ability.", "Zoans, SMILEs, and other animal-type powers.", "Chopper, Marco, Kaido, Lucci, Kaku, Yamato, Jack, Queen, King, Ulti, PageOne, Drake, WhosWho, BlackMaria, Sasaki, Orochi, Sengoku, Momonosuke, Dalton, Jabra, Pell, Chaka, Devon, Holdem, Speed, Babanuki, Daifugo, Sheepshead, Ginrummy, Bao Huang, Pierre, Stronger, Funkfreed, Lassoo, Mouseman", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    // ---------------- Weapons & Fighting ----------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-gun", "Name a character who fights with a gun.", "Pistols, rifles, and cannons.", "Yasopp, Beckman, Augur, Bege, Krieg, Roux, Franky, Kid, Vito, Gotti, Mr. 7", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-staff", "Name a character who uses a staff, pole, or club.", "Staffs, pipes, clubs, jitte, or rods.", "Nami, Sabo, Smoker, Enel, Kaido, Yamato, Alvida, Kumadori", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fists", "Name a character who uses their fists to fight.", "Brawlers and punchers.", "Luffy, Garp, Jinbe, Koby, Franky, Kuma, Sengoku, Hack, Koala, Chinjao, Bellamy, Hody, Ulti, Sai, Ideo", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-non-sword-weapon", "Name a character who uses a weapon other than a sword.", "Slingshots, clubs, guns, claws, chakrams, and more.", "Usopp, Nami, Franky, Kaido, Yamato, Smoker, Enel, Buggy, Killer, Jango, Kuro, Krieg, Alvida, Morgan, Gin, Helmeppo, Bege, Yasopp, Augur, Kumadori, Mr. 7", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-martial-arts", "Name a character who uses a fighting style based on martial arts.", "Black Leg, Fish-Man Karate, Rokushiki, Okama Kenpo, and others.", "Sanji, Jinbe, Lucci, BonClay, Ivankov, Koala, Hack, Kaku, Zeff, Chinjao, Sai, Kalifa, Jabra, Blueno, Kumadori, Fukurou, Hody, Ideo, Wanze", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-legendary-weapon", "Name a character who has a legendary weapon.", "Wielders of graded Meito blades or iconic named weapons.", "Zoro, Mihawk, Shanks, Oden, Whitebeard, Ryuma, Law, Fujitora, Tashigi, Brook, BigMom, Shiryu, Cavendish, Koushirou|Koshiro, Shimotsuki Kozaburo|Kozaburo", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-spear", "Name a character who uses a spear, trident, or lance.", "Polearm fighters.", "Katakuri, Neptune, GanFall, Krieg, Shura", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-named-attack", "Name a character who has used a named attack.", "Anyone who has shouted the name of an attack.", "Luffy, Zoro, Sanji, Usopp, Nami, Chopper, Robin, Franky, Brook, Jinbe, Ace, Sabo, Law, Kid, Shanks, Kaido, BigMom, Whitebeard, Mihawk, Doflamingo, Crocodile, Enel, Lucci, Arlong, Buggy, Akainu, Aokiji, Kizaru, Fujitora, Smoker, Koby, Garp, Katakuri, Yamato, King, Queen, Hody, Moria, Kuro, Krieg, BonClay, Mr3, Daz, Ivankov, Mr. 9", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fought-yonko", "Name a character who has fought one of the Four Emperors.", "Fought Kaido, Big Mom, Shanks, Whitebeard, Blackbeard, or another Emperor.", "Luffy, Roger, Whitebeard, Garp, Ace, Zoro, Law, Kid, Oden, Yamato, Marco, Kinemon, Shanks, Akainu, Aokiji, Kizaru, Blackbeard, Killer, Jinbe, Kiku, Raizo, Kawamatsu, Denjiro, Ashura, Izou, Squard", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fought-admiral", "Name a character who has fought an Admiral.", "Fought Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, or a past Admiral.", "Luffy, Whitebeard, Marco, Ace, Zoro, Jinbe, Crocodile, Rayleigh, Sabo, Garp, Vista, Jozu", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fought-commander", "Name a character who has fought a Yonko Commander.", "Fought an Emperor's top officers (All-Stars, Sweet Commanders, etc.).", "Luffy, Zoro, Sanji, Nami, Usopp, Robin, Brook, Jinbe, Franky, Marco, Inuarashi, Nekomamushi, Kinemon, Kawamatsu, Izou, Kiku, Yamato, Pedro, Raizo", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fought-alongside", "Name a character who has fought alongside Luffy.", "Allies who battled on Luffy's side.", "Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Ace, Sabo, Law, Kid, Yamato, Kinemon, Marco, BonClay, Ivankov, Crocodile, Bartolomeo, Cavendish, Rebecca, Kyros, Viola, Momonosuke, Kiku, Hyogoro, Inuarashi, Nekomamushi, Carrot, Pedro, Bege, Killer, Vivi, Wyper, Shirahoshi, Fukaboshi, Bonney, Hajrudin, Sai, Leo, Ideo, Orlumbus, Mr3, Inazuma, Buggy, Gambia", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"])
];
}),
"[project]/src/data/bank/curated/world.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CURATED_WORLD",
    ()=>CURATED_WORLD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/names.ts [app-route] (ecmascript)");
;
const CURATED_WORLD = [
    // ---------------- Locations & Story Arcs ----------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-visited-islands", "Name an island visited by the Straw Hats.", "Any island at least one Straw Hat has set foot on.", "Alabasta, Skypiea, Water 7, Enies Lobby, Thriller Bark, Sabaody Archipelago|Sabaody, Fish-Man Island, Punk Hazard, Dressrosa, Zou, Whole Cake Island, Wano Country|Wano, Egghead, Elbaph, Drum Island, Little Garden, Whisky Peak, Jaya, Loguetown, Dawn Island, Conomi Islands, Gecko Islands, Long Ring Long Land, Amazon Lily, Rusukaina, Kuraigana Island, Boin Archipelago, Momoiro Island, Weatheria, Karakuri Island, Namakura Island, Torino Kingdom, Kenzan Island, Cactus Island, Island of Rare Animals"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-grand-line", "Name a location in the Grand Line.", "Paradise (the first half) of the Grand Line.", "Reverse Mountain, Alabasta, Skypiea, Water 7, Enies Lobby, Sabaody Archipelago|Sabaody, Thriller Bark, Marineford, Impel Down, Amazon Lily, Drum Island, Little Garden, Whisky Peak, Jaya, Long Ring Long Land, Mary Geoise, Twin Cape, Mock Town, Upper Yard, Banaro Island, Kuraigana Island, Weatheria, Boin Archipelago, Kumate Island"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-new-world", "Name a location in the New World.", "Anywhere in the second half of the Grand Line.", "Wano Country|Wano, Dressrosa, Whole Cake Island, Punk Hazard, Zou, Egghead, Elbaph, Laugh Tale, Onigashima, Green Bit, New Marineford, Hachinosu, Totto Land, Cacao Island, Mokomo Dukedom, Sphinx, Prodence Kingdom, Corrida Colosseum, Lodestar Island"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-east-blue-loc", "Name a location in the East Blue.", "Islands, towns, and villages of the East Blue.", "Foosha Village, Loguetown, Shells Town, Orange Town, Syrup Village, Baratie, Arlong Park, Cocoyasi Village, Goa Kingdom, Gray Terminal, Mt. Colubo, Shimotsuki Village, Dawn Island, Conomi Islands, Gecko Islands, Island of Rare Animals, Organ Islands, Tequila Wolf, Polestar Islands"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-alabasta-saga-loc", "Name a location in the Alabasta Saga.", "From Reverse Mountain to Alabasta.", "Alabasta, Reverse Mountain, Whisky Peak, Little Garden, Drum Island, Alubarna, Rainbase, Nanohana, Yuba, Twin Cape, Cactus Island, Rain Dinners, Spiders Cafe, Katorea, Erumalu, Sandora Desert, Tomb of the Kings, Drum Castle, Bighorn, Cocoa Weed, Gyasta, Robelle"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-water7-saga-loc", "Name a location visited during the Water 7 Saga.", "Long Ring Long Land, Water 7, and Enies Lobby.", "Water 7, Enies Lobby, Long Ring Long Land, Tower of Justice, Gates of Justice, Franky House, Galley-La Headquarters|Dock One, Blue Station, Bridge of Hesitation, Judicial Island, St. Poplar, Pucci, San Faldo, Scrap Island, Shift Station"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-summit-saga-loc", "Name a location visited during the Summit War Saga.", "Sabaody through the post-war arcs.", "Marineford, Impel Down, Sabaody Archipelago|Sabaody, Amazon Lily, Rusukaina, Kuraigana Island, Shakky's Rip-Off Bar|Shakky's Bar, Human Auctioning House, Newkama Land, Dawn Island, Gray Terminal, Goa Kingdom, Mt. Colubo, Boin Archipelago, Momoiro Island, Weatheria, Karakuri Island, Namakura Island, Torino Kingdom, Kenzan Island"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-emperors-saga-loc", "Name a location visited during the Four Emperors Saga.", "Zou, Whole Cake Island, the Reverie, and Wano.", "Wano Country|Wano, Whole Cake Island, Zou, Onigashima, Mary Geoise, Totto Land, Sweet City, Whole Cake Chateau, Cacao Island, Seducing Woods, Flower Capital, Kuri, Udon, Ringo, Hakumai, Kibi, Okobore Town, Bakura Town, Ebisu Town, Amigasa Village, Mokomo Dukedom, Whale Forest, Nuts Island, Jam Island, Mirro-World|Mirror World"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-villain-fight-loc", "Name a location where Luffy has fought a major villain.", "Sites of Luffy's big battles.", "Arlong Park, Alabasta, Enies Lobby, Thriller Bark, Dressrosa, Onigashima, Whole Cake Island, Skypiea, Fish-Man Island, Egghead, Punk Hazard, Marineford, Impel Down, Shells Town, Orange Town, Syrup Village, Baratie, Drum Island, Loguetown, Little Garden, Long Ring Long Land, Corrida Colosseum, Mock Town"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-marine-encounter-loc", "Name a location where the Straw Hats have encountered the Marines.", "Places the crew clashed with or met the Navy.", "Loguetown, Alabasta, Enies Lobby, Marineford, Sabaody Archipelago|Sabaody, Shells Town, Water 7, Punk Hazard, Dressrosa, Egghead, Wano Country|Wano, Long Ring Long Land, Arlong Park, Navarone|G-8"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-poneglyph-loc", "Name a place where a Poneglyph has been found.", "Locations with a Poneglyph or Road Poneglyph.", "Alabasta, Skypiea, Fish-Man Island, Zou, Whole Cake Island, Wano Country|Wano, Laugh Tale, Onigashima, Sea Forest, Tomb of the Kings, Shandora"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-prison-loc", "Name a prison or prison-related location.", "Prisons, prison levels, and places of captivity.", "Impel Down, Enies Lobby, Udon Prisoner Mine|Udon, Level 6|Eternal Hell, Level 5|Freezing Hell, Newkama Land|Level 5.5, Level 4|Blazing Hell, Level 3|Starvation Hell, Level 2|Beast Hell, Level 1|Crimson Hell, Tower of Justice, Shells Town, Toy House"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-villain-ruled", "Name an island ruled by a powerful villain.", "Places controlled by a tyrant or villainous crew.", "Dressrosa, Wano Country|Wano, Whole Cake Island, Alabasta, Arlong Park, Thriller Bark, Skypiea, Drum Island, Punk Hazard, Onigashima, Shells Town, Orange Town, Mary Geoise, Hachinosu"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-destroyed-loc", "Name a location that has been destroyed.", "Islands or places wiped out or heavily ruined.", "Ohara, Marineford, Enies Lobby, Arlong Park, Lulusia Kingdom, God Valley, Flevance, Gray Terminal, Punk Hazard, Shandora, Banaro Island"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-reunion-loc", "Name a location where the Straw Hats have reunited.", "Where the crew came back together.", "Sabaody Archipelago|Sabaody, Zou, Wano Country|Wano, Whole Cake Island, Water 7, Kuri, Shakky's Rip-Off Bar|Shakky's Bar"),
    // ---------------- Bounties & Rankings ----------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-bounty-100m", "Name a character with a bounty over 100 million berries.", "Any known bounty above 100,000,000.", "Luffy, Zoro, Sanji, Nami, Usopp, Robin, Franky, Brook, Jinbe, Law, Kid, Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Roger, Ace, Mihawk, Crocodile, Buggy, Doflamingo, Hancock, Marco, Katakuri, Killer, Bonney, Hawkins, Drake, Bege, Apoo, Urouge, Cavendish, Bartolomeo, King, Queen, Jack, Smoothie, Cracker, Perospero, Oven, Daifuku, Weevil, Kuma, Moria, Bellamy, Ulti, PageOne, Arlong, Ideo, Leo, Sai, Orlumbus, Hajrudin, Chinjao, Elizabello, Abdullah, Jeet, Blue Gilly, Brulee"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-bounty-500m", "Name a character with a bounty over 500 million berries.", "Any known bounty above 500,000,000.", "Luffy, Zoro, Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Roger, Law, Kid, Mihawk, Crocodile, Buggy, Sanji, Hancock, Marco, Katakuri, Doflamingo, Jinbe, King, Queen, Jack, Ace, Smoothie, Cracker, Perospero, Robin, Usopp, Franky, Brook, Killer, Weevil"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-bounty-1b", "Name a character with a bounty over 1 billion berries.", "Any known bounty above 1,000,000,000.", "Luffy, Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Roger, Zoro, Law, Kid, Sanji, Mihawk, Crocodile, Buggy, Hancock, Jinbe, Katakuri, Marco, King, Queen"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-bounty-increased", "Name a character whose bounty has increased.", "Characters who received a higher bounty later on.", "Luffy, Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Law, Kid, Ace, Buggy, Killer, Bonney, Bege, Hawkins, Apoo, Crocodile, Mihawk, Hancock, Blackbeard, Urouge"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-bounty-frozen", "Name a character who has had their bounty frozen.", "Warlords whose bounties were suspended.", "Mihawk, Hancock, Doflamingo, Crocodile, Kuma, Moria, Law, Jinbe, Blackbeard, Buggy, Weevil"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-former-warlord-bounty", "Name a former Warlord with a bounty.", "Ex-Warlords whose bounties are active again.", "Mihawk, Crocodile, Buggy, Hancock, Law, Jinbe, Blackbeard, Doflamingo, Moria, Weevil, Kuma"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-post-timeskip-bounty", "Name a character who has been given a bounty after the time skip.", "Bounties issued or updated after the two-year skip.", "Luffy, Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Law, Kid, Killer, Mihawk, Crocodile, Buggy, Hancock, Cavendish, Bartolomeo, Marco, Katakuri, Smoothie, Cracker, Perospero, King, Queen, Jack, Ulti, PageOne, Bege, Hawkins, Apoo, Urouge, Bonney, Weevil, Burgess, Shiryu, Augur, Laffitte, DocQ, Devon, Wolf, Shot, Pizarro, Ideo, Leo, Hajrudin, Chinjao, Orlumbus"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-emperors", "Name a member of the Four Emperors.", "Anyone who has held the title of Yonko.", "Shanks, Kaido, BigMom, Blackbeard, Whitebeard, Luffy, Buggy"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-admirals", "Name a character who has been an Admiral.", "Admirals and Fleet Admirals, past or present.", "Akainu, Aokiji, Kizaru, Fujitora, Ryokugyu, Sengoku, Kong, Zephyr"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-commanders", "Name a character who has been a Yonko Commander.", "Top officers of an Emperor's crew.", "Marco, Jozu, Vista, Ace, Thatch, Izou, King, Queen, Jack, Katakuri, Smoothie, Cracker, Beckman, Roux, Yasopp, Burgess, Augur, Laffitte, DocQ, Devon, Wolf, Shot, Pizarro, Shiryu, Oden, Blamenco, Rakuyo, Namur, Blenheim, Curiel, Kingdew, Haruta, Atmos, Speed Jiru, Fossa", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    // ---------------- Ships, Objects & Items ----------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-pirate-ship", "Name a ship belonging to a pirate crew.", "Any pirate crew's ship.", "Going Merry|Merry, Thousand Sunny|Sunny, Oro Jackson, Moby Dick, Red Force, Polar Tang, Victoria Punk, Queen Mama Chanter, Saber of Xebec, Perfume Yuda, Thriller Bark, Going Luffy-senpai, Nostra Castello, Big Top, Miss Love Duck, Sexy Foxy, Yonta Maria, Shark Superb, Flying Dutchman, Striker, Numancia Flamingo"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-supreme-blades", "Name one of the 12 Supreme Grade Blades.", "The known Saijo O Wazamono.", "Yoru, Murakumogiri, Ace, Shodai Kitetsu, Yakuza Kasen"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-ancient-weapons", "Name one of the Ancient Weapons.", "The legendary weapons of the Void Century.", "Pluton, Poseidon, Uranus"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-den-den", "Name a type of Den Den Mushi.", "Varieties of transponder snail.", "Den Den Mushi, Baby Den Den Mushi, Visual Den Den Mushi|Video Den Den Mushi, Black Den Den Mushi, White Den Den Mushi, Golden Den Den Mushi, Projector Den Den Mushi, Silver Den Den Mushi"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-grand-line-travel", "Name an item that can be used to travel through the Grand Line.", "Navigation tools and travel gear.", "Log Pose, Eternal Pose, Vivre Card, Ship Coating|Coating, Waver, Puffing Tom|Sea Train, Sea Prism Stone hull|Kairoseki hull, Coup de Burst, Mini Merry, Shark Submerge"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-seastone-item", "Name a type of Sea Stone item.", "Objects made of Sea Prism Stone (Kairoseki).", "Seastone handcuffs|Sea Prism Stone handcuffs, Smoker's jitte|Jitte, Seastone cage, Seastone net, Seastone bullets, Kairoseki hull|Seastone hull, Seastone shackles, Seastone wall"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-roger-objects", "Name an object associated with Gol D. Roger.", "Things linked to the Pirate King.", "Straw Hat, One Piece, Oro Jackson, Ace (sword)|Ace, Execution platform|Loguetown execution platform, Roger's Jolly Roger|Jolly Roger, Oden's Journal|Oden's log"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-straw-hat-items", "Name an item that belonged to a Straw Hat member.", "Weapons, tools, and keepsakes of the crew.", "Straw Hat, Wado Ichimonji, Enma, Clima-Tact, Sandai Kitetsu, Kabuto|Black Kabuto, Rumble Ball, Soul Solid, Raid Suit, Sogeking Mask, Ace's Vivre Card|Vivre Card, Shusui, Log Pose, Zoro's Bandana|Bandana, Chopper's Hat, Tangerine Trees|Bellmere's Tangerine Trees, Pop Green"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-vegapunk-tech", "Name a piece of technology created by Vegapunk.", "Inventions of the world's greatest scientist.", "Pacifista, Seraphim, Punk Records, Mother Flame, Artificial Devil Fruits, SAD, Frontier Dome, Vegaforce-01"),
    // ---------------- Random One Piece Knowledge ----------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-marine-family", "Name a character who has a family member in the Marines.", "Relatives of Marines.", "Luffy, Dragon, Ace, Sabo, Doflamingo, Helmeppo", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-sibling", "Name a character who has a brother or sister.", "Blood or sworn siblings.", "Luffy, Ace, Sabo, Sanji, Nami, Nojiko, Doflamingo, Corazon, Hancock, Katakuri, Pudding, Smoothie, Cracker, Perospero, Brulee, Oven, Daifuku, Lola, Chiffon, Vinsmoke Reiju|Reiju, Vinsmoke Ichiji|Ichiji, Vinsmoke Niji|Niji, Vinsmoke Yonji|Yonji, Shirahoshi, Fukaboshi, Ryuboshi, Manboshi, Momonosuke, Hiyori, Boa Sandersonia|Sandersonia, Boa Marigold|Marigold, Law, Lami", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-betrayed", "Name a character who has betrayed someone.", "Traitors, double agents, and backstabbers.", "Blackbeard, Kanjuro, Robin, Pudding, Lucci, Kaku, Kalifa, Blueno, Kuro, Krieg, Vergo, Monet, Orochi, Drake, Hawkins, Corazon, Kurozumi Higurashi|Higurashi", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-switched-sides", "Name a character who has switched sides.", "Characters who changed allegiance.", "Robin, Jinbe, Franky, Aokiji, Drake, BonClay, Crocodile, Bege, Pudding, Hawkins, Yamato, Shiryu, Mr3, WhosWho, Corazon, Kanjuro, Bellamy, Viola, Vivi, Igaram", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-revolutionary", "Name a character who has been part of the Revolutionary Army.", "Leaders, commanders, and members.", "Dragon, Sabo, Koala, Ivankov, Kuma, Inazuma, Hack, BeloBetty, Morley, Lindbergh, Karasu, Robin, Ahiru, Bunny Joe, Ushiano, Jiron, Terry Gilteo", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-void-century", "Name a character who knows about the Void Century.", "Those who know (some of) the hidden history.", "Robin, Imu, Vegapunk, Saturn, Rayleigh, Roger, Clover, Olvia, Oden, Mars, Warcury, Nusjuro, JuPeter, Saul, Toki", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-met-celestial", "Name a character who has encountered a Celestial Dragon.", "Met, fought, or served a World Noble.", "Luffy, Hancock, Doflamingo, Corazon, Koala, FisherTiger, Kuma, Sabo, Bonney, Vivi, Shirahoshi, Hatchan, Camie, Rayleigh, Law, Mjosgard", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-been-skypiea", "Name a character who has been to Skypiea.", "Anyone who has been in the sky islands.", "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Enel, Conis, Wyper, GanFall, Pagaya, Aisa, Laki, Ohm, Satori, Shura, Gedatsu, Kalgara, Noland, Pierre, Braham, Genbo, Kamakiri, McKinley, Su", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-been-wano", "Name a character who has been to Wano.", "Anyone who set foot in Wano Country.", "Luffy, Zoro, Sanji, Nami, Usopp, Chopper, Robin, Franky, Brook, Jinbe, Kaido, Yamato, Oden, Law, Kid, Killer, Marco, BigMom, Roger, Whitebeard, Kinemon, Momonosuke, Hiyori, Kiku, Orochi, Kanjuro, Hawkins, Apoo, Drake, Hyogoro, Tama, Ryokugyu, King, Queen, Jack, Sasaki, Ulti, PageOne, WhosWho, BlackMaria, Komachiyo", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-been-fishman", "Name a character who has been to Fish-Man Island.", "Anyone who visited or lived on Fish-Man Island.", "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Shirahoshi, Neptune, Hody, Decken, Fukaboshi, Ryuboshi, Manboshi, Shyarly|Madam Shyarly, Camie, Hatchan, Otohime, FisherTiger, Arlong, Pekoms, Tamago, Caribou, Wadatsumi, Aladdin, Kuroobi, Chew, Den", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-oro-jackson", "Name a character who has been on Roger's ship.", "Crew and passengers of the Oro Jackson.", "Roger, Rayleigh, Shanks, Buggy, Oden, Crocus, Gaban, Inuarashi, Nekomamushi, Toki", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-baroque", "Name a character who has been part of Baroque Works.", "Agents, partners, and Billions/Millions.", "Crocodile, Robin, BonClay, Daz, Mr3, Doublefinger, Goldenweek, Mr4, MerryXmas, Mr5, Valentine, Vivi, Igaram, Mr9, Mr. 7, Miss Father's Day, Mr11, Miss Monday, Lassoo, Mr. 13, Miss Friday", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-cp", "Name a character who has been part of CP9 or CP0.", "Agents of Cipher Pol's most secret units.", "Lucci, Kaku, Kalifa, Jabra, Blueno, Kumadori, Fukurou, Spandam, Stussy, Hattori, Joseph, Gismonda, Guernica, Maha", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-pre-post-skip", "Name a character who has appeared both before and after the time skip.", "Characters seen in both halves of the story.", "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe, Shanks, Buggy, Smoker, Koby, Garp, Blackbeard, Law, Kid, Hancock, Mihawk, Crocodile, BonClay, Vivi, Doflamingo, Akainu, Kizaru, Aokiji, Sengoku, Tashigi, Helmeppo, Rayleigh, Perona, Bellamy, Hody, Shirahoshi, Camie, Hatchan, Iceburg, Paulie, Kokoro, Wapol, Dalton, Kureha, Makino, Dadan, Zeff, Kaya, Nojiko, Genzo, Pandaman", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ranked"])("q-fought-wg", "Name a character who has fought against the World Government.", "Rebels, pirates, and others who defied the World Government.", "Luffy, Robin, Franky, Usopp, Sabo, Dragon, Koala, FisherTiger, Kuma, Bonney, Vegapunk, Ivankov, Saul, Clover, Olvia, Morley, BeloBetty, Lindbergh, Inazuma, Hack, Karasu", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$names$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"])
];
}),
"[project]/src/data/bank/devilFruits.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEVIL_FRUITS_QUESTION",
    ()=>DEVIL_FRUITS_QUESTION
]);
const DEVIL_FRUITS_QUESTION = {
    id: "devil-fruits",
    prompt: "Name a Devil Fruit.",
    hint: "Paramecia, Zoan, Logia, Ancient Zoan, Mythical Zoan, or film fruits. Japanese or English names count.",
    tiers: {
        common: [
            "Gomu Gomu no Mi|Gum-Gum Fruit|Rubber-Rubber Fruit|Hito Hito no Mi, Model: Nika|Human-Human Fruit, Model: Nika|Nika Fruit",
            "Mera Mera no Mi|Flame-Flame Fruit|Flare-Flare Fruit|Fire-Fire Fruit",
            "Hie Hie no Mi|Ice-Ice Fruit|Chilly-Chilly Fruit",
            "Pika Pika no Mi|Glint-Glint Fruit|Light-Light Fruit",
            "Magu Magu no Mi|Mag-Mag Fruit|Magma-Magma Fruit",
            "Gura Gura no Mi|Tremor-Tremor Fruit|Quake-Quake Fruit",
            "Yami Yami no Mi|Dark-Dark Fruit|Darkness Fruit",
            "Ope Ope no Mi|Op-Op Fruit"
        ],
        uncommon: [
            "Goro Goro no Mi|Rumble-Rumble Fruit|Lightning Fruit|Thunder Fruit",
            "Suna Suna no Mi|Sand-Sand Fruit",
            "Moku Moku no Mi|Smoke-Smoke Fruit|Plume-Plume Fruit",
            "Hana Hana no Mi|Flower-Flower Fruit|Bloom-Bloom Fruit",
            "Hito Hito no Mi|Human-Human Fruit",
            "Yomi Yomi no Mi|Revive-Revive Fruit",
            "Ito Ito no Mi|String-String Fruit",
            "Mochi Mochi no Mi|Mochi-Mochi Fruit",
            "Soru Soru no Mi|Soul-Soul Fruit",
            "Uo Uo no Mi, Model: Seiryu|Fish-Fish Fruit, Model: Azure Dragon|Seiryu|Azure Dragon Fruit",
            "Tori Tori no Mi, Model: Phoenix|Bird-Bird Fruit, Model: Phoenix|Phoenix Fruit",
            "Bari Bari no Mi|Barrier-Barrier Fruit",
            "Bara Bara no Mi|Chop-Chop Fruit|Split-Split Fruit",
            "Mero Mero no Mi|Love-Love Fruit",
            "Doku Doku no Mi|Venom-Venom Fruit|Poison-Poison Fruit",
            "Nikyu Nikyu no Mi|Paw-Paw Fruit",
            "Zushi Zushi no Mi|Press-Press Fruit|Gravity-Gravity Fruit",
            "Jiki Jiki no Mi|Magnet-Magnet Fruit",
            "Kage Kage no Mi|Shadow-Shadow Fruit",
            "Gasu Gasu no Mi|Gas-Gas Fruit"
        ],
        rare: [
            "Yuki Yuki no Mi|Snow-Snow Fruit",
            "Mane Mane no Mi|Clone-Clone Fruit",
            "Sube Sube no Mi|Smooth-Smooth Fruit|Slip-Slip Fruit",
            "Bomu Bomu no Mi|Bomb-Bomb Fruit",
            "Kilo Kilo no Mi|Kilo-Kilo Fruit|Weight-Weight Fruit",
            "Doru Doru no Mi|Wax-Wax Fruit",
            "Baku Baku no Mi|Munch-Munch Fruit",
            "Supa Supa no Mi|Dice-Dice Fruit",
            "Toge Toge no Mi|Spike-Spike Fruit",
            "Ori Ori no Mi|Cage-Cage Fruit|Bind-Bind Fruit",
            "Bane Bane no Mi|Spring-Spring Fruit",
            "Noro Noro no Mi|Slow-Slow Fruit",
            "Doa Doa no Mi|Door-Door Fruit",
            "Awa Awa no Mi|Bubble-Bubble Fruit",
            "Suke Suke no Mi|Clear-Clear Fruit|Invisible Fruit",
            "Horo Horo no Mi|Hollow-Hollow Fruit|Ghost Fruit",
            "Horu Horu no Mi|Horm-Horm Fruit|Hormone Fruit",
            "Choki Choki no Mi|Snip-Snip Fruit|Scissor Fruit",
            "Kira Kira no Mi|Twinkle-Twinkle Fruit|Diamond Fruit",
            "Mato Mato no Mi|Mark-Mark Fruit",
            "Hobi Hobi no Mi|Hobby-Hobby Fruit|Toy-Toy Fruit",
            "Buki Buki no Mi|Arms-Arms Fruit|Weapon Fruit",
            "Beta Beta no Mi|Stick-Stick Fruit|Mucus Fruit",
            "Sui Sui no Mi|Swim-Swim Fruit",
            "Giro Giro no Mi|Glare-Glare Fruit",
            "Nagi Nagi no Mi|Calm-Calm Fruit|Silence-Silence Fruit",
            "Bisu Bisu no Mi|Bis-Bis Fruit|Biscuit-Biscuit Fruit",
            "Pero Pero no Mi|Lick-Lick Fruit|Candy Fruit",
            "Memo Memo no Mi|Memo-Memo Fruit|Memory Fruit",
            "Mira Mira no Mi|Mirror-Mirror Fruit",
            "Toki Toki no Mi|Time-Time Fruit",
            "Kibi Kibi no Mi|Millet-Millet Fruit",
            "Fuku Fuku no Mi|Garb-Garb Fruit",
            "Mori Mori no Mi|Woods-Woods Fruit|Forest-Forest Fruit",
            "Nomi Nomi no Mi|Brain-Brain Fruit",
            "Toshi Toshi no Mi|Age-Age Fruit",
            "Wara Wara no Mi|Straw-Straw Fruit",
            "Shiro Shiro no Mi|Castle-Castle Fruit",
            "Oto Oto no Mi|Tone-Tone Fruit|Sound Fruit",
            "Ushi Ushi no Mi, Model: Giraffe|Ox-Ox Fruit, Model: Giraffe|Giraffe Fruit",
            "Neko Neko no Mi, Model: Leopard|Cat-Cat Fruit, Model: Leopard|Leopard Fruit",
            "Inu Inu no Mi, Model: Wolf|Dog-Dog Fruit, Model: Wolf|Wolf Fruit",
            "Inu Inu no Mi, Model: Okuchi no Makami|Dog-Dog Fruit, Model: Okuchi no Makami|Okuchi no Makami",
            "Ryu Ryu no Mi, Model: Pteranodon|Dragon-Dragon Fruit, Model: Pteranodon|Pteranodon Fruit",
            "Ryu Ryu no Mi, Model: Brachiosaurus|Dragon-Dragon Fruit, Model: Brachiosaurus|Brachiosaurus Fruit",
            "Zou Zou no Mi, Model: Mammoth|Eleph-Eleph Fruit, Model: Mammoth|Mammoth Fruit",
            "Hito Hito no Mi, Model: Daibutsu|Human-Human Fruit, Model: Buddha|Daibutsu Fruit",
            "Numa Numa no Mi|Swamp-Swamp Fruit",
            "Fuwa Fuwa no Mi|Float-Float Fruit",
            "Uta Uta no Mi|Sing-Sing Fruit",
            "Goru Goru no Mi|Gol-Gol Fruit|Gold-Gold Fruit",
            "Shari Shari no Mi|Wheel-Wheel Fruit",
            "Beri Beri no Mi|Berry-Berry Fruit",
            "Sabi Sabi no Mi|Rust-Rust Fruit",
            "Woshu Woshu no Mi|Wash-Wash Fruit",
            "Pamu Pamu no Mi|Pop-Pop Fruit",
            "Ishi Ishi no Mi|Stone-Stone Fruit",
            "Hira Hira no Mi|Ripple-Ripple Fruit|Flag Fruit",
            "Ton Ton no Mi|Ton-Ton Fruit"
        ],
        epic: [
            "Ato Ato no Mi|Art-Art Fruit",
            "Jake Jake no Mi|Jacket-Jacket Fruit",
            "Guru Guru no Mi|Spin-Spin Fruit",
            "Chiyu Chiyu no Mi|Heal-Heal Fruit",
            "Buku Buku no Mi|Book-Book Fruit",
            "Shibo Shibo no Mi|Wring-Wring Fruit",
            "Hoya Hoya no Mi|Puff-Puff Fruit|Lamp Fruit",
            "Netsu Netsu no Mi|Heat-Heat Fruit",
            "Kuku Kuku no Mi|Cook-Cook Fruit",
            "Kobu Kobu no Mi|Pump-Pump Fruit",
            "Oshi Oshi no Mi|Push-Push Fruit",
            "Susu Susu no Mi|Soot-Soot Fruit",
            "Juku Juku no Mi|Ripe-Ripe Fruit",
            "Maki Maki no Mi|Scroll-Scroll Fruit",
            "Fude Fude no Mi|Brush-Brush Fruit",
            "Riki Riki no Mi|Strong-Strong Fruit",
            "Wapu Wapu no Mi|Warp-Warp Fruit",
            "Shiku Shiku no Mi|Sick-Sick Fruit",
            "Shima Shima no Mi|Isle-Isle Fruit|Island-Island Fruit",
            "Gabu Gabu no Mi|Glug-Glug Fruit|Liquor Fruit",
            "Deka Deka no Mi|Huge-Huge Fruit",
            "Muchi Muchi no Mi|Whip-Whip Fruit",
            "Nori Nori no Mi|Ride-Ride Fruit",
            "Gunyo Gunyo no Mi|Glorp-Glorp Fruit|Clay Fruit",
            "Ushi Ushi no Mi, Model: Bison|Ox-Ox Fruit, Model: Bison|Bison Fruit",
            "Tori Tori no Mi, Model: Falcon|Bird-Bird Fruit, Model: Falcon|Falcon Fruit",
            "Inu Inu no Mi, Model: Jackal|Dog-Dog Fruit, Model: Jackal|Jackal Fruit",
            "Inu Inu no Mi, Model: Dachshund|Dog-Dog Fruit, Model: Dachshund|Dachshund Fruit",
            "Mogu Mogu no Mi|Mole-Mole Fruit",
            "Uma Uma no Mi|Horse-Horse Fruit",
            "Zou Zou no Mi|Eleph-Eleph Fruit|Elephant-Elephant Fruit",
            "Hebi Hebi no Mi, Model: Anaconda|Snake-Snake Fruit, Model: Anaconda|Anaconda Fruit",
            "Hebi Hebi no Mi, Model: King Cobra|Snake-Snake Fruit, Model: King Cobra|King Cobra Fruit",
            "Hebi Hebi no Mi, Model: Yamata no Orochi|Snake-Snake Fruit, Model: Yamata-no-Orochi|Yamata no Orochi",
            "Inu Inu no Mi, Model: Kyubi no Kitsune|Dog-Dog Fruit, Model: Nine-Tailed Fox|Kyubi no Kitsune",
            "Uma Uma no Mi, Model: Pegasus|Horse-Horse Fruit, Model: Pegasus|Pegasus Fruit",
            "Hito Hito no Mi, Model: Onyudo|Human-Human Fruit, Model: Onyudo|Onyudo",
            "Ryu Ryu no Mi, Model: Allosaurus|Dragon-Dragon Fruit, Model: Allosaurus|Allosaurus Fruit",
            "Ryu Ryu no Mi, Model: Spinosaurus|Dragon-Dragon Fruit, Model: Spinosaurus|Spinosaurus Fruit",
            "Ryu Ryu no Mi, Model: Triceratops|Dragon-Dragon Fruit, Model: Triceratops|Triceratops Fruit",
            "Ryu Ryu no Mi, Model: Pachycephalosaurus|Dragon-Dragon Fruit, Model: Pachycephalosaurus|Pachycephalosaurus Fruit",
            "Neko Neko no Mi, Model: Saber Tiger|Cat-Cat Fruit, Model: Saber-Toothed Tiger|Saber Tiger Fruit",
            "Kumo Kumo no Mi, Model: Rosamygale Grauvogeli|Spider-Spider Fruit, Model: Rosamygale Grauvogeli|Rosamygale Grauvogeli",
            "Sara Sara no Mi, Model: Axolotl|Sala-Sala Fruit, Model: Axolotl|Axolotl Fruit",
            "Kame Kame no Mi|Turtle-Turtle Fruit",
            "Tama Tama no Mi|Egg-Egg Fruit",
            "Gasha Gasha no Mi|Clank-Clank Fruit",
            "Nui Nui no Mi|Stitch-Stitch Fruit",
            "Pocke Pocke no Mi|Pocket-Pocket Fruit",
            "Kuri Kuri no Mi|Cream-Cream Fruit",
            "Bata Bata no Mi|Butter-Butter Fruit",
            "Inu Inu no Mi, Model: Tanuki|Dog-Dog Fruit, Model: Bake-danuki|Tanuki Fruit",
            "Tori Tori no Mi, Model: Albatross|Bird-Bird Fruit, Model: Albatross|Albatross Fruit",
            "Mushi Mushi no Mi, Model: Kabutomushi|Bug-Bug Fruit, Model: Rhinoceros Beetle|Kabutomushi",
            "Mushi Mushi no Mi, Model: Suzumebachi|Bug-Bug Fruit, Model: Hornet|Suzumebachi",
            "Ryu Ryu no Mi, Model: Kirin|Dragon-Dragon Fruit, Model: Kirin|Kirin Fruit",
            "Aro Aro no Mi|Arrow-Arrow Fruit",
            "Iba Iba no Mi|Thorn-Thorn Fruit",
            "Tsutsu Tsutsu no Mi|Tube-Tube Fruit",
            "Iku Iku no Mi|Grow-Grow Fruit",
            "Rako Rako no Mi|Otter-Otter Fruit",
            "Inu Inu no Mi, Model: Hound|Dog-Dog Fruit, Model: Hound",
            "Uma Uma no Mi, Model: Zebra|Horse-Horse Fruit, Model: Zebra",
            "Ushi Ushi no Mi, Model: Cow|Ox-Ox Fruit, Model: Cow",
            "Inu Inu no Mi, Model: Chihuahua|Dog-Dog Fruit, Model: Chihuahua",
            "Goe Goe no Mi|Howl-Howl Fruit|Voice Fruit",
            "Hiso Hiso no Mi|Whisper-Whisper Fruit",
            "Kama Kama no Mi|Sickle-Sickle Fruit",
            "Kachi Kachi no Mi|Hard-Hard Fruit",
            "Nemu Nemu no Mi|Sleep-Sleep Fruit",
            "Mini Mini no Mi|Mini-Mini Fruit",
            "Atsu Atsu no Mi|Hot-Hot Fruit",
            "Noko Noko no Mi|Spore-Spore Fruit",
            "Ami Ami no Mi|Net-Net Fruit",
            "Kopi Kopi no Mi|Copy-Copy Fruit",
            "Modo Modo no Mi|Return-Return Fruit",
            "Mosa Mosa no Mi|Grow-Grow Plant Fruit|Lush-Lush Fruit",
            "Basa Basa no Mi|Flutter-Flutter Paper Fruit",
            "Pasa Pasa no Mi|Paper-Paper Fruit",
            "Toro Toro no Mi|Liquid-Liquid Fruit",
            "Ame Ame no Mi|Candy-Candy Syrup Fruit",
            "Kone Kone no Mi|Knead-Knead Fruit",
            "Moa Moa no Mi|More-More Fruit",
            "Kyubu Kyubu no Mi|Cube-Cube Fruit",
            "Peto Peto no Mi|Pet-Pet Fruit",
            "Gutsu Gutsu no Mi|Smelt-Smelt Fruit",
            "Jara Jara no Mi|Chain-Chain Fruit",
            "Iro Iro no Mi|Color-Color Fruit",
            "Raki Raki no Mi|Luck-Luck Fruit",
            "Nuke Nuke no Mi|Through-Through Fruit",
            "Koro Koro no Mi|Roll-Roll Fruit",
            "Bijo Bijo no Mi|Vision-Vision Fruit",
            "Batto Batto no Mi, Model: Vampire|Bat-Bat Fruit, Model: Vampire|Vampire Fruit",
            "Tori Tori no Mi, Model: Nue|Nue Fruit",
            "Bana Bana no Mi",
            "Dero Dero no Mi",
            "Ute Ute no Mi|Gun-Gun Fruit",
            "Chuni Chuni no Mi",
            "Gemu Gemu no Mi",
            "Basu Basu no Mi",
            "Kote Kote no Mi",
            "Shuku Shuku no Mi",
            "Homi Homi no Mi",
            "SMILE|Artificial Devil Fruit",
            "Vegapunk's Artificial Dragon Fruit|Pink Dragon Fruit",
            "Tori Tori no Mi, Model: Eagle|Eagle-Eagle Fruit",
            "Pocha Pocha no Mi",
            "Deri Deri no Mi",
            "Peke Peke no Mi",
            "Kyara Kyara no Mi",
            "Nibi Nibi no Mi",
            "Mari Mari no Mi",
            "Mabo Mabo no Mi",
            "Zuma Zuma no Mi",
            "Meta Meta no Mi",
            "Gyuki|Saturn's Gyuki Form",
            "Itsumade|Mars's Itsumade Form",
            "Fengxi|Hoki|Warcury's Fengxi Form",
            "Bakotsu|Nusjuro's Bakotsu Form",
            "Sandworm|Ju Peter's Sandworm Form"
        ],
        luffillion: [
            "Gocha Gocha no Mi|Pile-Pile Fruit|Mix-Mix Fruit"
        ]
    }
};
}),
"[project]/src/data/bank/extra.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXTRA_QUESTIONS",
    ()=>EXTRA_QUESTIONS
]);
const EXTRA_QUESTIONS = [
    {
        id: "marines",
        prompt: "Name a member of the Marines.",
        hint: "Any rank, from Fleet Admiral down to seaman, past or present.",
        tiers: {
            common: [
                "Akainu|Sakazuki",
                "Aokiji|Kuzan",
                "Kizaru|Borsalino",
                "Monkey D. Garp|Garp",
                "Koby|Coby",
                "Smoker"
            ],
            uncommon: [
                "Fujitora|Issho",
                "Ryokugyu|Aramaki|Green Bull",
                "Sengoku",
                "Tashigi",
                "Helmeppo",
                "Tsuru"
            ],
            rare: [
                "Kong",
                "Zephyr|Z",
                "Momonga",
                "Sentomaru",
                "Hina",
                "Jaguar D. Saul|Saul",
                "Bogard",
                "Prince Grus|Grus",
                "Kujaku",
                "Hibari",
                "Doll",
                "Onigumo",
                "Strawberry",
                "Doberman",
                "Yamakaji",
                "Bastille",
                "Dalmatian",
                "Comil",
                "Lacroix",
                "Gion|Momousagi",
                "Tokikake|Chaton",
                "Vergo",
                "Donquixote Rosinante|Rosinante|Corazon",
                "T-Bone|T Bone",
                "Fullbody"
            ],
            epic: [
                "Morgan|Axe-Hand Morgan|Captain Morgan",
                "Nezumi",
                "Jango",
                "Brannew",
                "Attach",
                "X Drake|Drake",
                "Very Good",
                "Ripper",
                "Shu",
                "Maynard",
                "Stainless",
                "John Giant",
                "Mozambia",
                "Cancer",
                "Kadar",
                "Rokkaku",
                "Pudding Pudding",
                "Sharinguru",
                "Ensign Gal|Gal"
            ],
            luffillion: [
                "Jonathan|Vice Admiral Jonathan"
            ]
        }
    },
    {
        id: "logia",
        prompt: "Name a Logia Devil Fruit.",
        hint: "Fruits that turn the user into an element. Japanese or English names count.",
        tiers: {
            common: [
                "Mera Mera no Mi|Flame-Flame Fruit",
                "Hie Hie no Mi|Ice-Ice Fruit",
                "Pika Pika no Mi|Glint-Glint Fruit|Light Fruit"
            ],
            uncommon: [
                "Magu Magu no Mi|Magma Fruit",
                "Goro Goro no Mi|Rumble-Rumble Fruit|Lightning Fruit",
                "Suna Suna no Mi|Sand-Sand Fruit",
                "Moku Moku no Mi|Smoke-Smoke Fruit",
                "Yami Yami no Mi|Dark-Dark Fruit"
            ],
            rare: [
                "Gasu Gasu no Mi|Gas-Gas Fruit",
                "Yuki Yuki no Mi|Snow-Snow Fruit",
                "Numa Numa no Mi|Swamp-Swamp Fruit"
            ],
            epic: [
                "Mori Mori no Mi|Woods-Woods Fruit|Forest Fruit"
            ],
            luffillion: [
                "Ame Ame no Mi|Candy-Candy Fruit|Syrup Fruit"
            ]
        }
    },
    {
        id: "zoan",
        prompt: "Name a Zoan Devil Fruit.",
        hint: "Regular, Ancient, Mythical, or Artificial Zoans. Model names count.",
        tiers: {
            common: [
                "Hito Hito no Mi|Human-Human Fruit",
                "Tori Tori no Mi, Model: Phoenix|Phoenix",
                "Uo Uo no Mi, Model: Seiryu|Seiryu|Azure Dragon"
            ],
            uncommon: [
                "Neko Neko no Mi, Model: Leopard|Leopard",
                "Ushi Ushi no Mi, Model: Giraffe|Giraffe",
                "Inu Inu no Mi, Model: Okuchi no Makami|Okuchi no Makami",
                "Hito Hito no Mi, Model: Daibutsu|Daibutsu",
                "Zou Zou no Mi, Model: Mammoth|Mammoth",
                "Ryu Ryu no Mi, Model: Pteranodon|Pteranodon",
                "Ryu Ryu no Mi, Model: Brachiosaurus|Brachiosaurus",
                "Inu Inu no Mi, Model: Wolf|Wolf"
            ],
            rare: [
                "Ushi Ushi no Mi, Model: Bison|Bison",
                "Tori Tori no Mi, Model: Falcon|Falcon",
                "Inu Inu no Mi, Model: Jackal|Jackal",
                "Inu Inu no Mi, Model: Dachshund|Dachshund",
                "Uma Uma no Mi|Horse-Horse Fruit",
                "Mogu Mogu no Mi|Mole-Mole Fruit",
                "Hebi Hebi no Mi, Model: Anaconda|Anaconda",
                "Hebi Hebi no Mi, Model: King Cobra|King Cobra",
                "Hebi Hebi no Mi, Model: Yamata no Orochi|Yamata no Orochi",
                "Inu Inu no Mi, Model: Kyubi no Kitsune|Kyubi no Kitsune",
                "Ryu Ryu no Mi, Model: Allosaurus|Allosaurus",
                "Ryu Ryu no Mi, Model: Spinosaurus|Spinosaurus",
                "Ryu Ryu no Mi, Model: Triceratops|Triceratops",
                "Ryu Ryu no Mi, Model: Pachycephalosaurus|Pachycephalosaurus",
                "Neko Neko no Mi, Model: Saber Tiger|Saber Tiger",
                "Kumo Kumo no Mi, Model: Rosamygale Grauvogeli|Rosamygale Grauvogeli",
                "Hito Hito no Mi, Model: Onyudo|Onyudo",
                "Uma Uma no Mi, Model: Pegasus|Pegasus"
            ],
            epic: [
                "Sara Sara no Mi, Model: Axolotl|Axolotl",
                "Inu Inu no Mi, Model: Tanuki|Tanuki",
                "Mushi Mushi no Mi, Model: Kabutomushi|Kabutomushi",
                "Mushi Mushi no Mi, Model: Suzumebachi|Suzumebachi",
                "Ryu Ryu no Mi, Model: Kirin|Kirin",
                "Zou Zou no Mi|Eleph-Eleph Fruit",
                "SMILE"
            ],
            luffillion: [
                "Tori Tori no Mi, Model: Albatross|Albatross"
            ]
        }
    },
    {
        id: "whitebeard-pirates",
        prompt: "Name a member or ally of the Whitebeard Pirates.",
        hint: "Division commanders, crew, or the allied captains at Marineford.",
        tiers: {
            common: [
                "Whitebeard|Edward Newgate",
                "Marco|Marco the Phoenix",
                "Portgas D. Ace|Ace"
            ],
            uncommon: [
                "Jozu|Diamond Jozu",
                "Vista",
                "Thatch",
                "Izou|Izo",
                "Marshall D. Teach|Blackbeard"
            ],
            rare: [
                "Blamenco",
                "Rakuyo",
                "Namur",
                "Blenheim",
                "Curiel",
                "Kingdew",
                "Haruta",
                "Atmos",
                "Speed Jiru",
                "Fossa",
                "Edward Weevil|Weevil",
                "Kozuki Oden|Oden"
            ],
            epic: [
                "Squard",
                "Whitey Bay",
                "Little Oars Jr.|Oars Jr.",
                "Doma",
                "McGuy",
                "Decalvan Brothers",
                "Elmy",
                "A.O",
                "Delacuaji",
                "Ramba",
                "Andre",
                "Karma",
                "Islewan",
                "Pavlik",
                "Nosgarl",
                "Agsilly",
                "Brew",
                "Choi",
                "Arthur",
                "Palms",
                "Bizarre",
                "Blondie",
                "Amadob",
                "Hangan",
                "Ninth",
                "Reforte"
            ],
            luffillion: [
                "Zodia"
            ]
        }
    },
    {
        id: "charlotte-family",
        prompt: "Name a member of the Charlotte Family.",
        hint: "Big Mom, her 85 children, and family by marriage.",
        tiers: {
            common: [
                "Big Mom|Charlotte Linlin|Linlin",
                "Charlotte Katakuri|Katakuri",
                "Charlotte Pudding|Pudding"
            ],
            uncommon: [
                "Charlotte Cracker|Cracker",
                "Charlotte Smoothie|Smoothie",
                "Charlotte Perospero|Perospero",
                "Charlotte Brulee|Brulee",
                "Charlotte Oven|Oven",
                "Charlotte Daifuku|Daifuku",
                "Charlotte Lola|Lola",
                "Charlotte Chiffon|Chiffon"
            ],
            rare: [
                "Charlotte Amande|Amande",
                "Charlotte Mont-d'Or|Mont-d'Or",
                "Charlotte Galette|Galette",
                "Charlotte Opera|Opera",
                "Charlotte Flampe|Flampe",
                "Charlotte Praline|Praline",
                "Charlotte Compote|Compote",
                "Charlotte Snack|Snack",
                "Charlotte Moscato|Moscato",
                "Charlotte Counter|Counter",
                "Charlotte Cadenza|Cadenza",
                "Charlotte Cabaletta|Cabaletta",
                "Charlotte Raisin|Raisin",
                "Charlotte Brownie|Brownie",
                "Charlotte Joconde|Joconde",
                "Charlotte Custard|Custard",
                "Charlotte Mascarpone|Mascarpone",
                "Charlotte Noisette|Noisette",
                "Charlotte Dolce|Dolce",
                "Charlotte Dragee|Dragee",
                "Charlotte Anana|Anana",
                "Charlotte Citron|Citron",
                "Charlotte Cinnamon|Cinnamon",
                "Charlotte Angel|Angel",
                "Streusen",
                "Charlotte Mozart|Mozart"
            ],
            epic: [
                "Charlotte Newshi|Newshi",
                "Charlotte Tablet|Tablet",
                "Charlotte Dacquoise|Dacquoise",
                "Charlotte Laurin|Laurin",
                "Charlotte High-Fat|High-Fat",
                "Charlotte Normande|Normande",
                "Charlotte Marnier|Marnier",
                "Charlotte Panna|Panna",
                "Charlotte Hachis|Hachis",
                "Charlotte Gala|Gala",
                "Charlotte Nutmeg|Nutmeg",
                "Charlotte Akimeg|Akimeg",
                "Charlotte Allmeg|Allmeg",
                "Charlotte Harumeg|Harumeg",
                "Charlotte Fuyumeg|Fuyumeg",
                "Charlotte Basskarte|Basskarte",
                "Charlotte Dosmarche|Dosmarche",
                "Charlotte Kato|Kato",
                "Charlotte Poire|Poire",
                "Charlotte Effilee|Effilee",
                "Charlotte Myukuru|Myukuru",
                "Charlotte Joscarpone|Joscarpone",
                "Charlotte Bavarois|Bavarois",
                "Charlotte Nusstorte|Nusstorte",
                "Charlotte Yuen|Yuen",
                "Charlotte Saint-Marc|Saint-Marc",
                "Charlotte Compo|Compo"
            ],
            luffillion: [
                "Pound"
            ]
        }
    },
    {
        id: "donquixote-family",
        prompt: "Name a member of the Donquixote Family.",
        hint: "Doflamingo's executives, officers, and underlings.",
        tiers: {
            common: [
                "Donquixote Doflamingo|Doflamingo|Joker",
                "Trebol",
                "Vergo"
            ],
            uncommon: [
                "Diamante",
                "Pica",
                "Sugar",
                "Monet"
            ],
            rare: [
                "Donquixote Rosinante|Rosinante|Corazon",
                "Trafalgar Law|Law",
                "Baby 5|Baby Five",
                "Bellamy",
                "Dellinger",
                "Senor Pink",
                "Machvise"
            ],
            epic: [
                "Lao G",
                "Gladius",
                "Buffalo",
                "Caesar Clown|Caesar",
                "Jora|Giolla",
                "Viola|Violet"
            ],
            luffillion: [
                "Ucy"
            ]
        }
    },
    {
        id: "wano-characters",
        prompt: "Name a character from Wano Country.",
        hint: "Samurai, ninja, the Kozuki clan, Orochi's men, or Wano citizens.",
        tiers: {
            common: [
                "Kozuki Oden|Oden",
                "Yamato",
                "Kin'emon|Kinemon",
                "Kozuki Momonosuke|Momonosuke|Momo"
            ],
            uncommon: [
                "Kozuki Hiyori|Hiyori|Komurasaki",
                "Kurozumi Orochi|Orochi",
                "Kurozumi Kanjuro|Kanjuro",
                "Denjiro",
                "Kikunojo|O-Kiku|Kiku"
            ],
            rare: [
                "Raizo",
                "Kawamatsu",
                "Ashura Doji|Shutenmaru",
                "Izou|Izo",
                "Shinobu",
                "Tama|O-Tama|Otama",
                "Hyogoro",
                "Kozuki Toki|Toki",
                "Kozuki Sukiyaki|Sukiyaki|Tenguyama Hitetsu|Hitetsu",
                "Shimotsuki Yasuie|Yasuie|Tonoyasu",
                "Shimotsuki Ushimaru|Ushimaru",
                "Shimotsuki Kozaburo|Kozaburo",
                "Shimotsuki Ryuma|Ryuma"
            ],
            epic: [
                "Kurozumi Higurashi|Higurashi",
                "Fukurokuju",
                "Hotei",
                "Toko|O-Toko",
                "Tsuru|O-Tsuru",
                "Komachiyo",
                "Hihimaru",
                "Kyoshiro",
                "Onimaru|Gyukimaru",
                "Kurozumi Semimaru|Semimaru",
                "Minatomo",
                "Kunyun",
                "Chome",
                "Chuji"
            ],
            luffillion: [
                "Ochoku|Wang Zhi"
            ]
        }
    },
    {
        id: "fishmen",
        prompt: "Name a Fish-Man or Merfolk.",
        hint: "Any fish-man, merman, or mermaid character.",
        tiers: {
            common: [
                "Jinbe|Jimbei",
                "Arlong",
                "Shirahoshi"
            ],
            uncommon: [
                "Fisher Tiger",
                "Hatchan|Hachi",
                "Camie|Keimi",
                "Hody Jones|Hody",
                "Neptune|King Neptune",
                "Otohime"
            ],
            rare: [
                "Fukaboshi",
                "Ryuboshi",
                "Manboshi",
                "Kuroobi",
                "Chew",
                "Aladdin",
                "Wadatsumi",
                "Vander Decken IX|Vander Decken",
                "Shyarly|Madam Shyarly",
                "Dosun",
                "Zeo",
                "Daruma",
                "Ikaros Much",
                "Hyouzou",
                "Hammond",
                "Macro",
                "Gyaro",
                "Tansui"
            ],
            epic: [
                "Ishilly",
                "Hiramera",
                "Seira",
                "Meroie",
                "Kairen",
                "Octopako",
                "Take",
                "Shioyaki",
                "Pisaro",
                "Charlotte Praline|Praline",
                "Mero"
            ],
            luffillion: [
                "Den"
            ]
        }
    },
    {
        id: "worst-generation",
        prompt: "Name a member of the Worst Generation (the Supernovas).",
        hint: "The rookies at Sabaody with 100M+ bounties, plus Blackbeard.",
        tiers: {
            common: [
                "Monkey D. Luffy|Luffy",
                "Trafalgar Law|Law",
                "Eustass Kid|Kid"
            ],
            uncommon: [
                "Roronoa Zoro|Zoro",
                "Marshall D. Teach|Blackbeard"
            ],
            rare: [
                "Killer",
                "Jewelry Bonney|Bonney",
                "Basil Hawkins|Hawkins",
                "X Drake|Drake"
            ],
            epic: [
                "Capone Bege|Bege",
                "Scratchmen Apoo|Apoo"
            ],
            luffillion: [
                "Urouge|Mad Monk Urouge"
            ]
        }
    },
    {
        id: "revolutionaries",
        prompt: "Name a member of the Revolutionary Army.",
        hint: "Leaders, commanders, and officers of the Revolutionary Army.",
        tiers: {
            common: [
                "Monkey D. Dragon|Dragon",
                "Sabo"
            ],
            uncommon: [
                "Emporio Ivankov|Ivankov|Iva",
                "Koala",
                "Bartholomew Kuma|Kuma",
                "Inazuma",
                "Hack"
            ],
            rare: [
                "Belo Betty",
                "Morley",
                "Lindbergh",
                "Karasu"
            ],
            epic: [
                "Ahiru",
                "Bunny Joe",
                "Ushiano",
                "Jiron"
            ],
            luffillion: [
                "Terry Gilteo"
            ]
        }
    },
    {
        id: "cipher-pol",
        prompt: "Name a Cipher Pol agent (CP9, CP0, or others).",
        hint: "Any World Government secret agent, past or present.",
        tiers: {
            common: [
                "Rob Lucci|Lucci",
                "Kaku",
                "Spandam"
            ],
            uncommon: [
                "Jabra|Jyabura",
                "Blueno",
                "Kumadori",
                "Fukurou|Fukuro",
                "Kalifa|Califa",
                "Hattori"
            ],
            rare: [
                "Stussy",
                "Joseph",
                "Gismonda",
                "Guernica",
                "Spandine"
            ],
            epic: [
                "Nero",
                "Maha"
            ],
            luffillion: [
                "Wanze"
            ]
        }
    },
    {
        id: "giants",
        prompt: "Name a giant.",
        hint: "Giants of Elbaph, giant Marines, or any giant character.",
        tiers: {
            common: [
                "Dorry",
                "Brogy"
            ],
            uncommon: [
                "Hajrudin",
                "Oimo",
                "Kashii|Kashi",
                "Little Oars Jr.|Oars Jr.",
                "Jarul",
                "Jorul",
                "Loki"
            ],
            rare: [
                "John Giant",
                "Ronse",
                "Gerd",
                "Goldberg",
                "Road",
                "Jaguar D. Saul|Saul",
                "Oars",
                "Harald|King Harald"
            ],
            epic: [
                "Ripley",
                "Colon",
                "Ida",
                "Lacroix"
            ],
            luffillion: [
                "Stansen"
            ]
        }
    },
    {
        id: "minks",
        prompt: "Name a Mink.",
        hint: "Furry residents of Zou and members of the Mink Tribe.",
        tiers: {
            common: [
                "Carrot",
                "Pedro",
                "Bepo"
            ],
            uncommon: [
                "Inuarashi|Duke Dogstorm|Dogstorm",
                "Nekomamushi|Master Cat Viper|Cat Viper",
                "Wanda",
                "Shishilian",
                "Concelot",
                "Pekoms"
            ],
            rare: [
                "Giovanni",
                "Roddy",
                "Black Back",
                "Bariete",
                "Miyagi",
                "Milky"
            ],
            epic: [
                "Zepo",
                "Sicilian"
            ],
            luffillion: [
                "Tristan"
            ]
        }
    },
    {
        id: "baroque-works",
        prompt: "Name a Baroque Works agent.",
        hint: "Officer Agents, Frontier Agents, the Unluckies, and their partners.",
        tiers: {
            common: [
                "Crocodile|Mr. 0|Mr 0",
                "Nico Robin|Miss All Sunday|Robin",
                "Bon Clay|Mr. 2|Bentham"
            ],
            uncommon: [
                "Daz Bonez|Mr. 1",
                "Miss Doublefinger|Zala|Paula",
                "Galdino|Mr. 3",
                "Miss Goldenweek|Marianne"
            ],
            rare: [
                "Mr. 4|Babe",
                "Miss Merry Christmas|Drophy",
                "Mr. 5|Gem",
                "Miss Valentine|Mikita",
                "Nefertari Vivi|Miss Wednesday|Vivi",
                "Igaram|Mr. 8",
                "Mr. 9",
                "Miss Monday"
            ],
            epic: [
                "Mr. 7",
                "Miss Father's Day",
                "Mr. 11",
                "Lassoo",
                "Mr. 13",
                "Miss Mother's Day"
            ],
            luffillion: [
                "Miss Friday"
            ]
        }
    },
    {
        id: "beast-pirates",
        prompt: "Name a member of the Beast Pirates.",
        hint: "All-Stars, Tobiroppo, Headliners, Gifters, and Pleasures.",
        tiers: {
            common: [
                "Kaido|Kaidou",
                "King|Alber",
                "Queen",
                "Jack"
            ],
            uncommon: [
                "Ulti",
                "Page One",
                "Who's-Who|Whos Who",
                "Black Maria",
                "Sasaki"
            ],
            rare: [
                "X Drake|Drake",
                "Basil Hawkins|Hawkins",
                "Scratchmen Apoo|Apoo",
                "Yamato",
                "Holdem",
                "Speed",
                "Babanuki",
                "Daifugo",
                "Sheepshead",
                "Ginrummy",
                "Kurozumi Kanjuro|Kanjuro"
            ],
            epic: [
                "Bao Huang",
                "Briscola",
                "Hamlet",
                "Poker",
                "Dobon",
                "Alpacaman",
                "Madilloman",
                "Gazelleman",
                "Mouseman",
                "Batman",
                "Solitaire"
            ],
            luffillion: [
                "Fourtricks"
            ]
        }
    },
    {
        id: "billion-bounties",
        prompt: "Name a character with a bounty of over 1 billion berries.",
        hint: "Any known bounty strictly above 1,000,000,000 berries.",
        tiers: {
            common: [
                "Monkey D. Luffy|Luffy",
                "Shanks|Red-Haired Shanks",
                "Kaido|Kaidou",
                "Big Mom|Charlotte Linlin"
            ],
            uncommon: [
                "Marshall D. Teach|Blackbeard",
                "Whitebeard|Edward Newgate",
                "Roronoa Zoro|Zoro",
                "Trafalgar Law|Law",
                "Eustass Kid|Kid",
                "Gol D. Roger|Roger",
                "Sanji"
            ],
            rare: [
                "Dracule Mihawk|Mihawk",
                "Crocodile",
                "Buggy|Buggy the Clown",
                "Jinbe|Jimbei",
                "Charlotte Katakuri|Katakuri"
            ],
            epic: [
                "King|Alber",
                "Marco|Marco the Phoenix"
            ],
            luffillion: [
                "Queen"
            ]
        }
    },
    {
        id: "doctors",
        prompt: "Name a doctor or healer in One Piece.",
        hint: "Physicians, surgeons, or healers who practise medicine.",
        tiers: {
            common: [
                "Tony Tony Chopper|Chopper",
                "Trafalgar Law|Law"
            ],
            uncommon: [
                "Dr. Kureha|Kureha|Doctorine",
                "Dr. Hiriluk|Hiriluk|Hiruluk",
                "Crocus",
                "Dr. Hogback|Hogback",
                "Mansherry|Princess Mansherry"
            ],
            rare: [
                "Doc Q",
                "Dr. Vegapunk|Vegapunk"
            ],
            epic: [
                "Dr. Indigo|Indigo"
            ],
            luffillion: [
                "Isshi-20|Twenty MDs"
            ]
        }
    },
    {
        id: "celestial-dragons",
        prompt: "Name a Celestial Dragon, Elder Star, or World Noble.",
        hint: "World Nobles of Mary Geoise, the Five Elders, the Holy Knights, and Imu.",
        tiers: {
            common: [
                "Imu|Im",
                "Saint Jaygarcia Saturn|Saturn"
            ],
            uncommon: [
                "Saint Marcus Mars|Mars",
                "Saint Topman Warcury|Warcury",
                "Saint Ethanbaron V. Nusjuro|Nusjuro",
                "Saint Shepherd Ju Peter|Ju Peter"
            ],
            rare: [
                "Saint Charlos|Charlos",
                "Saint Rosward|Rosward",
                "Saint Shalria|Shalria",
                "Saint Figarland Garling|Garling",
                "Donquixote Mjosgard|Mjosgard",
                "Donquixote Homing|Homing"
            ],
            epic: [
                "Donquixote Doflamingo|Doflamingo",
                "Donquixote Rosinante|Rosinante|Corazon",
                "Figarland Shamrock|Shamrock",
                "Saint Rimoshifu Killingham|Killingham",
                "Saint Shepherd Sommers|Sommers",
                "Gunko"
            ],
            luffillion: [
                "Saint Jalmack|Jalmack"
            ]
        }
    }
];
}),
"[project]/src/data/bank/locations.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCATIONS_QUESTION",
    ()=>LOCATIONS_QUESTION
]);
const LOCATIONS_QUESTION = {
    id: "locations",
    prompt: "Name a location in One Piece.",
    hint: "Islands, kingdoms, villages, cities, seas, Marine bases, prisons, or landmarks.",
    tiers: {
        common: [
            "East Blue",
            "Grand Line|Paradise",
            "New World",
            "Red Line",
            "Alabasta|Arabasta|Alabasta Kingdom",
            "Skypiea|Sky Island",
            "Marineford",
            "Dressrosa",
            "Wano Country|Wano",
            "Laugh Tale|Raftel"
        ],
        uncommon: [
            "West Blue",
            "North Blue",
            "South Blue",
            "Calm Belt",
            "All Blue",
            "Foosha Village|Windmill Village|Fusha Village",
            "Shells Town|Shell Town",
            "Orange Town",
            "Syrup Village",
            "Baratie",
            "Arlong Park",
            "Loguetown|Logue Town",
            "Reverse Mountain",
            "Whisky Peak|Whiskey Peak",
            "Little Garden",
            "Drum Island|Drum|Drum Kingdom",
            "Jaya",
            "Water 7|Water Seven",
            "Enies Lobby",
            "Thriller Bark",
            "Sabaody Archipelago|Shabondy Archipelago|Sabaody|Shabondy",
            "Amazon Lily",
            "Impel Down",
            "Fish-Man Island|Fishman Island",
            "Punk Hazard"
        ],
        rare: [
            "Zou",
            "Whole Cake Island|Totto Land",
            "Onigashima",
            "Egghead|Egghead Island",
            "Elbaph|Elbaf",
            "Mary Geoise|Mariejois",
            "Dawn Island",
            "Goa Kingdom",
            "Gray Terminal",
            "Mt. Colubo|Mount Colubo",
            "Shimotsuki Village",
            "Cocoyasi Village|Cocoyashi Village",
            "Conomi Islands",
            "Twin Cape",
            "Alubarna",
            "Rainbase",
            "Nanohana",
            "Yuba",
            "Sakura Kingdom",
            "Mock Town",
            "Upper Yard",
            "Shandora",
            "Angel Island",
            "Long Ring Long Land",
            "Florian Triangle",
            "Rusukaina|Ruskaina",
            "Momoiro Island|Kamabakka Kingdom|Kamabakka",
            "Ohara",
            "Baltigo",
            "Hachinosu|Pirate Island|Fullalead",
            "God Valley",
            "Lodestar Island|Roadstar Island",
            "New Marineford",
            "Ryugu Kingdom",
            "Ryugu Palace",
            "Sea Forest",
            "Corrida Colosseum",
            "Green Bit",
            "Tontatta Kingdom",
            "Mokomo Dukedom",
            "Flower Capital",
            "Kuri",
            "Udon",
            "Ringo",
            "Hakumai",
            "Kibi",
            "Lulusia Kingdom|Lulusia",
            "Sorbet Kingdom",
            "Weatheria",
            "Kuraigana Island",
            "Karakuri Island|Baldimore",
            "Tequila Wolf",
            "Germa Kingdom",
            "Navarone|G-8",
            "White Sea",
            "White-White Sea",
            "Sphinx",
            "Winner Island",
            "Flevance|White City",
            "Swallow Island",
            "Minion Island",
            "Lvneel Kingdom",
            "Banaro Island",
            "Raijin Island",
            "Risky Red Island",
            "Mystoria Island",
            "Boin Archipelago|Bowin Islands",
            "Torino Kingdom",
            "Namakura Island|Harahettania",
            "Kenzan Island|Tehna Gehna Kingdom",
            "Sabaody Park",
            "Human Auctioning House",
            "Shakky's Rip-Off Bar|Shakky's Bar",
            "Fish-Man District",
            "Mermaids Cove|Mermaid Cove",
            "Coral Hill",
            "Gyoverly Hills",
            "Gyoncorde Plaza",
            "Crimson Hell|Level 1",
            "Beast Hell|Level 2",
            "Starvation Hell|Level 3",
            "Blazing Hell|Level 4",
            "Freezing Hell|Level 5",
            "Newkama Land|Level 5.5",
            "Eternal Hell|Level 6",
            "Pangaea Castle",
            "Domain of the Gods",
            "Gates of Justice"
        ],
        epic: [
            "Bridge of Hesitation",
            "Tower of Law|Tower of Justice",
            "Judicial Island",
            "Scrap Island",
            "Franky House",
            "Galley-La Headquarters|Dock One",
            "Blue Station",
            "Shift Station",
            "Acacia",
            "Flower Hill",
            "Old King's Plateau",
            "Royal Palace of Dressrosa",
            "Toy House",
            "SMILE Factory",
            "Sweet City",
            "Whole Cake Chateau",
            "Mirro-World|Mirror World",
            "Seducing Woods",
            "Cacao Island",
            "Nuts Island",
            "Biscuits Island",
            "Cheese Island",
            "Candy Island",
            "Jam Island",
            "Wheat Island",
            "Milk Island",
            "Liqueur Island",
            "Ebisu Town",
            "Okobore Town",
            "Bakura Town",
            "Amigasa Village",
            "Kuri Beach",
            "Port Mogura|Mogura Port",
            "Tokage Port",
            "Habu Port",
            "Itachi Port",
            "Udon Prisoner Mine",
            "Northern Cemetery",
            "Enma Shrine",
            "Mt. Atama|Mount Atama",
            "Mt. Fuji",
            "Kurau City",
            "Whale Forest",
            "Right Belly Fortress",
            "Cloud End",
            "Heaven's Gate",
            "Milky Road",
            "Birka",
            "Giant Jack",
            "Drum Rockies",
            "Drum Castle",
            "Bighorn",
            "Cocoa Weed",
            "Gyasta",
            "Robelle",
            "Erumalu",
            "Katorea",
            "Spiders Cafe",
            "Rain Dinners",
            "Sandora Desert",
            "Sandora River",
            "Tomb of the Kings",
            "Cactus Island",
            "Gosa Village",
            "Island of Rare Animals",
            "Organ Islands",
            "Gecko Islands",
            "Goat Island",
            "G-1",
            "G-5",
            "Elegia",
            "Gran Tesoro",
            "Pucci|Putchi",
            "San Faldo",
            "St. Poplar",
            "Enies Lobby Main Island",
            "Rubeck Island",
            "Notice",
            "Spider Miles",
            "Rommel Kingdom",
            "Kano Country",
            "Ballywood Kingdom",
            "Briss Kingdom",
            "Vodka Kingdom",
            "Prodence Kingdom",
            "Ilusia Kingdom",
            "Roshwan Kingdom",
            "Shishano Kingdom",
            "Tajine Kingdom",
            "Mogaro Kingdom",
            "Evil Black Drum Kingdom|Black Drum Kingdom",
            "Oykot Kingdom",
            "Baterilla",
            "Sixis",
            "Polestar Islands",
            "Mirrorball Island",
            "Foolshout Island",
            "Cozia",
            "Vira",
            "Centaurea",
            "Karate Island",
            "Guanhao",
            "Merveille",
            "Broc Coli Island",
            "Applenine Island",
            "Foodvalten",
            "Sampa Island",
            "Yukiryu Island",
            "Gourmet Island",
            "Ukkari Hot-Spring Island",
            "Crown Island",
            "Asuka Island",
            "Mecha Island",
            "Omatsuri Island",
            "Samba Island",
            "Firs Island",
            "Second Island",
            "Hand Island",
            "Nebulandia",
            "Silver Mine",
            "Delta Island",
            "Jail Island",
            "Warship Island|Lost Island",
            "Kuraigana Castle",
            "Labophase",
            "Fabiriophase",
            "Underworld",
            "Sun World",
            "Heaven World",
            "G-2",
            "G-3",
            "G-14",
            "Tamarisk",
            "Toroa",
            "Kenzan",
            "Konomi",
            "Yotsuba Island Region",
            "Kumate Island",
            "Sambas Region",
            "Partia",
            "Papanapple Island",
            "Potato Island",
            "Pie Island",
            "Noko Island",
            "Fudge Island",
            "Kibi Wasteland",
            "Rasetsu Town",
            "Kibi Region",
            "Oden Castle",
            "Dadan's Bandit Hut",
            "Partys Bar|Party's Bar",
            "Meshi",
            "Tarai Current",
            "Knock Up Stream",
            "Aqua Laguna",
            "White Strom",
            "Maubeugemour Sea",
            "Florian",
            "Boin",
            "Totto Land Waters"
        ],
        luffillion: [
            "Kyuka Island"
        ]
    }
};
}),
"[project]/src/data/bank/ships.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHIPS_QUESTION",
    ()=>SHIPS_QUESTION
]);
const SHIPS_QUESTION = {
    id: "ships",
    prompt: "Name a ship.",
    hint: "Any named ship, submarine, ark, sea train, or vessel that has sailed or flown in One Piece.",
    tiers: {
        common: [
            "Going Merry|Merry",
            "Thousand Sunny|Sunny",
            "Oro Jackson",
            "Moby Dick",
            "Red Force"
        ],
        uncommon: [
            "Polar Tang",
            "Victoria Punk",
            "Queen Mama Chanter",
            "Saber of Xebec",
            "Thriller Bark",
            "Baratie",
            "Noah",
            "Pluton"
        ],
        rare: [
            "Ark Maxim|Maxim",
            "Going Luffy-senpai|Mister Luffy Go|Going Luffy",
            "Hitsugibune|Coffin Boat",
            "Striker",
            "Perfume Yuda",
            "Puffing Tom",
            "Rocketman",
            "Flying Dutchman",
            "Yonta Maria",
            "Nostra Castello",
            "Shark Superb",
            "Big Top",
            "Miss Love Duck",
            "Bezan Black",
            "Dreadnaught Sabre",
            "Great Erik",
            "Wind Granma",
            "Sexy Foxy",
            "Mini Merry II|Mini Merry",
            "Shark Submerge III|Shark Submerge",
            "Mammoth",
            "Gran Tesoro",
            "Piece of Spadille",
            "Sleeping White Horse of the Forest",
            "Happosai",
            "Ipposai",
            "Usoland",
            "Naglfar",
            "Santa Maria",
            "Nita Maria",
            "Jewelry Margherita"
        ],
        epic: [
            "Grudge Dolph",
            "Stay Tune",
            "Liberal Hind",
            "Hanjomaru",
            "Numancia Flamingo",
            "Baroque Gustave",
            "Swanda Express",
            "New Witch's Tongue",
            "Bliking",
            "Victory Hunter",
            "Utan Sonar",
            "Snapper Head",
            "St. Briss|Saint Briss",
            "Karasumaru",
            "Numabou",
            "Puffing Ice",
            "Shiro Mokuba I|Shiro Mokuba",
            "Brachio Tank V|Brachio Tank",
            "Kurosai FR-U IV|Kurosai",
            "Battle Franky|Cutty Flam",
            "Takoyaki 8",
            "Tartes",
            "Full",
            "Sabagashira I|Sabagashira",
            "Hakubokumaru",
            "Island Ship|Shima Fune",
            "Ark Proverbs",
            "Salamander",
            "Killers Ship",
            "Gero Gero",
            "Tarai Boat",
            "Bananawani Boat",
            "Buster Call Warship",
            "Cuckoo-Puff",
            "Karoo Boat",
            "Waver",
            "Billower Bike",
            "Tarielshin",
            "Cutie Wagon",
            "Grosseade",
            "White Tiger",
            "Great Michael",
            "Orbit",
            "Ao Chari|Aokiji's Bicycle",
            "Bon Chari|Bubble Bike",
            "Whitey Bay's Icebreaker|Icebreaker",
            "Garp's Dog Warship|Fist of Love Warship",
            "Blackbeard's Log Raft|Jaya Log Raft",
            "SAD Tanker",
            "Black Rhino FR-U IV",
            "General Franky|Iron Pirate",
            "Vegaforce-01",
            "Tarte Battleship|Tarte 25",
            "Escargot Ship|Germa Snail Ship",
            "Rumbar Pirates Ghost Ship|Ghost Ship",
            "Enies Lobby Judicial Ship|Judicial Ship",
            "Sand Sled",
            "Royal Ryugu Gondola",
            "Uta's Concert Ship",
            "Noland's Explorer Ship",
            "Brag Men Ship",
            "Perospero's Candy Ship",
            "Daifuku's Lamp Ship",
            "Smoothie's Ship"
        ],
        luffillion: [
            "Cooking George"
        ]
    }
};
}),
"[project]/src/data/bank/swords.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SWORDS_QUESTION",
    ()=>SWORDS_QUESTION
]);
const SWORDS_QUESTION = {
    id: "swords",
    prompt: "Name a sword.",
    hint: "Any named blade, katana, saber, or graded Meito from the manga, SBS, Vivre Cards, or films.",
    tiers: {
        common: [
            "Wado Ichimonji|Wado",
            "Enma",
            "Shusui",
            "Sandai Kitetsu|Kitetsu",
            "Yoru|Kokuto Yoru|Black Blade Yoru"
        ],
        uncommon: [
            "Ace",
            "Gryphon|Griffin",
            "Kikoku",
            "Napoleon",
            "Murakumogiri",
            "Ame no Habakiri|Habakiri"
        ],
        rare: [
            "Yubashiri",
            "Nidai Kitetsu",
            "Shodai Kitetsu",
            "Soul Solid",
            "Shigure",
            "Raiu",
            "Durandal",
            "Funkfreed",
            "Kiribachi",
            "Yakuza Kasen",
            "Punishers",
            "Kashu",
            "Oto",
            "Kogarashi",
            "Shirauo",
            "Pretzel",
            "Soto Muso",
            "Sukesan"
        ],
        epic: [
            "Kakusan",
            "Same-kiri Bocho|Samekiri Bocho|Shark-Cleaver",
            "Eisen Whip",
            "Cerberus",
            "Konpira",
            "Kessui",
            "Kirisame",
            "Ama no Murakumo",
            "Ice Saber",
            "Warabide Sword|Warabideto|Straw Sword",
            "Hana Arashi|Nose Storm",
            "Kogatana|Mihawk's Dagger",
            "Cognac",
            "Yamaoroshi",
            "Franken",
            "Bamboo",
            "Nakiri Swords|Nakiri Blades",
            "Karakuri Sword",
            "Honebami Toshiro",
            "Cat Claws|Neko no Te",
            "Shichiseiken|Seven Star Sword",
            "Kosho",
            "Kyokuren",
            "Hyper Shibireru-kun",
            "Fragarach",
            "Eclipse",
            "Nemesis",
            "Gram",
            "Stigma",
            "Tohu",
            "Zangetsumaru",
            "Kukri|Helmeppo's Kukri",
            "Blue Sword",
            "Rebecca's Blunt Sword|Blunt Sword",
            "Takeru",
            "Mogura",
            "Shotels|Mammoth Shotels",
            "Naginata",
            "Karakuri Rasento",
            "Maser Saber",
            "Wanyudo",
            "Tsuyushigure",
            "Beam Saber|Laser Saber",
            "Green Blood Yoru|Seraphim Sword",
            "King's Breaker Sword",
            "Vista's Rose Rapiers",
            "Rayleigh's Saber",
            "Garling's Saber",
            "Rocks's Saber",
            "Kyros's Greatsword",
            "Diamante's Rapier",
            "Pica's Giant Katana",
            "Suleiman's Saber",
            "Bobbin's Greatsword",
            "Smoothie's Giant Sword",
            "Cracker's Biscuit Sword",
            "Tamago's Cane Sword",
            "Perospero's Candy Rapier",
            "Hyouzou's Poison Blades",
            "Hatchan's Six Swords",
            "Daz Bonez's Arm Blades",
            "Galdino's Candle Sword",
            "T-Bone's Knight Sword",
            "Momonga's Katana",
            "Onigumo's Eight Sabers",
            "Laffitte's Cane Sword",
            "Shiryu's Nodachi",
            "Pedro's Saber",
            "Wanda's Saber",
            "Shishilian's Rapier",
            "Inuarashi's Leg Swords",
            "Kikunojo's Nodachi",
            "Jarul's Helmet Sword"
        ],
        luffillion: [
            "Terry Sword"
        ]
    }
};
}),
"[project]/src/data/bank/techniques.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TECHNIQUES_QUESTION",
    ()=>TECHNIQUES_QUESTION
]);
const TECHNIQUES_QUESTION = {
    id: "techniques",
    prompt: "Name an attack or technique.",
    hint: "Named attacks, Gears, sword styles, kicks, Haki, Rokushiki, Devil Fruit moves, and martial arts.",
    tiers: {
        common: [
            "Gomu Gomu no Pistol|Gum-Gum Pistol|Pistol",
            "Gomu Gomu no Gatling|Gum-Gum Gatling|Gatling",
            "Gomu Gomu no Bazooka|Gum-Gum Bazooka|Bazooka",
            "Gear Second|Gear 2|Second Gear",
            "Gear Fourth|Gear 4|Fourth Gear",
            "Gear Fifth|Gear 5|Fifth Gear",
            "Santoryu|Three Sword Style",
            "Diable Jambe|Devil Leg",
            "Armament Haki|Busoshoku Haki|Busoshoku",
            "Conqueror's Haki|Haoshoku Haki|Haoshoku|Supreme King Haki"
        ],
        uncommon: [
            "Gomu Gomu no Rifle|Gum-Gum Rifle|Rifle",
            "Gomu Gomu no Whip|Gum-Gum Whip|Whip",
            "Gomu Gomu no Balloon|Gum-Gum Balloon|Balloon",
            "Gomu Gomu no Rocket|Gum-Gum Rocket|Rocket",
            "Gomu Gomu no Jet Pistol|Gum-Gum Jet Pistol|Jet Pistol",
            "Gomu Gomu no Jet Gatling|Gum-Gum Jet Gatling|Jet Gatling",
            "Gomu Gomu no Gigant Pistol|Gum-Gum Giant Pistol|Gigant Pistol|Giant Pistol",
            "Gomu Gomu no Elephant Gun|Gum-Gum Elephant Gun|Elephant Gun",
            "Gomu Gomu no Red Hawk|Gum-Gum Red Hawk|Red Hawk",
            "Gomu Gomu no Red Roc|Gum-Gum Red Roc|Red Roc",
            "Gomu Gomu no Kong Gun|Gum-Gum Kong Gun|Kong Gun",
            "Gomu Gomu no King Kong Gun|Gum-Gum King Kong Gun|King Kong Gun",
            "Gomu Gomu no Bajrang Gun|Gum-Gum Bajrang Gun|Bajrang Gun",
            "Gear Third|Gear 3|Third Gear",
            "Boundman|Bounce-Man|Bounceman",
            "Snakeman|Snake-Man",
            "Tankman|Tank-Man",
            "Oni Giri|Onigiri|Demon Slash",
            "Sanzen Sekai|Three Thousand Worlds",
            "Ittoryu Iai: Shishi Sonson|Shishi Sonson|Lion's Song",
            "Kyutoryu: Asura|Asura|Ashura|Nine Sword Style",
            "Tatsu Maki|Tatsumaki|Dragon Twister",
            "Ifrit Jambe",
            "Hiken|Fire Fist",
            "Room"
        ],
        rare: [
            "Shambles|Chambres",
            "Kamusari|Divine Departure",
            "Raimei Hakke|Thunder Bagua",
            "Hakai|Ocean Sovereignty|Conquest of the Sea",
            "Torikago|Birdcage",
            "Ice Age",
            "Observation Haki|Kenbunshoku Haki|Kenbunshoku|Mantra",
            "Soru|Shave",
            "Geppo|Moonwalk",
            "Tekkai|Iron Body",
            "Rankyaku|Tempest Kick|Storm Leg",
            "Shigan|Finger Pistol",
            "Kami-e|Kamie|Paper Art",
            "Rokuogan|Six King Gun",
            "Sky Walk",
            "Blue Walk",
            "Gomu Gomu no Bullet|Gum-Gum Bullet|Bullet",
            "Gomu Gomu no Stamp|Gum-Gum Stamp|Stamp",
            "Gomu Gomu no Spear|Gum-Gum Spear|Spear",
            "Gomu Gomu no Axe|Gum-Gum Battle Axe|Battle Axe",
            "Gomu Gomu no Bell|Gum-Gum Bell|Kane",
            "Gomu Gomu no Storm|Gum-Gum Storm|Storm",
            "Gomu Gomu no Fireworks|Gum-Gum Fireworks|Hanabi",
            "Gomu Gomu no Jet Bazooka|Gum-Gum Jet Bazooka|Jet Bazooka",
            "Gomu Gomu no Jet Whip|Gum-Gum Jet Whip|Jet Whip",
            "Gomu Gomu no Grizzly Magnum|Gum-Gum Grizzly Magnum|Grizzly Magnum",
            "Gomu Gomu no Elephant Gatling|Gum-Gum Elephant Gatling|Elephant Gatling",
            "Gomu Gomu no Hawk Gatling|Gum-Gum Hawk Gatling|Hawk Gatling",
            "Gomu Gomu no Leo Bazooka|Gum-Gum Leo Bazooka|Leo Bazooka",
            "Gomu Gomu no Culverin|Gum-Gum Culverin|Culverin",
            "Gomu Gomu no Black Mamba|Gum-Gum Black Mamba|Black Mamba",
            "Gomu Gomu no King Cobra|Gum-Gum King Cobra|King Cobra",
            "Gomu Gomu no Dawn Rocket|Gum-Gum Dawn Rocket|Dawn Rocket",
            "Gomu Gomu no Dawn Whip|Gum-Gum Dawn Whip|Dawn Whip",
            "Gomu Gomu no Dawn Gatling|Gum-Gum Dawn Gatling|Dawn Gatling",
            "Gomu Gomu no Star Gun|Gum-Gum White Star Gun|White Star Gun|Star Gun",
            "Rengoku Oni Giri|Purgatory Onigiri",
            "Hyaku Hachi Pound Ho|108 Pound Phoenix|108 Caliber Phoenix",
            "Sen Hachi Ju Pound Ho|1080 Pound Phoenix|1080 Caliber Phoenix",
            "Rashomon|Nitoryu Iai: Rashomon",
            "Tora Gari|Tiger Hunt",
            "Ichidai Sanzen Daisen Sekai|Billion-Fold World Trichiliocosm",
            "En-Oh Santoryu: Ippyaku Sanjo Hiryu Jigoku|King of Hell|Dragon Damnation",
            "Concasse",
            "Anti-Manner Kick Course",
            "Mouton Shot|Mutton Shot",
            "Hell Memories",
            "Boeuf Burst",
            "Party Table Kick Course",
            "Thunderbolt Tempo",
            "Mirage Tempo",
            "Zeus Breeze Tempo",
            "Fire Bird Star|Hi no Tori Boshi",
            "Impact Wolf",
            "Monster Point",
            "Kung Fu Point",
            "Heavy Point",
            "Guard Point",
            "Cien Fleur|One Hundred Fleur",
            "Gigantesco Mano",
            "Demonio Fleur",
            "Clutch",
            "Coup de Vent",
            "Franky Radical Beam|Radical Beam",
            "Coup de Boo",
            "Yahazu Giri|Arrow Notch Slash|Three-Verse Humming: Arrow-Notch Slash",
            "Soul Solid",
            "Karakusa Gawara Seiken|Arabesque Tile True Punch",
            "Buraikan|Vagabond Drill",
            "Gamma Knife",
            "Shock Wille",
            "Puncture Wille",
            "Takt",
            "Injection Shot",
            "Damned Punk",
            "Punk Rotten",
            "Punk Corna Dio",
            "Dai Enkai: Entei|Flame Emperor|Entei",
            "Ryusoken|Dragon Claw Fist",
            "Bolo Breath|Blast Breath",
            "Galaxy Impact",
            "Honesty Impact",
            "Ursus Shock",
            "Mero Mero Mellow|Love-Love Beam|Love-Love Mellow",
            "Perfume Femur",
            "Desert Spada",
            "Sables",
            "El Thor",
            "Raigo|Advent of Thunder",
            "Black Hole",
            "Kurouzu|Black Vortex",
            "Hydra",
            "Negative Hollow",
            "Future Sight",
            "Ryuo",
            "Gomu Gomu no Cannon|Gum-Gum Cannon",
            "Gomu Gomu no Volcano|Gum-Gum Volcano",
            "Gomu Gomu no Net|Gum-Gum Net",
            "Gomu Gomu no Shield|Gum-Gum Shield",
            "Gomu Gomu no Pinwheel|Gum-Gum Pinwheel|Kazaguruma",
            "Gomu Gomu no Octopus|Gum-Gum Octopus",
            "Gomu Gomu no Boh|Gum-Gum Space-Out|Spaced Out",
            "Gomu Gomu no UFO|Gum-Gum UFO",
            "Mizu Luffy|Water Luffy",
            "Nightmare Luffy",
            "Afro Luffy",
            "Gomu Gomu no Twin Jet Pistol|Twin Jet Pistol",
            "Gomu Gomu no Jet Stamp|Jet Stamp",
            "Gomu Gomu no Jet Bullet|Jet Bullet",
            "Gomu Gomu no Jet Shell|Jet Shell",
            "Gomu Gomu no Gigant Axe|Gigant Axe|Giant Battle Axe",
            "Gomu Gomu no Gigant Whip|Gigant Whip|Giant Whip",
            "Gomu Gomu no Gigant Stamp|Gigant Stamp|Giant Stamp",
            "Gomu Gomu no Gigant Thor Axe|Thor Axe|Gigant Thor Axe",
            "Gomu Gomu no Roc Gun|Roc Gun",
            "Gomu Gomu no Roc Gatling|Roc Gatling",
            "Gomu Gomu no Rhino Schneider|Rhino Schneider",
            "Gomu Gomu no Kong Organ|Kong Organ|Organ",
            "Gomu Gomu no Over Kong Gun|Over Kong Gun",
            "Gomu Gomu no Python|Python",
            "Gomu Gomu no Dawn Cymbal|Dawn Cymbal",
            "Gomu Gomu no Dawn Stamp|Dawn Stamp",
            "Gomu Gomu no Kaminari|Gum-Gum Lightning",
            "Gomu Gomu no Gigant|Gum-Gum Giant",
            "Ittoryu|One Sword Style",
            "Nitoryu|Two Sword Style",
            "Mutoryu|No Sword Style",
            "Toro Nagashi",
            "Nigiri|Two Sword Tower Climb",
            "Daishinkan|Great Dragon Shock",
            "Kokujo O Tatsumaki|Black Rope Dragon Twister",
            "Enbima Yonezu Oni Giri",
            "Asura Ichibugin|Silver Mist",
            "Asura Bakkei: Moja no Tawamure|Dead Man's Game",
            "Ul-Tora Gari|Ultra Tiger Hunt",
            "Yaki Oni Giri|Flaming Onigiri",
            "Taka Nami|Hawk Wave",
            "Daibutsu Giri|Great Buddha Cut",
            "Sai Kuru|Rolling Rhino",
            "Nigori-Zake",
            "Hyokindama",
            "Sanjuroku Pound Ho|36 Pound Phoenix",
            "Nanajuni Pound Ho|72 Pound Phoenix",
            "Hiryu: Kaen|Flying Dragon Blaze",
            "Collier",
            "Epaule",
            "Cotelette",
            "Selle",
            "Poitrine",
            "Gigot",
            "Flanchet",
            "Collier Strike",
            "Flambage Shot",
            "Bien Cuit: Grill Shot|Grill Shot",
            "Spectre"
        ],
        epic: [
            "Extra Hachis",
            "Poele a Frire: Spectre|Poele a Frire",
            "Thunder Lance Tempo",
            "Tornado Tempo",
            "Cyclone Tempo",
            "Rain Tempo",
            "Thunder Breed Tempo",
            "Skull Exploding Grass|Dokuro Bakuhatsu So",
            "Green Star: Devil",
            "Bamboo Javelin| Take Javelin",
            "Usopp Hammer",
            "Usopp Spell",
            "Usopp Wagomu|Usopp Rubber Band of Doom",
            "Tabasco Star|Tabasco Boshi",
            "Kayaku Boshi|Gunpowder Star",
            "Kemuri Boshi|Smoke Star",
            "Horn Point",
            "Brain Point",
            "Walk Point",
            "Jumping Point",
            "Arm Point",
            "Kokutei Roseo|Roseo",
            "Cloven Roseo Metel|Kokutei Roseo Metel",
            "Scope",
            "Mil Fleur|One Thousand Fleur",
            "Seis Fleur",
            "Dos Fleur",
            "Grand Jacuzzi Clutch",
            "Spank",
            "Cien Fleur: Wing",
            "Strong Right",
            "Weapons Left",
            "Fresh Fire",
            "General Cannon|Gaon Cannon",
            "Franky Centaur",
            "Franky Iron Boxing",
            "Nipple Lights",
            "Aubade Coup Droit",
            "Gavotte Bond en Avant",
            "Party Music",
            "Nemuriuta Flanc|Lullaby Parry",
            "Samegawara Seiken|Shark Brick Fist",
            "Gosenmaigawara Seiken|Five Thousand Tile True Punch",
            "Ipponzeoi|Ocean Current Shoulder Throw",
            "Fish-Man Karate|Fishman Karate",
            "Fish-Man Jujutsu|Fishman Jujutsu",
            "Mes|Scalpel",
            "Counter Shock",
            "Radio Knife",
            "Amputate",
            "Sterben",
            "K-Room",
            "R-Room",
            "Anesthesia",
            "Curtain",
            "Scan",
            "Assign",
            "Punk Gibson",
            "Punk Clash",
            "Punk Pistols",
            "Repel",
            "Higan|Fire Gun",
            "Hotarubi: Hidaruma|Fiery Doll",
            "Jujika|Cross Fire",
            "St. Elmo's Fire",
            "Dragon Breath|Ibuki",
            "Pheasant Beak",
            "Ice Time",
            "Ice Time Capsule",
            "Partisan",
            "Yasakani no Magatama",
            "Ama no Murakumo",
            "Yata no Kagami|Sacred Jewel",
            "Dai Funka|Great Eruption",
            "Meigo|Hellhound",
            "Ryusei Kazan|Meteor Volcano",
            "Inugami Guren",
            "Gravito",
            "Moko|Raging Tiger",
            "Ragnaraku|Ragnarok",
            "Horai Hakke|Destroyer of Death Thunder Bagua",
            "Kaen Daiko|Flame Dragon Torch",
            "Gundari: Ryuseigun|Kundali Dragon Swarm",
            "Kosanze Ragnaraku",
            "Ikoku|Ikoku Sovereignty",
            "Maser Cannon|Maser Ho",
            "Cognac",
            "Misery",
            "Heavenly Fire|Tenjo no Bonfire",
            "Togen Totsuka|Paradise Totsuka",
            "Togen Shirataki|Paradise Waterfall",
            "Narikabura Arrow",
            "Namuji Hyoga|Glacier Fang",
            "Chikara Mochi|Power Mochi",
            "Zangiri Mochi|Buzz Cut Mochi",
            "Muso Donuts|Unstoppable Donuts",
            "Yaki Mochi|Grilled Mochi",
            "Overheat",
            "Parasite",
            "God Thread",
            "Sixteen Holy Bullets|Juroppatsu no Seikyo",
            "Black Knight",
            "Slave Arrow",
            "Pistol Kiss",
            "Ground Death",
            "Ground Secco",
            "Barchan",
            "Mamaragan",
            "200,000,000 Volt Amaru|Amaru",
            "Venom Demon",
            "Chloro Ball",
            "Shadow's Asgard",
            "Brick Bat",
            "Doppelman",
            "Death Wink",
            "Hell Wink",
            "Galaxy Wink",
            "Noro Noro Beam|Slow-Slow Beam",
            "King Punch",
            "Barrier Crash",
            "Muggy Ball",
            "Buggy Ball",
            "Bara Bara Festival",
            "Shakushi|Pussyfoot Maneuver",
            "Electro",
            "Sulong",
            "Hasshoken",
            "Okama Kenpo",
            "Gomu Gomu no Baku Baku|Gum-Gum Munch-Munch",
            "Gomu Gomu no Mikata Robo|Gum-Gum Ally Robot|Ally Robot",
            "Gomu Gomu no Saw|Gum-Gum Saw",
            "Gomu Gomu no Tsuruhashi",
            "Gomu Gomu no Ikebana",
            "Gomu Gomu no Tako Hanabi|Octopus Fireworks",
            "Gomu Gomu no Ogosho",
            "Gomu Gomu no Ozuchi",
            "Gomu Gomu no Champion Rifle|Champion Rifle",
            "Gomu Gomu no Snake Shot|Snake Shot",
            "Gomu Gomu no Mogura Pistol|Dawn Mole Pistol",
            "Santoryu Ogi: Rokudo no Tsuji|Crossing of Six Paths",
            "Karasuma Gari",
            "Gyuki: Yuzume",
            "Gazami Dori|Crab Seize",
            "Kokoba Madara Gari",
            "Nanahyakunijuu Pound Ho|720 Pound Phoenix",
            "Parage Shot",
            "Jenga Ho|Jenga Cannon",
            "Troisieme Hachis",
            "Bouquetiere Shot",
            "Veau Shot",
            "Armee de l'Air Power Shoot",
            "Cuisse",
            "Jarret",
            "Queue",
            "Quasi",
            "Tendron",
            "Fata Morgana",
            "Black Ball: Raiun Rod",
            "Egg Tempo",
            "Cloudy Tempo",
            "Gust Sword",
            "Green Star: Sargasso",
            "Green Star: Rafflesia",
            "Green Star: Platanus Shuriken",
            "Green Star: Humandrake",
            "Green Star: Trampolia",
            "Bagworm Star|Minomushi Boshi",
            "Atlas Comet",
            "Kokutei Cross",
            "Kokutei Palme",
            "Heavy Gong",
            "Ocho Fleur",
            "Treinta Fleur",
            "Cuerpo Fleur",
            "Ojos Fleur",
            "Oreja Fleur",
            "Pierna Fleur",
            "Delphinium",
            "Sea Serpent",
            "Franky Triangle Jacker",
            "Master Nail",
            "Franky Butterfly",
            "Ultimate Hammer",
            "Franky Fireball",
            "General Left",
            "Kasuriuta: Fubuki Giri|Blizzard Slice",
            "Swallow Bond en Avant",
            "Raikotsuken: Gavotte Bond en Avant",
            "Quinte Tierce Fantasia",
            "Uchimizu|Water Shot",
            "Yarinami|Spear Wave",
            "Soshark",
            "Kachiage Haisoku",
            "Onigawara Seiken|Demon Brick Fist",
            "Sai Dai Rin: Rokuogan|Maximum Ring: Six King Gun",
            "Tobu Shigan|Flying Finger Pistol",
            "Shigan Oren",
            "Shigan Madara",
            "Bigan|Nose Pistol",
            "Rankyaku Hakurai",
            "Rankyaku Amanedachi",
            "Rankyaku Gaicho",
            "Rankyaku Shuriken",
            "Kirishigure",
            "Jugon",
            "Tekkai Kenpo",
            "Tekkai Utsugi",
            "Kami-e Bushin",
            "Seimei Kikan|Life Return",
            "Ramen Kenpo",
            "Newkama Kenpo",
            "Jao Kun Do",
            "Tontatta Combat",
            "Colors Trap: Calming Green|Colors Trap",
            "Doru Doru Arts: Candle Wall|Candle Wall",
            "Candle Champion",
            "Nose Fancy Cannon",
            "Kilo Press|10,000 Kilo Press",
            "Baku Baku Factory",
            "Toku Hollow",
            "Mini Hollow",
            "Pad Ho|Pad Cannon",
            "Tsuppari Pad Ho",
            "Fulbright",
            "Break White",
            "Flap Thread",
            "Athlete",
            "Amadare Mochi|Raindrop Mochi",
            "Nagare Mochi|Flowing Mochi",
            "Yanagi Mochi|Willow Mochi",
            "Kitsunebi-ryu|Foxfire Style",
            "Homura Saki|Flame-Rend",
            "Kappa-ryu|Kappa Style",
            "Zansetsu-Gama|Lingering Snow Scythes",
            "Tempura Udon",
            "Karyudon| Imperial Flaming Wings",
            "Brachio Bomber",
            "Black Coffee",
            "Heliceratops",
            "Ulti-Mortar|Ul-Zugan",
            "Gagan|Fang Pistol",
            "Distortion Future",
            "NDE|Near-Death Experience",
            "Blue Hole",
            "Galaxy Divide",
            "Hakoku Sovereignty|Hakoku",
            "Sonic Scythe|Kamaitachi",
            "Genkotsu Meteor|Fist Bone Meteor",
            "Shima Yurashi|Island Shaking",
            "Liberation",
            "Kari",
            "Sango",
            "Kiten",
            "Hino",
            "Brachio Snakeus"
        ],
        luffillion: [
            "Aurora Flicker Jab|Jerry Aurora Flicker Jab"
        ]
    }
};
}),
"[project]/src/data/derived.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildDerived",
    ()=>buildDerived
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-route] (ecmascript)");
;
// Generates hundreds of extra questions from the hand-written base banks by
// filtering their answers (starting letter, letters contained, length, ...) or
// combining two categories. Rarity tiers are inherited from the base answers.
const MIN_ANSWERS = 12;
const norm = (s)=>s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const letters = (s)=>norm(s).replace(/[^a-z]/g, "");
// "Name a Devil Fruit." -> "a Devil Fruit"; "Name a member of the Marines." -> "a member of the Marines"
function phraseOf(q) {
    return q.prompt.replace(/^Name\s+/i, "").replace(/[.?!]$/, "").replace(/\s*\(.*?\)/g, "").replace(/,\s*(past or present|from any era)$/i, "").trim();
}
// Keep only aliases that satisfy the filter; the first matching alias becomes the display name.
function filterQuestion(base, id, prompt, hint, pass) {
    const tiers = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_ORDER"].map((t)=>[
            t,
            []
        ]));
    const seen = new Set();
    let total = 0;
    for (const tier of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_ORDER"]){
        for (const raw of base.tiers[tier]){
            const parts = raw.split("|").map((p)=>p.trim()).filter(Boolean);
            const ok = parts.filter(pass);
            if (ok.length === 0) continue;
            const key = norm(ok[0]);
            if (seen.has(key)) continue;
            seen.add(key);
            tiers[tier].push(ok.join("|"));
            total++;
        }
    }
    if (total < MIN_ANSWERS) return null;
    return finalize({
        id,
        prompt,
        hint,
        tiers
    });
}
// Guarantee exactly one "One in a Luffillion" answer: keep the base one if present,
// otherwise promote the most obscure remaining answer.
function finalize(q) {
    const t = q.tiers;
    if (t.luffillion.length > 1) {
        t.epic.push(...t.luffillion.slice(1));
        t.luffillion = t.luffillion.slice(0, 1);
    }
    if (t.luffillion.length === 0) {
        for (const tier of [
            "epic",
            "rare",
            "uncommon"
        ]){
            if (t[tier].length > 0) {
                t.luffillion = [
                    t[tier].pop()
                ];
                break;
            }
        }
    }
    return q;
}
function union(a, b) {
    const tiers = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_ORDER"].map((t)=>[
            t,
            []
        ]));
    const seen = new Set();
    for (const q of [
        a,
        b
    ]){
        for (const tier of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_ORDER"]){
            for (const raw of q.tiers[tier]){
                const key = norm(raw.split("|")[0]);
                if (seen.has(key)) continue;
                seen.add(key);
                tiers[tier].push(raw);
            }
        }
    }
    return finalize({
        id: `${a.id}--or--${b.id}`,
        prompt: `Name ${phraseOf(a)} or ${phraseOf(b)}.`,
        hint: "Either category counts. Rarer answers score more.",
        tiers
    });
}
function buildDerived(base) {
    const out = [];
    const add = (q)=>{
        if (q) out.push(q);
    };
    for (const q of base){
        const lead = `Name ${phraseOf(q)}`;
        // Starting letter
        for (const L of "abcdefghijklmnopqrstuvwxyz"){
            add(filterQuestion(q, `${q.id}--starts-${L}`, `${lead} that starts with the letter "${L.toUpperCase()}".`, `The answer (or a name it goes by) must begin with ${L.toUpperCase()}.`, (p)=>letters(p).startsWith(L)));
        }
    }
    // Unions of two big categories
    const big = base.filter((q)=>Object.values(q.tiers).flat().length >= 10);
    for(let i = 0; i < big.length; i++)for(let j = i + 1; j < big.length; j++)add(union(big[i], big[j]));
    return out;
}
}),
"[project]/src/data/playable-characters.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// One unique, permanent cosmetic recruit per achievement. Luffy is always free.
__turbopack_context__.s([
    "DEFAULT_CHARACTER",
    ()=>DEFAULT_CHARACTER,
    "PLAYABLE_CHARACTERS",
    ()=>PLAYABLE_CHARACTERS,
    "characterById",
    ()=>characterById,
    "characterReward",
    ()=>characterReward,
    "isCharacterId",
    ()=>isCharacterId
]);
const PLAYABLE_CHARACTERS = [
    {
        id: "luffy",
        name: "Monkey D. Luffy",
        shortName: "Luffy",
        epithet: "Straw Hat Captain",
        achievementId: null,
        grade: "Starter",
        color: "#f49c81",
        detail: "Your original captain. Always ready to set sail."
    },
    {
        id: "chopper",
        name: "Tony Tony Chopper",
        shortName: "Chopper",
        epithet: "Cotton Candy Lover",
        achievementId: "first-voyage",
        grade: "Crew",
        color: "#f59fca",
        detail: "A little reindeer with a big dream. Blue hat, antlers, and tiny hooves."
    },
    {
        id: "zoro",
        name: "Roronoa Zoro",
        shortName: "Zoro",
        epithet: "Pirate Hunter",
        achievementId: "perfect-run",
        grade: "Crew",
        color: "#8bda83",
        detail: "Green hair, a haramaki sash, and three swords. Don't let him navigate."
    },
    {
        id: "sanji",
        name: "Vinsmoke Sanji",
        shortName: "Sanji",
        epithet: "Black Leg",
        achievementId: "no-mistakes",
        grade: "Elite",
        color: "#e9c876",
        detail: "A sharp black suit and a golden fringe, for a perfectly executed voyage."
    },
    {
        id: "nami",
        name: "Nami",
        shortName: "Nami",
        epithet: "Cat Burglar",
        achievementId: "daily-dedication",
        grade: "Crew",
        color: "#fbac64",
        detail: "Orange hair and her blue Clima-Tact. Your course is in good hands."
    },
    {
        id: "usopp",
        name: "Usopp",
        shortName: "Usopp",
        epithet: "Brave Warrior of the Sea",
        achievementId: "rookie-pirate",
        grade: "Crew",
        color: "#cfb78b",
        detail: "Goggles, a long nose, and a trusty slingshot. Ten voyages worth of stories."
    },
    {
        id: "robin",
        name: "Nico Robin",
        shortName: "Robin",
        epithet: "Devil Child",
        achievementId: "encyclopedia",
        grade: "Elite",
        color: "#b69eea",
        detail: "An archaeologist in a blue jacket, with a book full of secrets."
    },
    {
        id: "jinbe",
        name: "Jinbe",
        shortName: "Jinbe",
        epithet: "Knight of the Sea",
        achievementId: "grand-line-explorer",
        grade: "Elite",
        color: "#77c8e9",
        detail: "Blue skin, tusks, and an orange kimono. A veteran of the Grand Line."
    },
    {
        id: "ace",
        name: "Portgas D. Ace",
        shortName: "Ace",
        epithet: "Fire Fist",
        achievementId: "one-in-a-luffillion",
        grade: "Elite",
        color: "#ff9562",
        detail: "An orange hat, red beads, and a little fire in his hand. A reward for a truly rare pull."
    },
    {
        id: "law",
        name: "Trafalgar Law",
        shortName: "Law",
        epithet: "Surgeon of Death",
        achievementId: "rising-supernova",
        grade: "Legendary",
        color: "#e0c254",
        detail: "Spotted hat, yellow coat, and Kikoku. An exceptional recruit for an exceptional score."
    },
    {
        id: "rayleigh",
        name: "Silvers Rayleigh",
        shortName: "Rayleigh",
        epithet: "Dark King",
        achievementId: "deep-lore",
        grade: "Legendary",
        color: "#9ce3ce",
        detail: "Silver hair, round glasses, and a green cloak. The reward for a scholar of pirate lore."
    },
    {
        id: "whitebeard",
        name: "Edward Newgate",
        shortName: "Whitebeard",
        epithet: "The Strongest Man",
        achievementId: "yonko-status",
        grade: "Legendary",
        color: "#e9dcba",
        detail: "An enormous white coat, a crescent moustache, and Murakumogiri."
    },
    {
        id: "shanks",
        name: "Shanks",
        shortName: "Shanks",
        epithet: "Red-Haired Emperor",
        achievementId: "laugh-tale",
        grade: "Legendary",
        color: "#ef8491",
        detail: "Red hair, a black cape, and Gryphon. A fitting welcome to the final island."
    },
    {
        id: "kaido",
        name: "Kaido",
        shortName: "Kaido",
        epithet: "The Strongest Creature",
        achievementId: "unstoppable",
        grade: "Mythic",
        color: "#b694f6",
        detail: "Great horns, a purple sash, and a spiked kanabo. Thirty days of unstoppable resolve."
    },
    {
        id: "roger",
        name: "Gol D. Roger",
        shortName: "Roger",
        epithet: "King of the Pirates",
        achievementId: "pirate-king",
        grade: "Mythic",
        color: "#f6c45a",
        detail: "A red captain's coat, gold epaulettes, and the Pirate King's unmistakable moustache."
    },
    {
        id: "gear-5",
        name: "Luffy · Gear 5",
        shortName: "Gear 5 Luffy",
        epithet: "Warrior of Liberation",
        achievementId: "the-will-of-d",
        grade: "Mythic",
        color: "#e5c3ff",
        detail: "Cloud-white hair, a flowing smoke scarf, and a fearless grin. The ultimate 100-voyage reward."
    }
];
const DEFAULT_CHARACTER = "luffy";
function isCharacterId(id) {
    return typeof id === "string" && PLAYABLE_CHARACTERS.some((character)=>character.id === id);
}
function characterById(id) {
    return PLAYABLE_CHARACTERS.find((character)=>character.id === id) ?? PLAYABLE_CHARACTERS[0];
}
function characterReward(achievementId) {
    return PLAYABLE_CHARACTERS.find((character)=>character.achievementId === achievementId);
}
}),
"[project]/src/data/questions.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUESTION_BANK",
    ()=>QUESTION_BANK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/arcs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/characters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$crews$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/crews.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$devilFruits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/devilFruits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$locations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/locations.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$ships$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/ships.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$swords$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/swords.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$techniques$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/techniques.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$extra$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/extra.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$derived$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/derived.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/characters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$characters2$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/characters2.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$powers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/powers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$world$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/bank/curated/world.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const BASE_QUESTIONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHARACTERS_QUESTION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$devilFruits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEVIL_FRUITS_QUESTION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$locations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LOCATIONS_QUESTION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$techniques$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TECHNIQUES_QUESTION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$swords$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SWORDS_QUESTION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$ships$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SHIPS_QUESTION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$crews$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREWS_QUESTION"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ARCS_QUESTION"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$extra$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EXTRA_QUESTIONS"]
];
// Hand-written questions + hundreds of generated variants (letters, length, unions...).
const CURATED_QUESTIONS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURATED_CHARACTERS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$characters2$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURATED_CHARACTERS_2"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$powers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURATED_POWERS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$bank$2f$curated$2f$world$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURATED_WORLD"]
];
const QUESTION_BANK = [
    ...BASE_QUESTIONS,
    ...CURATED_QUESTIONS,
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$derived$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildDerived"])(BASE_QUESTIONS)
];
}),
"[project]/src/data/seasonal.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEASONAL_QUESTIONS",
    ()=>SEASONAL_QUESTIONS,
    "SEASON_END",
    ()=>SEASON_END,
    "SEASON_START",
    ()=>SEASON_START,
    "inSeason",
    ()=>inSeason,
    "seasonalQuestionsFor",
    ()=>seasonalQuestionsFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/questions.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/daily.ts [app-route] (ecmascript)");
;
;
// ---------------------------------------------------------------------------
// 31 daily questions for Nov 26 – Dec 26, 2026. Every answer is guaranteed by
// construction: each question is the intersection of two or three of the
// audited attribute lists, so anything that fits is already listed.
// ---------------------------------------------------------------------------
const CHAR = "char", LOC = "loc";
// id -> natural-language fragment (uses "that ..." for locations and "who ..." for characters)
const FRAG = {
    "q-impel-down": {
        kind: CHAR,
        phrase: "appeared in Impel Down"
    },
    "q-straw-hats": {
        kind: CHAR,
        phrase: "has been part of the Straw Hat Pirates"
    },
    "q-worst-generation": {
        kind: CHAR,
        phrase: "is a member of the Worst Generation"
    },
    "q-has-bounty": {
        kind: CHAR,
        phrase: "has a bounty"
    },
    "q-warlords": {
        kind: CHAR,
        phrase: "is or was a Warlord of the Sea"
    },
    "q-marines": {
        kind: CHAR,
        phrase: "has served as a Marine"
    },
    "q-blackbeard-pirates": {
        kind: CHAR,
        phrase: "is a member of the Blackbeard Pirates"
    },
    "q-red-hair-pirates": {
        kind: CHAR,
        phrase: "is a member of the Red Hair Pirates"
    },
    "q-whitebeard-pirates": {
        kind: CHAR,
        phrase: "is a member of the Whitebeard Pirates"
    },
    "q-fought-luffy": {
        kind: CHAR,
        phrase: "has fought Luffy"
    },
    "q-fought-zoro": {
        kind: CHAR,
        phrase: "has fought Zoro"
    },
    "q-female": {
        kind: CHAR,
        phrase: "is a female character"
    },
    "q-uses-sword": {
        kind: CHAR,
        phrase: "uses a sword"
    },
    "q-wears-hat": {
        kind: CHAR,
        phrase: "wears a hat"
    },
    "q-died": {
        kind: CHAR,
        phrase: "has died in the series"
    },
    "q-royalty": {
        kind: CHAR,
        phrase: "has been a king or queen"
    },
    "q-imprisoned": {
        kind: CHAR,
        phrase: "has been imprisoned"
    },
    "q-ate-fruit": {
        kind: CHAR,
        phrase: "has eaten a Devil Fruit"
    },
    "q-haki": {
        kind: CHAR,
        phrase: "has used Haki"
    },
    "q-east-blue": {
        kind: CHAR,
        phrase: "appeared in the East Blue Saga"
    },
    "q-logia-user": {
        kind: CHAR,
        phrase: "has a Logia Devil Fruit"
    },
    "q-zoan-user": {
        kind: CHAR,
        phrase: "has a Zoan Devil Fruit"
    },
    "q-paramecia-user": {
        kind: CHAR,
        phrase: "has a Paramecia Devil Fruit"
    },
    "q-transform-fruit": {
        kind: CHAR,
        phrase: "has a Devil Fruit that allows them to transform"
    },
    "q-fire": {
        kind: CHAR,
        phrase: "can control fire"
    },
    "q-ice": {
        kind: CHAR,
        phrase: "can control ice"
    },
    "q-lightning": {
        kind: CHAR,
        phrase: "can control lightning"
    },
    "q-body": {
        kind: CHAR,
        phrase: "can manipulate their body"
    },
    "q-fly": {
        kind: CHAR,
        phrase: "can fly"
    },
    "q-awakened": {
        kind: CHAR,
        phrase: "has an awakened Devil Fruit"
    },
    "q-conqueror": {
        kind: CHAR,
        phrase: "can use Conqueror's Haki"
    },
    "q-observation": {
        kind: CHAR,
        phrase: "can use Observation Haki"
    },
    "q-armament": {
        kind: CHAR,
        phrase: "can use Armament Haki"
    },
    "q-animal-fruit": {
        kind: CHAR,
        phrase: "has a Devil Fruit with an animal-based ability"
    },
    "q-gun": {
        kind: CHAR,
        phrase: "fights with a gun"
    },
    "q-staff": {
        kind: CHAR,
        phrase: "uses a staff, pole, or club"
    },
    "q-fists": {
        kind: CHAR,
        phrase: "fights using their fists"
    },
    "q-non-sword-weapon": {
        kind: CHAR,
        phrase: "uses a weapon other than a sword"
    },
    "q-martial-arts": {
        kind: CHAR,
        phrase: "uses a fighting style based on martial arts"
    },
    "q-legendary-weapon": {
        kind: CHAR,
        phrase: "wields a legendary weapon"
    },
    "q-spear": {
        kind: CHAR,
        phrase: "uses a spear, trident, or lance"
    },
    "q-named-attack": {
        kind: CHAR,
        phrase: "has used a named attack"
    },
    "q-fought-yonko": {
        kind: CHAR,
        phrase: "has fought a Four Emperor"
    },
    "q-fought-admiral": {
        kind: CHAR,
        phrase: "has fought an Admiral"
    },
    "q-fought-commander": {
        kind: CHAR,
        phrase: "has fought a Yonko Commander"
    },
    "q-fought-alongside": {
        kind: CHAR,
        phrase: "has fought alongside Luffy"
    },
    "q-bounty-100m": {
        kind: CHAR,
        phrase: "has a bounty over 100 million berries"
    },
    "q-bounty-500m": {
        kind: CHAR,
        phrase: "has a bounty over 500 million berries"
    },
    "q-bounty-1b": {
        kind: CHAR,
        phrase: "has a bounty over 1 billion berries"
    },
    "q-bounty-increased": {
        kind: CHAR,
        phrase: "has had their bounty increased"
    },
    "q-bounty-frozen": {
        kind: CHAR,
        phrase: "has had their bounty frozen"
    },
    "q-former-warlord-bounty": {
        kind: CHAR,
        phrase: "is a former Warlord with a bounty"
    },
    "q-post-timeskip-bounty": {
        kind: CHAR,
        phrase: "received or kept a bounty after the time skip"
    },
    "q-emperors": {
        kind: CHAR,
        phrase: "is or was a Four Emperor"
    },
    "q-admirals": {
        kind: CHAR,
        phrase: "has been an Admiral"
    },
    "q-commanders": {
        kind: CHAR,
        phrase: "has been a Yonko Commander"
    },
    "q-marine-family": {
        kind: CHAR,
        phrase: "has a family member in the Marines"
    },
    "q-sibling": {
        kind: CHAR,
        phrase: "has a brother or sister"
    },
    "q-betrayed": {
        kind: CHAR,
        phrase: "has betrayed someone"
    },
    "q-switched-sides": {
        kind: CHAR,
        phrase: "has switched sides"
    },
    "q-revolutionary": {
        kind: CHAR,
        phrase: "has been part of the Revolutionary Army"
    },
    "q-void-century": {
        kind: CHAR,
        phrase: "knows about the Void Century"
    },
    "q-met-celestial": {
        kind: CHAR,
        phrase: "has encountered a Celestial Dragon"
    },
    "q-been-skypiea": {
        kind: CHAR,
        phrase: "has been to Skypiea"
    },
    "q-been-wano": {
        kind: CHAR,
        phrase: "has been to Wano"
    },
    "q-been-fishman": {
        kind: CHAR,
        phrase: "has been to Fish-Man Island"
    },
    "q-oro-jackson": {
        kind: CHAR,
        phrase: "has been on Roger's ship"
    },
    "q-baroque": {
        kind: CHAR,
        phrase: "has been part of Baroque Works"
    },
    "q-cp": {
        kind: CHAR,
        phrase: "has been part of CP9 or CP0"
    },
    "q-pre-post-skip": {
        kind: CHAR,
        phrase: "appeared both before and after the time skip"
    },
    "q-fought-wg": {
        kind: CHAR,
        phrase: "has fought against the World Government"
    },
    // Locations
    "q-visited-islands": {
        kind: LOC,
        phrase: "was visited by the Straw Hats"
    },
    "q-grand-line": {
        kind: LOC,
        phrase: "is in the Grand Line"
    },
    "q-new-world": {
        kind: LOC,
        phrase: "is in the New World"
    },
    "q-east-blue-loc": {
        kind: LOC,
        phrase: "is in the East Blue"
    },
    "q-alabasta-saga-loc": {
        kind: LOC,
        phrase: "was visited during the Alabasta Saga"
    },
    "q-water7-saga-loc": {
        kind: LOC,
        phrase: "was visited during the Water 7 Saga"
    },
    "q-summit-saga-loc": {
        kind: LOC,
        phrase: "was visited during the Summit War Saga"
    },
    "q-emperors-saga-loc": {
        kind: LOC,
        phrase: "was visited during the Four Emperors Saga"
    },
    "q-villain-fight-loc": {
        kind: LOC,
        phrase: "was the site of a major villain battle"
    },
    "q-marine-encounter-loc": {
        kind: LOC,
        phrase: "was where the Straw Hats encountered the Marines"
    },
    "q-poneglyph-loc": {
        kind: LOC,
        phrase: "hosts a Poneglyph"
    },
    "q-prison-loc": {
        kind: LOC,
        phrase: "is a prison or a prison-related place"
    },
    "q-villain-ruled": {
        kind: LOC,
        phrase: "was ruled by a powerful villain"
    },
    "q-destroyed-loc": {
        kind: LOC,
        phrase: "was destroyed or ruined"
    },
    "q-reunion-loc": {
        kind: LOC,
        phrase: "is a Straw Hat reunion site"
    }
};
function hash(seed) {
    let h = 2166136261;
    for(let i = 0; i < seed.length; i++){
        h ^= seed.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}
function mulberry32(seed) {
    let a = seed;
    return ()=>{
        a |= 0;
        a = a + 0x6d2b79f5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const norm = (s)=>s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const TIER_ORDER = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "luffillion"
];
function buildRanked(q) {
    const out = [];
    for (const tier of TIER_ORDER){
        for (const raw of q.tiers[tier]){
            const names = raw.split("|").map((s)=>s.trim());
            out.push({
                name: names[0],
                keys: names.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalize"]).filter(Boolean),
                raw,
                tier,
                index: out.length
            });
        }
    }
    return out;
}
function intersectionOf(sets) {
    const [first, ...rest] = sets;
    if (!first) return [];
    const lookup = rest.map((set)=>{
        const setNames = new Set(set.map((e)=>e.name));
        return setNames;
    });
    return first.filter((entry)=>lookup.every((names)=>names.has(entry.name)));
}
function createSeasonal() {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((q)=>q.id.startsWith("q-") && FRAG[q.id]).map((q)=>({
            q,
            kind: FRAG[q.id].kind,
            entries: buildRanked(q)
        }));
    const byId = new Map(base.map((b)=>[
            b.q.id,
            b
        ]));
    const ranked = (ids)=>ids.map((id)=>byId.get(id));
    const seen = new Set();
    const combos = [];
    const addCombo = (ids)=>{
        const parts = ranked(ids);
        const kind = parts[0].kind;
        if (parts.some((p)=>p.kind !== kind)) return;
        const members = intersectionOf(parts.map((p)=>p.entries));
        if (members.length < 8) return;
        const minParent = Math.min(...parts.map((p)=>p.entries.length));
        if (minParent > 0 && members.length / minParent >= 0.8) return; // effectively a subset of a parent
        const signature = members.map((m)=>m.name).sort().join("⚓");
        if (seen.has(signature)) return;
        seen.add(signature);
        combos.push({
            ids,
            kind,
            members,
            signature
        });
    };
    for(let i = 0; i < base.length; i++)for(let j = i + 1; j < base.length; j++)addCombo([
        base[i].q.id,
        base[j].q.id
    ]);
    for(let i = 0; i < base.length; i++)for(let j = i + 1; j < base.length; j++)for(let k = j + 1; k < base.length; k++)addCombo([
        base[i].q.id,
        base[j].q.id,
        base[k].q.id
    ]);
    // Sort by pool richness; deterministic order is fine since every combo is tested.
    combos.sort((a, b)=>b.members.length - a.members.length || a.ids.join().localeCompare(b.ids.join()));
    // Interleave large/medium/small pools so the seasonal mix runs from accessible to deep.
    const large = combos.filter((c)=>c.members.length >= 18);
    const medium = combos.filter((c)=>c.members.length >= 12 && c.members.length < 18);
    const small = combos.filter((c)=>c.members.length < 12);
    const mixed = [];
    const buckets = [
        large,
        medium,
        small
    ];
    let added = true;
    while(mixed.length < 217 && added){
        added = false;
        for (const b of buckets){
            const c = b.shift();
            if (c) {
                mixed.push(c);
                added = true;
            }
            if (mixed.length >= 217) break;
        }
    }
    const shuffled = [
        ...mixed
    ];
    const rand = mulberry32(hash("seasonal-shuffle-november-december-2026"));
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(rand() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled.map(toQuestion);
}
function makeId(ids) {
    return `seasonal--${ids.join("__")}`;
}
function toQuestion(combo) {
    const { kind, ids, members } = combo;
    const fragments = ids.map((id)=>FRAG[id].phrase);
    const sorted = [
        ...members
    ].sort((a, b)=>a.index - b.index);
    const luff = sorted[sorted.length - 1];
    const rest = sorted.slice(0, -1);
    const nCommon = Math.ceil(rest.length * 0.10), nUncommon = Math.ceil(rest.length * 0.42), nRare = Math.ceil(rest.length * 0.78);
    const tiers = {
        common: rest.slice(0, nCommon).map((m)=>m.raw),
        uncommon: rest.slice(nCommon, nUncommon).map((m)=>m.raw),
        rare: rest.slice(nUncommon, nRare).map((m)=>m.raw),
        epic: rest.slice(nRare).map((m)=>m.raw),
        luffillion: [
            luff.raw
        ]
    };
    const prompt = kind === "char" ? `Name a One Piece character who ${fragments.join(" and ")}.` : `Name a location in One Piece that ${fragments.join(" and ")}.`;
    return {
        id: makeId(ids),
        prompt,
        hint: kind === "char" ? "Any character satisfying BOTH conditions counts. Every listed answer qualifies." : "Any place satisfying BOTH conditions counts. Every listed answer qualifies.",
        tiers
    };
}
const SEASONAL_QUESTIONS = createSeasonal();
const SEASON_START = "2026-11-26";
const SEASON_END = "2026-12-26";
function inSeason(day) {
    return day >= SEASON_START && day <= SEASON_END;
}
const DAY_MS = 86_400_000;
const START_MS = Date.parse(`${SEASON_START}T00:00:00Z`);
const END_MS = Date.parse(`${SEASON_END}T00:00:00Z`);
const DAY_COUNT = Math.round((END_MS - START_MS) / DAY_MS) + 1;
function seasonalQuestionsFor(day) {
    const dayMs = Date.parse(`${day}T00:00:00Z`);
    const index = Math.round((dayMs - START_MS) / DAY_MS);
    if (index < 0 || index >= DAY_COUNT) throw new Error("Different daily rotation is needed for " + day);
    return SEASONAL_QUESTIONS.slice(index * 7, index * 7 + 7);
}
}),
"[project]/src/data/tiers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DAILY_QUESTION_COUNT",
    ()=>DAILY_QUESTION_COUNT,
    "MAX_POINTS",
    ()=>MAX_POINTS,
    "QUESTION_SECONDS",
    ()=>QUESTION_SECONDS,
    "TIER_CONFIG",
    ()=>TIER_CONFIG,
    "TIER_LABELS",
    ()=>TIER_LABELS,
    "TIER_ORDER",
    ()=>TIER_ORDER
]);
const TIER_ORDER = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "luffillion"
];
const QUESTION_SECONDS = 25;
const DAILY_QUESTION_COUNT = 7;
const MAX_POINTS = 100 * DAILY_QUESTION_COUNT;
const TIER_CONFIG = {
    common: {
        label: "Common",
        points: 10,
        runMs: 4200,
        badge: "bg-slate-500/20 text-slate-200 ring-slate-400/50",
        text: "text-slate-300",
        emoji: "⬜",
        blurb: "Everyone knows this one.",
        fx: {
            particles: 16,
            spread: 160,
            size: 6,
            particleDur: 0.9,
            colors: [
                "#fde68a",
                "#ffffff",
                "#fcd34d"
            ],
            rings: 0,
            flash: false,
            sunburst: false,
            shake: false,
            shakeMs: 0,
            confetti: 0,
            duration: 1600
        }
    },
    uncommon: {
        label: "Uncommon",
        points: 25,
        runMs: 3600,
        badge: "bg-emerald-500/20 text-emerald-200 ring-emerald-400/50",
        text: "text-emerald-300",
        emoji: "🟩",
        blurb: "A fan's answer.",
        fx: {
            particles: 36,
            spread: 260,
            size: 8,
            particleDur: 1.0,
            colors: [
                "#34d399",
                "#6ee7b7",
                "#ffffff"
            ],
            rings: 1,
            flash: false,
            sunburst: false,
            shake: false,
            shakeMs: 0,
            confetti: 0,
            banner: "NICE PULL!",
            bannerColor: "#6ee7b7",
            duration: 2000
        }
    },
    rare: {
        label: "Rare",
        points: 45,
        runMs: 3000,
        badge: "bg-blue-500/20 text-blue-200 ring-blue-400/60",
        text: "text-blue-300",
        emoji: "🟦",
        blurb: "Deep cut territory.",
        fx: {
            particles: 70,
            spread: 360,
            size: 10,
            particleDur: 1.2,
            colors: [
                "#60a5fa",
                "#3b82f6",
                "#e0f2fe",
                "#93c5fd"
            ],
            rings: 2,
            flash: true,
            sunburst: false,
            shake: true,
            shakeMs: 450,
            confetti: 0,
            banner: "RARE PULL!",
            bannerColor: "#93c5fd",
            duration: 2600
        }
    },
    epic: {
        label: "Epic",
        points: 75,
        runMs: 2400,
        badge: "bg-fuchsia-500/20 text-fuchsia-200 ring-fuchsia-400/60",
        text: "text-fuchsia-300",
        emoji: "🟪",
        blurb: "Only true historians know this.",
        fx: {
            particles: 120,
            spread: 480,
            size: 12,
            particleDur: 1.4,
            colors: [
                "#c084fc",
                "#f472b6",
                "#fb923c",
                "#f0abfc"
            ],
            rings: 2,
            flash: true,
            sunburst: true,
            shake: true,
            shakeMs: 600,
            confetti: 30,
            banner: "EPIC!",
            bannerColor: "#f0abfc",
            duration: 3200
        }
    },
    luffillion: {
        label: "One in a Luffillion",
        points: 100,
        runMs: 1800,
        badge: "bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200 text-amber-950 ring-yellow-200",
        text: "text-amber-300",
        emoji: "🟨",
        blurb: "One answer exists. The nichest of the niche.",
        fx: {
            particles: 260,
            spread: 720,
            size: 16,
            particleDur: 1.8,
            colors: [
                "#fde047",
                "#f43f5e",
                "#22d3ee",
                "#a3e635",
                "#c084fc",
                "#fb923c",
                "#ffffff"
            ],
            rings: 3,
            flash: true,
            sunburst: true,
            shake: true,
            shakeMs: 800,
            confetti: 90,
            banner: "ONE IN A LUFFILLION!",
            bannerColor: "#fde047",
            duration: 4500
        }
    }
};
const TIER_LABELS = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    epic: "Epic",
    luffillion: "One in a Luffillion"
};
}),
"[project]/src/db/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "db",
    ()=>db,
    "pool",
    ()=>pool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
}
const globalForDb = globalThis;
const pool = globalForDb.__arenaNextJsPostgresqlPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString: databaseUrl
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
}
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(pool);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accounts",
    ()=>accounts,
    "achievementUnlocks",
    ()=>achievementUnlocks,
    "adventureAttempts",
    ()=>adventureAttempts,
    "adventureClears",
    ()=>adventureClears,
    "adventureProgress",
    ()=>adventureProgress,
    "authWindows",
    ()=>authWindows,
    "bounties",
    ()=>bounties,
    "bountyGains",
    ()=>bountyGains,
    "checkpoints",
    ()=>checkpoints,
    "rankedMatches",
    ()=>rankedMatches,
    "rankedPlayers",
    ()=>rankedPlayers,
    "rankedQueue",
    ()=>rankedQueue,
    "runs",
    ()=>runs,
    "sessions",
    ()=>sessions,
    "solves",
    ()=>solves
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/indexes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/primary-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/serial.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)");
;
const solves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("solves", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    dayKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("day_key", {
        length: 10
    }).notNull(),
    questionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("question_id", {
        length: 64
    }).notNull(),
    answer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("answer", {
        length: 160
    }).notNull(),
    tier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("tier", {
        length: 20
    }).notNull(),
    points: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("points").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("solves_day_question_idx").on(t.dayKey, t.questionId)
    ]);
const accounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("captain_accounts", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    username: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("username", {
        length: 24
    }).notNull(),
    usernameKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("username_key", {
        length: 24
    }).notNull().unique(),
    passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password_hash").notNull(),
    equippedCharacter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("equipped_character", {
        length: 32
    }).notNull().default("luffy"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at", {
        withTimezone: true
    }).defaultNow().notNull()
});
const sessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("captain_sessions", {
    tokenHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("token_hash", {
        length: 64
    }).primaryKey(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at", {
        withTimezone: true
    }).notNull()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("captain_sessions_expiry_idx").on(t.expiresAt)
    ]);
const authWindows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("captain_auth_windows", {
    bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("bucket", {
        length: 64
    }).primaryKey(),
    count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("count").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at", {
        withTimezone: true
    }).notNull()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("captain_auth_window_expiry_idx").on(t.expiresAt)
    ]);
const checkpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("voyage_checkpoints", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    dayKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("day_key", {
        length: 10
    }).notNull(),
    progress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("progress").$type().notNull()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                t.accountId,
                t.dayKey
            ]
        })
    ]);
const runs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("runs", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    dayKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("day_key", {
        length: 10
    }).notNull(),
    playerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("player_id", {
        length: 64
    }).notNull(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    legs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("legs").$type(),
    score: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("score").notNull(),
    solved: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("solved").notNull(),
    niche: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("niche"),
    mistakes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("mistakes"),
    beat: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("beat"),
    rank: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rank"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("runs_day_player_idx").on(t.dayKey, t.playerId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("runs_account_day_idx").on(t.accountId, t.dayKey),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("runs_day_score_idx").on(t.dayKey, t.score)
    ]);
const bounties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("bounties", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").primaryKey().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    total: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("total").notNull().default(0),
    lastDay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("last_day", {
        length: 10
    }),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at", {
        withTimezone: true
    }).notNull().defaultNow()
});
const bountyGains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("bounty_gains", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    dayKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("day_key", {
        length: 10
    }).notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("amount").notNull()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                t.accountId,
                t.dayKey
            ]
        })
    ]);
const achievementUnlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("achievement_unlocks", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    achievementId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("achievement_id", {
        length: 48
    }).notNull(),
    unlockedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("unlocked_at", {
        withTimezone: true
    }).defaultNow().notNull()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                t.accountId,
                t.achievementId
            ]
        })
    ]);
const adventureProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("adventure_progress", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").primaryKey().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    completed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("completed").notNull().default(0),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at", {
        withTimezone: true
    }).notNull().defaultNow()
});
const adventureClears = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("adventure_clears", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("level").notNull(),
    bestScore: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("best_score").notNull(),
    clearedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("cleared_at", {
        withTimezone: true
    }).notNull().defaultNow()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
            columns: [
                t.accountId,
                t.level
            ]
        })
    ]);
const adventureAttempts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("adventure_attempts", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("id").defaultRandom().primaryKey(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("level").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("status", {
        length: 16
    }).$type().notNull().default("active"),
    state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("state").$type().notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at", {
        withTimezone: true
    }).notNull().defaultNow(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at", {
        withTimezone: true
    }).notNull().defaultNow()
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("adventure_attempt_owner_status_idx").on(t.accountId, t.status)
    ]);
const rankedPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("ranked_players", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").primaryKey().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    rating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rating").notNull().default(0),
    wins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("wins").notNull().default(0),
    losses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("losses").notNull().default(0),
    draws: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("draws").notNull().default(0),
    streak: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("streak").notNull().default(0),
    bestStreak: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("best_streak").notNull().default(0),
    lastMatchId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("last_match_id"),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at", {
        withTimezone: true
    }).notNull().defaultNow()
});
const rankedQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("ranked_queue", {
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_id").primaryKey().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    joinedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("joined_at", {
        withTimezone: true
    }).notNull().defaultNow()
});
const rankedMatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("ranked_matches", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    accountA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_a_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    accountB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("account_b_id").notNull().references(()=>accounts.id, {
        onDelete: "cascade"
    }),
    ratingA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rating_a").notNull().default(0),
    ratingB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rating_b").notNull().default(0),
    state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonb"])("state").$type().notNull(),
    index: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("index").notNull(),
    livesA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("lives_a").notNull().default(2),
    livesB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("lives_b").notNull().default(2),
    scoreA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("score_a").notNull().default(0),
    scoreB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("score_b").notNull().default(0),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("status", {
        length: 8
    }).notNull().default("active"),
    winner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid"])("winner").references(()=>accounts.id, {
        onDelete: "set null"
    }),
    draw: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("draw").notNull().default(false),
    deltaA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("delta_a"),
    deltaB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("delta_b"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at", {
        withTimezone: true
    }).notNull().defaultNow(),
    finishedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("finished_at", {
        withTimezone: true
    })
}, (t)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("ranked_matches_a_idx").on(t.accountA, t.status),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("ranked_matches_b_idx").on(t.accountB, t.status)
    ]);
}),
"[project]/src/lib/account-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GUEST",
    ()=>GUEST,
    "RequestProblem",
    ()=>RequestProblem,
    "SESSION",
    ()=>SESSION,
    "checkAuthBudget",
    ()=>checkAuthBudget,
    "currentCaptain",
    ()=>currentCaptain,
    "endSession",
    ()=>endSession,
    "ensureGuest",
    ()=>ensureGuest,
    "failure",
    ()=>failure,
    "guestId",
    ()=>guestId,
    "hashPassword",
    ()=>hashPassword,
    "privateJson",
    ()=>privateJson,
    "readMutation",
    ()=>readMutation,
    "rotateGuest",
    ()=>rotateGuest,
    "startSession",
    ()=>startSession,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const SESSION = "luffillion_session";
const GUEST = "luffillion_guest";
const SESSION_SECONDS = 30 * 86400;
const digest = (value)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(value).digest("hex");
const uuid4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
class RequestProblem extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
    }
}
function privateJson(payload, status = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(payload, {
        status,
        headers: {
            "Cache-Control": "private, no-store",
            Vary: "Cookie"
        }
    });
}
function failure(error) {
    if (error instanceof RequestProblem) return privateJson({
        error: error.message
    }, error.status);
    // Don't return database errors, tokens, or password material to the client.
    console.error("[ownership-failure]", error);
    if (process.env.DEBUG_RANKED === "1" && error instanceof Error) return privateJson({
        error: error.message,
        stack: error.stack
    }, 500);
    return privateJson({
        error: "The logbook is unavailable right now. Please try again."
    }, 500);
}
async function readMutation(req, maxBytes = 4096) {
    const origin = req.headers.get("origin");
    const hosts = [
        req.nextUrl.host,
        req.headers.get("host"),
        req.headers.get("x-forwarded-host")?.split(",")[0].trim()
    ];
    if (req.headers.get("sec-fetch-site") === "cross-site" || origin && !hosts.some((h)=>h && (origin === `https://${h}` || origin === `http://${h}`))) {
        throw new RequestProblem(403, "Open this page to make that change.");
    }
    if (req.headers.get("content-type")?.split(";")[0].trim() !== "application/json") throw new RequestProblem(415, "A JSON request is required.");
    const reader = req.body?.getReader();
    if (!reader) throw new RequestProblem(400, "Missing request body.");
    const decoder = new TextDecoder();
    let text = "", size = 0;
    for(;;){
        const { value, done } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBytes) {
            await reader.cancel();
            throw new RequestProblem(413, "Request is too large.");
        }
        text += decoder.decode(value, {
            stream: true
        });
    }
    try {
        const obj = JSON.parse(text + decoder.decode());
        if (!obj || typeof obj !== "object" || Array.isArray(obj)) throw new Error();
        return obj;
    } catch  {
        throw new RequestProblem(400, "Invalid request.");
    }
}
async function currentCaptain(req) {
    const token = req.cookies.get(SESSION)?.value;
    if (!token || !/^[A-Za-z0-9_-]{43}$/.test(token)) return null;
    const [captain] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id,
        username: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].username
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].accountId)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].tokenHash, digest(token)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gt"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].expiresAt, new Date()))).limit(1);
    return captain ?? null;
}
function guestId(req) {
    const id = req.cookies.get(GUEST)?.value;
    return id && uuid4.test(id) ? id : null;
}
function cookieOptions(req, maxAge) {
    const secure = ("TURBOPACK compile-time value", "development") === "production" || req.nextUrl.protocol === "https:";
    const embedded = secure && req.headers.get("x-voyage-embedded") === "1";
    return {
        httpOnly: true,
        path: "/",
        secure,
        sameSite: embedded ? "none" : "lax",
        ...embedded ? {
            partitioned: true
        } : {},
        maxAge
    };
}
function ensureGuest(req, res) {
    if (guestId(req)) return;
    // The previous game used a random v4 UUID as its anonymous bearer credential.
    // Migrate that device credential once; never accept an account ID here.
    const oldKey = req.headers.get("x-voyage-legacy-guest");
    res.cookies.set(GUEST, oldKey && uuid4.test(oldKey) ? oldKey : (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])(), cookieOptions(req, 365 * 86400));
}
function rotateGuest(req, res) {
    res.cookies.set(GUEST, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])(), cookieOptions(req, 365 * 86400));
}
// Version 1: scrypt N=32768, r=8, p=3; a fresh 128-bit salt per password.
function derive(password, salt) {
    return new Promise((resolve, reject)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scrypt"])(password, salt, 64, {
            N: 32768,
            r: 8,
            p: 3,
            maxmem: 64 * 1024 * 1024
        }, (err, key)=>err ? reject(err) : resolve(key)));
}
async function hashPassword(password) {
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16);
    return `s1:${salt.toString("hex")}:${(await derive(password, salt)).toString("hex")}`;
}
async function verifyPassword(password, encoded) {
    // Unknown accounts take the same KDF path as accounts with a wrong password.
    const [, salt, key] = (encoded ?? `s1:${"00".repeat(16)}:${"00".repeat(64)}`).split(":");
    const actual = await derive(password, Buffer.from(salt, "hex"));
    const expected = Buffer.from(key, "hex");
    return expected.length === actual.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(actual, expected) && !!encoded;
}
async function checkAuthBudget(req, usernameKey) {
    const now = new Date(), expiry = new Date(now.getTime() + 15 * 60000);
    const address = (req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for")?.split(",")[0] || "local").slice(0, 100);
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authWindows"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lt"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authWindows"].expiresAt, now));
    for (const [bucket, limit] of [
        [
            `ip:${address}`,
            60
        ],
        [
            `name:${usernameKey}`,
            15
        ]
    ]){
        const [window] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authWindows"]).values({
            bucket: digest(bucket),
            count: 1,
            expiresAt: expiry
        }).onConflictDoUpdate({
            target: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authWindows"].bucket,
            set: {
                count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authWindows"].count} + 1`
            }
        }).returning({
            count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authWindows"].count
        });
        if (window.count > limit) throw new RequestProblem(429, "Too many attempts. Try again in 15 minutes.");
    }
}
async function startSession(req, res, accountId) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("base64url");
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lt"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].expiresAt, new Date()));
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).values({
        accountId,
        tokenHash: digest(token),
        expiresAt: new Date(Date.now() + SESSION_SECONDS * 1000)
    });
    res.cookies.set(SESSION, token, cookieOptions(req, SESSION_SECONDS));
}
async function endSession(req, res) {
    const token = req.cookies.get(SESSION)?.value;
    if (token) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].tokenHash, digest(token)));
    res.cookies.set(SESSION, "", cookieOptions(req, 0));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/achievements-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "evaluateAchievementsFor",
    ()=>evaluateAchievementsFor,
    "loadAchievements",
    ()=>loadAchievements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/daily.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function evaluateAchievementsFor(tx, accountId) {
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["todayKey"])();
    const rows = await tx.select({
        dayKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey,
        score: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].score,
        solved: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].solved,
        niche: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].niche,
        mistakes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].mistakes,
        legs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].legs
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].accountId, accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lte"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey, today)));
    const active = await tx.select({
        progress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].progress
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].accountId, accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lte"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey, today)));
    const unlocked = await tx.select({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].achievementId,
        at: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].unlockedAt
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].accountId, accountId));
    const existing = new Map(unlocked.map((u)=>[
            u.id,
            u.at
        ]));
    // A rank at submission is provisional. Use the actual scores of ALL players
    // for that daily challenge once its Eastern calendar day has ended.
    const days = [
        ...new Set(rows.map((r)=>r.dayKey).filter((day)=>day < today))
    ];
    const scores = days.length ? await tx.select({
        day: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey,
        score: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].score,
        count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`count(*)::int`
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inArray"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey, days)).groupBy(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].score) : [];
    const byDay = new Map();
    for (const score of scores){
        const buckets = byDay.get(score.day) ?? [];
        buckets.push(score);
        byDay.set(score.day, buckets);
    }
    for (const row of rows){
        const buckets = byDay.get(row.dayKey) ?? [];
        row.standing = {
            finalized: row.dayKey < today,
            others: Math.max(0, buckets.reduce((n, b)=>n + b.count, 0) - 1),
            beaten: buckets.reduce((n, b)=>n + (b.score < row.score ? b.count : 0), 0),
            rank: 1 + buckets.reduce((n, b)=>n + (b.score > row.score ? b.count : 0), 0)
        };
    }
    const report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateAchievements"])(rows, existing, active.map((a)=>a.progress));
    const inserted = report.newlyUnlocked.length ? await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"]).values(report.newlyUnlocked.map((id)=>({
            accountId,
            achievementId: id
        }))).onConflictDoNothing().returning({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].achievementId,
        at: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].unlockedAt
    }) : [];
    for (const row of inserted)existing.set(row.id, row.at);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateAchievements"])(rows, existing, active.map((a)=>a.progress));
    return {
        ...result,
        newlyUnlocked: inserted.map((row)=>row.id)
    };
}
async function loadAchievements(accountId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].transaction(async (tx)=>{
        await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, accountId)).for("update");
        return evaluateAchievementsFor(tx, accountId);
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/achievements.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS,
    "RISING_SUPERNOVA_SCORE",
    ()=>RISING_SUPERNOVA_SCORE,
    "bestStreak",
    ()=>bestStreak,
    "countMistakes",
    ()=>countMistakes,
    "evaluateAchievements",
    ()=>evaluateAchievements,
    "isNiche",
    ()=>isNiche
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/arcs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-route] (ecmascript)");
;
;
const ACHIEVEMENTS = [
    {
        id: "first-voyage",
        title: "First Voyage",
        description: "Complete your first daily challenge.",
        detail: "Finish all seven questions, answered or timed out.",
        emblem: "first-voyage",
        rewardCharacter: "chopper"
    },
    {
        id: "perfect-run",
        title: "Perfect Run",
        description: "Answer all 7 questions correctly.",
        detail: "Every question solved in one daily voyage. Wrong guesses are allowed.",
        emblem: "perfect",
        rewardCharacter: "zoro"
    },
    {
        id: "no-mistakes",
        title: "No Mistakes",
        description: "Complete a voyage without a wrong answer.",
        detail: "Seven correct answers, zero rejected guesses and no timeouts.",
        emblem: "no-mistakes",
        rewardCharacter: "sanji"
    },
    {
        id: "daily-dedication",
        title: "Daily Dedication",
        description: "Play 7 days in a row.",
        detail: "Start a question on seven consecutive daily challenges. Days follow the game's Eastern reset.",
        emblem: "dedicated",
        rewardCharacter: "nami"
    },
    {
        id: "unstoppable",
        title: "Unstoppable",
        description: "Play 30 days in a row.",
        detail: "Start a question on thirty consecutive daily challenges. Earned badges never reset.",
        emblem: "unstoppable",
        rewardCharacter: "kaido"
    },
    {
        id: "rookie-pirate",
        title: "Rookie Pirate",
        description: "Complete 10 voyages.",
        detail: "Ten completed daily challenges; they don't have to be consecutive.",
        emblem: "rookie",
        rewardCharacter: "usopp"
    },
    {
        id: "rising-supernova",
        title: "Rising Supernova",
        description: "Score 90% or higher.",
        detail: "Earn at least 630 of the possible 700 points in a completed voyage.",
        emblem: "rising",
        rewardCharacter: "law"
    },
    {
        id: "yonko-status",
        title: "Yonko Status",
        description: "Beat 90% of players in a daily voyage.",
        detail: "Score strictly higher than at least 90% of the other players. Awarded after the daily leaderboard closes; ties are not wins.",
        emblem: "yonko",
        rewardCharacter: "whitebeard"
    },
    {
        id: "pirate-king",
        title: "Pirate King",
        description: "Finish #1 on the daily leaderboard.",
        detail: "Hold the highest score when the daily leaderboard closes. Tied winners share #1. At least one other player must finish.",
        emblem: "pirate-king",
        rewardCharacter: "roger"
    },
    {
        id: "encyclopedia",
        title: "Encyclopedia",
        description: "Answer 100 questions correctly.",
        detail: "Correct answers accumulate across your saved daily voyages, including the current one.",
        emblem: "encyclopedia",
        rewardCharacter: "robin"
    },
    {
        id: "grand-line-explorer",
        title: "Grand Line Explorer",
        description: "Complete 25 voyages.",
        detail: "Twenty-five completed daily challenges, consecutive or not.",
        emblem: "explorer",
        rewardCharacter: "jinbe"
    },
    {
        id: "deep-lore",
        title: "Deep Lore",
        description: "Correctly answer 50 niche questions.",
        detail: "Rare, Epic and One in a Luffillion answers count. Progress is cumulative.",
        emblem: "deep-lore",
        rewardCharacter: "rayleigh"
    },
    {
        id: "the-will-of-d",
        title: "The Will of D.",
        description: "Complete 100 daily voyages.",
        detail: "One hundred completed daily challenges. Every saved voyage counts once.",
        emblem: "will",
        rewardCharacter: "gear-5"
    },
    {
        id: "one-in-a-luffillion",
        title: "One in a Luffillion",
        description: "Get a One in a Luffillion answer.",
        detail: "Earn a 100-point pull. The badge is permanent; Luffy's gold hat lasts for that run.",
        emblem: "gold-hat",
        rewardCharacter: "ace"
    },
    {
        id: "laugh-tale",
        title: "Laugh Tale",
        description: "Make it to Laugh Tale.",
        detail: "Reach 500 points in a single voyage. Unlocks as soon as the score is saved.",
        emblem: "treasure",
        rewardCharacter: "shanks"
    }
];
const RISING_SUPERNOVA_SCORE = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_POINTS"] * 0.9);
function bestStreak(days) {
    const ordered = [
        ...new Set(days)
    ].filter((day)=>/^\d{4}-\d{2}-\d{2}$/.test(day)).sort();
    let best = 0, length = 0, previous = -Infinity;
    for (const day of ordered){
        const time = Date.parse(`${day}T12:00:00Z`);
        if (!Number.isFinite(time)) continue;
        length = time - previous === 86400000 ? length + 1 : 1;
        best = Math.max(best, length);
        previous = time;
    }
    return best;
}
const isNiche = (tier)=>tier === "rare" || tier === "epic" || tier === "luffillion";
function countMistakes(p) {
    let total = 0;
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]; i++){
        const state = p.q[i];
        if (!state || !state.status || !Number.isInteger(state.attempts) || state.attempts < (state.status === "solved" ? 1 : 0)) return null;
        total += Math.max(state.wrong.length, state.attempts - (state.status === "solved" ? 1 : 0));
    }
    return total;
}
function evaluateAchievements(rows, existing, checkpoints = []) {
    const complete = [
        ...new Map(rows.map((row)=>[
                row.dayKey,
                row
            ])).values()
    ];
    const finishedDays = new Set(complete.map((row)=>row.dayKey));
    const active = [
        ...new Map(checkpoints.filter((p)=>!finishedDays.has(p.day)).map((p)=>[
                p.day,
                p
            ])).values()
    ];
    const played = active.filter((p)=>Object.values(p.q).some((q)=>q.started || q.status));
    const streak = bestStreak([
        ...finishedDays,
        ...played.map((p)=>p.day)
    ]);
    const successes = active.flatMap((p)=>Object.values(p.q).filter((q)=>q.status === "solved"));
    const totalCorrect = complete.reduce((sum, r)=>sum + r.solved, 0) + successes.length;
    const totalNiche = complete.reduce((sum, r)=>sum + (r.legs ? r.legs.filter((l)=>isNiche(l.tier)).length : r.niche ?? 0), 0) + successes.filter((q)=>isNiche(q.tier)).length;
    const bestSolved = complete.reduce((n, r)=>Math.max(n, r.solved), 0);
    const bestScore = complete.reduce((n, r)=>Math.max(n, r.score), 0);
    const currentBest = active.reduce((best, p)=>Math.max(best, Object.values(p.q).reduce((n, q)=>n + (q.status === "solved" ? q.points ?? 0 : 0), 0)), bestScore);
    const flawless = complete.some((r)=>r.solved === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] && r.mistakes === 0);
    const hasLuff = successes.some((q)=>q.tier === "luffillion") || complete.some((r)=>r.legs?.some((l)=>l.tier === "luffillion"));
    const competitive = complete.filter((r)=>r.standing?.finalized && r.standing.others > 0);
    const bestBeat = competitive.reduce((n, r)=>Math.max(n, 100 * r.standing.beaten / r.standing.others), 0);
    const king = competitive.some((r)=>r.score > 0 && r.standing.rank === 1);
    const waiting = complete.some((r)=>r.standing && !r.standing.finalized);
    const leagueLabel = waiting ? "Today's leaderboard closes at the daily reset" : "Complete a voyage with other players";
    const goals = {
        "first-voyage": {
            n: complete.length,
            target: 1,
            label: `${complete.length} completed`
        },
        "perfect-run": {
            n: bestSolved,
            target: 7,
            label: `${bestSolved} / 7 correct in your best voyage`
        },
        "no-mistakes": {
            n: flawless ? 1 : 0,
            target: 1,
            label: flawless ? "Seven correct, no wrong guesses" : "Finish all 7 without a wrong guess"
        },
        "daily-dedication": {
            n: streak,
            target: 7,
            label: `${streak} / 7 consecutive days`
        },
        "unstoppable": {
            n: streak,
            target: 30,
            label: `${streak} / 30 consecutive days`
        },
        "rookie-pirate": {
            n: complete.length,
            target: 10,
            label: `${complete.length} / 10 voyages`
        },
        "rising-supernova": {
            n: bestScore,
            target: RISING_SUPERNOVA_SCORE,
            label: `${bestScore} / ${RISING_SUPERNOVA_SCORE} points`
        },
        "yonko-status": {
            n: bestBeat,
            target: 90,
            label: competitive.length ? `${Math.floor(bestBeat * 10) / 10}% beaten · target 90%` : leagueLabel
        },
        "pirate-king": {
            n: king ? 1 : 0,
            target: 1,
            label: king ? "#1 on a closed daily leaderboard" : leagueLabel
        },
        "encyclopedia": {
            n: totalCorrect,
            target: 100,
            label: `${totalCorrect} / 100 correct answers`
        },
        "grand-line-explorer": {
            n: complete.length,
            target: 25,
            label: `${complete.length} / 25 voyages`
        },
        "deep-lore": {
            n: totalNiche,
            target: 50,
            label: `${totalNiche} / 50 Rare-or-better answers`
        },
        "the-will-of-d": {
            n: complete.length,
            target: 100,
            label: `${complete.length} / 100 voyages`
        },
        "one-in-a-luffillion": {
            n: hasLuff ? 1 : 0,
            target: 1,
            label: hasLuff ? "100-point pull found" : "Find a 100-point answer"
        },
        "laugh-tale": {
            n: currentBest,
            target: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LAUGH_TALE_AT"],
            label: `${currentBest} / ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LAUGH_TALE_AT"]} points in one voyage`
        }
    };
    const achievements = ACHIEVEMENTS.map((def)=>{
        const goal = goals[def.id];
        const unlockedAt = existing.get(def.id);
        const unlocked = !!unlockedAt || goal.n >= goal.target;
        return {
            ...def,
            unlocked,
            unlockedAt: unlockedAt?.toISOString() ?? null,
            progress: unlocked ? goal.target : Math.min(goal.n, goal.target),
            target: goal.target,
            progressLabel: goal.label
        };
    });
    return {
        achievements,
        newlyUnlocked: achievements.filter((a)=>a.unlocked && !existing.has(a.id)).map((a)=>a.id)
    };
}
}),
"[project]/src/lib/bounty-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_PER_CORRECT",
    ()=>BASE_PER_CORRECT,
    "BONUS_PER_POINT",
    ()=>BONUS_PER_POINT,
    "awardBounty",
    ()=>awardBounty,
    "bountyBoard",
    ()=>bountyBoard,
    "bountyGain",
    ()=>bountyGain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/select.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
;
;
;
const BASE_PER_CORRECT = 50;
const BONUS_PER_POINT = 2;
function bountyGain(legs) {
    return legs.reduce((sum, leg)=>sum + (leg.tier ? BASE_PER_CORRECT + (leg.points ?? 0) * BONUS_PER_POINT : 0), 0);
}
async function awardBounty(tx, accountId, day, gain) {
    if (gain <= 0) return 0;
    const inserted = await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGains"]).values({
        accountId,
        dayKey: day,
        amount: gain
    }).onConflictDoNothing().returning({
        dayKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGains"].dayKey
    });
    if (!inserted.length) return 0; // this day is already credited to this account
    await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"]).values({
        accountId,
        total: gain,
        lastDay: day,
        updatedAt: new Date()
    }).onConflictDoUpdate({
        target: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].accountId,
        set: {
            total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].total} + ${gain}`,
            lastDay: day,
            updatedAt: new Date()
        }
    });
    return gain;
}
async function bountyBoard(tx, ownerId, today) {
    const top = await tx.select({
        accountId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id,
        username: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].username,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].total
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].accountId)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].total), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].lastDay, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].username).limit(50);
    const ranked = top.map((row, i)=>({
            rank: i + 1,
            username: row.username,
            total: row.total,
            isYou: row.accountId === ownerId
        }));
    let you = null;
    if (ownerId) {
        const [mine] = await tx.select({
            total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].total
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].accountId, ownerId)).limit(1);
        const total = mine?.total ?? 0;
        const [todayRow] = await tx.select({
            amount: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGains"].amount
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGains"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGains"].accountId, ownerId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGains"].dayKey, today))).limit(1);
        const [higher] = await tx.select({
            n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`count(*)::int`
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"]).where(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"].total} > ${total}`);
        const [count] = await tx.select({
            n: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`count(*)::int`
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bounties"]);
        you = {
            total,
            today: todayRow?.amount ?? 0,
            rank: (higher?.n ?? 0) + 1,
            count: count?.n ?? 0
        };
    }
    return {
        top: ranked,
        you
    };
}
}),
"[project]/src/lib/crew-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "equipCharacter",
    ()=>equipCharacter,
    "equippedCharacterFor",
    ()=>equippedCharacterFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/playable-characters.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/account-server.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
async function equippedCharacterFor(accountId) {
    const [account] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
        equipped: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].equippedCharacter
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, accountId)).limit(1);
    const chosen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characterById"])(account?.equipped);
    if (!chosen.achievementId) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_CHARACTER"];
    const [earned] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].achievementId
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].accountId, accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["achievementUnlocks"].achievementId, chosen.achievementId))).limit(1);
    return earned ? chosen.id : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_CHARACTER"];
}
async function equipCharacter(accountId, id) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCharacterId"])(id)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](400, "Choose a character from the crew collection.");
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].transaction(async (tx)=>{
        const [account] = await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, accountId)).for("update");
        if (!account) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](401, "Sign in again to choose your character.");
        const report = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateAchievementsFor"])(tx, accountId);
        const character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characterById"])(id);
        const requirement = character.achievementId && report.achievements.find((a)=>a.id === character.achievementId);
        if (character.achievementId && !requirement?.unlocked) {
            const title = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].find((a)=>a.id === character.achievementId)?.title ?? "the required achievement";
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](403, `Earn ${title} to unlock ${character.name}.`);
        }
        await tx.update(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"]).set({
            equippedCharacter: id
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, accountId));
        return {
            equippedCharacter: id,
            accountId,
            newlyUnlocked: report.newlyUnlocked
        };
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/daily.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkGuess",
    ()=>checkGuess,
    "getDailyQuestions",
    ()=>getDailyQuestions,
    "getDailyRun",
    ()=>getDailyRun,
    "getQuestionById",
    ()=>getQuestionById,
    "msUntilNextDay",
    ()=>msUntilNextDay,
    "normalize",
    ()=>normalize,
    "parseEntries",
    ()=>parseEntries,
    "pickRunQuestions",
    ()=>pickRunQuestions,
    "suggestGuess",
    ()=>suggestGuess,
    "tierCounts",
    ()=>tierCounts,
    "todayKey",
    ()=>todayKey,
    "totalAnswers",
    ()=>totalAnswers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/questions.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seasonal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seasonal.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-route] (ecmascript)");
;
;
;
function todayKey(date = new Date()) {
    // Eastern Time (12:00 AM EST reset) keeps the daily cycle identical for every player.
    const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/New_York",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    return formatter.format(date); // returns YYYY-MM-DD
}
function normalize(input) {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/^the /, "").trim();
}
function hash(seed) {
    let h = 2166136261;
    for(let i = 0; i < seed.length; i++){
        h ^= seed.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}
function mulberry32(seed) {
    let a = seed;
    return ()=>{
        a |= 0;
        a = a + 0x6d2b79f5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
function getQuestionById(id) {
    if (id.startsWith("seasonal--")) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seasonal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SEASONAL_QUESTIONS"].find((q)=>q.id === id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"].find((q)=>q.id === id);
}
function pickRunQuestions(exclude = [], rand = Math.random) {
    const ex = new Set(exclude);
    const shuffle = (arr)=>{
        const a = [
            ...arr
        ];
        for(let i = a.length - 1; i > 0; i--){
            const j = Math.floor(rand() * (i + 1));
            [a[i], a[j]] = [
                a[j],
                a[i]
            ];
        }
        return a;
    };
    // Weighted shuffle so every *kind* of question (starts-with, contains, unions, originals...)
    // gets a fair share instead of the most numerous kind dominating.
    const kindOf = (q)=>q.id.includes("--or--") ? "or" : (q.id.split("--")[1] ?? "base").replace(/-.*/, "");
    const kindCount = new Map();
    for (const q of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"])kindCount.set(kindOf(q), (kindCount.get(kindOf(q)) ?? 0) + 1);
    const KIND_WEIGHT = {
        base: 6,
        or: 2,
        starts: 0.6
    };
    const weightOf = (q)=>(KIND_WEIGHT[kindOf(q)] ?? 1) / (kindCount.get(kindOf(q)) ?? 1);
    const weighted = (arr)=>arr.map((q)=>({
                q,
                k: Math.pow(rand(), 1 / weightOf(q))
            })).sort((x, y)=>y.k - x.k).map((x)=>x.q);
    const fresh = weighted(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((q)=>!ex.has(q.id)));
    const seen = shuffle(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((q)=>ex.has(q.id)));
    // Variety: at most one question per base category (e.g. one "characters" twist per run).
    const groupOf = (q)=>q.id.split("--")[0];
    const picked = [];
    const groups = new Set();
    for (const q of [
        ...fresh,
        ...seen
    ]){
        if (picked.length >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]) break;
        const parts = q.id.split("--or--");
        const gs = parts.length > 1 ? parts.map((p)=>p.split("--")[0]) : [
            groupOf(q)
        ];
        if (gs.some((g)=>groups.has(g))) continue;
        // Keep letter questions rare: at most one per run.
        if (kindOf(q) === "starts" && picked.some((x)=>kindOf(x) === "starts")) continue;
        gs.forEach((g)=>groups.add(g));
        picked.push(q);
    }
    for (const q of fresh)if (picked.length < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] && !picked.includes(q) && kindOf(q) !== "starts") picked.push(q);
    return picked;
}
// ---------- Daily run: one shared set of 7 per day (resets at 12:00 AM EST) ----------
const dailyCache = new Map();
function shiftDay(day, delta) {
    const d = new Date(`${day}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + delta);
    return d.toISOString().slice(0, 10);
}
function getDailyRun(day) {
    const cached = dailyCache.get(day);
    if (cached) return cached;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seasonal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inSeason"])(day)) {
        const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seasonal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["seasonalQuestionsFor"])(day);
        dailyCache.set(day, run);
        return run;
    }
    const exclude = [];
    for(let k = 1; k <= 7; k++){
        const prev = shiftDay(day, -k);
        exclude.push(...pickRunQuestions([], mulberry32(hash(`luffillion-daily-${prev}`))).map((q)=>q.id));
    }
    const run = pickRunQuestions(exclude, mulberry32(hash(`luffillion-daily-${day}`)));
    dailyCache.set(day, run);
    return run;
}
function msUntilNextDay(now = new Date()) {
    const currentKey = todayKey(now);
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).formatToParts(now);
    const h = parseInt(parts.find((p)=>p.type === "hour")?.value ?? "0", 10) % 24;
    const m = parseInt(parts.find((p)=>p.type === "minute")?.value ?? "0", 10);
    const s = parseInt(parts.find((p)=>p.type === "second")?.value ?? "0", 10);
    const ms = now.getMilliseconds();
    // Approximate ms remaining until 12:00 AM Eastern:
    const approxRemaining = ((23 - h) * 3600 + (59 - m) * 60 + (60 - s)) * 1000 - ms;
    let target = new Date(now.getTime() + approxRemaining);
    // Exact boundary alignment when the Eastern date key changes:
    while(todayKey(target) === currentKey){
        target = new Date(target.getTime() + 1000);
    }
    while(todayKey(new Date(target.getTime() - 1000)) !== currentKey){
        target = new Date(target.getTime() - 1000);
    }
    return Math.max(0, target.getTime() - now.getTime());
}
function getDailyQuestions(day) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seasonal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inSeason"])(day)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seasonal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["seasonalQuestionsFor"])(day);
    const rand = mulberry32(hash(`luffillion-${day}`));
    const order = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"].map((_, i)=>i);
    for(let i = order.length - 1; i > 0; i--){
        const j = Math.floor(rand() * (i + 1));
        [order[i], order[j]] = [
            order[j],
            order[i]
        ];
    }
    return order.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]).map((i)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$questions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"][i]);
}
function parseEntries(question) {
    const out = [];
    const seenNames = new Set();
    for (const tier of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_ORDER"]){
        for (const raw of question.tiers[tier]){
            const names = raw.split("|").map((s)=>s.trim()).filter(Boolean);
            if (names.length === 0) continue;
            const canonKey = normalize(names[0]);
            if (seenNames.has(canonKey)) continue;
            seenNames.add(canonKey);
            out.push({
                name: names[0],
                tier,
                points: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIER_CONFIG"][tier].points,
                rawParts: names,
                keys: names.map(normalize).filter(Boolean)
            });
        }
    }
    return out;
}
function deriveVariants(questionId, entry) {
    const variants = new Set();
    const isLuffillion = entry.tier === "luffillion";
    for (const key of entry.keys){
        if (questionId === "devil-fruits") {
            if (key.includes(" no mi")) {
                variants.add(key.replace(/ no mi\b/g, "").replace(/\s+/g, " ").trim());
                variants.add(key.replace(/ no mi\b/g, " fruit").replace(/\s+/g, " ").trim());
            }
            if (key.endsWith(" fruit")) {
                variants.add(key.slice(0, -6).trim());
            }
            if (!isLuffillion && key.includes(" model ")) {
                const afterModel = key.split(" model ")[1]?.trim();
                if (afterModel && afterModel.length >= 4) {
                    variants.add(afterModel);
                    variants.add(`model ${afterModel}`);
                    variants.add(`${afterModel} fruit`);
                }
            }
        } else if (questionId === "arcs") {
            const stripped = key.replace(/ (arc|saga|special)$/, "").trim();
            if (stripped.length >= 3) variants.add(stripped);
            if (!key.endsWith(" arc")) variants.add(`${key} arc`);
        } else if (questionId === "locations" && !isLuffillion) {
            const stripped = key.replace(/ (island|islands|kingdom|village|town|archipelago|country|city)$/, "").trim();
            if (stripped.length >= 4) variants.add(stripped);
        } else if (questionId === "crews" && !isLuffillion) {
            const stripped = key.replace(/ (pirates|crew|family|clan|army|alliance|navy|marines)$/, "").trim();
            if (stripped.length >= 4) {
                variants.add(stripped);
                variants.add(`${stripped} crew`);
                variants.add(`${stripped} pirates`);
            }
        } else if (questionId === "techniques") {
            if (key.startsWith("gomu gomu no ")) {
                const move = key.slice("gomu gomu no ".length).trim();
                variants.add(`gum gum ${move}`);
                if (!isLuffillion && move.length >= 4) variants.add(move);
            }
            if (key.startsWith("gum gum ")) {
                const move = key.slice("gum gum ".length).trim();
                variants.add(`gomu gomu no ${move}`);
                if (!isLuffillion && move.length >= 4) variants.add(move);
            }
        } else if (questionId === "characters" && !isLuffillion) {
            const stripped = key.replace(/^(monkey d|portgas d|gol d|marshall d|trafalgar d water|trafalgar|jaguar d|rocks d|nefertari|donquixote|charlotte|vinsmoke|kozuki|shimotsuki|kurozumi|figarland|saint|dr|captain|vice admiral|admiral|princess|king|queen|duke|master|sir) /, "").trim();
            if (stripped.length >= 4) variants.add(stripped);
        } else if ((questionId === "swords" || questionId === "ships") && !isLuffillion) {
            const stripped = key.replace(/ (sword|swords|blade|blades|ship|boat)$/, "").trim();
            if (stripped.length >= 4) variants.add(stripped);
        }
    }
    if (questionId === "techniques" && !isLuffillion) {
        for (const raw of entry.rawParts){
            if (raw.includes(":")) {
                const parts = raw.split(":").map((p)=>normalize(p));
                for (const p of parts){
                    if (p.length >= 4) variants.add(p);
                }
            }
        }
    }
    return [
        ...variants
    ].filter(Boolean);
}
const indexCache = new Map();
function getIndex(question) {
    const cached = indexCache.get(question.id);
    if (cached) return cached;
    const entries = parseEntries(question);
    const map = new Map();
    // Pass 1: Explicit aliases always take priority.
    for (const entry of entries){
        for (const key of entry.keys){
            if (!map.has(key)) map.set(key, entry);
        }
    }
    // Pass 2: Derived convenience aliases (only added when unambiguous across the whole question).
    const candidates = new Map();
    for (const entry of entries){
        for (const variant of deriveVariants(question.matchAs ?? question.id, entry)){
            if (map.has(variant)) continue;
            const existing = candidates.get(variant);
            if (existing === undefined) {
                candidates.set(variant, entry);
            } else if (existing !== entry) {
                candidates.set(variant, null); // ambiguous -> skip
            }
        }
    }
    for (const [variant, entry] of candidates){
        if (entry && !map.has(variant)) {
            map.set(variant, entry);
        }
    }
    indexCache.set(question.id, map);
    return map;
}
function checkGuess(question, guess) {
    const key = normalize(guess);
    if (!key) return null;
    return getIndex(question).get(key) ?? null;
}
function totalAnswers(question) {
    return parseEntries(question).length;
}
function tierCounts(question) {
    const counts = {
        common: 0,
        uncommon: 0,
        rare: 0,
        epic: 0,
        luffillion: 0
    };
    for (const entry of parseEntries(question)){
        counts[entry.tier]++;
    }
    return counts;
}
// ---------- Auto-correct: find the closest answer to a near-miss ----------
function levenshtein(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev2 = [];
    let prev = Array.from({
        length: b.length + 1
    }, (_, j)=>j);
    for(let i = 1; i <= a.length; i++){
        const cur = [
            i
        ];
        let rowMin = i;
        for(let j = 1; j <= b.length; j++){
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
            // swapped neighbours count as one typo ("zoor" -> "zoro")
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
            cur[j] = v;
            if (v < rowMin) rowMin = v;
        }
        if (rowMin > max) return max + 1;
        prev2 = prev;
        prev = cur;
    }
    return prev[b.length];
}
function allowedDistance(len) {
    if (len <= 2) return 0;
    if (len <= 4) return 1;
    if (len <= 7) return 2;
    if (len <= 12) return 3;
    return 4;
}
const compact = (s)=>s.replace(/ /g, "");
// Sound-alike skeleton so common misspellings collapse to the same key:
// "Rayleigh"/"Raleigh", "Kaido"/"Kaidou", "Shirahoshi"/"Shirahosi", "Zorro"/"Zoro", "Chopper"/"Choper".
function phonetic(s) {
    let p = compact(s);
    p = p.replace(/ph/g, "f").replace(/ck/g, "k").replace(/q/g, "k").replace(/c(?=[eiy])/g, "s").replace(/c/g, "k").replace(/x/g, "ks").replace(/z/g, "s").replace(/y/g, "i").replace(/w/g, "u").replace(/v/g, "b").replace(/gh/g, "").replace(/(?!^)h/g, "").replace(/ou|oo|uu/g, "u").replace(/ee|ie|ei|ii/g, "i").replace(/ai|ay/g, "ai").replace(/([a-z])\1+/g, "$1");
    // trailing vowels are often dropped/added ("Enel"/"Eneru", "Kaidou")
    return p.replace(/([^aeiou])[aeiou]$/, "$1");
}
const fuzzyCache = new Map();
function getFuzzyKeys(question) {
    const cached = fuzzyCache.get(question.id);
    if (cached) return cached;
    const out = [];
    for (const [candidate, entry] of getIndex(question)){
        const raw = compact(candidate);
        if (raw.length < 3) continue;
        out.push({
            entry,
            raw,
            ph: phonetic(candidate),
            tokens: candidate.split(" ").filter((w)=>w.length >= 5 && ![
                    "model",
                    "fruit",
                    "pirates",
                    "island",
                    "kingdom"
                ].includes(w))
        });
    }
    fuzzyCache.set(question.id, out);
    return out;
}
function suggestGuess(question, guess) {
    const key = normalize(guess);
    if (key.length < 3) return null;
    const ck = compact(key);
    const pk = phonetic(key);
    const tierRank = {
        common: 0,
        uncommon: 1,
        rare: 2,
        epic: 3,
        luffillion: 4
    };
    let best = null;
    const consider = (entry, score)=>{
        // Prefer lower edit score; on ties prefer the more famous (lower tier) answer.
        if (!best || score < best.score || score === best.score && tierRank[entry.tier] < tierRank[best.entry.tier]) {
            best = {
                entry,
                score
            };
        }
    };
    for (const fk of getFuzzyKeys(question)){
        if (fk.raw === ck) return fk.entry.name; // only spacing/punctuation differs
        if (fk.ph === pk && pk.length >= 3) {
            consider(fk.entry, 0.5); // sounds the same
            continue;
        }
        const max = allowedDistance(Math.min(fk.raw.length, ck.length));
        if (max > 0) {
            // Short guesses must at least start with the same letter to avoid wild guesses.
            if (ck.length <= 4 && fk.raw[0] !== ck[0]) continue;
            const d = levenshtein(ck, fk.raw, max);
            if (d <= max) consider(fk.entry, d);
            const pmax = Math.max(1, max - 1);
            const pd = levenshtein(pk, fk.ph, pmax);
            if (pd <= pmax) consider(fk.entry, pd + 0.25);
        }
        // Misspelled single word of a longer name ("Doflamigo", "Katakri", "Neferteri").
        if (ck.length >= 5 && !key.includes(" ")) {
            for (const tok of fk.tokens){
                const tmax = tok.length <= 7 ? 1 : 2;
                const td = levenshtein(ck, tok, tmax);
                if (td <= tmax) consider(fk.entry, td + 0.6);
                else if (phonetic(tok) === pk) consider(fk.entry, 0.9);
            }
        }
    }
    const found = best;
    return found ? found.entry.name : null;
}
}),
"[project]/src/lib/voyage-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "claimGuestVoyages",
    ()=>claimGuestVoyages,
    "dailySave",
    ()=>dailySave,
    "finishVoyage",
    ()=>finishVoyage,
    "ownerOf",
    ()=>ownerOf,
    "ownsRun",
    ()=>ownsRun,
    "readCheckpoint",
    ()=>readCheckpoint,
    "runFields",
    ()=>runFields,
    "saveCheckpoint",
    ()=>saveCheckpoint,
    "validAnswers",
    ()=>validAnswers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/alias.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/daily.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/account-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bounty$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bounty-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
function ownerOf(accountId, guest) {
    if (accountId) return {
        accountId,
        playerId: `account:${accountId}`
    };
    return guest ? {
        accountId: null,
        playerId: guest
    } : null;
}
const ownsRun = (owner)=>owner.accountId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].accountId, owner.accountId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNull"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].playerId, owner.playerId));
const runFields = {
    day: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey,
    score: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].score,
    solved: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].solved,
    legs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].legs,
    niche: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].niche,
    mistakes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].mistakes,
    beat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].beat,
    rank: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].rank
};
async function dailySave(day, owner) {
    if (!owner) return {
        finished: null,
        checkpoint: null
    };
    const [finished] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select(runFields).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey, day), ownsRun(owner))).limit(1);
    if (finished || !owner.accountId) return {
        finished: finished ?? null,
        checkpoint: null
    };
    const [saved] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
        progress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].progress
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].accountId, owner.accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey, day))).limit(1);
    return {
        finished: null,
        checkpoint: saved?.progress ?? null
    };
}
const obj = (v)=>v !== null && typeof v === "object" && !Array.isArray(v);
function readCheckpoint(raw) {
    const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["todayKey"])();
    if (!obj(raw) || raw.day !== day || !obj(raw.q)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](400, "That checkpoint is not for today's voyage.");
    const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDailyRun"])(day), ids = questions.map((q)=>q.id);
    if (!Array.isArray(raw.ids) || raw.ids.join() !== ids.join()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](409, "The daily questions changed. Reload the game.");
    const q = {};
    for(let i = 0; i < questions.length; i++){
        const item = raw.q[String(i)];
        if (item === undefined) break;
        if (!obj(item)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](400, "Invalid question checkpoint.");
        const attempts = typeof item.attempts === "number" && Number.isInteger(item.attempts) ? Math.max(0, Math.min(100000, item.attempts)) : 0;
        const wrong = Array.isArray(item.wrong) ? item.wrong.filter((w)=>typeof w === "string").slice(0, 40).map((w)=>w.slice(0, 80)) : [];
        const started = typeof item.started === "number" && Number.isFinite(item.started) && item.started > 0 ? Math.min(Date.now(), item.started) : undefined;
        if (item.status === "solved") {
            const match = typeof item.answer === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkGuess"])(questions[i], item.answer.slice(0, 256));
            if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](400, "One of the saved answers doesn't match today's question.");
            q[i] = {
                started,
                status: "solved",
                answer: match.name,
                points: match.points,
                tier: match.tier,
                wrong,
                attempts
            };
        } else if (item.status === "expired") q[i] = {
            started,
            status: "expired",
            points: 0,
            attempts,
            wrong
        };
        else if (item.status == null) {
            if (started) q[i] = {
                started,
                attempts,
                wrong
            };
            break;
        } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$account$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestProblem"](400, "Unrecognized question state.");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromQuestions"])(day, ids, q);
}
async function saveCheckpoint(accountId, incoming, importing = false) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].transaction(async (tx)=>{
        // Serialize changes for this captain, including completion, across tabs/devices.
        await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, accountId)).for("update");
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].accountId, accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey, incoming.day));
        const [complete] = await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].accountId, accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey, incoming.day))).limit(1);
        if (complete) return {
            complete: true,
            progress: null,
            newlyUnlocked: []
        };
        const [old] = await tx.select({
            p: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].progress
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"]).where(key);
        const progress = old ? importing ? old.p : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeProgress"])(old.p, incoming) : incoming;
        await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"]).values({
            accountId,
            dayKey: progress.day,
            progress
        }).onConflictDoUpdate({
            target: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].accountId,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey
            ],
            set: {
                progress
            }
        });
        const report = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateAchievementsFor"])(tx, accountId);
        return {
            complete: false,
            progress,
            newlyUnlocked: report.newlyUnlocked
        };
    });
}
function validAnswers(value) {
    return Array.isArray(value) && value.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] && value.every((a)=>typeof a === "string" && a.length <= 256);
}
async function finishVoyage(owner, day, answers, opts = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].transaction(async (tx)=>{
        let newlyUnlocked = [];
        let checkpoint;
        if (owner.accountId) {
            await tx.select({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id
            }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, owner.accountId)).for("update");
            const [saved] = await tx.select({
                p: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].progress
            }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].accountId, owner.accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey, day)));
            checkpoint = saved?.p;
        }
        const legs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDailyRun"])(day).map((q, i)=>{
            const settled = checkpoint?.q[i];
            const answer = settled?.status ? settled.status === "solved" ? settled.answer : "" : answers[i];
            const match = answer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$daily$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkGuess"])(q, answer) : null;
            return {
                questionId: q.id,
                prompt: q.prompt,
                answer: match?.name ?? null,
                tier: match?.tier ?? null,
                points: match?.points ?? 0
            };
        });
        const score = legs.reduce((sum, leg)=>sum + leg.points, 0);
        const solved = legs.filter((leg)=>leg.tier).length;
        const niche = legs.filter((leg)=>leg.tier === "rare" || leg.tier === "epic" || leg.tier === "luffillion").length;
        // Missing history is unknown, not flawless. A previously recorded wrong
        // guess cannot be erased by sending a smaller mistake count at completion.
        const recordedErrors = checkpoint ? Object.values(checkpoint.q).reduce((n, q)=>n + Math.max(q.wrong.length, q.attempts - (q.status === "solved" ? 1 : 0)), 0) : 0;
        const reported = typeof opts.mistakes === "number" && Number.isInteger(opts.mistakes) && opts.mistakes >= 0 ? opts.mistakes : null;
        const mistakes = reported !== null ? Math.max(recordedErrors, reported) : recordedErrors > 0 ? recordedErrors : null;
        const where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey, day), ownsRun(owner));
        const [inserted] = await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).values({
            ...owner,
            dayKey: day,
            score,
            solved,
            niche,
            mistakes,
            legs
        }).onConflictDoNothing().returning({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].id
        });
        // Preserve old score-only records. Backfill recap and achievement fields only if
        // re-scoring agrees with what the old row already says.
        await tx.update(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).set({
            legs,
            niche
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])(where, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNull"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].legs), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].score, score), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].solved, solved)));
        const [saved] = await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].id,
            ...runFields
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).where(where).limit(1);
        if (!saved) return {
            final: null,
            newlyUnlocked: []
        };
        // Snapshot for the run recap only. Achievement evaluation recomputes the
        // final standing after this Eastern day closes (ties don't count as beaten).
        const dayRows = await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].id,
            score: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].score
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey, day));
        const others = dayRows.filter((r)=>r.id !== saved.id);
        const beat = others.length ? 100 * others.filter((r)=>r.score < saved.score).length / others.length : 0;
        const rank = 1 + others.filter((r)=>r.score > saved.score).length;
        await tx.update(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).set({
            beat: Math.floor(beat),
            rank
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].id, saved.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNull"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].rank)));
        const [final] = await tx.select(runFields).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].id, saved.id)).limit(1);
        if (owner.accountId) await tx.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].accountId, owner.accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey, day)));
        // Credit the captain exactly once per voyage — the insert above only runs on a
        // newly completed record, never on a backfill or resubmission.
        if (owner.accountId && inserted) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bounty$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["awardBounty"])(tx, owner.accountId, day, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bounty$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGain"])(legs));
        if (owner.accountId) newlyUnlocked = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateAchievementsFor"])(tx, owner.accountId)).newlyUnlocked;
        return {
            final,
            newlyUnlocked
        };
    });
}
async function claimGuestVoyages(accountId, guest, current) {
    if (current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["firstOpen"])(current) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]) {
        await finishVoyage({
            playerId: guest,
            accountId: null
        }, current.day, Array.from({
            length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]
        }, (_, i)=>current.q[i]?.answer ?? ""), {
            mistakes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countMistakes"])(current) ?? undefined
        });
    }
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].transaction(async (tx)=>{
        await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accounts"].id, accountId)).for("update");
        const owned = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["alias"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"], "already_owned");
        // Link in place: no extra scoreboard entry, and an existing account result wins.
        const moved = await tx.update(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"]).set({
            accountId
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].playerId, guest), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNull"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notExists"])(tx.select({
            id: owned.id
        }).from(owned).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(owned.accountId, accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(owned.dayKey, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey)))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notExists"])(tx.select({
            day: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].accountId, accountId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkpoints"].dayKey, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey)))))).returning({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].id,
            dayKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].dayKey,
            legs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runs"].legs
        });
        // Backfill each linked voyage's bounty. Idempotent per captain-day.
        for (const row of moved){
            const gain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bounty$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bountyGain"])(row.legs ?? []);
            if (gain > 0) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bounty$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["awardBounty"])(tx, accountId, row.dayKey, gain);
        }
        return moved.length;
    });
    if (current && Object.keys(current.q).length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["firstOpen"])(current) < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]) await saveCheckpoint(accountId, current, true);
    return count;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/voyage.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firstOpen",
    ()=>firstOpen,
    "fromQuestions",
    ()=>fromQuestions,
    "fromRecap",
    ()=>fromRecap,
    "mergeProgress",
    ()=>mergeProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/arcs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-route] (ecmascript)");
;
;
function firstOpen(p) {
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]; i++)if (!p.q[i]?.status) return i;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"];
}
function fromQuestions(day, ids, q) {
    const runs = [];
    let distance = 0;
    for(let i = 0; i < ids.length; i++){
        const state = q[i];
        if (state?.status === "solved" && state.tier && typeof state.points === "number") {
            distance += (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["travelFor"])(state.points);
            runs.push({
                questionIndex: i,
                tier: state.tier,
                points: state.points,
                arc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sagaAt"])(distance).name
            });
        }
    }
    return {
        day,
        ids,
        q,
        runs
    };
}
function mergeProgress(saved, incoming) {
    if (saved.day !== incoming.day || saved.ids?.join() !== incoming.ids?.join()) return saved;
    const q = {};
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]; i++){
        const a = saved.q[i], b = incoming.q[i];
        if (!a && !b) break;
        if (a?.status || !b) q[i] = a;
        else if (!a) q[i] = b;
        else q[i] = {
            ...b,
            started: a.started && b.started ? Math.min(a.started, b.started) : a.started ?? b.started,
            // A pending state's attempts are rejected guesses. Settling it on another
            // device cannot erase those guesses or move the start time forward.
            attempts: Math.max(a.attempts + (b.status === "solved" ? 1 : 0), b.attempts),
            wrong: [
                ...new Set([
                    ...b.wrong,
                    ...a.wrong
                ])
            ].slice(0, 40)
        };
        if (!q[i].status) break;
    }
    return fromQuestions(saved.day, saved.ids ?? [], q);
}
function fromRecap(run) {
    if (!run.legs || run.legs.length !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]) return null;
    const q = {};
    run.legs.forEach((leg, i)=>{
        q[i] = leg.answer && leg.tier ? {
            status: "solved",
            answer: leg.answer,
            tier: leg.tier,
            points: leg.points,
            attempts: 1,
            wrong: []
        } : {
            status: "expired",
            points: 0,
            attempts: 0,
            wrong: []
        };
    });
    return fromQuestions(run.day, run.legs.map((leg)=>leg.questionId), q);
}
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16jbb1ngelq3r._.js.map