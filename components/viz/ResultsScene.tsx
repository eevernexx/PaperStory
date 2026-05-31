"use client";

import { motion } from "framer-motion";

const BARS = [
  { label: "Linear Reg.", pct: 71, value: "0.71" },
  { label: "Lasso", pct: 78, value: "0.78" },
  { label: "Ridge", pct: 81, value: "0.81" },
  { label: "Polynomial", pct: 89, value: "0.89" },
  { label: "Random Forest", pct: 95, value: "0.953" },
  { label: "RF Ensemble", pct: 97, value: "0.9676", winner: true },
];

export default function ResultsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10 bg-yellow">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · RESULTS
      </span>
      <div className="p-[30px] w-full h-full flex flex-col">
        <div className="font-display text-[18px] mb-1">
          R² score by model — test set
        </div>
        <div className="font-mono text-xs text-[#555] mb-5">
          higher is better · range 0–1
        </div>
        <div className="flex-1 flex flex-col gap-3.5 justify-center">
          {BARS.map((b, i) => (
            <div
              key={b.label}
              className="grid grid-cols-[130px_1fr_70px] items-center gap-3"
            >
              <div className="font-mono text-[13px]">
                {b.label}
                {b.winner && <span className="text-coral"> ★</span>}
              </div>
              <div className="relative h-6 bg-black/10 border-2 border-ink rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: active ? `${b.pct}%` : "0%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1 + i * 0.11,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className={`h-full rounded-full ${
                    b.winner ? "bg-coral" : "bg-ink"
                  }`}
                />
              </div>
              <div className="font-display text-[15px] text-right">
                {b.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
