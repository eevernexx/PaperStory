"use client";

import { motion } from "framer-motion";

export default function MuthiahIntroScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-pink text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#7a3a55] mb-4"
      >
        Universitas Lampung &middot; 2026
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-[clamp(34px,7vw,62px)] leading-[0.95] tracking-tight"
      >
        Period pain,
        <br />
        <span className="font-serif italic text-coral">unspoken.</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="font-serif italic text-[15px] sm:text-[19px] mt-4 max-w-[320px] text-[#5a2030]"
      >
        Does knowing more about dysmenorrhea change how teens treat it?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-6 inline-flex items-center gap-2 bg-white border-2 border-ink rounded-full px-4 py-1.5 font-mono text-[11px] sm:text-[12px] shadow-neo-xs"
      >
        Literature review &middot; 10 studies
      </motion.div>
    </div>
  );
}
