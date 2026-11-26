// Procedural pixel-art scenes for each of the 12 sagas, modelled on iconic One Piece landmarks.
// Each scene has: sky (full screen), far (parallax backdrop) and near (ground + props
// drawn in world space, clipped to the saga's segment so you physically cross borders).

export type Ctx = CanvasRenderingContext2D;

export interface Env {
  c: Ctx;
  W: number;
  H: number;
  gy: number; // ground line (art px)
  cam: number; // camera x (art px)
  t: number; // ms
}

export interface SagaScene {
  sky: (e: Env) => void;
  far: (e: Env) => void;
  near: (e: Env, x0: number, x1: number) => void;
}

// =====================================================================
// helpers
// =====================================================================
const R = (c: Ctx, x: number, y: number, w: number, h: number, col: string) => {
  c.fillStyle = col;
  c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
};

const rnd = (n: number) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

function grad(c: Ctx, W: number, y0: number, y1: number, stops: string[]) {
  const g = c.createLinearGradient(0, y0, 0, y1);
  stops.forEach((col, i) => g.addColorStop(i / Math.max(1, stops.length - 1), col));
  c.fillStyle = g;
  c.fillRect(0, y0, W, y1 - y0);
}

function poly(c: Ctx, pts: number[], col: string) {
  c.fillStyle = col;
  c.beginPath();
  c.moveTo(Math.round(pts[0]), Math.round(pts[1]));
  for (let i = 2; i < pts.length; i += 2) c.lineTo(Math.round(pts[i]), Math.round(pts[i + 1]));
  c.closePath();
  c.fill();
}

const tri = (c: Ctx, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, col: string) =>
  poly(c, [x1, y1, x2, y2, x3, y3], col);

function circle(c: Ctx, x: number, y: number, r: number, col: string) {
  c.fillStyle = col;
  c.beginPath();
  c.arc(Math.round(x), Math.round(y), Math.max(0.5, r), 0, Math.PI * 2);
  c.fill();
}

function half(c: Ctx, x: number, y: number, r: number, col: string) {
  c.fillStyle = col;
  c.beginPath();
  c.arc(Math.round(x), Math.round(y), r, Math.PI, 0);
  c.closePath();
  c.fill();
}

function line(c: Ctx, x1: number, y1: number, x2: number, y2: number, col: string, w = 1) {
  c.strokeStyle = col;
  c.lineWidth = w;
  c.beginPath();
  c.moveTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
  c.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
  c.stroke();
}

function tiles(off: number, sp: number, W: number, f: (sx: number, i: number) => void) {
  const start = Math.floor(off / sp) - 2;
  const end = start + Math.ceil(W / sp) + 4;
  for (let i = start; i <= end; i++) f(Math.round(i * sp - off), i);
}

function props(e: Env, x0: number, x1: number, sp: number, f: (sx: number, i: number) => void) {
  const a = Math.max(x0, e.cam - 160);
  const b = Math.min(x1, e.cam + e.W + 160);
  for (let i = Math.ceil(a / sp); i * sp <= b; i++) f(Math.round(i * sp - e.cam), i);
}

function ridge(e: Env, par: number, base: number, amp: number, freq: number, seed: number, col: string) {
  const { c, W } = e;
  const off = e.cam * par;
  c.fillStyle = col;
  for (let x = 0; x < W; x += 2) {
    const wx = x + off;
    const h = Math.sin(wx * freq + seed) * amp * 0.6 + Math.sin(wx * freq * 2.3 + seed * 2) * amp * 0.4 + amp;
    c.fillRect(x, Math.round(base - h), 2, Math.ceil(h) + 1);
  }
}

function sun(c: Ctx, x: number, y: number, r: number, col: string, glow: string) {
  circle(c, x, y, r + 6, glow);
  circle(c, x, y, r + 3, glow);
  circle(c, x, y, r, col);
}

// One Piece-style puffy cumulus with a shaded underside.
function puff(c: Ctx, x: number, y: number, s: number, col = "#ffffff", shade = "#d7e9fb") {
  circle(c, x + 6 * s, y + 2 * s, 5 * s, shade);
  circle(c, x + 14 * s, y + 2 * s, 6 * s, shade);
  circle(c, x + 4 * s, y, 4 * s, col);
  circle(c, x + 10 * s, y - 3 * s, 6 * s, col);
  circle(c, x + 17 * s, y, 4.5 * s, col);
  R(c, x + 2 * s, y, 18 * s, 3 * s, col);
}

function driftClouds(e: Env, col = "#ffffff", shade = "#d7e9fb", yFrac = 0.16) {
  tiles(e.cam * 0.06, 110, e.W, (sx, i) => {
    puff(e.c, sx, e.gy * yFrac + rnd(i) * e.gy * 0.22, 0.7 + rnd(i + 9) * 0.6, col, shade);
  });
}

function gulls(e: Env, col = "#ffffff") {
  const { c, t } = e;
  tiles(e.cam * 0.15 + t * 0.02, 140, e.W, (sx, i) => {
    const y = e.gy * 0.3 + rnd(i) * 30 + Math.sin(t / 300 + i) * 3;
    const f = Math.sin(t / 120 + i) > 0 ? 1 : 0;
    R(c, sx, y, 1, 1, col);
    R(c, sx - 2, y - f, 2, 1, col);
    R(c, sx + 1, y - f, 2, 1, col);
    R(c, sx - 3, y - 1 + f, 1, 1, col);
    R(c, sx + 3, y - 1 + f, 1, 1, col);
  });
}

function sea(e: Env, y: number, h: number, base: string, light: string, crest = "#ffffff") {
  const { c, W, t } = e;
  R(c, 0, y, W, h, base);
  R(c, 0, y, W, 1, light);
  tiles(e.cam * 0.25 + t * 0.012, 21, W, (sx, i) => {
    const yy = y + 2 + ((i * 7) % Math.max(2, h - 3));
    R(c, sx, yy, 4 + (i % 3) * 2, 1, (i + Math.floor(t / 400)) % 5 === 0 ? crest : light);
  });
}

// The classic "skull and crossbones" with a straw hat.
function jollyRoger(c: Ctx, x: number, y: number, w: number, h: number, wave: number) {
  R(c, x, y + wave, w, h, "#111111");
  const cx = x + w / 2;
  const cy = y + h / 2 + wave;
  line(c, cx - 3, cy - 2, cx + 3, cy + 3, "#ffffff");
  line(c, cx + 3, cy - 2, cx - 3, cy + 3, "#ffffff");
  circle(c, cx, cy - 1, 2, "#ffffff");
  R(c, cx - 4, cy - 3, 8, 1, "#f2c94c"); // brim
  R(c, cx - 2, cy - 4, 4, 1, "#c0392b"); // red band
  R(c, cx - 2, cy - 5, 4, 1, "#f2c94c"); // crown
}

// A sailing ship with a lion/sheep figurehead and jolly roger.
function sailShip(
  c: Ctx,
  x: number,
  wl: number,
  s: number,
  o: { hull: string; trim: string; sail: string; sailMark?: string; head?: "sheep" | "lion" | "whale"; t: number },
) {
  const bob = Math.round(Math.sin(o.t / 500 + x) * 1);
  const y = wl + bob;
  poly(c, [x, y - 6 * s, x + 34 * s, y - 6 * s, x + 30 * s, y, x + 5 * s, y], o.hull);
  R(c, x + 2 * s, y - 7 * s, 30 * s, 1.5 * s, o.trim);
  R(c, x + 6 * s, y - 4 * s, 22 * s, 1, o.trim);
  // mast + sail
  R(c, x + 16 * s, y - 30 * s, 1.5 * s, 24 * s, "#5c3d1e");
  R(c, x + 8 * s, y - 27 * s, 18 * s, 14 * s, o.sail);
  R(c, x + 8 * s, y - 27 * s, 18 * s, 1, "#5c3d1e");
  if (o.sailMark) {
    circle(c, x + 17 * s, y - 21 * s, 3 * s, o.sailMark);
    R(c, x + 13 * s, y - 18 * s, 8 * s, 1.2 * s, o.sailMark);
  }
  jollyRoger(c, x + 17.5 * s, y - 35 * s, 7 * s, 5 * s, 0);
  // figurehead
  if (o.head === "sheep") {
    circle(c, x + 35 * s, y - 9 * s, 3.5 * s, "#fdf6e3");
    circle(c, x + 33 * s, y - 11 * s, 1.6 * s, "#e9dcc3");
    circle(c, x + 37 * s, y - 11 * s, 1.6 * s, "#e9dcc3");
    R(c, x + 34 * s, y - 9 * s, 1, 1, "#000");
  } else if (o.head === "lion") {
    circle(c, x + 35 * s, y - 9 * s, 4.5 * s, "#f08c00");
    circle(c, x + 35 * s, y - 9 * s, 2.8 * s, "#ffd43b");
    R(c, x + 34 * s, y - 10 * s, 1, 1, "#000");
  } else if (o.head === "whale") {
    circle(c, x + 34 * s, y - 8 * s, 5 * s, "#f8f9fa");
    R(c, x + 34 * s, y - 9 * s, 1, 1, "#000");
  }
}

function groundBand(e: Env, x0: number, x1: number, top: string, body: string, edge = 2) {
  const a = Math.round(x0 - e.cam);
  const w = Math.round(x1 - x0);
  R(e.c, a, e.gy, w, e.H - e.gy, body);
  R(e.c, a, e.gy, w, edge, top);
}

function palm(c: Ctx, x: number, gy: number, h: number, t: number, leaf = "#2f9e44", leaf2 = "#51cf66") {
  for (let k = 0; k < h; k++) R(c, x + Math.round(Math.sin(k / 6) * 1.5), gy - k, 2, 1, k % 3 ? "#8b5a2b" : "#6f4520");
  const tx = x + Math.round(Math.sin(h / 6) * 1.5);
  const ty = gy - h;
  const sw = 0; // no wind
  poly(c, [tx, ty, tx - 12 + sw, ty + 3, tx - 9 + sw, ty + 5], leaf);
  poly(c, [tx, ty, tx + 13 + sw, ty + 3, tx + 10 + sw, ty + 5], leaf);
  poly(c, [tx, ty, tx - 8 + sw, ty - 4, tx - 3 + sw, ty - 1], leaf2);
  poly(c, [tx, ty, tx + 9 + sw, ty - 4, tx + 4 + sw, ty - 1], leaf2);
  poly(c, [tx, ty, tx - 2, ty + 8, tx + 2, ty + 8], leaf);
  circle(c, tx, ty + 2, 1.5, "#7a4a1f");
}

