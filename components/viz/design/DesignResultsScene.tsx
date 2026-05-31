"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  { name: "Keseimbangan", short: "Balance" },
  { name: "Kontras", short: "Contrast" },
  { name: "Kesatuan", short: "Unity" },
  { name: "Nilai", short: "Value" },
  { name: "Warna", short: "Color" },
];

export default function DesignResultsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-yellow overflow-y-auto">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · PRINCIPLES
      </span>
      <div className="font-display text-[20px] mb-5 mt-6 px-2">
        Five principles of composition
      </div>
      <div className="flex flex-col gap-2.5 px-2 pb-4">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: -20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm flex justify-between items-center"
          >
            <div className="font-display text-[18px]">{p.name}</div>
            <div className="font-mono text-[12px] uppercase tracking-wider text-[#555]">
              {p.short}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
