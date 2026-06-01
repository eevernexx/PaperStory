"use client";

import { motion } from "framer-motion";

const ROWS = [
  { label: "Programmable?", cpu: "Yes", heax: "No", f1: "Yes" },
  { label: "Full FHE programs", cpu: "Yes", heax: "No", f1: "Yes" },
  { label: "Hardware target", cpu: "CPU", heax: "FPGA", f1: "ASIC 14nm" },
  { label: "Best speedup", cpu: "1x", heax: "~200x", f1: "17,412x" },
  { label: "gmean (full prog.)", cpu: "1x", heax: "n/a", f1: "5,432x" },
];

export default function F1ComparisonScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-8 bg-sky overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · COMPARISON
      </span>
      <div className="font-display text-[18px] mb-1 px-2 mt-6">F1 vs CPU vs HEAX</div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">prior best FPGA accel was HEAX, CKKS mul only</div>
      <div className="px-2 grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-3 gap-y-2 text-[12px]">
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555]">Property</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">CPU</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">HEAX</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-coral text-right">F1</div>
        {ROWS.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            className="contents font-mono"
          >
            <div className="border-t border-ink/20 pt-1">{r.label}</div>
            <div className="border-t border-ink/20 pt-1 text-right text-[#555]">{r.cpu}</div>
            <div className="border-t border-ink/20 pt-1 text-right text-[#555]">{r.heax}</div>
            <div className="border-t border-ink/20 pt-1 text-right font-bold text-coral">{r.f1}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
