import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { seo } from '../data/seo';
import { eventCategories } from '../data/events';
import { imageSlots } from '../data/images';
import { PageHero } from '../components/PageHero';
import { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { EventCard } from '../components/events/EventCard';
import { ContactBand } from '../components/ContactBand';

export function Events() {
  usePageMeta(seo.events);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) window.setTimeout(() => el.scrollIntoView({ block: 'start' }), 80);
  }, [hash]);

  return (
    <>
      <PageHero
        kicker="What we host"
        title="Weddings & events in Ndola"
        description="From garden weddings to year-end functions — a relaxed outdoor setting for occasions big and small."
        imageId={imageSlots.pageHeroes.events} />
      

      <section aria-label="Event types" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <RevealGroup as="ul" className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {eventCategories.map((event, i) =>
          <RevealItem
            as="li"
            key={event.slug}
            id={event.slug}
            className={`scroll-mt-28 ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
            
              <EventCard event={event} featured={i < 2} />
            </RevealItem>
          )}
        </RevealGroup>
      </section>

      <ContactBand title="Have an occasion in mind? Check your date with us." />
    </>);

}