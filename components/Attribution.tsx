type Props = {
  authors: string;
  journal: string;
  year: string;
  license: string;
};

export default function Attribution({ authors, journal, year, license }: Props) {
  return (
    <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs bg-white border-2 border-ink rounded-full px-3 py-1">
      <span>{authors}</span>
      <span className="opacity-40">·</span>
      <span>{journal}</span>
      <span className="opacity-40">·</span>
      <span>{year}</span>
      <span className="opacity-40">·</span>
      <span className="font-bold">{license}</span>
    </div>
  );
}
