"use client";

import { motion } from "framer-motion";

const CARDS = [
  { label: "Speedup (gmean)", stat: "5,432x" },
  { label: "Max speedup", stat: "17,412x" },
  { label: "Die area", stat: "151.4 mm²" },
  { label: "Process", stat: "14 / 12 nm" },
  { label: "TDP", stat: "180.4 W" },
  { label: "Venue", stat: "MICRO 2021" },
];

export default function F1ConclusionScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-start p-5 sm:p-10 px-9 pt-12 bg-pink overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · CONCLUSION
      </span>
      <div className="font-display text-[22px] mb-4 self-start mt-4">
        Final scorecard
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3 px-[16px] shadow-neo-sm"
          >
            <div className="font-mono text-[11px] text-[#555] uppercase tracking-wider">
              {c.label}
            </div>
            <div className="font-display text-[20px]">{c.stat}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
