"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  currentIdx: number;
  totalSections: number;
  paperUrl?: string;
};

export default function StoryNav({ title, currentIdx, totalSections, paperUrl }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-paper border-b-3 border-ink max-md:px-5 gap-4">
      <div className="flex items-center gap-[18px] min-w-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white border-3 border-ink rounded-full py-2.5 px-[18px] font-display text-[13px] no-underline text-ink shadow-neo-xs hover:bg-yellow transition-colors flex-shrink-0"
        >
          ← Back
        </Link>
        <span className="font-display text-sm tracking-tight max-md:hidden truncate">
          {title}
        </span>
      </div>

      <div className="flex-1 mx-[20px] max-w-[380px] h-2.5 bg-white border-2 border-ink rounded-full overflow-hidden max-md:hidden">
        <div
          className="h-full bg-coral transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="font-mono text-[13px] text-[#555] whitespace-nowrap">
          {String(currentIdx).padStart(2, "0")} /{" "}
          {String(totalSections).padStart(2, "0")}
        </div>
        {paperUrl && (
          <a
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-ink underline underline-offset-2 decoration-2 hover:text-coral max-sm:hidden"
          >
            View paper ↗
          </a>
        )}
      </div>
    </div>
  );
}
