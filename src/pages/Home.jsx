import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import FeaturedContractors from '../components/FeaturedContractors';
import CostEstimatorCTA from '../components/CostEstimatorCTA';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-background-light text-textPrimary-light dark:bg-background dark:text-textPrimary transition-colors duration-300 ease-emphasized">
      <Navbar onNavigate={onNavigate} hideHomeNav={true} />
      <main className="pt-20">
        <section
          id="hero"
          className="bg-gradient-to-b from-background-light via-background-light to-background-light dark:from-background dark:via-[#050505] dark:to-background"
        >
          <div className="container max-w-7xl flex min-h-[calc(100vh-5rem)] items-center py-16 md:py-24 lg:py-28">
            <Hero />
          </div>
        </section>

        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-6 md:py-8">
            <TrustBar />
          </div>
        </section>

        <section id="how-it-works" className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-20">
            <HowItWorks />
          </div>
        </section>

        <section id="services" className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-20">
            <Services />
          </div>
        </section>

        <section id="contractors" className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-20">
            <FeaturedContractors />
          </div>
        </section>

        <section className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-16">
            <CostEstimatorCTA />
          </div>
        </section>

        <section id="resources" className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-20">
            <Testimonials onNavigate={onNavigate} />
          </div>
        </section>

        <section id="pricing" className="border-b border-borderColor-light dark:border-borderColor-dark/40">
          <div className="container max-w-7xl py-12 md:py-20">
            <CallToAction />
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Home;

