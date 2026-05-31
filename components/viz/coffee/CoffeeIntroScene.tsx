export default function CoffeeIntroScene() {
  const beans = [
    { cx: 130, cy: 110, fill: "#8B5A2B", label: "Arabica" },
    { cx: 260, cy: 90, fill: "#6F4E37", label: "Excelsa" },
    { cx: 150, cy: 200, fill: "#A0522D", label: "Liberica" },
    { cx: 290, cy: 200, fill: "#4B2E1E", label: "Robusta" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-10 bg-gradient-to-br from-paper to-[#E8D4B6]">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · INTRODUCTION
      </span>
      <svg viewBox="0 0 420 300" className="w-4/5 max-w-[460px]">
        {beans.map((b) => (
          <g key={b.label}>
            <ellipse
              cx={b.cx}
              cy={b.cy}
              rx="42"
              ry="30"
              fill={b.fill}
              stroke="#0A0A0A"
              strokeWidth="3"
            />
            <path
              d={`M ${b.cx - 30} ${b.cy} Q ${b.cx} ${b.cy - 14} ${b.cx + 30} ${b.cy}`}
              stroke="#0A0A0A"
              strokeWidth="2.5"
              fill="none"
            />
            <text
              x={b.cx}
              y={b.cy + 56}
              fontFamily="Archivo Black"
              fontSize="13"
              fill="#0A0A0A"
              textAnchor="middle"
            >
              {b.label}
            </text>
          </g>
        ))}
        <text
          x="210"
          y="40"
          fontFamily="Archivo Black"
          fontSize="18"
          fill="#0A0A0A"
          textAnchor="middle"
        >
          Four varieties · one model
        </text>
      </svg>
    </div>
  );
}
