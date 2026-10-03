import React from 'react';
import { NavigationIcon } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { seo } from '../data/seo';
import { site } from '../data/site';
import { imageSlots } from '../data/images';
import { getImage } from '../utils/images';
import { directionsLink } from '../utils/contact';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { VenuePhoto } from '../components/ui/VenuePhoto';
import { EditableText, PlaceholderBadge } from '../components/ui/Placeholder';
import { Reveal, RevealGroup, RevealItem } from '../components/ui/Reveal';
import { FacilitiesList } from '../components/FacilitiesList';
import { MapEmbed } from '../components/ui/MapEmbed';
import { ButtonLink } from '../components/ui/ButtonLink';
import { ContactBand } from '../components/ContactBand';

const reasons = [
{ title: 'Open lawns', text: 'Room to arrange ceremonies, receptions and gatherings outdoors.' },
{ title: 'A calm setting', text: 'A peaceful, relaxing atmosphere that lets guests slow down and enjoy the occasion.' },
{ title: 'Natural backdrops', text: 'Garden paths, palms, cypress trees and the pool make for memorable photographs.' },
{ title: 'Into the evening', text: 'Celebrations can carry on after sunset — the venue closes at 10pm.' }];


export function About() {
  usePageMeta(seo.about);
  const photo = getImage(imageSlots.about);

  return (
    <>
      <PageHero
        kicker="About the venue"
        title="Bethsaida Gardens, Ndola"
        description="A green, peaceful event venue in Kansenshi."
        imageId={imageSlots.pageHeroes.about} />
      

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <SectionHeading kicker="Our setting" title="Gardens made for gathering" description={site.intro} />
          <Reveal delay={0.1} className="mt-12 max-w-2xl border-l-2 border-clay/40 pl-6">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-medium text-ink">Our story</h3>
              <PlaceholderBadge label="Add your story" />
            </div>
            <p className="mt-2 leading-relaxed text-muted">
              <EditableText text="[Share how Bethsaida Gardens began, who runs it, and what you love most about hosting guests here.]" />
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-5">
          <VenuePhoto image={photo} className="mx-auto max-w-[420px] lg:ml-auto lg:mr-0" showCaption />
        </Reveal>
      </section>

      <section aria-labelledby="why-title" className="bg-mossdeep">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionHeading id="why-title" tone="light" kicker="Why hold your event here" title="A setting that does the work" />
          <RevealGroup as="dl" className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) =>
            <RevealItem key={r.title} className="border-t border-surface/20 pt-6">
                <span className="font-display text-lg italic text-sand/70" aria-hidden="true">
                  0{i + 1}
                </span>
                <dt className="mt-3 font-display text-[28px] leading-tight text-surface">{r.title}</dt>
                <dd className="mt-3 leading-relaxed text-sand">{r.text}</dd>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="facilities-title" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="facilities-title"
              kicker="Atmosphere & facilities"
              title="What you’ll find"
              description="Items marked “To confirm” are awaiting details from the venue." />
            
          </div>
        </div>
        <div className="lg:col-span-8">
          <FacilitiesList />
        </div>
      </section>

      <section aria-labelledby="location-title" className="bg-sand/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id="location-title" kicker="Location" title={`In ${site.location.area}, ${site.location.city}`} />
            <Reveal delay={0.1}>
              <address className="mt-6 not-italic leading-relaxed text-ink">
                {site.location.full}
                <span className="block text-muted">Plus code: {site.location.plusCode}</span>
              </address>
              <p className="mt-4 text-muted">
                <EditableText text="[Add directions or nearby landmarks to help guests find you]" />
              </p>
              <ButtonLink to={directionsLink()} external variant="secondary" className="mt-8">
                <NavigationIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                Get directions
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <MapEmbed className="h-[380px] lg:h-[480px]" />
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>);

}