
import React, { useState } from 'react';
import CommsHeader from './CommsHeader';
import WidgetLibrary from './WidgetLibrary';
import DesignCanvas from './DesignCanvas';
import WidgetProperties from './WidgetProperties';

const CommsModule = () => {
  const [activeMode, setActiveMode] = useState<'design' | 'preview'>('design');

  return (
    <div className="h-full flex flex-col scanlines">
      <CommsHeader activeMode={activeMode} onModeChange={setActiveMode} />
      
      <div className="flex-1 flex">
        <WidgetLibrary />
        <DesignCanvas />
        <WidgetProperties />
      </div>
      
      <div className="glass-panel border-t border-border/50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-neon-magenta text-sm font-bold hover:text-white transition-colors">
              📚 WIDGET LIBRARY
            </button>
            <div className="text-muted-foreground text-xs">
              CANVAS: 1,920x1,080 | ZOOM: 40%
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="glass-panel px-4 py-2 text-neon-cyan text-sm font-bold hover:bg-[rgb(var(--neon-cyan))/0.1] transition-colors">
              CLEAR ALL
            </button>
            <button className="glass-panel px-4 py-2 text-neon-green text-sm font-bold hover:bg-[rgb(var(--neon-green))/0.1] transition-colors">
              EXPORT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommsModule;
