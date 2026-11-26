"use client";

import { memo } from "react";
import { runnerSprite } from "./pixel/runners";
import type { CharacterId } from "@/data/playable-characters";

function CharacterPortrait({ characterId, size = 64, dim = false, className = "" }: {
  characterId: CharacterId;
  size?: number;
  dim?: boolean;
  className?: string;
}) {
  const sprite = runnerSprite(characterId);
  const left = Math.floor((32 - sprite.width) / 2), top = 31 - sprite.height;
  return <svg viewBox="0 0 32 32" width={size} height={size} shapeRendering="crispEdges" aria-hidden="true"
    className={className} data-portrait={characterId}>
    <g opacity={dim ? 0.5 : 1}>
      {sprite.rows.flatMap((row, y) => [...row].map((pixel, x) => sprite.palette[pixel]
        ? <rect key={`${x}:${y}`} x={left + x} y={top + y} width={1} height={1} fill={sprite.palette[pixel]} /> : null))}
    </g>
  </svg>;
}
export default memo(CharacterPortrait);
