import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/Footer';
import AIStudio from '../components/AIStudio';
import { homeownerProjects } from '../data/mockData';
import { useAppState } from '../context/AppStateContext';

const Dashboard = ({ onNavigate, user }) => {
  const { toggleModal } = useAppState();
  const project = homeownerProjects[0];

  const stats = [
    { label: 'Active projects', value: '02', change: '+1', accent: 'text-primary-gold' },
    { label: 'Pending approvals', value: '05', change: '-2', accent: 'text-blue-400' },
    { label: 'Milestones this week', value: '03', change: '+1', accent: 'text-green-400' },
    { label: 'Unread updates', value: '07', change: '+3', accent: 'text-red-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-slate-900 dark:to-black text-textPrimary-light dark:text-textPrimary">
      <DashboardNavbar user={user} onNavigate={onNavigate} />
      <main id="main-content" className="pt-28 pb-16">
        <section className="container max-w-7xl space-y-8">
          <header className="rounded-3xl border border-borderColor-dark/30 bg-black/80 p-6 text-white shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/70">Project tracking</p>
                <h1 className="text-3xl font-heading font-semibold">Welcome back, {user?.name?.split(' ')[0] || 'Builder'}</h1>
                <p className="text-sm text-white/70">Stay on top of bids, milestones, AI insights, and finance.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
                  onClick={() => toggleModal('showNotifications')}
                >
                  View alerts
                </button>
                <button
                  type="button"
                  className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black"
                  onClick={() => onNavigate('post-project')}
                >
                  Post a project
                </button>
              </div>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-4 text-sm shadow-lg dark:bg-white/5">
                <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{stat.label}</p>
                <p className={`mt-2 text-3xl font-semibold ${stat.accent}`}>{stat.value}</p>
                <p className="text-xs text-textSecondary">Trend {stat.change}</p>
              </article>
            ))}
          </div>

          <section className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5 lg:col-span-2">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Timeline</p>
                  <h2 className="text-2xl font-heading font-semibold">{project.title}</h2>
                </div>
                <button type="button" className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-gold">
                  Export log
                </button>
              </div>
              <ol className="mt-6 space-y-4 border-l border-borderColor-dark/20 pl-6">
                {project.timeline.map((event) => (
                  <li key={event.id} className="relative">
                    <span className="absolute -left-[14px] top-2 h-3 w-3 rounded-full bg-primary-gold"></span>
                    <div className="rounded-2xl border border-borderColor-dark/10 bg-white/70 p-4 shadow-sm dark:bg-white/5">
                      <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{new Date(event.timestamp).toLocaleDateString()}</p>
                      <p className="text-sm font-semibold">{event.title}</p>
                      {event.assets && <p className="text-xs text-textSecondary">{event.assets} photos uploaded</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Milestones</p>
              <h2 className="text-xl font-heading font-semibold">Approvals & payouts</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {project.milestones.map((milestone) => (
                  <li key={milestone.id} className="rounded-2xl border border-borderColor-dark/20 p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{milestone.label}</p>
                      <span className="text-xs text-textSecondary">Due {milestone.due}</span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">
                      {milestone.completed ? 'Completed' : 'In progress'}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5 lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-semibold">Bid room</h2>
                <button type="button" className="text-xs uppercase tracking-[0.3em] text-primary-gold">
                  View bidders
                </button>
              </div>
              <table className="mt-4 w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.3em] text-textSecondary">
                    <th className="pb-2">Contractor</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">ETA</th>
                    <th className="pb-2">Rating</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {project.bids.map((bid) => (
                    <tr key={bid.id} className="border-t border-borderColor-dark/20">
                      <td className="py-3 font-semibold">{bid.contractor}</td>
                      <td className="py-3">MYR {bid.amount.toLocaleString()}</td>
                      <td className="py-3">{bid.etaWeeks} weeks</td>
                      <td className="py-3">{bid.rating}</td>
                      <td className="py-3 text-primary-gold">{bid.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5">
              <h2 className="text-xl font-heading font-semibold">Approvals</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {project.approvals.map((approval) => (
                  <li key={approval.id} className="rounded-2xl border border-borderColor-dark/20 p-3">
                    <p className="font-semibold">{approval.label}</p>
                    <p className="text-xs text-textSecondary">MYR {approval.amount.toLocaleString()}</p>
                    <div className="mt-2 flex gap-2">
                      <button type="button" className="flex-1 rounded-full border border-borderColor-dark/30 px-3 py-2 text-xs">
                        Approve
                      </button>
                      <button type="button" className="flex-1 rounded-full border border-red-500/30 px-3 py-2 text-xs text-red-400">
                        Hold
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-borderColor-dark/20 bg-white/80 p-6 shadow-lg dark:bg-white/5">
              <h2 className="text-xl font-heading font-semibold">Photo log</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.photos.map((photo, index) => (
                  <div key={photo} className="h-40 rounded-3xl bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }} aria-label={`Site photo ${index + 1}`}></div>
                ))}
              </div>
            </article>
            <AIStudio />
          </section>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Dashboard;
