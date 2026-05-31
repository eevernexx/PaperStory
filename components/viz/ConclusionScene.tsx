"use client";

import { motion } from "framer-motion";

const CARDS = [
  { label: "Winning model", stat: "RF Ensemble" },
  { label: "R² · test set", stat: "0.9676" },
  { label: "RMSE", stat: "0.39 s" },
  { label: "Models compared", stat: "6" },
  { label: "Status", stat: "Open-source" },
];

export default function ConclusionScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center p-10 px-9 bg-pink">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · CONCLUSION
      </span>
      <div className="font-display text-[22px] mb-5 self-start mt-8">
        Final scorecard
      </div>
      <div className="flex flex-col gap-3 w-full">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-4 px-[18px] shadow-neo-sm"
          >
            <div className="font-mono text-[11px] text-[#555] uppercase tracking-wider">
              {c.label}
            </div>
            <div className="font-display text-[28px]">{c.stat}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
