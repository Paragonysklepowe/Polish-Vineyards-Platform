import { Vineyard } from './index';

export type EventCategory = 'tasting' | 'workshop' | 'tour' | 'festival' | 'private' | 'seasonal';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  category: EventCategory;
  vineyard: Vineyard;
  location: {
    type: 'physical' | 'virtual';
    address?: string;
    meetingLink?: string;
  };
  attendees: {
    capacity: number;
    registered: number;
  };
  prerequisites: string[];
  rsvp: {
    required: boolean;
    deadline?: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    endDate: string;
  };
}