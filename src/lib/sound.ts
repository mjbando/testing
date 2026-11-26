"use client";

import type { Tier } from "@/data/tiers";

const MUTE_KEY = "luffillion:muted";

let audioCtx: AudioContext | null = null;
let masterOut: GainNode | null = null;
let noiseBuffer: AudioBuffer | null = null;
let mutedState = false;
let muteLoaded = false;

function loadMute(): boolean {
  if (muteLoaded) return mutedState;
  muteLoaded = true;
  if (typeof window !== "undefined") {
    try {
      mutedState = localStorage.getItem(MUTE_KEY) === "1";
    } catch {
      mutedState = false;
    }
  }
  return mutedState;
}

export function isMuted(): boolean {
  return loadMute();
}

export function setMuted(muted: boolean): void {
  mutedState = muted;
  muteLoaded = true;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
    } catch {
      // ignore storage errors
    }
  }
  if (masterOut && audioCtx) {
    masterOut.gain.setTargetAtTime(muted ? 0 : 0.48, audioCtx.currentTime, 0.015);
  }
}

function getAudio(): { ctx: AudioContext; out: GainNode } | null {
  if (typeof window === "undefined" || loadMute()) return null;
  if (!audioCtx) {
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    try {
      audioCtx = new Ctor();
      const compressor = audioCtx.createDynamicsCompressor();
      compressor.threshold.value = -14;
      compressor.knee.value = 18;
      compressor.ratio.value = 6;
      compressor.attack.value = 0.005;
      compressor.release.value = 0.15;

      masterOut = audioCtx.createGain();
      masterOut.gain.value = 0.48;
      masterOut.connect(compressor);
      compressor.connect(audioCtx.destination);
    } catch {
      return null;
    }
  }
  if (audioCtx.state === "suspended") {
    void audioCtx.resume().catch(() => undefined);
  }
  if (!masterOut) return null;
  return { ctx: audioCtx, out: masterOut };
}

function getNoiseBuffer(ctx: AudioContext): AudioBuffer {
  if (noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate) return noiseBuffer;
  const length = ctx.sampleRate * 1.5;
  const buf = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  noiseBuffer = buf;
  return buf;
}

interface ToneOpts {
  freq: number;
  start?: number;
  dur: number;
  type?: OscillatorType;
  vol?: number;
  slideTo?: number;
  detune?: number;
  attack?: number;
  filterHz?: number;
}

function playTone(ctx: AudioContext, out: AudioNode, t0: number, opts: ToneOpts) {
  const start = t0 + (opts.start ?? 0);
  const attack = opts.attack ?? 0.008;
  const vol = opts.vol ?? 0.2;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = opts.type ?? "triangle";
  osc.frequency.setValueAtTime(opts.freq, start);
  if (opts.slideTo) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.slideTo), start + opts.dur);
  }
  if (opts.detune) osc.detune.setValueAtTime(opts.detune, start);

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(vol, start + Math.min(attack, opts.dur * 0.4));
  gain.gain.exponentialRampToValueAtTime(0.0001, start + opts.dur);

  if (opts.filterHz) {
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(opts.filterHz, start);
    osc.connect(filter);
    filter.connect(gain);
  } else {
    osc.connect(gain);
  }
  gain.connect(out);

  osc.start(start);
  osc.stop(start + opts.dur + 0.02);
}

function playNoise(
  ctx: AudioContext,
  out: AudioNode,
  t0: number,
  startOffset: number,
  dur: number,
  vol: number,
  filterType: BiquadFilterType,
  freqStart: number,
  freqEnd?: number,
) {
  const start = t0 + startOffset;
  const src = ctx.createBufferSource();
  src.buffer = getNoiseBuffer(ctx);

  const filter = ctx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.setValueAtTime(freqStart, start);
  if (freqEnd) {
    filter.frequency.exponentialRampToValueAtTime(Math.max(40, freqEnd), start + dur);
  }

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(vol, start + Math.min(0.02, dur * 0.3));
  gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

  src.connect(filter);
  filter.connect(gain);
  gain.connect(out);

  src.start(start);
  src.stop(start + dur + 0.02);
}

// =========================================================================
// UI Button & Game Event Sounds
// =========================================================================

