import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircleIcon, PhoneIcon, MapPinIcon, ClockIcon, NavigationIcon } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { seo } from '../data/seo';
import { site } from '../data/site';
import { eventCategories } from '../data/events';
import { directionsLink, telLink, whatsappLink } from '../utils/contact';
import { imageSlots } from '../data/images';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { EnquiryForm } from '../components/contact/EnquiryForm';
import { MapEmbed } from '../components/ui/MapEmbed';
import { EditableText } from '../components/ui/Placeholder';

export function Contact() {
  usePageMeta(seo.contact);
  const [params] = useSearchParams();
  const preselected = eventCategories.find((e) => e.slug === params.get('event'))?.title ?? '';
  const iconClass = 'mt-0.5 h-5 w-5 shrink-0 text-moss';

  return (
    <>
      <PageHero
        kicker="Contact & bookings"
        title="Enquire about your event"
        description="The quickest way to reach us is WhatsApp. You can also call, or send the enquiry form below."
        imageId={imageSlots.pageHeroes.contact}
        compact />
      

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <EnquiryForm key={preselected} initialEventType={preselected} />
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 lg:col-span-5">
        <aside className="space-y-6" aria-label="Contact details">
          <div className="rounded-2xl bg-moss p-7 text-surface md:p-9">
            <MessageCircleIcon className="h-8 w-8 text-sand" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="mt-5 font-display text-4xl">Chat on WhatsApp</h2>
            <p className="mt-2 text-sand">Send your date and guest numbers and we’ll reply with availability.</p>
            <a
                href={whatsappLink(`Hello ${site.name}, I'd like to enquire about a booking.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface px-6 py-4 text-[15px] font-medium text-mossdeep transition-colors duration-150 ease-out hover:bg-sand">
                
              <MessageCircleIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              WhatsApp {site.phone.display}
            </a>
          </div>

          <ul className="divide-y divide-line rounded-lg border border-line bg-surface">
            <li className="flex gap-4 p-6">
              <PhoneIcon className={iconClass} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">Phone</p>
                <a href={telLink()} className="font-medium text-ink underline-offset-4 hover:underline">
                  {site.phone.display}
                </a>
              </div>
            </li>
            <li className="flex gap-4 p-6">
              <MapPinIcon className={iconClass} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">Location</p>
                <address className="font-medium not-italic text-ink">{site.location.full}</address>
                <p className="text-sm text-muted">{site.location.plusCode}</p>
              </div>
            </li>
            <li className="flex gap-4 p-6">
              <ClockIcon className={iconClass} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-sm text-muted">Hours</p>
                <p className="font-medium text-ink">{site.hours.summary}</p>
                <p className="text-sm text-muted">
                  <EditableText text={site.hours.opening} />
                </p>
              </div>
            </li>
          </ul>
        </aside>
        </Reveal>
      </section>

      <section aria-labelledby="map-title" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="map-title" className="font-display text-3xl text-ink md:text-4xl">
            Find us in {site.location.area}
          </h2>
          <a
            href={directionsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-clay underline-offset-4 hover:underline">
            
            <NavigationIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            Open in Google Maps
          </a>
        </div>
        <Reveal>
          <MapEmbed className="h-[400px] md:h-[480px]" />
        </Reveal>
      </section>
    </>);

}