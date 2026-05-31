"use client";

import { useState } from "react";

export default function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="bg-ink text-paper py-[22px] overflow-hidden border-b-3 border-ink whitespace-nowrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inline-flex gap-[60px] font-display text-[26px] tracking-tight animate-marquee"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        <span className="inline-flex items-center gap-[60px]">
          SCROLLYTELLING <span className="text-coral text-[22px]">✦</span>
          DATA AS NARRATIVE <span className="text-coral text-[22px]">✦</span>
          10 SCENES PER PAPER{" "}
          <span className="text-coral text-[22px]">✦</span>
          EDITORIAL DESIGN <span className="text-coral text-[22px]">✦</span>
          RESEARCH, REIMAGINED{" "}
          <span className="text-coral text-[22px]">✦</span>
          SCROLLYTELLING <span className="text-coral text-[22px]">✦</span>
          DATA AS NARRATIVE <span className="text-coral text-[22px]">✦</span>
          10 SCENES PER PAPER{" "}
          <span className="text-coral text-[22px]">✦</span>
          EDITORIAL DESIGN <span className="text-coral text-[22px]">✦</span>
          RESEARCH, REIMAGINED{" "}
          <span className="text-coral text-[22px]">✦</span>
        </span>
      </div>
    </div>
  );
}