/** Crisp retro pixel click for any standard button press */
export function playClick(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  playTone(a.ctx, a.out, t, { freq: 540, slideTo: 780, dur: 0.045, type: "triangle", vol: 0.16, attack: 0.003 });
  playTone(a.ctx, a.out, t, { freq: 1180, dur: 0.02, type: "square", vol: 0.05, attack: 0.002 });
}

/** Heroic anchor-lift jingle when clicking SET SAIL */
export function playSetSail(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  // Bright rising adventure triad: G4 -> C5 -> E5 -> G5 + C6 shimmer
  const notes = [
    { f: 392.0, s: 0.0, d: 0.13 },
    { f: 523.25, s: 0.08, d: 0.13 },
    { f: 659.25, s: 0.16, d: 0.15 },
    { f: 783.99, s: 0.24, d: 0.38 },
  ];
  for (const n of notes) {
    playTone(a.ctx, a.out, t, { freq: n.f, start: n.s, dur: n.d, type: "triangle", vol: 0.22 });
    playTone(a.ctx, a.out, t, { freq: n.f * 0.5, start: n.s, dur: n.d, type: "sawtooth", vol: 0.07, filterHz: 1400 });
  }
  playTone(a.ctx, a.out, t, { freq: 1046.5, start: 0.26, dur: 0.42, type: "sine", vol: 0.14 });
  playNoise(a.ctx, a.out, t, 0.22, 0.25, 0.05, "bandpass", 1600, 3400);
}

/** Forward chime when clicking NEXT or SEE RESULTS */
export function playNext(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  playTone(a.ctx, a.out, t, { freq: 587.33, start: 0, dur: 0.07, type: "triangle", vol: 0.18, attack: 0.004 });
  playTone(a.ctx, a.out, t, { freq: 880.0, start: 0.055, dur: 0.12, type: "triangle", vol: 0.2, attack: 0.004 });
}

/** Friendly double-chirp when accepting an auto-correct suggestion */
export function playSuggest(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  playTone(a.ctx, a.out, t, { freq: 698.46, start: 0, dur: 0.055, type: "square", vol: 0.09, filterHz: 2400 });
  playTone(a.ctx, a.out, t, { freq: 987.77, start: 0.05, dur: 0.09, type: "triangle", vol: 0.16 });
}

/** Short soft buzz on an incorrect guess */
export function playWrong(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  playTone(a.ctx, a.out, t, { freq: 200, slideTo: 135, dur: 0.16, type: "sawtooth", vol: 0.15, filterHz: 680 });
  playTone(a.ctx, a.out, t, { freq: 145, slideTo: 105, dur: 0.16, start: 0.02, type: "square", vol: 0.09, filterHz: 520 });
}

/** Subtle countdown tick during the final 5 seconds */
export function playTick(urgent: boolean): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  playTone(a.ctx, a.out, t, {
    freq: urgent ? 1080 : 820,
    dur: 0.03,
    type: "triangle",
    vol: urgent ? 0.11 : 0.07,
    attack: 0.002,
  });
}

/** Descending horn when the 25s timer expires */
export function playTimeout(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  const notes = [
    { f: 349.23, s: 0.0, d: 0.16 },
    { f: 311.13, s: 0.15, d: 0.16 },
    { f: 261.63, s: 0.3, d: 0.38 },
  ];
  for (const n of notes) {
    playTone(a.ctx, a.out, t, { freq: n.f, start: n.s, dur: n.d, type: "sawtooth", vol: 0.13, filterHz: 900 });
    playTone(a.ctx, a.out, t, { freq: n.f, start: n.s, dur: n.d, type: "triangle", vol: 0.12 });
  }
}

/** Brief triumphant horn when crossing into a new Saga */
export function playSaga(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  playTone(a.ctx, a.out, t, { freq: 587.33, start: 0, dur: 0.12, type: "triangle", vol: 0.16 });
  playTone(a.ctx, a.out, t, { freq: 880.0, start: 0.1, dur: 0.28, type: "triangle", vol: 0.2 });
  playTone(a.ctx, a.out, t, { freq: 440.0, start: 0.1, dur: 0.28, type: "sawtooth", vol: 0.06, filterHz: 1400 });
}

