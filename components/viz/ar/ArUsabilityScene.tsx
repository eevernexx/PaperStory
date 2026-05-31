"use client";

import { motion } from "framer-motion";

const ROWS = [
  { k: "Ease of use", v: 95 },
  { k: "Interface clarity", v: 94 },
  { k: "Learning value", v: 96 },
  { k: "Engagement", v: 94 },
];

export default function ArUsabilityScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-yellow overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> Â· USABILITY
      </span>
      <div className="font-display text-[18px] mb-1 mt-6 px-2">
        Usability score breakdown
      </div>
      <div className="font-mono text-xs text-[#555] mb-5 px-2">
        composite 94.67% &middot; rubric: &ldquo;sangat layak digunakan&rdquo;
      </div>
      <div className="flex flex-col gap-3.5 px-2">
        {ROWS.map((r, i) => (
          <div
            key={r.k}
            className="grid grid-cols-[120px_1fr_42px] items-center gap-3"
          >
            <div className="font-mono text-[12.5px]">{r.k}</div>
            <div className="relative h-5 bg-black/10 border-2 border-ink rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: active ? `${r.v}%` : "0%" }}
                transition={{ duration: 1.2, delay: 0.1 + i * 0.12 }}
                className="h-full rounded-full bg-coral"
              />
            </div>
            <div className="font-display text-[13px] text-right">{r.v}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
