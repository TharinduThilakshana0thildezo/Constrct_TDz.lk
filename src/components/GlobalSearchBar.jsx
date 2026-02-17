import React, { useMemo, useState } from 'react';
import { useAppState } from '../context/AppStateContext';
import { homeownerProjects, contractorJobs } from '../data/mockData';

const searchableItems = [
  ...homeownerProjects.map((project) => ({
    id: project.id,
    label: project.title,
    context: project.location,
    type: 'Project',
  })),
  ...contractorJobs.map((job) => ({
    id: job.id,
    label: job.title,
    context: job.status,
    type: 'Job',
  })),
];

const GlobalSearchBar = () => {
  const { state, toggleModal, navigate } = useAppState();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => {
    if (!query) return [];
    return searchableItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const close = () => {
    setQuery('');
    setActiveIndex(0);
    toggleModal('showSearch');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
    if (event.key === 'Enter' && results[activeIndex]) {
      navigate('dashboard');
      close();
    }
    if (event.key === 'Escape') {
      close();
    }
  };

  if (!state.modals.showSearch) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" role="dialog" aria-modal="true" onKeyDown={handleKeyDown}>
      <div className="mx-auto mt-20 w-full max-w-2xl rounded-2xl border border-borderColor-dark/40 bg-background p-4 shadow-2xl">
        <label htmlFor="global-search" className="sr-only">
          Search projects or tools
        </label>
        <input
          id="global-search"
          type="search"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects, contractors, tools..."
          className="w-full rounded-xl border border-borderColor-dark/40 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary-gold"
        />
        <div className="mt-4 max-h-72 overflow-y-auto">
          {results.length === 0 && (
            <p className="px-3 py-2 text-sm text-textSecondary">No matches yet. Try "penthouse".</p>
          )}
          <ul>
            {results.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    navigate('dashboard');
                    close();
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                    index === activeIndex ? 'bg-primary-gold/20 text-primary-gold' : 'text-textPrimary'
                  }`}
                >
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-xs text-textSecondary">{item.context}</p>
                  </div>
                  <span className="text-[0.7rem] uppercase tracking-wide text-textSecondary">{item.type}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.28em] text-textSecondary">
          <p>Navigate with ↑ ↓ · enter</p>
          <button type="button" className="rounded-full border border-borderColor-dark/40 px-3 py-1" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearchBar;
