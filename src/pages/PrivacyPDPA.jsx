import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { useTheme } from '../context/ThemeContext';

const PrivacyPDPA = ({ onNavigate }) => {
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">PRIVACY</p>
              <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                Privacy &amp; PDPA notice
              </h1>
              <p className="mt-3 text-sm text-textSecondary-light dark:text-textSecondary">
                High‑level explanation of how personal data is collected, used and protected on the platform, with
                reference to Sri Lanka&apos;s Personal Data Protection Act (PDPA). This is demonstration content only.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy content */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16">
            <div className="prose prose-sm max-w-none text-textSecondary-light dark:text-textSecondary">
              <h2>1. Data we collect</h2>
              <p>
                When you use the platform we may collect basic identification and contact details (such as name,
                telephone number, email address), account credentials, and certain project and business information you
                choose to provide.
              </p>

              <h2>2. How your data is used</h2>
              <p>We generally process personal data in order to:</p>
              <ul>
                <li>Create and manage your account and profile.</li>
                <li>Connect project owners, contractors and consultants through the platform.</li>
                <li>Improve platform security, performance and user experience.</li>
                <li>Communicate important updates about your projects or account.</li>
              </ul>

              <h2>3. Basis under PDPA</h2>
              <p>
                Processing is typically based on your consent, the performance of a contract with you, or our legitimate
                interest in operating and improving the platform, always subject to applicable PDPA requirements.
              </p>

              <h2>4. Your rights</h2>
              <p>Subject to PDPA and other applicable laws, you may have rights to:</p>
              <ul>
                <li>Request access to and correction of your personal data held by us.</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>Raise concerns about how your data is handled.</li>
              </ul>

              <h2>5. Retention and security</h2>
              <p>
                Personal data is retained only for as long as reasonably necessary for the purposes described above or
                as required by law. Technical and organisational measures are used to reduce the risk of unauthorised
                access, alteration or loss.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPDPA;

