"use client";

import { motion } from "framer-motion";

const BARS = [
  { label: "Liberica", pct: 99, value: "0.99", winner: true },
  { label: "Robusta", pct: 97, value: "0.97" },
  { label: "Arabica", pct: 91, value: "0.91" },
  { label: "Excelsa", pct: 90, value: "0.90" },
];

export default function CoffeeResultsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10 bg-yellow">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · RESULTS
      </span>
      <div className="p-[30px] w-full h-full flex flex-col">
        <div className="font-display text-[18px] mb-1">F1-Score per class</div>
        <div className="font-mono text-xs text-[#555] mb-5">
          higher is better · range 0–1
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center">
          {BARS.map((b, i) => (
            <div
              key={b.label}
              className="grid grid-cols-[100px_1fr_70px] items-center gap-3"
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
                    delay: 0.1 + i * 0.12,
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
