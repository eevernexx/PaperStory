"use client";

import { motion } from "framer-motion";

const CHAIN = [
  { k: "Knowledge", v: "understanding why it hurts", c: "bg-sky" },
  { k: "Attitude", v: "willingness to act on it", c: "bg-yellow" },
  { k: "Behavior", v: "actually managing the pain", c: "bg-mint" },
];

export default function MuthiahMotivationScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-sky">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; MOTIVATION
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        The assumed chain
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 px-1">
        the logic the review puts to the test
      </div>
      <div className="flex flex-col gap-2 px-1">
        {CHAIN.map((s, i) => (
          <div key={s.k} className="flex flex-col items-stretch gap-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.18 }}
              className={`border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm ${s.c}`}
            >
              <div className="font-display text-[15px] sm:text-[16px]">{s.k}</div>
              <div className="font-mono text-[11px] sm:text-[12px] text-[#444]">
                {s.v}
              </div>
            </motion.div>
            {i < CHAIN.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.18 }}
                className="text-center font-display text-[18px] text-ink leading-none"
              >
                &darr;
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
