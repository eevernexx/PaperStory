export default function F1IntroScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-coral text-paper">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-paper/70">
        <span className="text-paper font-bold">SCENE</span> · INTRODUCTION
      </span>
      <svg viewBox="0 0 360 240" className="w-4/5 max-w-[420px]">
        {/* die outline */}
        <rect x="40" y="40" width="280" height="160" rx="10" fill="#FFF8E7" stroke="#0A0A0A" strokeWidth="4" />
        {/* compute clusters grid 4x4 */}
        {Array.from({ length: 16 }).map((_, i) => {
          const r = Math.floor(i / 4);
          const c = i % 4;
          return (
            <rect
              key={i}
              x={60 + c * 32}
              y={60 + r * 22}
              width="22"
              height="14"
              fill="#FFE066"
              stroke="#0A0A0A"
              strokeWidth="2"
            />
          );
        })}
        {/* scratchpad strip */}
        <rect x="200" y="60" width="100" height="58" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
        <text x="250" y="92" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">SCRATCHPAD 64MB</text>
        {/* HBM2 strip */}
        <rect x="200" y="130" width="100" height="50" fill="#C9B6FF" stroke="#0A0A0A" strokeWidth="3" />
        <text x="250" y="160" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">HBM2 · 1 TB/s</text>
        <text x="180" y="220" fontFamily="Archivo Black" fontSize="13" fill="#0A0A0A" textAnchor="middle">F1 · 151.4 mm² · 14nm</text>
      </svg>
      <div className="font-display text-[clamp(60px,11vw,140px)] leading-[0.9] mt-4">
        5,400&times;
      </div>
      <div className="font-mono text-[12px] uppercase tracking-widest mt-1 opacity-80">
        gmean speedup over CPU
      </div>
    </div>
  );
}
