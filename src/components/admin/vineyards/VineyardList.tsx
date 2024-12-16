import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import type { VineyardDetails } from '../../../types/vineyard-management';

interface VineyardListProps {
  vineyards: VineyardDetails[];
  onSelect: (vineyard: VineyardDetails) => void;
  onAdd: () => void;
}

export const VineyardList: React.FC<VineyardListProps> = ({
  vineyards,
  onSelect,
  onAdd,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<keyof VineyardDetails>('name');

  const filteredVineyards = vineyards
    .filter((v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.location.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search vineyards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722F37]"
          />
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as keyof VineyardDetails)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#722F37]"
          >
            <option value="name">Sort by Name</option>
            <option value="createdAt">Sort by Date Added</option>
            <option value="updatedAt">Sort by Last Updated</option>
          </select>

          <button
            onClick={onAdd}
            className="flex items-center px-4 py-2 bg-[#722F37] text-white rounded-md hover:bg-[#8B4513] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#722F37]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Vineyard
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredVineyards.map((vineyard) => (
            <li key={vineyard.id}>
              <button
                onClick={() => onSelect(vineyard)}
                className="w-full text-left px-6 py-4 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {vineyard.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {vineyard.location.address}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Size: {vineyard.size.hectares} ha</p>
                    <p>Elevation: {vineyard.location.elevation}m</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};