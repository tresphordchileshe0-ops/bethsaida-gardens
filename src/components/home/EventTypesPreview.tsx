import React from 'react';
import { eventCategories } from '../../data/events';
import { SectionHeading } from '../ui/SectionHeading';
import { ButtonLink } from '../ui/ButtonLink';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { EventTile } from '../events/EventTile';

export function EventTypesPreview() {
  const [featured, ...rest] = eventCategories;

  return (
    <section aria-labelledby="events-preview" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="events-preview"
          kicker="What we host"
          title="Celebrations of every size"
          description="Weddings, milestones, team days and quiet family occasions — all set against the gardens." />
        
        <ButtonLink to="/events" variant="secondary" className="self-start md:self-auto">
          All events
        </ButtonLink>
      </div>

      <RevealGroup
        as="ul"
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:h-[680px] lg:grid-cols-4 lg:grid-rows-2">
        
        <RevealItem as="li" className="sm:col-span-2 lg:row-span-2">
          <EventTile event={featured} featured />
        </RevealItem>
        {rest.map((event) =>
        <RevealItem as="li" key={event.slug}>
            <EventTile event={event} />
          </RevealItem>
        )}
      </RevealGroup>
    </section>);

}