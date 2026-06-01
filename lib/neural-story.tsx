import Attribution from "@/components/Attribution";
import PaperLinkButton from "@/components/PaperLinkButton";
import { showcase } from "./scenes";
import type { StorySectionData } from "./f1-story";

const card = showcase.find((s) => s.slug === "neural")!;

export const neuralStory: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          A virtual
          <br />
          race{" "}
          <span className="font-serif italic text-coral">engineer.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A Formula 1 race is a strategy problem with no closed-form optimum.
          Heilmeier, Thomaser, Graf, and Betz at TU Munich and BMW Motorsport
          asked: can two small neural networks replace the manual strategy
          inputs that comprehensive race simulations still require?
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          They built a Virtual Strategy Engineer. Two feed-forward networks
          working in tandem. One decides whether a driver should pit on a
          given lap. The other picks the compound. Together they react to the
          race in progress.
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          &ldquo;The optimal strategy depends on every other driver&rsquo;s
          strategy. A network that learned what they actually did is the
          fastest approximation.&rdquo;
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
          Simulations
          <br />
          need{" "}
          <span className="font-serif italic text-coral">decisions.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Modern race simulations model lap times as the sum of tire
          degradation, fuel mass, base lap time, driver ability, and full
          course yellow effects. They are realistic enough to evaluate
          strategy options. They are not autonomous enough to choose one.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Today, the user has to specify what each driver does on each lap.
          That input becomes the strategy of every car except the one being
          studied. It is tedious, unrealistic, and locked at the start of the
          simulation.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The race situation evolves. A safety car appears. A driver pits
          earlier than expected. A real strategist would react. A manually
          scripted strategy cannot.
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
          Why a
          <br />
          neural{" "}
          <span className="font-serif italic text-coral">net?</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Classical optimization assumes a well-behaved objective function.
          The race simulation is non-linear and discontinuous. Solvers cannot
          differentiate through it. Worse, optimizing each driver in
          isolation misses the fact that strategies depend on each other.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A Markov chain trained on historic strategies has its own pathology.
          Rare events (a defective tire, a collision-forced pit stop) become
          transition probabilities the model treats as normal options.
          Decisions are not repeatable.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          A neural network learns the mechanism. Rare cases get diluted by
          the bulk of normal training data. Decisions become deterministic
          for the same input. The reasoning is approachable: feed it a race
          context, get a probability.
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
          Three hidden
          <br />
          <span className="font-serif italic text-coral">layers.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Both networks are feed-forward MLPs with three fully connected
          hidden layers of 64 neurons each. ReLU activations in the hidden
          layers, sigmoid on the pit-stop output, softmax on the compound
          output.
        </p>
        <div className="grid grid-cols-2 gap-3.5 my-6 mb-8">
          {[
            { k: "Hidden layers", v: "3" },
            { k: "Neurons / layer", v: "64" },
            { k: "Optimizer", v: "Nadam" },
            { k: "L2 reg.", v: "0.0005" },
            { k: "Pit loss", v: "Binary CE" },
            { k: "Class weights", v: "1 : 5" },
          ].map((kv) => (
            <div
              key={kv.k}
              className="bg-white border-3 border-ink rounded-neo-md py-3 px-4 shadow-neo-sm"
            >
              <div className="font-mono text-xs text-[#666] uppercase tracking-wider">
                {kv.k}
              </div>
              <div className="font-display text-[19px] mt-1">{kv.v}</div>
            </div>
          ))}
        </div>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Class weighting on the pit-stop network (1 for &ldquo;no pit&rdquo;,
          5 for &ldquo;pit&rdquo;) compensates for the dataset imbalance.
          Most laps are not pit laps. Without the weighting, the network
          would optimize loss by predicting &ldquo;no pit&rdquo; for every
          lap.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 05 · DATASET",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Six seasons,
          <br />
          one{" "}
          <span className="font-serif italic text-coral">table.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          F1 timing data from the 2014 to 2019 seasons. Six years of races.
          After filtering for dry conditions with 1 to 3 pit stops and
          excluding drivers finishing below P15, 4,087 laps with a tire
          change remain for the pit-stop NN.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The compound NN uses a smaller subset (2,757 entries) after
          additional filtering. The medium compound is over-represented in
          training data because top-ten qualifiers are forced to start on
          the tire they used in Q2, biasing the dataset.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Features include race progress, remaining pit stops, current
          relative compound, race track, fulfilled second compound rule, and
          number of available compounds (2 pre-2016, 3 from 2016 onwards).
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
          10-fold
          <br />
          <span className="font-serif italic text-coral">stratified.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Training is in TensorFlow with the Keras API. Each network uses
          early stopping with patience 5 - training stops when validation
          loss has not improved for 5 consecutive iterations.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Hyperparameters are selected over an extensive search informed by
          Geron&rsquo;s recommendations and evaluated against held-out F1
          score (pit) and accuracy (compound). Training uses 10-fold
          stratified cross-validation. The final model is retrained on 90%
          of the data with 10% held back for validation.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Batch size 256, chosen large enough that each batch has a
          reasonable chance of containing some pit-stop examples. Without
          that, gradient updates become extremely noisy.
        </p>
        <blockquote className="my-7 py-5 px-6 sm:py-6 sm:px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[17px] sm:text-[18px] leading-[1.45] italic text-center">
          The dataset is imbalanced. The loss function has to know that.
        </blockquote>
      </>
    ),
  },
  {
    scene: "training",
    label: "§ 07 · TRAINING",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          Loss
          <br />
          <span className="font-serif italic text-coral">converges.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The training curve looks like every well-regularized binary
          classifier: a fast initial drop in the first few epochs, then a
          long shallow tail. Early stopping triggers around epoch 20 when
          validation loss plateaus.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          L2 regularization at 0.0005 prevents overfitting on the relatively
          small dataset. Nadam (Nesterov-momentum Adam) accelerates
          convergence past the early-epoch plateau without overshooting once
          loss flattens.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Class weighting on pit-stop loss is the single most important
          training decision. Without it, the network learns the trivial
          majority-class predictor and the F1 score collapses.
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
          F1 score
          <br />
          ≈{" "}
          <span className="font-serif italic text-coral">0.35.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The pit-stop network averages an F1 score of approximately 0.35 on
          held-out test data. Modest in absolute terms. The interesting
          numbers are inside the predictions, not the metric.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          On the 2019 Brazilian GP (excluded from training), the network
          correctly identifies Verstappen&rsquo;s first and second pit-stop
          windows several laps before they happen - pit probability rises
          gradually and peaks at the actual stop. Two of Sainz and
          Gasly&rsquo;s stops are missed by a few laps. The remaining stops
          are well-tracked.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          The compound network does better on accuracy because the choice is
          more constrained: regulations force two different compounds, and
          start-tire rules narrow the options for top-ten qualifiers.
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
          Reasonable,
          <br />
          and{" "}
          <span className="font-serif italic text-coral">repeatable.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The VSE is compared against the alternative: manual user input. On
          a like-for-like simulated race, the VSE makes decisions that match
          or improve race outcomes versus a human-scripted strategy. More
          importantly, it reacts to the live race state.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          When a safety car phase begins, the VSE&rsquo;s pit probability
          spikes for drivers who haven&rsquo;t pitted yet - the same reflex
          a real strategist has, because FCY conditions reduce pit-stop
          time-loss.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Markov chain baselines suffer from non-repeatability:
          identical race states produce different decisions across runs. The
          VSE produces the same probability for the same input. That makes
          it usable inside Monte Carlo evaluations.
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
          for{" "}
          <span className="font-serif italic text-coral">sport ML.</span>
        </h2>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Replace manual inputs with learned ones.",
              v: "A small FFNN can replace what currently requires a human to script. The improvement is not raw accuracy, it is responsiveness to the running simulation.",
            },
            {
              k: "Class weighting is the trick.",
              v: "Imbalanced data with rare positive events (pit stops) demands explicit re-weighting. Otherwise the network defaults to the trivial classifier.",
            },
            {
              k: "Repeatability matters more than peak score.",
              v: "An F1 of 0.35 is not glamorous, but it is consistent. That makes the VSE useful inside larger Monte Carlo strategy studies, which a Markov chain cannot match.",
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
          license="CC-BY"
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
