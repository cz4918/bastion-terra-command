
import React from 'react';

interface CommsHeaderProps {
  activeMode: 'design' | 'preview';
  onModeChange: (mode: 'design' | 'preview') => void;
}

const CommsHeader = ({ activeMode, onModeChange }: CommsHeaderProps) => {
  return (
    <div className="glass-panel border-b border-border/50 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-xl font-bold mb-1">VIEWSCREEN CONFIGURATION</h2>
          <div className="text-neon-magenta text-sm">COMMS CENTRE</div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">ACTIVE WIDGETS</span>
          <div className="text-neon-magenta text-lg font-bold">2</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-1 mt-4">
        <button
          onClick={() => onModeChange('design')}
          className={`px-6 py-2 text-sm font-bold transition-all ${
            activeMode === 'design'
              ? 'text-neon-magenta bg-[rgb(var(--neon-magenta))/0.2] border border-[rgb(var(--neon-magenta))]'
              : 'text-muted-foreground hover:text-white'
          }`}
        >
          🎨 DESIGN
        </button>
        <button
          onClick={() => onModeChange('preview')}
          className={`px-6 py-2 text-sm font-bold transition-all ${
            activeMode === 'preview'
              ? 'text-neon-magenta bg-[rgb(var(--neon-magenta))/0.2] border border-[rgb(var(--neon-magenta))]'
              : 'text-muted-foreground hover:text-white'
          }`}
        >
          👁 PREVIEW
        </button>
      </div>
    </div>
  );
};

export default CommsHeader;
