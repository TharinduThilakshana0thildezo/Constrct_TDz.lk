import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { homeownerProjects, contractorApplications, contractorJobs, calendarEvents } from '../data/mockData';
import { useAppState } from '../context/AppStateContext';
import { makeId } from '../utils/id';

const ContractorWorkspace = ({ onNavigate }) => {
  const { state, pushToast } = useAppState();
  const displayName = state.role === 'contractor' ? 'Noah Idris' : 'Elite Contractor';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-slate-900 dark:to-black">
      <Navbar onNavigate={onNavigate} hideHomeNav={false} hideNavItems />
      <main id="main-content" className="container max-w-6xl space-y-10 pt-28 pb-16">
        <header className="rounded-3xl border border-borderColor-dark/20 bg-black/80 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-gold/60">Contractor workspace</p>
          <h1 className="mt-2 text-3xl font-heading font-semibold">Hello, {displayName}</h1>
          <p className="mt-1 text-sm text-white/70">Track bids, manage site work, submit invoices.</p>
        </header>

        <section className="rounded-3xl border border-borderColor-dark/10 bg-white/80 p-6 shadow-lg dark:bg-white/5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Browse</p>
              <h2 className="text-2xl font-heading font-semibold">Curated projects</h2>
            </div>
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-5 py-2 text-sm font-semibold text-black"
              onClick={() => pushToast({ id: makeId(), type: 'bid', message: 'Saved project to watchlist' })}
            >
              Save watchlist
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {homeownerProjects.map((project) => (
              <article key={project.id} className="rounded-2xl border border-borderColor-dark/10 p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-textSecondary">{project.location}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span>Status: {project.status}</span>
                  <span>Budget MYR {project.budget.toLocaleString()}</span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-full border border-primary-gold/40 px-4 py-2 text-sm text-primary-gold"
                  onClick={() => pushToast({ id: makeId(), type: 'bid', message: `Bid drafted for ${project.title}` })}
                >
                  Draft bid
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-borderColor-dark/10 bg-white/80 p-6 shadow-lg dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Applications</p>
            <h2 className="text-xl font-semibold">Bid status</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {contractorApplications.map((app) => (
                <li key={app.id} className="rounded-2xl border border-borderColor-dark/20 px-3 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{app.project}</p>
                      <p className="text-xs text-textSecondary">{app.client}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-primary-gold">{app.status}</span>
                  </div>
                  <p className="mt-2 text-xs text-textSecondary">Value MYR {app.value.toLocaleString()} · Submitted {app.submitted}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-borderColor-dark/10 bg-white/80 p-6 shadow-lg dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Active jobs</p>
            <h2 className="text-xl font-semibold">Site management</h2>
            <ul className="mt-4 space-y-4">
              {contractorJobs.map((job) => (
                <li key={job.id} className="rounded-2xl border border-borderColor-dark/20 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{job.title}</p>
                      <p className="text-xs text-textSecondary">Deadline {job.deadline}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary-gold">{job.progress}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-borderColor-dark/20">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary" style={{ width: `${job.progress}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-borderColor-dark/10 bg-white/80 p-6 shadow-lg dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Calendar</p>
            <ul className="mt-4 space-y-3 text-sm">
              {calendarEvents.map((event) => (
                <li key={event.id} className="flex items-center justify-between rounded-2xl border border-borderColor-dark/20 px-3 py-2">
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-xs text-textSecondary">{event.type}</p>
                  </div>
                  <span className="text-sm text-primary-gold">{event.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <form
            className="rounded-3xl border border-borderColor-dark/10 bg-white/80 p-6 shadow-lg dark:bg-white/5"
            onSubmit={(event) => {
              event.preventDefault();
              pushToast({ id: makeId(), type: 'invoice', message: 'Invoice submitted for approval' });
            }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Finance</p>
            <h2 className="text-xl font-semibold">Submit invoice</h2>
            <label className="mt-4 block text-sm">
              Project
              <select className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3">
                {homeownerProjects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm">
              Amount (MYR)
              <input type="number" className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3" />
            </label>
            <label className="mt-4 block text-sm">
              Notes
              <textarea rows={4} className="mt-1 w-full rounded-2xl border border-borderColor-dark/30 px-3 py-3" placeholder="Include milestone reference"></textarea>
            </label>
            <button type="submit" className="mt-4 w-full rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-5 py-3 text-sm font-semibold text-black">
              Submit invoice
            </button>
          </form>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContractorWorkspace;
