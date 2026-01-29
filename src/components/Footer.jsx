import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="mt-16 border-t border-borderColor-light dark:border-borderColor-dark/60 bg-background-light text-xs text-textSecondary-light dark:bg-black/95 dark:text-textSecondary">
      <div className="container max-w-7xl py-10">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary-gold">
              Construct · Sri Lanka
            </p>
            <p className="mt-3 max-w-sm text-[0.8rem]">
              A national-level construction contract platform connecting project owners, contractors, engineers, and
              suppliers under a governed, digital workflow.
            </p>
          </div>

          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-textPrimary">
              Platform
            </h3>
            <ul className="mt-3 space-y-2 text-[0.8rem]">
              <li>
                <button
                  onClick={() => onNavigate('overview')}
                  className="hover:text-primary-gold transition-colors cursor-pointer text-textPrimary dark:text-textSecondary"
                >
                  Overview
                </button>
              </li>
              <li>For project owners</li>
              <li>For contractors</li>
              <li>For consultants</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-textPrimary">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-[0.8rem]">
              <li>
                <button onClick={() => onNavigate && onNavigate('resources')} className="hover:text-primary-gold transition-colors cursor-pointer text-textPrimary dark:text-textSecondary">Browse resources</button>
              </li>
              <li>Contract templates</li>
              <li>Procurement checklist</li>
              <li>Support centre</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-textPrimary">
              Legal & Contact
            </h3>
            <ul className="mt-3 space-y-2 text-[0.8rem]">
              <li>Terms of use</li>
              <li>Privacy & PDPA</li>
              <li>Cookie preferences</li>
              <li>Contact: info@construct.lk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-borderColor-dark/50">
        <div className="container max-w-6xl flex flex-col items-start justify-between gap-2 py-4 text-[0.75rem] text-textSecondary md:flex-row md:items-center">
          <p>© Construction Platform – Sri Lanka. All rights reserved.</p>
          <p>Personal data is processed in line with Sri Lankan PDPA requirements.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

