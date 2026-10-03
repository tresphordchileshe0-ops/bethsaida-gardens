import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { seo } from '../data/seo';
import { servicePackages, bookingSteps } from '../data/packages';
import { imageSlots } from '../data/images';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/ButtonLink';
import { EditableText, PlaceholderBadge } from '../components/ui/Placeholder';
import { RevealGroup, RevealItem } from '../components/ui/Reveal';
import { FacilitiesList } from '../components/FacilitiesList';
import { ContactBand } from '../components/ContactBand';

export function Packages() {
  usePageMeta(seo.packages);

  return (
    <>
      <PageHero
        kicker="Packages & services"
        title="Hosting your event"
        description="Every celebration is different. Share your date and guest numbers and we’ll send what’s available and current pricing."
        imageId={imageSlots.pageHeroes.packages}
        compact />
      

      <section aria-labelledby="packages-title" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading id="packages-title" kicker="What we offer" title="Venue, services & catering" />
        <RevealGroup as="ul" className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {servicePackages.map((pkg, i) =>
          <RevealItem
            as="li"
            key={pkg.title}
            className={`flex flex-col rounded-2xl p-8 md:p-9 ${
            i === 0 ? 'bg-mossdeep text-surface' : 'bg-surface ring-1 ring-line'}`
            }>
            
              <div className="flex items-start justify-between gap-3">
                <h3 className={`font-display text-[32px] leading-tight ${i === 0 ? 'text-surface' : 'text-ink'}`}>{pkg.title}</h3>
                <PlaceholderBadge label="Details to add" tone={i === 0 ? 'dark' : 'light'} />
              </div>
              <p className={`mt-3 leading-relaxed ${i === 0 ? 'text-sand' : 'text-muted'}`}>{pkg.description}</p>
              <ul className={`mt-7 space-y-3.5 border-t pt-7 text-[15px] ${i === 0 ? 'border-surface/15' : 'border-line'}`}>
                {pkg.includes.map((item) =>
              <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-clay" aria-hidden="true" />
                    <EditableText text={item} />
                  </li>
              )}
              </ul>
              <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                <p className="font-display text-xl italic">{pkg.pricing}</p>
                <ButtonLink
                to="/contact"
                variant={i === 0 ? 'light' : 'secondary'}
                className="px-5 py-2.5 text-sm">
                
                  Enquire
                </ButtonLink>
              </div>
            </RevealItem>
          )}
        </RevealGroup>
      </section>

      <section aria-labelledby="steps-title" className="bg-sand/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id="steps-title" kicker="How booking works" title="From enquiry to celebration" />
          </div>
          <RevealGroup as="ol" className="lg:col-span-8" stagger={0.12}>
            {bookingSteps.map((step, i) =>
            <RevealItem as="li" key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
                {i < bookingSteps.length - 1 &&
              <span className="absolute left-[23px] top-14 h-[calc(100%-56px)] w-px bg-ink/15" aria-hidden="true" />
              }
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface font-display text-xl text-moss ring-1 ring-moss/30">
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-2xl text-ink">
                    <EditableText text={step.title} />
                  </h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-muted">
                    <EditableText text={step.description} />
                  </p>
                </div>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      <section aria-labelledby="pkg-facilities" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading id="pkg-facilities" kicker="On site" title="Facilities" />
        </div>
        <div className="lg:col-span-8">
          <FacilitiesList />
        </div>
      </section>

      <ContactBand title="Ask us about availability and pricing for your date." />
    </>);

}