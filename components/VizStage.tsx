"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { SceneId } from "@/lib/scenes";
import IntroScene from "./viz/IntroScene";
import ProblemScene from "./viz/ProblemScene";
import DatasetScene from "./viz/DatasetScene";
import MethodScene from "./viz/MethodScene";
import ResultsScene from "./viz/ResultsScene";
import ImpactScene from "./viz/ImpactScene";
import ConclusionScene from "./viz/ConclusionScene";

type Props = { active: SceneId };

export default function VizStage({ active }: Props) {
  const renderScene = (scene: SceneId) => {
    const isActive = active === scene;
    switch (scene) {
      case "intro":
        return <IntroScene />;
      case "problem":
        return <ProblemScene active={isActive} />;
      case "dataset":
        return <DatasetScene active={isActive} />;
      case "method":
        return <MethodScene active={isActive} />;
      case "results":
        return <ResultsScene active={isActive} />;
      case "impact":
        return <ImpactScene active={isActive} />;
      case "conclusion":
        return <ConclusionScene active={isActive} />;
    }
  };

  return (
    <div className="sticky top-[60px] h-[calc(100vh-60px)] py-[30px] pr-10 pl-0 border-l-3 border-ink max-[1100px]:relative max-[1100px]:h-[60vh] max-[1100px]:border-l-0 max-[1100px]:border-t-3 max-[1100px]:px-[30px]">
      <div className="w-full h-full bg-white border-3 border-ink rounded-neo-xl shadow-neo-lg relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0"
          >
            {renderScene(active)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
