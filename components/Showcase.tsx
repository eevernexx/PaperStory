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
  chatbot: (
    <svg viewBox="0 0 220 200" width="75%">
      <rect x="20" y="40" width="120" height="30" rx="14" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
      <text x="32" y="60" fontFamily="DM Sans" fontSize="13" fill="#0A0A0A">Halo, mau pesan?</text>
      <rect x="60" y="90" width="120" height="30" rx="14" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
      <text x="72" y="110" fontFamily="DM Sans" fontSize="13" fill="#0A0A0A">Nasi goreng 2 👍</text>
      <rect x="20" y="140" width="140" height="30" rx="14" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
      <text x="32" y="160" fontFamily="DM Sans" fontSize="13" fill="#0A0A0A">Total Rp 30.000 ✓</text>
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
};

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="py-[120px] px-10 border-b-3 border-ink relative bg-paper max-md:px-5"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 font-display text-[13px] tracking-widest uppercase px-4 py-[7px] bg-ink text-paper rounded-full mb-6">
            ◆ See it in action
          </div>
          <h2 className="font-display text-[clamp(40px,5.5vw,84px)] max-w-[900px] tracking-tighter leading-[0.95]">
            Six papers,
            <br />
            <span className="font-serif italic font-bold text-coral">
              six stories.
            </span>
          </h2>
          <p className="max-w-[640px] mt-6 text-[17px] leading-[1.6] text-[#333]">
            Each paper rebuilt as a scrolling, animated narrative - research
            you can read instead of survive.
          </p>
        </Reveal>

        <div className="mt-[70px] grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
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
