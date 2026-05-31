"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Point = { x: number; y: number; color: string; age: number };

// Seeded LCG random so server and client render identical points (no hydration mismatch)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generatePoints(): Point[] {
  const rand = seededRandom(42);
  const compounds = [
    { color: "#FF6B6B", count: 30, degr: 2.6 }, // Soft
    { color: "#A8D8FF", count: 30, degr: 1.6 }, // Medium
    { color: "#C9B6FF", count: 20, degr: 1.0 }, // Hard
  ];

  const pts: Point[] = [];
  compounds.forEach((c) => {
    for (let i = 0; i < c.count; i++) {
      const age = rand() * 38;
      const x = 40 + (age / 40) * 340;
      const baseY = 215 - age * c.degr + (rand() - 0.5) * 22;
      const y = Math.max(35, Math.min(238, baseY));
      pts.push({ x, y, color: c.color, age });
    }
  });
  return pts;
}

export default function DatasetScene({ active }: { active: boolean }) {
  const points = useMemo(() => generatePoints(), []);

  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-mint">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · DATASET
      </span>
      <div className="p-[30px] flex flex-col h-full">
        <div className="font-display text-[18px] mb-1">
          Lap time vs. tire age — Monaco 2024
        </div>
        <div className="font-mono text-xs text-[#555] mb-4">
          1,420 laps · 20 drivers · color = compound
        </div>
        <svg
          viewBox="0 0 400 280"
          className="flex-1 w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* axes */}
          <line
            x1="40"
            y1="240"
            x2="380"
            y2="240"
            stroke="#0A0A0A"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="20"
            x2="40"
            y2="240"
            stroke="#0A0A0A"
            strokeWidth="2"
          />
          <g fontFamily="JetBrains Mono" fontSize="10" fill="#666">
            <text x="40" y="258" textAnchor="middle">
              0
            </text>
            <text x="125" y="258" textAnchor="middle">
              10
            </text>
            <text x="210" y="258" textAnchor="middle">
              20
            </text>
            <text x="295" y="258" textAnchor="middle">
              30
            </text>
            <text x="380" y="258" textAnchor="middle">
              40 laps
            </text>
            <text x="32" y="244" textAnchor="end">
              75s
            </text>
            <text x="32" y="160" textAnchor="end">
              78s
            </text>
            <text x="32" y="80" textAnchor="end">
              82s
            </text>
          </g>
          {points.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={4.2}
              fill={p.color}
              stroke="#0A0A0A"
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? 0.85 : 0 }}
              transition={{ duration: 0.4, delay: i * 0.012 }}
            />
          ))}
          <motion.path
            d="M 50 220 Q 200 180 370 100"
            stroke="#0A0A0A"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 0.9 : 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />
        </svg>
      </div>
    </div>
  );
}
