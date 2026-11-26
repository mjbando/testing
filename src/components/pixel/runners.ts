import { PLAYABLE_CHARACTERS, type CharacterId } from "@/data/playable-characters";
import { LUFFY_PAL, luffyFrame } from "./art";

export interface RunnerSprite {
  width: number;
  height: number;
  rows: string[];
  palette: Record<string, string>;
  goldHat: { x: number; y: number };
}

// All art is assembled on an integer pixel grid, then cached into three frames.
// Each recruit has its own silhouette/accessories; the canvas and collection share the same sprite.
class Pixels {
  cells: string[][];
  palette: Record<string, string> = {};
  keys = new Map<string, string>();
  constructor(public width = 20, public height = 24) {
    this.cells = Array.from({ length: height }, () => Array<string>(width).fill("."));
  }
  r(x: number, y: number, w: number, h: number, color: string) {
    let key = this.keys.get(color);
    if (!key) { key = String.fromCharCode(65 + this.keys.size); this.keys.set(color, key); this.palette[key] = color; }
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (j >= 0 && j < this.height && i >= 0 && i < this.width) this.cells[j][i] = key;
    return this;
  }
  finish(hatX = 2, hatY = 1): RunnerSprite {
    return { width: this.width, height: this.height, rows: this.cells.map(row => row.join("")), palette: this.palette, goldHat: { x: hatX, y: hatY } };
  }
}
const ink = "#182035", skin = "#f4c69c", skinShade = "#cb8e69", cream = "#fff4dc", white = "#f7f8fb", silver = "#bfcddd", gold = "#edc05e";
type Pose = -1 | 0 | 1;
function feet(p: Pixels, pose: Pose, x: number, y: number, trousers: string, shoes: string, gap = 5, height = 5) {
  const move = pose === -1 ? 0 : pose === 0 ? -1 : 1;
  p.r(x + move, y, 4, height, ink).r(x + move + 1, y, 2, height - 1, trousers).r(x + move - 1, y + height - 1, 5, 2, shoes);
  p.r(x + gap - move, y, 4, height, ink).r(x + gap - move + 1, y, 2, height - 1, trousers).r(x + gap - move, y + height - 1, 5, 2, shoes);
}
function human(pose: Pose, hair: string, shirt: string, trousers: string, shoes = ink, face = skin) {
  const p = new Pixels();
  const swing = pose === -1 ? 0 : pose === 0 ? -1 : 1;
  feet(p, pose, 6, 18, trousers, shoes);
  p.r(4, 11 + swing, 3, 6, ink).r(5, 12 + swing, 2, 3, shirt).r(4, 16 + swing, 3, 2, face);
  p.r(13, 11 - swing, 3, 6, ink).r(13, 12 - swing, 2, 3, shirt).r(13, 16 - swing, 3, 2, face);
  p.r(6, 10, 8, 9, ink).r(7, 11, 6, 7, shirt);
  p.r(8, 9, 4, 2, face);
  p.r(5, 3, 10, 7, ink).r(6, 4, 8, 6, face).r(7, 10, 6, 1, skinShade);
  p.r(4, 6, 2, 3, face).r(14, 6, 2, 3, face);
  p.r(7, 7, 1, 1, ink).r(12, 7, 1, 1, ink).r(9, 9, 2, 1, skinShade);
  p.r(5, 2, 10, 3, hair).r(4, 4, 2, 2, hair).r(14, 4, 2, 2, hair);
  return p;
}
function katana(p: Pixels, x: number, y: number, grip: string, long = 12) {
  p.r(x, y, 2, long, ink).r(x, y + 1, 1, long - 5, silver).r(x - 2, y + long - 4, 5, 1, gold).r(x, y + long - 3, 2, 4, grip);
}

