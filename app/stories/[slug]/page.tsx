import { notFound } from "next/navigation";
import { showcase } from "@/lib/scenes";
import { f1Story } from "@/lib/f1-story";
import { coffeeStory } from "@/lib/coffee-story";
import { chatbotStory } from "@/lib/chatbot-story";
import { arStory } from "@/lib/ar-story";
import { designStory } from "@/lib/design-story";
import { legalStory } from "@/lib/legal-story";
import StoryClient from "@/components/StoryClient";

const STORIES = {
  f1: {
    title: "F1 Lap Time Prediction · A PaperStory",
    sections: f1Story,
  },
  coffee: {
    title: "Coffee Bean Classification · A PaperStory",
    sections: coffeeStory,
  },
  chatbot: {
    title: "Warung Chatbot · A PaperStory",
    sections: chatbotStory,
  },
  ar: {
    title: "AR Bangun Ruang · A PaperStory",
    sections: arStory,
  },
  design: {
    title: "Graphic Design in Advertising · A PaperStory",
    sections: designStory,
  },
  legal: {
    title: "Indonesian Environmental Law · A PaperStory",
    sections: legalStory,
  },
} as const;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
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

  return (
    <StoryClient
      title={story.title}
      slug={params.slug}
      sections={story.sections}
    />
  );
}
