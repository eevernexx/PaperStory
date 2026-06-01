"use client";

import { motion } from "framer-motion";

const STATS = [
  { label: "Pit windows", value: "1-3" },
  { label: "Compounds", value: "Soft / Med / Hard" },
  { label: "Lap-time effects", value: "5+ stochastic" },
  { label: "Optimum", value: "None" },
];

export default function NeuralProblemScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-lavender">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · THE PROBLEM
      </span>
      <div className="font-display text-[19px] sm:text-[24px] mb-2 text-center">
        Strategy under uncertainty
      </div>
      <div className="font-serif italic text-[14px] sm:text-[18px] mb-4 sm:mb-6 text-center max-w-[360px] text-[#333]">
        Race simulations need manual strategies. There is no closed-form optimum.
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-[360px] shrink-0">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3 sm:py-3 sm:px-4 shadow-neo-sm text-center"
          >
            <div className="font-display text-[15px] sm:text-[18px] leading-tight">{s.value}</div>
            <div className="font-mono text-[9px] sm:text-[10px] mt-1 text-[#555] uppercase tracking-wider">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
