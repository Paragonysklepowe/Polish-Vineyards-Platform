import React from 'react';
import type { Vineyard } from '../../types';

interface VineyardServicesProps {
  services: Vineyard['services'];
}

export const VineyardServices: React.FC<VineyardServicesProps> = ({ services }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {services.map((service) => (
        <span
          key={service}
          className="px-3 py-1 bg-[#F7E7CE] text-[#8B4513] rounded-full text-sm"
        >
          {service}
        </span>
      ))}
    </div>
  );
};