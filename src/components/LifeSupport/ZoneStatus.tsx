
import React from 'react';

const ZoneStatus = () => {
  const zones = [
    {
      name: 'GALLEY',
      temp: '22.4°C',
      status: 'THE VERDANT PLAINS',
      color: 'neon-green',
      icon: '🌿'
    },
    {
      name: 'SANITATION', 
      temp: '22.4°C',
      status: 'THE GREAT OCEANS',
      color: 'neon-cyan',
      icon: '💧'
    },
    {
      name: 'CREW QUARTERS',
      temp: '22.4°C', 
      status: 'ATMOSPHERIC STABILITY',
      color: 'neon-magenta',
      icon: '🏠'
    },
    {
      name: 'ENGINEERING',
      temp: '22.4°C',
      status: 'GEOTHERMAL CORE', 
      color: 'neon-orange',
      icon: '⚡'
    },
    {
      name: 'BRIDGE',
      temp: '22.4°C',
      status: 'ORBITAL COMMAND',
      color: 'neon-cyan', 
      icon: '📡'
    },
  ];

  return (
    <div className="space-y-2">
      <div className="text-neon-orange text-sm font-bold tracking-wide mb-4">ZONE STATUS</div>
      
      <div className="grid grid-cols-2 gap-4">
        {zones.slice(0, 4).map((zone) => (
          <div key={zone.name} className="glass-panel p-3 holographic-border">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full bg-[rgb(var(--${zone.color}))] 
                             neon-glow-${zone.color.replace('neon-', '')} pulse-glow`}></div>
              <div className="flex-1">
                <div className={`text-[rgb(var(--${zone.color}))] text-sm font-bold`}>
                  {zone.name}
                </div>
                <div className="text-white text-lg font-bold">{zone.temp}</div>
                <div className="text-muted-foreground text-xs">{zone.status}</div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="glass-panel p-3 holographic-border col-span-2">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-[rgb(var(--neon-cyan))] neon-glow-cyan pulse-glow"></div>
            <div className="flex-1">
              <div className="text-neon-cyan text-sm font-bold">BRIDGE</div>
              <div className="text-white text-lg font-bold">22.4°C</div>
              <div className="text-muted-foreground text-xs">ORBITAL COMMAND</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneStatus;
