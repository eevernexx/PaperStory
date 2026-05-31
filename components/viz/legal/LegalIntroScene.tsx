export default function LegalIntroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10 bg-sky">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · INTRODUCTION
      </span>
      <svg viewBox="0 0 460 320" className="w-4/5 max-w-[460px]">
        {/* stylized Indonesia archipelago */}
        <g stroke="#0A0A0A" strokeWidth="3" fill="#B8F2C9">
          {/* Sumatra */}
          <path d="M 30 110 L 90 80 L 130 130 L 110 180 L 50 170 Z" />
          {/* Kalimantan */}
          <path d="M 160 90 L 230 80 L 260 140 L 200 170 L 165 140 Z" />
          {/* Java */}
          <path d="M 80 220 L 200 215 L 220 240 L 90 250 Z" />
          {/* Sulawesi */}
          <path d="M 280 100 L 310 110 L 315 160 L 300 200 L 285 165 L 295 130 Z" />
          {/* Papua */}
          <path d="M 360 130 L 430 120 L 440 200 L 370 195 Z" />
        </g>
        <text
          x="230"
          y="40"
          fontFamily="Archivo Black"
          fontSize="20"
          fill="#0A0A0A"
          textAnchor="middle"
        >
          120.6M ha · 63% forest
        </text>
        <text
          x="230"
          y="290"
          fontFamily="JetBrains Mono"
          fontSize="12"
          fill="#444"
          textAnchor="middle"
        >
          Indonesia · the 8th largest forest in the world
        </text>
      </svg>
    </div>
  );
}
