"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function ArResultsScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0.00");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 94.67, {
      duration: 1.8,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(v.toFixed(2)),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-yellow">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · RESULTS
      </span>
      <div className="font-mono text-[12px] uppercase tracking-wider text-[#555] mb-3">
        Usability score
      </div>
      <div className="font-display text-[clamp(72px,13vw,180px)] tracking-[-0.04em] leading-[0.9]">
        {display}%
      </div>
      <div className="font-serif italic text-[22px] mt-3 text-center max-w-[360px]">
        rated &ldquo;sangat layak digunakan&rdquo; by MI Wasilatul Huda students
      </div>
    </div>
  );
}
