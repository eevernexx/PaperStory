"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

const CLASSES = [
  { label: "Arabica", color: "#FF6B6B" },
  { label: "Excelsa", color: "#FFE066" },
  { label: "Liberica", color: "#C9B6FF" },
  { label: "Robusta", color: "#A8D8FF" },
];

function Bean() {
  return (
    <svg viewBox="0 0 24 28" className="w-5 h-6 sm:w-6 sm:h-7" aria-hidden>
      <g transform="rotate(18 12 14)">
        <ellipse
          cx="12"
          cy="14"
          rx="7.5"
          ry="11"
          fill="#5b3a21"
          stroke="#0A0A0A"
          strokeWidth="1.6"
        />
        <path
          d="M12 4 C8 9, 16 19, 12 24"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function CountUp({ active, delay }: { active: boolean; delay: number }) {
  const value = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }
    const controls = animate(value, 500, {
      duration: 1.1,
      delay,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [active, delay, value]);

  return <>{display}</>;
}

export default function CoffeeDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-mint overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; DATASET
      </span>

      <div className="px-2 sm:px-[30px] pt-10 pb-4 flex flex-col h-full">
        <div className="font-display text-[18px] sm:text-[20px] mb-1">
          2,000 images &middot; balanced
        </div>
        <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-2">
          500 per class &middot; smartphone captures
        </div>

        {/* Bar chart */}
        <div className="flex-1 flex items-end justify-center gap-2.5 sm:gap-5 min-h-[240px] pt-6">
          {CLASSES.map((c, i) => (
            <div
              key={c.label}
              className="flex-1 max-w-[118px] h-full flex flex-col items-center justify-end"
            >
              {/* count-up */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                className="font-display text-[20px] sm:text-[24px] leading-none mb-2"
              >
                <CountUp active={active} delay={0.2 + i * 0.12} />
              </motion.div>

              {/* growing bar */}
              <div className="relative w-full flex-1 flex items-end">
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: active ? "82%" : "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.12,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="w-full border-3 border-ink rounded-t-neo-md shadow-neo-sm flex items-start justify-center pt-2.5 overflow-hidden"
                  style={{ backgroundColor: c.color }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      active
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.5 }
                    }
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
                  >
                    <Bean />
                  </motion.div>
                </motion.div>
              </div>

              {/* baseline + label */}
              <div className="w-full h-[3px] bg-ink rounded-full" />
              <div className="mt-2 font-mono text-[11px] sm:text-[12px] text-center">
                {c.label}
              </div>
            </div>
          ))}
        </div>

        {/* balanced footer */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-3 self-center inline-flex items-center gap-2 bg-white border-2 border-ink rounded-full px-3.5 py-1.5 font-mono text-[11px] sm:text-[12px] shadow-neo-xs"
        >
          <span className="w-4 h-4 flex items-center justify-center bg-coral border border-ink rounded-full text-[9px]">
            &#10003;
          </span>
          Perfectly balanced &middot; no class to over-sample
        </motion.div>
      </div>
    </div>
  );
}
