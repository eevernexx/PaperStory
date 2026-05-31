export default function Footer() {
  return (
    <footer className="py-[60px] px-10 pt-[60px] pb-10 bg-paper border-t-3 border-ink max-md:px-5">
      <div className="max-w-[1280px] mx-auto flex justify-between flex-wrap gap-7 items-end">
        <div className="font-display text-[clamp(40px,7vw,96px)] leading-[0.92] max-w-[900px]">
          Research,{" "}
          <span className="font-serif italic text-coral">retold.</span>
        </div>
        <div className="font-mono text-[13px] flex flex-col gap-1 text-right max-md:text-left">
          <span>© 2026 PaperStory</span>
          <span>Built by Aqsel</span>
          <span>Semarang · Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
