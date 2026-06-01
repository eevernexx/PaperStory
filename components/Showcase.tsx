import ShowcaseCard from "./ShowcaseCard";
import Reveal from "./Reveal";
import { showcase } from "@/lib/scenes";

const ART: Record<string, JSX.Element> = {
  f1: (
    <svg viewBox="0 0 320 200" width="80%">
      <path d="M10 60 H80" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 90 H50" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 120 H70" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M90 120 L120 90 L210 90 L260 110 L300 110 L300 130 L260 140 L100 140 Z"
        fill="#FFE066"
        stroke="#0A0A0A"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M170 90 L195 70 L225 70 L235 90 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="3" strokeLinejoin="round" />
      <rect x="80" y="125" width="30" height="10" rx="3" fill="#0A0A0A" />
      <circle cx="135" cy="145" r="22" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="3" />
      <circle cx="135" cy="145" r="10" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <circle cx="245" cy="145" r="22" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="3" />
      <circle cx="245" cy="145" r="10" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <rect x="155" y="103" width="60" height="8" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="2" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 200 200" width="60%">
      <ellipse cx="100" cy="120" rx="70" ry="40" fill="#A0522D" stroke="#0A0A0A" strokeWidth="3" />
      <ellipse cx="100" cy="108" rx="70" ry="40" fill="#C68B5C" stroke="#0A0A0A" strokeWidth="3" />
      <path d="M100 88 V128" stroke="#0A0A0A" strokeWidth="3" />
      <path d="M60 75 Q70 60 80 75" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 75 Q130 60 140 75" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  legal: (
    <svg viewBox="0 0 200 200" width="65%">
      {/* scale base */}
      <polygon points="100,150 70,180 130,180" fill="#0A0A0A" />
      <rect x="60" y="138" width="80" height="14" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
      {/* left pan */}
      <circle cx="50" cy="100" r="22" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <line x1="50" y1="122" x2="50" y2="138" stroke="#0A0A0A" strokeWidth="3" />
      {/* right pan */}
      <circle cx="150" cy="100" r="22" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <line x1="150" y1="122" x2="150" y2="138" stroke="#0A0A0A" strokeWidth="3" />
      {/* gavel */}
      <rect x="92" y="42" width="16" height="60" fill="#0A0A0A" />
      <rect x="78" y="20" width="44" height="30" rx="6" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
    </svg>
  ),
  ar: (
    <svg viewBox="0 0 220 220" width="70%">
      {/* phone */}
      <rect x="30" y="40" width="80" height="140" rx="12" fill="#0A0A0A" />
      <rect x="36" y="48" width="68" height="124" rx="6" fill="#FFF8E7" />
      {/* marker */}
      <rect x="48" y="120" width="44" height="44" fill="#FFE066" stroke="#0A0A0A" strokeWidth="2.5" />
      {/* AR cube */}
      <g transform="translate(130, 60)">
        <polygon points="0,30 35,5 70,30 70,75 35,100 0,75" fill="#C9B6FF" stroke="#0A0A0A" strokeWidth="3" />
        <polygon points="0,30 35,5 70,30 35,55" fill="#FFB89E" stroke="#0A0A0A" strokeWidth="3" />
        <polygon points="35,55 70,30 70,75 35,100" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
      </g>
      <path d="M 92 140 L 130 90" stroke="#0A0A0A" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
    </svg>
  ),
  neural: (
    <svg viewBox="0 0 260 200" width="78%">
      {/* input layer (4) */}
      {[40, 80, 120, 160].map((cy, i) => (
        <circle key={`in-${i}`} cx="40" cy={cy} r="11" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
      ))}
      {/* hidden layer (3) */}
      {[60, 100, 140].map((cy, i) => (
        <circle key={`h-${i}`} cx="130" cy={cy} r="13" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
      ))}
      {/* output (PIT? / COMPOUND) */}
      <circle cx="220" cy="80" r="13" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
      <circle cx="220" cy="120" r="13" fill="#A8D8FF" stroke="#0A0A0A" strokeWidth="3" />
      {/* edges in -> h */}
      {[40, 80, 120, 160].flatMap((y1) =>
        [60, 100, 140].map((y2) => (
          <line key={`e-${y1}-${y2}`} x1="51" y1={y1} x2="119" y2={y2} stroke="#0A0A0A" strokeWidth="1" opacity="0.35" />
        ))
      )}
      {/* edges h -> out */}
      {[60, 100, 140].flatMap((y1) =>
        [80, 120].map((y2) => (
          <line key={`o-${y1}-${y2}`} x1="141" y1={y1} x2="209" y2={y2} stroke="#0A0A0A" strokeWidth="1" opacity="0.35" />
        ))
      )}
      {/* labels */}
      <text x="40" y="190" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">features</text>
      <text x="130" y="190" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fill="#0A0A0A">64×3</text>
      <text x="220" y="60" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" fill="#0A0A0A">pit?</text>
      <text x="220" y="148" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" fill="#0A0A0A">tire</text>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 200 200" width="70%">
      <rect x="30" y="30" width="50" height="50" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
      <circle cx="140" cy="55" r="28" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
      <polygon points="55,110 90,170 20,170" fill="#C9B6FF" stroke="#0A0A0A" strokeWidth="3" />
      <text x="115" y="155" fontFamily="Archivo Black" fontSize="42" fill="#0A0A0A">Aa</text>
    </svg>
  ),
  lansia: (
    <svg viewBox="0 0 220 200" width="72%">
      {/* sun */}
      <circle cx="172" cy="46" r="18" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={172 + Math.cos(r) * 24}
            y1={46 + Math.sin(r) * 24}
            x2={172 + Math.cos(r) * 32}
            y2={46 + Math.sin(r) * 32}
            stroke="#0A0A0A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
      {/* park bench backrest */}
      <rect x="40" y="92" width="120" height="14" rx="3" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <rect x="40" y="78" width="120" height="14" rx="3" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      {/* seat */}
      <rect x="36" y="118" width="128" height="16" rx="4" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
      {/* armrests + legs */}
      <rect x="36" y="78" width="10" height="80" rx="3" fill="#0A0A0A" />
      <rect x="154" y="78" width="10" height="80" rx="3" fill="#0A0A0A" />
      {/* ground */}
      <line x1="20" y1="160" x2="200" y2="160" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
      {/* heart */}
      <path
        d="M100 150 l-9 -9 a6 6 0 1 1 9 -8 a6 6 0 1 1 9 8 z"
        fill="#FFB8D9"
        stroke="#0A0A0A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="py-[72px] sm:py-[120px] px-5 sm:px-10 border-b-3 border-ink relative bg-paper"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 font-display text-[13px] tracking-widest uppercase px-4 py-[7px] bg-ink text-paper rounded-full mb-6">
            ◆ See it in action
          </div>
          <h2 className="font-display text-[clamp(40px,5.5vw,84px)] max-w-[900px] tracking-tighter leading-[0.95]">
            Seven papers,
            <br />
            <span className="font-serif italic font-bold text-coral">
              seven stories.
            </span>
          </h2>
          <p className="max-w-[640px] mt-6 text-[17px] leading-[1.6] text-[#333]">
            Each paper rebuilt as a scrolling, animated narrative - research
            you can read instead of survive.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-[70px] grid grid-cols-3 gap-5 sm:gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {showcase.map((card, i) => (
            <ShowcaseCard
              key={card.slug}
              card={card}
              art={ART[card.slug]}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
