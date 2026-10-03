import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import type { EventCategory } from '../../types/content';
import { getImage } from '../../utils/images';
import { FramedPhoto } from '../ui/FramedPhoto';
import { PlaceholderBadge } from '../ui/Placeholder';

interface EventTileProps {
  event: EventCategory;
  featured?: boolean;
}

/** Image-led tile for the home page event mosaic. */
export function EventTile({ event, featured = false }: EventTileProps) {
  const image = getImage(event.imageId);
  return (
    <Link
      to={`/events#${event.slug}`}
      className="group relative block h-full overflow-hidden rounded-2xl transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(38,51,31,0.6)]">
      
      <FramedPhoto
        image={image}
        className={`h-full w-full ${featured ? 'aspect-[4/5] lg:aspect-auto' : 'aspect-[4/3] lg:aspect-auto'}`}
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
      
      <div className="absolute inset-0 bg-mossdeep/20 transition-colors duration-300 group-hover:bg-mossdeep/30" aria-hidden="true" />
      {image.isSample &&
      <div className="absolute left-4 top-4">
          <PlaceholderBadge label="Sample photo" tone="dark" />
        </div>
      }
      <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-4 rounded-xl bg-mossdeep/75 p-5 backdrop-blur-md md:p-6">
        <div>
          <h3 className={`font-display leading-tight text-surface ${featured ? 'text-4xl md:text-5xl' : 'text-[26px]'}`}>
            {event.title}
          </h3>
          {featured && <p className="mt-2 max-w-sm text-sand">{event.summary}</p>}
        </div>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-mossdeep transition-transform duration-300 ease-out group-hover:rotate-45">
          <ArrowUpRightIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </Link>);

}