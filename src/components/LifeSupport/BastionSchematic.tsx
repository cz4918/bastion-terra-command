
import React, { useState } from 'react';

interface Zone {
  id: string;
  name: string;
  color: string;
  position: string;
  status: 'optimal' | 'warning' | 'critical';
  temperature: string;
  description: string;
}

const BastionSchematic = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  
  const zones: Zone[] = [
    { 
      id: 'bridge', 
      name: 'BRIDGE', 
      color: 'neon-cyan', 
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      status: 'optimal',
      temperature: '22.4°C',
      description: 'Command and navigation systems operating normally'
    },
    { 
      id: 'engineering', 
      name: 'ENGINEERING', 
      color: 'neon-orange', 
      position: 'bottom-4 left-1/2 -translate-x-1/2',
      status: 'warning',
      temperature: '28.1°C',
      description: 'Power core running at elevated temperature'
    },
    { 
      id: 'quarters', 
      name: 'CREW QUARTERS', 
      color: 'neon-magenta', 
      position: 'bottom-4 right-4',
      status: 'optimal',
      temperature: '21.8°C',
      description: 'Environmental systems maintaining comfort levels'
    },
    { 
      id: 'galley', 
      name: 'GALLEY', 
      color: 'neon-green', 
      position: 'top-4 right-4',
      status: 'optimal',
      temperature: '23.2°C',
      description: 'Food processing and storage systems nominal'
    },
    { 
      id: 'sanitation', 
      name: 'SANITATION', 
      color: 'neon-cyan', 
      position: 'top-4 left-4',
      status: 'optimal',
      temperature: '22.7°C',
      description: 'Water recycling and waste management active'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'neon-green';
      case 'warning': return 'neon-orange';
      case 'critical': return 'destructive';
      default: return 'neon-cyan';
    }
  };

  return (
    <div className="glass-panel p-6 holographic-border">
      <div className="mb-4">
        <h3 className="text-neon-cyan text-sm font-bold tracking-wide mb-1">BASTION SCHEMATIC</h3>
        <p className="text-neon-green text-xs">STRUCTURAL INTEGRITY: NOMINAL</p>
      </div>
      
      <div className="flex gap-6">
        <div className="relative w-64 h-64">
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
              <line x1="100" y1="20" x2="100" y2="100" className="pulse-glow">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="100" y1="100" x2="180" y2="70" className="pulse-glow">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
              </line>
              <line x1="100" y1="100" x2="150" y2="150" className="pulse-glow">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="100" y1="100" x2="50" y2="150" className="pulse-glow">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite" />
              </line>
              <line x1="100" y1="100" x2="20" y2="70" className="pulse-glow">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.8s" repeatCount="indefinite" />
              </line>
            </g>
          </svg>
          
          {/* Zone indicators */}
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={`absolute w-6 h-6 rounded-full cursor-pointer transition-all duration-300
                         ${selectedZone === zone.id ? 'scale-150 z-10' : 'hover:scale-125'}
                         ${zone.position}`}
              onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
            >
              <div className={`w-full h-full rounded-full bg-[rgb(var(--${getStatusColor(zone.status)}))] 
                             neon-glow-${getStatusColor(zone.status).replace('neon-', '')} pulse-glow
                             ${selectedZone === zone.id ? 'animate-pulse' : ''}`}></div>
              
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity
                             ${selectedZone === zone.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
                <span className={`text-[rgb(var(--${zone.color}))] text-xs font-bold`}>
                  {zone.name}
                </span>
              </div>
              
              {selectedZone === zone.id && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 pointer-events-none">
                  <div className="glass-panel p-2 border border-[rgb(var(--neon-cyan))] text-xs">
                    <div className="text-neon-cyan font-bold mb-1">{zone.temperature}</div>
                    <div className="text-white text-xs">{zone.description}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Zone details panel */}
        <div className="flex-1 glass-panel p-4 border border-border/50">
          <div className="text-neon-orange text-xs font-bold mb-3">ZONE ANALYSIS</div>
          {selectedZone ? (
            <div className="space-y-3">
              {zones.filter(z => z.id === selectedZone).map(zone => (
                <div key={zone.id}>
                  <div className={`text-[rgb(var(--${zone.color}))] font-bold mb-2`}>{zone.name}</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temperature:</span>
                      <span className="text-white">{zone.temperature}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className={`text-[rgb(var(--${getStatusColor(zone.status)}))] font-bold uppercase`}>
                        {zone.status}
                      </span>
                    </div>
                    <div className="text-muted-foreground mt-2">{zone.description}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground text-xs py-8">
              Click on a zone indicator to view detailed analysis
            </div>
          )}
        </div>
      </div>
      
      {/* Atmospheric glow */}
      <div className="absolute inset-0 rounded-full bg-[rgb(var(--neon-cyan))] opacity-10 blur-xl scale-110 pointer-events-none"></div>
    </div>
  );
};

export default BastionSchematic;
