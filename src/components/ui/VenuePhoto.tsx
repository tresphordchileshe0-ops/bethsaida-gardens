import React from 'react';
import type { VenueImage } from '../../types/content';
import { PlaceholderBadge } from './Placeholder';

interface VenuePhotoProps {
  image: VenueImage;
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
}

/** Shows a photo at its natural proportions — never cropped or stretched. */
export function VenuePhoto({ image, className = '', priority = false, showCaption = false }: VenuePhotoProps) {
  return (
    <figure className={`relative ${className}`}>
      <div className="overflow-hidden rounded-lg bg-sand">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="block h-auto w-full"
          style={{ aspectRatio: `${image.width} / ${image.height}` }} />
        
      </div>
      {image.isSample &&
      <div className="absolute left-3 top-3">
          <PlaceholderBadge label="Sample photo" />
        </div>
      }
      {showCaption && <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>}
    </figure>);

}