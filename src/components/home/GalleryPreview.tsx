import React from 'react';
import { imageSlots } from '../../data/images';
import { getImage } from '../../utils/images';
import { SectionHeading } from '../ui/SectionHeading';
import { ButtonLink } from '../ui/ButtonLink';
import { GalleryGrid } from '../gallery/GalleryGrid';

export function GalleryPreview() {
  const images = imageSlots.homeGallery.map(getImage);

  return (
    <section aria-labelledby="gallery-preview" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading id="gallery-preview" kicker="Gallery" title="A look around the gardens" />
        <ButtonLink to="/gallery" variant="secondary" className="self-start md:self-auto">
          View Our Gallery
        </ButtonLink>
      </div>
      <div className="mt-14">
        <GalleryGrid images={images} />
      </div>
    </section>);

}