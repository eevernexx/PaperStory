"use client";

import { motion } from "framer-motion";

const STATS = [
  { label: "Service fees", value: "−30%" },
  { label: "Delivery cost", value: "Mahal" },
  { label: "Digital skill", value: "Minim" },
  { label: "COVID impact", value: "Tutup" },
];

export default function ChatbotProblemScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-lavender">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · THE PROBLEM
      </span>
      <div className="font-display text-[26px] mb-2 text-center">
        Why warungs stay offline
      </div>
      <div className="font-serif italic text-[18px] mb-7 text-center max-w-[360px] text-[#333]">
        Going online via an aggregator costs more than it earns.
      </div>
      <div className="grid grid-cols-2 gap-3 w-full max-w-[360px]">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-4 px-4 shadow-neo-sm text-center"
          >
            <div className="font-display text-[26px]">{s.value}</div>
            <div className="font-mono text-[11px] mt-1 text-[#555] uppercase tracking-wider">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
