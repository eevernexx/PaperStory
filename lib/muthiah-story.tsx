import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";
import { showcase } from "./scenes";
import type { StorySectionData } from "./f1-story";

const card = showcase.find((s) => s.slug === "muthiah")!;

export const muthiahStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The pain most
          <br />
          girls just{" "}
          <span className="font-serif italic text-coral">endure.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          For millions of teenage girls, the first days of a period mean
          cramps that quietly cancel school, sport, and concentration.
          Dysmenorrhea, the clinical name for menstrual pain, is one of the
          most common health complaints of adolescence, and one of the least
          talked about.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          This literature review, by Muthi&rsquo;ah Irta Zhafirah and Femmy
          Andrifianie at the Pharmacy program of Universitas Lampung, asks a
          practical question: does what a girl <em>knows</em> about period
          pain actually change how she <em>treats</em> it?
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          &ldquo;Knowing why it hurts is the first step toward not suffering
          through it in silence.&rdquo;
        </blockquote>
      </>
    ),
  },
  {
    scene: "problem",
    label: "§ 02 · THE BURDEN",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Common, and
          <br />
          easy to{" "}
          <span className="font-serif italic text-coral">dismiss.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The numbers are not small. The WHO estimates that roughly 90% of
          women experience dysmenorrhea, with 10 to 15% hit hard enough to
          disrupt daily life. In Indonesia, the Ministry of Health recorded an
          incidence of 72.89%, and more than half of those cases fall on
          adolescent girls.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Most of it is primary dysmenorrhea: pain driven by hormones and
          prostaglandins rather than any underlying disease. It is normal in
          the medical sense, which is exactly why it gets brushed off.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Treated as just a part of being a girl, the pain goes unmanaged, and
          quality of life, attendance, and grades quietly pay the price.
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
          Knowledge,
          <br />
          attitude,{" "}
          <span className="font-serif italic text-coral">action.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          When pain feels normal, the usual response is self-care, treating it
          at home. The WHO calls this self-medication: managing a minor
          condition yourself to stay healthy.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          But self-medication only works if it rests on real knowledge. The
          assumption behind the whole field is a chain: better knowledge tends
          to build a more positive attitude, and a positive attitude tends to
          produce healthier behavior.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The review tests whether that chain actually holds for menstrual
          pain. If it does, education is the lever. If it does not, something
          else is getting in the way.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 04 · THE EVIDENCE BASE",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          From 1,910
          <br />
          down to{" "}
          <span className="font-serif italic text-coral">ten.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          This is a literature review, not a single survey. The authors
          searched Google Scholar with a focused set of keywords on knowledge,
          attitude, adolescents, and dysmenorrhea, and pulled an initial 1,910
          articles.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Screening titles and abstracts narrowed that to 18. A full-text read
          against the inclusion criteria left 10 studies, each an original
          piece of research close enough to the question to compare
          side by side.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Ten studies, spread across schools and campuses all over Indonesia,
          is the dataset the conclusions rest on.
        </p>
      </>
    ),
  },
  {
    scene: "method",
    label: "§ 05 · METHODOLOGY",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The rules of
          <br />
          <span className="font-serif italic text-coral">inclusion.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A review is only as honest as its filter. The authors fixed the
          criteria up front, then let them decide what stayed in.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Published 2020 to 2025</strong> &middot; recent enough to reflect today&rsquo;s teens.</li>
          <li><strong>Full text available</strong> &middot; no abstract-only guesses.</li>
          <li><strong>Original research</strong> &middot; primary studies, not other reviews.</li>
          <li><strong>On topic</strong> &middot; knowledge and attitude toward managing menstrual pain.</li>
          <li><strong>Adolescent girls</strong> &middot; the population in question, nobody else.</li>
        </ul>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Anything paywalled, off-topic, or about a different population was
          excluded. What survived was read in full and became the basis for
          the discussion.
        </p>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 06 · THE CORE FINDING",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The link is
          <br />
          <span className="font-serif italic text-coral">real.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Across most of the ten studies, the relationship holds: girls who
          know more about dysmenorrhea tend to hold a more positive attitude
          toward treating it.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          In Medan, 57.5% of students had adequate knowledge and 76.7% a
          positive attitude, with the link statistically significant (p =
          0.001). Studies in Palangka Raya (p = 0.000), Bekasi (p = 0.001), and
          Abiansemal (p = 0.001) found the same pattern, again and again.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Read together, the studies tell a consistent story: knowledge is a
          foundation that positive attitudes and healthier coping are built
          on.
        </p>
      </>
    ),
  },
  {
    scene: "comparison",
    label: "§ 07 · THE FINE PRINT",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Real, but not
          <br />
          always{" "}
          <span className="font-serif italic text-coral">strong.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A significant link is not the same as a strong one. The correlation
          coefficients ranged widely: a moderate 0.296 in Abiansemal, a strong
          0.620 at Universitas &lsquo;Aisyiyah Yogyakarta. Significant
          everywhere, powerful only sometimes.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          And the chain can break. Some girls with adequate knowledge still
          stayed passive, held back by stress, anxiety, shame, or the belief
          that period pain is simply normal and not worth treating.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          One striking case: at a school in Indramayu, 78.7% had good
          knowledge, yet every single respondent managed their pain without
          any medication at all.
        </p>
      </>
    ),
  },
  {
    scene: "impact",
    label: "§ 08 · WHAT GIRLS DO",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Rest, warmth,
          <br />
          and{" "}
          <span className="font-serif italic text-coral">silence.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          When they do act, most girls reach for non-pharmacological options
          first: rest, a warm compress, light exercise, relaxation, sometimes
          aromatherapy or traditional herbal remedies. Painkillers and NSAIDs
          are the exception, not the default.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          But a large share still do nothing at all. A lack of clear
          information, plus social stigma around menstruation, keeps many girls
          quietly enduring pain they could have eased.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Lifestyle matters too. Sleep, nutrition, stress, and activity all
          shape both how badly it hurts and how willing a girl is to respond.
        </p>
      </>
    ),
  },
  {
    scene: "reform",
    label: "§ 09 · WHAT WOULD HELP",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Teach it where
          <br />
          they{" "}
          <span className="font-serif italic text-coral">already are.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The clearest lever is education, delivered in school. Counseling,
          group discussions, and good information media reliably raise
          understanding and nudge attitudes in a healthier direction.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Pharmacists and health workers can lead safe self-medication
          guidance; teachers can normalize the conversation; families can offer
          the emotional support that turns knowledge into action.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Because attitude does not automatically become behavior, the
          interventions have to be sustained, not one-off, and paired with real
          effort to dissolve the stigma around periods.
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
          Three
          <br />
          <span className="font-serif italic text-coral">takeaways.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Knowledge and attitude are linked.",
              v: "Across the studies, girls who understand dysmenorrhea tend to face it with a more positive, more active attitude.",
            },
            {
              k: "Significant is not the same as strong.",
              v: "The correlation ranges from moderate to strong, and knowledge alone does not guarantee action when stress, shame, or stigma get in the way.",
            },
            {
              k: "Education is the lever.",
              v: "Sustained school-based health education, backed by pharmacists, teachers, and family, is what turns knowing into healthier coping.",
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
                <strong>{t.k}</strong> {t.v}
              </span>
            </li>
          ))}
        </ol>
        <Attribution
          authors={card.authors}
          journal={card.journal}
          year={card.year}
          license="© Authors"
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
