"use client";

import { motion } from "framer-motion";

export default function F1ArchitectureScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-8 bg-sky">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · ARCHITECTURE
      </span>
      <div className="font-display text-[18px] mb-3 px-2 mt-6">
        F1 die layout
      </div>
      <svg viewBox="0 0 420 320" className="flex-1 w-full">
        {/* HBM2 PHYs */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: active ? 1 : 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <rect x="10" y="20" width="80" height="40" fill="#C9B6FF" stroke="#0A0A0A" strokeWidth="3" />
          <text x="50" y="44" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">HBM2</text>
          <rect x="330" y="20" width="80" height="40" fill="#C9B6FF" stroke="#0A0A0A" strokeWidth="3" />
          <text x="370" y="44" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">HBM2</text>
        </motion.g>
        {/* scratchpad banks 16 */}
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.rect
            key={`sp-${i}`}
            x={100 + (i % 8) * 28}
            y={80 + Math.floor(i / 8) * 30}
            width="24"
            height="24"
            fill="#B8F2C9"
            stroke="#0A0A0A"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.02 }}
          />
        ))}
        <text x="210" y="78" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">
          16 scratchpad banks (4 MB each)
        </text>
        {/* on-chip network */}
        <motion.rect
          x="100"
          y="150"
          width="220"
          height="16"
          fill="#FFE066"
          stroke="#0A0A0A"
          strokeWidth="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        />
        <text x="210" y="163" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">
          3 × 16×16 crossbars · 24 TB/s
        </text>
        {/* compute clusters 16 */}
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.g
            key={`cc-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.9 + i * 0.025 }}
          >
            <rect
              x={100 + (i % 8) * 28}
              y={180 + Math.floor(i / 8) * 50}
              width="24"
              height="42"
              fill="#FF6B6B"
              stroke="#0A0A0A"
              strokeWidth="2"
            />
            <text x={112 + (i % 8) * 28} y={205 + Math.floor(i / 8) * 50} fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" fill="#FFF">
              CC
            </text>
          </motion.g>
        ))}
        <text x="210" y="298" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">
          16 compute clusters · NTT + Aut + 2×Mul + 2×Add each
        </text>
      </svg>
    </div>
  );
}
