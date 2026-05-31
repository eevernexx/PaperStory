"use client";

import { motion } from "framer-motion";

// Log-scaled bar widths so 17k and 1k both visible.
const BARS = [
  { label: "LoLa-MNIST UW", x: 17412, winner: true },
  { label: "LoLa-MNIST EW", x: 15086 },
  { label: "Logistic Reg.", x: 7217 },
  { label: "DB Lookup", x: 6722 },
  { label: "LoLa-CIFAR UW", x: 5011 },
  { label: "BGV Bootstrap", x: 1830 },
  { label: "CKKS Bootstrap", x: 1195 },
];

const MAX = 17412;

export default function F1ResultsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-8 bg-yellow overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · RESULTS
      </span>
      <div className="px-2 mt-6">
        <div className="font-display text-[18px]">Speedup over CPU</div>
        <div className="font-mono text-xs text-[#555] mb-4">gmean 5,432× across 7 benchmarks</div>
        <div className="flex flex-col gap-2.5">
          {BARS.map((b, i) => (
            <div
              key={b.label}
              className="grid grid-cols-[130px_1fr_70px] items-center gap-2.5"
            >
              <div className="font-mono text-[12px]">
                {b.label}
                {b.winner && <span className="text-coral"> ★</span>}
              </div>
              <div className="relative h-5 bg-black/10 border-2 border-ink rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: active ? `${(b.x / MAX) * 100}%` : "0%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1 + i * 0.1,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className={`h-full rounded-full ${b.winner ? "bg-coral" : "bg-ink"}`}
                />
              </div>
              <div className="font-display text-[13px] text-right">
                {b.x.toLocaleString("en-US")}&times;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