// =====================================================================
// 1. EAST BLUE — Foosha Village, Going Merry, Baratie
// =====================================================================
const eastBlue: SagaScene = {
  sky: (e) => {
    grad(e.c, e.W, 0, e.gy, ["#2f8fff", "#7cc4ff", "#d8f1ff"]);
    sun(e.c, e.W * 0.84, e.gy * 0.2, 7, "#fffbe0", "rgba(255,246,176,0.25)");
    driftClouds(e);
    gulls(e);
  },
  far: (e) => {
    const { c, gy, t } = e;
    sea(e, gy - 40, 22, "#2b7bd3", "#6fb6ff");
    // Baratie: the fish-shaped floating restaurant
    tiles(e.cam * 0.18, 520, e.W, (sx) => {
      const y = gy - 26 + Math.round(Math.sin(t / 700) * 1);
      poly(c, [sx, y, sx + 46, y, sx + 54, y - 6, sx + 46, y - 12, sx, y - 10, sx - 8, y - 16, sx - 6, y - 4], "#f1f3f5");
      R(c, sx + 4, y - 18, 34, 8, "#e9ecef");
      R(c, sx + 2, y - 20, 38, 2, "#2b8a3e");
      for (let k = 0; k < 6; k++) R(c, sx + 6 + k * 5, y - 15, 2, 2, "#1864ab");
      circle(c, sx + 48, y - 7, 1.5, "#212529");
      R(c, sx + 20, y - 28, 1, 8, "#495057");
      R(c, sx + 21, y - 28, 6, 4, "#2b8a3e");
    });
    // Going Merry at sea
    tiles(e.cam * 0.22, 340, e.W, (sx) => {
      sailShip(c, sx + 140, gy - 24, 0.8, { hull: "#a0522d", trim: "#f2c94c", sail: "#ffffff", head: "sheep", t });
    });
    // Mt. Colubo + hills
    ridge(e, 0.3, gy - 8, 22, 0.012, 1, "#4b8f3f");
    ridge(e, 0.5, gy, 9, 0.03, 3, "#5cab4a");
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#82d36c", "#8b5a2b", 3);
    const { c, gy, t } = e;
    props(e, x0, x1, 7, (sx, i) => {
      if (rnd(i) > 0.5) R(c, sx, gy + 1, 1, 2, "#5cab4a");
      if (rnd(i + 2) > 0.85) R(c, sx, gy - 1, 1, 1, rnd(i) > 0.5 ? "#ffd43b" : "#ff8787");
    });
    props(e, x0 + 30, x1 - 30, 78, (sx, i) => {
      const kind = i % 4;
      if (kind === 0) {
        // Foosha windmill
        R(c, sx + 3, gy - 34, 12, 34, "#ede0c8");
        for (let k = 0; k < 4; k++) R(c, sx + 3, gy - 30 + k * 8, 12, 1, "#cdbb98");
        poly(c, [sx + 1, gy - 34, sx + 17, gy - 34, sx + 9, gy - 44], "#a63d2a");
        R(c, sx + 7, gy - 9, 5, 9, "#6b3d1f");
        R(c, sx + 7, gy - 22, 4, 4, "#74c0fc");
        const a = 0.4; // still blades: no wind
        for (let k = 0; k < 4; k++) {
          const ang = a + (k * Math.PI) / 2;
          const ex = sx + 9 + Math.cos(ang) * 16;
          const ey = gy - 34 + Math.sin(ang) * 16;
          line(c, sx + 9, gy - 34, ex, ey, "#7a4a1f", 1);
          poly(c, [sx + 9 + Math.cos(ang) * 5, gy - 34 + Math.sin(ang) * 5, ex, ey, ex + Math.cos(ang + 1.6) * 4, ey + Math.sin(ang + 1.6) * 4, sx + 9 + Math.cos(ang + 0.5) * 5, gy - 34 + Math.sin(ang + 0.5) * 5], "#f8f1e3");
        }
        circle(c, sx + 9, gy - 34, 1.5, "#5c3d1e");
      } else if (kind === 1) {
        // Partys Bar (Makino's bar)
        R(c, sx, gy - 18, 30, 18, "#f8eed8");
        R(c, sx, gy - 18, 30, 1, "#d9c8a0");
        poly(c, [sx - 3, gy - 18, sx + 33, gy - 18, sx + 27, gy - 28, sx + 3, gy - 28], "#c0392b");
        R(c, sx + 5, gy - 16, 20, 4, "#6b3d1f");
        R(c, sx + 7, gy - 15, 16, 2, "#f2c94c");
        R(c, sx + 12, gy - 10, 6, 10, "#7a4a1f");
        R(c, sx + 3, gy - 10, 5, 5, "#74c0fc");
        R(c, sx + 22, gy - 10, 5, 5, "#74c0fc");
        R(c, sx + 24, gy - 34, 3, 7, "#868e96");
        const smoke = (t / 60) % 12;
        circle(c, sx + 26, gy - 36 - smoke, 1.5 + smoke / 6, "rgba(230,230,230,0.6)");
        // barrels
        circle(c, sx + 35, gy - 3, 3, "#8b5a2b");
        R(c, sx + 32, gy - 4, 6, 1, "#495057");
      } else if (kind === 2) {
        // cottage with laundry line
        R(c, sx, gy - 15, 22, 15, "#fff8e8");
        poly(c, [sx - 3, gy - 15, sx + 25, gy - 15, sx + 11, gy - 27], "#d9480f");
        R(c, sx + 9, gy - 9, 5, 9, "#7a4a1f");
        R(c, sx + 2, gy - 12, 4, 4, "#74c0fc");
        R(c, sx + 16, gy - 12, 4, 4, "#74c0fc");
        line(c, sx + 22, gy - 14, sx + 40, gy - 14, "#adb5bd");
        R(c, sx + 40, gy - 15, 1, 15, "#7a4a1f");
        const sw = 0;
        R(c, sx + 25 + sw, gy - 13, 4, 5, "#e03131");
        R(c, sx + 32 + sw, gy - 13, 4, 4, "#1c7ed6");
      } else {
        // tree + Luffy's straw hat sign
        R(c, sx + 6, gy - 12, 3, 12, "#7a4a1f");
        circle(c, sx + 7, gy - 18, 8, "#3f9e3c");
        circle(c, sx + 3, gy - 14, 5, "#4fb34a");
        circle(c, sx + 12, gy - 15, 5, "#358f33");
        R(c, sx + 22, gy - 12, 1, 12, "#7a4a1f");
        R(c, sx + 17, gy - 14, 12, 5, "#e9dcc3");
        R(c, sx + 19, gy - 12, 8, 1, "#f2c94c");
        R(c, sx + 20, gy - 13, 6, 1, "#c0392b");
      }
      // fence
      for (let k = 0; k < 3; k++) R(c, sx + 44 + k * 5, gy - 5, 1, 5, "#c9a26b");
      R(c, sx + 43, gy - 4, 14, 1, "#c9a26b");
    });
  },
};

// =====================================================================
// 2. ALABASTA — Alubarna palace, Rain Dinners, Nanohana, Karoo
// =====================================================================
const alabasta: SagaScene = {
  sky: (e) => {
    grad(e.c, e.W, 0, e.gy, ["#f76707", "#ffa94d", "#ffe8b0"]);
    sun(e.c, e.W * 0.72, e.gy * 0.24, 11, "#fff3bf", "rgba(255,230,150,0.3)");
  },
  far: (e) => {
    const { c, gy } = e;
    ridge(e, 0.15, gy - 14, 18, 0.01, 2, "#dd9a4f");
    // Alubarna palace on its cliff
    tiles(e.cam * 0.22, 480, e.W, (sx) => {
      poly(c, [sx - 30, gy - 10, sx + 120, gy - 10, sx + 100, gy - 40, sx - 10, gy - 40], "#c98443");
      R(c, sx, gy - 70, 90, 30, "#efc68c");
      R(c, sx, gy - 70, 90, 2, "#fff0d0");
      half(c, sx + 45, gy - 70, 16, "#e8b56b");
      R(c, sx + 44, gy - 92, 2, 6, "#c98443");
      for (let k = 0; k < 4; k++) {
        R(c, sx + 6 + k * 24, gy - 86, 6, 20, "#efc68c");
        half(c, sx + 9 + k * 24, gy - 86, 4, "#e8b56b");
      }
      for (let k = 0; k < 8; k++) R(c, sx + 5 + k * 11, gy - 60, 3, 6, "#8a5226");
      // clock tower
      R(c, sx + 104, gy - 84, 12, 44, "#efc68c");
      half(c, sx + 110, gy - 84, 6, "#e8b56b");
      circle(c, sx + 110, gy - 74, 3, "#fff3bf");
      R(c, sx + 110, gy - 76, 1, 2, "#5c3317");
    });
    ridge(e, 0.45, gy, 10, 0.022, 5, "#eebb6e");
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#f7d491", "#e6b866", 2);
    const { c, gy, t } = e;
    props(e, x0, x1, 9, (sx, i) => {
      if (rnd(i) > 0.55) R(c, sx, gy + 4 + Math.floor(rnd(i + 3) * 12), 6, 1, "#d9a24f");
    });
    props(e, x0 + 30, x1 - 40, 84, (sx, i) => {
      const k = i % 4;
      if (k === 0) {
        // Rain Dinners casino with the crocodile on the roof
        R(c, sx, gy - 30, 44, 30, "#f0c27a");
        half(c, sx + 22, gy - 30, 14, "#e2a957");
        poly(c, [sx - 2, gy - 34, sx + 22, gy - 48, sx + 50, gy - 40, sx + 56, gy - 36, sx + 46, gy - 34], "#2f9e44");
        poly(c, [sx + 46, gy - 38, sx + 56, gy - 36, sx + 46, gy - 34], "#2b8a3e");
        for (let k2 = 0; k2 < 5; k2++) tri(c, sx + 50 - k2 * 3, gy - 36, sx + 51 - k2 * 3, gy - 34, sx + 49 - k2 * 3, gy - 34, "#ffffff");
        R(c, sx + 40, gy - 41, 2, 2, "#ffd43b");
        R(c, sx + 18, gy - 12, 8, 12, "#5c3317");
        R(c, sx + 12, gy - 24, 20, 4, "#e03131");
        R(c, sx + 14, gy - 23, 16, 2, Math.sin(t / 200) > 0 ? "#ffd43b" : "#fab005");
      } else if (k === 1 || k === 3) {
        // Nanohana-style domed houses + market awning
        const h = 18 + (i % 3) * 4;
        R(c, sx, gy - h, 24, h, "#e3b071");
        R(c, sx, gy - h, 24, 2, "#f2c98f");
        half(c, sx + 12, gy - h, 8, "#cf9450");
        R(c, sx + 9, gy - 10, 6, 10, "#5c3317");
        half(c, sx + 12, gy - 10, 3, "#5c3317");
        R(c, sx + 3, gy - h + 6, 3, 4, "#5c3317");
        R(c, sx + 18, gy - h + 6, 3, 4, "#5c3317");
        for (let s = 0; s < 3; s++) R(c, sx + 26 + s * 4, gy - 12, 4, 3, s % 2 ? "#ffffff" : i % 2 ? "#e03131" : "#1c7ed6");
        R(c, sx + 26, gy - 9, 1, 9, "#7a4a1f");
        R(c, sx + 37, gy - 9, 1, 9, "#7a4a1f");
        R(c, sx + 28, gy - 3, 7, 3, "#fab005");
        palm(c, sx + 50, gy, 24, t);
      } else {
        // Karoo the super spot-billed duck + a Kung-Fu Dugong
        const hop = Math.round(Math.abs(Math.sin(t / 220 + i)) * 2);
        const y = gy - hop;
        R(c, sx + 2, y - 10, 10, 8, "#fff3bf");
        R(c, sx + 10, y - 16, 5, 8, "#fff3bf");
        R(c, sx + 13, y - 14, 5, 2, "#f59f00");
        R(c, sx + 12, y - 15, 1, 1, "#000");
        R(c, sx + 9, y - 17, 3, 2, "#3b5bdb");
        R(c, sx + 4, y - 2, 1, 2, "#f59f00");
        R(c, sx + 9, y - 2, 1, 2, "#f59f00");
        // dugong
        circle(c, sx + 30, gy - 5, 5, "#a5d8ff");
        R(c, sx + 27, gy - 12, 6, 4, "#a5d8ff");
        R(c, sx + 27, gy - 11, 6, 1, "#495057");
        R(c, sx + 25, gy - 6, 2, 2, "#a5d8ff");
        R(c, sx + 34, gy - 8, 3, 2, "#a5d8ff");
        R(c, sx + 26, gy - 13, 8, 1, "#fd7e14");
      }
    });
  },
};

// =====================================================================
// 3. SKYPIEA — Angel Island, Golden Bell, Giant Jack, White-White Sea
// =====================================================================
const skyIsland: SagaScene = {
  sky: (e) => {
    grad(e.c, e.W, 0, e.H, ["#1b6fd8", "#5aaef5", "#e7f6ff"]);
    sun(e.c, e.W * 0.18, e.gy * 0.18, 8, "#ffffff", "rgba(255,255,255,0.3)");
    tiles(e.cam * 0.05, 130, e.W, (sx, i) => puff(e.c, sx, e.gy * 0.12 + rnd(i) * 30, 0.9, "#ffffff", "#e6f0ff"));
  },
  far: (e) => {
    const { c, gy, t } = e;
    // Giant Jack beanstalk with Shandora ruins and the Golden Bell
    tiles(e.cam * 0.18, 460, e.W, (sx) => {
      for (let y = 0; y < gy; y += 2) R(c, sx + 12 + Math.round(Math.sin(y / 14) * 6), y, 10, 2, y % 8 ? "#5c940d" : "#74b816");
      puff(c, sx - 20, gy - 70, 1.6, "#ffffff", "#dbe8f5");
      // ruins
      R(c, sx - 10, gy - 92, 50, 14, "#b0a48a");
      for (let k = 0; k < 5; k++) R(c, sx - 8 + k * 10, gy - 104, 5, 12, "#c2b59b");
      R(c, sx - 12, gy - 106, 54, 3, "#9c8f75");
      // Golden Bell
      const sw = 0;
      R(c, sx + 16 + sw, gy - 124, 2, 6, "#5c3d1e");
      poly(c, [sx + 8 + sw, gy - 106, sx + 26 + sw, gy - 106, sx + 23 + sw, gy - 118, sx + 11 + sw, gy - 118], "#fcc419");
      R(c, sx + 7 + sw, gy - 107, 20, 2, "#e67700");
      R(c, sx + 12 + sw, gy - 116, 2, 8, "#fff3bf");
    });
    // sea cloud surface + wavers
    tiles(e.cam * 0.3, 46, e.W, (sx, i) => circle(c, sx, gy - 8 - rnd(i) * 6, 11 + rnd(i + 1) * 6, "#f4fbff"));
    tiles(e.cam * 0.35 + t * 0.04, 260, e.W, (sx) => {
      const y = gy - 20 + Math.round(Math.sin(t / 300 + sx) * 1);
      poly(c, [sx, y, sx + 14, y, sx + 12, y + 3, sx + 2, y + 3], "#ffffff");
      R(c, sx + 4, y - 6, 3, 6, "#f4a3a3");
      circle(c, sx + 5, y - 8, 2, "#ffd8a8");
      R(c, sx + 1, y - 6, 3, 2, "#ffffff");
      R(c, sx + 7, y - 6, 3, 2, "#ffffff");
      for (let k = 1; k < 5; k++) R(c, sx - k * 4, y + 2, 3, 1, "rgba(255,255,255,0.8)");
    });
  },
  near: (e, x0, x1) => {
    const { c, gy, t } = e;
    const a = Math.round(x0 - e.cam);
    R(c, a, gy, x1 - x0, e.H - gy, "#ffffff");
    R(c, a, gy + 10, x1 - x0, e.H - gy, "#e3eefa");
    props(e, x0, x1, 10, (sx, i) => circle(c, sx, gy + 1, 5 + rnd(i) * 3, "#ffffff"));
    props(e, x0, x1, 13, (sx, i) => circle(c, sx, gy + 12, 4 + rnd(i + 5) * 3, "#f0f6fd"));
    props(e, x0 + 30, x1 - 40, 74, (sx, i) => {
      const k = i % 3;
      if (k === 0) {
        // Angel Island cloud house with a spiral shell roof
        circle(c, sx + 14, gy - 10, 13, "#f3f8ff");
        R(c, sx + 1, gy - 10, 26, 10, "#f3f8ff");
        circle(c, sx + 14, gy - 22, 6, "#ffe8cc");
        circle(c, sx + 14, gy - 22, 3, "#ffd8a8");
        circle(c, sx + 14, gy - 22, 1, "#f59f00");
        R(c, sx + 11, gy - 10, 6, 10, "#4dabf7");
        half(c, sx + 14, gy - 10, 3, "#4dabf7");
        circle(c, sx + 5, gy - 13, 2, "#ffd43b");
        circle(c, sx + 23, gy - 13, 2, "#ffd43b");
      } else if (k === 1) {
        // Skypiean with little wings (Conis-style) + Pierre the pegasus
        const fl = Math.round(Math.sin(t / 150) * 1);
        R(c, sx + 4, gy - 10, 5, 7, "#f8f9fa");
        circle(c, sx + 6.5, gy - 13, 2.5, "#ffd8a8");
        R(c, sx + 4, gy - 16, 5, 2, "#ffe066");
        R(c, sx + 1, gy - 12 + fl, 3, 2, "#ffffff");
        R(c, sx + 9, gy - 12 + fl, 3, 2, "#ffffff");
        R(c, sx + 5, gy - 3, 1, 3, "#ffd8a8");
        R(c, sx + 7, gy - 3, 1, 3, "#ffd8a8");
        const py = gy - 34 + Math.round(Math.sin(t / 400) * 3);
        R(c, sx + 22, py, 10, 5, "#ffd43b");
        R(c, sx + 31, py - 4, 3, 5, "#ffd43b");
        R(c, sx + 18, py - 3 + fl, 6, 2, "#ffffff");
        R(c, sx + 25, py - 4 - fl, 6, 2, "#ffffff");
        R(c, sx + 23, py + 5, 1, 3, "#fab005");
        R(c, sx + 29, py + 5, 1, 3, "#fab005");
      } else {
        // spiral sky palm + Dial shells
        palm(c, sx + 6, gy, 24, t, "#20c997", "#63e6be");
        circle(c, sx + 18, gy - 2, 2.5, "#ffc9c9");
        circle(c, sx + 18, gy - 2, 1, "#ff8787");
        circle(c, sx + 24, gy - 2, 2.5, "#d0bfff");
        circle(c, sx + 24, gy - 2, 1, "#9775fa");
      }
    });
  },
};

