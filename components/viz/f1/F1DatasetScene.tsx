"use client";

import { motion } from "framer-motion";

const WORKLOADS = [
  { name: "LoLa-CIFAR", note: "deep learning · CIFAR-10" },
  { name: "LoLa-MNIST", note: "deep learning · MNIST" },
  { name: "Logistic Reg.", note: "private ML training" },
  { name: "DB Lookup", note: "private query" },
  { name: "BGV Bootstrap", note: "noise refresh · BGV" },
  { name: "CKKS Bootstrap", note: "noise refresh · CKKS" },
];

export default function F1DatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-mint overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · WORKLOADS
      </span>
      <div className="font-display text-[18px] mb-1 mt-6 px-2">
        Seven full FHE programs
      </div>
      <div className="font-mono text-xs text-[#555] mb-5 px-2">
        first system to run complete FHE programs end to end
      </div>
      <div className="grid grid-cols-2 gap-2.5 px-2 pb-4">
        {WORKLOADS.map((w, i) => (
          <motion.div
            key={w.name}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3 px-3 shadow-neo-sm"
          >
            <div className="font-display text-[14px]">{w.name}</div>
            <div className="font-mono text-[10.5px] text-[#555] mt-0.5">{w.note}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
