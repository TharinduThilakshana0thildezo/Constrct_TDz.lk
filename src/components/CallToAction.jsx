import React from 'react';

const CallToAction = () => {
  return (
    <section className="rounded-3xl border border-borderColor-light dark:border-borderColor-dark/70 bg-card-light text-textPrimary-light dark:bg-card/80 dark:text-textPrimary px-6 py-10 text-center shadow-card sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
        Final call to action
      </p>
      <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl">
        Ready to build with confidence?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-textSecondary">
        Create a compliant project brief, invite verified contractors, and manage the full contract lifecycle in a
        single, secure workspace.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Post a Project
        </button>
        <button
          type="button"
          className="rounded-full border border-borderColor-dark/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-textPrimary transition-all duration-200 hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Register as Contractor
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

