import React from 'react';

const contractors = [
  {
    name: 'Summit Civil Engineering (Pvt) Ltd',
    years: '18+ years',
    location: 'Colombo | Island-wide',
    rating: 4.8,
    category: 'Grade CS2 · CIDA',
  },
  {
    name: 'Eastern Build & Design Consortium',
    years: '12+ years',
    location: 'Kandy | Central Province',
    rating: 4.6,
    category: 'Grade C1 · CIDA',
  },
  {
    name: 'Harbourline Construction Partners',
    years: '22+ years',
    location: 'Galle | Southern Province',
    rating: 4.9,
    category: 'Infrastructure & Marine',
  },
];

const getStarIcons = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i += 1) {
    stars.push('★');
  }
  if (halfStar) stars.push('☆');
  while (stars.length < 5) {
    stars.push('✩');
  }
  return stars;
};

const FeaturedContractors = () => {
  return (
    <section aria-labelledby="featured-contractors-heading">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
            Featured contractors
          </p>
          <h2
            id="featured-contractors-heading"
            className="mt-2 font-heading text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl"
          >
            Verified firms ready to mobilise.
          </h2>
        </div>
        <p className="max-w-md text-sm text-textSecondary">
          Filter by grade, sector, and region to shortlist partners who understand local regulations and delivery
          expectations.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {contractors.map((contractor) => (
          <article
            key={contractor.name}
            className="group flex flex-col rounded-2xl border border-borderColor-light dark:border-borderColor-dark/60 bg-card-light text-textPrimary-light dark:bg-card/80 dark:text-textPrimary p-5 shadow-subtle transition-all duration-200 ease-emphasized hover:-translate-y-1 hover:border-primary-gold hover:shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-gold/50 bg-black/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-gold shadow-[0_0_8px_rgba(201,162,77,0.9)]" />
                  Verified
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold leading-snug text-textPrimary">
                  {contractor.name}
                </h3>
                <p className="mt-1 text-[0.75rem] text-textSecondary-light dark:text-textSecondary">{contractor.category}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-borderColor-light dark:border-borderColor-dark/60 bg-white text-[0.7rem] text-textSecondary-light dark:bg-black/80 dark:text-textSecondary">
                <span>LOGO</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[0.8rem] text-textSecondary-light dark:text-textSecondary">
              <div>
                <p className="font-medium text-textPrimary">{contractor.years}</p>
                <p>{contractor.location}</p>
              </div>
              <div className="text-right">
                <div className="flex justify-end gap-0.5 text-[0.8rem] text-primary-gold">
                  {getStarIcons(contractor.rating).map((s, index) => (
                    <span key={`${contractor.name}-star-${index.toString()}`}>{s}</span>
                  ))}
                </div>
                <p className="mt-0.5 text-[0.7rem] text-textSecondary-light dark:text-textSecondary">
                  {contractor.rating.toFixed(1)} average rating
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-borderColor-light dark:border-borderColor-dark/50 pt-3 text-[0.75rem] text-textSecondary-light dark:text-textSecondary">
              <p>Capacity: medium to large-scale builds.</p>
              <button
                type="button"
                className="rounded-full border border-borderColor-dark/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-textPrimary transition-all duration-150 hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Profile
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedContractors;

