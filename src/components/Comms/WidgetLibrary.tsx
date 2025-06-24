
import React from 'react';
import { Shield, Plane, Grid } from 'lucide-react';

const WidgetLibrary = () => {
  const widgets = [
    { id: 'system-status', name: 'SYSTEM STATUS', icon: Shield, color: 'neon-cyan' },
    { id: 'xr49-surveillance', name: 'XR-49 SURVEILLANCE', icon: Plane, color: 'neon-green' },
    { id: 'atmospheric-data', name: 'ATMOSPHERIC DATA', icon: Shield, color: 'neon-magenta' },
    { id: 'mission-timer', name: 'MISSION TIMER', icon: Shield, color: 'neon-orange' },
    { id: 'resource-levels', name: 'RESOURCE LEVELS', icon: Grid, color: 'neon-green' },
    { id: 'comms-channel', name: 'COMMS CHANNEL', icon: Grid, color: 'neon-cyan' },
    { id: 'sensor-array', name: 'SENSOR ARRAY', icon: Shield, color: 'neon-orange' },
    { id: 'mission-progress', name: 'MISSION PROGRESS', icon: Grid, color: 'neon-green' },
  ];

  return (
    <div className="w-64 glass-panel border-r border-border/50 p-4">
      <h3 className="text-neon-magenta text-sm font-bold tracking-wide mb-4">WIDGET LIBRARY</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {widgets.map((widget) => {
          const IconComponent = widget.icon;
          return (
            <div
              key={widget.id}
              className="glass-panel p-3 holographic-border cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="text-center">
                <IconComponent 
                  size={24} 
                  className={`mx-auto mb-2 text-[rgb(var(--${widget.color}))] neon-glow-${widget.color.replace('neon-', '')}`} 
                />
                <div className={`text-[rgb(var(--${widget.color}))] text-xs font-bold`}>
                  {widget.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WidgetLibrary;
