import Attribution from "@/components/Attribution";
import type { StorySectionData } from "./f1-story";

export const designStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Design is
          <br />
          how a message{" "}
          <span className="font-serif italic text-coral">arrives.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Long before there were brands, there were marks. The handprint on a
          cave wall, the cuneiform stamp on a clay tablet, the woodcut on a
          handbill. Graphic design is not a 20th-century invention. It is the
          oldest form of public speech.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          This paper, by R. Kuncoro Wulan Dewojati at UNY, frames graphic
          design as the medium through which advertising actually does its
          work. Without it, the message is voiceless. With it, the message has
          a body.
        </p>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          &ldquo;Form is not decoration. Form is the meaning becoming
          visible.&rdquo;
        </blockquote>
      </>
    ),
  },
  {
    scene: "problem",
    label: "§ 02 · EVOLUTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          From cave
          <br />
          to{" "}
          <span className="font-serif italic text-coral">screen.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Visual communication evolved alongside what humans needed to
          communicate. Spiritual marks gave way to commercial marks. Commercial
          marks gave way to systems.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The printing press industrialized typography. The 20th century
          industrialized design education. The Bauhaus turned ornament into
          principle. The 1990s turned the page into a screen. Each shift
          changed not the function of design but the surface it had to live on.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The constant: the human eye still resolves a strong composition in
          200 milliseconds. The medium accelerates. The perception does not.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 03 · CONCEPTS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Three
          <br />
          <span className="font-serif italic text-coral">functions.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Dewojati frames graphic design&rsquo;s communicative role in three
          intersecting functions:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Identifikasi</strong> — marking what a thing is. Brand identity, origin, ownership.</li>
          <li><strong>Informasi / Instruksi</strong> — telling the viewer what to do or know. Signage, wayfinding, manuals.</li>
          <li><strong>Promosi / Presentasi</strong> — persuading the viewer toward an action. Advertising in its core form.</li>
        </ol>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Most real artifacts mix all three. A logo identifies, a tagline
          informs, the composition promotes. Separating the functions is
          analytic, not literal.
        </p>
      </>
    ),
  },
  {
    scene: "method",
    label: "§ 04 · ELEMENTS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Four building
          <br />
          <span className="font-serif italic text-coral">blocks.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Every composition reduces to the same vocabulary.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Garis</strong> — line. Direction, edge, flow. The simplest mark.</li>
          <li><strong>Huruf</strong> — typography. Letters carrying tone before they carry words.</li>
          <li><strong>Bentuk</strong> — shape. Mass, silhouette, geometric vs. organic.</li>
          <li><strong>Tekstur</strong> — texture. Surface quality, tactile suggestion.</li>
        </ul>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          A graphic designer is someone who has internalized that four
          ingredients, well-arranged, beat forty arranged carelessly.
        </blockquote>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 05 · PRINCIPLES",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Five rules
          <br />
          of{" "}
          <span className="font-serif italic text-coral">arrangement.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The elements supply the vocabulary. The principles supply the grammar.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Keseimbangan</strong> — balance. Symmetric, asymmetric, radial. The eye finds rest.</li>
          <li><strong>Kontras</strong> — contrast. Difference creates hierarchy.</li>
          <li><strong>Kesatuan</strong> — unity. Parts feel like one composition, not several.</li>
          <li><strong>Nilai</strong> — value. Light vs. dark, weight, emphasis.</li>
          <li><strong>Warna</strong> — color. Mood, identity, attention.</li>
        </ul>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The principles are not aesthetic preferences. They are perceptual
          findings about how humans actually process visual information. Ignore
          them and the message arrives slower or not at all.
        </p>
      </>
    ),
  },
  {
    scene: "impact",
    label: "§ 06 · APPLICATION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Where it
          <br />
          <span className="font-serif italic text-coral">ships.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The same vocabulary and grammar appear across every artifact of
          corporate identity. Logo, stationery, signage, advertising — same
          principles, different surfaces.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A logo compresses identification into a single mark. Stationery
          extends that mark into the textures of business — letterhead, card,
          envelope. Signage projects it into physical space. Advertising
          deploys it across paid media.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The throughline is consistency. When all four surfaces share the
          same visual grammar, the brand is felt before it is read. That is
          what design does for advertising.
        </p>
      </>
    ),
  },
  {
    scene: "conclusion",
    label: "§ 07 · CONCLUSION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Three takeaways
          <br />
          from a{" "}
          <span className="font-serif italic text-coral">theory paper.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Design is functional, not decorative.",
              v: "Identification, information, promotion — these are jobs the artifact does. The aesthetic is the means, not the goal.",
            },
            {
              k: "Four elements, five principles.",
              v: "The entire grammar of visual communication compresses to a tight set. Mastery is recombination, not novelty.",
            },
            {
              k: "Advertising is design&rsquo;s loudest channel.",
              v: "But the same vocabulary lives in every signpost, every menu, every government form. Design is everywhere a message needs to arrive.",
            },
          ].map((t, i) => (
            <li
              key={i}
              className="py-4 px-5 bg-white border-3 border-ink rounded-neo-md shadow-neo-sm flex gap-4 items-start text-[16.5px] leading-[1.5]"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-coral text-ink border-2 border-ink rounded-full font-display text-sm">
                {i + 1}
              </span>
              <span>
                <strong dangerouslySetInnerHTML={{ __html: t.k }} /> {t.v}
              </span>
            </li>
          ))}
        </ol>
        <Attribution
          authors="R. Kuncoro Wulan Dewojati"
          journal="Universitas Negeri Yogyakarta"
          year="—"
          license="© Author"
        />
      </>
    ),
  },
];
