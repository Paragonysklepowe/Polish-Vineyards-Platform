import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieConsent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsOpen(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      ...prefs,
      timestamp: new Date().toISOString(),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-6">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <p className="text-gray-700">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                <Link to="/legal/cookie-policy" className="text-[#722F37] hover:underline ml-1">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-[#722F37] text-white rounded-md hover:bg-[#8B4513]"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Necessary Cookies</p>
                  <p className="text-sm text-gray-500">Required for the website to function properly</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Analytics Cookies</p>
                  <p className="text-sm text-gray-500">Help us improve our website</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Cookies</p>
                  <p className="text-sm text-gray-500">Used for targeted advertising</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-[#722F37] text-white rounded-md hover:bg-[#8B4513]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};