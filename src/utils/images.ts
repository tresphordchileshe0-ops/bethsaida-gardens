import { venueImages } from '../data/images';
import type { VenueImage } from '../types/content';

export function getImage(id: string): VenueImage {
  return venueImages.find((img) => img.id === id) ?? venueImages[0];
}