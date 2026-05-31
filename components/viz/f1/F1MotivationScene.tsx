"use client";

import { motion } from "framer-motion";

const ROWS = [
  { label: "Prior FPGA accels.", note: "single ops only", value: "200x" },
  { label: "GPUs", note: "no modular arith.", value: "~20x" },
  { label: "F1 (this work)", note: "full programs", value: "5,400x", win: true },
];

export default function F1MotivationScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-peach">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · MOTIVATION
      </span>
      <div className="font-display text-[20px] mb-5 mt-8 px-2">
        Why prior accelerators fell short
      </div>
      <div className="flex flex-col gap-3 px-2">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            className={`border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm flex justify-between items-center gap-3 ${
              r.win ? "bg-coral" : "bg-white"
            }`}
          >
            <div>
              <div className="font-display text-[16px]">{r.label}</div>
              <div className="font-mono text-[11px] text-[#555]">{r.note}</div>
            </div>
            <div className={`font-display text-[24px] ${r.win ? "text-paper" : "text-ink"}`}>
              {r.value}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 px-2 font-serif italic text-[15px] text-[#333]">
        Programmable. Full FHE programs. Not just isolated ops.
      </div>
    </div>
  );
}
