import ShowcaseCard from "./ShowcaseCard";
import Reveal from "./Reveal";
import { showcase } from "@/lib/scenes";

const ART: Record<string, JSX.Element> = {
  f1: (
    <svg viewBox="0 0 320 200" width="80%">
      <path
        d="M10 60 H80"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 90 H50"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 120 H70"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M90 120 L120 90 L210 90 L260 110 L300 110 L300 130 L260 140 L100 140 Z"
        fill="#FFE066"
        stroke="#0A0A0A"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M170 90 L195 70 L225 70 L235 90 Z"
        fill="#0A0A0A"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="80" y="125" width="30" height="10" rx="3" fill="#0A0A0A" />
      <circle
        cx="135"
        cy="145"
        r="22"
        fill="#0A0A0A"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <circle
        cx="135"
        cy="145"
        r="10"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <circle
        cx="245"
        cy="145"
        r="22"
        fill="#0A0A0A"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <circle
        cx="245"
        cy="145"
        r="10"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <rect
        x="155"
        y="103"
        width="60"
        height="8"
        fill="#FF6B6B"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 200 200" width="60%">
      <ellipse
        cx="100"
        cy="120"
        rx="70"
        ry="40"
        fill="#A0522D"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <ellipse
        cx="100"
        cy="108"
        rx="70"
        ry="40"
        fill="#C68B5C"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path d="M100 88 V128" stroke="#0A0A0A" strokeWidth="3" />
      <circle cx="70" cy="100" r="4" fill="#0A0A0A" />
      <circle cx="130" cy="100" r="4" fill="#0A0A0A" />
      <path
        d="M60 75 Q70 60 80 75"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M120 75 Q130 60 140 75"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  climate: (
    <svg viewBox="0 0 200 200" width="60%">
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="#B8F2C9"
        stroke="#0A0A0A"
        strokeWidth="3.5"
      />
      <path
        d="M55 90 Q75 70 100 90 T145 90"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path
        d="M55 120 Q75 100 100 120 T145 120"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <circle
        cx="100"
        cy="60"
        r="14"
        fill="#FFE066"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path
        d="M100 30 L100 18 M85 38 L78 30 M115 38 L122 30"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  mushroom: (
    <svg viewBox="0 0 200 200" width="65%">
      <ellipse
        cx="100"
        cy="130"
        rx="50"
        ry="18"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path
        d="M60 130 Q60 60 100 60 Q140 60 140 130 Z"
        fill="#FF6B6B"
        stroke="#0A0A0A"
        strokeWidth="3.5"
      />
      <circle
        cx="80"
        cy="90"
        r="6"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
      <circle
        cx="105"
        cy="80"
        r="5"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
      <circle
        cx="120"
        cy="100"
        r="7"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
      <circle
        cx="88"
        cy="115"
        r="5"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 200 200" width="65%">
      <rect
        x="50"
        y="50"
        width="100"
        height="120"
        rx="14"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3.5"
      />
      <path
        d="M75 90 H125 M75 110 H115 M75 130 H125 M75 150 H100"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="140"
        cy="60"
        r="22"
        fill="#FF6B6B"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path
        d="M140 50 V70 M130 60 H150"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 200 200" width="65%">
      <rect
        x="40"
        y="60"
        width="120"
        height="80"
        rx="12"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3.5"
      />
      <path
        d="M50 130 L75 95 L95 110 L120 75 L150 95"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="120"
        cy="75"
        r="6"
        fill="#FF6B6B"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
      <circle
        cx="150"
        cy="95"
        r="6"
        fill="#B8F2C9"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
    </svg>
  ),
};

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="py-[120px] px-10 border-b-3 border-ink relative bg-paper max-md:px-5"
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 font-display text-[13px] tracking-widest uppercase px-4 py-[7px] bg-ink text-paper rounded-full mb-6">
            ◆ See it in action
          </div>
          <h2 className="font-display text-[clamp(40px,5.5vw,84px)] max-w-[900px] tracking-tighter leading-[0.95]">
            Six papers,
            <br />
            <span className="font-serif italic font-bold text-coral">
              six experiences.
            </span>
          </h2>
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
