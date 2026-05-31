import FeatureCard from "./FeatureCard";
import Reveal from "./Reveal";

const FEATURES = [
  {
    num: "01 / 05",
    title: "AI Story Generation",
    desc: "Upload your paper. PaperStory's LLM pipeline extracts the narrative spine — problem, method, evidence, takeaway — and rewrites it as a story.",
    bgColor: "bg-mint",
    spanCols: "col-span-5 max-lg:col-span-1",
    iconKey: "ai" as const,
  },
  {
    num: "02 / 05",
    title: "Interactive Visualizations",
    desc: "Static figures become alive. Charts you can tilt, hover, filter, and scroll through. Tables become narratives. Every dataset becomes a guided tour.",
    bgColor: "bg-peach",
    spanCols: "col-span-7 max-lg:col-span-2",
    iconKey: "viz" as const,
  },
  {
    num: "03 / 05",
    title: "Scrollytelling Engine",
    desc: "Pin visualizations. Drive them with scroll. Reveal data at the speed of reading.",
    bgColor: "bg-lavender",
    spanCols: "col-span-4 max-lg:col-span-1",
    iconKey: "scroll" as const,
  },
  {
    num: "04 / 05",
    title: "Research Simplification",
    desc: "Dense methodology compressed into intuition, without losing rigor.",
    bgColor: "bg-sky",
    spanCols: "col-span-4 max-lg:col-span-1",
    iconKey: "simplify" as const,
  },
  {
    num: "05 / 05",
    title: "Data Storytelling",
    desc: "Numbers become characters with motives, conflict, and resolution.",
    bgColor: "bg-yellow",
    spanCols: "col-span-4 max-lg:col-span-1",
    iconKey: "story" as const,
  },
];

const ICONS = {
  ai: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="6"
        y="6"
        width="68"
        height="68"
        rx="16"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path
        d="M22 30 H58 M22 42 H50 M22 54 H44"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="64"
        cy="22"
        r="6"
        fill="#FF6B6B"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
    </svg>
  ),
  viz: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="6"
        y="6"
        width="68"
        height="68"
        rx="16"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <rect
        x="18"
        y="44"
        width="10"
        height="22"
        fill="#FFE066"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <rect
        x="34"
        y="30"
        width="10"
        height="36"
        fill="#B8F2C9"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <rect
        x="50"
        y="18"
        width="10"
        height="48"
        fill="#FF6B6B"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="22"
        y="6"
        width="36"
        height="68"
        rx="10"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <rect x="30" y="18" width="20" height="8" rx="4" fill="#0A0A0A" />
      <path
        d="M40 38 V58 M32 50 L40 58 L48 50"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  simplify: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="6"
        y="6"
        width="68"
        height="68"
        rx="16"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path
        d="M22 50 Q40 20 58 50"
        stroke="#0A0A0A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="40"
        cy="32"
        r="6"
        fill="#FFE066"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
    </svg>
  ),
  story: (
    <svg viewBox="0 0 80 80" fill="none">
      <rect
        x="6"
        y="6"
        width="68"
        height="68"
        rx="16"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <path
        d="M14 56 L26 40 L36 48 L50 26 L66 36"
        stroke="#0A0A0A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="50"
        cy="26"
        r="5"
        fill="#FF6B6B"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
    </svg>
  ),
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-[120px] px-10 border-b-3 border-ink relative bg-paper-2 max-md:px-5"
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 font-display text-[13px] tracking-widest uppercase px-4 py-[7px] bg-ink text-paper rounded-full mb-6">
            ◆ What it does
          </div>
          <h2 className="font-display text-[clamp(40px,5.5vw,84px)] max-w-[900px] tracking-tighter leading-[0.95]">
            Five tools to turn a paper
            <br />
            into{" "}
            <span className="font-serif italic font-bold text-coral">
              an experience.
            </span>
          </h2>
        </Reveal>

        <div className="mt-[70px] grid grid-cols-12 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
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
