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

import CoffeeIntroScene from "./viz/coffee/CoffeeIntroScene";
import CoffeeProblemScene from "./viz/coffee/CoffeeProblemScene";
import CoffeeDatasetScene from "./viz/coffee/CoffeeDatasetScene";
import CoffeeMethodScene from "./viz/coffee/CoffeeMethodScene";
import CoffeeResultsScene from "./viz/coffee/CoffeeResultsScene";
import CoffeeImpactScene from "./viz/coffee/CoffeeImpactScene";
import CoffeeConclusionScene from "./viz/coffee/CoffeeConclusionScene";

import ChatbotIntroScene from "./viz/chatbot/ChatbotIntroScene";
import ChatbotProblemScene from "./viz/chatbot/ChatbotProblemScene";
import ChatbotDatasetScene from "./viz/chatbot/ChatbotDatasetScene";
import ChatbotMethodScene from "./viz/chatbot/ChatbotMethodScene";
import ChatbotResultsScene from "./viz/chatbot/ChatbotResultsScene";
import ChatbotImpactScene from "./viz/chatbot/ChatbotImpactScene";
import ChatbotConclusionScene from "./viz/chatbot/ChatbotConclusionScene";

import ArIntroScene from "./viz/ar/ArIntroScene";
import ArProblemScene from "./viz/ar/ArProblemScene";
import ArDatasetScene from "./viz/ar/ArDatasetScene";
import ArMethodScene from "./viz/ar/ArMethodScene";
import ArResultsScene from "./viz/ar/ArResultsScene";
import ArImpactScene from "./viz/ar/ArImpactScene";
import ArConclusionScene from "./viz/ar/ArConclusionScene";

import DesignIntroScene from "./viz/design/DesignIntroScene";
import DesignProblemScene from "./viz/design/DesignProblemScene";
import DesignDatasetScene from "./viz/design/DesignDatasetScene";
import DesignMethodScene from "./viz/design/DesignMethodScene";
import DesignResultsScene from "./viz/design/DesignResultsScene";
import DesignImpactScene from "./viz/design/DesignImpactScene";
import DesignConclusionScene from "./viz/design/DesignConclusionScene";

import LegalIntroScene from "./viz/legal/LegalIntroScene";
import LegalProblemScene from "./viz/legal/LegalProblemScene";
import LegalDatasetScene from "./viz/legal/LegalDatasetScene";
import LegalMethodScene from "./viz/legal/LegalMethodScene";
import LegalResultsScene from "./viz/legal/LegalResultsScene";
import LegalImpactScene from "./viz/legal/LegalImpactScene";
import LegalConclusionScene from "./viz/legal/LegalConclusionScene";

type Props = { active: SceneId; slug: string };

export default function VizStage({ active, slug }: Props) {
  const isActive = true;

  const renderScene = (scene: SceneId) => {
    if (slug === "coffee") {
      switch (scene) {
        case "intro": return <CoffeeIntroScene />;
        case "problem": return <CoffeeProblemScene active={isActive} />;
        case "dataset": return <CoffeeDatasetScene active={isActive} />;
        case "method": return <CoffeeMethodScene active={isActive} />;
        case "results": return <CoffeeResultsScene active={isActive} />;
        case "impact": return <CoffeeImpactScene active={isActive} />;
        case "conclusion": return <CoffeeConclusionScene active={isActive} />;
      }
    }
    if (slug === "chatbot") {
      switch (scene) {
        case "intro": return <ChatbotIntroScene />;
        case "problem": return <ChatbotProblemScene active={isActive} />;
        case "dataset": return <ChatbotDatasetScene active={isActive} />;
        case "method": return <ChatbotMethodScene active={isActive} />;
        case "results": return <ChatbotResultsScene active={isActive} />;
        case "impact": return <ChatbotImpactScene />;
        case "conclusion": return <ChatbotConclusionScene active={isActive} />;
      }
    }
    if (slug === "ar") {
      switch (scene) {
        case "intro": return <ArIntroScene />;
        case "problem": return <ArProblemScene active={isActive} />;
        case "dataset": return <ArDatasetScene active={isActive} />;
        case "method": return <ArMethodScene active={isActive} />;
        case "results": return <ArResultsScene active={isActive} />;
        case "impact": return <ArImpactScene />;
        case "conclusion": return <ArConclusionScene active={isActive} />;
      }
    }
    if (slug === "design") {
      switch (scene) {
        case "intro": return <DesignIntroScene />;
        case "problem": return <DesignProblemScene active={isActive} />;
        case "dataset": return <DesignDatasetScene active={isActive} />;
        case "method": return <DesignMethodScene active={isActive} />;
        case "results": return <DesignResultsScene active={isActive} />;
        case "impact": return <DesignImpactScene active={isActive} />;
        case "conclusion": return <DesignConclusionScene active={isActive} />;
      }
    }
    if (slug === "legal") {
      switch (scene) {
        case "intro": return <LegalIntroScene />;
        case "problem": return <LegalProblemScene active={isActive} />;
        case "dataset": return <LegalDatasetScene active={isActive} />;
        case "method": return <LegalMethodScene active={isActive} />;
        case "results": return <LegalResultsScene active={isActive} />;
        case "impact": return <LegalImpactScene active={isActive} />;
        case "conclusion": return <LegalConclusionScene active={isActive} />;
      }
    }
    // default: f1
    switch (scene) {
      case "intro": return <IntroScene />;
      case "problem": return <ProblemScene active={isActive} />;
      case "dataset": return <DatasetScene active={isActive} />;
      case "method": return <MethodScene active={isActive} />;
      case "results": return <ResultsScene active={isActive} />;
      case "impact": return <ImpactScene active={isActive} />;
      case "conclusion": return <ConclusionScene active={isActive} />;
    }
  };

  return (
    <div className="sticky top-[60px] h-[calc(100vh-60px)] py-[30px] pr-10 pl-0 border-l-3 border-ink max-[1100px]:relative max-[1100px]:h-[60vh] max-[1100px]:border-l-0 max-[1100px]:border-t-3 max-[1100px]:px-[30px]">
      <div className="w-full h-full bg-white border-3 border-ink rounded-neo-xl shadow-neo-lg relative overflow-hidden">
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
