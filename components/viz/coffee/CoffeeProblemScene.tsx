"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function CoffeeProblemScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 22, {
      duration: 1.4,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-lavender">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · THE PROBLEM
      </span>
      <div className="font-display text-[clamp(100px,18vw,240px)] leading-[0.9] tracking-[-0.04em]">
        {display}
      </div>
      <div className="font-serif italic text-[22px] mt-3 text-center max-w-[360px]">
        misclassifications out of 400 test samples
      </div>
      <div className="mt-7 bg-white border-3 border-ink rounded-neo-md py-3 px-5 shadow-neo-sm font-mono text-[13px]">
        Excelsa ↔ Arabica · 16 of 22 errors
      </div>
    </div>
  );
}
