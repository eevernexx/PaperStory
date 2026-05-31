"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function LegalResultsScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 1000000, {
      duration: 2.0,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-yellow">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · ANALYSIS
      </span>
      <div className="font-mono text-[12px] uppercase tracking-wider text-[#555] mb-2">
        Deforestation · 2000–2005
      </div>
      <div className="font-display text-[clamp(48px,9vw,108px)] tracking-[-0.04em] leading-[0.9] text-center">
        {display}
      </div>
      <div className="font-display text-[20px] mt-2">hectares / year</div>
      <div className="font-serif italic text-[18px] mt-5 text-center max-w-[360px]">
        59 million ha of critical land inside forest area · 41 million outside
      </div>
    </div>
  );
}
