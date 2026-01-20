
import React from 'react';

const CommuterMap: React.FC = () => {
  return (
    <div className="w-full bg-white p-8 md:p-12 shadow-xl border border-charcoal/5 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
        <h3 className="text-3xl font-serif mb-6">Mastering the Commute</h3>
        <p className="text-charcoal/70 mb-8 leading-relaxed">
          Time is the ultimate luxury. Our hubs are strategically mapped to ensuring you spend less time in traffic and more time on the pitch.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4 border-l-2 border-caramel pl-6 py-2">
            <div className="text-2xl font-serif text-caramel italic">08 min</div>
            <div className="text-sm font-semibold text-charcoal uppercase tracking-widest">To Training Grounds</div>
          </div>
          <div className="flex items-center space-x-4 border-l-2 border-sage pl-6 py-2">
            <div className="text-2xl font-serif text-sage italic">12 min</div>
            <div className="text-sm font-semibold text-charcoal uppercase tracking-widest">To Arrowhead Stadium</div>
          </div>
          <div className="flex items-center space-x-4 border-l-2 border-charcoal/20 pl-6 py-2">
            <div className="text-2xl font-serif text-charcoal italic">15 min</div>
            <div className="text-sm font-semibold text-charcoal uppercase tracking-widest">To Downtown KC</div>
          </div>
        </div>
      </div>

      <div className="flex-[1.5] relative w-full aspect-video bg-greige overflow-hidden border border-charcoal/10 flex items-center justify-center group">
        {/* Simple Abstract SVG Map Representation */}
        <svg viewBox="0 0 800 500" className="w-full h-full p-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          <path d="M100 250 Q 200 100 400 250 T 700 250" fill="none" stroke="#C68E17" strokeWidth="2" strokeDasharray="10 5" />
          <path d="M100 250 Q 300 400 500 250 T 700 250" fill="none" stroke="#8A9A5B" strokeWidth="2" strokeDasharray="10 5" />
          
          {/* Riverside Hub */}
          <circle cx="100" cy="250" r="12" fill="#C68E17" />
          <text x="90" y="285" fontSize="14" fontWeight="600" className="uppercase tracking-widest fill-charcoal">Riverside Hub</text>
          
          {/* Training Ground */}
          <rect x="385" y="235" width="30" height="30" fill="#333" />
          <text x="360" y="220" fontSize="12" className="uppercase tracking-widest fill-charcoal">Training HQ</text>
          
          {/* Arrowhead */}
          <circle cx="700" cy="250" r="18" fill="#8A9A5B" />
          <text x="660" y="285" fontSize="14" fontWeight="600" className="uppercase tracking-widest fill-charcoal">Arrowhead Stadium</text>

          {/* Stadium Stays */}
          <circle cx="550" cy="350" r="10" fill="#C68E17" />
          <text x="540" y="380" fontSize="12" className="uppercase tracking-widest fill-charcoal">Stadium Stays</text>
        </svg>
        
        <div className="absolute bottom-4 right-4 bg-charcoal text-white text-[10px] px-3 py-1 uppercase tracking-widest">
          Stylized Commuter Visualization
        </div>
      </div>
    </div>
  );
};

export default CommuterMap;
