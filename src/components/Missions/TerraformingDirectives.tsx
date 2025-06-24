
import React from 'react';

const TerraformingDirectives = () => {
  return (
    <div className="glass-panel p-6 holographic-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-neon-green text-sm font-bold tracking-wide">TERRAFORMING DIRECTIVES</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[rgb(var(--neon-green))] neon-glow-green pulse-glow"></div>
          <span className="text-neon-green text-xs font-bold">NEW DIRECTIVE</span>
        </div>
      </div>
      
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[rgb(var(--neon-green))] 
                        flex items-center justify-center neon-glow-green">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[rgb(var(--neon-green))]">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        
        <h4 className="text-white text-lg font-bold mb-2">NO ACTIVE DIRECTIVES</h4>
        <p className="text-muted-foreground text-sm">
          Begin terraforming XR-49 by creating your first directive
        </p>
      </div>
    </div>
  );
};

export default TerraformingDirectives;
