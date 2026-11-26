// Pixel-art drawing helpers for Luffy's journey world.
// Everything is drawn in "art pixels": the canvas is sized so one art pixel is a few CSS pixels.

export type Ctx = CanvasRenderingContext2D;

export interface Scene {
  sky: string[]; // 4 bands, top to bottom
  far: string;
  near: string;
  ground: string;
  grass: string;
}

export type BuildingKind =
  | "shack"
  | "town"
  | "windmill"
  | "ship"
  | "arlong"
  | "tower"
  | "mountain"
  | "peak"
  | "castle"
  | "pyramid"
  | "sky"
  | "canal"
  | "justice"
  | "gothic"
  | "stands"
  | "dome"
  | "arena"
  | "cake"
  | "pagoda"
  | "lab"
  | "gate";

// One building per arc in ARCS order (index 0 = Romance Dawn ... 19 = Egghead), then the finish gate.
export const BUILDING_KINDS: BuildingKind[] = [
  "shack",
  "town",
  "windmill",
  "ship",
  "arlong",
  "tower",
  "mountain",
  "peak",
  "castle",
  "pyramid",
  "sky",
  "canal",
  "justice",
  "gothic",
  "stands",
  "dome",
  "arena",
  "cake",
  "pagoda",
  "lab",
];

export const BUILDING_WIDTH = 44;

export const SCENES: Scene[] = [
  { sky: ["#7fd4ff", "#a8e4ff", "#d8f5ff", "#fff3d6"], far: "#6fa6c9", near: "#4e9a6a", ground: "#e7c27d", grass: "#5bbf5b" },
  { sky: ["#ffb27a", "#ffc997", "#ffe2b8", "#fff1d6"], far: "#c97b62", near: "#a35f4f", ground: "#d8a86a", grass: "#7dba4a" },
  { sky: ["#8ec5ff", "#b6dbff", "#e3f1ff", "#fff7e0"], far: "#8fa7b8", near: "#6e9e57", ground: "#c7a46a", grass: "#5ea14a" },
  { sky: ["#4aa3e0", "#7cc2ef", "#b9e2f8", "#fff6e0"], far: "#4a7fb0", near: "#2f6f9a", ground: "#2f6f9a", grass: "#4aa3e0" },
  { sky: ["#2a3a6b", "#3c5a8a", "#7aa1c9", "#f7c59f"], far: "#2a4a5a", near: "#1f3b3b", ground: "#3d5a6b", grass: "#2a8a7a" },
  { sky: ["#f09a6a", "#f7b98a", "#ffd9a8", "#fff0cc"], far: "#7d5a6b", near: "#5d4252", ground: "#a8875a", grass: "#8a9a4a" },
  { sky: ["#6aa9e8", "#94c8f2", "#c6e6fb", "#eef9ff"], far: "#5a6e8c", near: "#3d5070", ground: "#6b5a4a", grass: "#4a8a4a" },
  { sky: ["#f2b25a", "#f7cb7f", "#fde1a8", "#fff4d6"], far: "#8a6a4a", near: "#6a4c34", ground: "#7b5a3a", grass: "#8a7a3a" },
  { sky: ["#a6c8e6", "#c8dff0", "#e9f3fb", "#ffffff"], far: "#9db4cc", near: "#dbe8f5", ground: "#f2f7fb", grass: "#e4eef7" },
  { sky: ["#ff9a4a", "#ffb76b", "#ffd595", "#fff0c4"], far: "#c97a3a", near: "#b0642f", ground: "#e0b06a", grass: "#c8a050" },
  { sky: ["#7ec8ff", "#a9dcff", "#d6efff", "#fffbe6"], far: "#e8f4ff", near: "#ffffff", ground: "#fff7d1", grass: "#f6e27a" },
  { sky: ["#5fb0ea", "#8ccbf2", "#c5e6fa", "#fff2d8"], far: "#7d8fa8", near: "#56708a", ground: "#a77a52", grass: "#6fae5a" },
  { sky: ["#5a6bb0", "#7d8ac4", "#b3bce0", "#eef0fa"], far: "#7b7f99", near: "#4f5570", ground: "#8d8a80", grass: "#7a7a7a" },
  { sky: ["#1e1433", "#2d1f47", "#4a3368", "#7a5a92"], far: "#2e2448", near: "#1c152f", ground: "#2a2238", grass: "#3a4a2a" },
  { sky: ["#e76f51", "#f4a261", "#f9c98f", "#fde7c7"], far: "#b05a40", near: "#8a4330", ground: "#c9a27a", grass: "#a0884a" },
  { sky: ["#0b4f6c", "#156a8a", "#1f8aa8", "#56b8c9"], far: "#0e5870", near: "#0a4a60", ground: "#d9c48a", grass: "#2a9d8f" },
  { sky: ["#ff8fb1", "#ffb3c7", "#ffd6e0", "#fff2c4"], far: "#d27aa0", near: "#b35f86", ground: "#e8c48a", grass: "#7dc36a" },
  { sky: ["#ffb6d9", "#ffc9e6", "#ffe0f0", "#fff5fb"], far: "#f08ac0", near: "#e06aa8", ground: "#ffd1e6", grass: "#b8f08a" },
  { sky: ["#ff6b4a", "#ff8f5c", "#ffb07a", "#ffe0b0"], far: "#7a2e2e", near: "#5a2222", ground: "#6b4a3a", grass: "#4a6a3a" },
  { sky: ["#0d1b2a", "#1b2f4a", "#2f5d7a", "#6fb4d6"], far: "#24486a", near: "#1b3650", ground: "#3a4a5a", grass: "#3fd1c4" },
];

