import React from 'react';
import { Activity, Users, Calendar, Wine } from 'lucide-react';
import { DashboardLayout } from '../../components/admin/layout/DashboardLayout';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Users',
      value: '2,851',
      change: '+4.75%',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      name: 'Active Events',
      value: '42',
      change: '+54.02%',
      changeType: 'positive' as const,
      icon: Calendar,
    },
    {
      name: 'Registered Vineyards',
      value: '156',
      change: '+12.30%',
      changeType: 'positive' as const,
      icon: Wine,
    },
    {
      name: 'Monthly Visitors',
      value: '12,545',
      change: '-3.24%',
      changeType: 'negative' as const,
      icon: Activity,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="mt-2 text-sm text-gray-700">
            Monitor key metrics and manage your vineyard platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-[#722F37]" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                        <div
                          className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Add charts and additional dashboard widgets here */}
        </div>
      </div>
    </DashboardLayout>
  );
};