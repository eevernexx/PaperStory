"use client";

import { motion } from "framer-motion";

const NODES = [
  { num: "1", label: "Analisis · sistem & data" },
  { num: "2", label: "Perancangan · UI & flow" },
  { num: "3", label: "Implementasi · Laravel + Node" },
  { num: "4", label: "Uji coba · Black & White Box" },
  { num: "5", label: "Pemeliharaan · maintenance", winner: true },
];

export default function ChatbotMethodScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center p-[40px] px-10 bg-sky overflow-y-auto">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · METHODOLOGY
      </span>
      <div className="font-display text-[18px] mb-5 self-start mt-6">
        Waterfall · five stages
      </div>
      <div className="flex flex-col gap-2.5 w-full max-w-[380px] mx-auto pb-6">
        {NODES.map((n, i) => (
          <div key={n.num} className="flex flex-col gap-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.14 }}
              className={`border-3 border-ink rounded-neo-md py-3 px-[16px] font-display text-[13px] shadow-neo-sm flex items-center gap-3 w-full ${
                n.winner ? "bg-coral" : "bg-white"
              }`}
            >
              <span
                className={`flex-shrink-0 w-[26px] h-[26px] border-2 border-ink rounded-full flex items-center justify-center text-xs ${
                  n.winner ? "bg-ink text-paper" : "bg-coral"
                }`}
              >
                {n.num}
              </span>
              {n.label}
            </motion.div>
            {i < NODES.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.14 }}
                className="font-display text-[16px] text-ink"
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
