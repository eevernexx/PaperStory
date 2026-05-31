export default function IntroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10 bg-gradient-to-br from-peach to-coral">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · INTRODUCTION
      </span>
      <svg viewBox="0 0 480 280" className="w-4/5 max-w-[480px]">
        <path
          d="M10 80 H100"
          stroke="#0A0A0A"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M10 130 H70"
          stroke="#0A0A0A"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M10 180 H110"
          stroke="#0A0A0A"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M130 180 L170 130 L300 130 L380 160 L450 160 L450 195 L380 215 L150 215 Z"
          fill="#FFE066"
          stroke="#0A0A0A"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M240 130 L280 95 L330 95 L345 130 Z"
          fill="#0A0A0A"
        />
        <rect x="115" y="200" width="40" height="14" rx="4" fill="#0A0A0A" />
        <circle cx="195" cy="220" r="32" fill="#0A0A0A" />
        <circle
          cx="195"
          cy="220"
          r="14"
          fill="#fff"
          stroke="#0A0A0A"
          strokeWidth="3"
        />
        <circle cx="360" cy="220" r="32" fill="#0A0A0A" />
        <circle
          cx="360"
          cy="220"
          r="14"
          fill="#fff"
          stroke="#0A0A0A"
          strokeWidth="3"
        />
        <rect
          x="220"
          y="153"
          width="80"
          height="12"
          fill="#FF6B6B"
          stroke="#0A0A0A"
          strokeWidth="2"
        />
        <text
          x="240"
          y="68"
          fontFamily="Archivo Black"
          fontSize="22"
          fill="#0A0A0A"
        >
          #16
        </text>
      </svg>
    </div>
  );
}
