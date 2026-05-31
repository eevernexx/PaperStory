"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useUploadModal } from "@/lib/upload-modal";

type FloatCardProps = {
  className: string;
  label: string;
  title: string;
  stat: string;
  depth: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
};

function FloatCard({
  className,
  label,
  title,
  stat,
  depth,
  mouseX,
  mouseY,
}: FloatCardProps) {
  const x = useTransform(mouseX, (v) => -v * depth);
  const y = useTransform(mouseY, (v) => -v * depth);
  return (
    <motion.div
      style={{ x, y }}
      className={`absolute w-[200px] border-3 border-ink rounded-neo-lg p-[18px] shadow-neo animate-float ${className}`}
    >
      <div className="font-display text-[11px] uppercase tracking-wider opacity-60 mb-2">
        {label}
      </div>
      <div className="font-display text-base leading-tight">{title}</div>
      <div className="mt-3 font-display text-[28px]">{stat}</div>
    </motion.div>
  );
}

export default function Hero() {
  const { setOpen } = useUploadModal();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative px-10 pt-[100px] pb-[140px] overflow-hidden border-b-3 border-ink"
    >
      {/* Floating decorative cards */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden max-lg:hidden">
        <FloatCard
          className="fc-1 top-[8%] right-[4%] rotate-[6deg] bg-mint"
          label="Paper · 2024"
          title="F1 Lap Time Prediction"
          stat="R² 0.97"
          depth={6}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        <FloatCard
          className="fc-2 top-[36%] right-[18%] -rotate-[5deg] bg-lavender"
          label="Paper · 2025"
          title="Coffee Bean Classification"
          stat="94.5%"
          depth={12}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        <FloatCard
          className="fc-3 top-[58%] right-[2%] rotate-[3deg] bg-peach"
          label="Paper · 2024"
          title="Climate Tipping Points"
          stat="+1.5°C"
          depth={18}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        <FloatCard
          className="fc-4 top-[78%] right-[22%] -rotate-[7deg] bg-sky"
          label="Paper · 2025"
          title="Healthcare AI Triage"
          stat="38% ↓"
          depth={24}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-[2]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-yellow border-3 border-ink rounded-full font-display text-[13px] uppercase tracking-wider shadow-neo-sm mb-[30px]">
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          Now in public preview · v0.9
        </div>

        <h1 className="font-display text-[clamp(48px,8.5vw,132px)] tracking-tighter leading-[0.92] max-w-[1100px]">
          Research deserves
          <br />
          better than <span className="strike">PDFs</span>.<br />
          It deserves{" "}
          <span className="font-serif italic font-bold text-coral tracking-tight">
            stories.
          </span>
        </h1>

        <p className="max-w-[640px] text-[clamp(17px,1.4vw,21px)] leading-[1.5] mt-8 text-[#333]">
          Transform academic papers into interactive narratives with animations,
          visualizations, illustrations, and immersive scrollytelling. Built for
          readers who want to <em>actually finish</em> the paper.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">
          <Link href="/stories/f1" className="btn btn-primary">
            Explore Stories →
          </Link>
          <button onClick={() => setOpen(true)} className="btn">
            Upload Research
          </button>
        </div>
      </div>
    </section>
  );
}
