"use client";

import { motion } from "framer-motion";

const BARS = [
  { label: "F1 (pit-stop NN)", pct: 35, value: "0.35" },
  { label: "Precision", pct: 40, value: "≈0.40" },
  { label: "Recall", pct: 30, value: "≈0.30" },
  { label: "Compound acc.", pct: 75, value: "≈0.75", winner: true },
];

export default function NeuralResultsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-10 bg-yellow">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · RESULTS
      </span>
      <div className="p-[30px] w-full h-full flex flex-col">
        <div className="font-display text-[18px] mb-1">Held-out test metrics</div>
        <div className="font-mono text-xs text-[#555] mb-5">
          higher is better · 10-fold CV
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center">
          {BARS.map((b, i) => (
            <div
              key={b.label}
              className="grid grid-cols-[140px_1fr_70px] items-center gap-3"
            >
              <div className="font-mono text-[12px]">
                {b.label}
                {b.winner && <span className="text-coral"> ★</span>}
              </div>
              <div className="relative h-5 bg-black/10 border-2 border-ink rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: active ? `${b.pct}%` : "0%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1 + i * 0.12,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className={`h-full rounded-full ${b.winner ? "bg-coral" : "bg-ink"}`}
                />
              </div>
              <div className="font-display text-[14px] text-right">{b.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
