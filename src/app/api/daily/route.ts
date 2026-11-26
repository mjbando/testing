import { NextRequest } from "next/server";
import { getDailyRun, msUntilNextDay, tierCounts, todayKey } from "@/lib/daily";
import { QUESTION_SECONDS, MAX_POINTS } from "@/data/tiers";
import { currentCaptain, ensureGuest, failure, guestId, privateJson } from "@/lib/account-server";
import { dailySave, ownerOf } from "@/lib/voyage-server";

import { loadAchievements } from "@/lib/achievements-server";
import { equippedCharacterFor } from "@/lib/crew-server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const now = new Date(), day = todayKey(now);
    const captain = await currentCaptain(req);
    const awards = captain ? await loadAchievements(captain.id) : null;
    const equippedCharacter = captain ? await equippedCharacterFor(captain.id) : "luffy";
    const save = await dailySave(day, ownerOf(captain?.id ?? null, guestId(req)));
    const questions = getDailyRun(day).map((q, index) => ({ index, id: q.id, prompt: q.prompt, hint: q.hint, counts: tierCounts(q) }));
    // Only the current player's submitted answers are included, never the answer bank.
    const res = privateJson({ day, runId: day, questions, seconds: QUESTION_SECONDS, maxPoints: MAX_POINTS,
      serverNow: now.getTime(), nextRunInMs: msUntilNextDay(now), captain, equippedCharacter, newlyUnlocked: awards?.newlyUnlocked ?? [], ...save });
    ensureGuest(req, res);
    return res;
  } catch (err) { return failure(err); }
}
