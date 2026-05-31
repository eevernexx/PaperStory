export default function ChatbotIntroScene() {
  const bubbles = [
    { x: 40, y: 60, w: 200, text: "Halo, mau pesan apa?", from: "bot" },
    { x: 100, y: 120, w: 180, text: "Nasi goreng 2 ya", from: "user" },
    { x: 40, y: 180, w: 220, text: "Siap. Total Rp 30.000", from: "bot" },
    { x: 100, y: 240, w: 120, text: "Oke 👍", from: "user" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-10 bg-peach">
      <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · INTRODUCTION
      </span>
      <div className="relative w-[300px] h-[480px] bg-white border-3 border-ink rounded-neo-xl shadow-neo-lg p-5 pt-8">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-ink rounded-full" />
        <div className="font-display text-[14px] mb-3 text-center pb-2 border-b-2 border-ink">
          WhatsApp · Warung Barokah
        </div>
        <svg viewBox="0 0 300 320" className="w-full h-[360px]">
          {bubbles.map((b, i) => (
            <g key={i}>
              <rect
                x={b.from === "bot" ? 10 : 300 - b.w - 10}
                y={i * 70 + 10}
                width={b.w}
                height="40"
                rx="14"
                fill={b.from === "bot" ? "#FFE066" : "#B8F2C9"}
                stroke="#0A0A0A"
                strokeWidth="2.5"
              />
              <text
                x={b.from === "bot" ? 22 : 300 - b.w + 2}
                y={i * 70 + 35}
                fontFamily="DM Sans"
                fontSize="13"
                fill="#0A0A0A"
              >
                {b.text}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
