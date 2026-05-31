"use client";

import { motion } from "framer-motion";

const APPLICATIONS = [
  { name: "Logo", desc: "Visual mark of identity" },
  { name: "Stationery", desc: "Letterhead · card · envelope" },
  { name: "Signage", desc: "Wayfinding · storefront" },
  { name: "Advertising", desc: "Print · digital · OOH" },
];

export default function DesignImpactScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-coral overflow-y-auto">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-white/70">
        <span className="text-white font-bold">SCENE</span> · APPLICATION
      </span>
      <div className="font-display text-[22px] mb-5 mt-6 px-2">
        Where the principles ship
      </div>
      <div className="grid grid-cols-2 gap-3 px-2 pb-4">
        {APPLICATIONS.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={
              active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }
            }
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="bg-white border-3 border-ink rounded-neo-md p-4 shadow-neo-sm"
          >
            <div className="font-display text-[18px] mb-1">{a.name}</div>
            <div className="font-mono text-[11px] text-[#555]">{a.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
