import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Overview = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const HERO_IMAGE_URL =
    'https://www.buid.ac.ae/wp-content/uploads/2023/08/construction-mana.jpg';
  const stats = [
    { number: '5000+', label: 'Active Projects' },
    { number: '2500+', label: 'Verified Contractors' },
    { number: '50M+', label: 'Platform Value' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const features = [
    {
      title: 'Easy Project Matching',
      description: 'Connect with the right contractors for your project based on expertise and budget.',
      icon: '🎯',
    },
    {
      title: 'Transparent Pricing',
      description: 'Get instant quotes and compare costs from multiple contractors without hidden fees.',
      icon: '💰',
    },
    {
      title: 'Quality Assurance',
      description: 'All contractors are verified and rated by previous clients for guaranteed quality.',
      icon: '⭐',
    },
    {
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with escrow protection for both parties.',
      icon: '🔒',
    },
    {
      title: 'Project Tracking',
      description: 'Real-time updates and communication throughout your project lifecycle.',
      icon: '📊',
    },
    {
      title: '24/7 Support',
      description: 'Dedicated customer support team available round the clock to assist you.',
      icon: '📞',
    },
  ];

  const services = [
    'Residential Construction',
    'Commercial Projects',
    'Home Renovation',
    'Interior Design',
    'Electrical Work',
    'Plumbing Services',
    'Painting & Finishing',
    'Structural Repairs',
  ];

  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary transition-colors duration-300 ease-emphasized">
      <Navbar onNavigate={onNavigate} hideNavItems={true} logoScrollToTop={true} />
      <main className="pt-20">
        {/* Overview Hero Section with background image */}
        <section className="relative bg-black/5 dark:bg-black">
          <img
            src={HERO_IMAGE_URL}
            alt="Construction overview"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

          <div className="relative container max-w-7xl py-32 md:py-40">
            <div className="mb-6">
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black shadow-sm">←</span>
                <span className="ml-1">Back to Home</span>
              </button>
            </div>
            <div className="text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-gold">
                PLATFORM OVERVIEW
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Sri Lanka's Premier
                <span className="block text-primary-gold">Construction Platform</span>
              </h1>
              <p className="text-lg md:text-xl text-textSecondary-light dark:text-textSecondary mb-8 max-w-2xl mx-auto text-white/90">
                Connecting property owners with verified contractors to deliver excellence in every project across Sri Lanka.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-gold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-textSecondary-light dark:text-textSecondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-textSecondary-light dark:text-textSecondary mb-4 leading-relaxed">
                  We aim to transform the construction industry by making it easier for property owners to find reliable contractors and for contractors to grow their businesses.
                </p>
                <p className="text-textSecondary-light dark:text-textSecondary leading-relaxed">
                  Through transparency, trust, and innovation, we're building a platform that simplifies construction projects of all sizes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 dark:from-primary-gold/30 dark:to-primary-gold/10 rounded-lg p-8 aspect-square flex items-center justify-center">
                <p className="text-6xl">🏗️</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Constrct?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-background-light dark:bg-[#1a1a1a] border border-borderColor-light dark:border-borderColor-dark/40 rounded-lg p-6 hover:border-primary-gold dark:hover:border-primary-gold hover:shadow-lg dark:hover:shadow-lg/20 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-background-light dark:text-textPrimary">{feature.title}</h3>
                  <p className="text-textSecondary-light dark:text-textSecondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-background-light dark:bg-[#1a1a1a] border border-borderColor-light dark:border-borderColor-dark/40 rounded-lg p-6 text-center hover:border-primary-gold dark:hover:border-primary-gold transition-colors hover:shadow-lg dark:hover:shadow-lg/20"
                >
                  <p className="font-medium text-background-light dark:text-textPrimary">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Post Your Project', desc: 'Share your project details and requirements' },
                { step: 2, title: 'Get Quotes', desc: 'Receive bids from verified contractors' },
                { step: 3, title: 'Compare & Choose', desc: 'Review profiles and select your contractor' },
                { step: 4, title: 'Project Complete', desc: 'Manage and track your project to completion' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary text-black flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-background-light dark:text-textPrimary">{item.title}</h3>
                  <p className="text-sm text-textSecondary-light dark:text-textSecondary">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-background-light dark:text-textPrimary">Ready to Start Your Project?</h2>
            <p className="text-lg text-textSecondary-light dark:text-textSecondary mb-8 max-w-xl mx-auto">
              Join thousands of satisfied customers who have successfully completed their projects with Constrct.
            </p>
            <button
              onClick={() => onNavigate('login')}
              className="rounded-full bg-gradient-to-r from-primary-gold to-primary-goldSecondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-card transition-all duration-200 hover:from-primary-goldSecondary hover:to-primary-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Post Your Project
            </button>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Overview;
