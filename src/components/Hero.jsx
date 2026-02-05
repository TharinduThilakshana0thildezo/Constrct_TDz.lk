import React from 'react';

const HERO_IMAGE_URL =
  'https://www.buid.ac.ae/wp-content/uploads/2023/08/construction-mana.jpg';

/**
 * Hero
 * - Full-bleed construction image behind content
 * - Two-column layout with stats overlay
 */
const Hero = ({ onNavigate }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden -mx-[50vw] left-1/2 right-1/2 -mt-[6rem] -mb-[1px] m-0 p-0">
      {/* Background image behind content */}
      <img
        src={HERO_IMAGE_URL}
        alt="Sri Lankan construction skyline with bridge and city"
        className="hero-pan absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/75 to-black/50 dark:from-black/88 dark:via-black/70 dark:to-black/40" />

      {/* Foreground content */}
      <div className="relative grid gap-10 px-6 pt-0 pb-16 sm:px-10 md:grid-cols-2 md:items-center lg:px-12 xl:px-0 container max-w-7xl mx-auto h-full m-0">
        {/* Left column */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
            NATIONAL CONSTRUCTION CONTRACT PLATFORM · SRI LANKA
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl lg:text-5xl">
            Sri Lanka&apos;s Trusted
            <span className="block text-primary-gold">Construction Contract Platform</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-textSecondary sm:text-base">
            Centralise every construction contract in one secure, compliant platform. Connect with vetted
            Sri Lankan contractors, engineers, and suppliers while maintaining transparent pricing and
            enforceable agreements from tender to final payment.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Post Your Project
            </button>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('find-contractors')}
              className="rounded-full border border-borderColor-dark/70 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-textPrimary transition-all duration-200 hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Browse Contractors
            </button>
          </div>

          {/* Secondary info */}
          <div className="mt-8 grid max-w-md gap-5 text-xs text-textSecondary sm:grid-cols-2">
            <div className="space-y-1">
              <p className="font-medium text-textPrimary">Built for regulated construction work</p>
              <p>
                Designed around CIDA registration, BOQs, and local procurement practices to reduce
                disputes and cost overruns.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-textPrimary">API-ready from day one</p>
              <p>
                Integrate with your ERP, accounting, and document management systems when you are ready
                to automate.
              </p>
            </div>
          </div>
        </div>

        {/* Right column – visual + stats */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-borderColor-dark/70 bg-black/75 p-4 shadow-subtle backdrop-blur-md">
            {/* Blueprint-like grid */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1f2937_1px,transparent_0)] bg-[length:22px_22px]" />
            </div>

            <div className="relative flex h-64 flex-col justify-between md:h-72">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-textSecondary">
                    PROJECT CONTROL PANEL
                  </p>
                  <p className="mt-1 font-heading text-lg text-textPrimary">
                    National project visibility, contract by contract.
                  </p>
                </div>
                <div className="rounded-lg border border-primary-gold/40 bg-black/80 px-3 py-2 text-right shadow-subtle">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-textSecondary">LIVE</p>
                  <p className="text-sm font-semibold text-primary-gold">LKR 4.2B</p>
                  <p className="text-[0.7rem] text-textSecondary">Active contract value</p>
                </div>
              </div>

              {/* Project stats */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-borderColor-dark/70 bg-black/70 p-3 backdrop-blur-md">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-textSecondary">
                    Verified Contractors
                  </p>
                  <p className="mt-1 text-xl font-semibold text-textPrimary">1,200+</p>
                  <p className="mt-1 text-[0.72rem] text-textSecondary">
                    CIDA-registered firms across residential, commercial, and infrastructure.
                  </p>
                </div>
                <div className="rounded-xl border border-borderColor-dark/70 bg-black/70 p-3 backdrop-blur-md">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-textSecondary">
                    On-time Delivery
                  </p>
                  <p className="mt-1 text-xl font-semibold text-textPrimary">92%</p>
                  <p className="mt-1 text-[0.72rem] text-textSecondary">
                    Projects tracked through milestones, approvals, and secure payments.
                  </p>
                </div>
              </div>

              {/* Bottom timeline */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-[0.68rem] text-textSecondary">
                  <span>Tender Issued</span>
                  <span>Evaluation</span>
                  <span>Awarded</span>
                  <span>Completion</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-black/70">
                  <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary shadow-[0_0_20px_rgba(201,162,77,0.75)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-bottom button */}
      <button
        type="button"
        onClick={handleScrollToBottom}
        aria-label="Scroll to bottom of page"
        className="group absolute right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-primary-gold/70 hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
      >
        <span className="text-lg leading-none group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
      </button>
    </div>
  );
};

export default Hero;

