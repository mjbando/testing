import { boolean, index, integer, jsonb, pgTable, primaryKey, serial, text, timestamp, uniqueIndex, uuid, varchar } from "drizzle-orm/pg-core";
import type { Progress, VoyageLeg } from "@/lib/voyage";
import type { AdventureState, AdventureStatus } from "@/lib/adventure-types";

export const solves = pgTable("solves", {
  id: serial("id").primaryKey(),
  dayKey: varchar("day_key", { length: 10 }).notNull(),
  questionId: varchar("question_id", { length: 64 }).notNull(),
  answer: varchar("answer", { length: 160 }).notNull(),
  tier: varchar("tier", { length: 20 }).notNull(),
  points: integer("points").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [index("solves_day_question_idx").on(t.dayKey, t.questionId)]);

export const accounts = pgTable("captain_accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  username: varchar("username", { length: 24 }).notNull(),
  usernameKey: varchar("username_key", { length: 24 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  equippedCharacter: varchar("equipped_character", { length: 32 }).notNull().default("luffy"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const sessions = pgTable("captain_sessions", {
  tokenHash: varchar("token_hash", { length: 64 }).primaryKey(),
  accountId: uuid("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
}, (t) => [index("captain_sessions_expiry_idx").on(t.expiresAt)]);

export const authWindows = pgTable("captain_auth_windows", {
  bucket: varchar("bucket", { length: 64 }).primaryKey(),
  count: integer("count").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
}, (t) => [index("captain_auth_window_expiry_idx").on(t.expiresAt)]);

export const checkpoints = pgTable("voyage_checkpoints", {
  accountId: uuid("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  dayKey: varchar("day_key", { length: 10 }).notNull(),
  progress: jsonb("progress").$type<Progress>().notNull(),
}, (t) => [primaryKey({ columns: [t.accountId, t.dayKey] })]);

export const runs = pgTable("runs", {
  id: serial("id").primaryKey(),
  dayKey: varchar("day_key", { length: 10 }).notNull(),
  playerId: varchar("player_id", { length: 64 }).notNull(),
  accountId: uuid("account_id").references(() => accounts.id, { onDelete: "cascade" }),
  legs: jsonb("legs").$type<VoyageLeg[]>(),
  score: integer("score").notNull(),
  solved: integer("solved").notNull(),
  niche: integer("niche"),
  mistakes: integer("mistakes"),
  beat: integer("beat"),
  rank: integer("rank"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [
  uniqueIndex("runs_day_player_idx").on(t.dayKey, t.playerId),
  uniqueIndex("runs_account_day_idx").on(t.accountId, t.dayKey),
  index("runs_day_score_idx").on(t.dayKey, t.score),
]);

// Cumulative bounty ledger. One row per account, plus one gain row per day, so a
// daily voyage can never be re-awarded by a repeated or backfilled completion.
export const bounties = pgTable("bounties", {
  accountId: uuid("account_id").primaryKey().references(() => accounts.id, { onDelete: "cascade" }),
  total: integer("total").notNull().default(0),
  lastDay: varchar("last_day", { length: 10 }),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
export const bountyGains = pgTable("bounty_gains", {
  accountId: uuid("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  dayKey: varchar("day_key", { length: 10 }).notNull(),
  amount: integer("amount").notNull(),
}, (t) => [primaryKey({ columns: [t.accountId, t.dayKey] })]);

export const achievementUnlocks = pgTable("achievement_unlocks", {
  accountId: uuid("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  achievementId: varchar("achievement_id", { length: 48 }).notNull(),
  unlockedAt: timestamp("unlocked_at", { withTimezone: true }).defaultNow().notNull(),
}, (t) => [primaryKey({ columns: [t.accountId, t.achievementId] })]);

// Adventure is independent of daily runs, daily ranks, and daily streaks.
export const adventureProgress = pgTable("adventure_progress", {
  accountId: uuid("account_id").primaryKey().references(() => accounts.id, { onDelete: "cascade" }),
  completed: integer("completed").notNull().default(0),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
export const adventureClears = pgTable("adventure_clears", {
  accountId: uuid("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  level: integer("level").notNull(),
  bestScore: integer("best_score").notNull(),
  clearedAt: timestamp("cleared_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.accountId, t.level] })]);
export const adventureAttempts = pgTable("adventure_attempts", {
  id: uuid("id").defaultRandom().primaryKey(),
  accountId: uuid("account_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  level: integer("level").notNull(),
  status: varchar("status", { length: 16 }).$type<AdventureStatus>().notNull().default("active"),
  state: jsonb("state").$type<AdventureState>().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("adventure_attempt_owner_status_idx").on(t.accountId, t.status)]);

export const rankedPlayers = pgTable("ranked_players", {
  accountId: uuid("account_id").primaryKey().references(() => accounts.id, { onDelete: "cascade" }),
  rating: integer("rating").notNull().default(0),
  wins: integer("wins").notNull().default(0),
  losses: integer("losses").notNull().default(0),
  draws: integer("draws").notNull().default(0),
  streak: integer("streak").notNull().default(0),
  bestStreak: integer("best_streak").notNull().default(0),
  lastMatchId: integer("last_match_id"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
export const rankedQueue = pgTable("ranked_queue", {
  accountId: uuid("account_id").primaryKey().references(() => accounts.id, { onDelete: "cascade" }),
  joinedAt: timestamp("joined_at", { withTimezone: true }).notNull().defaultNow(),
});
export interface RankedMatchState {
  rounds: {
    questionIds: string[];
    livesA: number;
    livesB: number;
    scoreA: number;
    scoreB: number;
    startedAt: number; // when the current round began; advances on round close
    answersA: Record<number, { points: number; tier: string; at: number }>;
    answersB: Record<number, { points: number; tier: string; at: number }>;
    closed: number[]; // rounds resolved so far
    ratingA: number | null; // snapshotted on finish
    ratingB: number | null;
    deltaA: number | null;
    deltaB: number | null;
    streakAfterA: number;
    streakAfterB: number;
  };
}
export const rankedMatches = pgTable("ranked_matches", {
  id: serial("id").primaryKey(),
  accountA: uuid("account_a_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  accountB: uuid("account_b_id").notNull().references(() => accounts.id, { onDelete: "cascade" }),
  ratingA: integer("rating_a").notNull().default(0),
  ratingB: integer("rating_b").notNull().default(0),
  state: jsonb("state").$type<RankedMatchState>().notNull(),
  index: integer("index").notNull(), // round the match is on (or total when done)
  livesA: integer("lives_a").notNull().default(2),
  livesB: integer("lives_b").notNull().default(2),
  scoreA: integer("score_a").notNull().default(0),
  scoreB: integer("score_b").notNull().default(0),
  status: varchar("status", { length: 8 }).notNull().default("active"),
  winner: uuid("winner").references(() => accounts.id, { onDelete: "set null" }),
  draw: boolean("draw").notNull().default(false),
  deltaA: integer("delta_a"),
  deltaB: integer("delta_b"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  finishedAt: timestamp("finished_at", { withTimezone: true }),
}, (t) => [
  index("ranked_matches_a_idx").on(t.accountA, t.status),
  index("ranked_matches_b_idx").on(t.accountB, t.status),
]);
