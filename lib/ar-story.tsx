import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";
import { showcase } from "./scenes";
import type { StorySectionData } from "./f1-story";

const card = showcase.find((s) => s.slug === "ar")!;

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
          &ldquo;cylinder&rdquo; is a flat picture in a textbook. The volume
          formula is a string of letters that doesn&rsquo;t connect to
          anything they can hold.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          We built an Android app that uses a single AR marker to project six
          3D solids (cube, cuboid, cylinder, cone, sphere, pyramid) into
          the room. Point a phone at the marker. The shape appears. Walk
          around it. The abstraction stops being abstract.
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
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
          Solid geometry is taught at primary level using a blackboard, a
          textbook, and a teacher&rsquo;s gesture in the air. The shape
          lives in two dimensions on the page and one of mime in the
          classroom. Students are asked to imagine the rest.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          At MI Wasilatul Huda in Ngasem, Bojonegoro, interest in
          mathematics was low. Students struggled with 3D shapes
          specifically. Without a tactile object, the gap between a face on
          paper and a volume in the mind stays open.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The question was not whether 3D models help. It was: how cheaply
          can we put one in every student&rsquo;s hand?
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
          Why AR,
          <br />
          why{" "}
          <span className="font-serif italic text-coral">now.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The hardware that runs camera-based AR is now in the pocket of
          every parent. Mid-range Android phones can detect a printed marker
          and overlay a 3D model at interactive frame rates. The cost
          structure changed before educational practice did.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The competing options aren&rsquo;t free. Physical 3D learning sets
          are expensive per classroom. VR headsets are expensive per
          student. Web-based 3D viewers require reliable internet that rural
          schools cannot guarantee. AR on a phone, with a paper marker, is
          the configuration with the right cost curve.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The motivating delta isn&rsquo;t engagement for its own sake.
          It&rsquo;s that the student gets a referent for the formula. The
          formula stops being magic.
        </p>
      </>
    ),
  },
  {
    scene: "tech",
    label: "§ 04 · TECHNOLOGY",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Single
          <br />
          <span className="font-serif italic text-coral">marker.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Augmented Reality offers several tracking approaches: markerless,
          multiple marker, paddle marker, single marker. For a classroom
          tool targeting low-cost Android devices, single marker is the
          right tradeoff: one image, one shape, one anchor.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The pipeline is short: camera frame, marker detection, pose
          estimation, 3D model placement, render. Each step runs at
          interactive rates on a 2017-or-later mid-range Android device. No
          internet required after install.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The marker is a printed sheet of paper. The student moves it; the
          shape on screen tracks. Move the phone around the marker; the
          shape stays put. The technology disappears.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 05 · BUILD",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Six shapes,
          <br />
          one{" "}
          <span className="font-serif italic text-coral">APK.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The app bundles six shapes (cube, cuboid, cylinder, cone, sphere,
          pyramid) each rendered with edges, faces, and labels. The student
          selects a shape; the app waits for the marker.
        </p>
        <div className="grid grid-cols-2 gap-3.5 my-6 mb-8">
          {[
            { k: "Engine", v: "Unity" },
            { k: "Tracker", v: "Vuforia" },
            { k: "Target", v: "Android" },
            { k: "Method", v: "Single marker" },
          ].map((kv) => (
            <div
              key={kv.k}
              className="bg-white border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm"
            >
              <div className="font-mono text-xs text-[#666] uppercase tracking-wider">
                {kv.k}
              </div>
              <div className="font-display text-[22px] mt-1">{kv.v}</div>
            </div>
          ))}
        </div>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The bundled APK runs offline. No login. No analytics. Children
          install it once, the marker lives in their notebook, and the
          classroom proceeds.
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
          Five stages
          <br />
          of <span className="font-serif italic text-coral">waterfall.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The system was developed using the Waterfall model, appropriate
          for a tool with a fixed scope and a defined audience.
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>Analysis</strong> &middot; interview teachers, profile target devices.</li>
          <li><strong>Design</strong> &middot; marker + 3D models for six shapes.</li>
          <li><strong>Implementation</strong> &middot; Unity + Vuforia for marker tracking.</li>
          <li><strong>Testing</strong> &middot; usability testing with MI students.</li>
          <li><strong>Deployment</strong> &middot; packaged as a single Android APK.</li>
        </ol>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          A learning tool that needs to be installed by a parent who barely
          uses Android is a learning tool that doesn&rsquo;t reach the child.
        </blockquote>
      </>
    ),
  },
  {
    scene: "usability",
    label: "§ 07 · USABILITY",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          94.67%
          <br />
          <span className="font-serif italic text-coral">suitable.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The usability test, conducted with MI Wasilatul Huda Ngasem
          Bojonegoro students, returned a composite score of 94.67%. The
          rubric placed it in the top band: highly suitable for use.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Breakdown across sub-criteria was tight: ease of use, interface
          clarity, learning value, and engagement all landed in the 94 to
          96% range. No single criterion dragged the composite down.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A 94% rating doesn&rsquo;t prove learning outcomes. It proves the
          medium gets out of the way. When the tool is rated this high by
          the target user, the next experiment becomes worth running:
          pre/post tests on actual geometric comprehension.
        </p>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 08 · RESULTS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The medium
          <br />
          got{" "}
          <span className="font-serif italic text-coral">out of the way.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          For an Android-only, single-marker AR app on consumer hardware in
          a rural classroom, 94.67% is a strong floor. The next bar is
          comprehension, not usability.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Teachers reported that students initiated the AR activity outside
          assigned class time, picking up phones to re-visit shapes they
          had explored earlier. Self-directed practice, on geometry, in
          grade school. That is the rare outcome.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The fact that the app is offline matters. The school in Ngasem
          doesn&rsquo;t have reliable internet. The fact that one APK is
          enough matters. There is nothing to maintain.
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
          Geometry,
          <br />
          made{" "}
          <span className="font-serif italic text-coral">touchable.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The deeper impact isn&rsquo;t the engagement metric. It&rsquo;s
          the mental model shift. A student who has seen a cylinder rotate
          in real space, who has watched the circular face become an ellipse
          and back, has a referent for the formula they didn&rsquo;t have
          before.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The template scales. Replace solid shapes with biology cells, with
          molecular structures, with historical artifacts. The marker is
          paper. The classroom is anywhere.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          What blocked this for twenty years wasn&rsquo;t the hardware. It
          was the assumption that classrooms in rural Indonesia couldn&rsquo;t
          carry the hardware. That assumption is now wrong.
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
          Three lessons
          <br />
          from a{" "}
          <span className="font-serif italic text-coral">marker.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Cheapest interface wins in classrooms.",
              v: "Single marker plus Android beat anything that needed a headset, a controller, or a paid SDK. The bar is what the school actually owns.",
            },
            {
              k: "Usability scores precede learning scores.",
              v: "94.67% means the tool is not the bottleneck. Now the experiment that matters (pre/post comprehension) becomes the right next study.",
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
