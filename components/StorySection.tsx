"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { SceneId } from "@/lib/scenes";

type Props = {
  scene: SceneId;
  idx: number;
  onActivate: (scene: SceneId, idx: number) => void;
  children: React.ReactNode;
};

export default function StorySection({
  scene,
  idx,
  onActivate,
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  // amount: 0.5 means "fire when 50% of the section is in view"
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView) onActivate(scene, idx);
  }, [inView, scene, idx, onActivate]);

  return (
    <article
      ref={ref}
      data-scene={scene}
      className={`min-h-[95vh] pb-20 transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-30"
      }`}
    >
      {children}
    </article>
  );
}
