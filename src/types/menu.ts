export type DietaryRestriction = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  featured?: boolean;
  seasonal?: boolean;
  availability?: string;
  allergens?: string[];
  dietary?: DietaryRestriction[];
  portion?: string;
}

export interface Wine extends MenuItem {
  vintage?: string;
  region: string;
  varietal: string;
  glassPrice?: number;
}

export interface TastingExperience extends MenuItem {
  duration: string;
  includes: string[];
  maxParticipants: number;
}

export interface FoodItem extends MenuItem {
  category: 'starter' | 'main' | 'dessert';
  pairings?: string[];
}