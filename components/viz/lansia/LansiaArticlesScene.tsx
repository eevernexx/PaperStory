"use client";

import { motion } from "framer-motion";

const DOMAINS = [
  "Outdoor spaces & buildings",
  "Transportation",
  "Housing",
  "Social participation",
  "Respect & inclusion",
  "Civic participation & work",
  "Communication & information",
  "Community & health services",
];

export default function LansiaArticlesScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-sky">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; WHO DOMAINS
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        Eight checkboxes
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 px-1">
        the WHO blueprint for an age-friendly city
      </div>
      <div className="grid grid-cols-2 gap-2 px-1">
        {DOMAINS.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4, delay: 0.06 + i * 0.07 }}
            className="bg-white border-2 border-ink rounded-neo-md py-2 px-2.5 shadow-neo-xs flex items-start gap-2"
          >
            <span className="font-display text-[10px] shrink-0 w-4 h-4 rounded-full bg-coral text-paper flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span className="font-mono text-[10.5px] sm:text-[11px] leading-[1.3]">{d}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