// =====================================================================
// 4. ENIES LOBBY — Tower of Justice, Gates of Justice, Puffing Tom
// =====================================================================
const eniesLobby: SagaScene = {
  sky: (e) => {
    // Eternal daytime island
    grad(e.c, e.W, 0, e.gy, ["#2f80d8", "#7ab8f0", "#d2ebff"]);
    driftClouds(e, "#f6fbff", "#d9e9f8", 0.1);
  },
  far: (e) => {
    const { c, gy, W, t } = e;
    sea(e, gy - 36, 36, "#1864ab", "#4dabf7");
    // Gates of Justice
    tiles(e.cam * 0.12, 700, W, (sx) => {
      R(c, sx, gy - 110, 34, 76, "#5c6b7a");
      R(c, sx + 36, gy - 110, 34, 76, "#5c6b7a");
      R(c, sx - 4, gy - 116, 78, 8, "#495663");
      R(c, sx + 33, gy - 110, 4, 76, "#2b333b");
      for (let k = 0; k < 6; k++) {
        R(c, sx + 4, gy - 104 + k * 12, 26, 1, "#748595");
        R(c, sx + 40, gy - 104 + k * 12, 26, 1, "#748595");
      }
      circle(c, sx + 17, gy - 80, 6, "#3b4752");
      circle(c, sx + 53, gy - 80, 6, "#3b4752");
    });
    // Tower of Justice on a stone foundation rising straight out of the sea
    tiles(e.cam * 0.22, 420, W, (sx) => {
      R(c, sx + 36, gy - 44, 48, 10, "#8d99a6");
      R(c, sx + 36, gy - 44, 48, 1, "#ced4da");
      for (let k = 0; k < 6; k++) R(c, sx + 38 + k * 8, gy - 40, 1, 6, "#6c757d");
      R(c, sx + 34, gy - 36, 52, 2, "rgba(255,255,255,0.6)");
      R(c, sx + 50, gy - 100, 20, 60, "#f1f3f5");
      R(c, sx + 46, gy - 104, 28, 5, "#ced4da");
      poly(c, [sx + 48, gy - 104, sx + 72, gy - 104, sx + 60, gy - 116], "#adb5bd");
      for (let k = 0; k < 6; k++) R(c, sx + 54, gy - 94 + k * 9, 4, 5, "#343a40");
      for (let k = 0; k < 6; k++) R(c, sx + 62, gy - 94 + k * 9, 4, 5, "#343a40");
      // the World Government flag... on fire (Sogeking!)
      R(c, sx + 72, gy - 124, 1, 20, "#495057");
      R(c, sx + 73, gy - 124, 12, 8, "#1971c2");
      circle(c, sx + 79, gy - 120, 2, "#ffffff");
      const fl = Math.sin(t / 90);
      tri(c, sx + 76, gy - 124, sx + 86, gy - 124, sx + 81 + fl * 2, gy - 132, "#ff922b");
      tri(c, sx + 78, gy - 124, sx + 84, gy - 124, sx + 81 - fl, gy - 129, "#ffd43b");
    });
  },
  near: (e, x0, x1) => {
    const { c, gy, t } = e;
    const a = Math.round(x0 - e.cam);
    R(c, a, gy + 6, x1 - x0, e.H - gy, "#1864ab");
    props(e, x0, x1, 14, (sx, i) => R(c, sx + Math.round(Math.sin(t / 400 + i) * 2), gy + 12 + (i % 3) * 5, 6, 1, "#4dabf7"));
    // Sea-train rails (Puffing Tom line)
    R(c, a, gy, x1 - x0, 6, "#8d99a6");
    R(c, a, gy, x1 - x0, 1, "#dee2e6");
    R(c, a, gy - 2, x1 - x0, 1, "#495057");
    props(e, x0, x1, 6, (sx) => R(c, sx, gy - 1, 3, 1, "#7a4a1f"));
    props(e, x0, x1, 40, (sx) => R(c, sx + 4, gy + 6, 6, 18, "#6c757d"));
    // Puffing Tom steaming past
    const trainX = ((t * 0.05) % (x1 - x0 + 400)) + x0 - 200;
    const tx = Math.round(trainX - e.cam);
    if (tx > -120 && tx < e.W + 40) {
      R(c, tx, gy - 18, 36, 16, "#2b8a3e");
      R(c, tx + 30, gy - 26, 6, 8, "#212529");
      circle(c, tx + 36, gy - 10, 6, "#495057");
      circle(c, tx + 36, gy - 10, 3, "#ffd43b");
      R(c, tx + 4, gy - 14, 6, 5, "#ffe066");
      R(c, tx + 14, gy - 14, 6, 5, "#ffe066");
      for (let k = 0; k < 3; k++) circle(c, tx + 33 - k * 6, gy - 30 - k * 4 - ((t / 40) % 4), 2 + k, "rgba(240,240,240,0.7)");
      for (let k = 1; k <= 2; k++) {
        R(c, tx - k * 40, gy - 14, 36, 12, "#e9ecef");
        for (let w = 0; w < 4; w++) R(c, tx - k * 40 + 4 + w * 8, gy - 12, 5, 4, "#4dabf7");
      }
    }
    props(e, x0 + 40, x1 - 30, 90, (sx, i) => {
      if (i % 2 === 0) {
        // Judicial building gatehouse
        R(c, sx, gy - 30, 30, 28, "#e9ecef");
        for (let k = 0; k < 5; k++) R(c, sx + 1 + k * 6, gy - 34, 4, 4, "#ced4da");
        R(c, sx + 10, gy - 16, 10, 14, "#495057");
        half(c, sx + 15, gy - 16, 5, "#495057");
        R(c, sx + 2, gy - 26, 4, 6, "#343a40");
        R(c, sx + 24, gy - 26, 4, 6, "#343a40");
        R(c, sx + 14, gy - 46, 1, 12, "#495057");
        const w = 0;
        R(c, sx + 15, gy - 46 + w, 9, 6, "#1971c2");
        circle(c, sx + 19, gy - 43 + w, 1.5, "#ffffff");
      } else {
        // CP9 silhouette
        R(c, sx + 6, gy - 16, 6, 10, "#212529");
        circle(c, sx + 9, gy - 18, 3, "#f1c27d");
        R(c, sx + 6, gy - 22, 6, 2, "#000000");
        R(c, sx + 6, gy - 6, 2, 4, "#212529");
        R(c, sx + 10, gy - 6, 2, 4, "#212529");
        R(c, sx + 12, gy - 18, 3, 3, "#ffffff");
      }
    });
  },
};

// =====================================================================
// 5. THRILLER BARK — ship-island, Moria's mansion, Perona's ghosts
// =====================================================================
const thrillerBark: SagaScene = {
  sky: (e) => {
    const { c, W, gy, t } = e;
    grad(c, W, 0, gy, ["#0b0618", "#2a1450", "#4f2a73"]);
    tiles(e.cam * 0.02, 17, W, (sx, i) => {
      if (rnd(i) > 0.55) R(c, sx, rnd(i + 5) * gy * 0.6, 1, 1, rnd(i + Math.floor(t / 900)) > 0.3 ? "#ffffff" : "#b197fc");
    });
    circle(c, W * 0.8, gy * 0.22, 15, "rgba(255,243,191,0.2)");
    circle(c, W * 0.8, gy * 0.22, 11, "#fff3bf");
    circle(c, W * 0.8 - 3, gy * 0.22 - 2, 2, "#e8d98a");
    circle(c, W * 0.8 + 3, gy * 0.22 + 3, 1.5, "#e8d98a");
  },
  far: (e) => {
    const { c, gy, t } = e;
    // the island is a giant ship: masts and tattered sails rising from the horizon
    tiles(e.cam * 0.1, 600, e.W, (sx) => {
      R(c, sx, gy - 130, 4, 130, "#140a22");
      R(c, sx - 24, gy - 120, 52, 2, "#140a22");
      poly(c, [sx - 22, gy - 118, sx + 26, gy - 118, sx + 22, gy - 90, sx + 4, gy - 96, sx - 18, gy - 88], "#21123a");
      R(c, sx + 160, gy - 100, 3, 100, "#140a22");
      poly(c, [sx + 145, gy - 92, sx + 178, gy - 92, sx + 172, gy - 70, sx + 150, gy - 72], "#21123a");
    });
    // Gecko Moria's mansion
    tiles(e.cam * 0.2, 360, e.W, (sx) => {
      R(c, sx, gy - 62, 80, 62, "#1c0f2e");
      poly(c, [sx - 6, gy - 62, sx + 86, gy - 62, sx + 40, gy - 88], "#1c0f2e");
      R(c, sx + 8, gy - 82, 8, 24, "#1c0f2e");
      poly(c, [sx + 6, gy - 82, sx + 18, gy - 82, sx + 12, gy - 92], "#1c0f2e");
      R(c, sx + 64, gy - 80, 8, 22, "#1c0f2e");
      poly(c, [sx + 62, gy - 80, sx + 74, gy - 80, sx + 68, gy - 90], "#1c0f2e");
      for (let k = 0; k < 7; k++) R(c, sx + 6 + k * 11, gy - 50, 4, 6, (k + Math.floor(t / 700)) % 3 ? "#2b1a40" : "#ffd43b");
      for (let k = 0; k < 7; k++) R(c, sx + 6 + k * 11, gy - 34, 4, 6, k % 2 ? "#ffd43b" : "#2b1a40");
      R(c, sx + 34, gy - 16, 12, 16, "#0b0614");
    });
    ridge(e, 0.45, gy, 10, 0.03, 7, "#24163a");
    // bats + Negative Hollows (Perona's ghosts)
    tiles(e.cam * 0.3 + t * 0.02, 120, e.W, (sx, i) => {
      const y = gy * 0.35 + rnd(i) * 30 + Math.sin(t / 200 + i) * 3;
      const wing = Math.sin(t / 80 + i) > 0 ? -1 : 1;
      R(c, sx, y, 2, 2, "#0b0614");
      R(c, sx - 3, y + wing, 3, 1, "#0b0614");
      R(c, sx + 2, y + wing, 3, 1, "#0b0614");
    });
    tiles(e.cam * 0.35 + t * 0.01, 170, e.W, (sx, i) => {
      const y = gy * 0.5 + rnd(i + 2) * 20 + Math.sin(t / 400 + i) * 5;
      circle(c, sx, y, 5, "rgba(255,255,255,0.85)");
      R(c, sx - 5, y, 10, 4, "rgba(255,255,255,0.85)");
      for (let k = 0; k < 3; k++) R(c, sx - 4 + k * 3, y + 4, 2, 2 + (k % 2), "rgba(255,255,255,0.85)");
      R(c, sx - 3, y - 1, 2, 2, "#000");
      R(c, sx + 1, y - 1, 2, 2, "#000");
      R(c, sx - 2, y + 2, 4, 1, "#e64980");
      R(c, sx - 3, y - 7, 6, 2, "#e64980");
    });
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#3a5a40", "#2b2236", 2);
    const { c, gy, t } = e;
    props(e, x0 + 20, x1 - 10, 28, (sx, i) => {
      const k = i % 8;
      if (k === 0) {
        // twisted dead tree
        R(c, sx + 4, gy - 28, 3, 28, "#1a1222");
        R(c, sx - 3, gy - 22, 8, 2, "#1a1222");
        R(c, sx + 6, gy - 17, 8, 2, "#1a1222");
        R(c, sx - 3, gy - 27, 2, 6, "#1a1222");
        R(c, sx + 13, gy - 22, 2, 6, "#1a1222");
        R(c, sx + 2, gy - 32, 2, 5, "#1a1222");
        circle(c, sx + 5, gy - 20, 1, "#ffd43b");
      } else if (k === 2 || k === 5) {
        R(c, sx, gy - 11, 9, 11, "#868e96");
        half(c, sx + 4.5, gy - 11, 4.5, "#868e96");
        R(c, sx + 1, gy - 11, 1, 11, "#adb5bd");
        R(c, sx + 2, gy - 8, 5, 1, "#495057");
        R(c, sx + 4, gy - 11, 1, 5, "#495057");
      } else if (k === 3) {
        R(c, sx + 3, gy - 15, 2, 15, "#adb5bd");
        R(c, sx, gy - 12, 8, 2, "#adb5bd");
      } else if (k === 4) {
        // zombie hand rising from a grave
        const up = Math.round((Math.sin(t / 700 + i) + 1) * 2);
        R(c, sx + 2, gy - 3 - up, 3, 3 + up, "#8ce99a");
        R(c, sx + 1, gy - 5 - up, 1, 3, "#8ce99a");
        R(c, sx + 3, gy - 6 - up, 1, 3, "#8ce99a");
        R(c, sx + 5, gy - 5 - up, 1, 3, "#8ce99a");
        R(c, sx, gy - 1, 8, 1, "#4a3b2a");
      } else if (k === 6) {
        circle(c, sx + 4, gy - 3, 3.5, "#f76707");
        R(c, sx + 3, gy - 8, 2, 2, "#2b8a3e");
        const on = Math.sin(t / 150 + i) > 0;
        R(c, sx + 2, gy - 4, 1, 1, on ? "#ffd43b" : "#7a2e00");
        R(c, sx + 5, gy - 4, 1, 1, on ? "#ffd43b" : "#7a2e00");
        R(c, sx + 2, gy - 2, 4, 1, on ? "#ffd43b" : "#7a2e00");
      } else if (k === 7 && i % 16 === 7) {
        // General Zombie / Oars silhouette lumbering
        const step = Math.round(Math.sin(t / 300 + i) * 1);
        R(c, sx, gy - 44, 20, 26, "#3d2b4f");
        circle(c, sx + 10, gy - 48, 6, "#3d2b4f");
        R(c, sx + 2, gy - 18, 6, 18 + step, "#3d2b4f");
        R(c, sx + 12, gy - 18, 6, 18 - step, "#3d2b4f");
        R(c, sx - 6, gy - 42, 6, 20, "#3d2b4f");
        R(c, sx + 20, gy - 42, 6, 20, "#3d2b4f");
        R(c, sx + 6, gy - 50, 2, 2, "#ff6b6b");
        R(c, sx + 12, gy - 50, 2, 2, "#ff6b6b");
        R(c, sx + 4, gy - 36, 12, 1, "#2b1d38");
      }
    });
  },
};

