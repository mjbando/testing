import Game from "@/components/Game";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#1e293b_0%,_#0b1020_55%,_#05070f_100%)] text-slate-100">
      <Game />
    </main>
  );
}
