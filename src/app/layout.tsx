import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource/vt323/400.css";
import "@fontsource/pixelify-sans/500.css";
import "@fontsource/pixelify-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luffillion: One Piece Trivia",
  description: "Seven random One Piece questions per run. The nichest answers score the most, and Luffy runs the whole series.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#05070f] font-pixel text-slate-100 antialiased">{children}</body>
    </html>
  );
}
