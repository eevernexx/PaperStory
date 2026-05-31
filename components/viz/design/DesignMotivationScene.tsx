"use client";

import { motion } from "framer-motion";

const STAGES = [
  { era: "30 K BCE", what: "Cave painting · marking presence" },
  { era: "3500 BCE", what: "Cuneiform · marking transactions" },
  { era: "1450", what: "Printing press · scale" },
  { era: "1920s", what: "Bauhaus · principles" },
  { era: "1990s", what: "Digital · ubiquity" },
];

export default function DesignMotivationScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-mint overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · MOTIVATION
      </span>
      <div className="font-display text-[20px] mb-1 mt-6 px-2">
        From cave paintings to digital
      </div>
      <div className="font-mono text-xs text-[#555] mb-5 px-2">
        the medium changes, the perception does not
      </div>
      <div className="flex flex-col gap-2 px-2">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.era}
            initial={{ opacity: 0, x: -20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3 shadow-neo-sm flex items-center gap-3"
          >
            <div className="font-mono text-[11px] w-[80px] uppercase tracking-wider text-[#555]">
              {s.era}
            </div>
            <div className="font-display text-[13.5px]">{s.what}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
