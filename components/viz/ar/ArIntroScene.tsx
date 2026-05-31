export default function ArIntroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10 bg-sky">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · INTRODUCTION
      </span>
      <svg viewBox="0 0 460 320" className="w-4/5 max-w-[480px]">
        {/* phone */}
        <rect x="60" y="50" width="160" height="240" rx="20" fill="#0A0A0A" />
        <rect x="68" y="62" width="144" height="216" rx="12" fill="#FFF8E7" />
        {/* marker on phone */}
        <rect x="100" y="180" width="80" height="60" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
        <text x="140" y="218" fontFamily="JetBrains Mono" fontSize="14" textAnchor="middle" fill="#0A0A0A">QR</text>
        {/* AR cube floating */}
        <g transform="translate(310, 110)">
          {/* back face */}
          <polygon points="0,40 70,0 130,40 130,110 70,150 0,110" fill="#C9B6FF" stroke="#0A0A0A" strokeWidth="3" />
          {/* top face */}
          <polygon points="0,40 70,0 130,40 70,80" fill="#FFB89E" stroke="#0A0A0A" strokeWidth="3" />
          {/* right face */}
          <polygon points="70,80 130,40 130,110 70,150" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
          {/* left face */}
          <polygon points="0,40 70,80 70,150 0,110" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
        </g>
        {/* projection line */}
        <path d="M 220 200 L 310 160" stroke="#0A0A0A" strokeWidth="3" strokeDasharray="6 6" fill="none" />
        <text x="230" y="40" fontFamily="Archivo Black" fontSize="16" fill="#0A0A0A">
          Phone scans · cube appears
        </text>
      </svg>
    </div>
  );
}