// =====================================================================
// 6. MARINEFORD — Marine HQ, execution platform, frozen bay, Moby Dick
// =====================================================================
const marineford: SagaScene = {
  sky: (e) => {
    grad(e.c, e.W, 0, e.gy, ["#2b7bd3", "#76b6f0", "#d6ecff"]);
    driftClouds(e, "#ffffff", "#d2e3f5", 0.1);
    gulls(e);
  },
  far: (e) => {
    const { c, gy, W, t } = e;
    // crescent bay — frozen solid by Aokiji
    R(c, 0, gy - 30, W, 30, "#2b74c2");
    R(c, 0, gy - 18, W, 18, "#c5e6ff");
    tiles(e.cam * 0.25, 24, W, (sx, i) => {
      R(c, sx, gy - 18, 1, 18, "#9fd3f5");
      if (i % 3 === 0) poly(c, [sx, gy - 18, sx + 6, gy - 18, sx + 3, gy - 24], "#e7f5ff");
    });
    // Marine Headquarters
    tiles(e.cam * 0.16, 560, W, (sx) => {
      R(c, sx - 20, gy - 60, 180, 34, "#e9ecef");
      for (let k = 0; k < 14; k++) R(c, sx - 14 + k * 13, gy - 54, 5, 8, "#5c6b7a");
      R(c, sx + 20, gy - 100, 100, 40, "#f8f9fa");
      for (let k = 0; k < 8; k++) R(c, sx + 26 + k * 12, gy - 92, 5, 7, "#5c6b7a");
      R(c, sx + 45, gy - 130, 50, 30, "#f1f3f5");
      poly(c, [sx + 40, gy - 130, sx + 100, gy - 130, sx + 92, gy - 140, sx + 48, gy - 140], "#adb5bd");
      half(c, sx + 70, gy - 140, 12, "#ced4da");
      // the 正義 / MARINE banner
      R(c, sx + 52, gy - 124, 36, 14, "#1c7ed6");
      R(c, sx + 56, gy - 121, 3, 8, "#ffffff");
      R(c, sx + 55, gy - 121, 5, 1, "#ffffff");
      R(c, sx + 55, gy - 117, 5, 1, "#ffffff");
      R(c, sx + 55, gy - 114, 5, 1, "#ffffff");
      R(c, sx + 64, gy - 121, 6, 1, "#ffffff");
      R(c, sx + 66, gy - 121, 1, 8, "#ffffff");
      R(c, sx + 64, gy - 117, 6, 1, "#ffffff");
      R(c, sx + 73, gy - 121, 1, 8, "#ffffff");
      R(c, sx + 73, gy - 121, 4, 1, "#ffffff");
      R(c, sx + 76, gy - 121, 1, 4, "#ffffff");
      R(c, sx + 80, gy - 121, 5, 8, "#ffffff");
      R(c, sx + 81, gy - 120, 3, 6, "#1c7ed6");
      // execution platform with a prisoner
      R(c, sx + 200, gy - 80, 6, 50, "#adb5bd");
      R(c, sx + 188, gy - 84, 30, 5, "#868e96");
      R(c, sx + 201, gy - 92, 4, 8, "#212529");
      circle(c, sx + 203, gy - 94, 2, "#f1c27d");
      R(c, sx + 201, gy - 97, 4, 2, "#e67700");
      // Moby Dick bursting from the bay
      const b = Math.round(Math.sin(t / 600) * 1);
      poly(c, [sx + 260, gy - 20 + b, sx + 320, gy - 20 + b, sx + 330, gy - 34 + b, sx + 300, gy - 44 + b, sx + 262, gy - 34 + b], "#f8f9fa");
      R(c, sx + 318, gy - 34 + b, 2, 2, "#000");
      R(c, sx + 290, gy - 72 + b, 2, 30, "#5c3d1e");
      R(c, sx + 280, gy - 68 + b, 22, 14, "#ffffff");
      R(c, sx + 287, gy - 64 + b, 8, 6, "#212529");
      R(c, sx + 288, gy - 63 + b, 6, 1, "#ffffff");
    });
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#ece7da", "#c9c2b2", 2);
    const { c, gy, t } = e;
    props(e, x0, x1, 10, (sx) => R(c, sx, gy + 2, 1, e.H, "#b1a993"));
    props(e, x0, x1, 20, (sx, i) => R(c, sx + (i % 2) * 10, gy + 8, 1, e.H, "#b8b09a"));
    props(e, x0 + 20, x1 - 30, 70, (sx, i) => {
      const k = i % 3;
      if (k === 0) {
        // Marine flag
        R(c, sx + 2, gy - 38, 1, 38, "#495057");
        const w = 0;
        R(c, sx + 3, gy - 38 + w, 16, 10, "#ffffff");
        R(c, sx + 8, gy - 36 + w, 5, 4, "#1c7ed6");
        R(c, sx + 5, gy - 33 + w, 11, 1, "#1c7ed6");
        R(c, sx + 9, gy - 31 + w, 3, 2, "#1c7ed6");
      } else if (k === 1) {
        // fortified wall with cannons (the Encircling Wall)
        R(c, sx, gy - 18, 40, 18, "#dee2e6");
        for (let s = 0; s < 6; s++) R(c, sx + s * 7, gy - 22, 4, 4, "#dee2e6");
        R(c, sx, gy - 18, 40, 1, "#f8f9fa");
        R(c, sx + 8, gy - 13, 12, 3, "#212529");
        R(c, sx + 22, gy - 13, 12, 3, "#212529");
        R(c, sx + 2, gy - 8, 36, 1, "#adb5bd");
      } else {
        // Marine soldiers in "Justice" coats
        for (let s = 0; s < 3; s++) {
          const x = sx + s * 8;
          R(c, x, gy - 12, 5, 8, "#f8f9fa");
          R(c, x + 1, gy - 12, 3, 8, "#1c7ed6");
          circle(c, x + 2.5, gy - 14, 2, "#f1c27d");
          R(c, x, gy - 17, 5, 2, "#ffffff");
          R(c, x + 1, gy - 4, 1, 4, "#1c3d5a");
          R(c, x + 3, gy - 4, 1, 4, "#1c3d5a");
          R(c, x + 5, gy - 18, 1, 12, "#868e96");
        }
      }
    });
  },
};

// =====================================================================
// 7. FISH-MAN ISLAND — bubble, Ryugu Palace, Sun Tree Eve, mermaids
// =====================================================================
const fishManIsland: SagaScene = {
  sky: (e) => {
    const { c, W, H, t } = e;
    grad(c, W, 0, H, ["#2ec4e6", "#0b6fa3", "#03203d"]);
    c.fillStyle = "rgba(255,255,230,0.07)";
    for (let k = 0; k < 6; k++) {
      const x = ((k * 97 + t * 0.01 - e.cam * 0.05) % (W + 80)) - 40;
      c.beginPath();
      c.moveTo(x, 0);
      c.lineTo(x + 18, 0);
      c.lineTo(x - 20, e.gy);
      c.lineTo(x - 38, e.gy);
      c.closePath();
      c.fill();
    }
  },
  far: (e) => {
    const { c, gy, t } = e;
    // Sea King drifting in the deep
    tiles(e.cam * 0.08 + t * 0.006, 700, e.W, (sx) => {
      const y = gy * 0.3;
      for (let k = 0; k < 20; k++) circle(c, sx + k * 6, y + Math.sin(t / 600 + k / 3) * 6, 6 - k * 0.2, "rgba(20,60,90,0.6)");
      circle(c, sx - 4, y + Math.sin(t / 600) * 6, 8, "rgba(20,60,90,0.6)");
    });
    // Fish-Man Island: the giant bubble with Ryugu Palace on coral
    tiles(e.cam * 0.18, 460, e.W, (sx) => {
      c.fillStyle = "rgba(190,240,255,0.08)";
      c.beginPath();
      c.arc(sx + 70, gy + 10, 80, Math.PI, 0);
      c.fill();
      c.strokeStyle = "rgba(220,250,255,0.5)";
      c.lineWidth = 2;
      c.stroke();
      circle(c, sx + 30, gy - 50, 6, "rgba(255,255,255,0.2)");
      // coral spires
      R(c, sx + 50, gy - 40, 40, 40, "#f783ac");
      R(c, sx + 40, gy - 24, 60, 24, "#f06595");
      // palace
      R(c, sx + 54, gy - 70, 32, 30, "#fff0f6");
      half(c, sx + 70, gy - 70, 14, "#ffd43b");
      R(c, sx + 69, gy - 90, 2, 8, "#ffd43b");
      R(c, sx + 46, gy - 60, 8, 20, "#fcc2d7");
      half(c, sx + 50, gy - 60, 5, "#ffd43b");
      R(c, sx + 86, gy - 60, 8, 20, "#fcc2d7");
      half(c, sx + 90, gy - 60, 5, "#ffd43b");
      for (let k = 0; k < 4; k++) R(c, sx + 58 + k * 7, gy - 60, 3, 5, "#5f3dc4");
      // Sun Tree Eve light
      for (let k = 0; k < 3; k++) line(c, sx + 70, gy - 160, sx + 40 + k * 30, gy - 40, "rgba(255,255,200,0.12)", 3);
    });
    // schools of fish
    tiles(e.cam * 0.35 + t * 0.015, 70, e.W, (sx, i) => {
      const y = gy * 0.25 + rnd(i) * gy * 0.45 + Math.sin(t / 500 + i) * 2;
      const col = ["#ffa94d", "#ffe066", "#63e6be", "#ff8787"][i % 4];
      R(c, sx, y, 6, 3, col);
      tri(c, sx, y + 1.5, sx - 3, y - 1, sx - 3, y + 4, col);
      R(c, sx + 4, y, 1, 1, "#000000");
    });
    // mermaids swimming
    tiles(e.cam * 0.3 + t * 0.02, 260, e.W, (sx, i) => {
      const y = gy * 0.45 + rnd(i) * 30 + Math.sin(t / 400 + i) * 4;
      const tail = Math.round(Math.sin(t / 200 + i) * 2);
      circle(c, sx + 12, y, 2.5, "#ffd8a8");
      R(c, sx + 9, y - 3, 6, 3, i % 2 ? "#ff8787" : "#ffd43b");
      R(c, sx + 5, y + 1, 7, 3, "#ffd8a8");
      R(c, sx - 4, y + 1 + tail, 10, 3, i % 2 ? "#38d9a9" : "#da77f2");
      tri(c, sx - 4, y + 2 + tail, sx - 9, y - 1 + tail, sx - 9, y + 6 + tail, i % 2 ? "#20c997" : "#be4bdb");
    });
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#e3cf98", "#bfa46a", 2);
    const { c, gy, t } = e;
    props(e, x0 + 15, x1 - 15, 34, (sx, i) => {
      const k = i % 5;
      if (k === 0) {
        const col = i % 10 === 0 ? "#ff6b6b" : "#ff922b";
        R(c, sx + 4, gy - 16, 2, 16, col);
        R(c, sx, gy - 12, 4, 2, col);
        R(c, sx, gy - 16, 2, 4, col);
        R(c, sx + 6, gy - 9, 4, 2, col);
        R(c, sx + 8, gy - 14, 2, 5, col);
        circle(c, sx + 1, gy - 17, 1.5, col);
        circle(c, sx + 9, gy - 15, 1.5, col);
      } else if (k === 1) {
        for (let y = 0; y < 20; y++) R(c, sx + Math.round(Math.sin(t / 400 + y / 3 + i) * 2), gy - y, 2, 1, y % 4 ? "#2f9e44" : "#40c057");
      } else if (k === 2) {
        // shell house (Mermaid Cafe style)
        circle(c, sx + 12, gy - 9, 11, "#fcc2d7");
        R(c, sx + 1, gy - 9, 22, 9, "#fcc2d7");
        for (let s = 0; s < 5; s++) R(c, sx + 3 + s * 4, gy - 18, 1, 16, "#f783ac");
        R(c, sx + 9, gy - 8, 6, 8, "#5f3dc4");
        half(c, sx + 12, gy - 8, 3, "#5f3dc4");
        circle(c, sx + 12, gy - 22, 2, "#ffd43b");
      } else if (k === 3) {
        // pearl clam
        poly(c, [sx, gy, sx + 12, gy, sx + 10, gy - 4, sx + 2, gy - 4], "#e599f7");
        const open = Math.round((Math.sin(t / 800 + i) + 1) * 2);
        poly(c, [sx, gy - 4 - open, sx + 12, gy - 4 - open, sx + 10, gy - 9 - open, sx + 2, gy - 9 - open], "#da77f2");
        circle(c, sx + 6, gy - 5, 2, "#ffffff");
      } else {
        // starfish
        R(c, sx + 2, gy - 2, 5, 1, "#ff922b");
        R(c, sx + 4, gy - 4, 1, 4, "#ff922b");
      }
      const by = gy - ((t / 20 + i * 37) % (gy + 10));
      c.strokeStyle = "rgba(220,245,255,0.7)";
      c.lineWidth = 1;
      c.strokeRect(sx + 14, Math.round(by), 2, 2);
    });
  },
};

