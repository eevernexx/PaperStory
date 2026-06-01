"use client";

import { motion } from "framer-motion";

const PROGRAMS = [
  "Bina Keluarga Lansia (BKL)",
  "Sekolah Lansia",
  "Posyandu & Puskesmas Lansia",
  "Home care & permakanan",
  "Geriatric pathways, seats & toilets",
];

export default function LansiaResultsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-10 sm:p-10 bg-yellow">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> &middot; RESULTS
      </span>
      <div className="font-display text-[18px] sm:text-[20px] mb-1 px-1">
        Already on the ground
      </div>
      <div className="font-mono text-[11px] sm:text-xs text-[#555] mb-4 px-1">
        what Semarang runs today, with no law requiring it
      </div>
      <div className="flex flex-col gap-2 px-1">
        {PROGRAMS.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.09 }}
            className="bg-white border-3 border-ink rounded-neo-md py-2.5 px-3 shadow-neo-sm flex items-center gap-3 font-mono text-[12px] sm:text-[12.5px]"
          >
            <span className="w-5 h-5 flex-shrink-0 bg-mint border-2 border-ink rounded-full flex items-center justify-center font-display text-[11px]">
              &#10003;
            </span>
            {p}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
