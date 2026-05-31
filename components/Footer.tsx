export default function Footer() {
  return (
    <footer className="px-5 sm:px-10 pt-12 pb-8 sm:pt-[60px] sm:pb-10 bg-paper border-t-3 border-ink">
      <div className="max-w-[1280px] mx-auto flex justify-between flex-wrap gap-5 sm:gap-7 items-end">
        <div className="font-display text-[clamp(36px,7vw,96px)] leading-[0.92] max-w-[900px]">
          Research,{" "}
          <span className="font-serif italic text-coral">retold.</span>
        </div>
        <div className="font-mono text-[12px] sm:text-[13px] flex flex-col gap-1 text-right max-md:text-left">
          <span>© 2026 PaperStory</span>
          <span>Built by Aqsel</span>
          <span>Semarang · Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
