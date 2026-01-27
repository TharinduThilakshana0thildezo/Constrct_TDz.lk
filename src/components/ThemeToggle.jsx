import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * ThemeToggle
 * - Minimal, enterprise-feel toggle between dark and light modes
 * - Uses subtle iconography and clear focus states
 */
const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-borderColor-dark/60 bg-card/70 text-xs text-textSecondary shadow-subtle backdrop-blur-sm transition-all duration-200 ease-emphasized hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="text-[0.75rem] leading-none">{isDark ? '☾' : '☀'}</span>
    </button>
  );
};

export default ThemeToggle;