export const LUFFY_PAL: Record<string, string> = {
  k: "#1b1b2f",
  y: "#f1cf7a",
  Y: "#caa045",
  w: "#f5d2a8",
  r: "#e0303a",
  R: "#2f5fd6",
};

const LUFFY_IDLE = [
  "......kkkk......",
  ".....kyyyyk.....",
  "..kkYYrrrrYYkk..",
  ".kYYYYYYYYYYYYk.",
  "..kkkkkkkkkkkk..",
  "....kwwwwwwk....",
  "....kwkwwkwk....",
  "....kwwwwwwk....",
  "...krrrrrrrrk...",
  "..krrrrrrrrrrk..",
  "..kwrrrrrrrrwk..",
  "..kwrrrrrrrrwk..",
  "...kRRRRRRRRk...",
  "...kRRRRRRRRk...",
  "....kwk..kwk....",
  "....kkk..kkk....",
];

const LUFFY_RUN_A = [
  ...LUFFY_IDLE.slice(0, 14),
  "...kwk....kwk...",
  "..kkk.....kkk...",
];

const LUFFY_RUN_B = [
  ...LUFFY_IDLE.slice(0, 14),
  "..kwk.....kwk...",
  "..kkk.....kkk...",
];

export function luffyFrame(running: boolean, t: number): string[] {
  if (!running) return LUFFY_IDLE;
  return Math.floor(t / 110) % 2 === 0 ? LUFFY_RUN_A : LUFFY_RUN_B;
}

function rect(c: Ctx, x: number, y: number, w: number, h: number, col: string) {
  c.fillStyle = col;
  c.fillRect(Math.round(x), Math.round(y), Math.max(1, Math.round(w)), Math.max(1, Math.round(h)));
}

// Triangle roof: apex at `top`, widening down to `halfW` over `h` rows.
function tri(c: Ctx, cx: number, top: number, halfW: number, h: number, col: string) {
  for (let i = 0; i < h; i++) {
    const hw = Math.max(1, Math.round((halfW * (i + 1)) / h));
    rect(c, cx - hw, top + i, hw * 2, 1, col);
  }
}

// Hemisphere: apex at `top`, flat base at top + r.
function dome(c: Ctx, cx: number, top: number, r: number, col: string) {
  for (let y = 0; y <= r; y++) {
    const half = Math.round(Math.sqrt(Math.max(0, r * r - (r - y) * (r - y))));
    rect(c, cx - half, top + y, half * 2, 1, col);
  }
}

export function drawSprite(c: Ctx, rows: string[], x: number, y: number, pal: Record<string, string>) {
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    for (let col = 0; col < row.length; col++) {
      const color = pal[row[col]];
      if (color) rect(c, x + col, y + r, 1, 1, color);
    }
  }
}

