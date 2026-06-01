type Props = {
  authors: string;
  journal: string;
  year: string;
  license: string;
};

export default function Attribution({ authors, journal, year, license }: Props) {
  return (
    <div className="mt-8 inline-flex max-w-full flex-col items-center gap-1.5 bg-white border-2 border-ink rounded-neo-md px-4 py-3 font-mono text-center leading-relaxed">
      <span className="text-[12px] sm:text-[13px] font-semibold">{authors}</span>
      <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[11px] text-[#555]">
        <span>{journal}</span>
        <span className="opacity-40">·</span>
        <span>{year}</span>
        <span className="opacity-40">·</span>
        <span className="font-bold text-ink">{license}</span>
      </span>
    </div>
  );
}
