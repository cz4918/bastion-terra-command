
import React from 'react';

const BastionSchematic = () => {
  const zones = [
    { id: 'bridge', name: 'BRIDGE', color: 'neon-cyan', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { id: 'engineering', name: 'ENGINEERING', color: 'neon-orange', position: 'bottom-4 left-1/2 -translate-x-1/2' },
    { id: 'quarters', name: 'CREW QUARTERS', color: 'neon-magenta', position: 'bottom-4 right-4' },
    { id: 'galley', name: 'GALLEY', color: 'neon-green', position: 'top-4 right-4' },
    { id: 'sanitation', name: 'SANITATION', color: 'neon-cyan', position: 'top-4 left-4' },
  ];

  return (
    <div className="glass-panel p-6 holographic-border">
      <div className="mb-4">
        <h3 className="text-neon-cyan text-sm font-bold tracking-wide mb-1">BASTION SCHEMATIC</h3>
        <p className="text-neon-green text-xs">STRUCTURAL INTEGRITY: NOMINAL</p>
      </div>
      
      <div className="relative w-64 h-64 mx-auto">
        {/* Pentagon outline */}
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full absolute inset-0"
          style={{ filter: 'drop-shadow(0 0 10px rgb(var(--neon-cyan)))' }}
        >
          <polygon
            points="100,20 180,70 150,150 50,150 20,70"
            fill="rgba(0, 217, 255, 0.1)"
            stroke="rgb(var(--neon-cyan))"
            strokeWidth="2"
            className="pulse-glow"
          />
          
          {/* Energy lines connecting zones */}
          <g stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.6">
            <line x1="100" y1="20" x2="100" y2="100" className="pulse-glow" />
            <line x1="100" y1="100" x2="180" y2="70" className="pulse-glow" />
            <line x1="100" y1="100" x2="150" y2="150" className="pulse-glow" />
            <line x1="100" y1="100" x2="50" y2="150" className="pulse-glow" />
            <line x1="100" y1="100" x2="20" y2="70" className="pulse-glow" />
          </g>
        </svg>
        
        {/* Zone indicators */}
        {zones.map((zone) => (
          <div
            key={zone.id}
            className={`absolute w-4 h-4 rounded-full bg-[rgb(var(--${zone.color}))] 
                       neon-glow-${zone.color.replace('neon-', '')} pulse-glow
                       ${zone.position}`}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className={`text-[rgb(var(--${zone.color}))] text-xs font-bold`}>
                {zone.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BastionSchematic;
