"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function LegalMotivationScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 30, {
      duration: 1.6,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-mint">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · MOTIVATION
      </span>
      <div className="font-mono text-[12px] uppercase tracking-wider text-[#555] mb-2">
        Conservation forest damaged since 2015
      </div>
      <div className="font-display text-[clamp(72px,14vw,180px)] leading-[0.9] tracking-[-0.04em]">
        {display}%
      </div>
      <div className="font-serif italic text-[18px] mt-3 text-center max-w-[360px]">
        encroached by communities · the law on paper isn&rsquo;t the law on the ground
      </div>
    </div>
  );
}