// =====================================================================
// 8. DRESSROSA — Corrida Colosseum, royal palace, toys, Birdcage
// =====================================================================
const dressrosa: SagaScene = {
  sky: (e) => {
    grad(e.c, e.W, 0, e.gy, ["#ff922b", "#ffc078", "#fff0d6"]);
    sun(e.c, e.W * 0.3, e.gy * 0.2, 9, "#fff9db", "rgba(255,240,180,0.3)");
    driftClouds(e, "#fff4e6", "#ffe0bd", 0.12);
    // Doflamingo's Birdcage strings
    const { c, W, gy } = e;
    c.strokeStyle = "rgba(255,255,255,0.18)";
    c.lineWidth = 1;
    for (let k = 0; k < 14; k++) {
      const x = ((k * 53 - e.cam * 0.1) % (W + 60)) - 30;
      c.beginPath();
      c.moveTo(W * 0.5, -40);
      c.lineTo(x, gy);
      c.stroke();
    }
  },
  far: (e) => {
    const { c, gy } = e;
    // Royal palace atop the King's Plateau
    tiles(e.cam * 0.14, 560, e.W, (sx) => {
      poly(c, [sx - 40, gy - 20, sx + 140, gy - 20, sx + 110, gy - 70, sx - 10, gy - 70], "#b08055");
      R(c, sx + 10, gy - 100, 80, 30, "#f8e6c8");
      for (let k = 0; k < 4; k++) {
        R(c, sx + 12 + k * 22, gy - 116, 10, 18, "#f8e6c8");
        poly(c, [sx + 10 + k * 22, gy - 116, sx + 24 + k * 22, gy - 116, sx + 17 + k * 22, gy - 128], "#e8590c");
      }
      for (let k = 0; k < 7; k++) R(c, sx + 15 + k * 11, gy - 92, 4, 6, "#7a5233");
      // pink flamingo-feather flag
      R(c, sx + 50, gy - 140, 1, 14, "#5c3d1e");
      R(c, sx + 51, gy - 140, 8, 5, "#f06595");
    });
    // hillside town with orange roofs + sunflowers
    ridge(e, 0.22, gy - 16, 14, 0.014, 4, "#d8a86b");
    tiles(e.cam * 0.28, 24, e.W, (sx, i) => {
      const h = 8 + (i % 3) * 3;
      R(c, sx, gy - 16 - h, 12, h, i % 4 === 0 ? "#ffe8cc" : "#f3e3c3");
      poly(c, [sx - 1, gy - 16 - h, sx + 13, gy - 16 - h, sx + 6, gy - 22 - h], "#e8590c");
      R(c, sx + 4, gy - 12 - h, 3, 3, "#1c7ed6");
    });
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#d4a373", "#b07d4f", 2);
    const { c, gy, t } = e;
    props(e, x0, x1, 8, (sx, i) => R(c, sx, gy + 3 + (i % 2) * 4, 7, 1, "#9c6b40"));
    // Corrida Colosseum: tiered arcades along the whole segment
    const a = Math.max(x0 + 20, e.cam - 10);
    const b = Math.min(x1 - 20, e.cam + e.W + 10);
    if (b > a) {
      R(c, a - e.cam, gy - 54, b - a, 54, "#e6c58f");
      R(c, a - e.cam, gy - 56, b - a, 2, "#c9a46a");
      R(c, a - e.cam, gy - 36, b - a, 2, "#c9a46a");
      R(c, a - e.cam, gy - 18, b - a, 2, "#c9a46a");
    }
    props(e, x0 + 24, x1 - 30, 14, (sx) => {
      R(c, sx + 3, gy - 16, 8, 16, "#6f4e2c");
      half(c, sx + 7, gy - 16, 4, "#6f4e2c");
      R(c, sx + 4, gy - 32, 6, 12, "#7f5a33");
      half(c, sx + 7, gy - 32, 3, "#7f5a33");
      R(c, sx + 5, gy - 50, 4, 10, "#8d6a40");
      half(c, sx + 7, gy - 50, 2, "#8d6a40");
    });
    props(e, x0 + 40, x1 - 40, 64, (sx, i) => {
      R(c, sx, gy - 72, 1, 16, "#5c3d1e");
      const w = 0;
      R(c, sx + 1, gy - 72 + w, 10, 6, i % 2 ? "#e03131" : "#fab005");
      R(c, sx + 1, gy - 70 + w, 10, 1, "#ffffff");
    });
    // living toys marching in front
    props(e, x0 + 30, x1 - 30, 96, (sx, i) => {
      const step = Math.round(Math.sin(t / 160 + i) * 1);
      const x = sx + 20;
      // tin soldier (Kyros!) with one leg
      R(c, x, gy - 14, 6, 8, "#e03131");
      R(c, x, gy - 17, 6, 3, "#f1c27d");
      R(c, x, gy - 21, 6, 4, "#212529");
      R(c, x + 2, gy - 6, 2, 6 + step, "#f8f9fa");
      R(c, x + 6, gy - 14, 1, 10, "#ced4da");
      // plush bear toy
      circle(c, x + 18, gy - 6, 4, "#d9a066");
      circle(c, x + 18, gy - 12, 3, "#d9a066");
      circle(c, x + 16, gy - 15, 1.2, "#d9a066");
      circle(c, x + 20, gy - 15, 1.2, "#d9a066");
      R(c, x + 17, gy - 12, 1, 1, "#000");
      R(c, x + 19, gy - 12, 1, 1, "#000");
      R(c, x + 16, gy - 2, 2, 2 - step, "#b07d4f");
      R(c, x + 19, gy - 2, 2, 2 + step, "#b07d4f");
    });
  },
};

// =====================================================================
// 9. WHOLE CAKE ISLAND — Chateau, Homies, Prometheus, chocolate river
// =====================================================================
function homieFace(c: Ctx, x: number, y: number, t: number, i: number) {
  const blink = Math.sin(t / 900 + i) > 0.95;
  R(c, x - 3, y, 2, blink ? 1 : 2, "#2b1a10");
  R(c, x + 2, y, 2, blink ? 1 : 2, "#2b1a10");
  R(c, x - 2, y + 4, 5, 1, "#2b1a10");
  R(c, x - 3, y + 3, 1, 1, "#2b1a10");
  R(c, x + 3, y + 3, 1, 1, "#2b1a10");
}

const wholeCake: SagaScene = {
  sky: (e) => {
    const { c, W, gy, t } = e;
    grad(c, W, 0, gy, ["#f783c4", "#ffb3d9", "#fff0f8"]);
    // Prometheus, the living sun
    const px = W * 0.78;
    const py = gy * 0.22;
    for (let k = 0; k < 10; k++) {
      const a = t / 900 + (k * Math.PI) / 5;
      tri(c, px + Math.cos(a) * 9, py + Math.sin(a) * 9, px + Math.cos(a + 0.25) * 9, py + Math.sin(a + 0.25) * 9, px + Math.cos(a + 0.12) * 17, py + Math.sin(a + 0.12) * 17, "#ff922b");
    }
    circle(c, px, py, 10, "#ffd43b");
    homieFace(c, px, py - 3, t, 1);
    // Zeus, the thundercloud homie
    const zx = W * 0.3 + Math.sin(t / 1500) * 20;
    puff(c, zx, gy * 0.2, 1.1, "#f1f3f5", "#c5ccd6");
    homieFace(c, zx + 11, gy * 0.2 - 3, t, 2);
    tiles(e.cam * 0.06, 120, W, (sx, i) => puff(c, sx, gy * 0.12 + rnd(i) * 26, 0.6, "#fff5fb", "#ffd6eb"));
  },
  far: (e) => {
    const { c, gy } = e;
    // Whole Cake Chateau
    tiles(e.cam * 0.17, 420, e.W, (sx) => {
      const layers = ["#f8c8dc", "#fff3bf", "#d0bfff", "#ffc9c9", "#ffe8cc"];
      layers.forEach((col, k) => {
        const w = 130 - k * 24;
        const lx = sx + (130 - w) / 2;
        const ly = gy - 26 - k * 22;
        R(c, lx, ly, w, 22, col);
        for (let d = 0; d < w; d += 6) R(c, lx + d, ly, 4, 3 + (d % 12 === 0 ? 4 : 1), "#ffffff");
        for (let d = 4; d < w - 4; d += 10) R(c, lx + d, ly + 10, 3, 5, "#7048e8");
        for (let d = 2; d < w; d += 12) circle(c, lx + d, ly, 1.5, "#e03131");
      });
      // candle towers
      R(c, sx + 60, gy - 150, 10, 20, "#ffffff");
      R(c, sx + 64, gy - 156, 2, 6, "#5c3d1e");
      circle(c, sx + 65, gy - 158, 2, "#ffd43b");
      circle(c, sx + 65, gy - 132, 6, "#e03131");
    });
    ridge(e, 0.42, gy, 9, 0.03, 2, "#f3a6c8");
  },
  near: (e, x0, x1) => {
    const { c, gy, t } = e;
    groundBand(e, x0, x1, "#ffffff", "#6b3b2a", 3);
    // chocolate river ripples + sprinkles
    props(e, x0, x1, 7, (sx, i) => {
      R(c, sx, gy + 3, 3, 2 + (i % 3) * 2, "#ffffff");
      R(c, sx + 2, gy + 9 + (i % 5) * 3, 2, 1, ["#ff6b6b", "#ffd43b", "#69db7c", "#74c0fc"][i % 4]);
      if (i % 4 === 0) R(c, sx + Math.round(Math.sin(t / 500 + i) * 2), gy + 20, 5, 1, "#8a5240");
    });
    props(e, x0 + 20, x1 - 30, 52, (sx, i) => {
      const k = i % 5;
      if (k === 0 || k === 3) {
        // layered cake house with icing drips
        R(c, sx, gy - 16, 28, 16, "#f8c8dc");
        R(c, sx + 3, gy - 28, 22, 12, "#fff3bf");
        R(c, sx + 6, gy - 36, 16, 8, "#d0bfff");
        for (let d = 0; d < 28; d += 5) R(c, sx + d, gy - 16, 3, 3 + (d % 10 === 0 ? 3 : 0), "#ffffff");
        for (let d = 3; d < 25; d += 5) R(c, sx + d, gy - 28, 3, 2 + (d % 2), "#ff8cc6");
        circle(c, sx + 14, gy - 38, 3, "#e03131");
        R(c, sx + 14, gy - 43, 1, 4, "#2b8a3e");
        R(c, sx + 11, gy - 9, 6, 9, "#7a3e1d");
        half(c, sx + 14, gy - 9, 3, "#7a3e1d");
        R(c, sx + 3, gy - 13, 4, 4, "#74c0fc");
        R(c, sx + 21, gy - 13, 4, 4, "#74c0fc");
      } else if (k === 1) {
        for (let y = 0; y < 26; y++) R(c, sx + 4, gy - y, 3, 1, Math.floor(y / 3) % 2 ? "#ffffff" : "#e03131");
        R(c, sx + 4, gy - 28, 8, 3, "#e03131");
        R(c, sx + 10, gy - 28, 3, 7, "#ffffff");
        R(c, sx + 10, gy - 24, 3, 2, "#e03131");
      } else if (k === 2) {
        // Homie tree with a face
        const sw = 0;
        R(c, sx + 6, gy - 18, 6, 18, "#8b5a2b");
        circle(c, sx + 9 + sw, gy - 26, 11, "#40c057");
        circle(c, sx + 3 + sw, gy - 22, 6, "#51cf66");
        circle(c, sx + 15 + sw, gy - 23, 6, "#37b24d");
        homieFace(c, sx + 9, gy - 14, t, i);
      } else {
        R(c, sx + 5, gy - 22, 1, 22, "#ffffff");
        circle(c, sx + 5, gy - 24, 7, "#cc5de8");
        circle(c, sx + 5, gy - 24, 4, "#f3d9fa");
        circle(c, sx + 5, gy - 24, 1.5, "#cc5de8");
        circle(c, sx + 16, gy - 3, 3, "#51cf66");
        circle(c, sx + 22, gy - 3, 3, "#ffd43b");
        circle(c, sx + 19, gy - 7, 3, "#ff6b6b");
      }
    });
  },
};

