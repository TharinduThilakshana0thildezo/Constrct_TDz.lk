import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import PlatformDropdown from './PlatformDropdown';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', action: 'home' },
  { label: 'Find Projects', href: '#services', action: 'find-projects' },
  { label: 'Find Contractors', href: '#contractors', action: 'find-contractors' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources', action: 'resources' },
];

const Navbar = ({ onNavigate, hideNavItems = false, logoScrollToTop = false, hideHomeNav = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href, action) => {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
    
    if (action) {
      if (action === 'resources' && isHomePage) {
        // Scroll to resources section if on home page
        const resourcesEl = document.querySelector('#resources');
        if (resourcesEl) {
          resourcesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (action === 'find-projects' && isHomePage) {
        // Scroll to services section if on home page
        const servicesEl = document.querySelector('#services');
        if (servicesEl) {
          servicesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (action === 'find-contractors' && isHomePage) {
        // Scroll to contractors section if on home page
        const contractorsEl = document.querySelector('#contractors');
        if (contractorsEl) {
          contractorsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to the page for these actions
        if (onNavigate) {
          onNavigate(action);
        }
      }
    } else if (href) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    if (onNavigate) {
      onNavigate('login');
    }
  };

  const handleLogoClick = () => {
    if (logoScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTimeout(() => onNavigate && onNavigate('home'), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
      handleNavClick('#hero');
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
          onClick={handleLogoClick}
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
        {!hideNavItems && (
          <div className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-7 text-xs font-medium uppercase tracking-[0.16em] text-primary-gold dark:text-textSecondary">
              {NAV_ITEMS.filter(item => !hideHomeNav || item.label !== 'Home').map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href, item.action)}
                    className="transition-colors duration-150 text-primary-gold dark:text-textSecondary hover:text-primary-gold dark:hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Right actions */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={handleLoginClick}
              className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-textSecondary transition-colors duration-150 hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleLoginClick}
              className="rounded-full border border-borderColor-dark/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-textPrimary transition-all duration-150 hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Register
            </button>
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Post a Project
            </button>
          </div>
          <div className="ml-3">
            <PlatformDropdown />
          </div>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderColor-dark/70 bg-black/60 text-textSecondary transition-colors duration-150 hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Open navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-3.5 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="border-t border-borderColor-dark/50 bg-background/98 backdrop-blur-xl md:hidden">
          <div className="container max-w-6xl py-3">
            {!hideNavItems && (
              <ul className="space-y-2 text-xs font-medium uppercase tracking-[0.16em] text-primary-gold dark:text-textSecondary">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left transition-colors duration-150 hover:bg-card/80 hover:text-primary-gold focus-visible:outline-none focus-visible:bg-card/80 focus-visible:text-primary-gold text-primary-gold dark:text-textSecondary"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.55rem] text-textSecondary/70">●</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className={`${!hideNavItems ? 'mt-3' : ''} flex flex-wrap items-center gap-2 border-t border-borderColor-dark/40 pt-3`}>
              <button
                type="button"
                onClick={handleLoginClick}
                className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-textSecondary transition-colors duration-150 hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleLoginClick}
                className="rounded-full border border-borderColor-dark/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-textPrimary transition-all duration-150 hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Register
              </button>
              <button
                type="button"
                className="flex-1 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Post a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

