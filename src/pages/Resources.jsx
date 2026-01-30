import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourceSearchBar from '../components/ResourceSearchBar';
import ResourceCard from '../components/ResourceCard';
import FeaturedGuides from '../components/FeaturedGuides';
import LatestUpdates from '../components/LatestUpdates';
import DownloadsSection from '../components/DownloadsSection';
import ResourcesCTA from '../components/ResourcesCTA';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import { useTheme } from '../context/ThemeContext';

const categories = [
  {
    id: 'cost-guides',
    title: 'Construction Cost Guides',
    description: 'Cost per sq.ft, budget planning and finish-level comparisons tailored to Sri Lanka.',
    icon: '💸',
  },
  {
    id: 'material-prices',
    title: 'Material Price Insights',
    description: 'Cement, steel, sand and tile price trends and regional differences.',
    icon: '📈',
  },
  {
    id: 'building-process',
    title: 'Building Process Guides',
    description: 'Step-by-step house construction, contractor selection and timelines.',
    icon: '🛠️',
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    description: 'CIDA grades, approvals, contract basics and safety standards.',
    icon: '📜',
  },
  {
    id: 'tips',
    title: 'Contractor & Client Tips',
    description: 'How to evaluate bids, avoid mistakes and maintain quality control.',
    icon: '🤝',
  },
  {
    id: 'tools-calculators',
    title: 'Tools & Calculators',
    description: 'Area calculators and budget tools — cost estimator coming soon.',
    icon: '🧮',
  },
];

const Resources = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [userType, setUserType] = useState('all');
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Basic client-side filtering for demo + API-ready shape
  const filteredCategories = categories.filter((c) => {
    if (categoryFilter !== 'all' && c.id !== categoryFilter) return false;
    if (!query) return true;
    return (c.title + ' ' + c.description).toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary transition-colors duration-300 ease-emphasized">
      <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />

      <main className="pt-20">
        {/* HERO */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40 relative overflow-hidden">
          <AnimatedHeroBackground isDark={isDark} />
          <div className="container max-w-7xl py-12 md:py-20 relative z-10">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={() => onNavigate && onNavigate('home')}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-card"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black">←</span>
                  <span className="hidden sm:inline">Back to Home</span>
                </button>

                <nav className="hidden sm:block text-sm text-textSecondary">
                  <ol className="inline-flex items-center gap-2">
                    <li>
                      <button
                        className="text-textSecondary-light dark:text-textSecondary hover:underline"
                        onClick={() => onNavigate && onNavigate('home')}
                      >
                        Home
                      </button>
                    </li>
                    <li className="text-textSecondary-light dark:text-textSecondary">/</li>
                    <li className="font-medium">Resources</li>
                  </ol>
                </nav>
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">Resources</p>
                <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight text-textPrimary">
                  Construction Resources & Guides
                </h1>
                <p className="mt-3 text-sm text-textSecondary">
                  Practical guides, cost insights, and industry knowledge for building projects in Sri Lanka.
                </p>
                <div className="mt-4 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-primary-gold to-silver" />
              </div>

              <nav className="mt-4 text-sm text-textSecondary sm:hidden">
                <ol className="inline-flex items-center gap-2">
                  <li>
                    <button
                      className="text-textSecondary-light dark:text-textSecondary hover:underline"
                      onClick={() => onNavigate && onNavigate('home')}
                    >
                      Home
                    </button>
                  </li>
                  <li className="text-textSecondary-light dark:text-textSecondary">/</li>
                  <li className="font-medium">Resources</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Search & Filters (sticky on desktop) */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-6 md:py-8">
            <div className="sticky top-20 z-40">
              <ResourceSearchBar
                query={query}
                onQueryChange={setQuery}
                category={categoryFilter}
                onCategoryChange={setCategoryFilter}
                userType={userType}
                onUserTypeChange={setUserType}
              />
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((cat) => (
                <ResourceCard key={cat.id} title={cat.title} description={cat.description} icon={cat.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16">
            <FeaturedGuides />
          </div>
        </section>

        {/* Latest Updates & Downloads */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <LatestUpdates />
            </div>
            <div>
              <DownloadsSection />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="container max-w-7xl">
            <ResourcesCTA onNavigate={onNavigate} />
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Resources;
