"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { SceneId } from "@/lib/scenes";

// F1 accelerator (slug: f1)
import F1IntroScene from "./viz/f1/F1IntroScene";
import F1ProblemScene from "./viz/f1/F1ProblemScene";
import F1MotivationScene from "./viz/f1/F1MotivationScene";
import F1ArchitectureScene from "./viz/f1/F1ArchitectureScene";
import F1DatasetScene from "./viz/f1/F1DatasetScene";
import F1MethodScene from "./viz/f1/F1MethodScene";
import F1BenchmarkScene from "./viz/f1/F1BenchmarkScene";
import F1ResultsScene from "./viz/f1/F1ResultsScene";
import F1ComparisonScene from "./viz/f1/F1ComparisonScene";
import F1ConclusionScene from "./viz/f1/F1ConclusionScene";

// Coffee
import CoffeeIntroScene from "./viz/coffee/CoffeeIntroScene";
import CoffeeProblemScene from "./viz/coffee/CoffeeProblemScene";
import CoffeeMotivationScene from "./viz/coffee/CoffeeMotivationScene";
import CoffeeDatasetScene from "./viz/coffee/CoffeeDatasetScene";
import CoffeeMethodScene from "./viz/coffee/CoffeeMethodScene";
import CoffeeTrainingScene from "./viz/coffee/CoffeeTrainingScene";
import CoffeeResultsScene from "./viz/coffee/CoffeeResultsScene";
import CoffeeComparisonScene from "./viz/coffee/CoffeeComparisonScene";
import CoffeeImpactScene from "./viz/coffee/CoffeeImpactScene";
import CoffeeConclusionScene from "./viz/coffee/CoffeeConclusionScene";

// Legal
import LegalIntroScene from "./viz/legal/LegalIntroScene";
import LegalProblemScene from "./viz/legal/LegalProblemScene";
import LegalMotivationScene from "./viz/legal/LegalMotivationScene";
import LegalArticlesScene from "./viz/legal/LegalArticlesScene";
import LegalDatasetScene from "./viz/legal/LegalDatasetScene";
import LegalMethodScene from "./viz/legal/LegalMethodScene";
import LegalReformScene from "./viz/legal/LegalReformScene";
import LegalResultsScene from "./viz/legal/LegalResultsScene";
import LegalImpactScene from "./viz/legal/LegalImpactScene";
import LegalConclusionScene from "./viz/legal/LegalConclusionScene";

// AR
import ArIntroScene from "./viz/ar/ArIntroScene";
import ArProblemScene from "./viz/ar/ArProblemScene";
import ArMotivationScene from "./viz/ar/ArMotivationScene";
import ArTechScene from "./viz/ar/ArTechScene";
import ArDatasetScene from "./viz/ar/ArDatasetScene";
import ArMethodScene from "./viz/ar/ArMethodScene";
import ArUsabilityScene from "./viz/ar/ArUsabilityScene";
import ArResultsScene from "./viz/ar/ArResultsScene";
import ArImpactScene from "./viz/ar/ArImpactScene";
import ArConclusionScene from "./viz/ar/ArConclusionScene";

// Neural (Virtual Strategy Engineer)
import NeuralIntroScene from "./viz/neural/NeuralIntroScene";
import NeuralProblemScene from "./viz/neural/NeuralProblemScene";
import NeuralMotivationScene from "./viz/neural/NeuralMotivationScene";
import NeuralArchScene from "./viz/neural/NeuralArchScene";
import NeuralDatasetScene from "./viz/neural/NeuralDatasetScene";
import NeuralMethodScene from "./viz/neural/NeuralMethodScene";
import NeuralTrainingScene from "./viz/neural/NeuralTrainingScene";
import NeuralResultsScene from "./viz/neural/NeuralResultsScene";
import NeuralComparisonScene from "./viz/neural/NeuralComparisonScene";
import NeuralConclusionScene from "./viz/neural/NeuralConclusionScene";

// Design
import DesignIntroScene from "./viz/design/DesignIntroScene";
import DesignProblemScene from "./viz/design/DesignProblemScene";
import DesignMotivationScene from "./viz/design/DesignMotivationScene";
import DesignElementsScene from "./viz/design/DesignElementsScene";
import DesignDatasetScene from "./viz/design/DesignDatasetScene";
import DesignMethodScene from "./viz/design/DesignMethodScene";
import DesignFunctionsScene from "./viz/design/DesignFunctionsScene";
import DesignResultsScene from "./viz/design/DesignResultsScene";
import DesignImpactScene from "./viz/design/DesignImpactScene";
import DesignConclusionScene from "./viz/design/DesignConclusionScene";

type Props = { active: SceneId; slug: string };

