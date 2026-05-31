import { ReactNode } from "react";
import type { SceneId } from "./scenes";

export type StorySectionData = {
  scene: SceneId;
  label: string;
  content: ReactNode;
};

export const f1Story: StorySectionData[] = [
  {
    scene: "intro",
    label: "§ 01 · INTRODUCTION",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          A race is won
          <br />
          by{" "}
          <span className="font-serif italic text-coral">tenths.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          In Formula 1, the gap between victory and obscurity is measured in
          milliseconds. A single tenth of a second per lap, compounded across
          78 laps in Monaco, is a position on the podium.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          This is the story of a model that learned to predict those tenths
          — and the six contenders it had to beat to do it. We built it with{" "}
          <span className="font-mono">FastF1</span>,{" "}
          <span className="font-mono">scikit-learn</span>, and the entire 2024
          Monaco Grand Prix on our hard drive.
        </p>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          &ldquo;If you can predict the lap, you can predict the race. If you
          can predict the race, you can write the strategy.&rdquo;
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
          Lap times are
          <br />
          <span className="font-serif italic text-coral">never random.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A lap time is the output of a system: tire compound, fuel load, track
          temperature, driver fatigue, traffic, sector wind, brake temperature,
          and the chaos of nineteen other cars.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Race strategists guess at this system in real time. They make
          pit-stop decisions worth millions on intuition and sector data
          measured in fractions of a second. A reliable model would not replace
          them — it would arm them.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          But the problem is hard. Lap time variance within a single stint can
          exceed <strong>1.6 seconds</strong>. Across stints, it explodes. That
          noise has to be modeled, not smoothed away.
        </p>
      </>
    ),
  },
  {
    scene: "dataset",
    label: "§ 03 · DATASET",
    content: (
      <>
        <h2 className="font-display text-[clamp(36px,4.5vw,62px)] tracking-tight mb-7 leading-[1.0]">
          The 2024
          <br />
          Monaco GP,{" "}
          <span className="font-serif italic text-coral">decoded.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          FastF1 gives us telemetry, timing, weather, and tire data for every
          driver, every lap, every sector. We extracted the entire 2024 Monaco
          weekend — practice through race.
        </p>
        <div className="grid grid-cols-2 gap-3.5 my-6 mb-8">
          {[
            { k: "Source", v: "FastF1" },
            { k: "Event", v: "Monaco '24" },
            { k: "Laps", v: "1,420" },
            { k: "Features", v: "17" },
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
          Key features: lap number, tire compound, tire age, sector times, air
          &amp; track temperature, position, gap to leader, and stint number.
          Outliers (in-laps, out-laps, safety car laps) were tagged but kept —
          the model needed to see them.
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
          Six models
          <br />
          walk into a{" "}
          <span className="font-serif italic text-coral">garage.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          We pitted six regression approaches against the same task: given lap
          context, predict the lap time in seconds.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Linear Regression as the floor. Ridge and Lasso for regularization.
          Polynomial regression for non-linear effects. Random Forest for the
          non-parametric crown. And finally, an ensemble — a Random Forest
          tuned on top of features generated by all the others.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Train/test split was time-aware: the first 80% of laps trained the
          models; the final 20% tested them on unseen race conditions. No data
          leakage. Five-fold cross-validation on the training partition tuned
          hyperparameters.
        </p>
        <blockquote className="my-7 py-6 px-7 bg-yellow border-3 border-ink rounded-neo-md shadow-neo-sm font-serif text-[21px] leading-[1.45] italic">
          The honest test isn&rsquo;t whether a model fits the past. It&rsquo;s
          whether it survives the future.
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
          The ensemble
          <br />
          <span className="font-serif italic text-coral">won.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          Random Forest Ensemble achieved R² = 0.9676 — explaining 96.76% of
          lap-time variance on unseen race laps. Linear regression sat at the
          floor at 0.71. The gap is the story.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Polynomial regression beat linear ones by capturing tire degradation
          curves. Ridge edged Lasso by keeping correlated features alive.
          Random Forest alone closed most of the distance. The ensemble&rsquo;s
          extra 1.4 percentage points came from stacking — letting each
          model&rsquo;s weakness be covered by another&rsquo;s strength.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          RMSE for the winning model: <strong>0.39 seconds</strong>. In a sport
          where pit-stop decisions are made on 0.3-second gaps, that&rsquo;s
          operationally useful.
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
          What this
          <br />
          <span className="font-serif italic text-coral">unlocks.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          A 0.39-second RMSE on lap-time prediction is enough to simulate
          pit-stop windows with operational confidence. That&rsquo;s the
          threshold between an academic toy and a strategy room tool.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          Plug this model into a Monte Carlo simulation of race outcomes and
          you have a strategy engine. Each pit stop becomes a branching tree of
          probable finishing positions. Each undercut becomes a quantifiable
          bet.
        </p>
        <p className="text-[17.5px] leading-[1.65] mb-4 text-[#1a1a1a]">
          This is the gap between data science as a portfolio piece and data
          science as a profession. Same code, different framing.
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
          to <span className="font-serif italic text-coral">take.</span>
        </h2>
        <p className="font-serif text-[22px] leading-[1.4] text-[#1a1a1a] mb-6">
          The model worked. The numbers were honest. But the lessons travel
          beyond Formula 1.
        </p>
        <ol className="list-none mt-6 space-y-3.5">
          {[
            {
              k: "Stacking dominates singles.",
              v: "A well-tuned ensemble beat every individual model — including the strongest non-parametric one — by combining errors that didn't correlate.",
            },
            {
              k: "Time-aware splits are non-negotiable.",
              v: "Random shuffling would have inflated R² to a lie. The model has to be tested on the future, not on a rearranged past.",
            },
            {
              k: "Domain framing turns models into products.",
              v: '0.39s RMSE is a number. "Operational confidence on pit-stop windows" is a sale.',
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
        <p className="mt-8 text-[17.5px] leading-[1.65] text-[#1a1a1a]">
          The full source, notebooks, and methodology are on GitHub. The paper
          continues. Strategy is next.
        </p>
      </>
    ),
  },
];
