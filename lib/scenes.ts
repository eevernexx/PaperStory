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
    available: true,
  },
  {
    slug: "legal",
    category: "LAW · POLICY",
    readingTime: "11 min read",
    title: "Indonesian Environmental Law: Discourse and Reform",
    blurb:
      "How UU 32/2009 tried to settle nature vs. economy — and where the political will to enforce it ran out.",
    bgColor: "bg-sky",
    available: true,
  },
  {
    slug: "ar",
    category: "EDUCATION · AR",
    readingTime: "6 min read",
    title: "AR Geometry for Elementary Classrooms",
    blurb:
      "Single-marker Android AR for bangun ruang, rated 94.67% usability by MI Wasilatul Huda students.",
    bgColor: "bg-lavender",
    available: true,
  },
  {
    slug: "chatbot",
    category: "FOOD · CHATBOT",
    readingTime: "6 min read",
    title: "A Warung Goes Online via WhatsApp",
    blurb:
      "Laravel + Node + WhatsApp turned a small warung into an aggregator-free online business, zero commission.",
    bgColor: "bg-peach",
    available: true,
  },
  {
    slug: "design",
    category: "DESIGN · THEORY",
    readingTime: "7 min read",
    title: "Graphic Design as the Medium of Advertising",
    blurb:
      "Three functions, four elements, five principles — the compact grammar of visual communication.",
    bgColor: "bg-yellow",
    available: true,
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
