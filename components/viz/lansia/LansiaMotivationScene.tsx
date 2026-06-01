"use client";

import { motion } from "framer-motion";

const POINTS = [
  {
    k: "Comfort",
    v: "A place where the elderly feel at ease moving and gathering.",
  },
  {
    k: "Safety",
    v: "Streets, transport, and homes that do not put seniors at risk.",
  },
  {
    k: "Dignity",
    v: "Older citizens valued and included, not left lonely at home.",
  },
];

export default function LansiaMotivationScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-mint">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; MOTIVATION
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        Why build for old age?
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 sm:mb-5 px-1">
        welfare is measured at the margins of a society
      </div>
      <div className="flex flex-col gap-2.5 px-1">
        {POINTS.map((p, i) => (
          <motion.div
            key={p.k}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-4 shadow-neo-sm"
          >
            <div className="font-display text-[14px] sm:text-[15px] text-coral mb-0.5">
              {p.k}
            </div>
            <div className="font-serif text-[13px] sm:text-[14px] leading-[1.45]">
              {p.v}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
