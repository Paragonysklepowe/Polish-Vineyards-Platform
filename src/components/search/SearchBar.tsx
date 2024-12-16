import React, { useState, useCallback } from 'react';
import { Search as SearchIcon, X, History } from 'lucide-react';
import { useSearchHistory } from '../../hooks/useSearchHistory';
import { useDebounce } from '../../hooks/useDebounce';
import { cn } from '../../utils/cn';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search vineyards, wines, or events...',
  className,
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { searchHistory, addToHistory, clearHistory } = useSearchHistory();
  
  const debouncedSearch = useDebounce((value: string) => {
    onSearch(value);
    if (value.trim()) {
      addToHistory(value);
    }
  }, 300);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  }, [debouncedSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#722F37] focus:border-transparent"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {isFocused && searchHistory.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center justify-between p-2 border-b border-gray-200">
            <span className="text-sm text-gray-600 flex items-center">
              <History className="h-4 w-4 mr-1" />
              Recent Searches
            </span>
            <button
              onClick={clearHistory}
              className="text-xs text-[#722F37] hover:text-[#8B4513]"
            >
              Clear All
            </button>
          </div>
          <ul className="max-h-60 overflow-auto">
            {searchHistory.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setQuery(item);
                    onSearch(item);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};