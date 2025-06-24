
import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass-panel border-b border-border/50 px-6 py-4 scanlines">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-neon-cyan text-sm font-bold tracking-wide">
            BASTION COMMAND INTERFACE
          </div>
          <div className="text-white text-lg font-bold">
            ARCHIVISTS: ACTIVE
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="text-muted-foreground text-sm">
            SYSTEM STATUS
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[rgb(var(--neon-green))] neon-glow-green pulse-glow"></div>
            <span className="text-neon-green text-sm font-bold">NOMINAL</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
