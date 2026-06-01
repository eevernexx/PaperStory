"use client";

import { motion } from "framer-motion";

const STATS = [
  { v: "4th", k: "Indonesia world coffee producer rank" },
  { v: "12 M", k: "Coffee farmers (Indonesia)" },
  { v: "0", k: "Pocket-grade ID tools before this" },
];

export default function CoffeeMotivationScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-mint overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · MOTIVATION
      </span>
      <div className="font-display text-[20px] mb-5 mt-8 px-2">
        Why automated ID matters
      </div>
      <div className="flex flex-col gap-3 px-2">
        {STATS.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm flex items-center gap-4"
          >
            <div className="font-display text-[26px] text-coral min-w-[80px]">
              {s.v}
            </div>
            <div className="font-mono text-[12px] text-[#444]">{s.k}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