const GOLD_HAT_PAL: Record<string, string> = {
  o: "#4a2500", // deep bronze outline for crisp silhouette on any sky
  h: "#fffbe6", // white-gold specular gleam
  g: "#ffd700", // pure 24k bright gold
  G: "#f59e0b", // rich amber gold shading
  b: "#b45309", // burnished gold ribbon band
};

const GOLD_HAT_ROWS = [
  ".....oooooo.....",
  "....ohggggGo....",
  "....ogggggGo....",
  ".ooogbbbbbbGooo.",
  "ohggggggggggggGo",
  ".oooooooooooooo.",
];

// Draws a gleaming 24k Gold Straw Hat over Luffy's hat once One in a Luffillion is hit.
export function drawGoldHat(c: Ctx, x: number, y: number, t: number) {
  drawSprite(c, GOLD_HAT_ROWS, x, y - 1, GOLD_HAT_PAL);

  // Diagonal specular glint sweeping across the gold crown & brim.
  const phase = t % 1800;
  if (phase < 480) {
    const sweep = Math.floor((phase / 480) * 18);
    for (let r = 0; r < GOLD_HAT_ROWS.length; r++) {
      const row = GOLD_HAT_ROWS[r];
      for (let col = 0; col < row.length; col++) {
        const ch = row[col];
        if ((ch === "g" || ch === "G" || ch === "h") && col + r === sweep) {
          rect(c, x + col, y - 1 + r, 1, 1, "#ffffff");
        }
      }
    }
  }

  // Subtle twinkling sparkles around the hat.
  const sparks: [number, number, number][] = [
    [x + 2, y - 2, 0],
    [x + 13, y - 2, 1.9],
    [x + 16, y + 2, 3.6],
  ];
  for (const [sx, sy, off] of sparks) {
    const pulse = Math.sin(t / 220 + off);
    if (pulse > 0.72) {
      rect(c, sx - 1, sy, 3, 1, "#fffbe6");
      rect(c, sx, sy - 1, 1, 3, "#fffbe6");
      rect(c, sx, sy, 1, 1, "#ffffff");
    } else if (pulse > 0.25) {
      rect(c, sx, sy, 1, 1, "#ffd700");
    }
  }
}

