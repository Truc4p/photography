
export interface Photographer {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  city: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  tagline: string;
  bio: string;
  categories: string[];
  portfolio: string[];
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  photoCount: string;
  price: number;
  features: string[];
}

export enum Category {
  Portrait = 'Portrait',
  Couples = 'Couples',
  Travel = 'Travel',
  Family = 'Family',
  Events = 'Events',
  Brand = 'Brand',
}
