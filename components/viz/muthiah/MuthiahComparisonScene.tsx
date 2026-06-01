"use client";

import { motion } from "framer-motion";

const ROWS = [
  { place: "Abiansemal", r: 0.296, label: "0.296", note: "moderate", w: 48 },
  { place: "'Aisyiyah Yogyakarta", r: 0.62, label: "0.620", note: "strong", w: 88, peak: true },
];

export default function MuthiahComparisonScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-lavender">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; HOW STRONG
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        Significant, not uniform
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 sm:mb-5 px-1">
        correlation coefficient (r) across studies
      </div>
      <div className="flex flex-col gap-3 px-1">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.place}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.16 }}
            className="flex flex-col gap-1"
          >
            <div className="flex items-center justify-between font-mono text-[11px] sm:text-[12px]">
              <span>{r.place}</span>
              <span className="font-display text-[12px]">
                {r.label} &middot; {r.note}
              </span>
            </div>
            <div className="relative h-6 bg-black/10 border-2 border-ink rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: active ? `${r.w}%` : "0%" }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.16, ease: [0.2, 0.8, 0.2, 1] }}
                className={`h-full rounded-full ${r.peak ? "bg-coral" : "bg-ink"}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 px-1 font-mono text-[11px] sm:text-[12px] text-[#444]">
        In Indramayu: 78.7% knew well, yet 100% used no medication.
      </div>
    </div>
  );
}
