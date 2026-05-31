export default function DesignIntroScene() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10 bg-peach overflow-hidden">
      <span className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#666]">
        <span className="text-ink font-bold">SCENE</span> · INTRODUCTION
      </span>
      <div className="font-display text-[clamp(72px,14vw,170px)] leading-[0.85] tracking-[-0.04em] text-center">
        DESAIN
      </div>
      <div className="font-serif italic text-[clamp(40px,9vw,110px)] leading-[0.85] text-coral text-center -mt-3">
        grafis.
      </div>
      <div className="mt-5 font-mono text-[12px] uppercase tracking-widest text-[#444]">
        media · ungkap · periklanan
      </div>
      <div className="absolute top-12 left-8 w-12 h-12 bg-coral border-3 border-ink rounded-full" />
      <div className="absolute bottom-10 right-10 w-14 h-14 bg-mint border-3 border-ink rotate-12" />
      <div className="absolute top-1/2 right-12 w-8 h-8 bg-yellow border-3 border-ink rotate-45" />
    </div>
  );
}
