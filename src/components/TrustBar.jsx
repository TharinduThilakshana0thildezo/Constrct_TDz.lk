import React from 'react';

const items = [
  {
    title: 'CIDA Registered Contractors',
    description: 'Work only with firms vetted against national construction standards.',
  },
  {
    title: 'Verified Engineers',
    description: 'Civil, structural, and MEP engineers with validated credentials.',
  },
  {
    title: 'Secure Payments',
    description: 'Stage-based disbursements linked to verified milestones.',
  },
  {
    title: 'Legal Contract System',
    description: 'Structured agreements aligned with Sri Lankan contract law.',
  },
];

const TrustBar = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xs">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-gold">
          Built for compliance
        </p>
        <p className="mt-1 text-xs text-textSecondary">
          Every project moves through a controlled, auditable workflow so you can sign with confidence.
        </p>
      </div>
      <div className="grid flex-1 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="group flex items-start gap-2 rounded-xl border border-borderColor-light dark:border-borderColor-dark/60 bg-card-light text-textSecondary-light dark:bg-card/70 dark:text-textSecondary px-3 py-3 text-xs shadow-subtle backdrop-blur-sm transition-all duration-200 hover:border-primary-gold/80 hover:bg-white dark:hover:bg-card md:px-3.5"
          >
            <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-primary-gold/40 bg-black/70 text-[0.7rem] text-primary-gold shadow-md">
              ★
            </div>
            <div>
              <p className="font-medium text-textPrimary group-hover:text-primary-gold">{item.title}</p>
              <p className="mt-1 text-[0.7rem] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;

