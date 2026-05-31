"use client";

export default function ChatbotImpactScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-coral">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-white/70">
        <span className="text-white font-bold">SCENE</span> · IMPACT
      </span>
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "14%", left: "12%", delay: "0s" },
          { top: "22%", right: "14%", delay: "-1s" },
          { bottom: "18%", left: "18%", delay: "-2s" },
          { bottom: "26%", right: "12%", delay: "-3s" },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute w-5 h-5 bg-yellow animate-spin"
            style={{
              ...s,
              animationDelay: s.delay,
              clipPath:
                "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
            }}
          />
        ))}
      </div>
      <div className="font-display text-[clamp(54px,9vw,110px)] leading-[0.95] text-center max-w-[420px]">
        Offline → Online
      </div>
      <div className="font-serif italic text-[22px] mt-5 text-center max-w-[340px]">
        no aggregator fees · no app to install · just WhatsApp
      </div>
    </div>
  );
}
