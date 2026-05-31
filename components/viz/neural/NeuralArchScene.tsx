"use client";

import { motion } from "framer-motion";

const ROWS = [
  { k: "Hidden layers", v: "3" },
  { k: "Neurons per layer", v: "64" },
  { k: "Activation (hidden)", v: "ReLU" },
  { k: "Activation (output)", v: "Sigmoid (pit) Â· Softmax (compound)" },
  { k: "L2 regularization", v: "0.0005" },
  { k: "Optimizer", v: "Nadam" },
  { k: "Loss (pit)", v: "Binary cross-entropy" },
  { k: "Class weights", v: "no-pit: 1 Â· pit: 5" },
];

export default function NeuralArchScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-8 bg-sky overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> Â· ARCHITECTURE
      </span>
      <div className="font-display text-[18px] mb-1 px-2 mt-6">Feed-forward network</div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">TensorFlow + Keras Â· early stopping (patience 5)</div>
      <div className="grid grid-cols-1 gap-1.5 px-2 pb-4">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.k}
            initial={{ opacity: 0, y: 8 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
            className="bg-white border-2 border-ink rounded-neo-md py-2 px-3 shadow-neo-sm flex justify-between items-center gap-3"
          >
            <div className="font-mono text-[11.5px] text-[#555]">{r.k}</div>
            <div className="font-display text-[12.5px] text-right">{r.v}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
