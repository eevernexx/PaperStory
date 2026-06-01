"use client";

import { motion } from "framer-motion";

const CRITERIA = [
  { ok: true, t: "Published 2020 to 2025" },
  { ok: true, t: "Full text available" },
  { ok: true, t: "Original research" },
  { ok: true, t: "About managing menstrual pain" },
  { ok: true, t: "Subjects are adolescent girls" },
  { ok: false, t: "Paywalled or off-topic" },
];

export default function MuthiahMethodScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-mint">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; METHODOLOGY
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        Inclusion &amp; exclusion
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 px-1">
        the filter that left ten studies standing
      </div>
      <div className="flex flex-col gap-2 px-1">
        {CRITERIA.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3 shadow-neo-sm flex items-center gap-3 font-mono text-[12px] sm:text-[12.5px]"
          >
            <span
              className={`w-5 h-5 flex-shrink-0 border-2 border-ink rounded-full flex items-center justify-center font-display text-[11px] ${
                c.ok ? "bg-mint" : "bg-coral text-paper"
              }`}
            >
              {c.ok ? "✓" : "✗"}
            </span>
            {c.t}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
