"use client";

import { motion } from "framer-motion";

const APPROACHES = [
  { label: "Manual user input", note: "race sim, but tedious; unrealistic" },
  { label: "Classical optimization", note: "non-linear, discontinuous RS breaks solvers" },
  { label: "Markov / stochastic", note: "rare cases overweight; no repeatability" },
  { label: "Neural networks", note: "learn the mechanism, repeatable, fast", win: true },
];

export default function NeuralMotivationScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-mint overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · MOTIVATION
      </span>
      <div className="font-display text-[20px] mb-5 mt-6 px-2">
        Why NNs over classical models
      </div>
      <div className="flex flex-col gap-2.5 px-2 pb-4">
        {APPROACHES.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, x: -16 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            className={`border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm ${
              a.win ? "bg-coral text-paper" : "bg-white"
            }`}
          >
            <div className="font-display text-[14px]">{a.label}</div>
            <div className={`font-mono text-[11px] mt-0.5 ${a.win ? "text-paper/80" : "text-[#555]"}`}>
              {a.note}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
