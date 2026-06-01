"use client";
import { useEffect, useState } from "react";

const STARS = [
  { top: "9%",  left: "7%",   delay: "0s",    dur: "3.8s", size: 30 },
  { top: "13%", right: "9%",  delay: "-1.6s", dur: "4.4s", size: 22 },
  { top: "50%", left: "3%",   delay: "-0.9s", dur: "5.0s", size: 16 },
  { top: "52%", right: "4%",  delay: "-2.3s", dur: "4.2s", size: 20 },
  { bottom: "14%", left: "18%",  delay: "-1.3s", dur: "3.6s", size: 26 },
  { bottom: "18%", right: "14%", delay: "-3.1s", dur: "4.8s", size: 32 },
] as const;

const STAR_PATH =
  "polygon(50% 0%,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0% 50%,40% 40%)";

function fade(mounted: boolean, delay: string) {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(18px)",
    transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
  };
}

export default function ArImpactScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-coral">
      {/* Scene label */}
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/70 z-20">
        <span className="text-white font-bold">SCENE</span> · IMPACT
      </span>

      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.09) 100%)",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s, i) => {
          const { size, delay, dur, ...pos } = s;
          return (
            <div
              key={i}
              className="absolute bg-yellow animate-spin"
              style={{
                ...pos,
                width: size,
                height: size,
                animationDelay: delay,
                animationDuration: dur,
                clipPath: STAR_PATH,
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Eyebrow */}
        <div
          className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-black/45 mb-4"
          style={fade(mounted, "0.05s")}
        >
          AR in Education · Key Finding
        </div>

        {/* "Math becomes" */}
        <div
          className="font-display text-[clamp(50px,9vw,108px)] leading-[0.93] text-center"
          style={fade(mounted, "0.18s")}
        >
          Math becomes
        </div>

        {/* "touchable." with yellow underline */}
        <div
          className="relative mt-0.5"
          style={fade(mounted, "0.30s")}
        >
          <span className="font-serif italic text-[clamp(54px,9.8vw,116px)] leading-[0.93]">
            touchable.
          </span>
          <span
            className="absolute left-0 right-0 bg-yellow rounded-sm"
            style={{ bottom: "4px", height: "7px" }}
          />
        </div>

        {/* Metric badges */}
        <div
          className="flex flex-wrap justify-center gap-3 mt-9"
          style={fade(mounted, "0.48s")}
        >
          <div className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-mono text-[13px] font-bold tracking-wide shadow-lg">
            <span className="text-yellow text-lg leading-none">↑</span>
            engagement
          </div>
          <div className="flex items-center gap-2 border-[2.5px] border-black text-black px-5 py-2.5 rounded-full font-mono text-[13px] font-bold tracking-wide">
            <span className="text-[18px] leading-none">↓</span>
            abstraction
          </div>
        </div>
      </div>
    </div>
  );
}
