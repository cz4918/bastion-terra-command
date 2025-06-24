
import React from 'react';

const WidgetProperties = () => {
  return (
    <div className="w-64 glass-panel border-l border-border/50 p-4">
      <h3 className="text-neon-cyan text-sm font-bold tracking-wide mb-4">WIDGET PROPERTIES</h3>
      
      <div className="space-y-4">
        <div>
          <div className="text-xs text-muted-foreground mb-2">WIDGET INFO</div>
          <div className="glass-panel p-2 text-xs">
            <div className="text-neon-green font-bold">XR-49 SURVEILLANCE</div>
            <div className="text-muted-foreground">Real-time data</div>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-muted-foreground mb-2">POSITION</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-muted-foreground">X: 50</label>
              <div className="flex items-center space-x-1 mt-1">
                <button className="glass-panel px-2 py-1 text-xs">−</button>
                <button className="glass-panel px-2 py-1 text-xs">+</button>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Y: 50</label>
              <div className="flex items-center space-x-1 mt-1">
                <button className="glass-panel px-2 py-1 text-xs">−</button>
                <button className="glass-panel px-2 py-1 text-xs">+</button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-muted-foreground mb-2">SIZE</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-muted-foreground">W: 200</label>
              <div className="flex items-center space-x-1 mt-1">
                <button className="glass-panel px-2 py-1 text-xs">−</button>
                <button className="glass-panel px-2 py-1 text-xs">+</button>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">H: 150</label>
              <div className="flex items-center space-x-1 mt-1">
                <button className="glass-panel px-2 py-1 text-xs">−</button>
                <button className="glass-panel px-2 py-1 text-xs">+</button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-muted-foreground mb-2">VISIBILITY</div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-4 bg-[rgb(var(--neon-green))] rounded-full relative neon-glow-green">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
        </div>
        
        <button className="w-full glass-panel p-3 border border-[rgb(var(--destructive))] text-[rgb(var(--destructive))] 
                         text-sm font-bold hover:bg-[rgb(var(--destructive))/0.1] transition-colors">
          🗑 DELETE WIDGET
        </button>
      </div>
    </div>
  );
};

export default WidgetProperties;
