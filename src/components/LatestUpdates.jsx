import React from 'react';

const updates = [
  { title: 'Cement prices show seasonal stabilization', desc: 'Prices have stabilised in key regions following steady supply.', date: '2026-01-10', category: 'Material Price' },
  { title: 'Updated CIDA submission checklist', desc: 'New required documents and timelines for contractor registration.', date: '2026-01-02', category: 'Legal & Compliance' },
  { title: 'Top 10 bidding tips for clients', desc: 'Practical steps to evaluate bids and protect project scope.', date: '2025-12-20', category: 'Tips' },
];

const LatestUpdates = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-textPrimary mb-4">Latest updates</h3>
      <ul className="space-y-4">
        {updates.map((u) => (
          <li key={u.title} className="rounded-lg border border-borderColor-light dark:border-borderColor-dark/40 bg-card-light dark:bg-card/80 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-textPrimary">{u.title}</p>
                <p className="mt-1 text-sm text-textSecondary">{u.desc}</p>
              </div>
              <div className="text-right text-xs text-textSecondary">
                <div>{u.date}</div>
                <div className="mt-1 inline-flex items-center rounded-full bg-background-light/50 px-2 py-1 text-[0.65rem] font-medium text-textSecondary">{u.category}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestUpdates;
