
import React from 'react';

const PlanetView = () => {
  const regions = [
    { id: 'galley', name: 'G', color: 'neon-green', position: 'top-1/4 left-1/2 -translate-x-1/2' },
    { id: 'sanitation', name: 'S', color: 'neon-cyan', position: 'top-1/2 right-1/4' },
    { id: 'quarters', name: 'Q', color: 'neon-magenta', position: 'bottom-1/4 right-1/3' },
    { id: 'engineering', name: 'E', color: 'neon-orange', position: 'bottom-1/4 left-1/3' },
    { id: 'bridge', name: 'B', color: 'neon-cyan', position: 'top-1/2 left-1/4' },
  ];

  return (
    <div className="glass-panel p-6 holographic-border">
      <div className="text-center mb-4">
        <h3 className="text-neon-green text-lg font-bold tracking-wide">PLANET XR-49</h3>
      </div>
      
      <div className="relative w-80 h-80 mx-auto">
        {/* Planet sphere with holographic grid */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-900/40 to-amber-700/60 
                        border-2 border-[rgb(var(--neon-cyan))] neon-glow-cyan">
          
          {/* Grid overlay */}
          <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full">
            {/* Latitude lines */}
            <ellipse cx="160" cy="160" rx="140" ry="40" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
            <ellipse cx="160" cy="160" rx="140" ry="80" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
            <ellipse cx="160" cy="160" rx="140" ry="120" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
            
            {/* Longitude lines */}
            <ellipse cx="160" cy="160" rx="20" ry="140" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
            <ellipse cx="160" cy="160" rx="60" ry="140" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
            <ellipse cx="160" cy="160" rx="100" ry="140" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
          </svg>
          
          {/* Regional indicators */}
          {regions.map((region) => (
            <div
              key={region.id}
              className={`absolute w-6 h-6 rounded-full bg-[rgb(var(--${region.color}))] 
                         neon-glow-${region.color.replace('neon-', '')} pulse-glow
                         flex items-center justify-center ${region.position}`}
            >
              <span className="text-black font-bold text-sm">{region.name}</span>
            </div>
          ))}
        </div>
        
        {/* Atmospheric glow */}
        <div className="absolute inset-0 rounded-full bg-[rgb(var(--neon-cyan))] opacity-10 blur-xl scale-110"></div>
      </div>
    </div>
  );
};

export default PlanetView;
