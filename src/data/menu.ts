import type { Wine, TastingExperience, FoodItem } from '../types/menu';

export const wines: Wine[] = [
  {
    id: '1',
    name: 'Srebrna Góra Riesling',
    description: 'Elegant white wine with notes of citrus, green apple, and mineral undertones',
    price: 180,
    glassPrice: 30,
    vintage: '2022',
    region: 'małopolskie',
    varietal: 'Riesling',
    featured: true
  },
  {
    id: '2',
    name: 'Estate Chardonnay',
    description: 'Full-bodied white wine with balanced oak and tropical fruit notes',
    price: 160,
    glassPrice: 28,
    vintage: '2021',
    region: 'małopolskie',
    varietal: 'Chardonnay'
  },
  {
    id: '3',
    name: 'Pinot Noir Reserve',
    description: 'Delicate red wine with cherry, raspberry, and subtle earthy notes',
    price: 220,
    glassPrice: 38,
    vintage: '2020',
    region: 'małopolskie',
    varietal: 'Pinot Noir',
    seasonal: true,
    availability: 'Limited Release'
  }
];

export const tastings: TastingExperience[] = [
  {
    id: '1',
    name: 'Premium Wine Tasting',
    description: 'Experience our finest wines with expert guidance from our sommelier',
    price: 150,
    duration: '90 minutes',
    includes: [
      '5 premium wines',
      'Artisanal cheese plate',
      'Vineyard history presentation',
      'Tasting notes booklet'
    ],
    maxParticipants: 8,
    featured: true
  },
  {
    id: '2',
    name: 'Wine & Food Pairing',
    description: 'Learn the art of food and wine pairing with our chef and sommelier',
    price: 250,
    duration: '120 minutes',
    includes: [
      '4 wines with paired dishes',
      'Cooking demonstration',
      'Recipe collection',
      'Pairing guide'
    ],
    maxParticipants: 12
  },
  {
    id: '3',
    name: 'Harvest Experience',
    description: 'Join us for grape picking and wine making experience',
    price: 'From 300',
    duration: '4 hours',
    includes: [
      'Harvest participation',
      'Traditional lunch',
      'Wine tasting',
      'Take-home bottle'
    ],
    maxParticipants: 20,
    seasonal: true,
    availability: 'September - October'
  }
];

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Charcuterie Board',
    description: 'Selection of local cured meats, cheeses, fruits, and house-made preserves',
    price: 89,
    category: 'starter',
    portion: 'Serves 2-3',
    pairings: ['Riesling', 'Chardonnay'],
    allergens: ['Dairy', 'Nuts']
  },
  {
    id: '2',
    name: 'Roasted Beet Salad',
    description: 'Local beets, goat cheese, walnuts, and honey vinaigrette',
    price: 45,
    category: 'starter',
    dietary: ['Vegetarian', 'Gluten-Free'],
    allergens: ['Dairy', 'Nuts'],
    seasonal: true,
    availability: 'Spring - Summer'
  },
  {
    id: '3',
    name: 'Duck Breast',
    description: 'Pan-seared duck with cherry sauce, roasted vegetables, and potato puree',
    price: 110,
    category: 'main',
    pairings: ['Pinot Noir'],
    allergens: ['Dairy'],
    featured: true
  },
  {
    id: '4',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice with local wild mushrooms, parmesan, and truffle oil',
    price: 85,
    category: 'main',
    dietary: ['Vegetarian', 'Gluten-Free'],
    allergens: ['Dairy'],
    seasonal: true,
    availability: 'Autumn'
  }
];