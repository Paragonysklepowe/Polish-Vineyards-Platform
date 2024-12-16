import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import { MapPin, Clock, Phone } from 'lucide-react';
import type { Vineyard } from '../../types';
import { getCurrentDayName } from '../../utils/dateUtils';

interface VineyardMapPopupProps {
  vineyard: Vineyard;
  onClose: () => void;
}

export const VineyardMapPopup: React.FC<VineyardMapPopupProps> = ({ vineyard, onClose }) => {
  const today = getCurrentDayName();

  return (
    <InfoWindow
      position={{
        lat: vineyard.location.lat,
        lng: vineyard.location.lng,
      }}
      onCloseClick={onClose}
    >
      <div className="max-w-sm">
        <img
          src={vineyard.images[0]}
          alt={vineyard.name}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#722F37] mb-2">{vineyard.name}</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span>{vineyard.location.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-600" />
              <span>Today: {vineyard.openingHours[today]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-gray-600" />
              <span>{vineyard.contact.phone}</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {vineyard.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2 py-1 bg-[#F7E7CE] text-[#8B4513] rounded-full text-xs"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};