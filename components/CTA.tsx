"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-[72px] sm:py-[120px] px-5 sm:px-10 border-b-3 border-ink relative bg-ink text-paper text-center">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(40px,5.5vw,84px)] mx-auto tracking-tighter leading-[0.95] text-paper">
            Seven papers.
            <br />
            Seven{" "}
            <span className="font-serif italic font-bold text-yellow">
              stories.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[580px] mx-auto mt-7 mb-10 text-[18px] text-[#ddd]">
            Research transformed into interactive experiences. More stories
            coming soon.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link href="/stories/f1" className="btn btn-primary">
            Read a Story →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
