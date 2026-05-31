"use client";

import { motion } from "framer-motion";

const ARTICLES = [
  {
    id: "Pasal 28H",
    text: "Right to a healthy environment is a fundamental human right.",
  },
  {
    id: "Pasal 33(3)",
    text: "Earth, water, and natural resources are controlled by the state and used for the people.",
  },
  {
    id: "Pasal 33(4)",
    text: "National economy is organized on the principle of sustainability and environmental insight.",
  },
];

export default function LegalArticlesScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-5 sm:p-10 bg-peach overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · ARTICLES
      </span>
      <div className="font-display text-[20px] mb-1 mt-6 px-2">
        Constitutional anchors
      </div>
      <div className="font-mono text-xs text-[#555] mb-5 px-2">
        UUD 1945 · the three articles every environmental ruling cites
      </div>
      <div className="flex flex-col gap-2.5 px-2">
        {ARTICLES.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 14 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            className="bg-white border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm"
          >
            <div className="font-mono text-[12px] uppercase tracking-wider text-coral mb-1">
              {a.id}
            </div>
            <div className="font-serif text-[14px] leading-[1.45]">{a.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
