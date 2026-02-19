
import { Photographer, Category } from '../types';

export const PHOTOGRAPHERS: Photographer[] = [
  {
    id: '1',
    name: 'Elena Vance',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=600&q=80',
    city: 'New York',
    rating: 4.9,
    reviewCount: 128,
    startingPrice: 150,
    tagline: 'Capturing the raw essence of city life and intimate portraits.',
    bio: 'I am a documentary and portrait photographer based in NYC. My work focuses on the intersection of architecture and human emotion. With 8 years of experience, I know the hidden gems of Manhattan that provide the perfect backdrop for your story.',
    categories: [Category.Portrait, Category.Travel, Category.Brand],
    portfolio: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&h=800&q=80'
    ]
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&h=600&q=80',
    city: 'Paris',
    rating: 5.0,
    reviewCount: 84,
    startingPrice: 200,
    tagline: 'Cinematic travel photography across the streets of Europe.',
    bio: 'Former film director turned photographer. I specialize in cinematic, high-contrast imagery that makes your vacation look like a movie scene.',
    categories: [Category.Travel, Category.Couples, Category.Events],
    portfolio: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=600&h=800&q=80',
    ]
  },
  {
    id: '3',
    name: 'Sofia Chen',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?auto=format&fit=crop&w=1200&h=600&q=80',
    city: 'San Francisco',
    rating: 4.8,
    reviewCount: 210,
    startingPrice: 120,
    tagline: 'Natural light enthusiast focusing on family and lifestyle stories.',
    bio: 'I believe the best photos happen when you forget the camera is there. Specializing in family sessions at Golden Gate Park and lifestyle brand shoots.',
    categories: [Category.Family, Category.Portrait, Category.Brand],
    portfolio: [
      'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?auto=format&fit=crop&w=600&h=800&q=80',
    ]
  },
  {
    id: '4',
    name: 'Julian Rose',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=300&h=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&h=600&q=80',
    city: 'London',
    rating: 4.9,
    reviewCount: 56,
    startingPrice: 180,
    tagline: 'Minimalist aesthetic for modern brands and creators.',
    bio: 'London-based commercial photographer. Clean lines, high key lighting, and a focus on detail. I help brands stand out in a crowded digital space.',
    categories: [Category.Brand, Category.Portrait],
    portfolio: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&h=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&h=800&q=80'
    ]
  }
];

export const CATEGORIES = Object.values(Category);
