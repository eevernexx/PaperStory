"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function F1ProblemScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 100000, {
      duration: 2.0,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-lavender">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · THE PROBLEM
      </span>
      <div className="font-mono text-[12px] uppercase tracking-wider text-[#555] mb-2">
        Software FHE slowdown
      </div>
      <div className="font-display text-[clamp(64px,12vw,140px)] tracking-[-0.04em] leading-[0.9]">
        {display}&times;
      </div>
      <div className="font-serif italic text-[20px] mt-3 text-center max-w-[360px]">
        slower than computing on unencrypted data
      </div>
      <div className="mt-6 bg-white border-3 border-ink rounded-neo-md py-2.5 px-4 shadow-neo-sm font-mono text-[12px]">
        4 to 5 orders of magnitude. Adoption stops here.
      </div>
    </div>
  );
}
