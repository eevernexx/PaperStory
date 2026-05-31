"use client";

import { motion } from "framer-motion";

const ROWS = [
  { k: "Engagement", a: "Low", b: "High" },
  { k: "Spatial understanding", a: "2D inferred", b: "3D actual" },
  { k: "Initiative", a: "Teacher-led", b: "Student-led" },
  { k: "Cost per student", a: "Books + props", b: "Free (own phone)" },
];

export default function ArMotivationScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-mint overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> Â· MOTIVATION
      </span>
      <div className="font-display text-[20px] mb-1 mt-6 px-2">
        Conventional vs. AR learning
      </div>
      <div className="font-mono text-xs text-[#555] mb-4 px-2">
        observed across MI Wasilatul Huda classrooms
      </div>
      <div className="px-2 grid grid-cols-[1.3fr_1fr_1fr] gap-x-3 gap-y-2 text-[12.5px]">
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555]">Property</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-[#555] text-right">Conventional</div>
        <div className="font-display text-[11px] uppercase tracking-wider text-coral text-right">AR</div>
        {ROWS.map((r, i) => (
          <motion.div
            key={r.k}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            className="contents font-mono"
          >
            <div className="border-t border-ink/20 pt-1">{r.k}</div>
            <div className="border-t border-ink/20 pt-1 text-right text-[#555]">{r.a}</div>
            <div className="border-t border-ink/20 pt-1 text-right font-bold text-coral">{r.b}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
