"use client";

import { motion } from "framer-motion";

const ROWS = [
  { year: "2016", count: "141,000", pct: "8.17%", w: 70 },
  { year: "2017", count: "148,000", pct: "8.47%", w: 78 },
  { year: "2018", count: "156,900", pct: "8.78%", w: 88, peak: true },
];

export default function LansiaDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-peach">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; DATASET
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        A rising curve
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 sm:mb-5 px-1">
        elderly population of Semarang &middot; 2016&ndash;2018
      </div>
      <div className="flex flex-col gap-3 px-1">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.year}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[12px] w-[36px] shrink-0">{r.year}</span>
            <div className="flex-1 relative h-7 bg-black/10 border-2 border-ink rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: active ? `${r.w}%` : "0%" }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                className={`h-full rounded-full ${r.peak ? "bg-coral" : "bg-ink"}`}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[10px] text-paper">
                {r.pct}
              </span>
            </div>
            <span className="font-display text-[12px] sm:text-[13px] w-[58px] text-right shrink-0">
              {r.count}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 px-1 font-mono text-[11px] sm:text-[12px] text-[#444]">
        +7,000&ndash;8,900 seniors every single year.
      </div>
    </div>
  );
}
