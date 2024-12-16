import React, { useState } from 'react';
import { Download, FileText, Database, Image } from 'lucide-react';
import { Button } from '../../common/Button';

interface DataCategory {
  id: string;
  label: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  selected: boolean;
}

export const DataDownload: React.FC = () => {
  const [categories, setCategories] = useState<DataCategory[]>([
    {
      id: 'profile',
      label: 'Profile Information',
      description: 'Your account details, preferences, and settings',
      icon: FileText,
      selected: true,
    },
    {
      id: 'activity',
      label: 'Activity History',
      description: 'Your interactions, reviews, and comments',
      icon: Database,
      selected: true,
    },
    {
      id: 'media',
      label: 'Media Content',
      description: 'Photos and videos you uploaded',
      icon: Image,
      selected: true,
    },
  ]);

  const [format, setFormat] = useState<'json' | 'csv'>('json');
  const [isRequesting, setIsRequesting] = useState(false);

  const handleToggleCategory = (id: string) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === id ? { ...cat, selected: !cat.selected } : cat
      )
    );
  };

  const handleDownload = async () => {
    setIsRequesting(true);
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRequesting(false);
    // In a real app, this would trigger the data export process
  };

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Download Your Data</h2>
        <p className="text-gray-600">
          Select the data you'd like to download. The export will be prepared and sent to your email
          address when ready.
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Icon className="h-6 w-6 text-[#722F37]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <label htmlFor={category.id} className="font-medium text-gray-900">
                    {category.label}
                  </label>
                  <input
                    type="checkbox"
                    id={category.id}
                    checked={category.selected}
                    onChange={() => handleToggleCategory(category.id)}
                    className="h-4 w-4 rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Export Format
        </label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="json"
              checked={format === 'json'}
              onChange={(e) => setFormat(e.target.value as 'json')}
              className="h-4 w-4 border-gray-300 text-[#722F37] focus:ring-[#722F37]"
            />
            <span className="ml-2 text-sm text-gray-600">JSON</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="csv"
              checked={format === 'csv'}
              onChange={(e) => setFormat(e.target.value as 'csv')}
              className="h-4 w-4 border-gray-300 text-[#722F37] focus:ring-[#722F37]"
            />
            <span className="ml-2 text-sm text-gray-600">CSV</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleDownload}
          disabled={isRequesting || !categories.some(cat => cat.selected)}
        >
          <Download className="h-4 w-4 mr-2" />
          {isRequesting ? 'Preparing Download...' : 'Request Download'}
        </Button>
      </div>
    </div>
  );
};