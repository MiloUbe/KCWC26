
import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section id="resources" className="py-20 border-t border-charcoal/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-serif mb-4">Insights & Logistics</h2>
          <p className="text-charcoal/60 max-w-xl">Mastering the logistics of the largest sporting event on earth. Expert guides for crews and visitors.</p>
        </div>
        <button className="text-xs font-bold uppercase tracking-[0.2em] text-caramel border-b-2 border-caramel pb-1 hover:text-charcoal hover:border-charcoal transition-all">
          View All Resources
        </button>
      </div>

      {/* Grid Layout (Ref Image 3 Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Large Tile */}
        <div className="md:col-span-6 md:row-span-2 relative group overflow-hidden cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Riverside Logistics" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-caramel mb-2 block">Featured Crew Guide</span>
            <h3 className="text-3xl font-serif text-white mb-3">The Logistics of Riverside: Managing 500+ Personnel</h3>
            <p className="text-white/70 text-sm line-clamp-2">A deep dive into site management, credentialing, and fleet logistics at the Riverside Hub.</p>
          </div>
        </div>

        {/* Small Tile 1 */}
        <div className="md:col-span-6 md:row-span-1 relative group overflow-hidden cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" 
            alt="Commuter Guide" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-xl font-serif text-white mb-2">Commuter Guide: Stadium vs. Training</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">Read Guide →</span>
          </div>
        </div>

        {/* Small Tile 2 */}
        <div className="md:col-span-6 md:row-span-1 relative group overflow-hidden cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
            alt="Legal Guide" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-xl font-serif text-white mb-2">Legal Guide to 2026 Short-Term Stays</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">Regulatory News →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
