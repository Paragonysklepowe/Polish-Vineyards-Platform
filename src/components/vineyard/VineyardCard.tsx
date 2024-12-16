import React from 'react';
import type { Vineyard } from '../../types';
import { VineyardInfo } from './VineyardInfo';
import { VineyardServices } from './VineyardServices';

interface VineyardCardProps {
  vineyard: Vineyard;
}

export const VineyardCard: React.FC<VineyardCardProps> = ({ vineyard }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img
          src={vineyard.images[0]}
          alt={vineyard.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#722F37] mb-2">{vineyard.name}</h3>
        <p className="text-gray-600 mb-4">{vineyard.description}</p>
        
        <VineyardInfo vineyard={vineyard} />
        <VineyardServices services={vineyard.services} />
      </div>
    </div>
  );
};