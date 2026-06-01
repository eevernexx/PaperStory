// ============================================================
// PaperStory - Story Registry
// Single source of truth for all showcase cards + story content
// ============================================================

export type SceneId =
  | "intro"
  | "problem"
  | "motivation"
  | "architecture"
  | "dataset"
  | "method"
  | "benchmark"
  | "training"
  | "results"
  | "comparison"
  | "impact"
  | "articles"
  | "reform"
  | "tech"
  | "usability"
  | "elements"
  | "functions"
  | "conclusion";

export type ShowcaseCard = {
  slug: string;
  category: string;
  readingTime: string;
  title: string;
  blurb: string;
  bgColor: string;
  available: boolean;
  paperUrl: string;
  authors: string;
  journal: string;
  year: string;
  // Optional ownership badge ("pin") shown on the showcase card.
  pin?: string;
};

export const showcase: ShowcaseCard[] = [
  {
    slug: "f1",
    category: "COMPUTER ARCH · CRYPTO",
    readingTime: "12 min read",
    title: "F1: A Fast and Programmable Accelerator for FHE",
    blurb:
      "An MIT and Michigan ASIC that speeds up Fully Homomorphic Encryption by 5,400x, making real-time private deep learning practical.",
    bgColor: "bg-coral",
    available: true,
    paperUrl: "https://doi.org/10.1145/3466752.3480070",
    authors: "Feldmann, Samardzic, Krastev, Devadas, Dreslinski, Peikert, Sanchez",
    journal: "MICRO 2021",
    year: "2021",
  },
  {
    slug: "coffee",
    category: "AGRICULTURE · CV",
    readingTime: "9 min read",
    title: "Coffee Bean Classification with ResNet50",
    blurb:
      "Four Indonesian coffee varieties, one CNN, 94.5% accuracy on smartphone images. Published in JAIC.",
    bgColor: "bg-mint",
    available: true,
    paperUrl: "http://jurnal.polibatam.ac.id/index.php/JAIC",
    authors: "Aryasatya M. Aqsel, Eko Hari Rachmawanto",
    journal: "JAIC Vol.9 No.6",
    year: "2025",
    pin: "Aqsel's paper",
  },
  {
    slug: "legal",
    category: "LAW · POLICY",
    readingTime: "11 min read",
    title: "Indonesian Environmental Law: Discourse and Reform",
    blurb:
      "How UU 32/2009 tried to settle nature vs. economy, and where the political will to enforce it ran out.",
    bgColor: "bg-sky",
    available: true,
    paperUrl: "https://doi.org/10.15294/ijel.v1i1.56781",
    authors: "Ega Rijal Mahardika, Muhammad Azhar Bayu",
    journal: "Indonesian Journal of Environmental Law",
    year: "2022",
  },
  {
    slug: "ar",
    category: "EDUCATION · AR",
    readingTime: "8 min read",
    title: "AR Geometry for Elementary Classrooms",
    blurb:
      "Single-marker Android AR for 3D geometric solids, rated 94.67% usability by MI Wasilatul Huda students.",
    bgColor: "bg-lavender",
    available: true,
    paperUrl: "https://ejournal.unwaha.ac.id/index.php/JAMASTIKA",
    authors: "Mamluatul Husnia, Iwan Setiawan Wibisono",
    journal: "JAMASTIKA Vol.1 No.1",
    year: "2022",
  },
  {
    slug: "neural",
    category: "MOTORSPORT · ML",
    readingTime: "12 min read",
    title: "A Virtual Strategy Engineer for Formula 1",
    blurb:
      "Two feed-forward neural networks trained on six seasons of F1 timing data decide when to pit and which compound to fit.",
    bgColor: "bg-peach",
    available: true,
    paperUrl: "https://doi.org/10.3390/app10217805",
    authors: "Alexander Heilmeier, Andre Thomaser, Michael Graf, Johannes Betz",
    journal: "Applied Sciences (MDPI) Vol.10, 7805",
    year: "2020",
  },
  {
    slug: "muthiah",
    category: "PUBLIC HEALTH · PHARMACY",
    readingTime: "9 min read",
    title: "Knowledge, Attitude, and Menstrual Pain in Teens",
    blurb:
      "A review of ten Indonesian studies asking whether what teenage girls know about dysmenorrhea actually changes how they treat it.",
    bgColor: "bg-yellow",
    available: true,
    paperUrl: "/paper-muthiah.pdf",
    authors: "Muthi'ah Irta Zhafirah, Femmy Andrifianie",
    journal: "Jurnal Inovasi Riset Ilmu Kesehatan (Detector) Vol.4 No.1",
    year: "2026",
    pin: "Muthi'ah's paper",
  },
  {
    slug: "lansia",
    category: "PUBLIC POLICY · WELFARE",
    readingTime: "10 min read",
    title: "Building an Age-Friendly City in Semarang",
    blurb:
      "How Semarang's government works toward a WHO age-friendly city - and why the missing piece is a local law that protects its elderly.",
    bgColor: "bg-pink",
    available: true,
    // Undergraduate thesis (skripsi) - no journal publisher, link points
    // straight to the full thesis PDF served from /public.
    paperUrl: "/skripsi-arneta-kota-ramah-lansia.pdf",
    authors: "Arneta Rahma Aqila",
    journal: "Universitas Diponegoro · Undergraduate Thesis",
    year: "2023",
    pin: "Arneta's paper",
  },
];

// Per-story scene order. Each story has exactly 10 scenes.
export const sceneOrderByStory: Record<string, SceneId[]> = {
  f1: ["intro", "problem", "motivation", "architecture", "dataset", "method", "benchmark", "results", "comparison", "conclusion"],
  coffee: ["intro", "problem", "motivation", "dataset", "method", "training", "results", "comparison", "impact", "conclusion"],
  legal: ["intro", "problem", "motivation", "articles", "dataset", "method", "reform", "results", "impact", "conclusion"],
  ar: ["intro", "problem", "motivation", "tech", "dataset", "method", "usability", "results", "impact", "conclusion"],
  neural: ["intro", "problem", "motivation", "architecture", "dataset", "method", "training", "results", "comparison", "conclusion"],
  muthiah: ["intro", "problem", "motivation", "dataset", "method", "results", "comparison", "impact", "reform", "conclusion"],
  lansia: ["intro", "problem", "motivation", "dataset", "articles", "method", "results", "reform", "impact", "conclusion"],
};
