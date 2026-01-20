
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CommuterMap from './components/CommuterMap';
import HubSection from './components/HubSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-caramel selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section id="map" className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic Location</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                Minutes from training grounds and Arrowhead Stadium. Our hubs are positioned to maximize efficiency for media teams and experience for fans.
              </p>
            </div>
            <CommuterMap />
          </section>

          <HubSection />
          
          <BlogSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
