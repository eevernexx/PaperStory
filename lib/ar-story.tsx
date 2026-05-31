import Attribution from "@/components/Attribution";
import type { StorySectionData } from "./f1-story";

export const arStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          A cube
          <br />
          you can{" "}
          <span className="font-serif italic text-coral">walk around.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          For an elementary school student in Bojonegoro, the word
          &ldquo;tabung&rdquo; is a flat picture in a textbook. The volume
          formula is a string of letters that doesn&rsquo;t connect to
          anything they can hold.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          We built an Android app that uses a single AR marker to project six
          bangun ruang — cube, cuboid, cylinder, cone, sphere, pyramid — into
          the room. Point a phone at the marker. The shape appears. Walk around
          it. The abstraction stops being abstract.
        </p>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          &ldquo;You cannot teach the volume of a cylinder to someone who has
          never seen its inside.&rdquo;
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
          Textbooks
          <br />
          are{" "}
          <span className="font-serif italic text-coral">flat.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Bangun ruang is taught at primary level using a blackboard, a
          textbook, and a teacher&rsquo;s gesture in the air. The shape lives
          in two dimensions on the page and one of mime in the classroom.
          Students are asked to imagine the rest.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          At MI Wasilatul Huda in Ngasem, Bojonegoro, interest in mathematics
          was low. Students struggled with bangun ruang specifically. Without a
          tactile object, the gap between a face on paper and a volume in the
          mind stays open.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The question was not whether 3D models help. It was: how cheaply can
          we put one in every student&rsquo;s hand?
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 03 · METHODOLOGY",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Single
          <br />
          <span className="font-serif italic text-coral">marker.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Augmented Reality offers several tracking approaches — markerless,
          multiple marker, paddle marker, single marker. For a classroom tool
          targeting low-cost Android devices, single marker is the right
          tradeoff: one image, one shape, one anchor.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The student prints (or is given) a small marker card. The app
          recognizes the marker, locks onto its position, and renders the 3D
          bangun ruang on top of it. Move the marker, the shape moves. Tilt
          it, the shape tilts. Move the phone around the marker, the shape
          stays put.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Six shapes are bundled — kubus, balok, tabung, kerucut, bola, limas
          — each rendered with edges, faces, and labels.
        </p>
      </>
    ),
  },
  {
    scene: "method",
    label: "§ 04 · BUILD",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Five stages.
          <br />
          One{" "}
          <span className="font-serif italic text-coral">APK.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The system was developed using the Waterfall model — appropriate for
          a tool with a fixed scope and a defined audience.
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Analisis</strong> — interview teachers, profile the target Android devices.</li>
          <li><strong>Desain</strong> — single marker design + 3D models for six shapes.</li>
          <li><strong>Implementasi</strong> — Unity engine with Vuforia for marker tracking.</li>
          <li><strong>Uji coba</strong> — usability testing with MI Wasilatul Huda students.</li>
          <li><strong>Deployment</strong> — packaged as a single Android APK.</li>
        </ol>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          A learning tool that needs to be installed by a parent who barely
          uses Android is a learning tool that doesn&rsquo;t reach the child.
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
          94.67%
          <br />
          <span className="font-serif italic text-coral">layak.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The usability test, conducted with MI Wasilatul Huda Ngasem
          Bojonegoro students, returned a score of 94.67%. The rubric category:
          &ldquo;sangat layak digunakan&rdquo; — highly suitable for use.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A 94% rating doesn&rsquo;t prove learning outcomes. It proves the
          medium gets out of the way. When the tool is rated this high by the
          target user, the next experiment becomes worth running — pre/post
          tests on actual geometric comprehension.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          For an Android-only, single-marker AR app on consumer hardware in a
          rural classroom, that is a strong floor.
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
          Geometry,
          <br />
          made{" "}
          <span className="font-serif italic text-coral">touchable.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Engagement with math content rose. The bangun ruang chapter went
          from &ldquo;tidak menarik&rdquo; to a phone-and-marker activity
          students initiated themselves.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The deeper impact isn&rsquo;t the engagement metric. It&rsquo;s the
          mental model shift. A student who has seen a cylinder rotate in real
          space — who has watched the circular face become an ellipse and back
          — has a referent for the formula they didn&rsquo;t have before.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The template scales. Replace bangun ruang with biology cells, with
          molecular structures, with historical artifacts. The marker is
          paper. The classroom is anywhere.
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
          Three lessons
          <br />
          from a{" "}
          <span className="font-serif italic text-coral">marker.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Cheapest interface wins in classrooms.",
              v: "Single marker + Android beat anything that needed a headset, a controller, or a paid SDK. The bar is what the school actually owns.",
            },
            {
              k: "Usability scores precede learning scores.",
              v: "94.67% means the tool is not the bottleneck. Now the experiment that matters — pre/post comprehension — becomes the right next study.",
            },
            {
              k: "Make the abstract physical.",
              v: "Volume formulas are easier when there is a volume to look at. The hardest part of math teaching is supplying the referent.",
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
          authors="Mamluatul Husnia · Iwan S. Wibisono"
          journal="JAMASTIKA Vol.1 No.1"
          year="2022"
          license="© Authors"
        />
      </>
    ),
  },
];
