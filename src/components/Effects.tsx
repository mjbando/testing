"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { TIER_CONFIG, type Tier } from "@/data/tiers";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
  dur: number;
  rot: number;
  star: boolean;
}

interface Confetti {
  id: number;
  left: number;
  sway: number;
  color: string;
  delay: number;
  dur: number;
}

// Full-screen celebration that scales with rarity: more particles, rings, flashes,
// shake, sunbursts and banners as the answer gets rarer.
export default function Effects({ tier }: { tier: Tier }) {
  const fx = TIER_CONFIG[tier].fx;
  const [visible, setVisible] = useState(true);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: fx.particles }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const dist = fx.spread * (0.45 + Math.random() * 0.55);
      return {
        id: i,
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        color: fx.colors[i % fx.colors.length],
        size: 5 + Math.random() * fx.size,
        delay: Math.random() * 0.25,
        dur: fx.particleDur * (0.7 + Math.random() * 0.6),
        rot: Math.random() * 720 - 360,
        star: tier === "uncommon" || tier === "epic" || tier === "luffillion" ? i % 3 === 0 : false,
      };
    });
  }, [fx, tier]);

  const confetti = useMemo<Confetti[]>(() => {
    return Array.from({ length: fx.confetti }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      sway: Math.random() * 160 - 80,
      color: fx.colors[i % fx.colors.length],
      delay: Math.random() * 0.8,
      dur: 2.2 + Math.random() * 1.6,
    }));
  }, [fx, tier]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), fx.duration);
    return () => clearTimeout(t);
  }, [fx.duration]);

  useEffect(() => {
    if (!fx.shake) return;
    const el = document.getElementById("game-root");
    el?.classList.add("fx-shake");
    const t = setTimeout(() => el?.classList.remove("fx-shake"), fx.shakeMs);
    return () => {
      clearTimeout(t);
      el?.classList.remove("fx-shake");
    };
  }, [fx.shake, fx.shakeMs]);

  if (!visible) return null;

  return (
    <div className="fx-root" aria-hidden="true">
      {fx.flash && <div className={`fx-flash fx-flash-${tier}`} />}
      {fx.sunburst && <div className="fx-sunburst" />}
      {Array.from({ length: fx.rings }, (_, i) => (
        <div
          key={`ring-${i}`}
          className="fx-ring"
          style={{ animationDelay: `${i * 0.18}s`, borderColor: fx.colors[i % fx.colors.length] }}
        />
      ))}
      {particles.map((p) => (
        <span
          key={p.id}
          className={`fx-particle ${p.star ? "fx-star" : ""}`}
          style={
            {
              width: p.size,
              height: p.size,
              background: p.color,
              color: p.color,
              "--x": `${p.x}px`,
              "--y": `${p.y}px`,
              "--rot": `${p.rot}deg`,
              "--dur": `${p.dur}s`,
              "--delay": `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
      {confetti.map((c) => (
        <span
          key={`c-${c.id}`}
          className="fx-confetti"
          style={
            {
              left: `${c.left}%`,
              background: c.color,
              "--sway": `${c.sway}px`,
              "--dur": `${c.dur}s`,
              "--delay": `${c.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
      {fx.banner && (
        <div className="fx-banner" style={{ color: fx.bannerColor }}>
          {fx.banner}
        </div>
      )}
    </div>
  );
}
