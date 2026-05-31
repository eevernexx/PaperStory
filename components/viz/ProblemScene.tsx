"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function ProblemScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0.0");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 1.6, {
      duration: 1.4,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(v.toFixed(1)),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-lavender">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · THE PROBLEM
      </span>
      <div className="font-display text-[clamp(80px,14vw,200px)] leading-[0.9] tracking-[-0.04em]">
        {display}
        <span className="text-[0.35em] align-super">s</span>
      </div>
      <div className="font-serif italic text-[22px] mt-3 text-center max-w-[320px]">
        lap-time variance within a single stint at Monaco &rsquo;24
      </div>
      <div className="absolute w-[100px] h-[100px] bottom-10 right-10 border-4 border-ink rounded-full bg-white stopwatch" />
    </div>
  );
}
