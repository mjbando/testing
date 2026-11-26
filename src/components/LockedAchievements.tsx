"use client";

import { useEffect, useRef } from "react";
import PixelEmblem from "./pixel-emblems";
import { playClick } from "@/lib/sound";

export default function LockedAchievements({ onSignIn, onClose }: { onSignIn: () => void; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialog.current;
    el?.showModal();
    return () => el?.close();
  }, []);

  return (
    <dialog
      ref={dialog}
      aria-labelledby="locked-title"
      onCancel={e => {
        e.preventDefault();
        playClick();
        onClose();
      }}
      onClick={e => {
        if (e.target === e.currentTarget) {
          playClick();
          onClose();
        }
      }}
      className="locked-dialog"
    >
      <div className="px-scan border border-[#3a2f14] border-t-[3px] border-t-amber-300 bg-[#0d182b] text-center text-slate-100">
        <div className="px-6 py-7">
          <PixelEmblem kind="seal" size={44} className="mx-auto" />
          <p className="mt-3 text-xl tracking-[0.3em] text-amber-300">LOCKED</p>
          <h2 id="locked-title" className="mt-1 font-pixel-display text-2xl font-bold text-white">
            A captain needs an account
          </h2>
          <p id="locked-description" className="mt-2 text-lg leading-tight text-slate-300">
            Sign in or create a free account to unlock and save all 15 achievements. Your earned pixel emblems will follow you across devices.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                playClick();
                onSignIn();
              }}
              className="px-btn h-11 bg-amber-400 text-lg tracking-[0.2em] text-amber-950 hover:bg-amber-300"
            >
              SIGN IN / CREATE ACCOUNT ▸
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                onClose();
              }}
              className="py-1 text-base text-slate-400 underline-offset-4 hover:text-white hover:underline"
            >
              Keep playing as a guest
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
