import { NextRequest } from "next/server";
import { currentCaptain, failure, privateJson, RequestProblem } from "@/lib/account-server";
import { matchView } from "@/lib/ranked-server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const captain = await currentCaptain(req);
    if (!captain) return privateJson({ activeMatch: null });
    const matchId = Number(req.nextUrl.searchParams.get("matchId") ?? "");
    const view = await matchView(captain.id, Number.isFinite(matchId) ? matchId : null);
    return privateJson({ activeMatch: view });
  } catch (err) { return failure(err); }
}
