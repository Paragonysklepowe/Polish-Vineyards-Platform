import React from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail } from 'lucide-react';
import { Event } from '../../types/events';
import { formatDate, formatTime, isEventFull } from '../../utils/eventUtils';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isFull = isEventFull(event);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
          getCategoryStyles(event.category)
        }`}>
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </div>
        
        <h3 className="text-xl font-semibold text-[#722F37] mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(event.startDate)}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{formatTime(event.startDate)} - {formatTime(event.endDate)}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{event.location.type === 'physical' ? event.location.address : 'Virtual Event'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="h-4 w-4" />
            <span>{event.attendees.registered} / {event.attendees.capacity} registered</span>
          </div>
        </div>

        {event.prerequisites.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 mb-2">Prerequisites:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {event.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="border-t pt-4 mt-4">
          <h4 className="font-medium text-gray-700 mb-2">Contact Information:</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{event.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{event.contact.email}</span>
            </div>
          </div>
        </div>

        {event.rsvp.required && (
          <div className="mt-4">
            <button
              disabled={isFull}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                isFull
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#722F37] hover:bg-[#8B4513] transition-colors'
              }`}
            >
              {isFull ? 'Event Full' : 'RSVP Now'}
            </button>
            {event.rsvp.deadline && (
              <p className="text-sm text-gray-500 mt-2">
                RSVP deadline: {formatDate(event.rsvp.deadline)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

function getCategoryStyles(category: Event['category']): string {
  const styles = {
    tasting: 'bg-purple-100 text-purple-800',
    workshop: 'bg-blue-100 text-blue-800',
    tour: 'bg-green-100 text-green-800',
    festival: 'bg-yellow-100 text-yellow-800',
    private: 'bg-gray-100 text-gray-800',
    seasonal: 'bg-orange-100 text-orange-800',
  };
  return styles[category];
}