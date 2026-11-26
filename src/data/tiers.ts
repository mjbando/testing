export const TIER_ORDER = ["common", "uncommon", "rare", "epic", "luffillion"] as const;

export type Tier = (typeof TIER_ORDER)[number];

export const QUESTION_SECONDS = 25;
export const DAILY_QUESTION_COUNT = 7;
export const MAX_POINTS = 100 * DAILY_QUESTION_COUNT;

export interface TierFx {
  particles: number;
  spread: number; // px radius the particles travel
  size: number; // extra px size range
  particleDur: number; // seconds
  colors: string[];
  rings: number;
  flash: boolean;
  sunburst: boolean;
  shake: boolean;
  shakeMs: number;
  confetti: number;
  banner?: string;
  bannerColor?: string;
  duration: number; // total effect ms
}

export interface TierConfig {
  label: string;
  points: number;
  runMs: number; // how long Luffy takes to run his distance (lower = faster)
  badge: string; // tailwind classes for badge
  text: string; // tailwind text color
  emoji: string;
  blurb: string;
  fx: TierFx;
}

export const TIER_CONFIG: Record<Tier, TierConfig> = {
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
      colors: ["#fde68a", "#ffffff", "#fcd34d"],
      rings: 0,
      flash: false,
      sunburst: false,
      shake: false,
      shakeMs: 0,
      confetti: 0,
      duration: 1600,
    },
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
      colors: ["#34d399", "#6ee7b7", "#ffffff"],
      rings: 1,
      flash: false,
      sunburst: false,
      shake: false,
      shakeMs: 0,
      confetti: 0,
      banner: "NICE PULL!",
      bannerColor: "#6ee7b7",
      duration: 2000,
    },
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
      colors: ["#60a5fa", "#3b82f6", "#e0f2fe", "#93c5fd"],
      rings: 2,
      flash: true,
      sunburst: false,
      shake: true,
      shakeMs: 450,
      confetti: 0,
      banner: "RARE PULL!",
      bannerColor: "#93c5fd",
      duration: 2600,
    },
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
      colors: ["#c084fc", "#f472b6", "#fb923c", "#f0abfc"],
      rings: 2,
      flash: true,
      sunburst: true,
      shake: true,
      shakeMs: 600,
      confetti: 30,
      banner: "EPIC!",
      bannerColor: "#f0abfc",
      duration: 3200,
    },
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
      colors: ["#fde047", "#f43f5e", "#22d3ee", "#a3e635", "#c084fc", "#fb923c", "#ffffff"],
      rings: 3,
      flash: true,
      sunburst: true,
      shake: true,
      shakeMs: 800,
      confetti: 90,
      banner: "ONE IN A LUFFILLION!",
      bannerColor: "#fde047",
      duration: 4500,
    },
  },
};

export const TIER_LABELS: Record<Tier, string> = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  epic: "Epic",
  luffillion: "One in a Luffillion",
};
