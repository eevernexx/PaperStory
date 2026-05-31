"use client";

import { motion } from "framer-motion";

const NODES = [
  { num: "1", label: "Raw telemetry → FastF1" },
  { num: "2", label: "Feature engineering (17)" },
  { num: "3", label: "Train 6 regression models" },
  { num: "4", label: "5-fold CV · time-aware split" },
  { num: "★", label: "Stack into ensemble", winner: true },
];

export default function MethodScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center p-[50px] px-10 bg-sky">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · METHODOLOGY
      </span>
      <div className="font-display text-[18px] mb-[30px] self-start">
        The model pipeline
      </div>
      <div className="flex flex-col gap-3.5 w-full max-w-[360px] mx-auto">
        {NODES.map((n, i) => (
          <div key={n.num} className="flex flex-col gap-3.5 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={
                active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className={`border-3 border-ink rounded-neo-md py-3.5 px-[18px] font-display text-sm shadow-neo-sm flex items-center gap-3 w-full ${
                n.winner ? "bg-coral" : "bg-white"
              }`}
            >
              <span
                className={`w-[26px] h-[26px] border-2 border-ink rounded-full flex items-center justify-center text-xs ${
                  n.winner ? "bg-ink text-paper" : "bg-coral"
                }`}
              >
                {n.num}
              </span>
              {n.label}
            </motion.div>
            {i < NODES.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.15 }}
                className="font-display text-[18px] text-ink"
              >
                ↓
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
