import React from 'react';

const ResourcesCTA = ({ onNavigate }) => {
  return (
    <div className="rounded-2xl border border-borderColor-light dark:border-borderColor-dark/40 bg-card-light dark:bg-card/80 p-8 text-center">
      <h3 className="text-2xl font-semibold text-textPrimary">Ready to apply what you’ve learned?</h3>
      <p className="mt-2 text-textSecondary">Use the platform to start your project or find verified contractors across Sri Lanka.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={() => onNavigate && onNavigate('login')}
          className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-6 py-2 text-sm font-semibold text-black shadow-card"
        >
          Post a Project
        </button>
        <button
          onClick={() => onNavigate && onNavigate('overview')}
          className="rounded-full border border-borderColor-light dark:border-borderColor-dark/40 px-6 py-2 text-sm font-semibold text-primary-gold"
        >
          Browse Contractors
        </button>
      </div>
    </div>
  );
};

export default ResourcesCTA;