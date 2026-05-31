"use client";

import { motion } from "framer-motion";

const STEPS = [
  { k: "1", t: "Camera frame" },
  { k: "2", t: "Marker detection" },
  { k: "3", t: "Pose estimation" },
  { k: "4", t: "3D model placement" },
  { k: "5", t: "Render to screen", win: true },
];

export default function ArTechScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center max-[1100px]:justify-start p-5 sm:p-10 bg-sky overflow-y-auto">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> Â· TECH
      </span>
      <div className="font-display text-[20px] mb-5 mt-6 px-2">
        Single-marker detection flow
      </div>
      <div className="flex flex-col gap-2 px-2 max-w-[380px] mx-auto w-full">
        {STEPS.map((s, i) => (
          <div key={s.k} className="flex flex-col gap-1.5 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.14 }}
              className={`border-3 border-ink rounded-neo-md py-2.5 px-4 font-display text-[13px] shadow-neo-sm flex items-center gap-3 w-full ${
                s.win ? "bg-coral" : "bg-white"
              }`}
            >
              <span
                className={`w-[24px] h-[24px] border-2 border-ink rounded-full flex items-center justify-center text-[11px] ${
                  s.win ? "bg-ink text-paper" : "bg-coral"
                }`}
              >
                {s.k}
              </span>
              {s.t}
            </motion.div>
            {i < STEPS.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.14 }}
                className="font-display text-[14px] text-ink"
              >
                &#8595;
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
