import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { getCurrentDayName } from '../../utils/dateUtils';
import type { Vineyard } from '../../types';

interface VineyardInfoProps {
  vineyard: Vineyard;
}

export const VineyardInfo: React.FC<VineyardInfoProps> = ({ vineyard }) => {
  const today = getCurrentDayName();
  
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 text-gray-600">
        <MapPin className="h-4 w-4" />
        <span>{vineyard.location.address}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600">
        <Clock className="h-4 w-4" />
        <span>Today: {vineyard.openingHours[today]}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600">
        <Phone className="h-4 w-4" />
        <span>{vineyard.contact.phone}</span>
      </div>
    </div>
  );
};