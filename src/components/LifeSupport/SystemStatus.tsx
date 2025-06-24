
import React from 'react';

const SystemStatus = () => {
  const systems = [
    { name: 'SYSTEMS', value: '0', color: 'neon-cyan' },
    { name: 'CLIMATE', value: '--°C', color: 'neon-cyan' },
    { name: 'LIGHTING', value: '0', color: 'neon-cyan' },
    { name: 'ZONES', value: '5', color: 'neon-cyan' },
  ];

  return (
    <div className="glass-panel p-4 holographic-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-bold">THE BASTION</h2>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">LIFE SUPPORT STATUS</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(var(--neon-green))] neon-glow-green pulse-glow"></div>
          <span className="text-neon-green text-sm font-bold">OPERATIONAL</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {systems.map((system) => (
          <div key={system.name} className="text-center">
            <div className="text-muted-foreground text-xs mb-1">{system.name}</div>
            <div className={`text-[rgb(var(--${system.color}))] text-2xl font-bold pulse-glow`}>
              {system.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemStatus;
