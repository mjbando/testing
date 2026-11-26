import type { Progress } from "./voyage";

export function voyageHeaders(legacy = false): Record<string, string> {
  const headers: Record<string, string> = {};
  if (window.self !== window.top) headers["x-voyage-embedded"] = "1";
  if (legacy) {
    try {
      const old = localStorage.getItem("luffillion:player");
      if (old) headers["x-voyage-legacy-guest"] = old;
    } catch { /* Guest storage may be disabled. */ }
  }
  return headers;
}

export async function voyageRequest<T>(path: string, method: "GET" | "POST" | "PUT" = "GET", body?: unknown, signal?: AbortSignal): Promise<T> {
  const res = await fetch(path, { method, signal, credentials: "same-origin", cache: "no-store",
    headers: { ...voyageHeaders(path === "/api/daily"), ...(body === undefined ? {} : { "Content-Type": "application/json" }) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(typeof data.error === "string" ? data.error : "Couldn't reach the logbook. Try again.");
  return data as T;
}

export function checkpointBody(p: Progress) {
  return { day: p.day, ids: p.ids, q: Object.fromEntries(Object.entries(p.q).map(([i, s]) => [i, {
    started: s.started, status: s.status, answer: s.answer, attempts: s.attempts,
    wrong: s.wrong.slice(0, 24).map(w => w.slice(0, 80)),
  }])) };
}

const key = (day: string, owner?: string) => owner ? `luffillion:captain:${owner}:${day}` : `luffillion:daily:${day}`;
export function readLocalRun(day: string, ids: string[], owner?: string): Progress | null {
  try {
    const raw = (owner ? sessionStorage : localStorage).getItem(key(day, owner));
    if (!raw) return null;
    const p = JSON.parse(raw) as Progress;
    return p.day === day && p.q && typeof p.q === "object" && Array.isArray(p.runs) && p.ids?.join() === ids.join() ? p : null;
  } catch { return null; }
}
export function cacheRun(progress: Progress, owner?: string) {
  try { (owner ? sessionStorage : localStorage).setItem(key(progress.day, owner), JSON.stringify(progress)); }
  catch { /* Account saves still work without a browser cache. */ }
}
export function clearCaptainCache(owner: string) {
  try {
    const prefix = `luffillion:captain:${owner}:`;
    for (const k of Object.keys(sessionStorage)) if (k.startsWith(prefix)) sessionStorage.removeItem(k);
  } catch { /* Nothing to clear. */ }
}
export function clearLinkedGuest(day: string) {
  try {
    localStorage.removeItem(key(day));
    localStorage.removeItem(`luffillion-pos:${day}`);
    localStorage.removeItem("luffillion:player");
  } catch { /* Nothing to clear. */ }
}

export interface LocalVoyage { day: string; score: number; solved: number; niche: number; luffillion: boolean; laughtale: boolean; }
// Guests keep their completed daily runs in browser storage; this reads them back.
export function localArchive(): LocalVoyage[] {
  const out: LocalVoyage[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key?.startsWith("luffillion:daily:")) continue;
      const p = JSON.parse(localStorage.getItem(key) ?? "{}") as Progress;
      if (p.day && p.q) {
        const settled = Object.values(p.q).filter(s => s?.status === "solved");
        const score = settled.reduce((n, s) => n + (s.points ?? 0), 0);
        const niche = settled.filter(s => s.tier === "rare" || s.tier === "epic" || s.tier === "luffillion").length;
        out.push({ day: p.day, score, solved: settled.length, niche, luffillion: settled.some(s => s.tier === "luffillion"), laughtale: score >= 500 });
      }
    }
  } catch { /* private browsing / storage errors */ }
  return out.sort((a, b) => b.day.localeCompare(a.day));
}
