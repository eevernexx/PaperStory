"use client";

import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function CoffeeImpactScene({ active }: { active: boolean }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0.00");

  useEffect(() => {
    if (!active) return;
    const controls = animate(value, 94.5, {
      duration: 1.8,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(v.toFixed(2)),
    });
    return () => controls.stop();
  }, [active, value]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-coral">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/70">
        <span className="text-white font-bold">SCENE</span> · IMPACT
      </span>

      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "14%", left: "12%", delay: "0s" },
          { top: "22%", right: "14%", delay: "-1s" },
          { bottom: "18%", left: "18%", delay: "-2s" },
          { bottom: "26%", right: "12%", delay: "-3s" },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-yellow animate-spin"
            style={{
              ...s,
              animationDelay: s.delay,
              clipPath:
                "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
            }}
          />
        ))}
      </div>

      <div className="font-display text-[clamp(72px,13vw,170px)] tracking-[-0.04em] leading-[0.9]">
        {display}%
      </div>
      <div className="font-serif italic text-[22px] mt-3.5 text-center max-w-[340px]">
        accuracy on real-world smartphone images
      </div>
    </div>
  );
}
