import { Vineyard } from '../types';

export const vineyards: Vineyard[] = [
  {
    id: '1',
    name: 'Winnica Srebrna Góra',
    description: 'The oldest commercial vineyard in Lesser Poland, offering spectacular views of the Vistula River valley.',
    location: {
      lat: 50.0546,
      lng: 19.8952,
      address: 'ul. Księcia Józefa 37, 30-206 Kraków',
      region: 'małopolskie'
    },
    contact: {
      phone: '+48 12 257 13 76',
      email: 'info@winnicasrebrnagora.pl',
      website: 'https://winnicasrebrnagora.pl'
    },
    services: ['Wine Tasting', 'Guided Tours', 'Restaurant', 'Events'],
    wineTypes: ['Riesling', 'Chardonnay', 'Pinot Noir'],
    openingHours: {
      Monday: 'Closed',
      Tuesday: '10:00 - 18:00',
      Wednesday: '10:00 - 18:00',
      Thursday: '10:00 - 18:00',
      Friday: '10:00 - 20:00',
      Saturday: '10:00 - 20:00',
      Sunday: '10:00 - 18:00'
    },
    images: [
      'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0',
      'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6'
    ]
  },
  {
    id: '2',
    name: 'Winnica Miłosz',
    description: 'Family-owned vineyard in the heart of Lubuskie, known for its exceptional white wines and picturesque location.',
    location: {
      lat: 51.9379,
      lng: 15.5063,
      address: 'Łaz 34, 66-008 Świdnica',
      region: 'lubuskie'
    },
    contact: {
      phone: '+48 68 327 45 89',
      email: 'kontakt@winnicamilosz.pl',
      website: 'https://winnicamilosz.pl'
    },
    services: ['Wine Tasting', 'Vineyard Tours', 'Wine School', 'Accommodation'],
    wineTypes: ['Solaris', 'Johanniter', 'Rondo'],
    openingHours: {
      Monday: 'Closed',
      Tuesday: '11:00 - 17:00',
      Wednesday: '11:00 - 17:00',
      Thursday: '11:00 - 17:00',
      Friday: '11:00 - 19:00',
      Saturday: '10:00 - 19:00',
      Sunday: '10:00 - 17:00'
    },
    images: [
      'https://images.unsplash.com/photo-1560493676-04071c5f467b',
      'https://images.unsplash.com/photo-1601045569976-d45819c5591f'
    ]
  },
  {
    id: '3',
    name: 'Winnica Jadwiga',
    description: 'Historic vineyard dating back to the 13th century, revived with modern winemaking techniques while preserving traditional methods.',
    location: {
      lat: 51.1079,
      lng: 16.9383,
      address: 'ul. Winna 10, 55-330 Wrocław',
      region: 'dolnośląskie'
    },
    contact: {
      phone: '+48 71 399 22 33',
      email: 'rezerwacje@winnicajadwiga.pl',
      website: 'https://winnicajadwiga.pl'
    },
    services: ['Wine Tasting', 'Historical Tours', 'Restaurant', 'Events', 'Wine Shop'],
    wineTypes: ['Pinot Gris', 'Gewürztraminer', 'Regent'],
    openingHours: {
      Monday: '12:00 - 18:00',
      Tuesday: '12:00 - 18:00',
      Wednesday: '12:00 - 18:00',
      Thursday: '12:00 - 18:00',
      Friday: '12:00 - 22:00',
      Saturday: '10:00 - 22:00',
      Sunday: '10:00 - 20:00'
    },
    images: [
      'https://images.unsplash.com/photo-1560493676-04071c5f467b',
      'https://images.unsplash.com/photo-1515779122185-2f00f8a33667'
    ]
  },
  {
    id: '4',
    name: 'Winnica Karpacka',
    description: 'Boutique vineyard situated on the sunny slopes of the Carpathian foothills, specializing in organic wine production.',
    location: {
      lat: 49.7833,
      lng: 22.7667,
      address: 'Dworcowa 5, 37-700 Przemyśl',
      region: 'podkarpackie'
    },
    contact: {
      phone: '+48 16 678 90 12',
      email: 'info@winnicakarpacka.pl',
      website: 'https://winnicakarpacka.pl'
    },
    services: ['Organic Wine Tasting', 'Eco Tours', 'Workshops', 'Farm-to-Table Restaurant'],
    wineTypes: ['Hibernal', 'Seyval Blanc', 'Zweigelt'],
    openingHours: {
      Monday: 'Closed',
      Tuesday: '10:00 - 17:00',
      Wednesday: '10:00 - 17:00',
      Thursday: '10:00 - 17:00',
      Friday: '10:00 - 19:00',
      Saturday: '09:00 - 19:00',
      Sunday: '09:00 - 17:00'
    },
    images: [
      'https://images.unsplash.com/photo-1589129140837-67287c22521b',
      'https://images.unsplash.com/photo-1567529692333-de9fd6772897'
    ]
  }
];