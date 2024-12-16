import { Event } from '../types/events';

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function isEventFull(event: Event): boolean {
  return event.attendees.registered >= event.attendees.capacity;
}

export function sortEventsByDate(events: Event[]): Event[] {
  return [...events].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
}

export function filterUpcomingEvents(events: Event[]): Event[] {
  const now = new Date().getTime();
  return events.filter(event => new Date(event.startDate).getTime() > now);
}