export function drawBuilding(kind: BuildingKind, c: Ctx, bx: number, gy: number, t: number) {
  rect(c, bx, gy, BUILDING_WIDTH, 1, "rgba(0,0,0,0.25)");
  const cx = bx + 22;

  switch (kind) {
    case "shack": {
      rect(c, bx + 8, gy - 14, 28, 14, "#c58b4a");
      for (let i = 0; i < 4; i++) rect(c, bx + 8, gy - 12 + i * 4, 28, 1, "#8a5a2b");
      tri(c, cx, gy - 24, 18, 10, "#8b2e2e");
      rect(c, bx + 18, gy - 8, 8, 8, "#3b2412");
      rect(c, bx + 11, gy - 11, 5, 5, "#9fe3ff");
      rect(c, bx + 2, gy - 34, 2, 34, "#3b2412");
      rect(c, bx + 4, gy - 34, 8, 5, "#e0303a");
      break;
    }
    case "town": {
      const houses: [number, number, number, string, string][] = [
        [2, 12, 14, "#f4e3c1", "#d9542b"],
        [14, 16, 22, "#ffd6a5", "#b23a1f"],
        [30, 12, 12, "#f4e3c1", "#d9542b"],
      ];
      for (const [dx, w, h, wall, roof] of houses) {
        rect(c, bx + dx, gy - h, w, h, wall);
        tri(c, bx + dx + w / 2, gy - h - 6, w / 2 + 1, 6, roof);
        rect(c, bx + dx + 2, gy - h + 3, 3, 3, "#ffe9a8");
        if (w > 12) rect(c, bx + dx + w - 5, gy - h + 3, 3, 3, "#ffe9a8");
        rect(c, bx + dx + w / 2 - 1, gy - 6, 3, 6, "#3b2412");
      }
      break;
    }
    case "windmill": {
      for (let i = 0; i < 22; i++) {
        const hw = 3 + Math.round((i / 22) * 4);
        rect(c, cx - hw, gy - 22 + i, hw * 2, 1, "#f1e3c4");
      }
      tri(c, cx, gy - 30, 5, 8, "#8b2e2e");
      rect(c, cx - 2, gy - 6, 4, 6, "#3b2412");
      const hx = cx;
      const hy = gy - 24;
      for (let k = 0; k < 4; k++) {
        const a = t * 0.0025 + (k * Math.PI) / 2;
        for (let d = 2; d <= 14; d++) rect(c, hx + Math.cos(a) * d, hy + Math.sin(a) * d, 1, 1, "#5a3418");
        for (let d = 4; d <= 11; d += 3) {
          const px = hx + Math.cos(a + 0.5) * d;
          const py = hy + Math.sin(a + 0.5) * d;
          rect(c, px, py, 2, 2, "#fff3d0");
        }
      }
      rect(c, hx - 1, hy - 1, 3, 3, "#3b2412");
      break;
    }
    case "ship": {
      rect(c, bx, gy - 8, 44, 6, "#8b5a2b");
      rect(c, bx + 3, gy - 2, 38, 2, "#5a3418");
      rect(c, bx + 6, gy - 14, 32, 6, "#c58b4a");
      for (let i = 0; i < 5; i++) rect(c, bx + 9 + i * 6, gy - 12, 3, 3, "#ffe9a8");
      for (let i = 0; i < 11; i++) rect(c, bx + 6 + i * 3, gy - 16, 3, 2, i % 2 ? "#e0303a" : "#ffffff");
      rect(c, bx + 14, gy - 34, 2, 20, "#5a3418");
      rect(c, bx + 16, gy - 34, 6, 4, "#2f5fd6");
      rect(c, bx + 32, gy - 26, 4, 12, "#8b2e2e");
      const sm = (t / 40) % 14;
      rect(c, bx + 33 + Math.sin(sm) * 2, gy - 28 - sm, 3, 3, "rgba(230,230,230,0.8)");
      break;
    }
    case "arlong": {
      rect(c, bx + 10, gy - 40, 22, 40, "#4b4f6b");
      tri(c, cx - 1, gy - 54, 12, 14, "#2d2f45");
      for (let y = gy - 34; y < gy - 8; y += 7) {
        rect(c, bx + 16, y, 3, 4, "#ff6b6b");
        rect(c, bx + 24, y, 3, 4, "#ff6b6b");
      }
      rect(c, bx + 19, gy - 6, 5, 6, "#111111");
      rect(c, bx + 32, gy - 38, 10, 6, "#2a9d8f");
      rect(c, bx + 32, gy - 38, 2, 6, "#1b1b2f");
      break;
    }
    case "tower": {
      rect(c, bx + 15, gy - 40, 14, 40, "#c9b79c");
      tri(c, cx, gy - 54, 9, 14, "#7c4a2a");
      rect(c, bx + 18, gy - 32, 8, 8, "#ffffff");
      rect(c, bx + 21, gy - 31, 1, 4, "#111111");
      rect(c, bx + 21, gy - 28, 3, 1, "#111111");
      rect(c, bx, gy - 10, 44, 10, "#a07a50");
      rect(c, bx + 2, gy - 30, 2, 22, "#5a3418");
      rect(c, bx + 2, gy - 30, 10, 2, "#5a3418");
      rect(c, bx + 10, gy - 28, 1, 6, "#c9b79c");
      break;
    }
    case "mountain": {
      tri(c, cx, gy - 46, 24, 46, "#6b7a8f");
      tri(c, cx, gy - 46, 8, 9, "#ffffff");
      rect(c, bx + 28, gy - 36, 2, 28, "#9fe3ff");
      rect(c, bx + 12, gy - 6, 20, 6, "#4b5563");
      break;
    }
    case "peak": {
      tri(c, cx, gy - 44, 20, 44, "#8a6a4a");
      tri(c, cx, gy - 44, 5, 6, "#e8f5e9");
      rect(c, cx - 2, gy - 48, 4, 4, "#3fa34d");
      rect(c, cx - 1, gy - 50, 2, 2, "#3fa34d");
      rect(c, bx + 4, gy - 4, 36, 4, "#5a4330");
      break;
    }
    case "castle": {
      rect(c, bx + 8, gy - 22, 28, 22, "#e8f1ff");
      rect(c, bx + 2, gy - 30, 8, 30, "#dfe9f7");
      rect(c, bx + 34, gy - 30, 8, 30, "#dfe9f7");
      tri(c, bx + 6, gy - 38, 5, 8, "#3b5b92");
      tri(c, bx + 38, gy - 38, 5, 8, "#3b5b92");
      tri(c, cx, gy - 36, 10, 14, "#3b5b92");
      rect(c, cx - 3, gy - 8, 6, 8, "#3b2412");
      rect(c, bx - 2, gy - 2, 48, 2, "#ffffff");
      break;
    }
    case "pyramid": {
      tri(c, cx, gy - 40, 22, 40, "#e0b56b");
      for (let i = 0; i < 40; i++) rect(c, cx, gy - 40 + i, ((i + 1) * 22) / 40, 1, "#c79a50");
      rect(c, cx - 2, gy - 6, 4, 6, "#5a3418");
      rect(c, bx + 2, gy - 14, 2, 14, "#7a4a22");
      tri(c, bx + 3, gy - 18, 4, 4, "#3fa34d");
      break;
    }
    case "sky": {
      rect(c, bx, gy - 10, 44, 6, "#ffffff");
      rect(c, bx + 4, gy - 14, 10, 5, "#ffffff");
      rect(c, bx + 26, gy - 14, 12, 5, "#ffffff");
      rect(c, bx + 8, gy - 26, 8, 16, "#ffe9a8");
      dome(c, bx + 12, gy - 30, 4, "#f7c948");
      rect(c, bx + 28, gy - 22, 8, 12, "#ffe9a8");
      dome(c, bx + 32, gy - 26, 4, "#f7c948");
      rect(c, bx + 20, gy - 34 + (Math.sin(t / 200) > 0 ? 0 : 1), 2, 2, "#fff3a0");
      break;
    }
    case "canal": {
      rect(c, bx - 4, gy - 4, 52, 4, "#2f7fb8");
      rect(c, bx, gy - 18, 12, 18, "#c9803c");
      tri(c, bx + 6, gy - 24, 7, 6, "#8b3a2a");
      rect(c, bx + 14, gy - 24, 12, 24, "#e0a060");
      tri(c, bx + 20, gy - 30, 7, 6, "#7a3a2a");
      rect(c, bx + 28, gy - 16, 12, 16, "#c9803c");
      tri(c, bx + 34, gy - 22, 7, 6, "#8b3a2a");
      rect(c, bx + 3, gy - 12, 3, 3, "#ffe9a8");
      rect(c, bx + 17, gy - 18, 3, 3, "#ffe9a8");
      rect(c, bx + 31, gy - 10, 3, 3, "#ffe9a8");
      rect(c, bx + 42, gy - 14, 2, 14, "#5a3418");
      for (let k = 0; k < 6; k++) {
        const a = t * 0.002 + (k * Math.PI) / 3;
        rect(c, bx + 43 + Math.cos(a) * 4, gy - 8 + Math.sin(a) * 4, 1, 1, "#8b5a2b");
      }
      break;
    }
    case "justice": {
      rect(c, bx + 12, gy - 44, 20, 44, "#d8d2c4");
      tri(c, bx + 14, gy - 54, 4, 10, "#c9b79c");
      tri(c, bx + 30, gy - 54, 4, 10, "#c9b79c");
      tri(c, cx, gy - 64, 6, 20, "#c9b79c");
      for (let y = gy - 38; y < gy - 12; y += 8) rect(c, cx - 1, y, 3, 4, "#333333");
      rect(c, bx, gy - 8, 44, 8, "#9a9080");
      rect(c, cx - 1, gy - 72, 1, 8, "#3b2412");
      rect(c, cx, gy - 72, 6, 3, "#2b5fd6");
      break;
    }
    case "gothic": {
      rect(c, bx + 4, gy - 26, 36, 26, "#2b2440");
      tri(c, cx, gy - 40, 20, 14, "#1a1530");
      rect(c, bx + 8, gy - 44, 3, 18, "#1a1530");
      tri(c, bx + 9, gy - 48, 3, 4, "#1a1530");
      rect(c, bx + 33, gy - 44, 3, 18, "#1a1530");
      tri(c, bx + 34, gy - 48, 3, 4, "#1a1530");
      rect(c, bx + 10, gy - 20, 4, 7, "#ffd34d");
      rect(c, bx + 20, gy - 20, 4, 7, "#ffd34d");
      rect(c, bx + 30, gy - 20, 4, 7, "#ffd34d");
      rect(c, bx + 36, gy - 58, 5, 5, "#fff3b0");
      for (let k = 0; k < 3; k++) {
        const bxk = bx + 44 - (((t / 40) + k * 13) % 50);
        rect(c, bxk, gy - 56 - k * 4 + (Math.sin(t / 150 + k) > 0 ? 0 : 1), 3, 1, "#0a0a14");
      }
      break;
    }
    case "stands": {
      for (let i = 0; i < 4; i++) {
        const x = bx + 2 + i * 3;
        const w = 40 - i * 6;
        const y = gy - 4 - i * 3;
        rect(c, x, y, w, 3, "#b9a88a");
        for (let k = 2; k < w; k += 4) rect(c, x + k, y, 1, 3, "#8f7d5e");
      }
      rect(c, bx + 8, gy - 26, 1, 22, "#5a3418");
      rect(c, bx + 9, gy - 26, 6, 4, "#c0392b");
      rect(c, bx + 35, gy - 26, 1, 22, "#5a3418");
      rect(c, bx + 36, gy - 26, 6, 4, "#2b5fd6");
      rect(c, bx + 14, gy - 20, 16, 4, "#d9c9a0");
      break;
    }
    case "dome": {
      dome(c, cx, gy - 18, 18, "#7fe3e0");
      rect(c, bx, gy - 2, 44, 2, "#1f6f7a");
      for (let k = 0; k < 5; k++) {
        const y = gy - 6 - ((t / 25 + k * 9) % 22);
        rect(c, bx + 8 + k * 8, y, 2, 2, "rgba(255,255,255,0.8)");
      }
      break;
    }
    case "arena": {
      rect(c, bx, gy - 18, 44, 18, "#d9b38c");
      rect(c, bx - 2, gy - 20, 48, 3, "#f0d9b5");
      for (let i = 0; i < 5; i++) rect(c, bx + 4 + i * 8, gy - 12, 4, 8, "#5a3418");
      rect(c, bx + 10, gy - 32, 1, 14, "#5a3418");
      rect(c, bx + 33, gy - 32, 1, 14, "#5a3418");
      rect(c, bx + 11, gy - 32, 22, 4, "#ff7aa2");
      rect(c, cx, gy - 27, 2, 2, "#e11d48");
      break;
    }
    case "cake": {
      rect(c, bx + 6, gy - 8, 32, 8, "#ffd1e0");
      rect(c, bx + 10, gy - 16, 24, 8, "#ffffff");
      rect(c, bx + 14, gy - 22, 16, 6, "#ffd1e0");
      rect(c, bx + 8, gy - 8, 3, 2, "#ff7ea6");
      rect(c, bx + 18, gy - 16, 3, 2, "#ff7ea6");
      rect(c, bx + 28, gy - 22, 3, 2, "#ff7ea6");
      rect(c, cx - 1, gy - 30, 2, 8, "#ff4f6e");
      rect(c, cx - 1, gy - 32 + (Math.floor(t / 250) % 2), 2, 2, "#ffd33d");
      break;
    }
    case "pagoda": {
      rect(c, bx + 4, gy - 4, 36, 4, "#8b5a2b");
      for (let i = 0; i < 3; i++) {
        const w = 34 - i * 8;
        const y = gy - 10 - i * 10;
        rect(c, cx - w / 2 + 4, y, w - 8, 8, "#c94a2a");
        rect(c, cx - w / 2, y - 2, w, 2, "#2b1a10");
      }
      rect(c, cx - 1, gy - 42, 2, 4, "#ffd33d");
      rect(c, cx - 2, gy - 4 - 4, 4, 4, "#2b1a10");
      break;
    }
    case "lab": {
      dome(c, cx, gy - 22, 16, "rgba(120,220,255,0.55)");
      rect(c, bx + 4, gy - 6, 36, 6, "#c9d4e0");
      for (let i = 0; i <= 10; i++) {
        const half = Math.round(4 * Math.sin((Math.PI * i) / 10));
        rect(c, cx - half, gy - 18 + i, half * 2, 1, "#fff7dc");
      }
      rect(c, cx, gy - 44, 1, 4, "#c9d4e0");
      rect(c, cx - 1, gy - 45, 3, 2, t % 800 < 400 ? "#ff4f6e" : "#4f6eff");
      break;
    }
    case "gate": {
      rect(c, bx, gy - 40, 6, 40, "#f0c040");
      rect(c, bx + 38, gy - 40, 6, 40, "#f0c040");
      rect(c, bx - 2, gy - 42, 48, 5, "#f0c040");
      rect(c, bx + 12, gy - 36, 20, 12, "#d22e3c");
      rect(c, bx + 14, gy - 33, 16, 2, "#ffffff");
      for (let k = 0; k < 9; k++) rect(c, bx - 2 + k * 6, gy - 2, 6, 2, k % 2 ? "#ffffff" : "#111111");
      break;
    }
  }
}

