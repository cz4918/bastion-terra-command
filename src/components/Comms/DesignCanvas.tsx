
import React, { useState } from 'react';

interface CanvasWidget {
  id: string;
  type: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

const DesignCanvas = () => {
  const [widgets, setWidgets] = useState<CanvasWidget[]>([
    {
      id: '1',
      type: 'surveillance',
      name: 'XR-49 SURVEILLANCE',
      x: 48,
      y: 48,
      width: 192,
      height: 128,
      color: 'neon-green'
    },
    {
      id: '2',
      type: 'status',
      name: 'SYSTEM STATUS',
      x: 300,
      y: 48,
      width: 128,
      height: 96,
      color: 'neon-cyan'
    }
  ]);
  
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent, widgetId: string) => {
    e.preventDefault();
    const widget = widgets.find(w => w.id === widgetId);
    if (!widget) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setSelectedWidget(widgetId);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedWidget) return;

    const canvas = e.currentTarget as HTMLElement;
    const rect = canvas.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;

    setWidgets(prev => prev.map(widget => 
      widget.id === selectedWidget
        ? { ...widget, x: Math.max(0, newX), y: Math.max(0, newY) }
        : widget
    ));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <div className="flex-1 p-6">
      <div 
        className="glass-panel h-full holographic-border relative overflow-hidden cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Animated grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(var(--neon-cyan))/0.1] to-transparent animate-pulse"></div>
        </div>
        
        {/* Canvas widgets */}
        {widgets.map((widget) => (
          <div
            key={widget.id}
            className={`absolute glass-panel holographic-border p-3 cursor-move transition-all duration-200
                       ${selectedWidget === widget.id 
                         ? 'border-[rgb(var(--neon-orange))] neon-glow-orange scale-105 z-20' 
                         : 'hover:border-[rgb(var(--neon-cyan))] hover:scale-102 z-10'
                       }`}
            style={{
              left: widget.x,
              top: widget.y,
              width: widget.width,
              height: widget.height
            }}
            onMouseDown={(e) => handleMouseDown(e, widget.id)}
          >
            <div className={`text-[rgb(var(--${widget.color}))] text-xs font-bold mb-2 flex items-center justify-between`}>
              {widget.name}
              {selectedWidget === widget.id && (
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-[rgb(var(--neon-orange))] rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-[rgb(var(--neon-orange))] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-[rgb(var(--neon-orange))] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              )}
            </div>
            
            <div className="text-center text-muted-foreground text-xs flex-1 flex items-center justify-center">
              <div>
                <div className="mb-2">
                  {widget.type === 'surveillance' ? '📡' : '⚡'}
                </div>
                <div>LIVE DATA FEED</div>
                <div className="mt-1 text-[rgb(var(--neon-green))] text-xs animate-pulse">
                  ● ACTIVE
                </div>
              </div>
            </div>
            
            {/* Resize handle */}
            {selectedWidget === widget.id && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[rgb(var(--neon-orange))] opacity-50 cursor-se-resize"></div>
            )}
          </div>
        ))}
        
        {/* Canvas info */}
        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground flex items-center space-x-4">
          <span>CANVAS: 1,920x1,080</span>
          <span>ZOOM: 40%</span>
          <span className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[rgb(var(--neon-green))] animate-pulse"></div>
            <span>WIDGETS: {widgets.length}</span>
          </span>
        </div>
        
        {/* Selection indicator */}
        {selectedWidget && (
          <div className="absolute top-4 right-4 glass-panel p-2 border border-[rgb(var(--neon-orange))]">
            <div className="text-[rgb(var(--neon-orange))] text-xs font-bold">
              SELECTED: {widgets.find(w => w.id === selectedWidget)?.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignCanvas;
