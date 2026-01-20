
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[95vh] w-full bg-greige overflow-hidden">
      {/* Immersive Shard Visuals (Ref Image 1 Style) */}
      <div className="absolute inset-0 flex h-full">
        {/* Shard 1 */}
        <div className="relative flex-1 overflow-hidden h-full group">
          <img 
            src="https://images.unsplash.com/photo-1513519247388-193ad51c50be?auto=format&fit=crop&q=80&w=1200" 
            alt="Boho living room" 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-charcoal/10"></div>
        </div>
        {/* Shard 2 - Center slanted (CSS clip-path) */}
        <div className="relative flex-1 overflow-hidden h-full -ml-[10%] z-10 group" style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)' }}>
          <img 
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200" 
            alt="Modern Workspace" 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-charcoal/10"></div>
        </div>
        {/* Shard 3 */}
        <div className="relative flex-1 overflow-hidden h-full -ml-[10%] group">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200" 
            alt="Cozy bedroom" 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-charcoal/10"></div>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-t from-charcoal/40 via-transparent to-transparent">
        <div className="max-w-4xl text-center px-4">
          <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-[0.4em] mb-6 block drop-shadow-lg">
            Kansas City 2026
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif italic mb-8 drop-shadow-2xl">
            Refined Living for <br />the World Stage
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
            High-end housing solutions specifically curated for the 2026 World Cup workforce, media crews, and discerning fans.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-caramel hover:bg-caramel/90 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl min-w-[280px]">
              For Workforce & Media
              <span className="block text-[10px] font-normal tracking-normal opacity-80 group-hover:opacity-100 transition-opacity mt-1 italic">
                Riverside & Stadium Training Hubs
              </span>
            </button>
            <button className="group relative bg-white hover:bg-greige text-charcoal px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl min-w-[280px]">
              For Global Fans
              <span className="block text-[10px] font-normal tracking-normal opacity-80 group-hover:opacity-100 transition-opacity mt-1 italic">
                Historic Liberty & Fan Portals
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
