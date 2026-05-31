"use client";

import { motion } from "framer-motion";

// stage 1: head only, stage 2: 121-layer fine-tune
const STAGE1 = [
  { e: 0, v: 47.75 },
  { e: 1, v: 65.0 },
  { e: 2, v: 78.0 },
  { e: 4, v: 86.0 },
  { e: 6, v: 90.5 },
  { e: 9, v: 92.5 },
];

const STAGE2 = [
  { e: 9, v: 92.5 },
  { e: 10, v: 93.4 },
  { e: 12, v: 94.0 },
  { e: 14, v: 94.3 },
  { e: 16, v: 94.5 },
];

const W = 320;
const H = 170;
const pad = 30;
const maxE = 16;
const minV = 45;
const maxV = 100;

function pathOf(pts: { e: number; v: number }[]) {
  return pts
    .map((p, i) => {
      const x = pad + (p.e / maxE) * (W - 2 * pad);
      const y = pad + (1 - (p.v - minV) / (maxV - minV)) * (H - 2 * pad);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export default function CoffeeTrainingScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-yellow">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · TRAINING
      </span>
      <div className="font-display text-[18px] mb-1 mt-6 px-2">
        Validation accuracy (%)
      </div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">
        stage 1 frozen → stage 2 fine-tune · 121 layers unfrozen
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full px-2">
        {/* axes */}
        <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="#0A0A0A" strokeWidth="2" />
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="#0A0A0A" strokeWidth="2" />
        {/* stage boundary */}
        <motion.line
          x1={pad + (9 / maxE) * (W - 2 * pad)}
          y1={pad}
          x2={pad + (9 / maxE) * (W - 2 * pad)}
          y2={H - pad}
          stroke="#0A0A0A"
          strokeDasharray="4 4"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 0.5 : 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        />
        <motion.path
          d={pathOf(STAGE1)}
          stroke="#0A0A0A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: active ? 1 : 0 }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.path
          d={pathOf(STAGE2)}
          stroke="#FF6B6B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: active ? 1 : 0 }}
          transition={{ duration: 1.0, delay: 1.3 }}
        />
        <text x={pad - 6} y={pad + 4} fontFamily="JetBrains Mono" fontSize="9" textAnchor="end" fill="#555">100</text>
        <text x={pad - 6} y={H - pad + 4} fontFamily="JetBrains Mono" fontSize="9" textAnchor="end" fill="#555">45</text>
        <text x={pad + 60} y={H - 8} fontFamily="JetBrains Mono" fontSize="9" fill="#555">stage 1</text>
        <text x={pad + 175} y={H - 8} fontFamily="JetBrains Mono" fontSize="9" fill="#FF6B6B">stage 2 fine-tune</text>
      </svg>
      <div className="mt-3 px-2 font-mono text-[12.5px] text-[#333]">
        47.75% &rarr; 92.50% &rarr; 94.50%
      </div>
    </div>
  );
}
