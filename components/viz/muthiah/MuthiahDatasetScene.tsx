"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "1,910", label: "articles found on Google Scholar", w: 100 },
  { n: "18", label: "kept after title & abstract screening", w: 58 },
  { n: "10", label: "analyzed in full against the criteria", w: 34, peak: true },
];

export default function MuthiahDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-peach">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; THE FUNNEL
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        Screening the literature
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 sm:mb-5 px-1">
        Google Scholar &middot; 2020&ndash;2025 &middot; Indonesian originals
      </div>
      <div className="flex flex-col gap-3 px-1">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.14 }}
            className="flex items-center gap-3"
          >
            <span className="font-display text-[16px] sm:text-[18px] w-[64px] shrink-0">
              {s.n}
            </span>
            <div className="flex-1 relative h-8 bg-black/10 border-2 border-ink rounded-neo-md overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: active ? `${s.w}%` : "0%" }}
                transition={{ duration: 1.0, delay: 0.2 + i * 0.14, ease: [0.2, 0.8, 0.2, 1] }}
                className={`h-full ${s.peak ? "bg-coral" : "bg-ink"}`}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] sm:text-[11px] text-paper">
                {s.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