// =========================================================================
// Escalating Rarity Pull Fanfares (Common -> One in a Luffillion)
// =========================================================================

export function playPull(tier: Tier): void {
  const a = getAudio();
  if (!a) return;
  const { ctx, out } = a;
  const t = ctx.currentTime;

  if (tier === "common") {
    // 10 pts — simple, clean retro two-note chime (C5 -> E5)
    playTone(ctx, out, t, { freq: 523.25, start: 0.0, dur: 0.12, type: "triangle", vol: 0.2 });
    playTone(ctx, out, t, { freq: 659.25, start: 0.09, dur: 0.24, type: "triangle", vol: 0.22 });
    playTone(ctx, out, t, { freq: 659.25, start: 0.09, dur: 0.2, type: "sine", vol: 0.1 });
    return;
  }

  if (tier === "uncommon") {
    // 25 pts — bright upbeat 4-note emerald arpeggio (C5 -> E5 -> G5 -> C6)
    const arp = [523.25, 659.25, 783.99, 1046.5];
    arp.forEach((f, i) => {
      const start = i * 0.065;
      const dur = i === arp.length - 1 ? 0.36 : 0.14;
      playTone(ctx, out, t, { freq: f, start, dur, type: "triangle", vol: 0.22 });
      playTone(ctx, out, t, { freq: f, start, dur: dur * 0.7, type: "square", vol: 0.055, filterHz: 2600 });
    });
    // Light high sparkle
    playTone(ctx, out, t, { freq: 1567.98, start: 0.24, dur: 0.22, type: "sine", vol: 0.09 });
    return;
  }

  if (tier === "rare") {
    // 45 pts — energetic heroic sapphire riff + bass punch + shimmer whoosh
    playTone(ctx, out, t, { freq: 130.81, slideTo: 65.41, dur: 0.22, type: "sine", vol: 0.32, attack: 0.004 });
    playNoise(ctx, out, t, 0.0, 0.26, 0.08, "bandpass", 900, 3800);

    const lead = [
      { f: 523.25, s: 0.02, d: 0.1 },
      { f: 587.33, s: 0.09, d: 0.1 },
      { f: 659.25, s: 0.16, d: 0.11 },
      { f: 783.99, s: 0.24, d: 0.14 },
      { f: 1046.5, s: 0.34, d: 0.52 },
    ];
    for (const n of lead) {
      playTone(ctx, out, t, { freq: n.f, start: n.s, dur: n.d, type: "triangle", vol: 0.24 });
      playTone(ctx, out, t, { freq: n.f, start: n.s, dur: n.d, type: "sawtooth", vol: 0.08, filterHz: 2400, detune: 5 });
    }
    // Harmony chord on the peak
    playTone(ctx, out, t, { freq: 659.25, start: 0.34, dur: 0.5, type: "triangle", vol: 0.14 });
    playTone(ctx, out, t, { freq: 783.99, start: 0.34, dur: 0.5, type: "triangle", vol: 0.14 });
    // Sparkling high bells
    playTone(ctx, out, t, { freq: 1318.51, start: 0.44, dur: 0.25, type: "sine", vol: 0.11 });
    playTone(ctx, out, t, { freq: 1567.98, start: 0.52, dur: 0.32, type: "sine", vol: 0.12 });
    return;
  }

  if (tier === "epic") {
    // 75 pts — grand amethyst power fanfare: impact + sweeping arpeggio + brass chords + crystal bells
    playTone(ctx, out, t, { freq: 140, slideTo: 48, dur: 0.36, type: "sine", vol: 0.4, attack: 0.004 });
    playNoise(ctx, out, t, 0.0, 0.34, 0.12, "bandpass", 600, 5200);

    // Rapid soaring run
    const run = [392.0, 493.88, 587.33, 783.99, 987.77, 1174.66];
    run.forEach((f, i) => {
      playTone(ctx, out, t, { freq: f, start: 0.04 + i * 0.045, dur: 0.16, type: "square", vol: 0.075, filterHz: 3200 });
    });

    // Triumphant brass chord progression: F -> G -> C
    const chords = [
      { s: 0.28, d: 0.22, freqs: [349.23, 440.0, 523.25, 698.46] },
      { s: 0.48, d: 0.22, freqs: [392.0, 493.88, 587.33, 783.99] },
      { s: 0.68, d: 0.85, freqs: [523.25, 659.25, 783.99, 1046.5] },
    ];
    for (const ch of chords) {
      playTone(ctx, out, t, { freq: ch.freqs[0] * 0.5, start: ch.s, dur: ch.d, type: "triangle", vol: 0.24 });
      for (const f of ch.freqs) {
        playTone(ctx, out, t, { freq: f, start: ch.s, dur: ch.d, type: "sawtooth", vol: 0.09, filterHz: 2600, detune: -6 });
        playTone(ctx, out, t, { freq: f, start: ch.s, dur: ch.d, type: "sawtooth", vol: 0.09, filterHz: 2600, detune: 6 });
        playTone(ctx, out, t, { freq: f, start: ch.s, dur: ch.d, type: "triangle", vol: 0.12 });
      }
    }
    // Cascading crystal chimes over the finale
    [1318.51, 1567.98, 1975.53, 2093.0].forEach((f, i) => {
      playTone(ctx, out, t, { freq: f, start: 0.78 + i * 0.09, dur: 0.45, type: "sine", vol: 0.12 });
    });
    return;
  }

  // 100 pts — ONE IN A LUFFILLION! Legendary Pirate King multi-stage mega fanfare!
  // 1. Massive impact boom + golden riser
  playTone(ctx, out, t, { freq: 155, slideTo: 38, dur: 0.55, type: "sine", vol: 0.48, attack: 0.004 });
  playNoise(ctx, out, t, 0.0, 0.45, 0.15, "bandpass", 400, 6500);

  // 2. Two-octave rainbow glissando
  const gliss = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51, 1567.98, 2093.0];
  gliss.forEach((f, i) => {
    playTone(ctx, out, t, { freq: f, start: 0.03 + i * 0.032, dur: 0.18, type: "triangle", vol: 0.16 });
    playTone(ctx, out, t, { freq: f, start: 0.03 + i * 0.032, dur: 0.12, type: "square", vol: 0.06, filterHz: 4200 });
  });

  // 3. Heroic triumphant pirate anthem melody (G4 -> C5 -> E5 -> G5 -> A5 -> G5 -> C6!)
  const anthem = [
    { f: 392.0, s: 0.34, d: 0.14 },
    { f: 523.25, s: 0.46, d: 0.14 },
    { f: 659.25, s: 0.58, d: 0.16 },
    { f: 783.99, s: 0.72, d: 0.22 },
    { f: 880.0, s: 0.92, d: 0.16 },
    { f: 783.99, s: 1.06, d: 0.16 },
    { f: 1046.5, s: 1.2, d: 1.35 },
  ];
  for (const n of anthem) {
    playTone(ctx, out, t, { freq: n.f, start: n.s, dur: n.d, type: "sawtooth", vol: 0.13, filterHz: 3200, detune: -7 });
    playTone(ctx, out, t, { freq: n.f, start: n.s, dur: n.d, type: "sawtooth", vol: 0.13, filterHz: 3200, detune: 7 });
    playTone(ctx, out, t, { freq: n.f, start: n.s, dur: n.d, type: "triangle", vol: 0.18 });
  }

  // 4. Driving brass bass punches under the anthem
  playTone(ctx, out, t, { freq: 130.81, start: 0.34, dur: 0.36, type: "sawtooth", vol: 0.2, filterHz: 600 });
  playTone(ctx, out, t, { freq: 174.61, start: 0.72, dur: 0.42, type: "sawtooth", vol: 0.2, filterHz: 600 });
  playTone(ctx, out, t, { freq: 196.0, start: 1.06, dur: 0.18, type: "sawtooth", vol: 0.22, filterHz: 700 });

  // 5. Huge Cmaj9 victory finale chord + second sub-boom + cymbal crash
  playTone(ctx, out, t, { freq: 130.81, slideTo: 65.41, start: 1.2, dur: 1.25, type: "sine", vol: 0.42 });
  playNoise(ctx, out, t, 1.2, 0.85, 0.13, "highpass", 3200, 1200);
  const finaleChord = [261.63, 392.0, 523.25, 659.25, 783.99, 987.77, 1174.66];
  for (const f of finaleChord) {
    playTone(ctx, out, t, { freq: f, start: 1.2, dur: 1.45, type: "sawtooth", vol: 0.065, filterHz: 2800, detune: -8 });
    playTone(ctx, out, t, { freq: f, start: 1.2, dur: 1.45, type: "sawtooth", vol: 0.065, filterHz: 2800, detune: 8 });
    playTone(ctx, out, t, { freq: f, start: 1.2, dur: 1.45, type: "triangle", vol: 0.08 });
  }

  // 6. Celebratory firework crackles & glittering golden star bells
  const sparkles = [1567.98, 2093.0, 1975.53, 2349.32, 2637.02, 2093.0, 3135.96];
  sparkles.forEach((f, i) => {
    const st = 1.32 + i * 0.14;
    playTone(ctx, out, t, { freq: f, start: st, dur: 0.42, type: "sine", vol: 0.11 });
    if (i % 2 === 0) {
      playNoise(ctx, out, t, st, 0.09, 0.07, "bandpass", 4500, 1800);
    }
  });
}

