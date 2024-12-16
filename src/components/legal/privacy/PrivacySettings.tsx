import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '../../common/Button';

interface PrivacyPreference {
  id: string;
  label: string;
  description: string;
  value: boolean;
}

export const PrivacySettings: React.FC = () => {
  const [preferences, setPreferences] = useState<PrivacyPreference[]>([
    {
      id: 'marketing',
      label: 'Marketing Communications',
      description: 'Receive updates about new vineyards, events, and special offers',
      value: true,
    },
    {
      id: 'analytics',
      label: 'Analytics',
      description: 'Help us improve our services by collecting anonymous usage data',
      value: true,
    },
    {
      id: 'thirdParty',
      label: 'Third-Party Sharing',
      description: 'Share data with trusted partners to enhance your experience',
      value: false,
    },
    {
      id: 'location',
      label: 'Location Services',
      description: 'Use your location to show nearby vineyards and events',
      value: true,
    },
  ]);

  const handleToggle = (id: string) => {
    setPreferences(prev =>
      prev.map(pref =>
        pref.id === id ? { ...pref, value: !pref.value } : pref
      )
    );
  };

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log('Saving preferences:', preferences);
  };

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy Settings</h2>
        <p className="text-gray-600">
          Control how your data is collected and used. Your privacy choices will be saved
          automatically and you can change them at any time.
        </p>
      </div>

      <div className="space-y-4">
        {preferences.map((pref) => (
          <div
            key={pref.id}
            className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex-1 pr-4">
              <label htmlFor={pref.id} className="font-medium text-gray-900">
                {pref.label}
              </label>
              <p className="text-sm text-gray-500 mt-1">{pref.description}</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id={pref.id}
                checked={pref.value}
                onChange={() => handleToggle(pref.id)}
                className="h-4 w-4 rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Preferences
        </Button>
      </div>
    </div>
  );
};