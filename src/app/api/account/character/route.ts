import { NextRequest } from "next/server";
import { currentCaptain, failure, privateJson, readMutation, RequestProblem } from "@/lib/account-server";
import { equipCharacter } from "@/lib/crew-server";

export const dynamic = "force-dynamic";

export async function PUT(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) throw new RequestProblem(401, "Sign in to equip an unlocked character.");
    const body = await readMutation(req);
    if (body.accountId !== captain.id) throw new RequestProblem(409, "Your account changed. Reload before selecting a character.");
    return privateJson(await equipCharacter(captain.id, body.characterId));
  } catch (error) { return failure(error); }
}
