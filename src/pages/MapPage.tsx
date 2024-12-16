import React from 'react';
import { VineyardMap } from '../components/map/VineyardMap';
import { vineyards } from '../data/vineyards';

export const MapPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-[#722F37] mb-6">
        Explore Polish Vineyards
      </h2>
      <VineyardMap vineyards={vineyards} />
    </div>
  );
};