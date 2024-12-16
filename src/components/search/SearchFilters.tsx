import React from 'react';
import { Filter } from 'lucide-react';
import { Region } from '../../types';

interface SearchFilters {
  dateRange: {
    from: string;
    to: string;
  };
  region: Region | 'all';
  services: string[];
  sortBy: 'relevance' | 'newest' | 'rating';
  isActive: boolean;
}

interface SearchFiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-[#722F37]" />
        <h3 className="font-medium text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Range
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={filters.dateRange.from}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, from: e.target.value },
                })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37] sm:text-sm"
            />
            <input
              type="date"
              value={filters.dateRange.to}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, to: e.target.value },
                })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37] sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Region
          </label>
          <select
            value={filters.region}
            onChange={(e) =>
              onFilterChange({ ...filters, region: e.target.value as Region | 'all' })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37] sm:text-sm"
          >
            <option value="all">All Regions</option>
            <option value="małopolskie">Małopolskie</option>
            <option value="lubuskie">Lubuskie</option>
            <option value="dolnośląskie">Dolnośląskie</option>
            <option value="podkarpackie">Podkarpackie</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Services
          </label>
          <div className="space-y-2">
            {['Wine Tasting', 'Guided Tours', 'Restaurant', 'Accommodation'].map(
              (service) => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.services.includes(service)}
                    onChange={(e) => {
                      const newServices = e.target.checked
                        ? [...filters.services, service]
                        : filters.services.filter((s) => s !== service);
                      onFilterChange({ ...filters, services: newServices });
                    }}
                    className="rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
                  />
                  <span className="ml-2 text-sm text-gray-600">{service}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                sortBy: e.target.value as SearchFilters['sortBy'],
              })
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37] sm:text-sm"
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.isActive}
              onChange={(e) =>
                onFilterChange({ ...filters, isActive: e.target.checked })
              }
              className="rounded border-gray-300 text-[#722F37] focus:ring-[#722F37]"
            />
            <span className="ml-2 text-sm text-gray-600">Active Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};