/**
 * Loop soft pixel footsteps while Luffy is travelling. Each rarity gets a
 * shorter step interval so better pulls audibly make him run faster.
 * The returned cleanup stops the loop when the travel animation ends.
 */
export function startRunSound(tier: Tier | null): () => void {
  const a = getAudio();
  if (!a) return () => undefined;

  const { ctx, out } = a;
  const runBus = ctx.createGain();
  runBus.gain.value = 0.68;
  runBus.connect(out);

  const stepSeconds: Record<Tier, number> = {
    common: 0.34,
    uncommon: 0.275,
    rare: 0.215,
    epic: 0.16,
    luffillion: 0.115,
  };
  const interval = tier ? stepSeconds[tier] : 0.23;
  let nextStep = ctx.currentTime + 0.025;
  let count = 0;
  let stopped = false;

  const timer = window.setInterval(() => {
    if (stopped || ctx.state === "closed") return;
    const now = ctx.currentTime;
    const horizon = now + 0.1;
    if (nextStep < now) nextStep = now + 0.008;

    while (nextStep < horizon) {
      const alternate = count % 2;
      const when = nextStep;
      const thumpFreq = alternate === 0 ? 102 : 88;

      // Cushioned landing plus a light shoe scuff: a low thud and filtered pixel grit.
      playTone(ctx, runBus, when, {
        freq: thumpFreq,
        slideTo: alternate === 0 ? 54 : 48,
        dur: 0.085,
        type: "sine",
        vol: 0.12,
        attack: 0.003,
      });
      playNoise(ctx, runBus, when, 0, 0.052, 0.032, "bandpass", alternate === 0 ? 760 : 620, 360);
      playTone(ctx, runBus, when, {
        freq: alternate === 0 ? 248 : 205,
        dur: 0.03,
        type: "triangle",
        vol: 0.035,
        attack: 0.002,
      });

      count++;
      nextStep += interval;
    }
  }, 24);

  return () => {
    if (stopped) return;
    stopped = true;
    window.clearInterval(timer);
    const now = ctx.currentTime;
    runBus.gain.cancelScheduledValues(now);
    runBus.gain.setTargetAtTime(0, now, 0.018);
    window.setTimeout(() => runBus.disconnect(), 150);
  };
}

/** Short fanfare for an achievement unlocking. */
export function playAchievement(): void {
  const a = getAudio();
  if (!a) return;
  const t = a.ctx.currentTime;
  [523.25, 659.25, 783.99, 1046.5, 1567.98].forEach((f, i) => {
    playTone(a.ctx, a.out, t, { freq: f, start: i * 0.07, dur: i === 4 ? 0.55 : 0.18, type: "triangle", vol: 0.2 });
    playTone(a.ctx, a.out, t, { freq: f * 2, start: i * 0.07, dur: 0.12, type: "sine", vol: 0.07 });
  });
  playNoise(a.ctx, a.out, t, 0.28, 0.5, 0.04, "bandpass", 2400, 5200);
}
