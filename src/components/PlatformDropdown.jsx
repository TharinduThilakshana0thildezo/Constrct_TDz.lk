import React, { useState, useRef, useEffect } from 'react';

const DROPDOWN_MENU_ITEMS = [
  {
    section: 'Platform & Trust',
    items: [
      { label: 'About Us', href: '#about', icon: '🏢' },
      { label: 'How It Works', href: '#how-it-works-detail', icon: '⚙️' },
      { label: 'Trust & Verification', href: '#trust', icon: '✓' },
      { label: 'Compliance & Standards', href: '#compliance', icon: '📋' },
    ],
  },
  {
    section: 'Help & Support',
    items: [
      { label: 'Help Center', href: '#help', icon: '💡' },
      { label: 'FAQs', href: '#faqs', icon: '❓' },
      { label: 'Contact Us', href: '#contact', icon: '📧' },
    ],
  },
  {
    section: 'Resources',
    items: [
      { label: 'Construction Cost Guide', href: '#cost-guide', icon: '💰' },
      { label: 'Blog / Insights', href: '#blog', icon: '📰' },
      { label: 'Reports', href: '#reports', icon: '📊', badge: 'Coming Soon' },
    ],
  },
  {
    section: 'Legal & Policy',
    items: [
      { label: 'Terms & Conditions', href: '#terms', icon: '📜' },
      { label: 'Privacy Policy', href: '#privacy', icon: '🔒' },
      { label: 'Dispute Resolution', href: '#dispute', icon: '⚖️' },
    ],
  },
];

const PlatformDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleItemClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-borderColor-dark/70 text-textSecondary transition-all duration-150 hover:border-primary-gold hover:text-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="More options"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Dropdown menu with premium animation */}
      <div
        className={`absolute right-0 top-full mt-4 w-[520px] origin-top-right transition-all duration-400 ease-out ${
          isOpen
            ? 'pointer-events-auto scale-100 opacity-100 translate-y-0'
            : 'pointer-events-none scale-95 opacity-0 -translate-y-4'
        }`}
      >
        <div className="relative rounded-3xl border-[3px] border-primary-gold/50 bg-gradient-to-br from-black via-gray-900 to-black shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_100px_rgba(201,162,77,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden">
          {/* Chrome metallic top edge */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-gold/90 to-transparent shadow-[0_1px_8px_rgba(201,162,77,0.6)]" />
          
          {/* Gold-plated gradient overlay with chrome effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/15 via-transparent via-40% to-primary-goldSecondary/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 via-50% to-transparent pointer-events-none" />
          
          {/* Chrome reflective strips */}
          <div className="absolute top-12 -right-24 h-40 w-96 rotate-45 bg-gradient-to-r from-transparent via-white/8 to-transparent blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-24 h-40 w-96 -rotate-45 bg-gradient-to-r from-transparent via-primary-gold/12 to-transparent blur-xl pointer-events-none" />
          
          {/* Gold radial glow effects */}
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-gold/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary-goldSecondary/15 blur-3xl pointer-events-none" />
          
          {/* Content wrapper */}
          <div className="relative p-8">
            <div className="grid grid-cols-2 gap-6">
              {DROPDOWN_MENU_ITEMS.map((section, sectionIndex) => (
                <div key={section.section} className="space-y-3">
                  {/* Section header */}
                  <div className="px-2 pb-2 border-b border-primary-gold/30 shadow-[0_1px_0_rgba(201,162,77,0.15)]">
                    <p className="text-[0.75rem] font-bold uppercase tracking-[0.28em] text-primary-gold drop-shadow-[0_0_8px_rgba(201,162,77,0.4)]">
                      {section.section}
                    </p>
                  </div>

                  {/* Section items */}
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleItemClick(item.href)}
                        className="group relative flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-gold/20 hover:to-primary-goldSecondary/15 hover:shadow-[0_0_25px_rgba(201,162,77,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border hover:border-primary-gold/30 focus-visible:bg-gradient-to-r focus-visible:from-primary-gold/20 focus-visible:to-primary-goldSecondary/15 focus-visible:outline-none"
                      >
                        {/* Hover chrome accent line */}
                        <div className="absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-transparent via-primary-gold to-transparent opacity-0 shadow-[0_0_10px_rgba(201,162,77,0.8)] transition-all duration-300 group-hover:h-3/4 group-hover:opacity-100" />
                        
                        <div className="flex items-center gap-3 flex-1">
                          <span className="text-lg opacity-70 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(201,162,77,0.6)]">
                            {item.icon}
                          </span>
                          <span className="text-sm font-semibold text-gray-100 transition-all duration-300 group-hover:text-primary-gold group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(201,162,77,0.4)]">
                            {item.label}
                          </span>
                        </div>
                        {item.badge && (
                          <span className="rounded-full bg-gradient-to-r from-primary-gold/25 to-primary-goldSecondary/20 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary-gold shadow-[0_0_20px_rgba(201,162,77,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] border border-primary-gold/40">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom chrome luxury accent */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary-gold/70 to-transparent shadow-[0_-1px_8px_rgba(201,162,77,0.5)]" />
        </div>
      </div>
    </div>
  );
};

export default PlatformDropdown;
