"use client";

import { useEffect, useRef } from "react";
import { JOURNEY_MAX, SAGAS, SAGA_LENGTH, sagaIndexAt } from "@/data/arcs";
import { startRunSound } from "@/lib/sound";
import type { Tier } from "@/data/tiers";
import { drawDust, drawGoldHat, drawSprite, type Ctx } from "./pixel/art";
import { runnerSprite } from "./pixel/runners";
import { characterById, DEFAULT_CHARACTER, type CharacterId } from "@/data/playable-characters";
import { SAGA_DETAILS, SAGA_SCENES, drawSignpost, type Env } from "./pixel/sagas";

export interface RunSignal {
  id: number;
  to: number; // journey points Luffy runs to (cumulative score)
  ms: number; // run duration; rarer tiers are faster
  tier: Tier | null; // null = no points (e.g. the last question timed out)
  final?: boolean; // the day's last question: longer victory run + celebration
}

export interface WorldStatus {
  pct: number;
  arc: string;
  saga: number;
  running: boolean;
}

interface Props {
  signal: RunSignal | null;
  storageKey?: string; // persists Luffy's resting spot so he can never lose ground
  initialPos: number; // where Luffy currently stands (saved cumulative score); he never moves back
  characterId?: CharacterId;
  goldHat?: boolean; // earned upon landing a One in a Luffillion answer for this run
  onStatus?: (status: WorldStatus) => void;
}

const PX = 4; // CSS pixels per art pixel
const PPP = 12; // art pixels per journey point
const MARGIN = 60;
const worldX = (p: number) => MARGIN + p * PPP;
const WORLD_END = worldX(JOURNEY_MAX) + 400;

