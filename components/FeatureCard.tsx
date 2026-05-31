"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type FeatureCardProps = {
  num: string;
  title: string;
  desc: string;
  bgColor: string;
  spanCols: string;
  icon: ReactNode;
  delay?: number;
};

export default function FeatureCard({
  num,
  title,
  desc,
  bgColor,
  spanCols,
  icon,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0 #0A0A0A" }}
      className={`bg-white border-3 border-ink rounded-neo-xl shadow-neo p-9 px-7 relative overflow-hidden min-h-[320px] md:min-h-[360px] xl:min-h-[380px] flex flex-col ${bgColor} ${spanCols}`}
    >
      <div className="font-display text-[14px] tracking-widest opacity-50 mb-4">
        {num}
      </div>
      <h3 className="text-[30px] tracking-tight mb-3.5 font-display">
        {title}
      </h3>
      <p className="text-[15.5px] leading-[1.55] text-[#1a1a1a]">{desc}</p>
      <div className="mt-auto w-20 h-20 self-end">{icon}</div>
    </motion.div>
  );
}
