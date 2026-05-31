import FeatureCard from "./FeatureCard";
import Reveal from "./Reveal";

const FEATURES = [
  {
    num: "01 / 05",
    title: "Scrollytelling Engine",
    desc: "Scroll-driven narratives where visualizations respond to reading pace. Every section reveals something new.",
    bgColor: "bg-mint",
    spanCols: "col-span-5 max-lg:col-span-1",
    iconKey: "scroll" as const,
  },
  {
    num: "02 / 05",
    title: "Animated Visualizations",
    desc: "Static research figures transformed into animated charts, counters, scatter plots, and interactive data displays that make findings visceral.",
    bgColor: "bg-peach",
    spanCols: "col-span-7 max-lg:col-span-2",
    iconKey: "viz" as const,
  },
  {
    num: "03 / 05",
    title: "Scene-Based Storytelling",
    desc: "Each paper section has a dedicated visual scene. 10 scenes per paper, each designed for its content.",
    bgColor: "bg-lavender",
    spanCols: "col-span-4 max-lg:col-span-1",
    iconKey: "story" as const,
  },
  {
    num: "04 / 05",
    title: "Research Made Readable",
    desc: "Dense methodology becomes intuitive. Complex results become conversations.",
    bgColor: "bg-sky",
    spanCols: "col-span-4 max-lg:col-span-1",
    iconKey: "simplify" as const,
  },
  {
    num: "05 / 05",
    title: "Neobrutalist Design",
    desc: "Bold typography, thick borders, vibrant pastels. Academic content, editorial soul.",
    bgColor: "bg-yellow",
    spanCols: "col-span-4 max-lg:col-span-1",
    iconKey: "ai" as const,
  },
];

const ICONS = {
  ai: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="6" y="6" width="68" height="68" rx="16" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <rect x="20" y="20" width="14" height="14" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
      <circle cx="55" cy="27" r="9" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
      <polygon points="20,60 36,60 28,46" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
      <text x="55" y="64" fontFamily="Archivo Black" fontSize="18" fill="#0A0A0A">Aa</text>
    </svg>
  ),
  viz: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="6" y="6" width="68" height="68" rx="16" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <rect x="18" y="44" width="10" height="22" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
      <rect x="34" y="30" width="10" height="36" fill="#B8F2C9" stroke="#0A0A0A" strokeWidth="3" />
      <rect x="50" y="18" width="10" height="48" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="22" y="6" width="36" height="68" rx="10" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <rect x="30" y="18" width="20" height="8" rx="4" fill="#0A0A0A" />
      <path d="M40 38 V58 M32 50 L40 58 L48 50" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  simplify: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="6" y="6" width="68" height="68" rx="16" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <path d="M22 50 Q40 20 58 50" stroke="#0A0A0A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="32" r="6" fill="#FFE066" stroke="#0A0A0A" strokeWidth="3" />
    </svg>
  ),
  story: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect x="6" y="6" width="68" height="68" rx="16" fill="#fff" stroke="#0A0A0A" strokeWidth="3" />
      <path d="M14 56 L26 40 L36 48 L50 26 L66 36" stroke="#0A0A0A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="26" r="5" fill="#FF6B6B" stroke="#0A0A0A" strokeWidth="3" />
    </svg>
  ),
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-[72px] sm:py-[120px] px-5 sm:px-10 border-b-3 border-ink relative bg-paper-2"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 font-display text-[13px] tracking-widest uppercase px-4 py-[7px] bg-ink text-paper rounded-full mb-6">
            ◆ What it does
          </div>
          <h2 className="font-display text-[clamp(40px,5.5vw,96px)] max-w-[900px] tracking-tighter leading-[0.95]">
            Five tools to turn a paper
            <br />
            into{" "}
            <span className="font-serif italic font-bold text-coral">
              an experience.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-[70px] grid grid-cols-12 gap-4 sm:gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.num}
              num={f.num}
              title={f.title}
              desc={f.desc}
              bgColor={f.bgColor}
              spanCols={f.spanCols}
              icon={ICONS[f.iconKey]}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
