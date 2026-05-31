"use client";

import { useCallback, useState } from "react";
import StoryNav from "@/components/StoryNav";
import StorySection from "@/components/StorySection";
import VizStage from "@/components/VizStage";
import type { SceneId } from "@/lib/scenes";
import type { StorySectionData } from "@/lib/f1-story";

type Props = {
  title: string;
  slug: string;
  sections: StorySectionData[];
  paperUrl?: string;
};

export default function StoryClient({ title, slug, sections, paperUrl }: Props) {
  const initialScene: SceneId = sections[0]?.scene ?? "intro";
  const [activeScene, setActiveScene] = useState<SceneId>(initialScene);
  const [activeIdx, setActiveIdx] = useState(1);

  const handleActivate = useCallback((scene: SceneId, idx: number) => {
    setActiveScene(scene);
    setActiveIdx(idx);
  }, []);

  return (
    <>
      <StoryNav
        title={title}
        currentIdx={activeIdx}
        totalSections={sections.length}
        paperUrl={paperUrl}
      />

      {/*
        Desktop (>= 1100px): two-column grid, narrative left, viz right (sticky).
        Mobile/tablet (< 1100px): flex column-reverse so viz renders ABOVE narrative,
          and viz stays sticky to the top of the viewport while narrative scrolls.
      */}
      <div className="story-grid-max grid grid-cols-2 gap-0 max-[1100px]:flex max-[1100px]:flex-col-reverse">
        {/* Scrolling narrative */}
        <div className="py-20 px-[60px] pb-[200px] max-w-[680px] xl:max-w-[720px] 2xl:max-w-[760px] ml-auto mr-10 max-[1100px]:py-8 max-[1100px]:px-5 sm:max-[1100px]:py-10 sm:max-[1100px]:px-[30px] max-[1100px]:pb-[80px] sm:max-[1100px]:pb-[100px] max-[1100px]:mx-auto max-[1100px]:max-w-full max-[1100px]:w-full">
          {sections.map((s, i) => (
            <StorySection
              key={`${s.scene}-${i}`}
              scene={s.scene}
              idx={i + 1}
              onActivate={handleActivate}
            >
              <div className="font-mono text-[12px] sm:text-[13px] text-[#888] mb-3 sm:mb-4">
                {s.label}
              </div>
              {s.content}
            </StorySection>
          ))}
        </div>

        {/* Sticky viz: right column on desktop, top of viewport on mobile */}
        <VizStage active={activeScene} slug={slug} />
      </div>
    </>
  );
}
