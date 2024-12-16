import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import type { Vineyard } from '../types';

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
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{vineyard.location.address}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Today: {vineyard.openingHours[new Date().toLocaleString('en-US', { weekday: 'Monday' })]}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span>{vineyard.contact.phone}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {vineyard.services.map((service) => (
            <span
              key={service}
              className="px-3 py-1 bg-[#F7E7CE] text-[#8B4513] rounded-full text-sm"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};