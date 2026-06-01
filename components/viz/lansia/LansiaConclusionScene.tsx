"use client";

import { motion } from "framer-motion";

export default function LansiaConclusionScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center max-[1100px]:justify-start overflow-y-auto p-5 pt-8 sm:p-10 bg-pink text-center">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#7a3a55]">
        <span className="text-ink font-bold">SCENE</span> &middot; CONCLUSION
      </span>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6 }}
        className="font-serif italic text-[18px] sm:text-[24px] leading-[1.3] max-w-[340px]"
      >
        &ldquo;Semarang is already kind to its elderly. It just needs to make
        that kindness law.&rdquo;
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 inline-flex items-center gap-2 bg-white border-2 border-ink rounded-full px-4 py-1.5 font-mono text-[11px] sm:text-[12px] shadow-neo-xs shrink-0"
      >
        Kota Ramah Lansia &middot; UNDIP 2023
      </motion.div>
    </div>
  );
}
