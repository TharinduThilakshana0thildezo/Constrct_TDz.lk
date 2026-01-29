import React from 'react';

const downloads = [
  { title: 'Site Handover Checklist', desc: 'Complete checklist for handing over a residential site safely.', file: 'handover-checklist.pdf' },
  { title: 'Budget Template (XLS)', desc: 'Editable budgeting template for construction projects.', file: 'budget-template.xlsx' },
  { title: 'Permit & Approvals Guide', desc: 'Guide to local approvals required across Colombo and regions.', file: 'permits-guide.pdf' },
];

const DownloadsSection = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-textPrimary mb-4">Downloadable resources</h3>
      <ul className="space-y-3">
        {downloads.map((d) => (
          <li key={d.title} className="flex items-center justify-between rounded-lg border border-borderColor-light dark:border-borderColor-dark/40 bg-card-light dark:bg-card/80 p-3">
            <div>
              <p className="text-sm font-medium text-textPrimary">{d.title}</p>
              <p className="text-xs text-textSecondary">{d.desc}</p>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-borderColor-light dark:border-borderColor-dark/40 bg-primary-gold px-3 py-2 text-xs font-medium text-black"
              href={`#download-${d.file}`}
              aria-label={`Download ${d.title}`}
            >
              ⬇︎ Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadsSection;