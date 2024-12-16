import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/search/SearchBar';
import { SearchFilters } from '../components/search/SearchFilters';
import { VineyardCard } from '../components/vineyard/VineyardCard';
import { vineyards } from '../data/vineyards';
import type { Region } from '../types';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    dateRange: {
      from: searchParams.get('from') || '',
      to: searchParams.get('to') || '',
    },
    region: (searchParams.get('region') as Region | 'all') || 'all',
    services: searchParams.get('services')?.split(',') || [],
    sortBy: (searchParams.get('sortBy') as 'relevance' | 'newest' | 'rating') || 'relevance',
    isActive: searchParams.get('active') === 'true',
  });

  const handleSearch = (query: string) => {
    setIsLoading(true);
    // Update URL parameters
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    setSearchParams(params);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    const params = new URLSearchParams(searchParams);
    
    // Update URL with filter parameters
    if (newFilters.dateRange.from) params.set('from', newFilters.dateRange.from);
    if (newFilters.dateRange.to) params.set('to', newFilters.dateRange.to);
    if (newFilters.region !== 'all') params.set('region', newFilters.region);
    if (newFilters.services.length) params.set('services', newFilters.services.join(','));
    params.set('sortBy', newFilters.sortBy);
    params.set('active', String(newFilters.isActive));
    
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>

          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#722F37]"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vineyards.map((vineyard) => (
                  <VineyardCard key={vineyard.id} vineyard={vineyard} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};