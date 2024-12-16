import React from 'react';
import { Activity, Shield, Users, Server } from 'lucide-react';

interface ProcessingActivity {
  id: string;
  category: string;
  purpose: string;
  dataTypes: string[];
  retention: string;
  legalBasis: string;
  icon: React.FC<{ className?: string }>;
}

const activities: ProcessingActivity[] = [
  {
    id: '1',
    category: 'Account Management',
    purpose: 'To maintain and manage user accounts',
    dataTypes: ['Email', 'Name', 'Password', 'Profile Information'],
    retention: 'Duration of account + 30 days',
    legalBasis: 'Contract Performance',
    icon: Users,
  },
  {
    id: '2',
    category: 'Security',
    purpose: 'To protect user accounts and prevent fraud',
    dataTypes: ['IP Address', 'Device Information', 'Login History'],
    retention: '12 months',
    legalBasis: 'Legitimate Interest',
    icon: Shield,
  },
  {
    id: '3',
    category: 'Analytics',
    purpose: 'To improve our services and user experience',
    dataTypes: ['Usage Data', 'Preferences', 'Behavior Patterns'],
    retention: '24 months',
    legalBasis: 'Consent',
    icon: Activity,
  },
  {
    id: '4',
    category: 'Content Delivery',
    purpose: 'To provide and optimize content delivery',
    dataTypes: ['Browser Type', 'Location', 'Language Preferences'],
    retention: '6 months',
    legalBasis: 'Legitimate Interest',
    icon: Server,
  },
];

export const ProcessingActivities: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Processing Activities</h2>
        <p className="text-gray-600">
          We are committed to transparency in how we process your data. Below is a comprehensive
          overview of our data processing activities.
        </p>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-[#722F37]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {activity.category}
                  </h3>
                  <div className="mt-2 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Purpose</h4>
                      <p className="text-sm text-gray-600">{activity.purpose}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Data Types</h4>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {activity.dataTypes.map((type) => (
                          <span
                            key={type}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#722F37] text-white"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Retention Period</h4>
                        <p className="text-sm text-gray-600">{activity.retention}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Legal Basis</h4>
                        <p className="text-sm text-gray-600">{activity.legalBasis}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};