// =====================================================================
// 10. WANO — Flower Capital, Onigashima, Kaido dragon, torii, sakura
// =====================================================================
const wano: SagaScene = {
  sky: (e) => {
    const { c, W, gy, t } = e;
    grad(c, W, 0, gy, ["#d9480f", "#ff8a5c", "#ffd8a8"]);
    sun(c, W * 0.7, gy * 0.32, 14, "#ff3b3b", "rgba(255,120,90,0.25)");
    // Kaido's dragon form coiling through the sky
    const dx = ((t * 0.02) % (W + 240)) - 120;
    const dy = gy * 0.18;
    for (let k = 0; k < 26; k++) {
      const x = dx - k * 4;
      const y = dy + Math.sin(t / 400 - k / 3) * 6;
      circle(c, x, y, 3.2 - k * 0.07, "#4c6ef5");
      if (k % 3 === 0) R(c, x - 1, y - 4, 2, 2, "#edf2ff");
    }
    circle(c, dx + 3, dy + Math.sin(t / 400) * 6, 4.5, "#4c6ef5");
    R(c, dx + 5, dy - 5 + Math.sin(t / 400) * 6, 1, 3, "#ffd43b");
    R(c, dx + 2, dy - 6 + Math.sin(t / 400) * 6, 1, 3, "#ffd43b");
  },
  far: (e) => {
    const { c, gy, t } = e;
    // Mt. Fuji
    tiles(e.cam * 0.08, 560, e.W, (sx) => {
      poly(c, [sx - 90, gy - 10, sx + 90, gy - 10, sx + 14, gy - 96, sx - 14, gy - 96], "#7c6a9c");
      poly(c, [sx - 22, gy - 74, sx + 22, gy - 74, sx + 14, gy - 96, sx - 14, gy - 96], "#ffffff");
      poly(c, [sx - 22, gy - 74, sx - 14, gy - 70, sx - 6, gy - 74, sx + 4, gy - 69, sx + 12, gy - 74, sx + 22, gy - 74], "#ffffff");
    });
    // Onigashima — the skull island
    tiles(e.cam * 0.12, 640, e.W, (sx) => {
      const ox = sx + 300;
      R(c, ox - 40, gy - 34, 90, 24, "#3b2f4a");
      circle(c, ox + 5, gy - 56, 30, "#4a3d5c");
      circle(c, ox - 6, gy - 60, 7, "#1a1424");
      circle(c, ox + 16, gy - 60, 7, "#1a1424");
      R(c, ox - 6, gy - 44, 22, 5, "#1a1424");
      tri(c, ox - 24, gy - 74, ox - 14, gy - 80, ox - 30, gy - 100, "#d9c8a0");
      tri(c, ox + 24, gy - 74, ox + 34, gy - 80, ox + 40, gy - 100, "#d9c8a0");
    });
    // Flower Capital castle (Orochi castle)
    tiles(e.cam * 0.22, 340, e.W, (sx) => {
      R(c, sx, gy - 24, 50, 14, "#8d8d8d");
      for (let k = 0; k < 4; k++) {
        const w = 44 - k * 9;
        const x = sx + (50 - w) / 2;
        const y = gy - 34 - k * 14;
        R(c, x + 2, y, w - 4, 10, "#f8f1e3");
        R(c, x - 4, y - 2, w + 8, 3, "#2b1b17");
        R(c, x - 6, y - 3, 3, 2, "#2b1b17");
        R(c, x + w + 3, y - 3, 3, 2, "#2b1b17");
        for (let w2 = 0; w2 < w - 8; w2 += 6) R(c, x + 4 + w2, y + 4, 2, 3, "#5a2d1a");
      }
      R(c, sx + 23, gy - 96, 4, 6, "#ffd43b");
    });
    ridge(e, 0.45, gy, 8, 0.03, 9, "#b86b4b");
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#82a35a", "#a9794a", 2);
    const { c, gy, t } = e;
    props(e, x0, x1, 12, (sx, i) => R(c, sx, gy + 4 + (i % 3) * 3, 6, 1, "#8f6238"));
    props(e, x0 + 20, x1 - 30, 62, (sx, i) => {
      const k = i % 5;
      if (k === 0) {
        // torii gate
        R(c, sx + 2, gy - 32, 3, 32, "#e03131");
        R(c, sx + 23, gy - 32, 3, 32, "#e03131");
        R(c, sx - 2, gy - 34, 32, 3, "#c92a2a");
        poly(c, [sx - 5, gy - 36, sx + 33, gy - 36, sx + 31, gy - 38, sx - 3, gy - 38], "#212529");
        R(c, sx + 1, gy - 27, 26, 2, "#e03131");
        R(c, sx + 12, gy - 31, 4, 4, "#1a1a1a");
      } else if (k === 1 || k === 4) {
        // cherry blossom tree
        R(c, sx + 9, gy - 18, 3, 18, "#5c3d2e");
        R(c, sx + 4, gy - 16, 6, 1, "#5c3d2e");
        circle(c, sx + 10, gy - 24, 10, "#f9a8d4");
        circle(c, sx + 3, gy - 19, 6, "#fbcfe8");
        circle(c, sx + 17, gy - 19, 6, "#f472b6");
        circle(c, sx + 10, gy - 30, 5, "#fbcfe8");
      } else if (k === 2) {
        // samurai house with curved tile roof, shoji and lantern
        R(c, sx, gy - 18, 32, 18, "#d9b38c");
        R(c, sx + 2, gy - 16, 1, 16, "#6b4423");
        R(c, sx + 29, gy - 16, 1, 16, "#6b4423");
        R(c, sx + 8, gy - 14, 16, 14, "#f1e3c6");
        for (let s = 0; s < 4; s++) R(c, sx + 8 + s * 4, gy - 14, 1, 14, "#6b4423");
        R(c, sx + 8, gy - 8, 16, 1, "#6b4423");
        poly(c, [sx - 6, gy - 18, sx + 38, gy - 18, sx + 32, gy - 24, sx, gy - 24], "#343a40");
        R(c, sx - 7, gy - 20, 3, 2, "#343a40");
        R(c, sx + 36, gy - 20, 3, 2, "#343a40");
        poly(c, [sx + 4, gy - 24, sx + 28, gy - 24, sx + 23, gy - 29, sx + 9, gy - 29], "#495057");
        const glow = Math.sin(t / 300 + i) > -0.5;
        R(c, sx + 34, gy - 16, 1, 3, "#212529");
        R(c, sx + 32, gy - 13, 5, 7, glow ? "#ff6b6b" : "#c92a2a");
        R(c, sx + 32, gy - 10, 5, 1, "#212529");
      } else {
        // samurai with katana + Komachiyo-style dog
        const s2 = Math.round(Math.sin(t / 240 + i) * 1);
        R(c, sx + 4, gy - 14, 7, 9, "#364fc7");
        R(c, sx + 3, gy - 6, 9, 3, "#212529");
        circle(c, sx + 7.5, gy - 16, 2.5, "#f1c27d");
        R(c, sx + 6, gy - 20, 3, 2, "#212529");
        R(c, sx + 5, gy - 3, 2, 3 + s2, "#212529");
        R(c, sx + 9, gy - 3, 2, 3 - s2, "#212529");
        line(c, sx + 11, gy - 10, sx + 18, gy - 15, "#ced4da");
        R(c, sx + 22, gy - 8, 10, 5, "#f1e3c6");
        R(c, sx + 30, gy - 11, 4, 4, "#f1e3c6");
        R(c, sx + 23, gy - 3, 1, 3, "#f1e3c6");
        R(c, sx + 29, gy - 3, 1, 3, "#f1e3c6");
        R(c, sx + 32, gy - 10, 1, 1, "#000");
      }
    });
  },
};

// =====================================================================
// 11. ELBAPH — Treasure Tree Adam, giants, viking ships
// =====================================================================
const elbaph: SagaScene = {
  sky: (e) => {
    grad(e.c, e.W, 0, e.gy, ["#4dabf7", "#a5d8ff", "#e7f5ff"]);
    driftClouds(e, "#ffffff", "#d0e6f8", 0.06);
  },
  far: (e) => {
    const { c, gy, W, t } = e;
    // Treasure Tree Adam: a trunk so big the canopy is the sky
    tiles(e.cam * 0.1, 700, W, (sx) => {
      R(c, sx, 0, 110, gy, "#6b4b2a");
      for (let k = 0; k < 6; k++) R(c, sx + 8 + k * 18, 0, 4, gy, k % 2 ? "#5a3d21" : "#7d5a35");
      for (let k = -3; k < 6; k++) circle(c, sx + 55 + k * 50, 4, 46, k % 2 ? "#2b7a2e" : "#2f8a33");
      poly(c, [sx - 50, gy - 20, sx, gy - 50, sx, gy - 30], "#6b4b2a");
      poly(c, [sx + 160, gy - 20, sx + 110, gy - 60, sx + 110, gy - 36], "#6b4b2a");
      // giant town built on the branches
      for (let k = 0; k < 3; k++) {
        R(c, sx + 120 + k * 30, gy - 120 - k * 6, 24, 16, "#a0704a");
        poly(c, [sx + 118 + k * 30, gy - 120 - k * 6, sx + 146 + k * 30, gy - 120 - k * 6, sx + 132 + k * 30, gy - 132 - k * 6], "#5c3d2e");
      }
      R(c, sx + 110, gy - 104, 110, 4, "#6b4b2a");
    });
    ridge(e, 0.3, gy - 4, 24, 0.012, 3, "#4a8f45");
    // giants walking in the distance
    tiles(e.cam * 0.35 + t * 0.008, 300, W, (sx, i) => {
      const step = Math.round(Math.sin(t / 500 + i) * 2);
      const col = "rgba(60,40,30,0.55)";
      R(c, sx, gy - 84, 22, 40, col);
      circle(c, sx + 11, gy - 92, 9, col);
      poly(c, [sx + 2, gy - 96, sx - 6, gy - 108, sx + 4, gy - 98], col);
      poly(c, [sx + 20, gy - 96, sx + 28, gy - 108, sx + 18, gy - 98], col);
      R(c, sx + 2, gy - 44, 7, 40 + step, col);
      R(c, sx + 13, gy - 44, 7, 40 - step, col);
      R(c, sx - 6, gy - 80, 6, 30, col);
      R(c, sx + 22, gy - 80, 6, 30, col);
      R(c, sx + 28, gy - 100, 3, 50, col);
    });
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#6fcf63", "#6b4f2f", 4);
    const { c, gy } = e;
    props(e, x0, x1, 9, (sx, i) => {
      if (rnd(i) > 0.4) R(c, sx, gy - 2, 1, 2, "#51b84a");
    });
    props(e, x0 + 30, x1 - 60, 130, (sx, i) => {
      const k = i % 4;
      if (k === 0) {
        // giant viking longhouse — towers over Luffy
        R(c, sx, gy - 56, 90, 56, "#a0704a");
        for (let p = 0; p < 90; p += 8) R(c, sx + p, gy - 56, 1, 56, "#7a5233");
        poly(c, [sx - 12, gy - 56, sx + 102, gy - 56, sx + 45, gy - 98], "#5c3d2e");
        R(c, sx + 44, gy - 104, 2, 8, "#5c3d2e");
        tri(c, sx + 40, gy - 104, sx + 50, gy - 104, sx + 52, gy - 112, "#5c3d2e");
        R(c, sx + 34, gy - 32, 22, 32, "#3d2817");
        circle(c, sx + 14, gy - 42, 9, "#c92a2a");
        circle(c, sx + 14, gy - 42, 3, "#ced4da");
        circle(c, sx + 76, gy - 42, 9, "#1971c2");
        circle(c, sx + 76, gy - 42, 3, "#ced4da");
      } else if (k === 1) {
        // half-buried giant helmet + giant axe
        half(c, sx + 30, gy, 28, "#adb5bd");
        R(c, sx + 2, gy - 4, 56, 4, "#868e96");
        tri(c, sx + 4, gy - 18, sx + 12, gy - 14, sx - 6, gy - 44, "#f1e3c6");
        tri(c, sx + 56, gy - 18, sx + 48, gy - 14, sx + 66, gy - 44, "#f1e3c6");
        R(c, sx + 86, gy - 76, 5, 76, "#7a5233");
        poly(c, [sx + 91, gy - 76, sx + 91, gy - 50, sx + 116, gy - 54, sx + 116, gy - 72], "#ced4da");
        R(c, sx + 91, gy - 76, 25, 2, "#f1f3f5");
      } else if (k === 2) {
        // giant viking ship beached
        poly(c, [sx - 10, gy - 30, sx + 110, gy - 30, sx + 96, gy, sx + 4, gy], "#8b5a2b");
        R(c, sx - 10, gy - 32, 120, 3, "#f2c94c");
        for (let s = 0; s < 6; s++) circle(c, sx + 8 + s * 18, gy - 20, 6, s % 2 ? "#c92a2a" : "#f1f3f5");
        poly(c, [sx + 110, gy - 30, sx + 122, gy - 54, sx + 114, gy - 58, sx + 104, gy - 32], "#8b5a2b");
        circle(c, sx + 118, gy - 56, 4, "#8b5a2b");
        R(c, sx + 48, gy - 90, 3, 60, "#5c3d1e");
        R(c, sx + 26, gy - 86, 48, 34, "#f1f3f5");
        for (let s = 0; s < 4; s++) R(c, sx + 26, gy - 82 + s * 9, 48, 3, "#c92a2a");
      } else {
        // giant mushroom + boulders
        R(c, sx + 18, gy - 44, 12, 44, "#f1e3c6");
        half(c, sx + 24, gy - 40, 26, "#e8590c");
        circle(c, sx + 14, gy - 52, 3, "#ffffff");
        circle(c, sx + 30, gy - 56, 4, "#ffffff");
        circle(c, sx + 38, gy - 46, 2.5, "#ffffff");
        half(c, sx + 70, gy, 16, "#868e96");
        half(c, sx + 88, gy, 9, "#adb5bd");
      }
    });
  },
};

