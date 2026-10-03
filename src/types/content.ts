import type { LucideIcon } from 'lucide-react';

export type GalleryCategory = 'Gardens' | 'Pool' | 'Events' | 'Décor' | 'Evenings';

export interface VenueImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  category: GalleryCategory;
  isSample: boolean;
  /** Optional override. Defaults: real photos 'contain' (never cropped), samples 'cover'. */
  fit?: 'cover' | 'contain';
}

export interface EventCategory {
  slug: string;
  title: string;
  summary: string;
  details: string;
  imageId: string;
  idealFor: string[];
}

export interface Facility {
  icon: LucideIcon;
  title: string;
  description: string;
  confirmed: boolean;
}

export interface ServicePackage {
  title: string;
  description: string;
  includes: string[];
  pricing: string;
}