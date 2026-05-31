type Props = {
  url: string;
  authors: string;
  journal: string;
  year: string;
};

export default function PaperLinkButton({ url, authors, journal, year }: Props) {
  return (
    <div className="mt-10 p-6 bg-white border-3 border-ink rounded-neo-xl shadow-neo">
      <div className="font-mono text-xs text-[#666] uppercase tracking-wider mb-2">
        Original paper
      </div>
      <div className="font-display text-sm mb-1 leading-snug">{authors}</div>
      <div className="font-mono text-xs text-[#888] mb-4">
        {journal} · {year}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary inline-flex items-center gap-2"
      >
        Read original paper
        <span aria-hidden>↗</span>
      </a>
    </div>
  );
}
