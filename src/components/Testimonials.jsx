import React from 'react';

const testimonials = [
  {
    quote:
      'We moved all contractor onboarding and contract approvals to the platform. It has made our audit conversations faster and far more transparent.',
    role: 'Head of Projects, Colombo-based property developer',
  },
  {
    quote:
      'As a contractor, having standardised documentation and milestone-based payments protects our teams while still giving clients full visibility.',
    role: 'Director, Tier 1 civil construction firm',
  },
  {
    quote:
      'Being able to see contract status, approvals, and variations in one view has materially reduced disputes with our supply chain.',
    role: 'Regional project manager, multi-site rollout',
  },
];

const Testimonials = () => {
  return (
    <section aria-labelledby="testimonials-heading">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
            Platform outcomes
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 font-heading text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl"
          >
            Designed for governance, not guesswork.
          </h2>
        </div>
        <p className="max-w-md text-sm text-textSecondary">
          The platform supports internal approvals, site-level coordination, and finance teams who need clear,
          auditable records.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.role}
            className="relative flex h-full flex-col justify-between rounded-2xl border border-borderColor-light dark:border-borderColor-dark/60 bg-card-light text-textPrimary-light dark:bg-card/80 dark:text-textPrimary p-5 shadow-subtle transition-all duration-200 hover:-translate-y-1 hover:border-primary-gold/80"
          >
            <div>
              <div className="mb-3 text-2xl text-primary-gold">“</div>
              <blockquote className="text-[0.85rem] leading-relaxed text-textSecondary-light dark:text-textSecondary">
                {item.quote}
              </blockquote>
            </div>
            <figcaption className="mt-4 border-t border-borderColor-light dark:border-borderColor-dark/50 pt-3 text-[0.75rem] text-textSecondary-light dark:text-textSecondary">
              {item.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