function drawRecruit(id: Exclude<CharacterId, "luffy">, pose: Pose): RunnerSprite {
  let p: Pixels;
  switch (id) {
    case "chopper": {
      p = new Pixels(20, 20);
      // Branched antlers, blue cap and white cross.
      p.r(2, 0, 2, 8, "#8f603a").r(0, 2, 4, 2, "#8f603a").r(1, 1, 1, 3, "#ba8b53");
      p.r(16, 0, 2, 8, "#8f603a").r(16, 2, 4, 2, "#8f603a").r(18, 0, 1, 4, "#ba8b53");
      const step = pose === -1 ? 0 : pose === 0 ? -1 : 1;
      p.r(6 + step, 17, 3, 3, ink).r(11 - step, 17, 3, 3, ink).r(6, 14, 8, 4, "#e496bc");
      p.r(4, 13, 3, 4, "#b67a4d").r(13, 13, 3, 4, "#b67a4d");
      p.r(4, 6, 12, 8, ink).r(5, 6, 10, 7, "#bd8658").r(3, 7, 2, 3, "#bd8658").r(15, 7, 2, 3, "#bd8658");
      p.r(7, 9, 1, 2, ink).r(12, 9, 1, 2, ink).r(7, 11, 6, 2, "#efd4ae").r(9, 10, 2, 1, "#2c8dce");
      p.r(5, 1, 10, 5, ink).r(6, 1, 8, 4, "#4eafe0").r(3, 5, 14, 2, "#df709f");
      p.r(9, 2, 2, 3, white).r(8, 3, 4, 1, white);
      return p.finish(2, 2);
    }
    case "zoro": {
      p = human(pose, "#5fac4a", "#477e4b", "#304c38");
      p.r(5, 1, 3, 2, "#75c15b").r(9, 1, 3, 2, "#5fac4a").r(13, 2, 2, 2, "#428b39");
      p.r(9, 11, 2, 5, skin).r(7, 16, 6, 2, "#bf3349").r(12, 6, 1, 3, skinShade);
      p.r(4, 8, 1, 3, gold);
      // Three sheathed/held swords, two by the waist and one upright.
      katana(p, 17, 7, "#eceae4", 16);
      p.r(1, 14, 2, 8, ink).r(2, 14, 1, 7, "#af7ac6").r(0, 16, 5, 1, gold);
      p.r(3, 15, 2, 8, "#e5e8ef").r(2, 17, 5, 1, gold);
      return p.finish();
    }
    case "sanji": {
      p = human(pose, "#f2cb58", "#28344b", "#1e2b40", "#0c1221");
      p.r(11, 3, 4, 5, "#e2b747").r(12, 3, 2, 4, "#ffdf78");
      p.r(6, 6, 3, 1, skinShade).r(6, 5, 1, 1, skinShade);
      p.r(8, 11, 4, 2, "#a8c9df").r(9, 12, 2, 3, "#e8bc57");
      p.r(8, 15, 1, 1, gold).r(11, 15, 1, 1, gold).r(8, 17, 1, 1, gold).r(11, 17, 1, 1, gold);
      p.r(13, 9, 4, 1, white).r(17, 9, 1, 1, "#ee965a");
      return p.finish();
    }
    case "nami": {
      p = human(pose, "#f29a3e", "#43b9ad", "#2e73ba", "#a5563f");
      p.r(4, 4, 2, 10, "#e87e32").r(14, 4, 2, 10, "#de7534").r(5, 2, 3, 3, "#ffb550");
      p.r(7, 12, 6, 1, cream).r(7, 14, 6, 3, skin).r(7, 17, 6, 2, "#2771ad");
      p.r(18, 6, 1, 18, "#2ea5e5").r(17, 6, 3, 2, "#a5ecfa");
      p.r(4, 12, 1, 2, "#2771ad");
      return p.finish();
    }
    case "usopp": {
      p = human(pose, "#38302c", "#bd9355", "#9d6e3b", "#765334", "#d5a174");
      p.r(4, 2, 12, 3, "#c5b077").r(5, 5, 2, 1, "#65482e");
      p.r(6, 3, 3, 2, gold).r(11, 3, 3, 2, gold).r(7, 3, 1, 1, "#4b7087").r(12, 3, 1, 1, "#4b7087");
      p.r(13, 8, 5, 2, "#d5a174").r(9, 10, 2, 1, "#38302c");
      p.r(7, 11, 6, 5, "#d5a174").r(7, 11, 1, 7, "#c8ac66").r(12, 11, 1, 7, "#c8ac66");
      p.r(0, 12, 2, 4, "#586a39").r(4, 12, 2, 4, "#586a39").r(2, 16, 2, 8, "#586a39").r(1, 11, 4, 1, cream);
      return p.finish();
    }
    case "robin": {
      p = human(pose, "#20263b", "#3769b1", "#ba71aa", "#46344d");
      p.r(3, 5, 2, 11, "#20263b").r(15, 5, 2, 11, "#20263b").r(4, 3, 2, 3, "#20263b");
      p.r(6, 3, 3, 2, "#779bbc").r(11, 3, 3, 2, "#779bbc").r(7, 3, 1, 1, white).r(12, 3, 1, 1, white);
      p.r(9, 11, 2, 4, skin).r(9, 14, 2, 1, gold).r(6, 17, 8, 4, "#c87db5");
      p.r(16, 13, 4, 7, "#6d5060").r(17, 14, 3, 5, cream).r(17, 15, 2, 1, "#ab9068").r(17, 17, 2, 1, "#ab9068");
      return p.finish();
    }
    case "law": {
      p = human(pose, "#202431", "#e3bf44", "#3c506c");
      p.r(5, 0, 10, 6, ink).r(6, 0, 8, 5, "#f2eeda").r(4, 5, 12, 1, "#e1dcc4");
      p.r(7, 1, 2, 1, "#41404b").r(11, 0, 1, 2, "#41404b").r(10, 3, 2, 1, "#41404b").r(13, 3, 1, 1, "#41404b");
      p.r(5, 11, 2, 5, "#252a39").r(13, 11, 2, 5, "#252a39").r(8, 13, 4, 3, ink).r(9, 13, 2, 1, gold);
      p.r(9, 10, 2, 1, "#504138").r(4, 16, 1, 1, ink);
      katana(p, 18, 2, "#b5464b", 21);
      p.r(17, 6, 3, 1, cream).r(17, 10, 3, 1, cream);
      return p.finish(2, 1);
    }
    case "ace": {
      p = human(pose, "#272b36", skin, "#36404b", "#604739");
      p.r(5, 0, 10, 5, ink).r(6, 0, 8, 4, "#ee983d").r(5, 3, 10, 1, "#9c5538").r(2, 4, 16, 2, "#dc8235");
      p.r(7, 2, 2, 1, "#58a0b8").r(11, 2, 2, 1, cream);
      [7, 9, 11, 13].forEach(x => p.r(x, 11 + (x === 9 || x === 11 ? 1 : 0), 1, 1, "#cf3b43"));
      p.r(9, 15, 2, 1, skinShade).r(7, 17, 6, 2, "#dd8b39").r(9, 17, 2, 1, gold);
      // A contained Fire Fist at his hand, not a world/weather effect.
      p.r(0, 13, 4, 5, "#d96031").r(1, 10 + (pose === 1 ? 1 : 0), 2, 5, "#f2943b").r(1, 14, 2, 3, "#ffe080");
      p.r(17, 17, 2, 6, "#5d8995").r(16, 17, 3, 1, silver);
      return p.finish(2, 1);
    }
    case "rayleigh": {
      p = human(pose, "#e4e7da", "#d9aa94", "#676477", "#564c41");
      p.r(3, 5, 2, 7, "#e4e7da").r(15, 5, 2, 7, "#d2d8d0").r(6, 1, 2, 2, white).r(11, 1, 3, 2, white);
      p.r(6, 6, 3, 3, silver).r(11, 6, 3, 3, silver).r(9, 7, 2, 1, silver).r(7, 7, 1, 1, ink).r(12, 7, 1, 1, ink);
      p.r(7, 10, 6, 2, "#e4e7da").r(8, 12, 4, 1, "#e4e7da");
      p.r(2, 11, 4, 10, "#649b86").r(3, 12, 1, 8, "#a5d2b8").r(14, 11, 4, 10, "#649b86");
      p.r(9, 15, 2, 1, "#614849"); katana(p, 18, 10, "#847246", 13);
      return p.finish();
    }
    case "shanks": {
      p = human(pose, "#a93649", "#efe7db", "#776779", "#63483b");
      p.r(4, 1, 3, 4, "#d25258").r(8, 1, 4, 2, "#bb3c50").r(13, 2, 3, 3, "#902f44");
      p.r(6, 5, 1, 5, "#9e5a4d").r(8, 5, 1, 3, "#9e5a4d").r(7, 8, 1, 2, "#9e5a4d");
      p.r(2, 11, 5, 11, "#242a3d").r(3, 12, 1, 9, "#3b4054").r(14, 11, 4, 11, "#242a3d");
      p.r(9, 11, 2, 5, skin).r(7, 17, 6, 2, "#a8374e"); katana(p, 18, 12, "#526570", 11);
      return p.finish();
    }
    case "roger": {
      p = human(pose, "#272c36", "#e7dac3", "#434458", "#262c3c");
      p.r(5, 0, 10, 4, "#b2374b").r(4, 2, 12, 2, "#cc4d56").r(2, 4, 16, 2, gold).r(4, 4, 12, 1, "#a72c42");
      p.r(8, 1, 4, 2, cream).r(9, 1, 1, 1, ink).r(11, 1, 1, 1, ink);
      p.r(5, 9, 3, 2, ink).r(8, 10, 4, 1, ink).r(12, 9, 3, 2, ink);
      p.r(3, 11, 4, 11, "#b9324c").r(13, 11, 4, 11, "#b9324c").r(6, 12, 1, 9, gold).r(13, 12, 1, 9, gold);
      p.r(2, 11, 5, 2, gold).r(13, 11, 5, 2, gold).r(7, 17, 6, 2, "#9b648e");
      katana(p, 0, 8, "#a13c4d", 14);
      return p.finish(2, 1);
    }
    case "gear-5": {
      p = human(pose, white, white, white, "#d1a06f");
      // Cloud hair, moon-white scarf and a wide grin.
      p.r(3, 2, 3, 4, silver).r(4, 1, 4, 5, white).r(7, 0, 5, 5, white).r(12, 1, 4, 5, white).r(15, 3, 2, 3, white);
      p.r(7, 1, 2, 1, "#dce2eb").r(12, 2, 2, 1, "#dce2eb").r(9, 9, 3, 1, white).r(7, 7, 1, 1, "#b2527d").r(12, 7, 1, 1, "#b2527d");
      p.r(0, 6, 3, 6, white).r(1, 11, 3, 3, white).r(2, 12, 3, 2, "#dfe4ec");
      p.r(17, 6, 3, 8, white).r(15, 13, 4, 2, white).r(16, 5, 3, 2, "#e0e5ed");
      p.r(9, 11, 2, 5, skin).r(7, 17, 6, 2, "#a779c2").r(13, 18, 3, 2, "#a779c2").r(15, 19, 2, 2, "#c79bdd");
      return p.finish(2, 1);
    }
    case "jinbe": {
      p = new Pixels(24, 27);
      feet(p, pose, 7, 22, "#37434f", "#645147", 6, 4);
      p.r(4, 13, 16, 11, ink).r(5, 14, 14, 9, "#dd9743");
      p.r(2, 14, 4, 6, "#d89a4b").r(18, 14, 4, 6, "#d89a4b").r(2, 19, 3, 3, "#69b1d2").r(19, 19, 3, 3, "#69b1d2");
      p.r(7, 3, 10, 4, "#24415b").r(10, 0, 4, 4, "#24415b").r(5, 7, 14, 7, ink).r(6, 7, 12, 7, "#70b9d4");
      p.r(4, 8, 2, 3, "#70b9d4").r(18, 8, 2, 3, "#70b9d4").r(8, 9, 2, 1, ink).r(14, 9, 2, 1, ink);
      p.r(7, 12, 2, 4, cream).r(15, 12, 2, 4, cream).r(9, 13, 6, 1, "#436477");
      p.r(11, 15, 2, 3, "#70b9d4").r(6, 20, 12, 2, "#a14d45");
      [[7,16],[16,17],[9,22]].forEach(([x,y])=>p.r(x,y,2,2,cream).r(x-1,y+1,4,1,cream));
      return p.finish(4, 3);
    }
    case "whitebeard": {
      p = new Pixels(26, 30);
      feet(p, pose, 8, 24, "#74717b", "#3b3543", 7, 5);
      p.r(3, 12, 19, 13, ink).r(8, 13, 10, 11, skin).r(3, 12, 5, 13, white).r(18, 12, 4, 13, white);
      p.r(3, 13, 1, 11, silver).r(21, 13, 1, 11, silver).r(2, 12, 6, 3, gold).r(18, 12, 5, 3, gold);
      p.r(8, 4, 10, 8, ink).r(9, 5, 8, 7, skin).r(10, 7, 1, 1, ink).r(15, 7, 1, 1, ink);
      p.r(7, 2, 12, 4, white).r(8, 2, 1, 2, silver).r(7, 5, 12, 1, silver);
      // Huge upward-curved crescent moustache.
      p.r(6, 9, 2, 2, white).r(18, 9, 2, 2, white).r(7, 11, 12, 2, white).r(9, 12, 8, 2, white);
      p.r(11, 15, 1, 5, skinShade).r(9, 18, 7, 1, skinShade).r(8, 23, 10, 2, "#85454e");
      // Murakumogiri bisento.
      p.r(24, 7, 1, 23, "#b48546").r(22, 1, 3, 7, silver).r(21, 2, 2, 4, white).r(23, 0, 2, 2, white).r(23, 8, 3, 1, gold);
      return p.finish(5, 2);
    }
    case "kaido": {
      p = new Pixels(26, 30);
      feet(p, pose, 8, 24, "#384b68", "#203043", 7, 5);
      p.r(4, 11, 19, 14, "#293141").r(7, 12, 14, 12, "#b78068");
      p.r(5, 5, 17, 8, "#263142").r(9, 6, 10, 8, "#bf886e").r(10, 8, 2, 1, ink).r(16, 8, 2, 1, ink);
      p.r(4, 3, 5, 3, cream).r(3, 1, 3, 3, cream).r(3, 0, 1, 2, "#b7a28c");
      p.r(20, 3, 4, 3, cream).r(23, 1, 3, 3, cream).r(25, 0, 1, 2, "#b7a28c");
      p.r(8, 12, 4, 2, ink).r(16, 12, 4, 2, ink).r(12, 13, 4, 4, ink);
      p.r(4, 13, 3, 8, "#343d4f").r(21, 13, 3, 7, "#6697b2");
      p.r(11, 18, 1, 3, skinShade).r(8, 23, 13, 2, "#a76ac4").r(9, 21, 12, 2, "#8d5eb3");
      p.r(0, 12, 4, 14, ink).r(1, 13, 2, 10, "#495166").r(1, 26, 2, 4, "#8c6549");
      [13,17,21].forEach(y=>p.r(0,y,1,2,silver).r(4,y+1,1,2,silver));
      return p.finish(6, 3);
    }
  }
}

const cached = Object.fromEntries(PLAYABLE_CHARACTERS.filter(c => c.id !== "luffy").map(c => [c.id, {
  idle: drawRecruit(c.id as Exclude<CharacterId, "luffy">, -1),
  left: drawRecruit(c.id as Exclude<CharacterId, "luffy">, 0),
  right: drawRecruit(c.id as Exclude<CharacterId, "luffy">, 1),
}])) as Record<Exclude<CharacterId, "luffy">, { idle: RunnerSprite; left: RunnerSprite; right: RunnerSprite }>;

export function runnerSprite(characterId: CharacterId, running = false, time = 0): RunnerSprite {
  if (characterId === "luffy") return { width: 16, height: 16, rows: luffyFrame(running, time), palette: LUFFY_PAL, goldHat: { x: 0, y: 0 } };
  const sprites = cached[characterId];
  return running ? Math.floor(time / 110) % 2 === 0 ? sprites.left : sprites.right : sprites.idle;
}