// =====================================================================
// 12. LAUGH TALE — Thousand Sunny, Roger's treasure, Road Poneglyphs
// =====================================================================
const laughTale: SagaScene = {
  sky: (e) => {
    const { c, W, gy, t } = e;
    grad(c, W, 0, gy, ["#15aabf", "#66d9e8", "#fff1a8"]);
    sun(c, W * 0.5, gy * 0.26, 13, "#fff9db", "rgba(255,236,153,0.35)");
    for (let k = 0; k < 12; k++) {
      const a = (k * Math.PI) / 6 + t / 4000;
      line(c, W * 0.5, gy * 0.26, W * 0.5 + Math.cos(a) * 60, gy * 0.26 + Math.sin(a) * 60, "rgba(255,248,200,0.18)", 2);
    }
    tiles(0, 23, W, (sx, i) => {
      if (Math.sin(t / 300 + i * 1.7) > 0.85) R(c, sx, rnd(i) * gy * 0.7, 1, 1, "#ffffff");
    });
    driftClouds(e, "#ffffff", "#e0f4f7", 0.1);
  },
  far: (e) => {
    const { c, gy, W, t } = e;
    sea(e, gy - 26, 26, "#0fb3c4", "#7ee8f2");
    // the laughing skull rock that gives the island its name
    tiles(e.cam * 0.18, 460, W, (sx) => {
      circle(c, sx + 34, gy - 46, 30, "#e9e3d0");
      R(c, sx + 12, gy - 26, 44, 18, "#e9e3d0");
      circle(c, sx + 24, gy - 50, 7, "#3b2f2f");
      circle(c, sx + 44, gy - 50, 7, "#3b2f2f");
      poly(c, [sx + 32, gy - 40, sx + 36, gy - 40, sx + 34, gy - 36], "#3b2f2f");
      R(c, sx + 18, gy - 32, 32, 7, "#3b2f2f");
      for (let k = 0; k < 7; k++) R(c, sx + 19 + k * 4.5, gy - 32, 3, 2, "#e9e3d0");
      for (let k = 0; k < 7; k++) R(c, sx + 19 + k * 4.5, gy - 27, 3, 2, "#e9e3d0");
      R(c, sx + 2, gy - 72, 64, 4, "#f2c94c");
      R(c, sx + 12, gy - 78, 44, 6, "#f2c94c");
      R(c, sx + 2, gy - 70, 64, 2, "#c0392b");
    });
    // The Thousand Sunny at anchor
    tiles(e.cam * 0.24, 380, W, (sx) => {
      sailShip(c, sx + 200, gy - 18, 1, { hull: "#f2c94c", trim: "#8b5a2b", sail: "#ffffff", sailMark: "#111111", head: "lion", t });
    });
  },
  near: (e, x0, x1) => {
    groundBand(e, x0, x1, "#fff3bf", "#f2d48a", 3);
    const { c, gy, t } = e;
    props(e, x0, x1, 11, (sx, i) => {
      if (Math.sin(t / 250 + i * 2.3) > 0.8) R(c, sx, gy + 4 + (i % 4) * 4, 1, 1, "#ffffff");
      if (i % 9 === 0) R(c, sx, gy + 10, 3, 2, "#ff8787");
    });
    props(e, x0 + 20, x1 + 400, 50, (sx, i) => {
      const k = i % 5;
      if (k === 0) {
        palm(c, sx + 6, gy, 30, t);
      } else if (k === 1) {
        // open treasure chest overflowing with gold
        R(c, sx, gy - 11, 22, 11, "#8b5a2b");
        R(c, sx, gy - 7, 22, 2, "#fcc419");
        R(c, sx + 9, gy - 9, 4, 4, "#fcc419");
        poly(c, [sx - 1, gy - 12, sx + 23, gy - 12, sx + 21, gy - 22, sx + 1, gy - 22], "#7a4a1f");
        R(c, sx - 1, gy - 22, 24, 2, "#fcc419");
        R(c, sx + 2, gy - 14, 18, 4, "#ffd43b");
        circle(c, sx + 6, gy - 14, 3, "#fab005");
        circle(c, sx + 15, gy - 14, 3, "#fab005");
        R(c, sx + 10, gy - 16, 2, 2, "#e64980");
        R(c, sx + 4, gy - 16, 2, 2, "#4dabf7");
        const sp = Math.sin(t / 180 + i);
        if (sp > 0.3) {
          R(c, sx + 5, gy - 26, 1, 3, "#ffffff");
          R(c, sx + 4, gy - 25, 3, 1, "#ffffff");
        }
        if (sp < -0.4) {
          R(c, sx + 17, gy - 25, 1, 3, "#ffffff");
          R(c, sx + 16, gy - 24, 3, 1, "#ffffff");
        }
      } else if (k === 2) {
        circle(c, sx + 8, gy, 9, "#fcc419");
        circle(c, sx + 8, gy - 2, 6, "#ffe066");
        R(c, sx + 17, gy - 4, 3, 3, "#4dabf7");
        R(c, sx + 2, gy - 3, 3, 3, "#69db7c");
        R(c, sx + 9, gy - 7, 2, 2, "#e64980");
        // Roger's straw hat?! resting on the gold
        R(c, sx + 3, gy - 9, 10, 1, "#f2c94c");
        R(c, sx + 5, gy - 11, 6, 2, "#f2c94c");
        R(c, sx + 5, gy - 10, 6, 1, "#c0392b");
      } else if (k === 3) {
        // red Road Poneglyph
        R(c, sx, gy - 26, 20, 26, "#c92a2a");
        R(c, sx, gy - 26, 20, 2, "#e03131");
        R(c, sx + 18, gy - 26, 2, 26, "#a61e1e");
        for (let r = 0; r < 6; r++) R(c, sx + 3, gy - 22 + r * 4, 13, 1, "#8b1a1a");
        circle(c, sx + 10, gy - 30, 1.5 + Math.sin(t / 300) * 0.5, "rgba(255,240,180,0.9)");
      } else {
        // the Straw Hat jolly roger planted in the sand
        R(c, sx + 4, gy - 34, 1, 34, "#5c3d1e");
        jollyRoger(c, sx + 5, gy - 34, 14, 10, 0);
      }
    });
  },
};

export const SAGA_SCENES: SagaScene[] = [
  eastBlue,
  alabasta,
  skyIsland,
  eniesLobby,
  thrillerBark,
  marineford,
  fishManIsland,
  dressrosa,
  wholeCake,
  wano,
  elbaph,
  laughTale,
];

// Saga boundary marker: a signpost with the saga's number.
export function drawSignpost(c: Ctx, sx: number, gy: number, n: number, reached: boolean, t: number) {
  R(c, sx, gy - 22, 2, 22, "#5c3d1e");
  R(c, sx - 8, gy - 22, 18, 9, reached ? "#ffd43b" : "#e9dcc3");
  R(c, sx - 8, gy - 22, 18, 1, "#ffffff");
  const pips = Math.min(n, 12);
  for (let k = 0; k < pips; k++) R(c, sx - 6 + (k % 6) * 3, gy - 20 + Math.floor(k / 6) * 3, 2, 2, "#5c3d1e");
  if (reached && Math.sin(t / 200) > 0) R(c, sx + 8, gy - 26, 2, 2, "#ffffff");
}

// =====================================================================
// DETAILS — small living touches per saga, drawn in world space on top of the scene
// =====================================================================
function flier(e: Env, x0: number, x1: number, sp: number, yTop: number, yRange: number, speed: number, draw: (x: number, y: number, i: number) => void) {
  props(e, x0, x1, sp, (sx, i) => {
    const drift = ((e.t * speed + i * 97) % (sp * 2)) - sp;
    draw(sx + drift, yTop + rnd(i) * yRange + Math.sin(e.t / 400 + i) * 3, i);
  });
}

