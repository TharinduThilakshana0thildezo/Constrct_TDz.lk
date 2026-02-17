import React, { useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { useTheme } from '../context/ThemeContext';

const PAGE_CONTENT = {
  about: {
    slug: 'about',
    eyebrow: 'Platform & Trust',
    title: 'Built in Sri Lanka for the next decade of construction delivery',
    description:
      'ConsTrct TDz unifies procurement, contractor operations, and homeowner transparency in one secure platform. We pair local regulatory knowledge with global-grade product craftsmanship.',
    heroStats: [
      { label: 'Verified partners', value: '2,150+' },
      { label: 'Projects tracked', value: 'LKR 18.2B' },
      { label: 'Average NPS', value: '63' },
    ],
    highlight: {
      label: 'Origin thesis',
      title: 'We launched during the 2022 supply crunch to help owners see pricing, crews, and risks in real-time.',
      description: 'Today the platform orchestrates 90-day onboarding for developers, boutique contractors, and DFCC-backed residential projects.',
    },
    sections: [
      {
        id: 'story',
        eyebrow: 'Why we exist',
        title: 'Clarity across every site, stakeholder, and rupee',
        description: 'Our pods span Colombo, Jaffna, and Singapore to stay close to suppliers, regulatory boards, and diaspora investors.',
        items: [
          {
            title: 'Transparent procurement',
            description: 'Unified bid templates, contract walkthroughs, and side-by-side pricing to prevent scope creep.',
            points: ['applies to cost planners', 'used in 600+ negotiations'],
          },
          {
            title: 'On-site intelligence',
            description: 'Daily site logs, drone uploads, and QA punch-lists keep non-technical owners informed.',
            points: ['computer vision to flag variances', 'inspector network across 9 districts'],
          },
          {
            title: 'Sri Lanka-first network',
            description: 'We actively onboard small and medium contractors, training them on digital workflows.',
            points: ['CIDA grade mapping', 'legal handbooks in Sinhala & Tamil'],
          },
        ],
      },
      {
        id: 'leadership',
        eyebrow: 'Leadership pods',
        title: 'Cross-functional squads focused on outcomes',
        description: 'Each pod combines product, construction operations, and compliance to ship end-to-end workflows.',
        columns: 2,
        items: [
          {
            title: 'Delivery Control',
            description: 'Runs dashboards, alerts, and predictive scheduling.',
            points: ['Product + Data science', 'Lead: Maya Dissanayake'],
          },
          {
            title: 'Trust Lab',
            description: 'Handles verifications, background checks, and legal ops.',
            points: ['Ops + Legal', 'Lead: Haroon Selvan'],
          },
          {
            title: 'Contractor Success',
            description: 'Enables contractors with playbooks, field kits, and financing intros.',
            points: ['CX + Partnerships', 'Lead: Ruwani D.'],
          },
          {
            title: 'Owner Advisory',
            description: 'White-glove service for enterprise portfolios and diaspora clients.',
            points: ['Advisory + Finance', 'Lead: Aysha Anthony'],
          },
        ],
      },
    ],
    cta: {
      label: 'Meet the team',
      helper: 'Book a 20-minute discovery with our leadership pod',
      target: 'consultants',
    },
  },
  'how-it-works': {
    slug: 'how-it-works',
    eyebrow: 'Operating model',
    title: 'From project brief to handover without losing context',
    description:
      'Every workflow is codified so homeowners, contractors, and admins follow the same single source of truth.',
    heroStats: [
      { label: 'Matching accuracy', value: '92%' },
      { label: 'Projects launched', value: '480' },
      { label: 'Avg. onboarding', value: '72 hrs' },
    ],
    sections: [
      {
        id: 'homeowner-flow',
        eyebrow: 'Homeowner view',
        title: 'A guided workflow built for clarity',
        description: 'Owners get a concierge experience with proactive alerts and benchmark data.',
        items: [
          {
            title: '1. Scope & budget',
            description: 'Structured wizard captures specs, finishes, and payment preferences.',
            points: ['Auto cost benchmarking', 'Compliance reminders'],
          },
          {
            title: '2. Bid orchestration',
            description: 'We shortlist crews, calibrate bids, and surface trade-offs.',
            points: ['Anonymous bid reviews', 'Live Q&A threads'],
          },
          {
            title: '3. Delivery tracking',
            description: 'Milestones, inspections, and snag lists live in a single log.',
            points: ['AI risk scoring', 'Automated release approvals'],
          },
        ],
      },
      {
        id: 'contractor-flow',
        eyebrow: 'Contractor view',
        title: 'Operational rails for crews and estimators',
        description: 'We minimise admin overhead so contractors can focus on craftsmanship.',
        columns: 2,
        items: [
          {
            title: 'Smart intake',
            description: 'Structured leads routed by grade, specialty, and availability.',
            points: ['BOM helpers', 'Document checklist'],
          },
          {
            title: 'Execution cockpit',
            description: 'Crew assignments, RFIs, and progress photos in one command centre.',
            points: ['Offline-first mobile app', 'Site diaries synced nightly'],
          },
          {
            title: 'Billing & cash flow',
            description: 'Milestone invoicing with automated retention reminders.',
            points: ['Xero + QuickBooks export', 'Multi-currency support'],
          },
          {
            title: 'Reputation loop',
            description: 'Post-project scorecards and portfolio showcases drive future work.',
            points: ['Performance heatmaps', 'Client testimonials hub'],
          },
        ],
      },
    ],
    cta: {
      label: 'Launch a project',
      helper: 'Takes less than 5 minutes to brief a project',
      target: 'post-project',
    },
  },
  trust: {
    slug: 'trust',
    eyebrow: 'Trust architecture',
    title: 'Verification, audits, and accountability engineered in',
    description:
      'A multi-layer trust stack screens every participant, monitors behaviour, and escalates anomalies automatically.',
    heroStats: [
      { label: 'Documents validated', value: '11k+' },
      { label: 'Weekly field audits', value: '37' },
      { label: 'Trust NPS', value: '71' },
    ],
    sections: [
      {
        id: 'stack',
        eyebrow: 'Layers of protection',
        title: 'Verification stack built with regulators',
        description: 'We co-designed the process with CIDB advisors and independent QS firms.',
        items: [
          {
            title: 'Document Lab',
            description: 'Optical checks, manual reviewers, and expiry reminders.',
            points: ['Multi-language validation', 'Fraud heuristics'],
          },
          {
            title: 'Behavioural telemetry',
            description: 'Incident reports, rating deltas, and SLA breaches feed a risk score.',
            points: ['Automatic probation', 'Escalation workflows'],
          },
          {
            title: 'Field audits',
            description: 'Pop-up inspections with photographic evidence stored in vaults.',
            points: ['Geo stamped', 'Audit trails shared with owners'],
          },
        ],
      },
      {
        id: 'transparency',
        eyebrow: 'Transparency',
        title: 'Both sides see the same information simultaneously',
        description: 'Live dashboards keep contractors and owners aligned on scope, spend, and blockers.',
        columns: 2,
        items: [
          {
            title: 'Shared trackers',
            description: 'Milestones, RFIs, and approvals mirrored for all stakeholders.',
            points: ['Granular permissions', 'Audit exports'],
          },
          {
            title: 'Escalation desk',
            description: 'Ops specialists swoop in when a project strays from baseline.',
            points: ['Median response 14m', 'Chat + phone escalation'],
          },
        ],
      },
    ],
    cta: {
      label: 'Explore verification policy',
      helper: 'Download the trust manual and sample audit checklist',
      target: 'compliance',
    },
  },
  compliance: {
    slug: 'compliance',
    eyebrow: 'Compliance & Standards',
    title: 'Aligned with CIDB, ISO 9001, and PDPA requirements',
    description:
      'Our compliance framework documents every control — from data retention to safety toolbox talks.',
    heroStats: [
      { label: 'Regulatory playbooks', value: '14' },
      { label: 'Audit readiness', value: 'Continuous' },
      { label: 'PDPA incidents', value: '0' },
    ],
    sections: [
      {
        id: 'local',
        eyebrow: 'Local alignment',
        title: 'Everything mapped to Sri Lankan statutes and permits',
        description: 'We translate legal requirements into practical field checklists.',
        items: [
          {
            title: 'CIDA grading',
            description: 'Automatic reminders for renewals and grade upgrades.',
            points: ['Document locker', 'Reviewer notes'],
          },
          {
            title: 'Safety mandates',
            description: 'PPE audits, toolbox talk logs, and incident capture templates.',
            points: ['Embedded in mobile app', 'Exportable for regulators'],
          },
          {
            title: 'Environmental',
            description: 'Waste management trackers and low-carbon materials registry.',
            points: ['Sustainable procurement nudges', 'ESG annotations'],
          },
        ],
      },
      {
        id: 'governance',
        eyebrow: 'Governance',
        title: 'Controls you can point auditors to',
        description: 'Data governance meets enterprise procurement expectations.',
        columns: 2,
        items: [
          {
            title: 'Role-based access',
            description: 'Fine-grained permissions tied to project roles.',
            points: ['SAML + SCIM ready', 'Just-in-time access'],
          },
          {
            title: 'PDPA-by-design',
            description: 'Data minimisation, audit logs, and breach drills every quarter.',
            points: ['Encryption at rest & transit', 'Regional backups'],
          },
        ],
      },
    ],
    cta: {
      label: 'Review compliance checklist',
      helper: 'Updated quarterly with CIDB policy notes',
      target: 'procurement-checklist',
    },
  },
  'help-center': {
    slug: 'help-center',
    eyebrow: 'Help & Support',
    title: 'Self-serve knowledge backed by human experts',
    description:
      'Search playbooks, watch quick walkthroughs, or escalate to our Colombo operations desk.',
    heroStats: [
      { label: 'Articles', value: '187' },
      { label: 'Video guides', value: '42' },
      { label: 'Avg. CSAT', value: '4.8/5' },
    ],
    sections: [
      {
        id: 'channels',
        eyebrow: 'Support channels',
        title: 'Choose the lane that fits your urgency',
        description: 'Every request receives a ticket ID that is visible inside the dashboard.',
        columns: 3,
        items: [
          {
            title: 'Live chat',
            description: 'Embedded in dashboard. Humans join within 3 minutes.',
            points: ['Weekdays 7am — 10pm', 'Sinhala, Tamil, English'],
          },
          {
            title: 'Office hours',
            description: 'Book 25-min consults with QS, legal, or onboarding pods.',
            points: ['Calendar integrations', 'Recording shared afterwards'],
          },
          {
            title: 'Incident bridge',
            description: 'Priority hotline for safety or critical blockers.',
            points: ['Phone + WhatsApp', 'Ops lead on-call'],
          },
        ],
      },
      {
        id: 'resources',
        eyebrow: 'Resource hub',
        title: 'Shortcuts to the most referenced guides',
        description: 'Our knowledge base is updated weekly with policy notes and platform updates.',
        columns: 2,
        items: [
          {
            title: 'Owner playbook',
            description: 'Downloadable PDF with procurement checklist, payment tips, and dispute playbook.',
            points: ['36-page template', 'Includes sample tender'],
          },
          {
            title: 'Contractor activation kit',
            description: 'Step-by-step guide to publishing offers, syncing calendars, and showcasing work.',
            points: ['Mobile-first tips', 'Marketing bundle inside'],
          },
        ],
      },
    ],
    cta: {
      label: 'Visit Support Centre',
      helper: 'Full knowledge base, release notes, and webinars',
      target: 'support-centre',
    },
  },
  contact: {
    slug: 'contact',
    eyebrow: 'Contact us',
    title: 'Direct lines into every ConsTrct TDz pod',
    description:
      'Reach us via the method that suits you best. We log every interaction so follow-ups never fall through the cracks.',
    heroStats: [
      { label: 'Response SLA', value: '< 4 hrs' },
      { label: 'Emergency bridge', value: '24/7' },
      { label: 'Locations', value: '3 hubs' },
    ],
    sections: [
      {
        id: 'channels',
        eyebrow: 'Primary channels',
        title: 'Colombo HQ, Northern pod, and Singapore partner office',
        description: 'All numbers route through the ops desk for live monitoring.',
        columns: 3,
        items: [
          {
            title: 'Colombo HQ',
            description: 'Level 10, Parkland, Colombo 02',
            points: ['+94 11 457 8800', 'hq@constrct.io'],
          },
          {
            title: 'Northern pod',
            description: 'Old Park Rd, Jaffna',
            points: ['+94 21 620 4411', 'north@constrct.io'],
          },
          {
            title: 'Singapore desk',
            description: '79 Anson Rd, #20-01',
            points: ['+65 3159 0981', 'sea@constrct.io'],
          },
        ],
      },
      {
        id: 'escalations',
        eyebrow: 'Escalations',
        title: 'For urgent blockers',
        description: 'Critical site or payment incidents route to the director-on-call.',
        columns: 2,
        items: [
          {
            title: 'Safety hotline',
            description: 'Immediate assistance for on-site incidents.',
            points: ['+94 76 800 9119', 'ops@constrct.io'],
          },
          {
            title: 'Finance desk',
            description: 'Milestone release or invoice reconciliation support.',
            points: ['+94 77 445 9911', 'finance@constrct.io'],
          },
        ],
      },
    ],
    cta: {
      label: 'Schedule a call',
      helper: 'Pick a slot with our advisory team',
      target: 'consultants',
    },
  },
  'cost-guide': {
    slug: 'cost-guide',
    eyebrow: 'Construction cost guide',
    title: 'Benchmark budgets and material inflation in one glance',
    description:
      'Updated monthly with supplier feeds, BOQ samples, and regional cost deltas.',
    heroStats: [
      { label: 'District coverage', value: '25' },
      { label: 'Materials tracked', value: '72' },
      { label: 'Average variance', value: '≤ 4.1%' },
    ],
    sections: [
      {
        id: 'benchmarks',
        eyebrow: 'Benchmarks',
        title: 'Cost-per-square-foot signals by build type',
        description: 'Use these as a directional input before final QS validation.',
        items: [
          {
            title: 'Modern Residential',
            description: 'LKR 17,500 — 24,000 / sq.ft depending on finishes.',
            points: ['Includes MEP & joinery allowances', 'Excludes land prep'],
          },
          {
            title: 'Commercial Interiors',
            description: 'LKR 9,800 — 14,200 / sq.ft with HVAC and acoustic upgrades.',
            points: ['Based on 2024 tender data', 'Includes loose furniture'],
          },
          {
            title: 'Hospitality',
            description: 'LKR 26,000 — 32,000 / sq.ft for boutique hotels and villas.',
            points: ['Premium finishes', 'FF&E bundles available'],
          },
        ],
      },
      {
        id: 'materials',
        eyebrow: 'Materials',
        title: 'Live-tracked commodity movements',
        description: 'We integrate with tier-one suppliers to surface average landed costs.',
        columns: 2,
        items: [
          {
            title: 'Structural bundle',
            description: 'Cement, steel, sand indices updated twice weekly.',
            points: ['Trend charts in dashboard', 'Alert when +/-5%'],
          },
          {
            title: 'Finishes bundle',
            description: 'Tiles, fixtures, glazing sourced from Colombo + Chennai.',
            points: ['FX hedging tips', 'Sustainable options flagged'],
          },
        ],
      },
    ],
    cta: {
      label: 'Open cost tools',
      helper: 'Jump into live estimators and calculators',
      target: 'cost-tools',
    },
  },
  insights: {
    slug: 'insights',
    eyebrow: 'Blog & insights',
    title: 'Narratives, playbooks, and release notes straight from the field',
    description:
      'We publish short, tactical reads featuring contractors, owners, and policy shapers.',
    heroStats: [
      { label: 'Editorial cadence', value: 'Weekly' },
      { label: 'Guest voices', value: '35+' },
      { label: 'Newsletter reach', value: '18k' },
    ],
    sections: [
      {
        id: 'series',
        eyebrow: 'Series',
        title: 'Choose a series to follow',
        description: 'Each series bundles narrative articles, data viz, and checklists.',
        items: [
          {
            title: 'Field Notes',
            description: 'Dispatches from crews piloting new materials or delivery models.',
            points: ['Photos + BOMs', 'Ideal for contractors'],
          },
          {
            title: 'Owner Lab',
            description: 'Budgeting, financing, and governance advice for owners.',
            points: ['Decision frameworks', 'Spreadsheet downloads'],
          },
          {
            title: 'Policy Radar',
            description: 'Breakdowns of regulation updates and how to comply.',
            points: ['PDPA, CIDB, BOI', 'Interviews with regulators'],
          },
        ],
      },
      {
        id: 'formats',
        eyebrow: 'Formats',
        title: 'Pick how you want to consume insights',
        description: 'We adapt every story into multiple formats.',
        columns: 2,
        items: [
          {
            title: 'Interactive reports',
            description: 'Dive through charts segmented by location, build type, or material.',
            points: ['Download CSV', 'Shareable links'],
          },
          {
            title: 'Audio briefs',
            description: '5-minute voice notes recorded by our analysts.',
            points: ['Sinhala + English', 'Perfect for site commutes'],
          },
        ],
      },
    ],
    cta: {
      label: 'Subscribe to insights',
      helper: 'Receive the Sunday field intelligence email',
      href: 'mailto:hello@constrct.io?subject=Subscribe%20me%20to%20insights',
    },
  },
  reports: {
    slug: 'reports',
    eyebrow: 'Reports',
    title: 'Quarterly intelligence packs for boards and lenders',
    description:
      'Deep dives on lending risk, contractor capacity, and commodities. Designed for decision makers who need defensible data.',
    heroStats: [
      { label: 'Next release', value: 'Q3 2024' },
      { label: 'Beta clients', value: '11' },
      { label: 'Data sources', value: '27' },
    ],
    highlight: {
      label: 'Coming soon',
      title: 'Q3 Construction Pulse',
      description: 'Focus on coastal hospitality builds, prefab adoption, and financing incentives.',
    },
    sections: [
      {
        id: 'coverage',
        eyebrow: 'Coverage',
        title: 'What the reports include',
        description: 'Each drop bundles quantitative dashboards with commentary.',
        items: [
          {
            title: 'Capital tracker',
            description: 'Loan approvals, drawdowns, and repayment risks.',
            points: ['By bank + region', 'Early-warning indicators'],
          },
          {
            title: 'Capacity heatmap',
            description: 'Crew + material availability so schedulers can plan ahead.',
            points: ['Contractor supply index', 'Material constraints'],
          },
          {
            title: 'Policy watch',
            description: 'What regulators are prioritising next quarter.',
            points: ['Upcoming tenders', 'Compliance deadlines'],
          },
        ],
      },
      {
        id: 'access',
        eyebrow: 'Access',
        title: 'How to join the closed beta',
        description: 'We onboard a handful of strategic partners each quarter.',
        columns: 2,
        items: [
          {
            title: 'Enterprise cohort',
            description: 'Developers and lenders managing LKR 3B+ in annual spend.',
            points: ['Custom dashboards', 'Executive briefing'],
          },
          {
            title: 'Investor cohort',
            description: 'Diaspora investors and funds exploring Sri Lankan opportunities.',
            points: ['Scenario planning', 'Dedicated analyst hours'],
          },
        ],
      },
    ],
    cta: {
      label: 'Join beta waitlist',
      helper: 'We will respond within 24 hours',
      href: 'mailto:intel@constrct.io?subject=Reports%20beta%20request',
    },
  },
};

const gridClassMap = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

const InformationalPage = ({ onNavigate, pageKey = 'about' }) => {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pageKey]);

  const content = useMemo(() => PAGE_CONTENT[pageKey] || PAGE_CONTENT.about, [pageKey]);

  const handleCta = () => {
    if (!content.cta) return;
    if (content.cta.target && onNavigate) {
      onNavigate(content.cta.target);
      return;
    }
    if (content.cta.href) {
      window.open(content.cta.href, '_blank');
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-background-light dark:bg-background text-textPrimary-light dark:text-textPrimary">
        <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />

        <main className="pt-20">
          <section className="border-b border-borderColor-light dark:border-borderColor-dark/40 relative overflow-hidden">
            <AnimatedHeroBackground isDark={theme === 'dark'} />
            <div className="container max-w-6xl py-12 md:py-20 relative z-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('home')}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-black shadow-card"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black">←</span>
                  Back home
                </button>
                <nav className="text-xs font-semibold uppercase tracking-[0.3em] text-textSecondary text-right">
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('home')}
                    className="hover:text-primary-gold"
                  >
                    Home
                  </button>
                  <span className="mx-2">/</span>
                  <span className="text-textPrimary">{content.slug.replace(/-/g, ' ')}</span>
                </nav>
              </div>

              <div className="mt-8 max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-gold">{content.eyebrow}</p>
                <h1 className="mt-4 text-3xl md:text-5xl font-heading font-semibold tracking-tight">{content.title}</h1>
                <p className="mt-4 text-base text-textSecondary">{content.description}</p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {content.heroStats?.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-borderColor-light/80 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-4 shadow-card backdrop-blur">
                      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary-gold/70">{stat.label}</p>
                      <p className="mt-3 text-2xl font-heading text-primary-gold">{stat.value}</p>
                    </div>
                  ))}
                </div>
                {content.highlight && (
                  <div className="mt-8 rounded-3xl border border-dashed border-primary-gold/50 bg-primary-gold/5 px-6 py-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary-gold">{content.highlight.label}</p>
                    <p className="mt-2 text-xl font-heading">{content.highlight.title}</p>
                    <p className="mt-2 text-sm text-textSecondary">{content.highlight.description}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {content.sections?.map((section) => {
            const gridClass = gridClassMap[section.columns || 3] || gridClassMap[3];
            return (
              <section key={section.id} className="border-b border-borderColor-light dark:border-borderColor-dark/40">
                <div className="container max-w-6xl py-12 md:py-16">
                  <div className="max-w-3xl">
                    {section.eyebrow && (
                      <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/80">{section.eyebrow}</p>
                    )}
                    <h2 className="mt-2 text-2xl font-heading">{section.title}</h2>
                    <p className="mt-3 text-sm text-textSecondary">{section.description}</p>
                  </div>
                  <div className={`mt-8 grid grid-cols-1 gap-6 ${gridClass}`}>
                    {section.items?.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-borderColor-light/60 dark:border-white/10 bg-white/70 dark:bg-card/30 p-5 shadow-card backdrop-blur"
                      >
                        {item.subtitle && (
                          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-textSecondary">{item.subtitle}</p>
                        )}
                        <h3 className="text-lg font-semibold text-textPrimary">{item.title}</h3>
                        <p className="mt-2 text-sm text-textSecondary">{item.description}</p>
                        {item.points && (
                          <ul className="mt-3 space-y-1 text-sm text-textSecondary">
                            {item.points.map((point) => (
                              <li key={point} className="flex items-start gap-2">
                                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-primary-gold" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          {content.cta && (
            <section className="py-12 md:py-16">
              <div className="container max-w-5xl">
                <div className="rounded-3xl border border-borderColor-light dark:border-white/10 bg-gradient-to-r from-primary-gold/10 via-transparent to-secondary/10 px-6 py-10 md:px-10 md:py-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary-gold">{content.cta.helper}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleCta}
                      className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-card"
                    >
                      {content.cta.label}
                    </button>
                    {content.cta.note && (
                      <p className="text-sm text-textSecondary">{content.cta.note}</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default InformationalPage;
