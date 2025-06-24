
import React from 'react';
import BastionSchematic from './BastionSchematic';
import SystemStatus from './SystemStatus';
import ZoneStatus from './ZoneStatus';

const LifeSupportModule = () => {
  return (
    <div className="p-6 space-y-6 scanlines">
      <div className="text-neon-cyan text-sm font-bold tracking-wide mb-2">HABITAT CONTROL</div>
      
      <SystemStatus />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BastionSchematic />
        <ZoneStatus />
      </div>
      
      {/* Warning message */}
      <div className="glass-panel p-6 border border-[rgb(var(--neon-orange))] bg-[rgb(var(--neon-orange))/0.1]">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-8 h-8 bg-[rgb(var(--neon-orange))] rounded-full flex items-center justify-center neon-glow-orange">
            <span className="text-black font-bold">!</span>
          </div>
          <div className="text-center">
            <div className="text-white text-lg font-bold mb-2">HABITAT LINK REQUIRED</div>
            <div className="text-muted-foreground text-sm">
              The Bastion requires authorization to interface with habitat systems. Grant access in Settings &gt; Privacy &gt; HomeKit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSupportModule;
