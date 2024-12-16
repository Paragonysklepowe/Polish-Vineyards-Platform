import { useState, useCallback } from 'react';

const MAX_HISTORY_ITEMS = 5;
const STORAGE_KEY = 'search_history';

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const addToHistory = useCallback((query: string) => {
    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item !== query);
      const newHistory = [query, ...filtered].slice(0, MAX_HISTORY_ITEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setSearchHistory([]);
  }, []);

  return { searchHistory, addToHistory, clearHistory };
}