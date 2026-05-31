import { notFound } from "next/navigation";
import { showcase } from "@/lib/scenes";
import { f1Story } from "@/lib/f1-story";
import StoryClient from "@/components/StoryClient";

// Story registry — add new stories here as you build them
const STORIES = {
  f1: {
    title: "F1 Lap Time Prediction · A PaperStory",
    sections: f1Story,
  },
} as const;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  // Pre-render all available stories at build time
  return showcase
    .filter((s) => s.available)
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const card = showcase.find((s) => s.slug === params.slug);
  if (!card) return { title: "PaperStory" };
  return {
    title: `${card.title} — PaperStory`,
    description: card.blurb,
  };
}

export default function StoryPage({ params }: { params: Params }) {
  const story = STORIES[params.slug as keyof typeof STORIES];
  if (!story) notFound();

  return <StoryClient title={story.title} sections={story.sections} />;
}
