export interface Vineyard {
  id: string;
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    region: string;
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  services: string[];
  wineTypes: string[];
  openingHours: {
    [key: string]: string;
  };
  images: string[];
}

export type Region = 'małopolskie' | 'lubuskie' | 'dolnośląskie' | 'podkarpackie';