import type { Metadata } from "next";
import Ranked from "@/components/Ranked";

export const metadata: Metadata = {
  title: "Ranked Battle · Luffillion",
  description: "Find another captain and battle for supremacy in a niche One Piece knowledge showdown. Climb from Bronze to Legend.",
};

export default function RankedPage() {
  return <Ranked />;
}
