"use client";

import { motion } from "framer-motion";

const SHAPES = [
  { name: "Kubus", desc: "Cube · 6 faces" },
  { name: "Balok", desc: "Cuboid · 6 faces" },
  { name: "Tabung", desc: "Cylinder" },
  { name: "Kerucut", desc: "Cone" },
  { name: "Bola", desc: "Sphere" },
  { name: "Limas", desc: "Pyramid" },
];

export default function ArDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-peach overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · SHAPES
      </span>
      <div className="font-display text-[20px] mb-5 mt-8 px-2">
        Six bangun ruang in AR
      </div>
      <div className="grid grid-cols-2 gap-3 px-2 pb-6">
        {SHAPES.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="bg-white border-3 border-ink rounded-neo-md py-4 px-4 shadow-neo-sm flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-coral border-2 border-ink rounded-neo-md flex items-center justify-center font-display text-xs">
              3D
            </div>
            <div>
              <div className="font-display text-[15px]">{s.name}</div>
              <div className="font-mono text-[10px] text-[#666]">{s.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
