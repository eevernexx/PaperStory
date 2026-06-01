"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import type { ShowcaseCard } from "@/lib/scenes";

type Props = {
  card: ShowcaseCard;
  art: ReactNode;
  delay?: number;
};

export default function ShowcaseCardComponent({ card, art, delay = 0 }: Props) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0 #0A0A0A" }}
      className="bg-white border-3 border-ink rounded-neo-xl shadow-neo p-0 overflow-hidden cursor-pointer flex flex-col h-full group relative"
    >
      <div
        className={`h-[220px] sm:h-[280px] border-b-3 border-ink relative overflow-hidden flex items-center justify-center ${card.bgColor}`}
      >
        {art}
      </div>
      <div className="p-5 pb-6 sm:p-6 sm:pb-7">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-display text-[10.5px] sm:text-[11px] tracking-wider uppercase text-[#555] mb-3">
          <span>{card.category}</span>
          <span className="w-1 h-1 bg-[#555] rounded-full" />
          <span>{card.readingTime}</span>
        </div>
        <h3 className="text-[22px] sm:text-[26px] leading-[1.1] sm:leading-[1.05] font-display">{card.title}</h3>
        <p className="mt-2.5 text-[#333] text-[14px] sm:text-[14.5px]">{card.blurb}</p>
        <span className="mt-5 inline-flex items-center gap-2.5 font-display text-[13px] tracking-wider uppercase transition-all group-hover:gap-[18px]">
          Read the story →
        </span>
      </div>
    </motion.div>
  );

  if (card.available) {
    return (
      <Link href={`/stories/${card.slug}`} className="block">
        {inner}
      </Link>
    );
  }

  // Fallback for not-yet-available stories. All seven current stories are
  // available, so this branch is informational only.
  return <div className="opacity-60 cursor-default">{inner}</div>;
}
