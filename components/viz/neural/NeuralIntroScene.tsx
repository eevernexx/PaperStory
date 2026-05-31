export default function NeuralIntroScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-peach">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · INTRODUCTION
      </span>
      <svg viewBox="0 0 360 200" className="w-4/5 max-w-[420px]">
        {/* input nodes */}
        {Array.from({ length: 5 }).map((_, i) => (
          <circle
            key={`in-${i}`}
            cx="40"
            cy={30 + i * 35}
            r="9"
            fill="#FFE066"
            stroke="#0A0A0A"
            strokeWidth="2.5"
          />
        ))}
        {/* hidden nodes */}
        {Array.from({ length: 4 }).map((_, i) => (
          <circle
            key={`h-${i}`}
            cx="170"
            cy={45 + i * 35}
            r="9"
            fill="#FF6B6B"
            stroke="#0A0A0A"
            strokeWidth="2.5"
          />
        ))}
        {/* output node */}
        <circle cx="300" cy="100" r="11" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
        {/* connections */}
        {Array.from({ length: 5 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <line
              key={`l1-${i}-${j}`}
              x1="49"
              y1={30 + i * 35}
              x2="161"
              y2={45 + j * 35}
              stroke="#0A0A0A"
              strokeWidth="1"
              opacity="0.4"
            />
          ))
        )}
        {Array.from({ length: 4 }).map((_, j) => (
          <line
            key={`l2-${j}`}
            x1="179"
            y1={45 + j * 35}
            x2="289"
            y2="100"
            stroke="#0A0A0A"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}
        <text x="40" y="195" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">
          features
        </text>
        <text x="170" y="195" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">
          hidden &times; 3
        </text>
        <text x="300" y="135" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">
          pit?
        </text>
      </svg>
      <div className="mt-6 font-display text-[28px] leading-[0.95] text-center max-w-[360px]">
        Virtual Strategy Engineer
      </div>
      <div className="font-mono text-[12px] uppercase tracking-widest mt-2 text-[#444]">
        F1 strategy via 2 FFNNs
      </div>
    </div>
  );
}
