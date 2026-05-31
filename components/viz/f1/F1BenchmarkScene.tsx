"use client";

import { motion } from "framer-motion";

const BENCH = [
  { name: "LoLa-CIFAR (UW)", cpu: "1,200,000", f1: "241" },
  { name: "LoLa-MNIST (UW)", cpu: "2,960", f1: "0.17" },
  { name: "LoLa-MNIST (EW)", cpu: "5,431", f1: "0.36" },
  { name: "Logistic Reg.", cpu: "8,300", f1: "1.15" },
  { name: "DB Lookup", cpu: "29,300", f1: "4.36" },
  { name: "BGV Bootstrap", cpu: "4,390", f1: "2.40" },
  { name: "CKKS Bootstrap", cpu: "1,554", f1: "1.30" },
];

export default function F1BenchmarkScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-8 bg-lavender overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> Â· BENCHMARKS
      </span>
      <div className="font-display text-[18px] mb-1 px-2 mt-6">Execution time (ms)</div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">CPU vs F1 Â· lower is better</div>
      <div className="px-2 grid grid-cols-[1fr_auto_auto] gap-x-3 gap-y-2 text-[11.5px] font-mono">
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555]">Benchmark</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">CPU</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">F1</div>
        {BENCH.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
            className="contents"
          >
            <div className="border-t border-ink/20 pt-1">{b.name}</div>
            <div className="border-t border-ink/20 pt-1 text-right text-[#555]">{b.cpu}</div>
            <div className="border-t border-ink/20 pt-1 text-right font-bold text-coral">{b.f1}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
