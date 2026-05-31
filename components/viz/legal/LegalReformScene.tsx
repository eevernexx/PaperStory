"use client";

import { motion } from "framer-motion";

const REFORMS = [
  "Paradigm: economic â†’ eco-socio-cultural",
  "Harmonize sectoral with environmental law",
  "Strengthen administrative + criminal enforcement",
  "Community-based forest management",
  "Resolve overlapping resource permits",
  "Integrate spatial planning as anchor",
];

export default function LegalReformScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-coral overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/70">
        <span className="text-white font-bold">SCENE</span> Â· REFORM
      </span>
      <div className="font-display text-[20px] mb-1 mt-6 px-2 text-paper">
        ICEL six-point framework
      </div>
      <div className="font-mono text-xs text-paper/80 mb-5 px-2">
        what the literature converges on
      </div>
      <div className="flex flex-col gap-2 px-2">
        {REFORMS.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3 shadow-neo-sm flex items-center gap-3 font-mono text-[12.5px]"
          >
            <span className="w-6 h-6 flex-shrink-0 bg-yellow border-2 border-ink rounded-full flex items-center justify-center font-display text-[11px]">
              {i + 1}
            </span>
            {r}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
