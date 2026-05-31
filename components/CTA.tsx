"use client";

import Reveal from "./Reveal";
import { useUploadModal } from "@/lib/upload-modal";

export default function CTA() {
  const { setOpen } = useUploadModal();

  return (
    <section className="py-[120px] px-10 border-b-3 border-ink relative bg-ink text-paper text-center max-md:px-5">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(40px,5.5vw,84px)] mx-auto tracking-tighter leading-[0.95] text-paper">
            Stop writing papers
            <br />
            nobody{" "}
            <span className="font-serif italic font-bold text-yellow">
              finishes.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[580px] mx-auto mt-7 mb-10 text-[18px] text-[#ddd]">
            Drop in a PDF. PaperStory writes the story, designs the visuals,
            and ships a shareable link in under five minutes.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <button onClick={() => setOpen(true)} className="btn btn-primary">
            Upload your first paper →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
