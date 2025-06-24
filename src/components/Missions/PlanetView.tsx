
import React, { useState } from 'react';

interface Region {
  id: string;
  name: string;
  color: string;
  position: string;
  status: string;
  progress: number;
  description: string;
}

const PlanetView = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  
  const regions: Region[] = [
    { 
      id: 'galley', 
      name: 'THE VERDANT PLAINS', 
      color: 'neon-green', 
      position: 'top-1/4 left-1/2 -translate-x-1/2',
      status: 'THRIVING',
      progress: 85,
      description: 'Lush vegetation spreading across fertile plains'
    },
    { 
      id: 'sanitation', 
      name: 'THE GREAT OCEANS', 
      color: 'neon-cyan', 
      position: 'top-1/2 right-1/4',
      status: 'EXPANDING',
      progress: 60,
      description: 'Water systems establishing marine ecosystems'
    },
    { 
      id: 'quarters', 
      name: 'ATMOSPHERIC STABILITY', 
      color: 'neon-magenta', 
      position: 'bottom-1/4 right-1/3',
      status: 'STABILIZING',
      progress: 45,
      description: 'Atmospheric composition reaching equilibrium'
    },
    { 
      id: 'engineering', 
      name: 'GEOTHERMAL CORE', 
      color: 'neon-orange', 
      position: 'bottom-1/4 left-1/3',
      status: 'ACTIVE',
      progress: 92,
      description: 'Core temperature regulation systems online'
    },
    { 
      id: 'bridge', 
      name: 'ORBITAL COMMAND', 
      color: 'neon-cyan', 
      position: 'top-1/2 left-1/4',
      status: 'MONITORING',
      progress: 78,
      description: 'Satellite network providing planetary oversight'
    },
  ];

  return (
    <div className="glass-panel p-6 holographic-border">
      <div className="text-center mb-4">
        <h3 className="text-neon-green text-lg font-bold tracking-wide">PLANET XR-49</h3>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <span className="text-xs text-muted-foreground">ROTATION SPEED</span>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setRotationSpeed(Math.max(0.1, rotationSpeed - 0.5))}
              className="glass-panel px-2 py-1 text-xs text-neon-cyan hover:bg-[rgb(var(--neon-cyan))/0.1]"
            >
              −
            </button>
            <span className="text-neon-cyan text-xs font-bold w-8 text-center">{rotationSpeed}x</span>
            <button 
              onClick={() => setRotationSpeed(Math.min(3, rotationSpeed + 0.5))}
              className="glass-panel px-2 py-1 text-xs text-neon-cyan hover:bg-[rgb(var(--neon-cyan))/0.1]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex gap-6">
        <div className="relative w-80 h-80 mx-auto">
          {/* Planet sphere with holographic grid */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-amber-900/40 to-amber-700/60 
                          border-2 border-[rgb(var(--neon-cyan))] neon-glow-cyan transition-transform duration-1000`}
               style={{ 
                 animation: `spin ${60/rotationSpeed}s linear infinite`,
                 transformOrigin: 'center'
               }}>
            
            {/* Grid overlay */}
            <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full">
              {/* Latitude lines */}
              <ellipse cx="160" cy="160" rx="140" ry="40" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="160" cy="160" rx="140" ry="80" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="160" cy="160" rx="140" ry="120" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
              </ellipse>
              
              {/* Longitude lines */}
              <ellipse cx="160" cy="160" rx="20" ry="140" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
              <ellipse cx="160" cy="160" rx="60" ry="140" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
              <ellipse cx="160" cy="160" rx="100" ry="140" fill="none" stroke="rgb(var(--neon-cyan))" strokeWidth="1" opacity="0.3" />
            </svg>
            
            {/* Regional indicators */}
            {regions.map((region) => (
              <div
                key={region.id}
                className={`absolute w-8 h-8 rounded-full cursor-pointer transition-all duration-300
                           ${selectedRegion === region.id ? 'scale-150 z-20' : 'hover:scale-125'}
                           ${region.position}`}
                onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
              >
                <div className={`w-full h-full rounded-full bg-[rgb(var(--${region.color}))] 
                               neon-glow-${region.color.replace('neon-', '')} pulse-glow
                               ${selectedRegion === region.id ? 'animate-pulse' : ''}`}>
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                </div>
                
                {selectedRegion === region.id && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 pointer-events-none z-30">
                    <div className="glass-panel p-3 border border-[rgb(var(--neon-cyan))] text-xs">
                      <div className="text-neon-cyan font-bold mb-1">{region.name}</div>
                      <div className="text-white text-xs mb-2">{region.description}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Progress:</span>
                        <span className={`text-[rgb(var(--${region.color}))] font-bold`}>{region.progress}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Atmospheric glow */}
          <div className="absolute inset-0 rounded-full bg-[rgb(var(--neon-cyan))] opacity-10 blur-xl scale-110 animate-pulse"></div>
        </div>
        
        {/* Region details panel */}
        <div className="flex-1 glass-panel p-4 border border-border/50">
          <div className="text-neon-orange text-xs font-bold mb-3">REGION ANALYSIS</div>
          {selectedRegion ? (
            <div className="space-y-3">
              {regions.filter(r => r.id === selectedRegion).map(region => (
                <div key={region.id}>
                  <div className={`text-[rgb(var(--${region.color}))] font-bold mb-2 text-sm`}>{region.name}</div>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className={`text-[rgb(var(--${region.color}))] font-bold`}>{region.status}</span>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">Terraforming Progress:</span>
                        <span className="text-white font-bold">{region.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[rgb(var(--metal-surface))] rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-[rgb(var(--${region.color}))] neon-glow-${region.color.replace('neon-', '')} rounded-full transition-all duration-500`}
                          style={{ width: `${region.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-muted-foreground mt-2">{region.description}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground text-xs py-8">
              Click on a region indicator to view terraforming details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanetView;
