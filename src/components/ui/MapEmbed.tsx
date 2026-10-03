import React from 'react';
import { site } from '../../data/site';
import { mapEmbedLink } from '../../utils/contact';

interface MapEmbedProps {
  className?: string;
}

export function MapEmbed({ className = '' }: MapEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-sand ${className}`}>
      <iframe
        title={`Map showing ${site.name}, ${site.location.full}`}
        src={mapEmbedLink()}
        className="block h-full min-h-[320px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
      
    </div>);

}