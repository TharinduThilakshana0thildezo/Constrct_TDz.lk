import React from 'react';

const ResourceCard = ({ icon = '📄', title, description }) => {
  return (
    <article className="group rounded-2xl border border-borderColor-light dark:border-borderColor-dark/40 bg-card-light dark:bg-card/80 p-6 shadow-subtle transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary-gold/80">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-gold/10 text-primary-gold text-xl font-semibold">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
          <p className="mt-2 text-sm text-textSecondary">{description}</p>
        </div>
      </div>

      <div className="mt-5">
        <button
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-gold hover:underline"
          aria-label={`Explore ${title}`}
        >
          Explore →
        </button>
      </div>
    </article>
  );
};

export default ResourceCard;
