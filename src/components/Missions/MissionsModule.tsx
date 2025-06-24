
import React from 'react';
import TerraformingProgress from './TerraformingProgress';
import PlanetView from './PlanetView';
import TerraformingDirectives from './TerraformingDirectives';

const MissionsModule = () => {
  return (
    <div className="p-6 space-y-6 scanlines">
      <TerraformingProgress />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlanetView />
        <TerraformingDirectives />
      </div>
    </div>
  );
};

export default MissionsModule;
