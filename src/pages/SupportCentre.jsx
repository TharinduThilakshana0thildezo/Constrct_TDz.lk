import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { useTheme } from '../context/ThemeContext';

const SupportCentre = ({ onNavigate }) => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary transition-colors duration-300 ease-emphasized">
      <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />
      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40 relative overflow-hidden">
          <AnimatedHeroBackground isDark={theme === 'dark'} />
          <div className="container max-w-7xl py-16 md:py-24 relative z-10">
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
                SUPPORT CENTRE
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                Help, FAQs, and contact options
              </h1>
              <p className="mt-3 text-sm text-textSecondary-light dark:text-textSecondary">
                Find quick answers about using Constrct TDz as a project owner, contractor, or consultant. If you
                still need help, you can reach our team using the contact options below.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ + contact blocks */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6 space-y-4">
              <h2 className="text-base md:text-lg font-semibold mb-2">Common questions</h2>
              <details className="group rounded-lg border border-borderColor-light/60 dark:border-borderColor-dark/60 bg-background-light/40 dark:bg-black/60 px-4 py-3">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-textPrimary-light dark:text-textPrimary">
                  How do I post a project?
                  <span className="ml-2 text-xs text-textSecondary group-open:hidden">+</span>
                  <span className="ml-2 text-xs text-textSecondary hidden group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-xs text-textSecondary-light dark:text-textSecondary">
                  Create an account, go to your dashboard and use the “Post a Project” flow. You will be guided to add
                  scope, budget, timeline and documents before inviting contractors.
                </p>
              </details>
              <details className="group rounded-lg border border-borderColor-light/60 dark:border-borderColor-dark/60 bg-background-light/40 dark:bg-black/60 px-4 py-3">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-textPrimary-light dark:text-textPrimary">
                  How are contractors verified?
                  <span className="ml-2 text-xs text-textSecondary group-open:hidden">+</span>
                  <span className="ml-2 text-xs text-textSecondary hidden group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-xs text-textSecondary-light dark:text-textSecondary">
                  Contractors provide CIDA registration, trade references and key project history which are reviewed
                  by the platform team before they are shown as “verified”.
                </p>
              </details>
              <details className="group rounded-lg border border-borderColor-light/60 dark:border-borderColor-dark/60 bg-background-light/40 dark:bg-black/60 px-4 py-3">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-textPrimary-light dark:text-textPrimary">
                  Where can I get help with contracts and disputes?
                  <span className="ml-2 text-xs text-textSecondary group-open:hidden">+</span>
                  <span className="ml-2 text-xs text-textSecondary hidden group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-xs text-textSecondary-light dark:text-textSecondary">
                  The platform provides templates and guidance but not legal advice. For disputes or contract
                  interpretation, please consult a qualified professional or relevant authority.
                </p>
              </details>
            </div>

            <aside className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6 space-y-4">
              <h2 className="text-sm font-semibold">Contact support</h2>
              <p className="text-xs text-textSecondary-light dark:text-textSecondary">
                For account, verification or platform issues you can reach us at:
              </p>
              <ul className="text-xs text-textSecondary-light dark:text-textSecondary space-y-1">
                <li>Email: <span className="text-primary-gold">support@construct.lk</span></li>
                <li>Weekdays: 9.00am – 5.00pm (Sri Lanka time)</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default SupportCentre;

