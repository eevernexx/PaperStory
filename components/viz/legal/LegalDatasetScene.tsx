"use client";

import { motion } from "framer-motion";

export default function LegalDatasetScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-peach">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · TENSION
      </span>
      <div className="font-display text-[22px] mb-7 text-center">
        Sustainability vs. economy
      </div>
      <svg viewBox="0 0 320 220" className="w-4/5 max-w-[320px]">
        {/* fulcrum */}
        <polygon points="160,170 130,210 190,210" fill="#0A0A0A" />
        {/* beam */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={active ? { rotate: [0, -8, 8, 0] } : { rotate: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "160px 170px" }}
        >
          <rect x="40" y="160" width="240" height="14" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
          {/* left pan */}
          <circle cx="60" cy="120" r="34" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
          <text x="60" y="125" fontFamily="Archivo Black" fontSize="11" fill="#0A0A0A" textAnchor="middle">
            NATURE
          </text>
          {/* right pan */}
          <circle cx="260" cy="120" r="34" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
          <text x="260" y="125" fontFamily="Archivo Black" fontSize="11" fill="#FFF" textAnchor="middle">
            ECON.
          </text>
          {/* strings */}
          <line x1="60" y1="154" x2="60" y2="160" stroke="#0A0A0A" strokeWidth="2" />
          <line x1="260" y1="154" x2="260" y2="160" stroke="#0A0A0A" strokeWidth="2" />
        </motion.g>
      </svg>
      <div className="font-serif italic text-[18px] mt-4 text-center max-w-[340px]">
        the central discourse of UU 32/2009
      </div>
    </div>
  );
}
