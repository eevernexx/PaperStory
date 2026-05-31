"use client";

import { motion } from "framer-motion";

const SEASONS = ["2014", "2015", "2016", "2017", "2018", "2019"];

export default function NeuralDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-mint">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · DATASET
      </span>
      <div className="font-display text-[20px] mb-1 mt-6 px-2">
        Six seasons of F1 timing data
      </div>
      <div className="font-mono text-xs text-[#555] mb-5 px-2">
        2014 to 2019 · dry races · 1 to 3 pit stops
      </div>
      <div className="grid grid-cols-3 gap-3 px-2 mb-4">
        {SEASONS.map((y, i) => (
          <motion.div
            key={y}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3 px-3 shadow-neo-sm text-center"
          >
            <div className="font-display text-[20px]">{y}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-2">
        <div className="bg-coral text-paper border-3 border-ink rounded-neo-md py-3 px-3 shadow-neo-sm text-center">
          <div className="font-display text-[22px]">4,087</div>
          <div className="font-mono text-[10px] uppercase tracking-wider mt-0.5 opacity-80">
            laps with tire change
          </div>
        </div>
        <div className="bg-yellow border-3 border-ink rounded-neo-md py-3 px-3 shadow-neo-sm text-center">
          <div className="font-display text-[22px]">2,757</div>
          <div className="font-mono text-[10px] uppercase tracking-wider mt-0.5 text-[#444]">
            after filtering
          </div>
        </div>
      </div>
    </div>
  );
}
