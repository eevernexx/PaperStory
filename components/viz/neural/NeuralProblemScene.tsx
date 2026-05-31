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
    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-lavender">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · THE PROBLEM
      </span>
      <div className="font-display text-[24px] mb-2 text-center">
        Strategy under uncertainty
      </div>
      <div className="font-serif italic text-[18px] mb-6 text-center max-w-[360px] text-[#333]">
        Race simulations need manual strategies. There is no closed-form optimum.
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-[360px]">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm text-center"
          >
            <div className="font-display text-[18px]">{s.value}</div>
            <div className="font-mono text-[10px] mt-1 text-[#555] uppercase tracking-wider">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
