"use client";

import { motion } from "framer-motion";

const ROWS = [
  { k: "Accuracy", a: "94.50%", b: "96.00%" },
  { k: "Parameters", a: "~25 M", b: "~3.5 M" },
  { k: "Training time", a: "~80 min", b: "~25 min" },
  { k: "Depth", a: "50 layers", b: "53 layers" },
  { k: "Best for", a: "Highest ceiling", b: "Mobile inference" },
];

export default function CoffeeComparisonScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-8 bg-sky overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> Â· COMPARISON
      </span>
      <div className="font-display text-[18px] mb-1 px-2 mt-6">
        ResNet50 vs MobileNetV2
      </div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">
        same dataset Â· same protocol Â· different tradeoffs
      </div>
      <div className="px-2 grid grid-cols-[1.4fr_1fr_1fr] gap-x-3 gap-y-2 text-[12.5px]">
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555]">
          Property
        </div>
        <div className="font-display text-[11px] uppercase tracking-wider text-coral text-right">
          ResNet50
        </div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">
          MobileNetV2
        </div>
        {ROWS.map((r, i) => (
          <motion.div
            key={r.k}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            className="contents font-mono"
          >
            <div className="border-t border-ink/20 pt-1">{r.k}</div>
            <div className="border-t border-ink/20 pt-1 text-right font-bold text-coral">{r.a}</div>
            <div className="border-t border-ink/20 pt-1 text-right text-[#555]">{r.b}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 px-2 font-serif italic text-[14px] text-[#444]">
        Mobile wins on cost. ResNet50 wins on representational headroom.
      </div>
    </div>
  );
}
