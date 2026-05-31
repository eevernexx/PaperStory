"use client";

import { motion } from "framer-motion";

export default function ArProblemScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-lavender">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · THE PROBLEM
      </span>
      <div className="font-display text-[22px] mb-5 self-start mt-8 px-2">
        Conventional vs. AR
      </div>
      <div className="grid grid-cols-2 gap-4 px-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border-3 border-ink rounded-neo-md p-5 shadow-neo-sm"
        >
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#888] mb-2">
            Conventional
          </div>
          <div className="font-display text-[20px] mb-3">Buku &amp; papan tulis</div>
          <ul className="text-[13px] font-mono leading-7 text-[#444]">
            <li>· 2D illustration</li>
            <li>· Static</li>
            <li>· Guess the depth</li>
            <li>· Memorize formulas</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-coral border-3 border-ink rounded-neo-md p-5 shadow-neo-sm"
        >
          <div className="font-mono text-[11px] uppercase tracking-wider text-ink mb-2">
            AR · Android
          </div>
          <div className="font-display text-[20px] mb-3">Single marker</div>
          <ul className="text-[13px] font-mono leading-7 text-ink">
            <li>· 3D in real space</li>
            <li>· Interactive</li>
            <li>· See the volume</li>
            <li>· Touch & rotate</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
