
import React from 'react';

const TerraformingProgress = () => {
  const metrics = [
    { name: 'ATMOSPHERE', value: 0, color: 'neon-magenta', max: 100 },
    { name: 'WATER', value: 0, color: 'neon-cyan', max: 100 },
    { name: 'VEGETATION', value: 0, color: 'neon-green', max: 100 },
    { name: 'STABILITY', value: 0, color: 'neon-orange', max: 100 },
  ];

  return (
    <div className="glass-panel p-6 holographic-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-xl font-bold">XR-49 TERRAFORMING OPERATIONS</h2>
          <div className="text-neon-green text-sm mt-1">PROJECT TERRA</div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">MISSION STATUS</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(var(--destructive))] neon-glow-magenta pulse-glow"></div>
          <span className="text-[rgb(var(--destructive))] text-sm font-bold">CRITICAL</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="text-center">
            <div className="text-muted-foreground text-xs mb-2">{metric.name}</div>
            <div className={`text-[rgb(var(--${metric.color}))] text-3xl font-bold pulse-glow mb-2`}>
              {metric.value}%
            </div>
            <div className="w-full h-2 bg-[rgb(var(--metal-surface))] rounded-full overflow-hidden">
              <div 
                className={`h-full bg-[rgb(var(--${metric.color}))] neon-glow-${metric.color.replace('neon-', '')} rounded-full transition-all duration-500`}
                style={{ width: `${metric.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerraformingProgress;
