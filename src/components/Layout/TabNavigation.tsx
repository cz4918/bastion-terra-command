import React from 'react';
import { Shield, Plane, Grid } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: 'life-support', label: 'LIFE SUPPORT', icon: Shield },
    { id: 'missions', label: 'XR-49 MISSIONS', icon: Plane },
    { id: 'comms', label: 'COMMS CENTRE', icon: Grid },
  ];

  return (
    <nav className="glass-panel border-b border-border/50">
      <div className="flex">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center space-x-2 px-8 py-4 font-mono text-sm font-bold tracking-wide
                transition-all duration-200 relative
                ${isActive 
                  ? 'text-neon-cyan bg-[rgb(var(--neon-cyan))/0.1] border-b-2 border-[rgb(var(--neon-cyan))]' 
                  : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }
              `}
            >
              <IconComponent size={16} className={isActive ? 'neon-glow-cyan' : ''} />
              <span className={isActive ? 'pulse-glow' : ''}>{tab.label}</span>
              
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[rgb(var(--neon-cyan))] neon-glow-cyan"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TabNavigation;