interface Dust {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const smooth = (x: number) => {
  const v = Math.max(0, Math.min(1, x));
  return v * v * (3 - 2 * v);
};

// Full-screen pixel world. Luffy's position is cumulative across the day:
// each correct answer moves him forward by the points earned, through 12 sagas.
export default function PixelWorld({ signal, initialPos, goldHat = false, characterId = DEFAULT_CHARACTER, onStatus, storageKey }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const runRef = useRef({ from: initialPos, to: initialPos, start: 0, dur: 1, running: false, pos: initialPos });
  const statusRef = useRef(onStatus);
  useEffect(() => {
    statusRef.current = onStatus;
  }, [onStatus]);
  const characterRef = useRef(characterId);
  useEffect(() => { characterRef.current = characterId; }, [characterId]);
  const goldHatRef = useRef(goldHat);
  useEffect(() => {
    goldHatRef.current = goldHat;
  }, [goldHat]);

  // Luffy's resting spot always follows the saved score and only ever moves forward.
  const floorRef = useRef(initialPos);
  const restRef = useRef(initialPos); // last place Luffy stood still
  useEffect(() => {
    if (!storageKey) return;
    const saved = Number(localStorage.getItem(storageKey) ?? "0");
    if (Number.isFinite(saved) && saved > 0) {
      floorRef.current = Math.max(floorRef.current, saved);
      restRef.current = Math.max(restRef.current, saved);
    }
  }, [storageKey]);
  const finalRef = useRef({ pending: false, since: 0 });
  useEffect(() => {
    floorRef.current = Math.max(floorRef.current, initialPos);
  }, [initialPos]);

  // A correct answer: run forward from where Luffy stands to the new total.
  // Footsteps run at a pace set by rarity and stop with the travel animation.
  useEffect(() => {
    if (!signal) return;
    const r = runRef.current;
    // Start from wherever Luffy actually got to — never from the beginning.
    const from = Math.max(r.pos, restRef.current);
    const to = Math.min(JOURNEY_MAX, Math.max(from, signal.to));
    floorRef.current = Math.max(floorRef.current, to);
    // Always animate: even with no distance left Luffy jogs, and the finale lasts longer.
    const dur = signal.final ? Math.max(2600, signal.ms * 1.4) : signal.ms;
    runRef.current = { from, to, start: performance.now(), dur, running: true, pos: from };
    finalRef.current = { pending: !!signal.final, since: 0 };

    const stopRunSound = startRunSound(signal.tier);
    const stopTimer = window.setTimeout(stopRunSound, dur + 100);
    return () => {
      window.clearTimeout(stopTimer);
      stopRunSound();
    };
  }, [signal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let cam = -1;
    let last = "";
    const dust: Dust[] = [];

    const resize = () => {
      canvas.width = Math.ceil(window.innerWidth / PX);
      canvas.height = Math.ceil(window.innerHeight / PX);
      ctx.imageSmoothingEnabled = false;
      cam = -1;
    };
    resize();
    window.addEventListener("resize", resize);

    const frame = (t: number) => {
      const r = runRef.current;
      if (r.running) {
        const p = Math.min(1, (t - r.start) / r.dur);
        const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        r.pos = r.from + (r.to - r.from) * eased;
        if (p >= 1) {
          r.running = false;
          if (finalRef.current.pending) finalRef.current = { pending: false, since: t };
        }
      }
      // Never fall behind the saved position (e.g. between questions or after a reload).
      if (!r.running && r.pos < floorRef.current) {
        r.pos = floorRef.current;
        r.from = r.to = r.pos;
      }
      if (!r.running && r.pos > restRef.current + 0.01) {
        restRef.current = r.pos;
        if (storageKey) localStorage.setItem(storageKey, String(r.pos));
      }

      const c = ctx as Ctx;
      const W = canvas.width;
      const H = canvas.height;
      const gy = Math.round(H * 0.74);
      const lx = worldX(r.pos);

      const target = Math.max(0, Math.min(lx - W * 0.3, WORLD_END - W));
      cam = cam < 0 ? target : cam + (target - cam) * 0.12;
      const env: Env = { c, W, H, gy, cam, t };

      // --- Each saga is drawn entirely inside its own stretch of the world:
      //     sky, backdrop, ground and details are all clipped to the segment, so
      //     sagas never blend into each other.
      for (let k = 0; k < SAGAS.length; k++) {
        const x0 = k === 0 ? -WORLD_END : worldX(SAGAS[k].at);
        const x1 = k === SAGAS.length - 1 ? WORLD_END * 2 : worldX(SAGAS[k].at + SAGA_LENGTH);
        const sx0 = Math.max(0, Math.round(x0 - cam));
        const sx1 = Math.min(W, Math.round(x1 - cam));
        if (sx1 <= 0 || sx0 >= W) continue;
        c.save();
        c.beginPath();
        c.rect(sx0, 0, sx1 - sx0, H);
        c.clip();
        SAGA_SCENES[k].sky(env);
        SAGA_SCENES[k].far(env);
        SAGA_SCENES[k].near(env, Math.max(x0, 0), x1);
        SAGA_DETAILS[k](env, Math.max(x0, 0), x1);
        c.restore();
      }

      // --- Saga signposts at each border.
      for (let k = 1; k < SAGAS.length; k++) {
        const sx = Math.round(worldX(SAGAS[k].at) - cam);
        if (sx < -20 || sx > W + 20) continue;
        drawSignpost(c, sx, gy, k + 1, r.pos >= SAGAS[k].at, t);
      }

      // The equipped character changes live; its appearance never restarts the run.
      const sprite = runnerSprite(characterRef.current, r.running, t);
      const sx = Math.round(lx - cam - sprite.width / 2);
      const celebrating = !r.running && finalRef.current.since > 0;
      const hop = celebrating ? -Math.round(Math.abs(Math.sin((t - finalRef.current.since) / 180)) * 8) : 0;
      const bob = r.running || celebrating ? 0 : Math.sin(t / 500) > 0.5 ? -1 : 0;
      const sy = gy - sprite.height + bob + hop;
      if (celebrating) {
        // victory sparkles + a little shadow under the hop
        c.fillStyle = "rgba(0,0,0,0.25)";
        c.fillRect(sx + 3, gy - 1, 10 + hop / 2, 1);
        for (let k = 0; k < 10; k++) {
          const a = (t / 400 + k * 0.63) % (Math.PI * 2);
          const rr = 14 + Math.sin(t / 250 + k) * 4;
          c.fillStyle = ["#ffd43b", "#ffffff", "#ff6b6b", "#74c0fc"][k % 4];
          c.fillRect(Math.round(sx + 8 + Math.cos(a) * rr), Math.round(sy + 6 + Math.sin(a) * rr * 0.7), 2, 2);
        }
      }
      if (r.running) {
        const speed = (r.to - r.from) / Math.max(1, r.dur);
        const lines = speed > 0.035 ? 6 : speed > 0.02 ? 4 : 3;
        for (let k = 0; k < lines; k++) {
          const off = ((t / 25 + k * 7) % 18) + 6;
          c.fillStyle = "rgba(255,255,255,0.75)";
          c.fillRect(Math.round(sx - off), sy + 3 + k * 2, 6, 1);
        }
        if (Math.random() < 0.7) {
          dust.push({ x: sx + 5, y: gy - 2, vx: -0.4 - Math.random() * 0.8, vy: -Math.random() * 0.5, life: 24 });
        }
      }
      for (let i = dust.length - 1; i >= 0; i--) {
        const d = dust[i];
        d.x += d.vx;
        d.y += d.vy;
        d.life -= 1;
        if (d.life <= 0) dust.splice(i, 1);
        else drawDust(c, d);
      }
      drawSprite(c, sprite.rows, sx, sy, sprite.palette);
      if (goldHatRef.current) drawGoldHat(c, sx + sprite.goldHat.x, sy + sprite.goldHat.y, t);

      // --- Throttled HUD updates.
      const idx = sagaIndexAt(r.pos);
      const pct = Math.round((r.pos / JOURNEY_MAX) * 100);
      const key = `${pct}|${idx}|${r.running}`;
      if (key !== last) {
        last = key;
        statusRef.current?.({ pct, arc: SAGAS[idx].name, saga: idx, running: r.running });
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-screen w-screen"
      style={{ imageRendering: "pixelated" }}
      aria-label={`${characterById(characterId).name}'s journey through the sagas of One Piece`}
      data-character={characterId}
      data-gold-hat={goldHat}
    />
  );
}
