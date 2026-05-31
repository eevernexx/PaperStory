"use client";

import { motion } from "framer-motion";

const ELEMENTS = [
  { name: "Garis", icon: "line" },
  { name: "Huruf", icon: "type" },
  { name: "Bentuk", icon: "shape" },
  { name: "Tekstur", icon: "texture" },
];

function Icon({ kind }: { kind: string }) {
  const stroke = { stroke: "#0A0A0A", strokeWidth: 3 };
  switch (kind) {
    case "line":
      return (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <path d="M 6 30 L 54 30" fill="none" {...stroke} strokeLinecap="round" />
          <path d="M 12 18 L 48 42" fill="none" {...stroke} strokeLinecap="round" />
        </svg>
      );
    case "type":
      return (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <text x="10" y="44" fontFamily="Archivo Black" fontSize="36" fill="#0A0A0A">Aa</text>
        </svg>
      );
    case "shape":
      return (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <rect x="8" y="8" width="22" height="22" fill="#FFE066" {...stroke} />
          <circle cx="42" cy="38" r="14" fill="#FF6B6B" {...stroke} />
        </svg>
      );
    case "texture":
      return (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <circle
                key={`${r}-${c}`}
                cx={10 + c * 10}
                cy={10 + r * 10}
                r={2}
                fill="#0A0A0A"
              />
            ))
          )}
        </svg>
      );
    default:
      return null;
  }
}

export default function DesignMethodScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-sky">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · ELEMENTS
      </span>
      <div className="font-display text-[20px] mb-5 mt-6 px-2">
        Four building blocks
      </div>
      <div className="grid grid-cols-2 gap-3 px-2">
        {ELEMENTS.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md p-4 shadow-neo-sm flex flex-col items-center gap-2"
          >
            <Icon kind={e.icon} />
            <div className="font-display text-[16px]">{e.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
