"use client";

import { motion } from "framer-motion";

const ROWS = [
  { label: "Repeatable decisions?", manual: ", ", markov: "No", vse: "Yes" },
  { label: "Reacts to live race?", manual: "No", markov: "Limited", vse: "Yes" },
  { label: "Handles rare events?", manual: "Yes", markov: "Poorly", vse: "Yes" },
  { label: "Sim-ready?", manual: "Slow", markov: "Yes", vse: "Yes" },
];

export default function NeuralComparisonScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-8 bg-lavender overflow-y-auto">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · COMPARISON
      </span>
      <div className="font-display text-[18px] mb-1 px-2 mt-6">VSE vs alternatives</div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">manual input · Markov chain · the VSE (this work)</div>
      <div className="px-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-3 gap-y-2 text-[11.5px]">
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555]">Property</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">Manual</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">Markov</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-coral text-right">VSE</div>
        {ROWS.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            className="contents font-mono"
          >
            <div className="border-t border-ink/20 pt-1">{r.label}</div>
            <div className="border-t border-ink/20 pt-1 text-right text-[#555]">{r.manual}</div>
            <div className="border-t border-ink/20 pt-1 text-right text-[#555]">{r.markov}</div>
            <div className="border-t border-ink/20 pt-1 text-right font-bold text-coral">{r.vse}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
