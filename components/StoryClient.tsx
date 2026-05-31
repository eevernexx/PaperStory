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

      <div className="story-grid-max grid grid-cols-2 gap-0 max-[1100px]:grid-cols-1">
        {/* LEFT: scrolling content */}
        <div className="py-20 px-[60px] pb-[200px] max-w-[680px] xl:max-w-[720px] 2xl:max-w-[760px] ml-auto mr-10 max-[1100px]:py-[60px] max-[1100px]:px-[30px] max-[1100px]:pb-[100px] max-[1100px]:mx-auto">
          {sections.map((s, i) => (
            <StorySection
              key={`${s.scene}-${i}`}
              scene={s.scene}
              idx={i + 1}
              onActivate={handleActivate}
            >
              <div className="font-mono text-[13px] text-[#888] mb-4">
                {s.label}
              </div>
              {s.content}
            </StorySection>
          ))}
        </div>

        {/* RIGHT: sticky viz */}
        <VizStage active={activeScene} slug={slug} />
      </div>
    </>
  );
}
