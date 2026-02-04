import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePreferences = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary transition-colors duration-300 ease-emphasized">
      <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />
      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <div className="mb-6">
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black shadow-sm">
                  ←
                </span>
                <span className="ml-1">Back to Home</span>
              </button>
            </div>

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">COOKIES</p>
              <h1 className="mt-4 text-3xl md:4xl font-heading font-semibold tracking-tight">
                Cookie preferences
              </h1>
              <p className="mt-3 text-sm text-textSecondary-light dark:text-textSecondary">
                See which types of cookies may be used on the platform and how you can manage your preferences in a
                full implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories explanation */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6">
                <h2 className="text-base md:text-lg font-semibold mb-2">Strictly necessary cookies</h2>
                <p className="text-sm text-textSecondary-light dark:text-textSecondary">
                  Required for core platform functions such as secure login, session management and basic security
                  protections. These cannot be switched off via preferences.
                </p>
              </div>
              <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6">
                <h2 className="text-base md:text-lg font-semibold mb-2">Analytics cookies</h2>
                <p className="text-sm text-textSecondary-light dark:text-textSecondary">
                  Help us understand how the platform is used so we can improve features and performance. In a live
                  deployment, you would be able to turn these on or off.
                </p>
              </div>
              <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6">
                <h2 className="text-base md:text-lg font-semibold mb-2">Functional / preference cookies</h2>
                <p className="text-sm text-textSecondary-light dark:text-textSecondary">
                  Remember settings such as language, theme and saved filters so that you do not need to reconfigure
                  them each visit.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6 space-y-4">
              <h2 className="text-sm font-semibold">Preference controls (demo)</h2>
              <p className="text-xs text-textSecondary-light dark:text-textSecondary">
                In a production build this panel would be connected to a real consent management system and would store
                your choices in a consent cookie or similar mechanism.
              </p>
              <div className="space-y-2 text-xs">
                <label className="flex items-center justify-between gap-3">
                  <span>Analytics cookies</span>
                  <span className="inline-flex h-5 w-10 items-center rounded-full bg-gray-500/40 px-1 text-[0.7rem]">
                    <span className="inline-block h-4 w-4 rounded-full bg-gray-300" />
                  </span>
                </label>
                <label className="flex items-center justify-between gap-3">
                  <span>Functional cookies</span>
                  <span className="inline-flex h-5 w-10 items-center rounded-full bg-gray-500/40 px-1 text-[0.7rem]">
                    <span className="inline-block h-4 w-4 rounded-full bg-gray-300" />
                  </span>
                </label>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-card"
              >
                Save preferences (demo)
              </button>
            </aside>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default CookiePreferences;

