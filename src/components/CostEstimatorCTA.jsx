import React from 'react';

const CostEstimatorCTA = () => {
  return (
    <section className="overflow-hidden rounded-3xl border border-primary-gold/40 bg-gradient-to-r from-card-light via-white to-card-light dark:from-black dark:via-[#141414] dark:to-black px-6 py-8 shadow-card sm:px-10 md:flex md:items-center md:justify-between md:py-10">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
          Cost estimator
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl">
          Model your construction costs before you tender.
        </h2>
        <p className="mt-3 text-sm text-textSecondary md:max-w-lg">
          Use current Sri Lankan material and labour benchmarks to estimate project value, then share
          a structured brief with shortlisted contractors.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.75rem] text-textSecondary">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-gold/40 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-gold shadow-[0_0_8px_rgba(201,162,77,0.9)]" />
            Residential & commercial
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-borderColor-dark/60 px-3 py-1">
            BOQ-style breakdown
          </span>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3 md:mt-0 md:items-end">
        <button
          type="button"
          className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Start Cost Estimation
        </button>
        <p className="text-[0.75rem] text-textSecondary">
          No login required to run an initial estimate.
        </p>
      </div>
    </section>
  );
};

export default CostEstimatorCTA;

