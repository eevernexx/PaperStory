"use client";

import { motion } from "framer-motion";

const STAGES = [
  { era: "30,000 BCE", what: "Cave painting" },
  { era: "3500 BCE", what: "Cuneiform" },
  { era: "1450", what: "Printing press" },
  { era: "1920s", what: "Modernism" },
  { era: "1990s", what: "Digital · web" },
  { era: "Today", what: "Brand systems" },
];

export default function DesignProblemScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-lavender overflow-y-auto">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · EVOLUTION
      </span>
      <div className="font-display text-[20px] mb-5 mt-8 px-2">
        Visual communication, through time
      </div>
      <div className="flex flex-col gap-2 px-2 pb-4">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.era}
            initial={{ opacity: 0, x: -20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-4 shadow-neo-sm flex items-center gap-3"
          >
            <div className="font-mono text-[11px] w-[88px] uppercase tracking-wider text-[#555]">
              {s.era}
            </div>
            <div className="font-display text-[15px]">{s.what}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
