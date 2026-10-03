import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { EventCategory } from '../../types/content';
import { getImage } from '../../utils/images';
import { FramedPhoto } from '../ui/FramedPhoto';
import { EditableText, PlaceholderBadge } from '../ui/Placeholder';

interface EventCardProps {
  event: EventCategory;
  featured?: boolean;
}

/** Full event card used on the Events page. */
export function EventCard({ event, featured = false }: EventCardProps) {
  const image = getImage(event.imageId);
  return (
    <Link
      to={`/contact?event=${event.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-line transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(38,51,31,0.45)]">
      
      <div className="relative">
        <FramedPhoto
          image={image}
          className={featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
        
        {image.isSample &&
        <div className="absolute left-4 top-4">
            <PlaceholderBadge label="Sample photo" />
          </div>
        }
      </div>
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h2 className={`font-display font-medium leading-tight text-ink ${featured ? 'text-4xl md:text-[44px]' : 'text-3xl'}`}>
          {event.title}
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink/80">{event.summary}</p>
        <p className="mt-3 leading-relaxed text-muted">{event.details}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {event.idealFor.map((item) =>
          <li key={item} className="rounded-full border border-line bg-canvas px-3.5 py-1.5 text-sm text-ink">
              <EditableText text={item} />
            </li>
          )}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 pt-8 font-medium text-clay">
          Enquire about {event.title.toLowerCase()}
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            strokeWidth={1.75}
            aria-hidden="true" />
          
        </span>
      </div>
    </Link>);

}