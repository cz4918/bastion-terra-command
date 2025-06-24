
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import TabNavigation from '@/components/Layout/TabNavigation';
import LifeSupportModule from '@/components/LifeSupport/LifeSupportModule';
import MissionsModule from '@/components/Missions/MissionsModule';
import CommsModule from '@/components/Comms/CommsModule';

const Index = () => {
  const [activeTab, setActiveTab] = useState('life-support');

  const renderActiveModule = () => {
    switch (activeTab) {
      case 'life-support':
        return <LifeSupportModule />;
      case 'missions':
        return <MissionsModule />;
      case 'comms':
        return <CommsModule />;
      default:
        return <LifeSupportModule />;
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--space-black))] text-foreground">
      <Header />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="h-[calc(100vh-120px)]">
        {renderActiveModule()}
      </main>
    </div>
  );
};

export default Index;
