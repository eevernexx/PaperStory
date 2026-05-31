# PaperStory

> Research deserves better than PDFs.

Interactive scrollytelling platform that transforms academic papers into immersive narrative experiences.

Built with **Next.js 14 (App Router)** · **TypeScript** · **TailwindCSS** · **Framer Motion**.

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

---

## Cara pakai (Bahasa Indonesia)

1. Pastikan **Node.js 18.17+** sudah terinstal. Cek dengan `node -v`.
2. Buka terminal di folder ini.
3. Jalankan `npm install` — sekali aja, untuk install semua dependency.
4. Jalankan `npm run dev` — buka `http://localhost:3000` di browser.
5. Edit file mana aja → browser auto-reload.

---

## Project structure

```
app/
  layout.tsx                 ← Root layout, fonts, global styles
  page.tsx                   ← Landing page
  stories/[slug]/page.tsx    ← Dynamic story route (server component)

components/
  Nav.tsx                    ← Top sticky nav
  Hero.tsx                   ← Hero with floating cards parallax
  Marquee.tsx                ← Scrolling tagline ribbon
  Features.tsx               ← Features grid section
  FeatureCard.tsx            ← Single feature card primitive
  Showcase.tsx               ← Story showcase grid section
  ShowcaseCard.tsx           ← Single story card
  CTA.tsx                    ← Dark CTA band
  Footer.tsx                 ← Footer
  Reveal.tsx                 ← Reusable scroll-reveal wrapper
  UploadModal.tsx            ← Upload preview modal
  StoryNav.tsx               ← Story page top nav with progress
  StorySection.tsx           ← Single narrative section (drives scene state)
  StoryClient.tsx            ← Story page client orchestrator
  VizStage.tsx               ← Sticky right-side viz container
  viz/
    IntroScene.tsx           ← Scene 1 — race car illustration
    ProblemScene.tsx         ← Scene 2 — animated variance counter
    DatasetScene.tsx         ← Scene 3 — scatter plot
    MethodScene.tsx          ← Scene 4 — pipeline flow
    ResultsScene.tsx         ← Scene 5 — animated bar race
    ImpactScene.tsx          ← Scene 6 — RMSE counter w/ sparkles
    ConclusionScene.tsx      ← Scene 7 — scorecard stack

lib/
  scenes.ts                  ← Scene IDs, showcase registry
  f1-story.tsx               ← F1 story narrative content
  upload-modal.tsx           ← Upload modal context

styles/
  globals.css                ← Tailwind base + design system primitives

tailwind.config.ts           ← Design tokens (colors, shadows, fonts, keyframes)
```

---

## Adding a new story

1. Create a new file in `lib/` (e.g. `lib/coffee-story.tsx`) with the same shape as `f1-story.tsx`.
2. Open `lib/scenes.ts` and flip the relevant showcase card's `available: false` → `available: true`.
3. Open `app/stories/[slug]/page.tsx` and add an entry to the `STORIES` registry.
4. If the new story needs different viz scenes, add them in `components/viz/` and extend `SceneId` + `VizStage.tsx`.

---

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/eevernexx/paperstory.git
git push -u origin main

# 2. Go to vercel.com → New Project → Import this repo
# 3. Vercel auto-detects Next.js. Click Deploy.
```

---

## Design system

| Token         | Value     | Use                              |
| ------------- | --------- | -------------------------------- |
| `bg-paper`    | `#FFF8E7` | Page background                  |
| `bg-ink`      | `#0A0A0A` | Text, borders, dark CTA          |
| `bg-coral`    | `#FF6B6B` | Primary accent, featured states  |
| `bg-yellow`   | `#FFE066` | Highlights, blockquotes          |
| `bg-mint`     | `#B8F2C9` | Cards                            |
| `bg-lavender` | `#C9B6FF` | Cards                            |
| `bg-sky`      | `#A8D8FF` | Cards                            |
| `bg-peach`    | `#FFB89E` | Cards                            |
| `bg-pink`     | `#FFB8D9` | Conclusion scene                 |
| `shadow-neo`  | `6px 6px 0 #0A0A0A` | Standard neobrutalism shadow |
| `border-3`    | `3px solid` | Standard card outline          |

Fonts: **Archivo Black** (display) · **Fraunces** italic (accent) · **DM Sans** (body) · **JetBrains Mono** (data).

---

© 2026 PaperStory · Built by Aqsel · Semarang, Indonesia
