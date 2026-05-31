// ============================================================
// PaperStory — Story Registry
// Single source of truth for all showcase cards + story content
// ============================================================

export type SceneId =
  | "intro"
  | "problem"
  | "dataset"
  | "method"
  | "results"
  | "impact"
  | "conclusion";

export type ShowcaseCard = {
  slug: string;
  category: string;
  readingTime: string;
  title: string;
  blurb: string;
  bgColor: string;
  featured?: boolean;
  available: boolean;
};

export const showcase: ShowcaseCard[] = [
  {
    slug: "f1",
    category: "MOTORSPORT · ML",
    readingTime: "9 min read",
    title: "Predicting F1 Lap Times to 0.97 R²",
    blurb:
      "How a Random Forest Ensemble beat five other regression models using FastF1 data from the 2024 Monaco GP.",
    bgColor: "bg-coral",
    featured: true,
    available: true,
  },
  {
    slug: "coffee",
    category: "AGRICULTURE · CV",
    readingTime: "7 min read",
    title: "Coffee Bean Classification with ResNet50",
    blurb:
      "Four Indonesian coffee varieties, one CNN, 94.5% accuracy. Published in JAIC.",
    bgColor: "bg-mint",
    available: false,
  },
  {
    slug: "climate",
    category: "CLIMATE · POLICY",
    readingTime: "11 min read",
    title: "Climate Tipping Points: The 1.5°C Threshold",
    blurb:
      "What happens when feedback loops compound. A visual walk through the IPCC findings.",
    bgColor: "bg-sky",
    available: false,
  },
  {
    slug: "mushroom",
    category: "BIOLOGY · CV",
    readingTime: "8 min read",
    title: "Mushroom Identification at Scale",
    blurb:
      "Edible or deadly? A vision model trained on 200K specimens learns the difference.",
    bgColor: "bg-lavender",
    available: false,
  },
  {
    slug: "healthcare",
    category: "HEALTHCARE · AI",
    readingTime: "10 min read",
    title: "AI Triage Cuts ER Wait Times by 38%",
    blurb:
      "A randomized study across six hospitals reveals what a transformer model gets right — and wrong.",
    bgColor: "bg-yellow",
    available: false,
  },
  {
    slug: "bank",
    category: "FINANCE · ML",
    readingTime: "6 min read",
    title: "Bank Marketing Campaign: 45K Customers",
    blurb:
      "XGBoost predicts who will subscribe — ROC-AUC 0.92. Inside the feature importance.",
    bgColor: "bg-peach",
    available: false,
  },
];

// Scene order drives both content flow and viz scene switching
export const sceneOrder: SceneId[] = [
  "intro",
  "problem",
  "dataset",
  "method",
  "results",
  "impact",
  "conclusion",
];
