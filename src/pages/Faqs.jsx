import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import FAQChatbot, { FAQ_KNOWLEDGE_BASE } from '../components/FAQChatbot';
import { useTheme } from '../context/ThemeContext';

const topicClusters = [
  {
    id: 'trust-safety',
    title: 'Trust & Safety',
    summary: 'Verification tiers, insurance, safety briefings and audit logs.',
    stats: '98.4% issues resolved without arbitration',
  },
  {
    id: 'payments',
    title: 'Payments & Contracts',
    summary: 'Milestone wallets, dispute reviews, retention and invoicing.',
    stats: 'LKR 2.3B processed through secured milestones',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    summary: 'Project handovers, BIM document control and change orders.',
    stats: 'Average response time under 6 minutes',
  },
];

const liveMetrics = [
  { label: 'Avg. first response', value: '2m 41s' },
  { label: 'Knowledge articles', value: '187' },
  { label: 'Automation coverage', value: '72%' },
];

const Faqs = ({ onNavigate }) => {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const featuredFaqs = FAQ_KNOWLEDGE_BASE.slice(0, 3);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-background-light dark:bg-background text-textPrimary-light dark:text-textPrimary">
        <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />

        <main className="pt-20">
          <section className="border-b border-borderColor-light dark:border-borderColor-dark/40 relative overflow-hidden">
            <AnimatedHeroBackground isDark={theme === 'dark'} />
            <div className="container max-w-6xl py-12 md:py-20 relative z-10">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-gold">Help Center</p>
                <h1 className="mt-4 text-3xl md:text-5xl font-heading font-semibold tracking-tight">
                  Get fast answers from Ava or our support pod
                </h1>
                <p className="mt-4 text-base text-textSecondary">
                  Explore curated FAQs, live operational metrics, and our conversational assistant trained on the same knowledge base used by the support team.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                  {liveMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-primary-gold/40 bg-white/5 px-6 py-4 text-left shadow-card dark:bg-white/5">
                      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary-gold/80">{metric.label}</p>
                      <p className="mt-2 text-2xl font-heading text-primary-gold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
            <div className="container max-w-6xl py-12 md:py-16">
              <div className="grid gap-6 md:grid-cols-2">
                {topicClusters.map((cluster) => (
                  <div key={cluster.id} className="rounded-3xl border border-borderColor-light/70 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-card backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/70">{cluster.title}</p>
                    <h3 className="mt-2 text-xl font-heading">{cluster.summary}</h3>
                    <p className="mt-3 text-sm text-textSecondary">{cluster.stats}</p>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('support-centre')}
                      className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-gold underline-offset-4 hover:underline"
                    >
                      View full article set
                    </button>
                  </div>
                ))}
                <div className="rounded-3xl border border-dashed border-primary-gold/40 p-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/70">Featured FAQs</p>
                  {featuredFaqs.map((faq) => (
                    <div key={faq.id} className="mt-4 rounded-2xl bg-white/70 dark:bg-white/5 p-4 text-left">
                      <p className="text-sm font-semibold">{faq.question}</p>
                      <p className="mt-2 text-sm text-textSecondary">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
            <div className="container max-w-5xl py-12 md:py-16">
              <FAQChatbot />
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container max-w-5xl">
              <div className="rounded-3xl border border-borderColor-light dark:border-white/10 bg-gradient-to-r from-primary-gold/10 via-transparent to-secondary/10 px-6 py-10 md:px-10 md:py-12">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-gold">Need a human?</p>
                <h2 className="mt-2 text-2xl font-heading">Escalate complex issues directly to a senior operations specialist</h2>
                <p className="mt-3 text-sm text-textSecondary">
                  Email ops@constrct.io or schedule a live diagnostics session. We triage urgent site blockers in under 10 minutes.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => window.open('mailto:ops@constrct.io', '_blank')}
                    className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-card"
                  >
                    Email Ops Team
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('support-centre')}
                    className="rounded-full border border-primary-gold/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-gold"
                  >
                    Visit Support Centre
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default Faqs;
