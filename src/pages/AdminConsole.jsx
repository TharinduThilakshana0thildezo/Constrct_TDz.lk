import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { homeownerProjects } from '../data/mockData';
import { useAppState } from '../context/AppStateContext';
import { makeId } from '../utils/id';

const AdminConsole = ({ onNavigate }) => {
  const { state, pushToast } = useAppState();

  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary">
      <Navbar onNavigate={onNavigate} hideHomeNav={false} hideNavItems />
      <main id="main-content" className="container max-w-6xl space-y-10 pt-28 pb-16">
        <header className="rounded-3xl border border-borderColor-dark/30 bg-black/80 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/70">Admin system</p>
          <h1 className="text-3xl font-heading font-semibold">Moderation cockpit</h1>
          <p className="text-sm text-white/70">Signed in as {state.role}</p>
        </header>

        <section className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Flagged bids</h2>
            <button type="button" className="text-xs uppercase tracking-[0.3em] text-primary-gold">
              View logs
            </button>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {homeownerProjects[0].bids.map((bid) => (
              <article key={bid.id} className="rounded-2xl border border-borderColor-dark/20 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{bid.contractor}</p>
                    <p className="text-xs text-textSecondary">MYR {bid.amount.toLocaleString()}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-textSecondary">{bid.status}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-borderColor-dark/30 px-3 py-2 text-sm"
                    onClick={() => pushToast({ id: makeId(), type: 'admin', message: 'Bid approved' })}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-red-500/40 px-3 py-2 text-sm text-red-400"
                    onClick={() => pushToast({ id: makeId(), type: 'admin', message: 'Bid escalated' })}
                  >
                    Escalate
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">System health</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-primary-gold">Live</span>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[{ label: 'Disputes', value: 2 }, { label: 'Verifications pending', value: 5 }, { label: 'SLA breaches', value: 0 }].map((card) => (
              <div key={card.label} className="rounded-2xl border border-borderColor-dark/20 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{card.label}</p>
                <p className="text-3xl font-semibold text-primary-gold">{card.value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AdminConsole;
