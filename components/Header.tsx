
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-greige/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      {/* Top Banner */}
      {!scrolled && (
        <div className="bg-caramel text-white text-[10px] uppercase tracking-widest py-1.5 text-center font-semibold">
          World Cup 2026: Official Workforce & Fan Housing Portal
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-serif tracking-tight text-charcoal">
              KC <span className="text-caramel italic">Stay</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-charcoal/60 -mt-1">
              World Cup 2026 Housing
            </span>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex space-x-10 text-xs font-semibold uppercase tracking-widest text-charcoal/80">
            <a href="#hubs" className="hover:text-caramel transition-colors">The Hubs</a>
            <a href="#map" className="hover:text-caramel transition-colors">Logistics</a>
            <a href="#resources" className="hover:text-caramel transition-colors">Resources</a>
            <a href="#" className="hover:text-caramel transition-colors">Support</a>
          </div>

          {/* CTA / Sign In */}
          <div className="flex items-center space-x-6">
            <button className="text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-caramel transition-colors">
              Sign In
            </button>
            <button className="bg-charcoal text-white px-6 py-2.5 rounded-none text-xs font-semibold uppercase tracking-widest hover:bg-caramel transition-all duration-300">
              Book Hub
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
