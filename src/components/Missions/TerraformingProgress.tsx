
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const TerraformingProgress = () => {
  const [isActive, setIsActive] = useState(false);
  const [metrics, setMetrics] = useState([
    { name: 'ATMOSPHERE', value: 0, color: 'neon-magenta', max: 100, rate: 0.3 },
    { name: 'WATER', value: 0, color: 'neon-cyan', max: 100, rate: 0.2 },
    { name: 'VEGETATION', value: 0, color: 'neon-green', max: 100, rate: 0.15 },
    { name: 'STABILITY', value: 0, color: 'neon-orange', max: 100, rate: 0.1 },
  ]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.min(metric.max, metric.value + metric.rate)
      })));
    }, 100);

    return () => clearInterval(interval);
  }, [isActive]);

  const resetProgress = () => {
    setIsActive(false);
    setMetrics(prev => prev.map(metric => ({ ...metric, value: 0 })));
  };

  const getOverallProgress = () => {
    const totalProgress = metrics.reduce((sum, metric) => sum + metric.value, 0);
    return Math.round(totalProgress / metrics.length);
  };

  const getStatusColor = () => {
    const progress = getOverallProgress();
    if (progress < 25) return 'destructive';
    if (progress < 75) return 'neon-orange';
    return 'neon-green';
  };

  return (
    <div className="glass-panel p-6 holographic-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-xl font-bold">XR-49 TERRAFORMING OPERATIONS</h2>
          <div className="text-neon-green text-sm mt-1">PROJECT TERRA</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">MISSION STATUS</span>
            <div className={`w-2 h-2 rounded-full bg-[rgb(var(--${getStatusColor()}))] neon-glow-${getStatusColor().replace('neon-', '')} pulse-glow`}></div>
            <span className={`text-[rgb(var(--${getStatusColor()}))] text-sm font-bold`}>
              {getOverallProgress() < 25 ? 'CRITICAL' : getOverallProgress() < 75 ? 'IN PROGRESS' : 'OPTIMAL'}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`glass-panel px-3 py-2 flex items-center space-x-2 transition-all
                         ${isActive 
                           ? 'text-neon-orange border-[rgb(var(--neon-orange))]' 
                           : 'text-neon-green hover:border-[rgb(var(--neon-green))]'
                         }`}
            >
              {isActive ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-xs font-bold">{isActive ? 'PAUSE' : 'START'}</span>
            </button>
            
            <button
              onClick={resetProgress}
              className="glass-panel px-3 py-2 flex items-center space-x-2 text-neon-cyan hover:border-[rgb(var(--neon-cyan))] transition-all"
            >
              <RotateCcw size={16} />
              <span className="text-xs font-bold">RESET</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="text-center">
            <div className="text-muted-foreground text-xs mb-2">{metric.name}</div>
            <div className={`text-[rgb(var(--${metric.color}))] text-3xl font-bold pulse-glow mb-2 transition-all duration-500`}>
              {Math.round(metric.value)}%
            </div>
            <div className="w-full h-3 bg-[rgb(var(--metal-surface))] rounded-full overflow-hidden relative">
              <div 
                className={`h-full bg-[rgb(var(--${metric.color}))] neon-glow-${metric.color.replace('neon-', '')} rounded-full transition-all duration-300 relative`}
                style={{ width: `${metric.value}%` }}
              >
                {isActive && metric.value < metric.max && (
                  <div className="absolute right-0 top-0 w-1 h-full bg-white animate-pulse"></div>
                )}
              </div>
              
              {/* Graduation marks */}
              <div className="absolute inset-0 flex items-center">
                {[25, 50, 75].map(mark => (
                  <div 
                    key={mark}
                    className="absolute w-px h-full bg-white/30"
                    style={{ left: `${mark}%` }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Rate indicator */}
            <div className="text-xs text-muted-foreground mt-1">
              {isActive ? `+${metric.rate}/s` : 'IDLE'}
            </div>
          </div>
        ))}
      </div>
      
      {/* Overall progress indicator */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">OVERALL TERRAFORMING PROGRESS</span>
          <span className={`text-lg font-bold text-[rgb(var(--${getStatusColor()}))]`}>
            {getOverallProgress()}%
          </span>
        </div>
        <div className="w-full h-2 bg-[rgb(var(--metal-surface))] rounded-full overflow-hidden mt-2">
          <div 
            className={`h-full bg-[rgb(var(--${getStatusColor()}))] rounded-full transition-all duration-1000`}
            style={{ width: `${getOverallProgress()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TerraformingProgress;
