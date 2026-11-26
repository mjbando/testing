import { NextRequest } from "next/server";
import { currentCaptain, ensureGuest, failure, privateJson, readMutation, RequestProblem } from "@/lib/account-server";
import { adventureAction, readAdventure } from "@/lib/adventure-server";
import { equippedCharacterFor } from "@/lib/crew-server";

export const dynamic="force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const captain=await currentCaptain(req);
    const result=await readAdventure(captain?.id??null,req.nextUrl.searchParams.get("attempt"));
    const res=privateJson({...result,captain,equippedCharacter:captain?await equippedCharacterFor(captain.id):"luffy",serverNow:Date.now()});
    ensureGuest(req,res);
    return res;
  } catch(error){return failure(error);}
}
export async function POST(req: NextRequest) {
  try {
    const captain=await currentCaptain(req);
    if (!captain) throw new RequestProblem(401,"Sign in to save your Adventure progress and unlock islands.");
    const body=await readMutation(req,4096);
    if (body.accountId!==captain.id) throw new RequestProblem(409,"Your account changed. Reload before continuing.");
    const result=await adventureAction(captain.id,body);
    return privateJson({...result,captain,equippedCharacter:await equippedCharacterFor(captain.id),serverNow:Date.now()});
  } catch(error){return failure(error);}
}
