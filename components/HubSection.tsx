
import React from 'react';

interface HubCardProps {
  image: string;
  title: string;
  subtitle: string;
  time: string;
  tag?: string;
}

const HubCard: React.FC<HubCardProps> = ({ image, title, subtitle, time, tag }) => (
  <div className="group flex flex-col bg-white overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="relative h-72 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      {/* Time Badge (Sage Green) */}
      <div className="absolute top-4 left-4 bg-sage text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center space-x-1 uppercase tracking-widest shadow-lg">
        <span>⏱</span>
        <span>{time} Commute</span>
      </div>
      {/* Compliance Badge */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 border border-charcoal/10 flex items-center space-x-1.5 shadow-sm">
        <svg className="w-3 h-3 text-sage" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-[10px] font-semibold text-charcoal uppercase tracking-widest">KCMO Permit Ready</span>
      </div>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-2xl font-serif mb-2 text-charcoal">{title}</h3>
      <p className="text-charcoal/60 text-sm mb-6 flex-grow leading-relaxed">{subtitle}</p>
      <button className="w-full py-4 border border-caramel text-caramel hover:bg-caramel hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300">
        View Hub Details
      </button>
    </div>
  </div>
);

const HubSection: React.FC = () => {
  return (
    <section id="hubs" className="py-16 border-t border-charcoal/5">
      <div className="mb-12">
        <h2 className="text-4xl font-serif mb-4">The Strategic Hubs</h2>
        <p className="text-charcoal/60 text-lg">Curated environments designed for distinct World Cup needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <HubCard 
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
          title="Riverside Hub"
          subtitle="The Workforce Basecamp - Designed for scale and crew logistics. Just 8 mins to primary training facilities."
          time="8 Min"
        />
        <HubCard 
          image="https://images.unsplash.com/photo-1600607687940-477a284e392d?auto=format&fit=crop&q=80&w=800"
          title="Stadium Stays"
          subtitle="Operational HQ - High-speed connectivity and executive suites overlooking the stadium approach. 12 mins to Arrowhead."
          time="12 Min"
        />
        <HubCard 
          image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
          title="Fan Portal"
          subtitle="Historic Liberty - Authentic KC living. Legal short-term rentals in walkable districts for the ultimate fan experience."
          time="20 Min"
        />
      </div>
    </section>
  );
};

export default HubSection;
