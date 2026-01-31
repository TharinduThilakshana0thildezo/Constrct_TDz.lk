import React from 'react';

const services = [
  {
    title: 'Residential Construction',
    description:
      'Structured contracts for houses, apartments, and gated communities with clear defect liability coverage.',
  },
  {
    title: 'Commercial Projects',
    description:
      'Office, retail, hospitality, and mixed-use projects managed with milestone-based approvals and payments.',
  },
  {
    title: 'Renovations & Fit-outs',
    description:
      'Control variations, additional works, and change orders with a transparent digital paper trail.',
  },
  {
    title: 'Engineering & Design',
    description:
      'Engage architects, engineers, and consultants under well-defined scopes aligned to local regulations.',
  },
  {
    title: 'Material Supply',
    description:
      'Source cement, steel, finishes, and MEP equipment from vetted suppliers with traceable deliveries.',
  },
  {
    title: 'Infrastructure & Public Works',
    description:
      'Support for road, water, and utility contracts that require higher governance and auditability.',
  },
];

const Services = ({ onNavigate }) => {
  return (
    <section aria-labelledby="services-heading">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
            Services on the platform
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-heading text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl"
          >
            Built for every construction discipline.
          </h2>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <p className="max-w-md text-sm text-textSecondary">
            From individual home builders to national developers, the platform adapts to the complexity of your
            contracts and stakeholder mix.
          </p>
          <button
            onClick={() => onNavigate && onNavigate('find-projects')}
            aria-label="View all projects"
            className="group relative btn-animate inline-flex items-center gap-3 rounded-full border-2 border-primary-gold bg-gradient-to-br from-primary-gold via-yellow-400 to-primary-gold px-6 py-2.5 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(223,182,73,0.4),0_0_60px_rgba(223,182,73,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,182,73,0.6),0_0_80px_rgba(223,182,73,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 whitespace-nowrap"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-gold/30 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative inline-flex h-5 w-5 items-center justify-center text-black drop-shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.414A2 2 0 0018.586 6L14 1.414A2 2 0 0012.586 1H6zm8 2.414L18.586 8H14a1 1 0 01-1-1V4.414zM8 11h8v2H8v-2zm0 4h8v2H8v-2z" />
              </svg>
            </span>
            <span className="relative hidden sm:inline font-heading text-sm">View All Projects</span>
            <span className="relative sm:hidden font-heading text-sm">View All</span>
          </button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative rounded-2xl border border-borderColor-light dark:border-borderColor-dark/60 bg-card-light text-textPrimary-light dark:bg-card/80 dark:text-textPrimary p-5 shadow-subtle transition-all duration-200 ease-emphasized hover:-translate-y-1 hover:border-primary-gold hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 rounded-2xl border border-primary-gold/0 transition-colors duration-200 group-hover:border-primary-gold/40" />
            <div className="relative">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-borderColor-light dark:border-borderColor-dark/60 bg-white/80 text-sm text-primary-gold shadow-md dark:bg-black/70">
                ▢
              </div>
              <h3 className="font-heading text-sm font-semibold text-textPrimary-light dark:text-textPrimary">{service.title}</h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-textSecondary-light dark:text-textSecondary">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

