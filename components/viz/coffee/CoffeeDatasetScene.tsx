"use client";

import { motion } from "framer-motion";

const CLASSES = [
  { label: "Arabica", count: 500, color: "#FF6B6B" },
  { label: "Excelsa", count: 500, color: "#FFE066" },
  { label: "Liberica", count: 500, color: "#C9B6FF" },
  { label: "Robusta", count: 500, color: "#A8D8FF" },
];

export default function CoffeeDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-mint">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · DATASET
      </span>
      <div className="p-[30px] flex flex-col h-full">
        <div className="font-display text-[18px] mb-1">
          2,000 images · balanced
        </div>
        <div className="font-mono text-xs text-[#555] mb-6">
          500 per class · smartphone captures
        </div>
        <div className="flex-1 flex items-end gap-4 pb-12">
          {CLASSES.map((c, i) => (
            <div key={c.label} className="flex-1 flex flex-col items-center gap-2">
              <div className="font-display text-[20px]">{c.count}</div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: active ? "70%" : 0 }}
                transition={{
                  duration: 1.0,
                  delay: 0.1 + i * 0.12,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="w-full border-3 border-ink rounded-neo-md shadow-neo-sm"
                style={{ backgroundColor: c.color }}
              />
              <div className="font-mono text-[12px] mt-1">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
