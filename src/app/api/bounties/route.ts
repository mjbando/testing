import { NextRequest } from "next/server";
import { db } from "@/db";
import { currentCaptain, failure, privateJson } from "@/lib/account-server";
import { bountyBoard } from "@/lib/bounty-server";
import { todayKey } from "@/lib/daily";

export const dynamic = "force-dynamic";

// Top 50 captains by bounty. Signed-in captains also get their own total, today's
// gain and rank; guests may view the public board but are not credited anything.
export async function GET(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    const { top, you } = await bountyBoard(db, captain?.id ?? null, todayKey());
    return privateJson({ top, you, today: todayKey(), total: top.length });
  } catch (err) {
    return failure(err);
  }
}
