import React from 'react';
import { MaximizeIcon } from 'lucide-react';
import type { VenueImage } from '../../types/content';
import { PlaceholderBadge } from '../ui/Placeholder';
import { RevealGroup, RevealItem } from '../ui/Reveal';

interface GalleryGridProps {
  images: VenueImage[];
  onOpen?: (index: number) => void;
}

/** Masonry layout — every photo keeps its natural proportions. */
export function GalleryGrid({ images, onOpen }: GalleryGridProps) {
  return (
    <RevealGroup as="ul" className="columns-1 gap-6 sm:columns-2 lg:columns-3" stagger={0.07}>
      {images.map((img, i) =>
      <RevealItem as="li" key={img.id} className="mb-6 break-inside-avoid">
          <figure className="group relative">
            <button
            type="button"
            onClick={() => onOpen?.(i)}
            disabled={!onOpen}
            className="relative block w-full overflow-hidden rounded-xl bg-sand text-left transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(38,51,31,0.55)] disabled:cursor-default"
            aria-label={onOpen ? `View larger: ${img.caption}` : undefined}>
            
              <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              style={{ aspectRatio: `${img.width} / ${img.height}` }} />
            
              <span className="absolute inset-0 bg-mossdeep/0 transition-colors duration-300 group-hover:bg-mossdeep/15" aria-hidden="true" />
              {onOpen &&
            <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-surface text-ink opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100">
                  <MaximizeIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
            }
            </button>
            {img.isSample &&
          <div className="pointer-events-none absolute left-3 top-3">
                <PlaceholderBadge label="Sample photo" />
              </div>
          }
            <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
              <span className="font-display text-lg italic text-ink">{img.caption}</span>
              <span className="text-xs">{img.category}</span>
            </figcaption>
          </figure>
        </RevealItem>
      )}
    </RevealGroup>);

}