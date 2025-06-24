
import React from 'react';

const DesignCanvas = () => {
  return (
    <div className="flex-1 p-6">
      <div className="glass-panel h-full holographic-border relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}>
        </div>
        
        {/* Canvas info */}
        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
          CANVAS: 1,920x1,080 | ZOOM: 40%
        </div>
        
        {/* Example widgets on canvas */}
        <div className="absolute top-12 left-12 w-48 h-32 glass-panel holographic-border p-3">
          <div className="text-neon-green text-xs font-bold mb-2">XR-49 SURVEILLANCE</div>
          <div className="text-center text-muted-foreground text-xs">Widget Preview</div>
        </div>
        
        <div className="absolute top-12 right-12 w-32 h-24 glass-panel holographic-border p-3">
          <div className="text-neon-cyan text-xs font-bold mb-2">SYSTEM STATUS</div>
          <div className="text-center text-muted-foreground text-xs">Preview</div>
        </div>
      </div>
    </div>
  );
};

export default DesignCanvas;
