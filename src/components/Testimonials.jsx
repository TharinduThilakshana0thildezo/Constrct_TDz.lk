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

const Testimonials = ({ onNavigate }) => {
  return (
    <section aria-labelledby="testimonials-heading">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="flex flex-col w-full md:w-2/3 gap-2">
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
              Platform outcomes
            </p>
            <button
              onClick={() => onNavigate && onNavigate('resources')}
              aria-label="Explore Resources"
              className="btn-gold-neon group relative inline-flex items-center gap-3 rounded-full border border-primary-gold/80 bg-gradient-to-r from-[#F5DDA3] via-[#E0C06A] to-[#C79A3A] px-7 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-[0_12px_35px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="absolute inset-[1px] rounded-full bg-gradient-to-r from-white/35 via-transparent to-white/10 opacity-60 blur-[1px] transition-opacity duration-300 group-hover:opacity-90" />
              <span className="relative inline-flex h-5 w-5 items-center justify-center text-black drop-shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.414A2 2 0 0018.586 6L14 1.414A2 2 0 0012.586 1H6zm8 2.414L18.586 8H14a1 1 0 01-1-1V4.414zM8 11h8v2H8v-2zm0 4h8v2H8v-2z" />
                </svg>
              </span>
              <span className="relative hidden sm:inline font-heading text-sm">Explore Resources</span>
              <span className="relative sm:hidden font-heading text-sm">Resources</span>
            </button>
          </div>

          <h2
            id="testimonials-heading"
            className="font-heading text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl"
          >
            Designed for governance, not guesswork.
          </h2>
        </div>

        <div className="flex items-start gap-4">
          <p className="max-w-md text-sm text-textSecondary hidden md:block">
            The platform supports internal approvals, site-level coordination, and finance teams who need clear,
            auditable records.
          </p>
        </div>
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

