"use client";

import { motion } from "framer-motion";

const STEPS = [
  { num: "1", label: "Perencanaan · Planning" },
  { num: "2", label: "Pemanfaatan · Utilization" },
  { num: "3", label: "Pengendalian · Control" },
  { num: "4", label: "Pemeliharaan · Maintenance" },
  { num: "5", label: "Pengawasan · Supervision" },
  { num: "6", label: "Penegakan · Enforcement", winner: true },
];

export default function LegalMethodScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center max-[1100px]:justify-start p-4 sm:p-[40px] px-4 sm:px-10 bg-mint overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · LAW
      </span>
      <div className="font-display text-[18px] mb-4 self-start mt-6">
        UU 32/2009 · the 6 Ps pipeline
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[380px] mx-auto pb-6">
        {STEPS.map((n, i) => (
          <div key={n.num} className="flex flex-col gap-1.5 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className={`border-3 border-ink rounded-neo-md py-2.5 px-[16px] font-display text-[12.5px] shadow-neo-sm flex items-center gap-3 w-full ${
                n.winner ? "bg-coral" : "bg-white"
              }`}
            >
              <span
                className={`flex-shrink-0 w-[24px] h-[24px] border-2 border-ink rounded-full flex items-center justify-center text-[10px] ${
                  n.winner ? "bg-ink text-paper" : "bg-coral"
                }`}
              >
                {n.num}
              </span>
              {n.label}
            </motion.div>
            {i < STEPS.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="font-display text-[14px] text-ink"
              >
                ↓
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
