import React, { useState } from 'react';
import { Shield, Download, Trash2, Settings, Eye, Clock } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { PrivacySettings } from '../../components/legal/privacy/PrivacySettings';
import { DataDownload } from '../../components/legal/privacy/DataDownload';
import { DataDeletion } from '../../components/legal/privacy/DataDeletion';
import { ProcessingActivities } from '../../components/legal/privacy/ProcessingActivities';

type Tab = 'settings' | 'download' | 'deletion' | 'activities';

export const PrivacyCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('settings');

  const tabs = [
    { id: 'settings', label: 'Privacy Settings', icon: Settings },
    { id: 'download', label: 'Download Data', icon: Download },
    { id: 'deletion', label: 'Data Deletion', icon: Trash2 },
    { id: 'activities', label: 'Processing Activities', icon: Clock },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-[#722F37] mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Center</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b">
              <nav className="flex space-x-4 p-4" aria-label="Privacy Center Navigation">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                      activeTab === id
                        ? 'bg-[#722F37] text-white'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'settings' && <PrivacySettings />}
              {activeTab === 'download' && <DataDownload />}
              {activeTab === 'deletion' && <DataDeletion />}
              {activeTab === 'activities' && <ProcessingActivities />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};