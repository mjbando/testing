import type { Question } from "../questions";

// Extra themed questions so every run can draw a different set of 7.
// Format: "Display Name|alias|alias". Exactly one luffillion answer per question.

export const EXTRA_QUESTIONS: Question[] = [
  {
    id: "marines",
    prompt: "Name a member of the Marines.",
    hint: "Any rank, from Fleet Admiral down to seaman, past or present.",
    tiers: {
      common: ["Akainu|Sakazuki", "Aokiji|Kuzan", "Kizaru|Borsalino", "Monkey D. Garp|Garp", "Koby|Coby", "Smoker"],
      uncommon: ["Fujitora|Issho", "Ryokugyu|Aramaki|Green Bull", "Sengoku", "Tashigi", "Helmeppo", "Tsuru"],
      rare: [
        "Kong", "Zephyr|Z", "Momonga", "Sentomaru", "Hina", "Jaguar D. Saul|Saul", "Bogard", "Prince Grus|Grus", "Kujaku", "Hibari",
        "Doll", "Onigumo", "Strawberry", "Doberman", "Yamakaji", "Bastille", "Dalmatian", "Comil", "Lacroix", "Gion|Momousagi",
        "Tokikake|Chaton", "Vergo", "Donquixote Rosinante|Rosinante|Corazon", "T-Bone|T Bone", "Fullbody",
      ],
      epic: [
        "Morgan|Axe-Hand Morgan|Captain Morgan", "Nezumi", "Jango", "Brannew", "Attach", "X Drake|Drake", "Very Good",
        "Ripper", "Shu", "Maynard", "Stainless", "John Giant", "Mozambia", "Cancer", "Kadar", "Rokkaku", "Pudding Pudding", "Sharinguru", "Ensign Gal|Gal",
      ],
      luffillion: ["Jonathan|Vice Admiral Jonathan"],
    },
  },
  {
    id: "logia",
    prompt: "Name a Logia Devil Fruit.",
    hint: "Fruits that turn the user into an element. Japanese or English names count.",
    tiers: {
      common: ["Mera Mera no Mi|Flame-Flame Fruit", "Hie Hie no Mi|Ice-Ice Fruit", "Pika Pika no Mi|Glint-Glint Fruit|Light Fruit"],
      uncommon: [
        "Magu Magu no Mi|Magma Fruit", "Goro Goro no Mi|Rumble-Rumble Fruit|Lightning Fruit", "Suna Suna no Mi|Sand-Sand Fruit",
        "Moku Moku no Mi|Smoke-Smoke Fruit", "Yami Yami no Mi|Dark-Dark Fruit",
      ],
      rare: ["Gasu Gasu no Mi|Gas-Gas Fruit", "Yuki Yuki no Mi|Snow-Snow Fruit", "Numa Numa no Mi|Swamp-Swamp Fruit"],
      epic: ["Mori Mori no Mi|Woods-Woods Fruit|Forest Fruit"],
      luffillion: ["Ame Ame no Mi|Candy-Candy Fruit|Syrup Fruit"],
    },
  },
  {
    id: "zoan",
    prompt: "Name a Zoan Devil Fruit.",
    hint: "Regular, Ancient, Mythical, or Artificial Zoans. Model names count.",
    tiers: {
      common: ["Hito Hito no Mi|Human-Human Fruit", "Tori Tori no Mi, Model: Phoenix|Phoenix", "Uo Uo no Mi, Model: Seiryu|Seiryu|Azure Dragon"],
      uncommon: [
        "Neko Neko no Mi, Model: Leopard|Leopard", "Ushi Ushi no Mi, Model: Giraffe|Giraffe", "Inu Inu no Mi, Model: Okuchi no Makami|Okuchi no Makami",
        "Hito Hito no Mi, Model: Daibutsu|Daibutsu", "Zou Zou no Mi, Model: Mammoth|Mammoth", "Ryu Ryu no Mi, Model: Pteranodon|Pteranodon",
        "Ryu Ryu no Mi, Model: Brachiosaurus|Brachiosaurus", "Inu Inu no Mi, Model: Wolf|Wolf",
      ],
      rare: [
        "Ushi Ushi no Mi, Model: Bison|Bison", "Tori Tori no Mi, Model: Falcon|Falcon", "Inu Inu no Mi, Model: Jackal|Jackal",
        "Inu Inu no Mi, Model: Dachshund|Dachshund", "Uma Uma no Mi|Horse-Horse Fruit", "Mogu Mogu no Mi|Mole-Mole Fruit",
        "Hebi Hebi no Mi, Model: Anaconda|Anaconda", "Hebi Hebi no Mi, Model: King Cobra|King Cobra", "Hebi Hebi no Mi, Model: Yamata no Orochi|Yamata no Orochi",
        "Inu Inu no Mi, Model: Kyubi no Kitsune|Kyubi no Kitsune", "Ryu Ryu no Mi, Model: Allosaurus|Allosaurus", "Ryu Ryu no Mi, Model: Spinosaurus|Spinosaurus",
        "Ryu Ryu no Mi, Model: Triceratops|Triceratops", "Ryu Ryu no Mi, Model: Pachycephalosaurus|Pachycephalosaurus", "Neko Neko no Mi, Model: Saber Tiger|Saber Tiger",
        "Kumo Kumo no Mi, Model: Rosamygale Grauvogeli|Rosamygale Grauvogeli", "Hito Hito no Mi, Model: Onyudo|Onyudo", "Uma Uma no Mi, Model: Pegasus|Pegasus",
      ],
      epic: [
        "Sara Sara no Mi, Model: Axolotl|Axolotl", "Inu Inu no Mi, Model: Tanuki|Tanuki", "Mushi Mushi no Mi, Model: Kabutomushi|Kabutomushi",
        "Mushi Mushi no Mi, Model: Suzumebachi|Suzumebachi", "Ryu Ryu no Mi, Model: Kirin|Kirin", "Zou Zou no Mi|Eleph-Eleph Fruit", "SMILE",
      ],
      luffillion: ["Tori Tori no Mi, Model: Albatross|Albatross"],
    },
  },
  {
    id: "whitebeard-pirates",
    prompt: "Name a member or ally of the Whitebeard Pirates.",
    hint: "Division commanders, crew, or the allied captains at Marineford.",
    tiers: {
      common: ["Whitebeard|Edward Newgate", "Marco|Marco the Phoenix", "Portgas D. Ace|Ace"],
      uncommon: ["Jozu|Diamond Jozu", "Vista", "Thatch", "Izou|Izo", "Marshall D. Teach|Blackbeard"],
      rare: ["Blamenco", "Rakuyo", "Namur", "Blenheim", "Curiel", "Kingdew", "Haruta", "Atmos", "Speed Jiru", "Fossa", "Edward Weevil|Weevil", "Kozuki Oden|Oden"],
      epic: [
        "Squard", "Whitey Bay", "Little Oars Jr.|Oars Jr.", "Doma", "McGuy", "Decalvan Brothers", "Elmy", "A.O", "Delacuaji", "Ramba",
        "Andre", "Karma", "Islewan", "Pavlik", "Nosgarl", "Agsilly", "Brew", "Choi", "Arthur", "Palms", "Bizarre", "Blondie", "Amadob", "Hangan", "Ninth", "Reforte",
      ],
      luffillion: ["Zodia"],
    },
  },
  {
    id: "charlotte-family",
    prompt: "Name a member of the Charlotte Family.",
    hint: "Big Mom, her 85 children, and family by marriage.",
    tiers: {
      common: ["Big Mom|Charlotte Linlin|Linlin", "Charlotte Katakuri|Katakuri", "Charlotte Pudding|Pudding"],
      uncommon: [
        "Charlotte Cracker|Cracker", "Charlotte Smoothie|Smoothie", "Charlotte Perospero|Perospero", "Charlotte Brulee|Brulee",
        "Charlotte Oven|Oven", "Charlotte Daifuku|Daifuku", "Charlotte Lola|Lola", "Charlotte Chiffon|Chiffon",
      ],
      rare: [
        "Charlotte Amande|Amande", "Charlotte Mont-d'Or|Mont-d'Or", "Charlotte Galette|Galette", "Charlotte Opera|Opera", "Charlotte Flampe|Flampe",
        "Charlotte Praline|Praline", "Charlotte Compote|Compote", "Charlotte Snack|Snack", "Charlotte Moscato|Moscato", "Charlotte Counter|Counter",
        "Charlotte Cadenza|Cadenza", "Charlotte Cabaletta|Cabaletta", "Charlotte Raisin|Raisin", "Charlotte Brownie|Brownie", "Charlotte Joconde|Joconde",
        "Charlotte Custard|Custard", "Charlotte Mascarpone|Mascarpone", "Charlotte Noisette|Noisette", "Charlotte Dolce|Dolce", "Charlotte Dragee|Dragee",
        "Charlotte Anana|Anana", "Charlotte Citron|Citron", "Charlotte Cinnamon|Cinnamon", "Charlotte Angel|Angel", "Streusen", "Charlotte Mozart|Mozart",
      ],
      epic: [
        "Charlotte Newshi|Newshi", "Charlotte Tablet|Tablet", "Charlotte Dacquoise|Dacquoise", "Charlotte Laurin|Laurin", "Charlotte High-Fat|High-Fat",
        "Charlotte Normande|Normande", "Charlotte Marnier|Marnier", "Charlotte Panna|Panna", "Charlotte Hachis|Hachis", "Charlotte Gala|Gala",
        "Charlotte Nutmeg|Nutmeg", "Charlotte Akimeg|Akimeg", "Charlotte Allmeg|Allmeg", "Charlotte Harumeg|Harumeg", "Charlotte Fuyumeg|Fuyumeg",
        "Charlotte Basskarte|Basskarte", "Charlotte Dosmarche|Dosmarche", "Charlotte Kato|Kato", "Charlotte Poire|Poire", "Charlotte Effilee|Effilee",
        "Charlotte Myukuru|Myukuru", "Charlotte Joscarpone|Joscarpone", "Charlotte Bavarois|Bavarois", "Charlotte Nusstorte|Nusstorte", "Charlotte Yuen|Yuen",
        "Charlotte Saint-Marc|Saint-Marc", "Charlotte Compo|Compo",
      ],
      luffillion: ["Pound"],
    },
  },
  {
    id: "donquixote-family",
    prompt: "Name a member of the Donquixote Family.",
    hint: "Doflamingo's executives, officers, and underlings.",
    tiers: {
      common: ["Donquixote Doflamingo|Doflamingo|Joker", "Trebol", "Vergo"],
      uncommon: ["Diamante", "Pica", "Sugar", "Monet"],
      rare: ["Donquixote Rosinante|Rosinante|Corazon", "Trafalgar Law|Law", "Baby 5|Baby Five", "Bellamy", "Dellinger", "Senor Pink", "Machvise"],
      epic: ["Lao G", "Gladius", "Buffalo", "Caesar Clown|Caesar", "Jora|Giolla", "Viola|Violet"],
      luffillion: ["Ucy"],
    },
  },
  {
    id: "wano-characters",
    prompt: "Name a character from Wano Country.",
    hint: "Samurai, ninja, the Kozuki clan, Orochi's men, or Wano citizens.",
    tiers: {
      common: ["Kozuki Oden|Oden", "Yamato", "Kin'emon|Kinemon", "Kozuki Momonosuke|Momonosuke|Momo"],
      uncommon: ["Kozuki Hiyori|Hiyori|Komurasaki", "Kurozumi Orochi|Orochi", "Kurozumi Kanjuro|Kanjuro", "Denjiro", "Kikunojo|O-Kiku|Kiku"],
      rare: [
        "Raizo", "Kawamatsu", "Ashura Doji|Shutenmaru", "Izou|Izo", "Shinobu", "Tama|O-Tama|Otama", "Hyogoro",
        "Kozuki Toki|Toki", "Kozuki Sukiyaki|Sukiyaki|Tenguyama Hitetsu|Hitetsu", "Shimotsuki Yasuie|Yasuie|Tonoyasu",
        "Shimotsuki Ushimaru|Ushimaru", "Shimotsuki Kozaburo|Kozaburo", "Shimotsuki Ryuma|Ryuma",
      ],
      epic: [
        "Kurozumi Higurashi|Higurashi", "Fukurokuju", "Hotei", "Toko|O-Toko", "Tsuru|O-Tsuru", "Komachiyo", "Hihimaru",
        "Kyoshiro", "Onimaru|Gyukimaru", "Kurozumi Semimaru|Semimaru", "Minatomo", "Kunyun", "Chome", "Chuji",
      ],
      luffillion: ["Ochoku|Wang Zhi"],
    },
  },
  {
    id: "fishmen",
    prompt: "Name a Fish-Man or Merfolk.",
    hint: "Any fish-man, merman, or mermaid character.",
    tiers: {
      common: ["Jinbe|Jimbei", "Arlong", "Shirahoshi"],
      uncommon: ["Fisher Tiger", "Hatchan|Hachi", "Camie|Keimi", "Hody Jones|Hody", "Neptune|King Neptune", "Otohime"],
      rare: [
        "Fukaboshi", "Ryuboshi", "Manboshi", "Kuroobi", "Chew", "Aladdin", "Wadatsumi", "Vander Decken IX|Vander Decken",
        "Shyarly|Madam Shyarly", "Dosun", "Zeo", "Daruma", "Ikaros Much", "Hyouzou", "Hammond", "Macro", "Gyaro", "Tansui",
      ],
      epic: ["Ishilly", "Hiramera", "Seira", "Meroie", "Kairen", "Octopako", "Take", "Shioyaki", "Pisaro", "Charlotte Praline|Praline", "Mero"],
      luffillion: ["Den"],
    },
  },
  {
    id: "worst-generation",
    prompt: "Name a member of the Worst Generation (the Supernovas).",
    hint: "The rookies at Sabaody with 100M+ bounties, plus Blackbeard.",
    tiers: {
      common: ["Monkey D. Luffy|Luffy", "Trafalgar Law|Law", "Eustass Kid|Kid"],
      uncommon: ["Roronoa Zoro|Zoro", "Marshall D. Teach|Blackbeard"],
      rare: ["Killer", "Jewelry Bonney|Bonney", "Basil Hawkins|Hawkins", "X Drake|Drake"],
      epic: ["Capone Bege|Bege", "Scratchmen Apoo|Apoo"],
      luffillion: ["Urouge|Mad Monk Urouge"],
    },
  },
  {
    id: "revolutionaries",
    prompt: "Name a member of the Revolutionary Army.",
    hint: "Leaders, commanders, and officers of the Revolutionary Army.",
    tiers: {
      common: ["Monkey D. Dragon|Dragon", "Sabo"],
      uncommon: ["Emporio Ivankov|Ivankov|Iva", "Koala", "Bartholomew Kuma|Kuma", "Inazuma", "Hack"],
      rare: ["Belo Betty", "Morley", "Lindbergh", "Karasu"],
      epic: ["Ahiru", "Bunny Joe", "Ushiano", "Jiron"],
      luffillion: ["Terry Gilteo"],
    },
  },
  {
    id: "cipher-pol",
    prompt: "Name a Cipher Pol agent (CP9, CP0, or others).",
    hint: "Any World Government secret agent, past or present.",
    tiers: {
      common: ["Rob Lucci|Lucci", "Kaku", "Spandam"],
      uncommon: ["Jabra|Jyabura", "Blueno", "Kumadori", "Fukurou|Fukuro", "Kalifa|Califa", "Hattori"],
      rare: ["Stussy", "Joseph", "Gismonda", "Guernica", "Spandine"],
      epic: ["Nero", "Maha"],
      luffillion: ["Wanze"],
    },
  },
  {
    id: "giants",
    prompt: "Name a giant.",
    hint: "Giants of Elbaph, giant Marines, or any giant character.",
    tiers: {
      common: ["Dorry", "Brogy"],
      uncommon: ["Hajrudin", "Oimo", "Kashii|Kashi", "Little Oars Jr.|Oars Jr.", "Jarul", "Jorul", "Loki"],
      rare: ["John Giant", "Ronse", "Gerd", "Goldberg", "Road", "Jaguar D. Saul|Saul", "Oars", "Harald|King Harald"],
      epic: ["Ripley", "Colon", "Ida", "Lacroix"],
      luffillion: ["Stansen"],
    },
  },
  {
    id: "minks",
    prompt: "Name a Mink.",
    hint: "Furry residents of Zou and members of the Mink Tribe.",
    tiers: {
      common: ["Carrot", "Pedro", "Bepo"],
      uncommon: ["Inuarashi|Duke Dogstorm|Dogstorm", "Nekomamushi|Master Cat Viper|Cat Viper", "Wanda", "Shishilian", "Concelot", "Pekoms"],
      rare: ["Giovanni", "Roddy", "Black Back", "Bariete", "Miyagi", "Milky"],
      epic: ["Zepo", "Sicilian"],
      luffillion: ["Tristan"],
    },
  },
  {
    id: "baroque-works",
    prompt: "Name a Baroque Works agent.",
    hint: "Officer Agents, Frontier Agents, the Unluckies, and their partners.",
    tiers: {
      common: ["Crocodile|Mr. 0|Mr 0", "Nico Robin|Miss All Sunday|Robin", "Bon Clay|Mr. 2|Bentham"],
      uncommon: ["Daz Bonez|Mr. 1", "Miss Doublefinger|Zala|Paula", "Galdino|Mr. 3", "Miss Goldenweek|Marianne"],
      rare: ["Mr. 4|Babe", "Miss Merry Christmas|Drophy", "Mr. 5|Gem", "Miss Valentine|Mikita", "Nefertari Vivi|Miss Wednesday|Vivi", "Igaram|Mr. 8", "Mr. 9", "Miss Monday"],
      epic: ["Mr. 7", "Miss Father's Day", "Mr. 11", "Lassoo", "Mr. 13", "Miss Mother's Day"],
      luffillion: ["Miss Friday"],
    },
  },
  {
    id: "beast-pirates",
    prompt: "Name a member of the Beast Pirates.",
    hint: "All-Stars, Tobiroppo, Headliners, Gifters, and Pleasures.",
    tiers: {
      common: ["Kaido|Kaidou", "King|Alber", "Queen", "Jack"],
      uncommon: ["Ulti", "Page One", "Who's-Who|Whos Who", "Black Maria", "Sasaki"],
      rare: ["X Drake|Drake", "Basil Hawkins|Hawkins", "Scratchmen Apoo|Apoo", "Yamato", "Holdem", "Speed", "Babanuki", "Daifugo", "Sheepshead", "Ginrummy", "Kurozumi Kanjuro|Kanjuro"],
      epic: ["Bao Huang", "Briscola", "Hamlet", "Poker", "Dobon", "Alpacaman", "Madilloman", "Gazelleman", "Mouseman", "Batman", "Solitaire"],
      luffillion: ["Fourtricks"],
    },
  },
  {
    id: "billion-bounties",
    prompt: "Name a character with a bounty of over 1 billion berries.",
    hint: "Any known bounty strictly above 1,000,000,000 berries.",
    tiers: {
      common: ["Monkey D. Luffy|Luffy", "Shanks|Red-Haired Shanks", "Kaido|Kaidou", "Big Mom|Charlotte Linlin"],
      uncommon: [
        "Marshall D. Teach|Blackbeard", "Whitebeard|Edward Newgate", "Roronoa Zoro|Zoro", "Trafalgar Law|Law", "Eustass Kid|Kid",
        "Gol D. Roger|Roger", "Sanji",
      ],
      rare: ["Dracule Mihawk|Mihawk", "Crocodile", "Buggy|Buggy the Clown", "Jinbe|Jimbei", "Charlotte Katakuri|Katakuri"],
      epic: ["King|Alber", "Marco|Marco the Phoenix"],
      luffillion: ["Queen"],
    },
  },
  {
    id: "doctors",
    prompt: "Name a doctor or healer in One Piece.",
    hint: "Physicians, surgeons, or healers who practise medicine.",
    tiers: {
      common: ["Tony Tony Chopper|Chopper", "Trafalgar Law|Law"],
      uncommon: ["Dr. Kureha|Kureha|Doctorine", "Dr. Hiriluk|Hiriluk|Hiruluk", "Crocus", "Dr. Hogback|Hogback", "Mansherry|Princess Mansherry"],
      rare: ["Doc Q", "Dr. Vegapunk|Vegapunk"],
      epic: ["Dr. Indigo|Indigo"],
      luffillion: ["Isshi-20|Twenty MDs"],
    },
  },
  {
    id: "celestial-dragons",
    prompt: "Name a Celestial Dragon, Elder Star, or World Noble.",
    hint: "World Nobles of Mary Geoise, the Five Elders, the Holy Knights, and Imu.",
    tiers: {
      common: ["Imu|Im", "Saint Jaygarcia Saturn|Saturn"],
      uncommon: [
        "Saint Marcus Mars|Mars", "Saint Topman Warcury|Warcury", "Saint Ethanbaron V. Nusjuro|Nusjuro", "Saint Shepherd Ju Peter|Ju Peter",
      ],
      rare: [
        "Saint Charlos|Charlos", "Saint Rosward|Rosward", "Saint Shalria|Shalria", "Saint Figarland Garling|Garling",
        "Donquixote Mjosgard|Mjosgard", "Donquixote Homing|Homing",
      ],
      epic: [
        "Donquixote Doflamingo|Doflamingo", "Donquixote Rosinante|Rosinante|Corazon",
        "Figarland Shamrock|Shamrock", "Saint Rimoshifu Killingham|Killingham", "Saint Shepherd Sommers|Sommers", "Gunko",
      ],
      luffillion: ["Saint Jalmack|Jalmack"],
    },
  },
];