export const SAGA_DETAILS: ((e: Env, x0: number, x1: number) => void)[] = [
  // 1. East Blue — butterflies, chickens pecking, a barrel of meat by the dock
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 110, gy - 30, 18, 0.01, (x, y, i) => {
      const f = Math.sin(t / 90 + i) > 0;
      R(c, x, y, 1, 2, "#212529");
      R(c, x - (f ? 2 : 1), y - 1, f ? 2 : 1, 2, i % 2 ? "#ffd43b" : "#ffffff");
      R(c, x + 1, y - 1, f ? 2 : 1, 2, i % 2 ? "#ffd43b" : "#ffffff");
    });
    props(e, x0 + 50, x1 - 40, 150, (sx, i) => {
      const peck = Math.sin(t / 250 + i) > 0.6 ? 1 : 0;
      R(c, sx, gy - 5, 5, 4, "#ffffff");
      R(c, sx + 4, gy - 7 + peck, 2, 3, "#ffffff");
      R(c, sx + 6, gy - 6 + peck, 1, 1, "#fab005");
      R(c, sx + 4, gy - 8 + peck, 1, 1, "#e03131");
      R(c, sx + 1, gy - 1, 1, 1, "#fab005");
      R(c, sx + 3, gy - 1, 1, 1, "#fab005");
      // bone-in meat on a crate
      R(c, sx + 18, gy - 5, 8, 5, "#a0703c");
      circle(c, sx + 22, gy - 8, 3, "#c2410c");
      R(c, sx + 25, gy - 9, 3, 1, "#fff8e1");
    });
  },
  // 2. Alabasta — tumbleweeds (ONLY here), circling vultures, cactus, camel
  (e, x0, x1) => {
    const { c, gy, t } = e;
    props(e, x0, x1, 170, (sx, i) => {
      const roll = ((t * 0.04 + i * 61) % 170) - 85;
      const x = sx - roll;
      const bounce = Math.round(Math.abs(Math.sin(t / 160 + i)) * 4);
      const a = -t / 120;
      circle(c, x, gy - 5 - bounce, 5, "rgba(150,100,50,0.9)");
      circle(c, x, gy - 5 - bounce, 3, "rgba(200,150,80,0.9)");
      for (let k = 0; k < 4; k++) line(c, x, gy - 5 - bounce, x + Math.cos(a + k) * 5, gy - 5 - bounce + Math.sin(a + k) * 5, "#7a4a1f");
      R(c, x - 2, gy, 5, 1, "rgba(0,0,0,0.12)");
    });
    flier(e, x0, x1, 200, gy - 80, 20, 0, (x, y, i) => {
      const a = t / 1200 + i;
      const vx = x + Math.cos(a) * 18;
      const vy = y + Math.sin(a) * 6;
      R(c, vx - 3, vy, 7, 1, "#3b2a1a");
      R(c, vx - 4, vy - 1, 2, 1, "#3b2a1a");
      R(c, vx + 3, vy - 1, 2, 1, "#3b2a1a");
    });
    props(e, x0 + 70, x1 - 30, 140, (sx, i) => {
      if (i % 2) {
        R(c, sx + 3, gy - 14, 3, 14, "#2f9e44");
        R(c, sx, gy - 10, 3, 2, "#2f9e44");
        R(c, sx, gy - 13, 2, 3, "#2f9e44");
        R(c, sx + 6, gy - 8, 3, 2, "#2f9e44");
        R(c, sx + 7, gy - 11, 2, 3, "#2f9e44");
      } else {
        const st = Math.round(Math.sin(t / 300 + i) * 1);
        R(c, sx, gy - 10, 14, 5, "#c99a5b");
        R(c, sx + 4, gy - 13, 5, 3, "#c99a5b");
        R(c, sx + 12, gy - 15, 3, 7, "#c99a5b");
        R(c, sx + 13, gy - 17, 4, 3, "#c99a5b");
        R(c, sx + 1, gy - 5, 1, 5 + st, "#a87b44");
        R(c, sx + 11, gy - 5, 1, 5 - st, "#a87b44");
      }
    });
  },
  // 3. Sky Island — South Birds gliding, dial shells, a cloud fox (Su)
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 150, gy - 60, 30, 0.02, (x, y, i) => {
      const f = Math.sin(t / 140 + i) > 0 ? -1 : 1;
      R(c, x, y, 5, 2, "#495057");
      R(c, x - 3, y + f, 3, 1, "#495057");
      R(c, x + 5, y + f, 3, 1, "#495057");
      R(c, x + 4, y - 1, 2, 1, "#fab005");
    });
    props(e, x0 + 60, x1 - 30, 170, (sx, i) => {
      const hop = Math.round(Math.abs(Math.sin(t / 260 + i)) * 2);
      circle(c, sx + 4, gy - 4 - hop, 4, "#f8f9fa");
      R(c, sx + 7, gy - 9 - hop, 3, 3, "#f8f9fa");
      R(c, sx + 7, gy - 11 - hop, 1, 2, "#f8f9fa");
      R(c, sx + 9, gy - 11 - hop, 1, 2, "#f8f9fa");
      R(c, sx + 8, gy - 8 - hop, 1, 1, "#000");
      circle(c, sx - 1, gy - 6 - hop, 2, "#f8f9fa");
    });
  },
  // 4. Enies Lobby — Den Den Mushi on a post, a Marine warship on the horizon, diving gulls
  (e, x0, x1) => {
    const { c, gy, t } = e;
    props(e, x0 + 40, x1 - 40, 160, (sx, i) => {
      R(c, sx, gy - 8, 1, 8, "#495057");
      R(c, sx - 3, gy - 9, 7, 1, "#495057");
      circle(c, sx, gy - 12, 3, "#c9a26b");
      circle(c, sx, gy - 12, 1.5, "#e9dcc3");
      R(c, sx - 4, gy - 11, 3, 2, "#69db7c");
      R(c, sx - 4, gy - 14, 1, 3, "#69db7c");
      if (Math.sin(t / 300 + i) > 0.6) R(c, sx + 4, gy - 16, 2, 1, "#ffffff");
    });
    flier(e, x0, x1, 140, gy - 55, 20, 0.02, (x, y, i) => {
      const dive = Math.max(0, Math.sin(t / 900 + i)) * 20;
      R(c, x, y + dive, 1, 1, "#ffffff");
      R(c, x - 2, y + dive - 1, 2, 1, "#ffffff");
      R(c, x + 1, y + dive - 1, 2, 1, "#ffffff");
    });
  },
  // 5. Thriller Bark — will-o'-wisps floating over graves and Kumashi the bear zombie
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 70, gy - 22, 14, 0.004, (x, y, i) => {
      const glow = 0.5 + Math.sin(t / 200 + i) * 0.3;
      circle(c, x, y, 3, `rgba(130,255,200,${glow * 0.35})`);
      circle(c, x, y, 1.2, `rgba(200,255,230,${glow})`);
    });
    props(e, x0 + 80, x1 - 40, 220, (sx, i) => {
      const sw = Math.round(Math.sin(t / 400 + i) * 1);
      R(c, sx, gy - 12, 8, 12, "#ffc9de");
      circle(c, sx + 4, gy - 15, 4, "#ffc9de");
      circle(c, sx + 1, gy - 19, 1.5, "#ffc9de");
      circle(c, sx + 7, gy - 19, 1.5, "#ffc9de");
      R(c, sx + 2, gy - 16, 1, 1, "#000");
      R(c, sx + 5, gy - 16, 1, 1, "#000");
      R(c, sx - 2 + sw, gy - 10, 2, 5, "#ffc9de");
      R(c, sx + 8 - sw, gy - 10, 2, 5, "#ffc9de");
      R(c, sx + 2, gy - 8, 4, 1, "#5c3d2e");
    });
  },
  // 6. Marineford — cannonballs arcing across with smoke puffs, scattered rubble
  (e, x0, x1) => {
    const { c, gy, t } = e;
    props(e, x0, x1, 180, (sx, i) => {
      const p = ((t / 1600 + rnd(i)) % 1);
      const x = sx - 60 + p * 120;
      const y = gy - 20 - Math.sin(p * Math.PI) * 50;
      circle(c, x, y, 2, "#212529");
      for (let k = 1; k <= 3; k++) circle(c, x - k * 4, y + k * 1.5, 1 + k * 0.4, `rgba(200,200,200,${0.4 - k * 0.1})`);
      if (p > 0.92) circle(c, sx + 60, gy - 6, 6 * (p - 0.9) * 20, "rgba(255,150,60,0.5)");
    });
    props(e, x0 + 30, x1, 46, (sx, i) => {
      R(c, sx, gy - 3, 4 + (i % 3), 3, "#adb5bd");
      R(c, sx + 5, gy - 2, 3, 2, "#868e96");
    });
  },
  // 7. Fish-Man Island — jellyfish drifting and a sea turtle swimming by
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 90, gy - 70, 40, 0.004, (x, y, i) => {
      const pulse = Math.sin(t / 300 + i) > 0 ? 1 : 0;
      const col = i % 2 ? "rgba(255,150,220,0.75)" : "rgba(170,200,255,0.75)";
      half(c, x, y, 4 + pulse, col);
      for (let k = 0; k < 3; k++) R(c, x - 3 + k * 3, y + 1, 1, 4 + ((t / 150 + k + i) % 3), col);
    });
    props(e, x0, x1, 260, (sx, i) => {
      const x = sx + ((t * 0.02 + i * 50) % 160) - 80;
      const y = gy - 40 + Math.sin(t / 700 + i) * 4;
      const f = Math.sin(t / 200 + i) > 0 ? 1 : -1;
      half(c, x, y, 6, "#2b8a3e");
      R(c, x - 6, y, 12, 2, "#69db7c");
      R(c, x + 6, y - 2, 3, 3, "#69db7c");
      R(c, x - 4, y + 1 + f, 3, 2, "#69db7c");
      R(c, x + 2, y + 1 - f, 3, 2, "#69db7c");
    });
  },
  // 8. Dressrosa — flocks of doves, sunflowers, a Tontatta dwarf darting between
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 120, gy - 80, 20, 0.025, (x, y, i) => {
      const f = Math.sin(t / 110 + i) > 0 ? -1 : 1;
      R(c, x, y, 3, 2, "#f8f9fa");
      R(c, x - 2, y + f, 2, 1, "#f8f9fa");
      R(c, x + 3, y + f, 2, 1, "#f8f9fa");
    });
    props(e, x0 + 20, x1 - 20, 40, (sx, i) => {
      if (i % 3) return;
      R(c, sx + 2, gy - 9, 1, 9, "#2f9e44");
      R(c, sx, gy - 5, 2, 1, "#2f9e44");
      circle(c, sx + 2.5, gy - 11, 2.5, "#fcc419");
      circle(c, sx + 2.5, gy - 11, 1, "#7a4a1f");
    });
    props(e, x0, x1, 210, (sx, i) => {
      const x = sx + Math.sin(t / 220 + i) * 30;
      R(c, x, gy - 4, 2, 3, "#e8590c");
      R(c, x, gy - 6, 2, 2, "#f1c27d");
      R(c, x - 1, gy - 7, 4, 1, "#1c7ed6");
      R(c, x + 2, gy - 2, 2, 2, "#5c3d2e");
    });
  },
  // 9. Whole Cake Island — floating candy balloons and a walking Chess Peacekeeper
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 130, gy - 70, 30, 0.004, (x, y, i) => {
      line(c, x, y + 4, x + Math.sin(t / 500 + i) * 2, y + 14, "rgba(255,255,255,0.7)");
      circle(c, x, y, 4, ["#ff6b6b", "#74c0fc", "#ffd43b", "#da77f2"][i % 4]);
      R(c, x - 2, y - 2, 1, 1, "#ffffff");
    });
    props(e, x0 + 60, x1 - 40, 190, (sx, i) => {
      const st = Math.round(Math.sin(t / 250 + i) * 1);
      R(c, sx, gy - 16, 8, 12, i % 2 ? "#212529" : "#f8f9fa");
      R(c, sx + 1, gy - 20, 6, 4, i % 2 ? "#212529" : "#f8f9fa");
      R(c, sx + 2, gy - 22, 4, 2, "#ffd43b");
      R(c, sx + 2, gy - 18, 1, 1, "#e03131");
      R(c, sx + 5, gy - 18, 1, 1, "#e03131");
      R(c, sx + 1, gy - 4, 2, 4 + st, "#868e96");
      R(c, sx + 5, gy - 4, 2, 4 - st, "#868e96");
      R(c, sx + 9, gy - 20, 1, 16, "#ced4da");
    });
  },
  // 10. Wano — fireflies and paper lanterns floating up, a koi pond
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 60, gy - 30, 24, 0.003, (x, y, i) => {
      if (Math.sin(t / 250 + i * 2) > 0.2) circle(c, x, y, 1, "#fff3a0");
    });
    props(e, x0, x1, 230, (sx, i) => {
      const rise = (t * 0.008 + i * 40) % (gy + 20);
      const x = sx + Math.sin(t / 900 + i) * 6;
      const y = gy - rise;
      R(c, x, y, 4, 5, "#ff922b");
      R(c, x, y + 1, 4, 1, "#e8590c");
      R(c, x + 1, y + 5, 2, 1, "rgba(255,240,150,0.9)");
    });
    props(e, x0 + 90, x1 - 60, 250, (sx) => {
      R(c, sx, gy + 4, 26, 5, "#1c7ed6");
      R(c, sx, gy + 4, 26, 1, "#74c0fc");
      const kx = sx + 4 + ((t / 60) % 16);
      R(c, kx, gy + 6, 4, 2, "#ff922b");
      R(c, kx + 1, gy + 6, 1, 1, "#ffffff");
    });
  },
  // 11. Elbaph — giant eagles soaring, giant footprints in the snow, a campfire
  (e, x0, x1) => {
    const { c, gy, t } = e;
    flier(e, x0, x1, 260, gy - 110, 30, 0.012, (x, y, i) => {
      const f = Math.sin(t / 300 + i) > 0 ? -3 : 3;
      R(c, x, y, 10, 3, "#5c3d2e");
      poly(c, [x, y + 1, x - 14, y + f, x - 12, y + f + 2], "#5c3d2e");
      poly(c, [x + 10, y + 1, x + 24, y + f, x + 22, y + f + 2], "#5c3d2e");
      R(c, x + 10, y, 3, 2, "#f8f9fa");
      R(c, x + 13, y + 1, 2, 1, "#fab005");
    });
    props(e, x0 + 20, x1 - 20, 54, (sx, i) => {
      R(c, sx, gy + 3 + (i % 2) * 4, 12, 3, "rgba(80,60,40,0.35)");
      R(c, sx + 12, gy + 2 + (i % 2) * 4, 3, 2, "rgba(80,60,40,0.35)");
    });
    props(e, x0 + 100, x1 - 60, 280, (sx) => {
      R(c, sx, gy - 2, 12, 2, "#5c3d2e");
      const f = Math.sin(t / 80);
      tri(c, sx + 1, gy - 2, sx + 11, gy - 2, sx + 6 + f, gy - 12, "#ff922b");
      tri(c, sx + 3, gy - 2, sx + 9, gy - 2, sx + 6 - f, gy - 8, "#ffd43b");
    });
  },
  // 12. Laugh Tale — crabs scuttling, seashells, gentle surf at the shoreline
  (e, x0, x1) => {
    const { c, gy, t } = e;
    props(e, x0, x1 + 400, 120, (sx, i) => {
      const x = sx + Math.sin(t / 500 + i) * 14;
      R(c, x, gy - 3, 6, 3, "#e8590c");
      R(c, x - 2, gy - 5, 2, 2, "#e8590c");
      R(c, x + 6, gy - 5, 2, 2, "#e8590c");
      R(c, x + 1, gy - 4, 1, 1, "#000");
      R(c, x + 4, gy - 4, 1, 1, "#000");
      R(c, x, gy, 1, 1, "#c2410c");
      R(c, x + 5, gy, 1, 1, "#c2410c");
      circle(c, sx + 40, gy - 1, 2, i % 2 ? "#ffc9c9" : "#fff0f6");
    });
    props(e, x0, x1 + 400, 30, (sx, i) => {
      const w = Math.round((Math.sin(t / 900 + i * 0.3) + 1) * 2);
      R(c, sx, gy + 14 + w, 22, 1, "rgba(255,255,255,0.75)");
    });
  },
];
