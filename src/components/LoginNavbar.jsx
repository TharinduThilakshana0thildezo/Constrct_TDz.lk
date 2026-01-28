import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const LoginNavbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-emphasized ${
        isScrolled
          ? 'border-b border-primary-gold/30 dark:border-primary-gold/40 bg-white/40 dark:bg-black/60 backdrop-blur-2xl shadow-xl'
          : 'border-b border-primary-gold/20 dark:border-primary-gold/30 bg-white/30 dark:bg-black/40 backdrop-blur-2xl'
      }`}
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent"></div>
      
      <nav className="container max-w-7xl flex items-center justify-between gap-4 py-4 md:py-5">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2 group"
          onClick={handleHomeClick}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-primary-gold/60 bg-gradient-to-br from-black via-slate-900 to-black dark:from-black dark:via-slate-800 dark:to-black text-primary-gold shadow-lg group-hover:shadow-primary-gold/30 transition-all duration-300 group-hover:scale-105">
            <span className="text-sm font-bold tracking-[0.16em]">LK</span>
          </div>
          <div className="leading-tight">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-primary-goldSecondary">
              ConsTrct
            </p>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-textSecondary">
              TDz
            </p>
          </div>
        </div>

        {/* Center - Premium Home Button */}
        <div className="flex-1 flex items-center justify-center">
          <button
            type="button"
            onClick={handleHomeClick}
            className="relative group px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-[0.18em] text-primary-gold overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/10 via-primary-goldSecondary/10 to-primary-gold/10 dark:from-primary-gold/20 dark:via-primary-goldSecondary/20 dark:to-primary-gold/20 rounded-full border-2 border-primary-gold/40 dark:border-primary-gold/50"></div>
            
            {/* Animated hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/20 via-primary-goldSecondary/30 to-primary-gold/20 dark:from-primary-gold/30 dark:via-primary-goldSecondary/40 dark:to-primary-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <span className="relative z-10">Home</span>
          </button>
        </div>

        {/* Right - Theme Toggle with luxury styling */}
        <div className="flex items-center">
          <div className="p-1 rounded-lg border border-primary-gold/30 dark:border-primary-gold/40 bg-white/20 dark:bg-black/30">
            <ThemeToggle />
          </div>
        </div>
      </nav>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent"></div>
    </header>
  );
};

export default LoginNavbar;