export default function VizStage({ active, slug }: Props) {
  const a = true;

  const renderScene = (scene: SceneId) => {
    if (slug === "f1") {
      switch (scene) {
        case "intro": return <F1IntroScene />;
        case "problem": return <F1ProblemScene active={a} />;
        case "motivation": return <F1MotivationScene active={a} />;
        case "architecture": return <F1ArchitectureScene active={a} />;
        case "dataset": return <F1DatasetScene active={a} />;
        case "method": return <F1MethodScene active={a} />;
        case "benchmark": return <F1BenchmarkScene active={a} />;
        case "results": return <F1ResultsScene active={a} />;
        case "comparison": return <F1ComparisonScene active={a} />;
        case "conclusion": return <F1ConclusionScene active={a} />;
        default: return null;
      }
    }
    if (slug === "coffee") {
      switch (scene) {
        case "intro": return <CoffeeIntroScene />;
        case "problem": return <CoffeeProblemScene active={a} />;
        case "motivation": return <CoffeeMotivationScene active={a} />;
        case "dataset": return <CoffeeDatasetScene active={a} />;
        case "method": return <CoffeeMethodScene active={a} />;
        case "training": return <CoffeeTrainingScene active={a} />;
        case "results": return <CoffeeResultsScene active={a} />;
        case "comparison": return <CoffeeComparisonScene active={a} />;
        case "impact": return <CoffeeImpactScene active={a} />;
        case "conclusion": return <CoffeeConclusionScene active={a} />;
        default: return null;
      }
    }
    if (slug === "legal") {
      switch (scene) {
        case "intro": return <LegalIntroScene />;
        case "problem": return <LegalProblemScene active={a} />;
        case "motivation": return <LegalMotivationScene active={a} />;
        case "articles": return <LegalArticlesScene active={a} />;
        case "dataset": return <LegalDatasetScene active={a} />;
        case "method": return <LegalMethodScene active={a} />;
        case "reform": return <LegalReformScene active={a} />;
        case "results": return <LegalResultsScene active={a} />;
        case "impact": return <LegalImpactScene active={a} />;
        case "conclusion": return <LegalConclusionScene active={a} />;
        default: return null;
      }
    }
    if (slug === "ar") {
      switch (scene) {
        case "intro": return <ArIntroScene />;
        case "problem": return <ArProblemScene active={a} />;
        case "motivation": return <ArMotivationScene active={a} />;
        case "tech": return <ArTechScene active={a} />;
        case "dataset": return <ArDatasetScene active={a} />;
        case "method": return <ArMethodScene active={a} />;
        case "usability": return <ArUsabilityScene active={a} />;
        case "results": return <ArResultsScene active={a} />;
        case "impact": return <ArImpactScene />;
        case "conclusion": return <ArConclusionScene active={a} />;
        default: return null;
      }
    }
    if (slug === "neural") {
      switch (scene) {
        case "intro": return <NeuralIntroScene />;
        case "problem": return <NeuralProblemScene active={a} />;
        case "motivation": return <NeuralMotivationScene active={a} />;
        case "architecture": return <NeuralArchScene active={a} />;
        case "dataset": return <NeuralDatasetScene active={a} />;
        case "method": return <NeuralMethodScene active={a} />;
        case "training": return <NeuralTrainingScene active={a} />;
        case "results": return <NeuralResultsScene active={a} />;
        case "comparison": return <NeuralComparisonScene active={a} />;
        case "conclusion": return <NeuralConclusionScene active={a} />;
        default: return null;
      }
    }
    if (slug === "design") {
      switch (scene) {
        case "intro": return <DesignIntroScene />;
        case "problem": return <DesignProblemScene active={a} />;
        case "motivation": return <DesignMotivationScene active={a} />;
        case "elements": return <DesignElementsScene active={a} />;
        case "dataset": return <DesignDatasetScene active={a} />;
        case "method": return <DesignMethodScene active={a} />;
        case "functions": return <DesignFunctionsScene active={a} />;
        case "results": return <DesignResultsScene active={a} />;
        case "impact": return <DesignImpactScene active={a} />;
        case "conclusion": return <DesignConclusionScene active={a} />;
        default: return null;
      }
    }
    return null;
  };

  return (
    <div className="viz-panel sticky top-[60px] h-[calc(100vh-60px)] py-[30px] pr-10 pl-0 border-l-3 border-ink max-[1100px]:h-[45vh] max-[1100px]:min-h-[340px] max-[1100px]:max-h-[520px] max-[1100px]:border-l-0 max-[1100px]:border-b-3 max-[1100px]:px-4 sm:max-[1100px]:px-6 max-[1100px]:py-3 sm:max-[1100px]:py-4 max-[1100px]:bg-paper">
      <div className="w-full h-full bg-white border-3 border-ink rounded-neo-xl shadow-neo-lg relative overflow-hidden min-h-[480px] max-h-[900px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${slug}-${active}`}
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
