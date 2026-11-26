"use client";

import { useEffect, useState } from "react";
import { voyageRequest, localArchive, type LocalVoyage } from "@/lib/voyage-client";
import type { FinishedVoyage, VoyageHistory } from "@/lib/voyage";

const dateLabel = (day: string) =>
  new Date(`${day}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

interface Row {
  day: string;
  score: number;
  solved: number;
  niche: number;
  beat: number | null;
  rank: number | null;
  luffillion: boolean;
  laughtale: boolean;
}

function fromCaptain(history: VoyageHistory): Row[] {
  return history.voyages.map(v => ({
    day: v.day,
    score: v.score,
    solved: v.solved,
    niche: v.niche ?? (v.legs ? v.legs.filter(l => l.tier === "rare" || l.tier === "epic" || l.tier === "luffillion").length : 0),
    beat: v.beat ?? null,
    rank: v.rank ?? null,
    luffillion: Array.isArray(v.legs) ? v.legs.some(l => l.tier === "luffillion") : false,
    laughtale: v.score >= 500,
  }));
}

function fromLocal(list: LocalVoyage[]): Row[] {
  return list.map(v => ({ day: v.day, score: v.score, solved: v.solved, niche: v.niche, beat: null, rank: null, luffillion: v.luffillion, laughtale: v.laughtale }));
}

export default function ArchivePanel({
  captain,
  refreshKey,
}: {
  captain: { id: string; username: string } | null;
  refreshKey: string;
}) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let live = true;
    setLoading(true);
    setError("");
    setRows([]);
    if (!captain) {
      const list = localArchive();
      const local = fromLocal(list);
      setRows(local);
      setLoading(false);
      return () => { live = false; };
    }
    const fetchAll = async () => {
      const captainId = captain.id;
      const accumulated: FinishedVoyage[] = [];
      let before: string | null = null;
      for (let page = 0; page < 20; page++) {
        const query: string = before ? `?before=${encodeURIComponent(before)}` : "";
        const d: VoyageHistory = await voyageRequest<VoyageHistory>(`/api/account/history${query}`);
        accumulated.push(...d.voyages);
        if (!d.nextBefore) break;
        before = d.nextBefore;
      }
      return accumulated;
    };
    fetchAll()
      .then(voyages => {
        if (!live) return;
        const local = fromLocal([]); // placeholder kept for potential hybrid path
        setRows([...fromCaptain({ voyages, nextBefore: null, summary: { count: voyages.length, best: Math.max(0, ...voyages.map(v => v.score)), average: voyages.length ? Math.round(voyages.reduce((n, v) => n + v.score, 0) / voyages.length) : 0 } }), ...local]);
      })
      .catch(e => { if (live) setError(e instanceof Error ? e.message : "Couldn't load your archive."); })
      .finally(() => { if (live) setLoading(false); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captain?.id, refreshKey, retry]);

  const total = rows.length;
  const best = total ? Math.max(...rows.map(r => r.score)) : 0;
  const average = total ? Math.round(rows.reduce((n, r) => n + r.score, 0) / total) : 0;

  return (
    <div className="px-3 py-3">
      <div className="mb-2">
        <p className="text-base leading-tight tracking-[0.25em] text-cyan-200">ARCHIVE</p>
        <p className="text-sm text-slate-400">
          {captain
            ? `Every voyage by ${captain.username}. Each new day adds a row.`
            : "Every voyage played on this device. Each new day adds a row."}
        </p>
      </div>

      <div className="mb-2 grid grid-cols-3 gap-1.5 text-center">
        {[["VOYAGES", total], ["BEST", best], ["AVERAGE", average]].map(([l, v]) => (
          <div key={l} className="border border-white/10 bg-white/5 py-1">
            <p className="text-xs tracking-widest text-slate-400">{l}</p>
            <p className="text-lg text-white">{v}</p>
          </div>
        ))}
      </div>

      {error ? (
        <p role="alert" className="border-l-2 border-rose-400 bg-rose-400/5 px-2 py-1 text-sm text-rose-200">
          {error}{" "}
          <button type="button" onClick={() => setRetry(n => n + 1)} className="underline">Retry</button>
        </p>
      ) : loading ? (
        <p className="animate-pulse py-6 text-center text-base text-cyan-200">Opening your archive…</p>
      ) : !rows.length ? (
        <p className="border border-dashed border-slate-600 px-3 py-4 text-center text-base text-slate-400">
          No voyages yet. Finish today&apos;s daily challenge and your archive starts.
        </p>
      ) : (
        <ol className="divide-y divide-white/5">
          {rows.map(r => (
            <li key={r.day} className="flex items-center justify-between gap-2 py-2">
              <span className="min-w-0">
                <span className="block truncate text-base text-white">{dateLabel(r.day)}</span>
                <span className="block text-xs text-slate-500">
                  {r.solved}/7 answered
                  {r.niche > 0 ? ` · ${r.niche} niche` : ""}
                  {r.rank ? ` · rank #${r.rank}` : ""}
                  {r.beat !== null ? ` · beat ${r.beat}%` : ""}
                  {r.laughtale ? " · Laugh Tale" : ""}
                  {r.luffillion ? " · Luffillion" : ""}
                </span>
              </span>
              <span className="shrink-0 text-xl text-cyan-300">{r.score}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
