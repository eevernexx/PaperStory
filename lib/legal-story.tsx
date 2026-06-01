import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";
import { showcase } from "./scenes";
import type { StorySectionData } from "./f1-story";

const card = showcase.find((s) => s.slug === "legal")!;

export const legalStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          120 million
          <br />
          hectares of{" "}
          <span className="font-serif italic text-coral">forest.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Indonesia holds the world&rsquo;s eighth-largest forest. 120.6
          million hectares, 63% of the country&rsquo;s land area. Three
          decades of environmental law have tried to settle a single
          question about that forest: who gets to decide what happens to it.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          This paper, published in the inaugural issue of IJEL by Mahardika
          (UNNES) and Bayu (Global Youth Green Community), traces the
          political history of that question, and argues the legal regime
          built to answer it has been quietly losing to the economic regime
          built alongside it.
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          &ldquo;An environmental law that is not enforceable is, in
          practice, an investment policy.&rdquo;
        </blockquote>
      </>
    ),
  },
  {
    scene: "problem",
    label: "§ 02 · BACKGROUND",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          From 1945
          <br />
          to <span className="font-serif italic text-coral">2009.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Before the constitutional amendments, Article 33(3) of the 1945
          Constitution was the single provision linking the state to natural
          resource management. The 1960 Agrarian Law (UUPA) translated that
          authority into practice.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The 1980s introduced &ldquo;sustainable development&rdquo; into
          international vocabulary: first through the IUCN World
          Conservation Strategy (1980), then Lester R. Brown&rsquo;s
          Building a Sustainable Society (1981), and definitively through
          the Brundtland Report (1987).
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The conceptual shift reached Indonesian law slowly. 1999&rsquo;s
          Forestry Law (UU 41) and 2009&rsquo;s Environmental Protection and
          Management Law (UU 32) were the two big landings. UU 32/2009 is
          the frame this paper interrogates.
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
          The law is
          <br />
          on{" "}
          <span className="font-serif italic text-coral">paper.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The motivating fact: since 2015, approximately 30% of Indonesia&rsquo;s
          designated conservation forest has been damaged by community
          encroachment. The forests with the strongest legal protection are
          being eroded faster than the legal protection can respond.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The paper&rsquo;s thesis is not that the law is wrong. It is that
          the law&rsquo;s relationship to enforcement, to sectoral overlap,
          and to spatial planning is structurally weak. The intent of UU
          32/2009 is clear. The practice has been ambiguous.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          That gap is what the analysis tries to close. Not with more
          regulation, but with reform of how the existing regulation
          actually operates.
        </p>
      </>
    ),
  },
  {
    scene: "articles",
    label: "§ 04 · CONSTITUTIONAL ARTICLES",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Three articles,
          <br />
          one{" "}
          <span className="font-serif italic text-coral">tension.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Every Indonesian environmental ruling cites the same three
          constitutional anchors.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Pasal 28H</strong> &middot; right to a healthy environment as a fundamental human right.</li>
          <li><strong>Pasal 33(3)</strong> &middot; earth, water, and natural resources are controlled by the state, used for the people.</li>
          <li><strong>Pasal 33(4)</strong> &middot; national economy organized on the principle of sustainability and environmental insight.</li>
        </ul>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Articles 33(3) and 33(4) form an internal tension. The same
          constitution that empowers the state to organize resource use for
          economic ends also requires that organization to be sustainable.
          The paper argues 33(4) has historically been read narrowly,
          subordinated to 33(3).
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 05 · THE TENSION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Nature
          <br />
          versus{" "}
          <span className="font-serif italic text-coral">investment.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Indonesia&rsquo;s development trajectory, beginning with the first
          Five-Year Plan (1969-1974), was built on capital investment,
          domestic and foreign, particularly in the mining and forestry
          sectors. Sectoral laws followed: each industry wrote the rules for
          its own extraction.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The environmental aspect arrived later, into a legal landscape
          already shaped by sectoral logic. UU 32/2009 attempted to install
          an environmental &ldquo;umbrella&rdquo; over the sectoral regime.
          The structural mismatch is the paper&rsquo;s analytical center.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          When environmental law confronts a sectoral law that calls itself
          the umbrella for its own resource, the environmental claim tends
          to lose, quietly, on the technicality.
        </p>
      </>
    ),
  },
  {
    scene: "method",
    label: "§ 06 · THE LAW",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Six P&rsquo;s,
          <br />
          one{" "}
          <span className="font-serif italic text-coral">pipeline.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          UU 32/2009 frames environmental management as a six-stage
          pipeline: planning, utilization, control, maintenance, supervision,
          enforcement.
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Perencanaan</strong> &middot; planning. Spatial and resource-use plans.</li>
          <li><strong>Pemanfaatan</strong> &middot; utilization. Permitting the use of natural resources.</li>
          <li><strong>Pengendalian</strong> &middot; control. Prevention of damage and pollution.</li>
          <li><strong>Pemeliharaan</strong> &middot; maintenance. Conservation, restoration.</li>
          <li><strong>Pengawasan</strong> &middot; supervision. Oversight of compliance.</li>
          <li><strong>Penegakan</strong> &middot; enforcement. Sanctions, administrative through criminal.</li>
        </ol>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          A pipeline is only as strong as its weakest link. In practice, the
          weakest link has been enforcement.
        </blockquote>
      </>
    ),
  },
  {
    scene: "reform",
    label: "§ 07 · REFORM",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The ICEL
          <br />
          <span className="font-serif italic text-coral">framework.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The paper converges on a six-point reform framework articulated by
          the Indonesian Center for Environmental Law (ICEL).
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[16.5px]">
          <li>Shift the operating paradigm from economic-only to socio-cultural-ecological.</li>
          <li>Harmonize sectoral laws with the environmental umbrella so the umbrella actually covers.</li>
          <li>Strengthen administrative and criminal enforcement against violations.</li>
          <li>Empower community-based forest management as a high-resolution sensor.</li>
          <li>Resolve overlapping resource permits between mining, forestry, and plantation laws.</li>
          <li>Treat spatial planning as the integration layer that anchors everything else.</li>
        </ol>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          None of these are novel. All of them require political will the
          legal regime alone cannot supply.
        </p>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 08 · ANALYSIS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          One million
          <br />
          hectares,{" "}
          <span className="font-serif italic text-coral">a year.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Between 2000 and 2005, Indonesia lost roughly 1 million hectares
          of forest per year. Critical land, degraded beyond easy recovery,
          totals 59 million hectares inside forest area and 41 million
          outside.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Government Regulation 2/2008, which set tariffs on the use of
          forest areas for non-forestry purposes, became the paper&rsquo;s
          case study. Anchored to the 1999 Forestry Law, it functioned as
          policy permission for non-forestry use, weakening forest
          conservation even as UU 32/2009 ostensibly governed environmental
          protection.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The downstream effects spread: floods, landslides, drought, smog,
          contribution to global warming. These are not separate
          environmental problems. They are the same problem, downstream.
        </p>
      </>
    ),
  },
  {
    scene: "impact",
    label: "§ 09 · IMPACT",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          What needs
          <br />
          to{" "}
          <span className="font-serif italic text-coral">change.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The paper argues for a paradigm shift, from environmental
          management framed economically to environmental management framed
          socio-culturally and ecologically.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Concretely: harmonize the sectoral laws so that the environmental
          umbrella actually covers; strengthen enforcement so that
          violations carry real cost; empower community-based management
          because forest-adjacent communities are the highest-resolution
          sensors; treat spatial planning as the integration layer; and
          stop treating conservation as a brake on growth rather than a
          precondition for it.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The paper does not predict reform success. It identifies the
          structural changes that would make reform meaningful, and leaves
          the political work to the readers.
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
          <span className="font-serif italic text-coral">discourse.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Legal hierarchy is not the same as legal practice.",
              v: "UU 32/2009 sits above sectoral laws on paper. In practice, sectoral laws (older, better-resourced, with industries behind them) set the operative regime.",
            },
            {
              k: "Enforcement is the load-bearing P.",
              v: "Planning, control, supervision are necessary. Without enforcement they are descriptive, not normative. The 6th P is what makes the first five count.",
            },
            {
              k: "Paradigm matters before policy.",
              v: "Treating the environment as a constraint on growth produces one set of laws. Treating it as the medium of growth produces a different set. Indonesia is mid-transition.",
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
          license="CC-BY-SA"
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
