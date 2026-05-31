import Attribution from "@/components/Attribution";
import type { StorySectionData } from "./f1-story";

export const chatbotStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          A warung
          <br />
          on{" "}
          <span className="font-serif italic text-coral">WhatsApp.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          When COVID closed Warung Makan Barokah in Ungaran, the owner faced
          the same calculation thousands of Indonesian warungs faced: pay an
          aggregator a third of every sale, or stay closed.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The third path was the one most owners already used to chat with
          customers — WhatsApp. We turned it into a full ordering system. No
          new app to install. No service fee. The chatbot takes the order, the
          admin app routes it, MySQL records it.
        </p>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          &ldquo;The most expensive part of going online is not the technology.
          It is the platform that owns the customer.&rdquo;
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
          Aggregators
          <br />
          aren&rsquo;t{" "}
          <span className="font-serif italic text-coral">free.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          For a warung selling Rp 15,000 plates, a 30% commission isn&rsquo;t a
          fee. It is the difference between staying open and closing. Delivery
          surcharges, promo markdowns, and platform fees stack until the math
          stops working.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The pandemic forced offline-only businesses to attempt the transition
          anyway, often with minimal digital fluency. Owners needed to learn an
          app, restructure prices, and trust an algorithm — all at once. Most
          opted out.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The customer side was no easier. Another app to download. Another
          account. Another login. For a regular ordering rice and tempeh, that
          friction was a wall.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 03 · SYSTEM",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Four parts,
          <br />
          one{" "}
          <span className="font-serif italic text-coral">channel.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The customer talks to WhatsApp. Everything behind it is invisible — a
          Laravel API parses the message, MySQL stores the order, and a Flutter
          admin app surfaces it to the warung.
        </p>
        <div className="grid grid-cols-2 gap-3.5 my-6 mb-8">
          {[
            { k: "Channel", v: "WhatsApp" },
            { k: "API", v: "PHP · Laravel" },
            { k: "Bot runtime", v: "Node.js" },
            { k: "Admin", v: "Flutter" },
          ].map((kv) => (
            <div
              key={kv.k}
              className="bg-white border-3 border-ink rounded-neo-md py-4 px-5 shadow-neo-sm"
            >
              <div className="font-mono text-xs text-[#666] uppercase tracking-wider">
                {kv.k}
              </div>
              <div className="font-display text-[22px] mt-1.5">{kv.v}</div>
            </div>
          ))}
        </div>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Database, HTML/CSS, CRUDBooster library for admin scaffolding —
          standard parts assembled to do an unstandard thing: be invisible to
          the customer.
        </p>
      </>
    ),
  },
  {
    scene: "method",
    label: "§ 04 · METHODOLOGY",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Five stages.
          <br />
          One{" "}
          <span className="font-serif italic text-coral">waterfall.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A small system with a clear scope is exactly where Waterfall earns
          its keep. The flow: analyze, design, implement, test, maintain.
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Analisis</strong> — map the order flow end to end and the data each step needs.</li>
          <li><strong>Perancangan</strong> — design forms, conversation script, admin views.</li>
          <li><strong>Implementasi</strong> — PHP/Laravel + Node.js bot + MySQL persistence.</li>
          <li><strong>Uji coba</strong> — black-box subsystem checks, then white-box basis-path coverage.</li>
          <li><strong>Pemeliharaan</strong> — patch and extend once it is live.</li>
        </ol>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          Heavy methodology on a small project is overhead. Light methodology
          on the right small project is the reason it ships.
        </blockquote>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 05 · RESULTS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Black box
          <br />
          and <span className="font-serif italic text-coral">white box.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Black-box testing checked behavior — the customer flow, the admin
          flow, the WhatsApp integration. White-box testing, using basis path,
          checked that every branch of the control flow was actually exercised.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The combination matters. Black-box alone could miss a logic branch
          that nobody happens to trigger. White-box alone could pass on code
          that does the wrong thing correctly. Together they form a floor.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Every scenario tested passed. Login, add menu, place order via
          WhatsApp, confirm, update status — the system did what was expected.
        </p>
      </>
    ),
  },
  {
    scene: "impact",
    label: "§ 06 · IMPACT",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Zero
          <br />
          <span className="font-serif italic text-coral">friction.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The customer already has WhatsApp. The owner already runs WhatsApp.
          Nothing new to download. Nothing new to learn. The transaction is
          where it would have happened anyway — only now it&rsquo;s logged.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The economic shift is real. Zero per-order commission. The owner sets
          prices the owner can defend. The customer doesn&rsquo;t see a
          markup. The platform that wins is the one the customer already uses
          for free.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          This pattern generalizes. Replace warung with tukang sayur, with
          laundry, with photocopy shop. The minimum viable infrastructure is
          already in everyone&rsquo;s pocket.
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
          Three things
          <br />
          this{" "}
          <span className="font-serif italic text-coral">proved.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Channels matter more than apps.",
              v: "The hardest part of digitizing micro-businesses is not building software. It is meeting users where they already are.",
            },
            {
              k: "Waterfall isn&rsquo;t dead — it&rsquo;s scoped.",
              v: "On a small, well-bounded system, Waterfall ships. Agile is for ambiguity, not for bounded problems.",
            },
            {
              k: "Black + White is the cheap floor.",
              v: "Two test paradigms, one small system, every reasonable path exercised. Not glamorous; reliably correct.",
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
          authors="Amalia F. Zahro · Iwan S. Wibisono"
          journal="JAMASTIKA Vol.2 No.1"
          year="2023"
          license="© Authors"
        />
      </>
    ),
  },
];
