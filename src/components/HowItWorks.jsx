import React from 'react';

const steps = [
  {
    title: 'Post Your Project',
    description:
      'Define scope, timelines, and budget in a guided project brief structured for Sri Lankan construction workflows.',
  },
  {
    title: 'Receive Verified Bids',
    description:
      'Invite CIDA-registered contractors and engineers to submit comparable, itemised proposals in one dashboard.',
  },
  {
    title: 'Compare & Select',
    description:
      'Evaluate pricing, technical capability, and delivery history with consistent evaluation criteria and scoring.',
  },
  {
    title: 'Manage & Pay Securely',
    description:
      'Track progress, approvals, and stage payments against digitally signed contracts and site milestones.',
  },
];

const HowItWorks = () => {
  return (
    <section aria-labelledby="how-it-works-heading">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
            How the platform works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-2 font-heading text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl"
          >
            A governed workflow from tender to handover.
          </h2>
        </div>
        <p className="max-w-md text-sm text-textSecondary">
          Every step is designed to reduce risk, protect project owners, and give reputable contractors a transparent
          way to win work.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="group relative overflow-hidden rounded-2xl border border-borderColor-light/70 bg-gradient-to-b from-white via-card-light to-white dark:border-white/5 dark:from-white/5 dark:via-white/2 dark:to-black/60 p-[1px] backdrop-blur-xl"
          >
            <div className="relative flex h-full flex-col rounded-2xl bg-white/90 p-4 shadow-subtle transition-transform duration-200 ease-emphasized group-hover:-translate-y-1 dark:bg-black/60">
              {/* Glass highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-70" />
              <div className="relative flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-gold/60 bg-black/70 text-xs font-semibold text-primary-gold shadow-md">
                  {index + 1}
                </div>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-textSecondary">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="relative mt-4 font-heading text-sm font-semibold text-textPrimary">
                {step.title}
              </h3>
              <p className="relative mt-2 text-[0.78rem] leading-relaxed text-textSecondary">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

