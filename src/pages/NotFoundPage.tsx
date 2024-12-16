import React from 'react';
import { Wine } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Wine className="h-24 w-24 text-[#722F37]" />
        </div>
        <h1 className="text-6xl font-bold text-[#722F37] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! It seems like this page has been aged a bit too long. Let's get you back to exploring our wonderful vineyards.
        </p>
        <div className="space-y-4">
          <Button href="/" size="lg">
            Return Home
          </Button>
          <div className="flex justify-center gap-4">
            <Button href="/map" variant="outline" size="lg">
              Explore Map
            </Button>
            <Button href="/events" variant="outline" size="lg">
              View Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};