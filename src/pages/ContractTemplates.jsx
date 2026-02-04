import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SAMPLE_TEMPLATES = [
  {
    id: 'owner-contractor-short',
    title: 'Owner–Contractor Short Form (Small Works)',
    description:
      'A concise agreement for small residential or light commercial works with basic scope, price, and timeline clauses.',
  },
  {
    id: 'owner-contractor-lump-sum',
    title: 'Owner–Contractor Lump Sum Agreement',
    description:
      'Standard form for fixed‑price construction projects, including payment milestones, variations, defects, and termination.',
  },
  {
    id: 'owner-contractor-labour-only',
    title: 'Labour‑Only Contract',
    description:
      'Agreement for when the owner supplies materials and the contractor provides labour, with clear responsibilities.',
  },
];

const ContractTemplates = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const exampleAiTemplate = `THIS OWNER–CONTRACTOR AGREEMENT ("Agreement") is made between:

Owner: [Owner full name], of [address] ("Owner")
Contractor: [Contractor legal name], of [address], CIDA Grade [grade] ("Contractor")

1. Scope of Works
The Contractor shall carry out the construction works at [site address] generally in accordance with the drawings,
specifications and instructions issued or approved by the Owner (the "Works").

2. Contract Sum and Payments
2.1 The total contract sum is LKR [amount] (the "Contract Sum").
2.2 Payments shall be made in stages against agreed milestones:
    • Advance payment: LKR [amount] on signing
    • Progress payments: [number] stage(s) against certified work done
    • Retention: [percentage]% retained until completion and defects liability period

3. Time for Completion
The Contractor shall commence the Works on [start date] and reach practical completion by [completion date],
subject to any agreed extensions of time.

4. Variations
Any change to the scope, materials, or drawings shall be confirmed in writing and valued as a variation to the
Contract Sum and/or completion date.

5. Quality, Safety and Compliance
The Contractor shall:
• Use materials of the agreed standard and quality
• Comply with applicable Sri Lankan laws, by‑laws, and safety regulations
• Keep the site orderly and reasonably safe for workers and neighbours

6. Defects Liability
The Contractor shall, at its own cost, make good any defects notified by the Owner within [months] months after
practical completion, fair wear and tear excepted.

7. Suspension and Termination
Either party may suspend or terminate this Agreement in the event of material breach by the other party, following
written notice and a reasonable remedy period.

8. Dispute Resolution
Any dispute shall first be discussed in good faith between the parties. If unresolved, the parties may refer the matter
to mediation or arbitration in Sri Lanka.

Signed by the parties:
Owner: ______________________    Date: __________
Contractor: __________________    Date: __________
`;

  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary transition-colors duration-300 ease-emphasized">
      <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />
      <main className="pt-20">
        {/* Hero */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <div className="mb-6">
              <button
                onClick={() => onNavigate && onNavigate('resources')}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black shadow-sm">
                  ←
                </span>
                <span className="ml-1">Back to Resources</span>
              </button>
            </div>

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
                CONTRACT TEMPLATES
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                Standard owner–contractor contracts, ready to adapt
              </h1>
              <p className="mt-3 text-sm text-textSecondary-light dark:text-textSecondary">
                Browse base templates for Sri Lankan construction projects and preview an AI‑generated owner–contractor
                agreement that you can adapt with your own details.
              </p>
            </div>
          </div>
        </section>

        {/* Template cards */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16 grid gap-8 md:grid-cols-3">
            {SAMPLE_TEMPLATES.map((tpl) => (
              <article
                key={tpl.id}
                className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/50 bg-card-light dark:bg-[#151515] p-6 hover:border-primary-gold hover:shadow-xl transition-all duration-200"
              >
                <h2 className="text-base font-semibold mb-2">{tpl.title}</h2>
                <p className="text-sm text-textSecondary-light dark:text-textSecondary mb-4">{tpl.description}</p>
                <button
                  type="button"
                  className="mt-auto inline-flex items-center gap-2 rounded-full border border-borderColor-dark/60 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-textPrimary-light dark:text-textPrimary hover:border-primary-gold hover:text-primary-gold transition-all"
                >
                  Download sample (PDF)
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* AI template preview */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16 grid gap-10 lg:grid-cols-[2fr,1fr] items-start">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-3">
                AI‑generated owner–contractor agreement (preview)
              </h2>
              <p className="text-sm text-textSecondary-light dark:text-textSecondary mb-4">
                This draft is generated from standard clauses and must be reviewed by a qualified professional before
                signing. Replace the placeholders in brackets with your actual project details.
              </p>
              <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/60 bg-black/90 text-[0.78rem] leading-relaxed text-textSecondary-light p-5 overflow-x-auto">
                <pre className="whitespace-pre-wrap font-mono text-xs">{exampleAiTemplate}</pre>
              </div>
            </div>
            <aside className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/60 bg-card-light dark:bg-[#151515] p-5 space-y-4">
              <h3 className="text-sm font-semibold">How an AI generator could work</h3>
              <p className="text-xs text-textSecondary-light dark:text-textSecondary">
                In a future version, you could let users answer a few questions (project type, budget, CIDA grade,
                payment milestones) and call an AI API to produce a bespoke draft using the clauses shown here.
              </p>
              <button
                type="button"
                className="w-full rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-card"
              >
                Generate with AI (demo)
              </button>
              <p className="text-[0.7rem] text-textSecondary-light dark:text-textSecondary">
                Important: platform should always show a disclaimer that templates are not legal advice and
                jurisdiction‑specific review is required.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContractTemplates;