// Gold star over buildings Luffy has already run past.
export function drawPassed(c: Ctx, bx: number, gy: number, t: number) {
  const bob = Math.round(Math.sin(t / 300));
  const x = bx + 20;
  const y = gy - 60 + bob;
  rect(c, x + 1, y - 1, 2, 4, "#ffd33d");
  rect(c, x - 1, y, 6, 2, "#ffd33d");
  rect(c, x, y + 2, 4, 1, "#fff3a0");
}

export function drawClouds(c: Ctx, W: number, cam: number, groundY: number) {
  const span = W + 200;
  for (let i = 0; i < 6; i++) {
    const raw = i * 211 - cam * 0.2;
    const x = ((((raw + 100) % span) + span) % span) - 100;
    const y = 8 + ((i * 37) % Math.max(10, Math.round(groundY * 0.4)));
    const col = "rgba(255,255,255,0.85)";
    rect(c, x, y, 22, 4, col);
    rect(c, x + 4, y - 3, 10, 3, col);
    rect(c, x + 14, y - 2, 8, 2, col);
  }
}

export function drawRidge(c: Ctx, W: number, groundY: number, offset: number, color: string, amp: number, freq: number, seed: number) {
  for (let x = 0; x < W; x++) {
    const wx = x + offset;
    const h = amp * (0.55 + 0.45 * Math.sin(wx * freq + seed)) + amp * 0.25 * Math.sin(wx * freq * 3.1 + seed * 1.7);
    const top = Math.round(groundY - amp - h);
    rect(c, x, top, 1, groundY - top, color);
  }
}

