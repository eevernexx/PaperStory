"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  { year: "1945", what: "UUD Pasal 33(3)" },
  { year: "1960", what: "UU Agraria (UUPA)" },
  { year: "1980", what: "Sustainable dev. emerges" },
  { year: "1987", what: "Brundtland Report" },
  { year: "1999", what: "UU Kehutanan No. 41" },
  { year: "2009", what: "UU PPLH No. 32" },
];

export default function LegalProblemScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-lavender overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · BACKGROUND
      </span>
      <div className="font-display text-[20px] mb-5 mt-8 px-2">
        How we got to UU 32/2009
      </div>
      <div className="flex flex-col gap-2 px-2 pb-4">
        {TIMELINE.map((t, i) => (
          <motion.div
            key={t.year}
            initial={{ opacity: 0, x: -20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-4 shadow-neo-sm flex items-center gap-3"
          >
            <div className="font-mono text-[12px] w-[52px] text-[#444]">
              {t.year}
            </div>
            <div className="font-display text-[14px]">{t.what}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
