"use client";

import { motion } from "framer-motion";

const ROLES = [
  { num: "I", label: "Identifikasi", desc: "Mark identity Â· brand Â· origin" },
  { num: "II", label: "Informasi", desc: "Instruct Â· explain Â· direct" },
  { num: "III", label: "Promosi", desc: "Persuade Â· sell Â· present" },
];

export default function DesignFunctionsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-coral overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/70">
        <span className="text-white font-bold">SCENE</span> Â· FUNCTIONS
      </span>
      <div className="font-display text-[20px] mb-5 mt-6 px-2 text-paper">
        Three functions of design
      </div>
      <div className="flex flex-col gap-3 px-2">
        {ROLES.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3.5 px-4 shadow-neo-sm flex items-center gap-4"
          >
            <div className="w-12 h-12 flex-shrink-0 bg-yellow border-2 border-ink rounded-neo-md flex items-center justify-center font-display text-[16px]">
              {r.num}
            </div>
            <div>
              <div className="font-display text-[18px]">{r.label}</div>
              <div className="font-mono text-[12px] text-[#555]">{r.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
