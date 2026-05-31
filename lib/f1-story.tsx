import { ReactNode } from "react";
import type { SceneId } from "./scenes";
import { showcase } from "./scenes";
import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";

export type StorySectionData = {
  scene: SceneId;
  label: string;
  content: ReactNode;
};

const card = showcase.find((s) => s.slug === "f1")!;

export const f1Story: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Encryption,
          <br />
          at the speed of{" "}
          <span className="font-serif italic text-coral">silicon.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Fully Homomorphic Encryption lets a server compute on data it cannot
          read. The math is beautiful. The performance is not. Software FHE is
          four to five orders of magnitude slower than computing on plaintext.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          F1, presented at MICRO 2021 by MIT and the University of Michigan, is
          the first FHE accelerator that runs full programs. Not isolated ops.
          Programs. Real-time private deep learning, end to end, on a single
          ASIC.
        </p>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          &ldquo;5,400x geometric mean. Up to 17,000x peak. The accelerator
          gap closes here.&rdquo;
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
          A 100,000x
          <br />
          <span className="font-serif italic text-coral">tax.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          BGV, the FHE scheme F1 targets, encodes information into vectors
          thousands of elements long, then computes over them with modular
          arithmetic, number-theoretic transforms, and structured permutations.
          Every basic operation explodes.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          On a modern CPU, FHE workloads are 10,000x to 100,000x slower than
          their plaintext counterparts. A simple MNIST inference takes seconds.
          A CIFAR inference takes twenty minutes. At those numbers, FHE stays
          academic. Adoption is gated on hardware.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Prior FPGA accelerators chipped at the problem one op at a time. They
          could speed up a single homomorphic multiplication. They could not
          run a program.
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
          Why isolated ops
          <br />
          aren&rsquo;t{" "}
          <span className="font-serif italic text-coral">enough.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          HEAX, the best prior FPGA accelerator, hit 200x on a single CKKS
          multiplication. Useful, but every program needs many operations the
          accelerator does not implement, which must run on a slow host CPU.
          The end-to-end speedup collapses.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          GPUs have the bandwidth and the lanes, but no modular arithmetic and
          no structured permutations. They run FHE workloads only modestly
          faster than CPUs. Hybrid HE-MPC accelerators (Gazelle, Cheetah) avoid
          deep FHE programs by passing intermediates back to the client.
          Communication becomes the new bottleneck.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          F1&rsquo;s thesis: a programmable ASIC that handles every primitive
          inside the accelerator wins by avoiding every off-chip and off-card
          handoff that defeats the partial solutions.
        </p>
      </>
    ),
  },
  {
    scene: "architecture",
    label: "§ 04 · ARCHITECTURE",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          16 clusters,
          <br />
          one{" "}
          <span className="font-serif italic text-coral">scratchpad.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          F1 is a wide-vector processor with deeply specialized functional
          units. 16 compute clusters, each housing one NTT unit, one
          automorphism unit, two modular multipliers, two adders, and a banked
          512 KB register file.
        </p>
        <div className="grid grid-cols-2 gap-3.5 my-6 mb-8">
          {[
            { k: "Process", v: "14 / 12 nm" },
            { k: "Die area", v: "151.4 mm²" },
            { k: "Scratchpad", v: "64 MB · 16 banks" },
            { k: "HBM2 BW", v: "1 TB/s" },
            { k: "On-chip BW", v: "24 TB/s" },
            { k: "TDP", v: "180.4 W" },
          ].map((kv) => (
            <div
              key={kv.k}
              className="bg-white border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm"
            >
              <div className="font-mono text-xs text-[#666] uppercase tracking-wider">
                {kv.k}
              </div>
              <div className="font-display text-[20px] mt-1">{kv.v}</div>
            </div>
          ))}
        </div>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Three 16-by-16 bit-sliced crossbars connect clusters to scratchpad
          banks at full bisection bandwidth. Logic runs at 1 GHz; memories are
          double-pumped at 2 GHz. The on-chip network alone delivers 24x more
          bandwidth than HBM2. Data movement, not compute, is what F1 was
          designed around.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 05 · WORKLOADS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Seven full
          <br />
          <span className="font-serif italic text-coral">programs.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          F1 is evaluated on seven full FHE programs, not microbenchmarks.
          Three are deep learning inferences (LoLa-CIFAR, LoLa-MNIST in two
          weight modes), one is logistic regression training, one is private
          database lookup, and two are bootstrapping circuits (BGV and CKKS).
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>LoLa-CIFAR</strong> &middot; image classification on CIFAR-10 with unencrypted weights.</li>
          <li><strong>LoLa-MNIST</strong> &middot; both unencrypted-weights and encrypted-weights variants.</li>
          <li><strong>Logistic regression</strong> &middot; private model training.</li>
          <li><strong>DB lookup</strong> &middot; private query against an encrypted database.</li>
          <li><strong>BGV / CKKS bootstrapping</strong> &middot; the noise refresh step that unblocks unbounded depth.</li>
        </ul>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Cycle-accurate simulation on the RTL-synthesized F1 design.
          Comparisons against an Intel Xeon E3-1240v5 CPU baseline and against
          HEAX where applicable.
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
          High-throughput
          <br />
          <span className="font-serif italic text-coral">FUs.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          F1&rsquo;s functional units are heavy. A fully-pipelined four-step
          NTT unit improves NTT performance by 1,600x over the prior state of
          the art. A custom FHE-friendly modular multiplier reduces area by
          19% and power by 30% versus Montgomery, on the same delay.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Decoupled data orchestration hides HBM2 latency. Scratchpad banks
          autonomously fetch data far ahead of use; compute clusters never
          touch main memory. A static compiler schedules every load, every
          NTT, every automorphism. There is no dynamic dispatch.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Why static? Because key-switching, the most expensive FHE step, has
          32 MB of key-switch hints that get reused across many operations.
          The compiler maximizes that reuse; the architecture trusts it.
        </p>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          Build the FUs once. Schedule the data movement forever.
        </blockquote>
      </>
    ),
  },
  {
    scene: "benchmark",
    label: "§ 07 · BENCHMARK SETUP",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Cycle-accurate,
          <br />
          end to{" "}
          <span className="font-serif italic text-coral">end.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The simulator is a checker, not a predictor. The architecture is
          fully static, so the simulator runs the program at each component
          and verifies latencies and dependencies match the compiler&rsquo;s
          plan. If it runs, it ships.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          For each benchmark, F1 is measured in milliseconds and compared
          against a 4-core, 8-thread, 3.5 GHz Xeon E3-1240v5. Microbenchmarks
          (NTT, automorphism, homomorphic multiply, permutation) add a
          comparison against HEAXσ, an SRAM-extended variant of HEAX with an
          added automorphism unit, since the original HEAX lacks it.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Every benchmark uses BGV bootstrapping with Lmax = 24 and the
          Sheriff-Peikert algorithm for non-packed bootstrapping. CKKS
          bootstrapping uses HEAAN, also at Lmax = 24.
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
          17,412x
          <br />
          on{" "}
          <span className="font-serif italic text-coral">MNIST.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Speedups across the seven benchmarks range from 1,195x (CKKS
          bootstrapping, the most memory-bound) to 17,412x (LoLa-MNIST with
          unencrypted weights, the most compute-bound). Geometric mean: 5,432x.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          LoLa-CIFAR drops from 20 minutes per inference to 241 milliseconds.
          That is the operational threshold for offloaded inference: at 241
          ms, an FHE deep learning prediction now fits inside the typical
          round-trip latency of a cloud API call. Private inference becomes a
          system call, not a thesis.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          On microbenchmarks, F1 outpaces HEAXσ by 172x to 1,866x. The gap
          widens further when measuring the dependencies HEAX would have to
          offload to a host.
        </p>
      </>
    ),
  },
  {
    scene: "comparison",
    label: "§ 09 · COMPARISON",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The first
          <br />
          <span className="font-serif italic text-coral">programmable.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          F1 is the first FHE accelerator capable of running full FHE
          programs. Every prior accelerator targets isolated operations and
          relies on a host CPU for the rest.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[16.5px]">
          <li><strong>vs. CPU</strong> &middot; gmean 5,432x faster across full programs.</li>
          <li><strong>vs. HEAX</strong> &middot; 172x to 1,866x on shared microbenchmarks, plus complete programs HEAX cannot run.</li>
          <li><strong>vs. GPUs</strong> &middot; bandwidth-rich but no modular arithmetic; limited FHE gains.</li>
          <li><strong>vs. Cheetah/Gazelle</strong> &middot; not directly comparable; those avoid deep FHE via client round-trips.</li>
        </ul>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The architectural lesson: programmability + reuse-aware static
          scheduling + heavy specialized FUs is the right combination for
          FHE. Each piece is necessary; together they unlock the application
          class.
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
          from{" "}
          <span className="font-serif italic text-coral">F1.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Data movement is the FHE bottleneck.",
              v: "Wide vectors mean per-operation operands are megabytes. Compute throughput is cheap; reuse is the design problem.",
            },
            {
              k: "Static scheduling beats dynamic dispatch.",
              v: "FHE programs are deterministic. A smart compiler can schedule every fetch and every op, leaving the silicon for compute.",
            },
            {
              k: "Programmability is the unlock.",
              v: "Speeding up individual ops is not enough. A general-purpose FHE accelerator changes what FHE programs are economically possible to run.",
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
          license="ACM"
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
