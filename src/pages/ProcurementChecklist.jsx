import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { useTheme } from '../context/ThemeContext';

const ProcurementChecklist = ({ onNavigate }) => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const steps = [
    {
      title: 'Define the project clearly',
      items: [
        'Basic description (new build / renovation / extension)',
        'Location and approximate area (sq.ft / m²)',
        'Budget range and desired completion date',
        'Any authority approvals already obtained or required',
      ],
    },
    {
      title: 'Prepare documents for pricing',
      items: [
        'Drawings or sketches (architectural, structural if available)',
        'Specification notes (finishes, materials, standards)',
        'Scope split (labour only vs labour + materials)',
        'Photos or reference examples if design is not final',
      ],
    },
    {
      title: 'Select and invite contractors',
      items: [
        'Shortlist contractors with suitable CIDA grade and experience',
        'Send the same information pack to all invited parties',
        'Set a clear deadline for questions and submission of quotations',
      ],
    },
    {
      title: 'Compare and evaluate quotations',
      items: [
        'Check inclusions / exclusions and provisional sums',
        'Confirm payment terms, advance, retention and defect liability',
        'Review programme, manpower and site supervision approach',
      ],
    },
  ];

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
                PROCUREMENT CHECKLIST
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                Step‑by‑step checklist before you award a contractor
              </h1>
              <p className="mt-3 text-sm text-textSecondary-light dark:text-textSecondary">
                Use this simple checklist to make sure you have prepared the right information, invited suitable
                contractors, and compared offers fairly before signing a contract.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist sections */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16 space-y-8">
            {steps.map((section, index) => (
              <div
                key={section.title}
                className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary text-black text-sm font-semibold">
                    {index + 1}
                  </div>
                  <h2 className="text-base md:text-lg font-semibold">{section.title}</h2>
                </div>
                <ul className="list-disc list-inside text-sm text-textSecondary-light dark:text-textSecondary space-y-1 pl-1">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProcurementChecklist;

