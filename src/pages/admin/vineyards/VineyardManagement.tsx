import React, { useState } from 'react';
import { DashboardLayout } from '../../../components/admin/layout/DashboardLayout';
import { VineyardList } from '../../../components/admin/vineyards/VineyardList';
import { VineyardForm } from '../../../components/admin/vineyards/VineyardForm';
import type { VineyardDetails } from '../../../types/vineyard-management';

export const VineyardManagement: React.FC = () => {
  const [selectedVineyard, setSelectedVineyard] = useState<VineyardDetails | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleSubmit = async (data: VineyardDetails) => {
    // In a real app, send to server
    console.log('Saving vineyard:', data);
    // Reset form state
    setSelectedVineyard(null);
    setIsAddingNew(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isAddingNew ? 'Add New Vineyard' : selectedVineyard ? 'Edit Vineyard' : 'Vineyard Management'}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your vineyard details, including location, size, and soil characteristics.
          </p>
        </div>

        {!selectedVineyard && !isAddingNew ? (
          <VineyardList
            vineyards={[]} // In a real app, fetch from server
            onSelect={setSelectedVineyard}
            onAdd={() => setIsAddingNew(true)}
          />
        ) : (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <VineyardForm
              vineyard={selectedVineyard || undefined}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};