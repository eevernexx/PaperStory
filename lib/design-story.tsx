import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";
import { showcase } from "./scenes";
import type { StorySectionData } from "./f1-story";

const card = showcase.find((s) => s.slug === "design")!;

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
          Long before there were brands, there were marks. The handprint on
          a cave wall, the cuneiform stamp on a clay tablet, the woodcut on
          a handbill. Graphic design is not a 20th-century invention. It is
          the oldest form of public speech.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          This paper, by R. Kuncoro Wulan Dewojati at UNY, frames graphic
          design as the medium through which advertising actually does its
          work. Without it, the message is voiceless. With it, the message
          has a body.
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
    label: "§ 02 · THE QUESTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          What does design
          <br />
          actually{" "}
          <span className="font-serif italic text-coral">do?</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Trade publications treat graphic design as a craft. The academic
          literature treats it as an art-historical subject. Neither
          framework captures what design is asked to do in the modern
          advertising economy.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Dewojati&rsquo;s paper sets the question precisely: graphic design
          is the medium through which a commercial message arrives at a
          human eye. It has functions, vocabulary, and grammar. It can be
          analyzed.
        </p>
      </>
    ),
  },
  {
    scene: "motivation",
    label: "§ 03 · MOTIVATION",
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
          communicate. Spiritual marks gave way to commercial marks.
          Commercial marks gave way to systems.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The printing press industrialized typography. The 20th century
          industrialized design education. The Bauhaus turned ornament into
          principle. The 1990s turned the page into a screen. Each shift
          changed not the function of design but the surface it had to live
          on.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The constant: the human eye still resolves a strong composition in
          200 milliseconds. The medium accelerates. The perception does
          not.
        </p>
      </>
    ),
  },
  {
    scene: "elements",
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
          <li><strong>Garis</strong> &middot; line. Direction, edge, flow. The simplest mark.</li>
          <li><strong>Huruf</strong> &middot; typography. Letters carrying tone before they carry words.</li>
          <li><strong>Bentuk</strong> &middot; shape. Mass, silhouette, geometric vs. organic.</li>
          <li><strong>Tekstur</strong> &middot; texture. Surface quality, tactile suggestion.</li>
        </ul>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          A graphic designer is someone who has internalized that four
          ingredients, well-arranged, beat forty arranged carelessly.
        </blockquote>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 05 · CONCEPTS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Three
          <br />
          <span className="font-serif italic text-coral">functions.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Dewojati frames graphic design&rsquo;s communicative role in three
          intersecting functions.
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Identifikasi</strong> &middot; marking what a thing is. Brand identity, origin, ownership.</li>
          <li><strong>Informasi</strong> &middot; telling the viewer what to do or know. Signage, wayfinding, manuals.</li>
          <li><strong>Promosi</strong> &middot; persuading the viewer toward an action. Advertising in its core form.</li>
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
    label: "§ 06 · PRINCIPLES",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Five rules
          <br />
          of{" "}
          <span className="font-serif italic text-coral">arrangement.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The elements supply the vocabulary. The principles supply the
          grammar.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Keseimbangan</strong> &middot; balance. Symmetric, asymmetric, radial. The eye finds rest.</li>
          <li><strong>Kontras</strong> &middot; contrast. Difference creates hierarchy.</li>
          <li><strong>Kesatuan</strong> &middot; unity. Parts feel like one composition, not several.</li>
          <li><strong>Nilai</strong> &middot; value. Light vs. dark, weight, emphasis.</li>
          <li><strong>Warna</strong> &middot; color. Mood, identity, attention.</li>
        </ul>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The principles are not aesthetic preferences. They are perceptual
          findings about how humans actually process visual information.
          Ignore them and the message arrives slower or not at all.
        </p>
      </>
    ),
  },
  {
    scene: "functions",
    label: "§ 07 · FUNCTIONS IN PRACTICE",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Where the
          <br />
          functions{" "}
          <span className="font-serif italic text-coral">ship.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The three functions reappear at every scale of corporate identity.
          A logo, primarily identification, also carries an information
          function (which company this is) and a promotion function (the
          impression the company wants to leave).
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A safety sign is primarily information. But it has to identify
          itself as a safety sign, and it promotes a behavior. Take any
          artifact, count the function ratios. You can read the brief from
          the artifact.
        </p>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 08 · COMPOSITION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The grammar
          <br />
          in{" "}
          <span className="font-serif italic text-coral">use.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A good poster does not have five principles applied
          simultaneously. It usually has two or three doing most of the
          load, and the rest as support. Knowing which is which is the
          designer&rsquo;s editorial decision.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Contrast does the heavy lifting in most advertising compositions:
          large versus small, dark versus light, bold versus thin. Unity
          sets the floor: nothing feels out of place. Balance keeps the
          composition from tipping.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          When a composition fails, the failure can almost always be named
          in this vocabulary.
        </p>
      </>
    ),
  },
  {
    scene: "impact",
    label: "§ 09 · APPLICATION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          One vocabulary,
          <br />
          many{" "}
          <span className="font-serif italic text-coral">surfaces.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The same vocabulary and grammar appear across every artifact of
          corporate identity. Logo, stationery, signage, advertising - same
          principles, different surfaces.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A logo compresses identification into a single mark. Stationery
          extends that mark into the textures of business. Signage projects
          it into physical space. Advertising deploys it across paid media.
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
    label: "§ 10 · CONCLUSION",
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
              v: "Identification, information, promotion are jobs the artifact does. The aesthetic is the means, not the goal.",
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
          authors={card.authors}
          journal={card.journal}
          year={card.year}
          license="© Author"
        />
        <PaperLinkButton
          url={card.paperUrl}
          authors={card.authors}
          journal={card.journal}
          year={card.year}
        />
      </>
    ),
  },
];