function shade(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * f);
  const g = Math.round(((n >> 8) & 255) * f);
  const b = Math.round((n & 255) * f);
  return `rgb(${r},${g},${b})`;
}

export function drawSky(c: Ctx, W: number, groundY: number, scene: Scene) {
  const n = scene.sky.length;
  const bandH = Math.ceil(groundY / n);
  for (let i = 0; i < n; i++) rect(c, 0, i * bandH, W, bandH + 1, scene.sky[i]);
}

export function drawGround(c: Ctx, W: number, H: number, groundY: number, cam: number, scene: Scene) {
  rect(c, 0, groundY, W, H - groundY, scene.ground);
  rect(c, 0, groundY, W, 2, scene.grass);
  const dark = shade(scene.ground, 0.82);
  const off = Math.floor(cam) % 12;
  for (let x = -off; x < W; x += 12) {
    rect(c, x + 2, groundY + 5, 3, 1, dark);
    rect(c, x + 7, groundY + 9, 2, 1, dark);
  }
  rect(c, 0, groundY + 14, W, 2, shade(scene.ground, 0.7));
}

export function drawDust(c: Ctx, p: { x: number; y: number; vx: number; vy: number; life: number }) {
  rect(c, p.x, p.y, 2, 2, `rgba(240,230,210,${Math.max(0, p.life / 24)})`);
}
