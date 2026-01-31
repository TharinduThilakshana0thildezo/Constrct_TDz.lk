import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FeaturedContractors from '../components/FeaturedContractors';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

const FindContractors = ({ onNavigate }) => {
  const { theme } = useTheme();
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const contractors = [
    {
      name: 'Summit Civil Engineering (Pvt) Ltd',
      years: '18+ years',
      location: 'Colombo | Island-wide',
      rating: 4.8,
      category: 'Grade CS2 · CIDA',
      grade: 'cs2',
      region: 'island-wide',
      specialties: ['Civil Works', 'Infrastructure', 'Structural'],
    },
    {
      name: 'Eastern Build & Design Consortium',
      years: '12+ years',
      location: 'Kandy | Central Province',
      rating: 4.6,
      category: 'Grade C1 · CIDA',
      grade: 'c1',
      region: 'central',
      specialties: ['Building Works', 'Design', 'Renovation'],
    },
    {
      name: 'Harbourline Construction Partners',
      years: '22+ years',
      location: 'Galle | Southern Province',
      rating: 4.9,
      category: 'Infrastructure & Marine',
      grade: 'cs3',
      region: 'southern',
      specialties: ['Infrastructure', 'Marine', 'Large Scale'],
    },
    {
      name: 'Colombo Metropolitan Builders',
      years: '15+ years',
      location: 'Colombo | Western Province',
      rating: 4.7,
      category: 'Grade C1 · CIDA',
      grade: 'c1',
      region: 'western',
      specialties: ['Commercial', 'Residential', 'Fit-outs'],
    },
    {
      name: 'Northern District Construction',
      years: '10+ years',
      location: 'Jaffna | Northern Province',
      rating: 4.5,
      category: 'Grade C2 · CIDA',
      grade: 'c2',
      region: 'northern',
      specialties: ['General Building', 'Civil Works', 'Repairs'],
    },
    {
      name: 'South West Infrastructure Solutions',
      years: '20+ years',
      location: 'Matara | Southern Province',
      rating: 4.8,
      category: 'Grade CS1 · CIDA',
      grade: 'cs1',
      region: 'southern',
      specialties: ['Infrastructure', 'Roads', 'Water Works'],
    },
  ];

  const getStarIcons = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i += 1) {
      stars.push('★');
    }
    if (halfStar) stars.push('☆');
    while (stars.length < 5) {
      stars.push('✩');
    }
    return stars;
  };

  const filteredContractors = contractors.filter((contractor) => {
    if (selectedGrade && contractor.grade !== selectedGrade) return false;
    if (selectedRegion && contractor.region !== selectedRegion) return false;
    return true;
  });

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-background-light dark:bg-background text-textPrimary-light dark:text-textPrimary">
        <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />
        
        {/* Hero Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40 relative overflow-hidden">
          <AnimatedHeroBackground isDark={theme === 'dark'} />
          <div className="container max-w-7xl py-12 md:py-20 relative z-10">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'auto' });
                    setTimeout(() => onNavigate && onNavigate('home'), 100);
                  }}
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
                    <li className="font-medium">Contractors</li>
                  </ol>
                </nav>
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">Contractors</p>
                <h1 className="mt-4 text-3xl md:text-4xl font-heading font-semibold tracking-tight text-textPrimary">
                  Find Contractors
                </h1>
                <p className="mt-3 text-sm text-textSecondary">
                  Discover verified and experienced contractors across Sri Lanka. Find the perfect partner for your construction projects with ratings, portfolios, and expertise.
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
                  <li className="font-medium">Contractors</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="container max-w-7xl mx-auto px-4 py-16">
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Search contractors by name..."
                className="flex-1 px-4 py-3 rounded-lg border border-borderColor-light dark:border-borderColor-dark/60 bg-white dark:bg-card/80 text-textPrimary-light dark:text-textPrimary placeholder-textSecondary-light dark:placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              />
              <select 
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-4 py-3 rounded-lg border border-borderColor-light dark:border-borderColor-dark/60 bg-white dark:bg-card/80 text-textPrimary-light dark:text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              >
                <option value="">All Grades</option>
                <option value="cs1">Grade CS1</option>
                <option value="cs2">Grade CS2</option>
                <option value="cs3">Grade CS3</option>
                <option value="c1">Grade C1</option>
                <option value="c2">Grade C2</option>
              </select>
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 rounded-lg border border-borderColor-light dark:border-borderColor-dark/60 bg-white dark:bg-card/80 text-textPrimary-light dark:text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              >
                <option value="">All Regions</option>
                <option value="island-wide">Island-wide</option>
                <option value="western">Western Province</option>
                <option value="central">Central Province</option>
                <option value="southern">Southern Province</option>
                <option value="northern">Northern Province</option>
              </select>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-gold to-primary-goldSecondary text-black font-semibold text-sm uppercase tracking-[0.16em] hover:from-primary-goldSecondary hover:to-primary-gold transition-all shadow-card">
                Search
              </button>
            </div>

            {/* Results Count */}
            <p className="text-sm text-textSecondary-light dark:text-textSecondary">
              Showing {filteredContractors.length} contractor{filteredContractors.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

       

        {/* All Contractors Grid */}
        <section className="container max-w-7xl mx-auto px-4 py-16">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
                Verified Partners
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-textPrimary-light dark:text-textPrimary">
                Available Contractors
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredContractors.map((contractor) => (
                <article
                  key={contractor.name}
                  className="group flex flex-col rounded-2xl border border-borderColor-light dark:border-borderColor-dark/60 bg-card-light dark:bg-card/80 overflow-hidden hover:border-primary-gold transition-all duration-200 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                >
                  {/* Contractor Header */}
                  <div className="p-5 border-b border-borderColor-light dark:border-borderColor-dark/30">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary-gold/50 bg-black/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-gold mb-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-gold shadow-[0_0_8px_rgba(201,162,77,0.9)]" />
                          Verified
                        </div>
                        <h3 className="font-heading text-sm font-semibold leading-snug text-textPrimary-light dark:text-textPrimary">
                          {contractor.name}
                        </h3>
                        <p className="mt-1 text-[0.75rem] text-textSecondary-light dark:text-textSecondary">{contractor.category}</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-borderColor-light dark:border-borderColor-dark/60 bg-white dark:bg-black/80 text-[0.7rem] text-textSecondary-light dark:text-textSecondary flex-shrink-0">
                        <span>LOGO</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Location */}
                  <div className="p-5 flex-1">
                    <div className="flex items-center justify-between text-[0.8rem] text-textSecondary-light dark:text-textSecondary mb-4">
                      <div>
                        <p className="font-medium text-textPrimary-light dark:text-textPrimary">{contractor.years}</p>
                        <p>{contractor.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex justify-end gap-0.5 text-[0.8rem] text-primary-gold">
                          {getStarIcons(contractor.rating).map((s, index) => (
                            <span key={`${contractor.name}-star-${index}`}>{s}</span>
                          ))}
                        </div>
                        <p className="mt-0.5 text-[0.7rem] text-textSecondary-light dark:text-textSecondary">
                          {contractor.rating.toFixed(1)} rating
                        </p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {contractor.specialties.map((specialty) => (
                        <span 
                          key={specialty}
                          className="inline-block px-2 py-1 rounded-full text-[0.7rem] font-medium bg-primary-gold/10 text-primary-gold"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-5 border-t border-borderColor-light dark:border-borderColor-dark/30 space-y-2">
                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary-gold to-primary-goldSecondary text-black font-medium text-sm uppercase tracking-[0.16em] hover:from-primary-goldSecondary hover:to-primary-gold transition-all">
                      View Profile
                    </button>
                    <button className="w-full px-4 py-2 rounded-lg border border-primary-gold text-primary-gold font-medium text-sm uppercase tracking-[0.16em] hover:bg-primary-gold hover:text-black transition-all">
                      Contact
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredContractors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-textSecondary-light dark:text-textSecondary">
                  No contractors found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default FindContractors;
