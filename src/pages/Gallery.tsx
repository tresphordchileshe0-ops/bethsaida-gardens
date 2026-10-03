import React, { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import { seo } from '../data/seo';
import { venueImages, imageSlots } from '../data/images';
import type { GalleryCategory } from '../types/content';
import { PageHero } from '../components/PageHero';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { Lightbox } from '../components/gallery/Lightbox';
import { ContactBand } from '../components/ContactBand';

type Filter = 'All' | GalleryCategory;

export function Gallery() {
  usePageMeta(seo.gallery);
  const [filter, setFilter] = useState<Filter>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = useMemo<Filter[]>(() => ['All', ...Array.from(new Set(venueImages.map((i) => i.category)))], []);
  const visible = filter === 'All' ? venueImages : venueImages.filter((i) => i.category === filter);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <PageHero
        kicker="Gallery"
        title="The gardens, in pictures"
        description="Lawns, the pool, evening light and celebrations at our event gardens in Kansenshi, Ndola."
        imageId={imageSlots.pageHeroes.gallery}
        compact />
      

      <section aria-label="Photos" className="mx-auto max-w-7xl px-5 pb-24 pt-14 md:px-8 md:pb-32 md:pt-20">
        <div className="-mx-5 mb-12 overflow-x-auto px-5 md:mx-0 md:px-0" role="group" aria-label="Filter photos">
          <div className="flex gap-2">
            {categories.map((c) =>
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ease-out ${
              filter === c ? 'text-surface' : 'text-ink ring-1 ring-line hover:ring-ink/40'}`
              }>
              
                {filter === c &&
              <motion.span
                layoutId="gallery-filter"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />

              }
                <span className="relative">{c}</span>
              </button>
            )}
          </div>
        </div>

        {visible.length > 0 ?
        <GalleryGrid key={filter} images={visible} onOpen={setOpenIndex} /> :

        <p className="rounded-xl border border-dashed border-line py-16 text-center text-muted">No photos in this category yet.</p>
        }
      </section>

      <Lightbox images={visible} index={openIndex} onClose={close} onNavigate={setOpenIndex} />
      <ContactBand title="Picture your event here? Let’s talk dates." />
    </>);

}