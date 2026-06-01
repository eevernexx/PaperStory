import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";
import { showcase } from "./scenes";
import type { StorySectionData } from "./f1-story";

const card = showcase.find((s) => s.slug === "coffee")!;

export const coffeeStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Four beans.
          <br />
          One{" "}
          <span className="font-serif italic text-coral">CNN.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Indonesia exports four major coffee varieties: Arabica, Excelsa,
          Liberica, Robusta. To a roaster they are radically different. To a
          smartphone camera, after roasting, they look almost the same.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          We trained a ResNet50 model to tell them apart from a single photo:
          no lab, no spectrometer, just a phone. Two thousand images, two
          stages of training, and a hard look at where deep learning still
          gets the shape of a roasted bean wrong.
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          &ldquo;Visual inspection by a trained roaster takes seconds. We built
          a model that does it in milliseconds, and asks it to be honest about
          the cases where it shouldn&rsquo;t.&rdquo;
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
          Roasted beans
          <br />
          <span className="font-serif italic text-coral">lie.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          After roasting, the visual markers that separate varieties (shape,
          surface, sheen) collapse toward a brown average. Out of 400 test
          images, 22 fooled our model. That is the story underneath the
          94.50%.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Sixteen of those twenty-two errors lived along a single faultline:
          Excelsa and Arabica. Two varieties that, post-roast, can carry
          similar curvature and color depth. The remaining six were
          scattered. A model that doesn&rsquo;t know where it is weak is a
          model that lies on its confidence scores.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The interesting question wasn&rsquo;t can we hit 95% on average. It
          was: can we hit it without burying Excelsa.
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
          A 4th-place
          <br />
          <span className="font-serif italic text-coral">producer.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Indonesia is the world&rsquo;s fourth-largest coffee producer.
          Twelve million farmers participate in the supply chain. Most do not
          have access to lab equipment that can verify what variety they are
          selling, or what variety a buyer is paying for.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Variety substitution at intake is a real economic problem. Excelsa
          is cheaper than Arabica; a cooperative buyer cannot reliably
          distinguish them in a roasted sample without expert visual review.
          The bottleneck has been the cost and availability of that review.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A smartphone-based classifier shifts the economics. Anyone with a
          mid-range Android can run an inference. The marginal cost of one
          additional grading drops to zero.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 04 · DATASET",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          2,000 photos.
          <br />
          <span className="font-serif italic text-coral">Balanced.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Class imbalance is the first place an image classifier finds a
          shortcut. We refused to give it one: five hundred images per
          variety, shot on a smartphone under everyday conditions.
        </p>
        <div className="grid grid-cols-2 gap-3.5 my-6 mb-8">
          {[
            { k: "Total", v: "2,000" },
            { k: "Per class", v: "500" },
            { k: "Test split", v: "400" },
            { k: "Resolution", v: "224 × 224" },
          ].map((kv) => (
            <div
              key={kv.k}
              className="bg-white border-3 border-ink rounded-neo-md py-4 px-5 shadow-neo-sm"
            >
              <div className="font-mono text-xs text-[#666] uppercase tracking-wider">
                {kv.k}
              </div>
              <div className="font-display text-[26px] mt-1.5">{kv.v}</div>
            </div>
          ))}
        </div>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Images were resized to 224×224, normalized, and lightly blurred
          with a Gaussian filter to suppress sensor noise. Then offline
          augmentation multiplied the training set across eight
          transformations: flips, rotations, brightness, contrast, zoom.
          Generalization is bought, not borrowed.
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
          Transfer,
          <br />
          then{" "}
          <span className="font-serif italic text-coral">fine-tune.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          ResNet50, pretrained on ImageNet, already knows what edges and
          curvature are. We did not want to forget that: we wanted to bend it
          toward coffee.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Stage one: freeze the backbone, train only the classifier head.
          The model learns to map ImageNet features onto four coffee classes
          without disturbing what it already knows.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Stage two: unfreeze the top 121 layers and fine-tune at a lower
          learning rate. The deepest convolutional blocks now learn that
          &ldquo;Excelsa-ness&rdquo; lives in subtler geometry than
          &ldquo;cat-ness&rdquo;. Training ran ~80 minutes on a single RTX
          3060.
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          Pretrained models are not knowledge. They are priors. Fine-tuning
          is where you write the truth.
        </blockquote>
      </>
    ),
  },
  {
    scene: "training",
    label: "§ 06 · TRAINING",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          From 47.75%
          <br />
          to{" "}
          <span className="font-serif italic text-coral">94.50%.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Validation accuracy started at 47.75% after stage-one initialization
          (frozen backbone, untrained head). Within the first stage, it
          climbed to about 92.50% as the head learned to project ImageNet
          features onto four coffee classes.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Stage two added 121 unfrozen layers and brought the model to
          94.50%. The fine-tune curve flattens fast: most of the extra
          accuracy comes in the first few epochs after unfreezing. After
          that, additional epochs traded better Arabica recall for worse
          Excelsa recall (and vice versa) without raising the average.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          That is the signature of a model running out of separation signal
          rather than out of training budget. The remaining gap is in the
          dataset, not the optimizer.
        </p>
      </>
    ),
  },
  {
    scene: "results",
    label: "§ 07 · RESULTS",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Liberica won.
          <br />
          Excelsa{" "}
          <span className="font-serif italic text-coral">struggled.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Liberica was perfect on precision: 100%. Robusta close behind at
          97% precision and 98% recall. Arabica recovered to 96% recall
          despite the confusion problem. Excelsa fell to 86% recall.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The class with the most distinctive post-roast geometry (Liberica,
          larger and more asymmetric) was the easiest to separate. The class
          with the most morphological overlap with Arabica (Excelsa) was
          where the network ran out of evidence.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          F1-scores: <strong>0.99</strong> Liberica, <strong>0.97</strong>{" "}
          Robusta, <strong>0.91</strong> Arabica, <strong>0.90</strong>{" "}
          Excelsa. Average accuracy on the held-out test set:{" "}
          <strong>94.50%</strong>, 378 of 400 correct.
        </p>
      </>
    ),
  },
  {
    scene: "comparison",
    label: "§ 08 · COMPARISON",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          ResNet50 vs
          <br />
          <span className="font-serif italic text-coral">MobileNetV2.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A common follow-up question: would a smaller, mobile-friendly
          architecture do as well? We benchmarked MobileNetV2 on the same
          dataset and protocol.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          MobileNetV2 reached approximately 96.00% accuracy with about 3.5 M
          parameters and trained in roughly 25 minutes. ResNet50 reached
          94.50% with about 25 M parameters and trained in 80 minutes. The
          mobile architecture wins on the metric and on cost for this
          dataset.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          That does not retire ResNet50. It clarifies the tradeoff: on a
          balanced 2,000-image dataset of natural photos, the inductive bias
          of MobileNetV2 (depthwise separable convolutions, inverted
          residuals) is well-matched to the problem. ResNet50 still wins on
          representational headroom when data scales up.
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
          A phone
          <br />
          becomes a{" "}
          <span className="font-serif italic text-coral">tool.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          94.50% accuracy on photos taken with a regular smartphone is the
          threshold where this stops being a research toy and starts being
          something a buyer at a wet mill can actually use.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The downstream applications stack up quickly: quality control at
          intake, on-the-spot mislabel detection, automated grading at
          smaller cooperatives that can&rsquo;t afford spectrometers. A 6 GB
          consumer GPU trained the model in 80 minutes. The inference cost
          is milliseconds on commodity hardware.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The bottleneck stops being computation. It becomes data: getting
          more Excelsa, in more lighting, from more sources, so that the
          model stops hedging on the one class it isn&rsquo;t sure about.
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
          from <span className="font-serif italic text-coral">94.50.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Two-stage transfer dominates one-shot fine-tuning.",
              v: "Training a head first, then unfreezing carefully, beat training everything from the start. The pretrained weights are worth protecting.",
            },
            {
              k: "Average accuracy hides class collapse.",
              v: "94.50% sounds clean. But Excelsa carried most of the error budget. Always look at the per-class confusion matrix before declaring victory.",
            },
            {
              k: "Mobile architectures are no longer the discount option.",
              v: "MobileNetV2 matched and exceeded ResNet50 on this size of dataset. The right architecture for the problem is not always the deepest one.",
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
