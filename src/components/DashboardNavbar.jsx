import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const DashboardNavbar = ({ user, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-emphasized ${
        isScrolled
          ? 'border-b border-gray-400/80 bg-gray-200/80 dark:border-borderColor-dark/30 dark:bg-background/60 backdrop-blur-lg'
          : 'bg-gradient-to-b from-gray-200/70 via-gray-100/40 to-transparent dark:from-black/30 dark:via-black/5 dark:to-transparent backdrop-blur-sm'
      }`}
    >
      <nav className="container max-w-7xl flex items-center justify-between gap-4 py-3 md:py-4">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => onNavigate && onNavigate('dashboard')}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-gold/40 bg-black/80 text-primary-gold shadow-subtle">
            <span className="text-sm font-semibold tracking-[0.16em]">LK</span>
          </div>
          <div className="leading-tight">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary-gold">
              ConsTrct
            </p>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-textSecondary">
              TDz
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-7 text-xs font-medium uppercase tracking-[0.16em] text-primary-gold dark:text-textSecondary">
            <li>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('home')}
                className="transition-colors duration-150 text-primary-gold dark:text-textSecondary hover:text-primary-gold dark:hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('dashboard')}
                className="transition-colors duration-150 text-primary-gold dark:text-textSecondary hover:text-primary-gold dark:hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                type="button"
                className="transition-colors duration-150 text-primary-gold dark:text-textSecondary hover:text-primary-gold dark:hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="transition-colors duration-150 text-primary-gold dark:text-textSecondary hover:text-primary-gold dark:hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
              >
                Contractors
              </button>
            </li>
            <li>
              <button
                type="button"
                className="transition-colors duration-150 text-primary-gold dark:text-textSecondary hover:text-primary-gold dark:hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
              >
                Messages
              </button>
            </li>
          </ul>
        </div>

        {/* Right actions - Profile & Theme */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          
          {/* Notifications */}
          <button
            type="button"
            className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 text-textSecondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-1.5 pr-3 rounded-full border border-borderColor-dark/70 bg-white/10 dark:bg-black/40 hover:border-primary-gold transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-gold to-primary-goldSecondary flex items-center justify-center text-black font-bold text-sm">
                {user.avatar}
              </div>
              <span className="text-xs font-medium text-textSecondary hidden lg:block">{user.name}</span>
              <svg className={`w-4 h-4 text-textSecondary transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-primary-gold/20 shadow-2xl overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-borderColor-dark/40">
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-textSecondary">{user.email}</p>
                  <span className="inline-block mt-2 px-2 py-1 rounded-full bg-primary-gold/10 text-primary-gold text-xs font-semibold">
                    {user.role}
                  </span>
                </div>
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                    👤 My Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                    ⚙️ Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                    💳 Billing
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                    ❓ Help & Support
                  </button>
                </div>
                <div className="border-t border-gray-200 dark:border-borderColor-dark/40 py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderColor-dark/70 bg-black/60 text-textSecondary transition-colors duration-150 hover:border-primary-gold hover:text-primary-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-3.5 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-borderColor-dark/50 bg-background/98 backdrop-blur-xl md:hidden">
          <div className="container max-w-6xl py-4">
            {/* Mobile Profile */}
            <div className="flex items-center gap-3 p-3 mb-3 rounded-lg bg-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-gold to-primary-goldSecondary flex items-center justify-center text-black font-bold">
                {user.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-textSecondary">{user.email}</p>
              </div>
            </div>

            {/* Mobile Nav Items */}
            <ul className="space-y-2 text-xs font-medium uppercase tracking-[0.16em] mb-3">
              <li>
                <button 
                  onClick={() => onNavigate && onNavigate('home')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-card/80 text-primary-gold dark:text-textSecondary">
                  Home
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-card/80 text-primary-gold dark:text-textSecondary">
                  Dashboard
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-card/80 text-primary-gold dark:text-textSecondary">
                  Projects
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-card/80 text-primary-gold dark:text-textSecondary">
                  Contractors
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-card/80 text-primary-gold dark:text-textSecondary">
                  Messages
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-borderColor-dark/40">
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-xs font-medium text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10"
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default DashboardNavbar;
