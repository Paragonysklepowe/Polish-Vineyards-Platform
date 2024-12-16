import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import type { Vineyard } from '../../types';
import { VineyardMapPopup } from './VineyardMapPopup';

interface VineyardMapProps {
  vineyards: Vineyard[];
}

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 52.0693,
  lng: 19.4803, // Center of Poland
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      featureType: 'poi.business',
      stylers: [{ visibility: 'off' }],
    },
  ],
};

export const VineyardMap: React.FC<VineyardMapProps> = ({ vineyards }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  });
  const [selectedVineyard, setSelectedVineyard] = React.useState<Vineyard | null>(null);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={center}
        options={options}
      >
        {vineyards.map((vineyard) => (
          <MarkerF
            key={vineyard.id}
            position={{
              lat: vineyard.location.lat,
              lng: vineyard.location.lng,
            }}
            onClick={() => setSelectedVineyard(vineyard)}
            icon={{
              url: '/marker.svg',
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}
        
        {selectedVineyard && (
          <VineyardMapPopup
            vineyard={selectedVineyard}
            onClose={() => setSelectedVineyard(null)}
          />
        )}
      </GoogleMap>
    </div>
  );
};