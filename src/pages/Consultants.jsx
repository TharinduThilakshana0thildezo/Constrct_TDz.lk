import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { useTheme } from '../context/ThemeContext';

const Consultants = ({ onNavigate }) => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const benefits = [
    {
      title: 'Match with qualified projects',
      description:
        'Get visibility with project owners who specifically need architectural, structural, MEP, and QS consultancy.',
    },
    {
      title: 'Showcase your expertise',
      description:
        'Publish your portfolio, disciplines, registrations, and track record so the right projects can find you.',
    },
    {
      title: 'Governed digital workflow',
      description:
        'Work inside a transparent workflow with documented instructions, revisions, and approvals for each project.',
    },
  ];

  const steps = [
    'Create your consultant profile and add your disciplines, registrations, and regions.',
    'Upload key reference projects with drawings, photos, and outcomes.',
    'Receive invitations from project owners or respond to published opportunities.',
    'Collaborate with contractors and owners through the platform messaging and document flows.',
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
                FOR CONSULTANTS
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                Work with governed, high‑quality projects across Sri Lanka
              </h1>
              <p className="mt-3 text-sm text-textSecondary-light dark:text-textSecondary">
                Architects, engineers, quantity surveyors, and specialist advisors can use Constrct TDz to join
                properly documented projects, reduce admin friction, and keep every instruction traceable.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
              Why consultants use Constrct TDz
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-borderColor-light dark:border-borderColor-dark/40 bg-card-light dark:bg-[#151515] p-6 hover:border-primary-gold hover:shadow-xl transition-all duration-200"
                >
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-textSecondary-light dark:text-textSecondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works for consultants */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24 grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
                How it works for consultants
              </h2>
              <p className="text-sm text-textSecondary-light dark:text-textSecondary mb-4">
                The platform is designed so your instructions, drawings, clarifications, and approvals are all
                captured under a governed workflow, reducing disputes and rework.
              </p>
              <ol className="mt-4 space-y-3 text-sm list-decimal list-inside text-textSecondary-light dark:text-textSecondary">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/40 bg-gradient-to-br from-primary-gold/15 via-transparent to-primary-gold/10 p-6">
              <h3 className="text-base font-semibold mb-3">Typical consultant roles</h3>
              <ul className="space-y-2 text-sm text-textSecondary-light dark:text-textSecondary">
                <li>• Architectural concept and detail design</li>
                <li>• Structural and geotechnical engineering</li>
                <li>• MEP and building services design</li>
                <li>• Quantity surveying & cost management</li>
                <li>• Claims, contracts, and project controls advisory</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
              Ready to onboard as a consultant?
            </h2>
            <p className="text-sm text-textSecondary-light dark:text-textSecondary mb-6 max-w-xl mx-auto">
              Create your account, submit your registrations and references, and we&apos;ll guide you through
              verification so you can start receiving project invitations.
            </p>
            <button
              onClick={() => onNavigate && onNavigate('login')}
              className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Sign in / Register
            </button>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Consultants;

