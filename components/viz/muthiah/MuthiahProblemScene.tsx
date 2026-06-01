"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function MuthiahProblemScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0.00");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 72.89, {
      duration: 1.8,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(v.toFixed(2)),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-lavender">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; THE BURDEN
      </span>
      <div className="font-mono text-[11px] sm:text-[12px] uppercase tracking-wider text-[#555] mb-2">
        Dysmenorrhea incidence in Indonesia
      </div>
      <div className="font-display text-[clamp(52px,12vw,118px)] tracking-[-0.04em] leading-[0.9]">
        {display}%
      </div>
      <div className="font-serif italic text-[15px] sm:text-[20px] mt-3 text-center max-w-[340px]">
        and more than half of it falls on adolescent girls.
      </div>
      <div className="mt-5 sm:mt-6 bg-white border-3 border-ink rounded-neo-md py-2.5 px-4 shadow-neo-sm font-mono text-[11px] sm:text-[12px] text-center shrink-0">
        WHO: about 90% of women experience it at some point.
      </div>
    </div>
  );
}
