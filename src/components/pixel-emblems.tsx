import { EMBLEM_SPRITES, type EmblemKind } from "@/data/achievement-emblems";
export type { EmblemKind } from "@/data/achievement-emblems";

export default function PixelEmblem({ kind, size = 40, className = "", dim = false }: {
  kind: EmblemKind;
  size?: number;
  className?: string;
  dim?: boolean;
}) {
  const sprite = EMBLEM_SPRITES[kind];
  return <svg viewBox="0 0 16 16" width={size} height={size} shapeRendering="crispEdges" aria-hidden="true" className={className}>
    <g opacity={dim ? 0.45 : 1}>
      {sprite.rows.flatMap((row, y) => [...row].map((pixel, x) => sprite.palette[pixel]
        ? <rect key={`${x}:${y}`} x={x} y={y} width={1} height={1} fill={sprite.palette[pixel]} /> : null))}
    </g>
  </svg>;
}
