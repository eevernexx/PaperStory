"use client";

import { motion } from "framer-motion";

// Synthetic but plausible training curve shape - early stopping kicks in around epoch 18-22.
const LOSS = [
  { e: 0, v: 0.78 },
  { e: 1, v: 0.65 },
  { e: 2, v: 0.55 },
  { e: 3, v: 0.48 },
  { e: 5, v: 0.40 },
  { e: 8, v: 0.34 },
  { e: 12, v: 0.30 },
  { e: 16, v: 0.28 },
  { e: 22, v: 0.27 },
];

const W = 320;
const H = 160;
const pad = 28;

function path(points: typeof LOSS) {
  const maxE = LOSS[LOSS.length - 1].e;
  const maxV = 0.85;
  return points
    .map((p, i) => {
      const x = pad + (p.e / maxE) * (W - 2 * pad);
      const y = pad + (1 - p.v / maxV) * (H - 2 * pad);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export default function NeuralTrainingScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-yellow">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · TRAINING
      </span>
      <div className="font-display text-[18px] mb-1 mt-6 px-2">Loss vs. epoch</div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">
        early stopping at patience 5 · Nadam · L2 = 0.0005
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full px-2">
        <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="#0A0A0A" strokeWidth="2" />
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="#0A0A0A" strokeWidth="2" />
        <motion.path
          d={path(LOSS)}
          stroke="#FF6B6B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: active ? 1 : 0 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <text x={pad - 6} y={pad + 4} fontFamily="JetBrains Mono" fontSize="9" textAnchor="end" fill="#555">
          0.85
        </text>
        <text x={pad - 6} y={H - pad + 4} fontFamily="JetBrains Mono" fontSize="9" textAnchor="end" fill="#555">
          0.00
        </text>
        <text x={W - pad} y={H - pad + 16} fontFamily="JetBrains Mono" fontSize="9" textAnchor="end" fill="#555">
          22 epochs
        </text>
      </svg>
      <div className="mt-3 px-2 font-mono text-[12.5px] text-[#333]">
        Average F1 ≈ 0.35 on held-out test data
      </div>
    </div>
  );
}
