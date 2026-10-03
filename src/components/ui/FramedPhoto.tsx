import React from 'react';
import type { VenueImage } from '../../types/content';

interface FramedPhotoProps {
  image: VenueImage;
  /** Sizing for the frame, e.g. "aspect-[4/3]" or "h-full w-full". */
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

/**
 * Fills a fixed-shape frame with a photo.
 * Real photos are shown whole (object-contain) over a soft blurred copy,
 * so they are never cropped or stretched. Sample images fill the frame.
 */
export function FramedPhoto({ image, className = '', imgClassName = '', priority = false }: FramedPhotoProps) {
  const fit = image.fit ?? (image.isSample ? 'cover' : 'contain');

  return (
    <div className={`relative overflow-hidden bg-mossdeep ${className}`}>
      {fit === 'contain' &&
      <img
        src={image.src}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full scale-125 object-cover opacity-80 blur-2xl ${imgClassName}`} />

      }
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`absolute inset-0 h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} ${imgClassName}`} />
      
    </div>);

}