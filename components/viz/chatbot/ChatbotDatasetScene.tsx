"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 60, y: 100, label: "Customer", color: "#FFB89E" },
  { x: 220, y: 100, label: "WhatsApp", color: "#B8F2C9" },
  { x: 380, y: 100, label: "Laravel API", color: "#A8D8FF" },
  { x: 540, y: 100, label: "MySQL", color: "#C9B6FF" },
  { x: 380, y: 220, label: "Admin · Flutter", color: "#FFE066" },
];

export default function ChatbotDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-mint">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · SYSTEM
      </span>
      <div className="p-[20px] flex flex-col h-full">
        <div className="font-display text-[18px] mb-5">System architecture</div>
        <svg viewBox="0 0 620 320" className="flex-1 w-full">
          {/* arrows */}
          <motion.path
            d="M 100 100 L 180 100"
            stroke="#0A0A0A"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arr)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.path
            d="M 260 100 L 340 100"
            stroke="#0A0A0A"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arr)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.path
            d="M 420 100 L 500 100"
            stroke="#0A0A0A"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arr)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.path
            d="M 380 140 L 380 200"
            stroke="#0A0A0A"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arr)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          />
          <defs>
            <marker
              id="arr"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0A0A0A" />
            </marker>
          </defs>
          {NODES.map((n, i) => (
            <motion.g
              key={n.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={
                active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
              }
              transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
            >
              <rect
                x={n.x - 40}
                y={n.y - 24}
                width="80"
                height="48"
                rx="10"
                fill={n.color}
                stroke="#0A0A0A"
                strokeWidth="3"
              />
              <text
                x={n.x}
                y={n.y + 5}
                fontFamily="Archivo Black"
                fontSize="12"
                fill="#0A0A0A"
                textAnchor="middle"
              >
                {n.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}
