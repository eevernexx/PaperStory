"use client";

import { motion } from "framer-motion";

const SARAN = [
  "Pass a dedicated elderly Perda (local law)",
  "Strengthen the PPLKS elderly association",
  "Run public education & socialisation",
  "Upgrade age-friendly public facilities",
  "Add green open spaces for seniors",
];

export default function LansiaReformScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-coral">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/70">
        <span className="text-white font-bold">SCENE</span> &middot; RECOMMENDATIONS
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1 text-paper">
        The path forward
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-paper/80 mb-4 px-1">
        what the study asks the city to do next
      </div>
      <div className="flex flex-col gap-2 px-1">
        {SARAN.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3 shadow-neo-sm flex items-center gap-3 font-mono text-[12px] sm:text-[12.5px]"
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
