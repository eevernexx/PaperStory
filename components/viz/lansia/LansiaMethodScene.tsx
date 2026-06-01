"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    k: "Public policy",
    v: "Plans, regulations, and budgets that set the city's direction.",
  },
  {
    k: "Policy actors",
    v: "The OPDs and officials who translate plans into programs.",
  },
  {
    k: "Policy environment",
    v: "Communities, families, and facilities the elderly live within.",
  },
];

export default function LansiaMethodScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-mint">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; METHODOLOGY
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1">
        William Dunn&rsquo;s lens
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 sm:mb-5">
        descriptive qualitative &middot; three interlocking elements
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3.5 shadow-neo-sm flex gap-3 items-start"
          >
            <span className="flex-shrink-0 w-[24px] h-[24px] border-2 border-ink rounded-full flex items-center justify-center text-[11px] font-display bg-coral text-paper">
              {i + 1}
            </span>
            <span>
              <span className="font-display text-[13px] sm:text-[14px]">{s.k}</span>
              <span className="block font-serif text-[12.5px] sm:text-[13.5px] leading-[1.4] text-[#333]">
                {s.v}
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
