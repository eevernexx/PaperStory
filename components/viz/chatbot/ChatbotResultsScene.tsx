"use client";

import { motion } from "framer-motion";

const CHECKS = [
  { group: "Black Box · functional", items: ["Login admin", "Tambah menu", "Pesan via WhatsApp", "Konfirmasi pesanan", "Update status"] },
  { group: "White Box · basis path", items: ["Auth flow", "Order flow", "Payment flow", "Status update"] },
];

export default function ChatbotResultsScene({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center p-10 bg-yellow overflow-y-auto">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · RESULTS
      </span>
      <div className="p-[20px] flex flex-col gap-5 mt-4">
        <div className="font-display text-[18px]">All tests passed</div>
        {CHECKS.map((g, gi) => (
          <div key={g.group}>
            <div className="font-mono text-[12px] uppercase tracking-wider text-[#555] mb-2">
              {g.group}
            </div>
            <div className="flex flex-col gap-1.5">
              {g.items.map((it, i) => (
                <motion.div
                  key={it}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + gi * 0.5 + i * 0.08,
                  }}
                  className="bg-white border-2 border-ink rounded-neo-md py-2 px-3 shadow-neo-sm flex items-center gap-2 font-mono text-[13px]"
                >
                  <span className="w-5 h-5 bg-coral border-2 border-ink rounded-full flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  {it}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
