import { NextRequest } from "next/server";
import { currentCaptain, failure, privateJson, RequestProblem } from "@/lib/account-server";
import { loadAchievements } from "@/lib/achievements-server";
import { equippedCharacterFor } from "@/lib/crew-server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) throw new RequestProblem(401, "Sign in to view your achievements.");
    const report = await loadAchievements(captain.id);
    return privateJson({ ...report, equippedCharacter: await equippedCharacterFor(captain.id) });
  } catch (err) { return failure(err); }
}
