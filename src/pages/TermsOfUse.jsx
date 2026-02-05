import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { useTheme } from '../context/ThemeContext';

const TermsOfUse = ({ onNavigate }) => {
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">LEGAL</p>
              <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                Terms of Use
              </h1>
              <p className="mt-3 text-sm text-textSecondary-light dark:text-textSecondary">
                Summary terms describing how the Constrct TDz platform may be used. This content is for demonstration
                only and does not replace tailored legal advice.
              </p>
            </div>
          </div>
        </section>

        {/* Terms content (simple, non‑jurisdiction‑specific) */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16">
            <div className="prose prose-sm max-w-none text-textSecondary-light dark:text-textSecondary">
              <h2>1. Platform purpose</h2>
              <p>
                The platform connects project owners, contractors, consultants and suppliers and provides tools for
                discovery, communication, and basic documentation. It does not act as a party to any contract between
                users.
              </p>

              <h2>2. No professional advice</h2>
              <p>
                Information, templates and tools made available through the platform (including any AI‑assisted outputs)
                are for general guidance only and do not constitute legal, financial or technical advice. Users remain
                responsible for obtaining independent professional advice before entering into contracts or starting
                works.
              </p>

              <h2>3. User responsibilities</h2>
              <ul>
                <li>Provide accurate registration information and keep account details secure.</li>
                <li>Comply with applicable laws, regulations, and professional obligations.</li>
                <li>Ensure that any content uploaded (documents, images, messages) does not infringe third‑party rights.</li>
              </ul>

              <h2>4. Limitation of liability</h2>
              <p>
                To the extent permitted by law, the platform is provided “as is” without warranties of any kind. The
                operators are not liable for losses arising from contracts or projects formed between users, or from
                reliance on content shared on the platform.
              </p>

              <h2>5. Changes to these terms</h2>
              <p>
                The terms may be updated from time to time. Continued use of the platform after changes are published
                will constitute acceptance of the revised terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default TermsOfUse;

