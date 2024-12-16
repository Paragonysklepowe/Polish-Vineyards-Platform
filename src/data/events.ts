import { Event } from '../types/events';
import { vineyards } from './vineyards';

export const events: Event[] = [
  {
    id: '1',
    title: 'Summer Wine Tasting Festival',
    description: 'Join us for our annual summer wine tasting festival featuring local and international wines.',
    startDate: '2024-07-15T14:00:00Z',
    endDate: '2024-07-15T20:00:00Z',
    category: 'festival',
    vineyard: vineyards[0],
    location: {
      type: 'physical',
      address: vineyards[0].location.address,
    },
    attendees: {
      capacity: 100,
      registered: 45,
    },
    prerequisites: [
      'Must be 18 or older',
      'Bring valid ID',
      'Comfortable walking shoes recommended',
    ],
    rsvp: {
      required: true,
      deadline: '2024-07-10T00:00:00Z',
    },
    contact: {
      name: 'Maria Kowalska',
      email: 'events@winnicasrebrnagora.pl',
      phone: vineyards[0].contact.phone,
    },
  },
  {
    id: '2',
    title: 'Wine Making Workshop',
    description: 'Learn the basics of wine making in this hands-on workshop.',
    startDate: '2024-06-20T10:00:00Z',
    endDate: '2024-06-20T16:00:00Z',
    category: 'workshop',
    vineyard: vineyards[1],
    location: {
      type: 'physical',
      address: vineyards[1].location.address,
    },
    attendees: {
      capacity: 20,
      registered: 12,
    },
    prerequisites: [
      'Must be 18 or older',
      'No experience necessary',
      'Lunch included',
    ],
    rsvp: {
      required: true,
      deadline: '2024-06-15T00:00:00Z',
    },
    contact: {
      name: 'Jan Nowak',
      email: 'workshops@winnicamilosz.pl',
      phone: vineyards[1].contact.phone,
    },
  },
  {
    id: '3',
    title: 'Weekly Wine Tasting',
    description: 'Join our sommelier for a guided tasting of our finest wines.',
    startDate: '2024-06-01T18:00:00Z',
    endDate: '2024-06-01T20:00:00Z',
    category: 'tasting',
    vineyard: vineyards[2],
    location: {
      type: 'physical',
      address: vineyards[2].location.address,
    },
    attendees: {
      capacity: 30,
      registered: 0,
    },
    prerequisites: [
      'Must be 18 or older',
      'Bring valid ID',
    ],
    rsvp: {
      required: true,
    },
    contact: {
      name: 'Anna Wiśniewska',
      email: 'tastings@winnicajadwiga.pl',
      phone: vineyards[2].contact.phone,
    },
    recurring: {
      frequency: 'weekly',
      endDate: '2024-12-31T00:00:00Z',
    },
  },
];