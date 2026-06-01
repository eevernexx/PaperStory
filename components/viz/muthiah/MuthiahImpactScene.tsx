"use client";

import { motion } from "framer-motion";

const WAYS = [
  { t: "Rest", k: "non-pharmacological" },
  { t: "Warm compress", k: "non-pharmacological" },
  { t: "Light exercise & relaxation", k: "non-pharmacological" },
  { t: "Herbal remedies", k: "traditional" },
  { t: "Painkillers / NSAIDs", k: "pharmacological" },
];

export default function MuthiahImpactScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-mint">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; WHAT GIRLS DO
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        How they cope
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 px-1">
        non-drug options come first; many still do nothing
      </div>
      <div className="flex flex-col gap-2 px-1">
        {WAYS.map((w, i) => (
          <motion.div
            key={w.t}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.09 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3 shadow-neo-sm flex items-center justify-between gap-3 font-mono text-[12px] sm:text-[12.5px]"
          >
            <span>{w.t}</span>
            <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-wider text-[#777]">
              {w.k}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
