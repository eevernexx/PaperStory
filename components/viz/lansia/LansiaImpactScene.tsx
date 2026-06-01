"use client";

import { motion } from "framer-motion";

const GAPS = [
  { k: "No legal umbrella", v: "No law dedicated to the elderly" },
  { k: "Budget stalls", v: "Without a law, funding is hard to lock in" },
  { k: "Coordination slips", v: "Programs run, but not in sync" },
];

export default function LansiaImpactScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-lavender">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; THE GAP
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        The missing piece
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 px-1">
        good programs, no law to anchor them
      </div>
      <div className="flex flex-col gap-2.5 px-1">
        {GAPS.map((g, i) => (
          <motion.div
            key={g.k}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-4 shadow-neo-sm"
          >
            <div className="font-display text-[13px] sm:text-[14px] text-coral mb-0.5">
              {g.k}
            </div>
            <div className="font-serif text-[12.5px] sm:text-[14px] leading-[1.4]">
              {g.v}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
