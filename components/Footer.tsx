
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-bold font-serif tracking-tight text-white">
                KC <span className="text-caramel italic">Stay</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
                World Cup 2026 Housing
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Providing elite housing solutions for the world's most watched sporting event. Licensed, verified, and strategically located.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-caramel">The Hubs</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Riverside Basecamp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stadium HQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fan Portal: Liberty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Executive Suites</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-caramel">Partner Support</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Media Credentials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise B2B</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-caramel">Stay Connected</h4>
            <p className="text-sm text-white/70 mb-6 italic font-serif">Be the first to know when phase 2 inventory opens.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-sm w-full outline-none"
              />
              <button className="text-caramel font-bold">→</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
          <div className="mb-4 md:mb-0">
            © 2024 KC World Cup Stay Portal. All rights reserved.
          </div>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
