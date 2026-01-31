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

const FeaturedContractors = ({ onNavigate }) => {
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
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <p className="max-w-md text-sm text-textSecondary">
            Filter by grade, sector, and region to shortlist partners who understand local regulations and delivery
            expectations.
          </p>
          <button
            onClick={() => onNavigate && onNavigate('find-contractors')}
            aria-label="View all contractors"
            className="group relative btn-animate inline-flex items-center gap-3 rounded-full border-2 border-primary-gold bg-gradient-to-br from-primary-gold via-yellow-400 to-primary-gold px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(223,182,73,0.4),0_0_60px_rgba(223,182,73,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,182,73,0.6),0_0_80px_rgba(223,182,73,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 whitespace-nowrap"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-gold/30 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative inline-flex h-5 w-5 items-center justify-center text-black drop-shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </span>
            <span className="relative hidden sm:inline font-heading text-sm">View All Contractors</span>
            <span className="relative sm:hidden font-heading text-sm">View All</span>
          </button>
        </div>
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

