/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  slug: string;
  name: string;
  category: string; // Sofas & Seating, Bedroom, Dining, Office, Accent & Décor, Full Packages
  categoryKey: string; // sofas, bedroom, dining, office, accent, packages
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'BEST SELLER' | 'NEW' | 'SALE' | 'POPULAR';
  soldCount?: number;
  description: string;
  specs: Record<string, string>;
  colors: string[];
  images: string[];
  inStock: boolean;
  roomType: 'Living Room' | 'Bedroom' | 'Dining Room' | 'Home Office' | 'Commercial';
  productType: 'Individual' | 'Sets' | 'Packages';
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  beforeImage: string;
  type: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  featured: boolean;
  avatar: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}
