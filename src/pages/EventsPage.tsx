import React, { useState } from 'react';
import { Calendar as CalendarIcon, Filter } from 'lucide-react';
import { EventCard } from '../components/events/EventCard';
import { events } from '../data/events';
import { Event, EventCategory } from '../types/events';
import { filterUpcomingEvents, sortEventsByDate } from '../utils/eventUtils';

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const [showUpcomingOnly, setShowUpcomingOnly] = useState(true);

  const filteredEvents = events
    .filter(event => !showUpcomingOnly || filterUpcomingEvents([event]).length > 0)
    .filter(event => selectedCategory === 'all' || event.category === selectedCategory);

  const sortedEvents = sortEventsByDate(filteredEvents);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#722F37]">Vineyard Events</h1>
            <p className="text-gray-600 mt-2">
              Discover and join exciting wine events across Poland
            </p>
          </div>
          <CalendarIcon className="h-8 w-8 text-[#722F37]" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as EventCategory | 'all')}
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#722F37]"
            >
              <option value="all">All Categories</option>
              <option value="tasting">Tastings</option>
              <option value="workshop">Workshops</option>
              <option value="tour">Tours</option>
              <option value="festival">Festivals</option>
              <option value="seasonal">Seasonal</option>
              <option value="private">Private Events</option>
            </select>

            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                checked={showUpcomingOnly}
                onChange={(e) => setShowUpcomingOnly(e.target.checked)}
                className="rounded text-[#722F37] focus:ring-[#722F37]"
              />
              <span>Show upcoming events only</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {sortedEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};