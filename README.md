# PaperStory

**Research deserves better than PDFs.**

[![Live Demo](https://img.shields.io/badge/demo-vercel-black?style=flat-square)](https://paperstory.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](#license)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

PaperStory transforms academic research papers into immersive scrollytelling experiences. Each paper becomes a 10-scene interactive narrative with animated visualizations, editorial typography, and scroll-driven storytelling.

## Papers

| Story | Authors | Published | Read |
|---|---|---|---|
| F1: A Fast and Programmable Accelerator for FHE | Feldmann, Samardzic, Krastev, Devadas, Dreslinski, Peikert, Sanchez | MICRO 2021 | [Read &#8599;](https://doi.org/10.1145/3466752.3480070) |
| Coffee Bean Classification with ResNet50 | Aqsel, Rachmawanto | JAIC 2025 | [Read &#8599;](http://jurnal.polibatam.ac.id/index.php/JAIC) |
| Indonesian Environmental Law: Discourse and Reform | Mahardika, Bayu | IJEL 2022 | [Read &#8599;](https://doi.org/10.15294/ijel.v1i1.56781) |
| AR Geometry for Elementary Classrooms | Husnia, Wibisono | JAMASTIKA 2022 | [Read &#8599;](https://ejournal.unwaha.ac.id/index.php/JAMASTIKA) |
| A Virtual Strategy Engineer for Formula 1 | Heilmeier, Thomaser, Graf, Betz | Appl. Sci. 2020 | [Read &#8599;](https://doi.org/10.3390/app10217805) |
| Knowledge, Attitude &amp; Menstrual Pain in Teens | Zhafirah, Andrifianie | Detector 2026 | [Read &#8599;](public/paper-muthiah.pdf) |
| Building an Age-Friendly City in Semarang | Arneta Rahma Aqila | UNDIP 2023 (Undergraduate Thesis) | [Read &#8599;](public/skripsi-arneta-kota-ramah-lansia.pdf) |

> Three cards carry an ownership pin: Coffee ("Aqsel's paper"), Menstrual Pain ("Muthi'ah's paper"), and Age-Friendly City ("Arneta's paper").
> The Menstrual Pain review and the Age-Friendly City thesis have no external article link, so their "Read original paper" button opens the full PDF served from `/public`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | TailwindCSS 3 |
| Animation | Framer Motion 11 |
| Rendering | Static Site Generation (SSG) |
| Deployment | Vercel |

## Architecture

PaperStory is a scrollytelling app. Each story is a 10-scene narrative.

- **`StorySection`** uses an IntersectionObserver (`useInView`) to detect which section is in view and reports the active scene up to `StoryClient`.
- **`StoryClient`** holds the active scene state and renders both halves of the layout: scrolling narrative on the left, sticky visualization on the right.
- **`VizStage`** dispatches the active scene to a per-story component via `slug` + `SceneId`. Transitions between scenes use `AnimatePresence`.
- Every story route (`/stories/[slug]`) is pre-rendered at build time via `generateStaticParams`. There is no runtime server.

```
[scroll] -> StorySection sees section -> setActiveScene(id)
                                         |
                                         v
                                   VizStage(active, slug)
                                         |
                                         v
                             <SomeScene active={true} />
```

## Project Structure

```
paperstory-next/
+- app/
|  +- layout.tsx              Root layout, fonts, OG metadata
|  +- page.tsx                Landing
|  +- stories/[slug]/page.tsx Per-story SSG route
+- components/
|  +- Nav.tsx                 Sticky nav (desktop + mobile)
|  +- MobileMenu.tsx          Hamburger overlay
|  +- Hero.tsx                Landing hero with floating cards
|  +- Marquee.tsx             Headline ticker
|  +- Features.tsx            Asymmetric feature grid
|  +- Showcase.tsx            7-card paper grid
|  +- ShowcaseCard.tsx        Individual paper card
|  +- CTA.tsx                 Bottom call-to-action
|  +- Footer.tsx              Site footer
|  +- StoryNav.tsx            Story page top nav with progress
|  +- StorySection.tsx        Scroll-observed narrative section
|  +- StoryClient.tsx         Story page client wrapper
|  +- VizStage.tsx            Slug-routed scene dispatcher
|  +- Attribution.tsx         Authors/journal/year pill
|  +- PaperLinkButton.tsx     Original-paper external link
|  +- FeatureCard.tsx         Feature card primitive
|  +- Reveal.tsx              Scroll-reveal wrapper
|  +- viz/
|     +- f1/        10 scenes (intro -> conclusion)
|     +- coffee/    10 scenes
|     +- legal/     10 scenes
|     +- ar/        10 scenes
|     +- neural/    10 scenes
|     +- muthiah/   10 scenes
|     +- lansia/    10 scenes
+- lib/
|  +- scenes.ts               Story registry, SceneId, per-slug scene order
|  +- f1-story.tsx            F1 narrative (10 sections)
|  +- coffee-story.tsx        Coffee narrative
|  +- legal-story.tsx         Legal narrative
|  +- ar-story.tsx            AR narrative
|  +- neural-story.tsx        Neural narrative
|  +- muthiah-story.tsx       Knowledge, attitude & menstrual pain narrative
|  +- lansia-story.tsx        Age-friendly city narrative
+- public/
|  +- favicon.svg
|  +- og-image.svg
|  +- paper-muthiah.pdf                     Menstrual-pain review (linked directly)
|  +- skripsi-arneta-kota-ramah-lansia.pdf  Full thesis (linked directly)
+- styles/
|  +- globals.css
+- pdf paper/                  Source PDFs
```

## Local Development

```bash
git clone https://github.com/eevernexx/paperstory.git
cd paperstory
npm install
npm run dev
# -> http://localhost:3000
```

## Adding a Story

1. Add a `ShowcaseCard` entry to `showcase` in `lib/scenes.ts` with `slug`, `title`, `category`, `bgColor`, `paperUrl`, `authors`, `journal`, `year`.
2. Add the 10-scene order to `sceneOrderByStory` in the same file.
3. Create `lib/<slug>-story.tsx` with a `StorySectionData[]` matching the order.
4. Create `components/viz/<slug>/` with 10 scene components (one per scene id).
5. Wire the new slug into `components/VizStage.tsx` and `app/stories/[slug]/page.tsx`.
6. `npm run build` to verify the route is generated.

## Design System

### Color palette

| Token | Hex | Usage |
|---|---|---|
| coral | `#FF6B6B` | Primary accent, results, CTAs |
| mint | `#B8F2C9` | Dataset / agriculture scenes |
| lavender | `#C9B6FF` | Problem / motivation scenes |
| sky | `#A8D8FF` | Architecture / method scenes |
| peach | `#FFB89E` | Intro / soft accents |
| yellow | `#FFE066` | Results / training / highlights |
| pink | `#FFB8D9` | Conclusion scenes |
| ink | `#0A0A0A` | Borders, text |
| paper | `#FFF8E7` | Background |

### Typography

| Token | Family | Usage |
|---|---|---|
| display | Archivo Black | Headings, numbers |
| serif | Fraunces (italic) | Accent phrases |
| sans | DM Sans | Body |
| mono | JetBrains Mono | Labels, code, data |

### Tokens

- Shadow: `neo` = `6px 6px 0 #0A0A0A`
- Border: 3px solid `#0A0A0A`
- Radius: 28px (xl), 20px (lg), 14px (md)

## Story Architecture

Each story is structured as 10 scenes:

```
intro -> problem -> motivation -> [domain-1] -> dataset/background ->
method -> [domain-2] -> results -> comparison/impact -> conclusion
```

Domain-specific scenes vary per paper (architecture, benchmark, training, articles, reform, tech, usability, elements, functions). All scenes share the same scrolling-content / sticky-viz split.

## Deployment

```bash
npm run build   # verify zero errors
git push        # Vercel auto-deploys
```

## License

Code: MIT. Paper content remains property of respective authors and journals. Two of the papers are CC-BY-SA (JAIC for coffee, IJEL for legal). Paper figures and original text are not redistributed.

## Author

**Aryasatya Muhammad Aqsel**
Informatics Engineering, Universitas Dian Nuswantoro, Semarang, Indonesia
GitHub: [@eevernexx](https://github.com/eevernexx)
