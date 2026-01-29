import React from 'react';

const ResourceSearchBar = ({ query, onQueryChange, category, onCategoryChange, userType, onUserTypeChange }) => {
  return (
    <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/40 bg-card-light dark:bg-card/80 p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <label className="sr-only">Search resources</label>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-full rounded-lg border border-borderColor-light dark:border-borderColor-dark/40 bg-transparent px-4 py-2 text-sm text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary-gold"
          placeholder="Search guides, costs, or keywords"
        />

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="hidden sm:inline-block rounded-lg border border-borderColor-light dark:border-borderColor-dark/40 bg-transparent px-3 py-2 text-sm text-textPrimary"
          aria-label="Filter by category"
        >
          <option value="all">All categories</option>
          <option value="cost-guides">Cost Guides</option>
          <option value="material-prices">Material Prices</option>
          <option value="building-process">Building Process</option>
          <option value="legal-compliance">Legal & Compliance</option>
          <option value="tips">Tips</option>
          <option value="tools-calculators">Tools</option>
        </select>

        <select
          value={userType}
          onChange={(e) => onUserTypeChange(e.target.value)}
          className="hidden sm:inline-block rounded-lg border border-borderColor-light dark:border-borderColor-dark/40 bg-transparent px-3 py-2 text-sm text-textPrimary"
          aria-label="Filter by user type"
        >
          <option value="all">All users</option>
          <option value="client">Client</option>
          <option value="contractor">Contractor</option>
        </select>

        <button className="inline-flex items-center gap-2 rounded-lg bg-primary-gold px-4 py-2 text-sm font-semibold text-black hover:opacity-95">
          Search
        </button>
      </div>
    </div>
  );
};

export default ResourceSearchBar;
