import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";
import { showcase } from "./scenes";
import type { StorySectionData } from "./f1-story";

const card = showcase.find((s) => s.slug === "lansia")!;

export const lansiaStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          A city for
          <br />
          growing{" "}
          <span className="font-serif italic text-coral">old.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Medicine keeps people alive longer, and that success quietly rewrites
          a city. Arneta Rahma Aqila, in her 2023 thesis at Universitas
          Diponegoro, asks a deceptively simple question of Semarang: is it
          becoming a city its elderly can comfortably grow old in?
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The answer is measured against the World Health Organization&rsquo;s
          framework for an age-friendly city, and read through William
          Dunn&rsquo;s theory of public policy. The study is descriptive and
          qualitative: interviews with the agencies, programs, and seniors who
          actually live the policy.
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          &ldquo;A society&rsquo;s welfare is best read at its edges &mdash; in
          how it treats the very old.&rdquo;
        </blockquote>
      </>
    ),
  },
  {
    scene: "problem",
    label: "§ 02 · THE PROBLEM",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          An ageing
          <br />
          <span className="font-serif italic text-coral">population.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          By 2018, roughly 156,900 of Semarang&rsquo;s residents were elderly
          &mdash; about 8.78% of the city, up from 8.17% just two years
          earlier. Every year adds several thousand more seniors. Demographers
          call this an <em>ageing population</em>, and it is a new kind of
          challenge.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          More elderly citizens means more demand on health services, housing,
          transport, and social care. A government that only plans for the
          young is, by definition, planning to fail a growing share of its
          people.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          So welfare for the elderly stops being charity and becomes
          infrastructure: something a city has to design for on purpose.
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
          Why an
          <br />
          age-friendly{" "}
          <span className="font-serif italic text-coral">city?</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The goal of a Kota Ramah Lansia is that seniors feel safe and
          comfortable enough to keep living fully &mdash; to move, gather, and
          contribute &mdash; even in their senja years.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          That means three things at once. Comfort: streets, parks, and homes
          that fit older bodies. Safety: transport and buildings that do not
          quietly endanger them. Dignity: a community that values the elderly
          rather than leaving them isolated.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Get those right and the city does not just shelter its seniors. It
          keeps them part of public life.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 04 · THE NUMBERS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          A curve that
          <br />
          only{" "}
          <span className="font-serif italic text-coral">rises.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The trend is not subtle. In 2016 Semarang counted about 141,000
          elderly residents (8.17%). By 2017, 148,000 (8.47%). By 2018, 156,900
          (8.78%). Each year quietly adds another seven to nine thousand
          seniors.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Numbers like these are why the issue cannot wait for a crisis. The
          population the policy serves is already here and still growing, lap
          after lap.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The thesis draws on national statistics, regional planning documents,
          and field interviews to build this picture &mdash; data and lived
          experience side by side.
        </p>
      </>
    ),
  },
  {
    scene: "articles",
    label: "§ 05 · THE WHO BLUEPRINT",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Eight
          <br />
          <span className="font-serif italic text-coral">domains.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The WHO defines an age-friendly city across eight domains: outdoor
          spaces and buildings, transportation, housing, social participation,
          respect and inclusion, civic participation and employment,
          communication and information, and community and health services.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Together they form a checklist that spans the physical city and the
          social one. A bench and a bus route matter as much as whether an
          older person is heard, respected, and able to take part.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The study uses this blueprint as its measuring stick for Semarang.
        </p>
      </>
    ),
  },
  {
    scene: "method",
    label: "§ 06 · METHODOLOGY",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Reading it
          <br />
          through{" "}
          <span className="font-serif italic text-coral">Dunn.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The research is descriptive qualitative, located in Semarang, built
          from interviews with the city&rsquo;s relevant agencies (OPD), program
          implementers, and elderly residents themselves.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          William Dunn frames a policy as one system of three interlocking
          parts: the <strong>public policy</strong> itself (plans, rules,
          budgets), the <strong>policy actors</strong> who carry it out, and
          the <strong>policy environment</strong> &mdash; the communities and
          families it lands in.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Looking at all three at once is what turns &ldquo;does Semarang have
          programs?&rdquo; into the sharper question: do those programs actually
          hold together?
        </p>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 07 · WHAT EXISTS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Already
          <br />
          <span className="font-serif italic text-coral">doing it.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The finding is encouraging: Semarang has genuinely been working
          toward an age-friendly city. It leans on national law &mdash;
          statutes, the RPJMN and RPJMD, the national and regional action plans
          for the elderly &mdash; and runs real programs on top of them.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Bina Keluarga Lansia, Sekolah Lansia, posyandu and puskesmas for
          seniors, home care and meal programs, plus physical touches like
          geriatric pathways, reserved seats, elderly toilets, and special
          fares. Officials across agencies share a common understanding of what
          a Kota Ramah Lansia should be.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          In other words, the will is clearly there. So what is missing?
        </p>
      </>
    ),
  },
  {
    scene: "reform",
    label: "§ 08 · RECOMMENDATIONS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The path
          <br />
          <span className="font-serif italic text-coral">forward.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The study&rsquo;s central recommendation is direct: Semarang should,
          as soon as possible, pass a local regulation (Perda) dedicated to the
          elderly &mdash; the legal umbrella that everything else can hang from.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Alongside it: strengthen the PPLKS elderly association, run real
          public education and socialisation so the wider community values its
          seniors, upgrade age-friendly facilities, and provide green open
          spaces &mdash; city-centre parks made for the elderly to gather in.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The aim is to give older residents a larger, supported space to stay
          active and socially useful.
        </p>
      </>
    ),
  },
  {
    scene: "impact",
    label: "§ 09 · THE GAP",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          No law to
          <br />
          <span className="font-serif italic text-coral">anchor it.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Through Dunn&rsquo;s lens the obstacle is clear. Semarang planned a
          Regional Action Plan for the elderly (2019&ndash;2023), but it had no
          continuation and stalled. There is still no dedicated local law to
          protect the elderly.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Without that umbrella, budgets are hard to allocate and implementers
          struggle to coordinate. Communication between agencies stays
          temporary rather than sustained. Bodies like PPLKS exist but
          under-deliver, and too few champions promote the cause publicly.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The sharpest edge is at home: when families and neighbours do not
          prioritise their elders, even good facilities go unused &mdash; and
          seniors end up lonely.
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
              k: "The will is real.",
              v: "Across programs, facilities, and shared understanding, Semarang is already moving toward an age-friendly city without being forced to.",
            },
            {
              k: "The law is the missing keystone.",
              v: "No dedicated elderly Perda means stalled plans, fragile budgets, and weak coordination. A legal umbrella is the single highest-leverage fix.",
            },
            {
              k: "Policy ends at the doorstep.",
              v: "Dunn's policy environment matters most: unless families and communities value the elderly, no regulation alone keeps them from loneliness.",
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
          license="Skripsi S-1"
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
