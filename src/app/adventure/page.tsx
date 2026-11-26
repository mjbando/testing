import type { Metadata } from "next";
import Adventure from "@/components/adventure/Adventure";
import "./adventure.css";

export const metadata: Metadata = {title:"Grand Line Adventure · Luffillion",description:"A 100-level One Piece journey. Clear islands, conquer ten saga bosses, and earn the title Pirate King."};
export default function AdventurePage(){return <Adventure/>;}
