import { NextRequest } from "next/server";
import { currentCaptain, failure, privateJson, readMutation, RequestProblem } from "@/lib/account-server";
import { readCheckpoint, saveCheckpoint } from "@/lib/voyage-server";
import { firstOpen } from "@/lib/voyage";
import { DAILY_QUESTION_COUNT } from "@/data/tiers";

export const dynamic = "force-dynamic";

export async function PUT(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) throw new RequestProblem(401, "Sign in again to sync this voyage.");
    const body = await readMutation(req, 65536);
    if (body.accountId !== captain.id) throw new RequestProblem(409, "The signed-in account changed. Reload the game.");
    const checkpoint = readCheckpoint(body.progress);
    if (firstOpen(checkpoint) === DAILY_QUESTION_COUNT) throw new RequestProblem(400, "Submit the finished voyage instead.");
    return privateJson(await saveCheckpoint(captain.id, checkpoint));
  } catch (err) { return failure(err); }
}
