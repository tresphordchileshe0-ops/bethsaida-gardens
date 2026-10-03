import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, MessageCircleIcon, ClockIcon, NavigationIcon } from 'lucide-react';
import { navigation, site } from '../../data/site';
import { directionsLink, telLink, whatsappLink } from '../../utils/contact';
import { RatingBadge } from '../ui/RatingBadge';
import { EditableText, PlaceholderBadge } from '../ui/Placeholder';

export function Footer() {
  const year = new Date().getFullYear();
  const iconProps = { className: 'mt-0.5 h-[18px] w-[18px] shrink-0 text-sand/80', strokeWidth: 1.5, 'aria-hidden': true };

  return (
    <footer className="bg-mossdeep text-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="font-display text-3xl font-semibold">{site.name}</p>
          <p className="mt-4 max-w-xs leading-relaxed text-sand">
            {site.category} and gardens in {site.location.area}, {site.location.city}.
          </p>
          <div className="mt-8">
            <RatingBadge tone="light" />
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-medium text-sand">Visit</h2>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li className="flex gap-3">
              <MapPinIcon {...iconProps} />
              <address className="not-italic">
                {site.location.full}
                <span className="block text-sand/80">{site.location.plusCode}</span>
              </address>
            </li>
            <li className="flex gap-3">
              <ClockIcon {...iconProps} />
              <span>
                {site.hours.summary}
                <span className="block text-sand/80">
                  <EditableText text={site.hours.opening} />
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <NavigationIcon {...iconProps} />
              <a href={directionsLink()} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Get directions
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-medium text-sand">Contact</h2>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li className="flex gap-3">
              <PhoneIcon {...iconProps} />
              <a href={telLink()} className="underline-offset-4 hover:underline">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircleIcon {...iconProps} />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                WhatsApp us
              </a>
            </li>
            {site.social.map((s) =>
            <li key={s.label} className="flex flex-wrap items-center gap-2 pl-[30px]">
                {s.url ?
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                    {s.label}
                  </a> :

              <>
                    <span className="text-sand/80">{s.label}</span>
                    <PlaceholderBadge label="Add link" tone="dark" />
                  </>
              }
              </li>
            )}
          </ul>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="text-sm font-medium text-sand">Explore</h2>
          <ul className="mt-5 space-y-3 text-[15px]">
            {navigation.map((item) =>
            <li key={item.to}>
                <Link to={item.to} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="border-t border-surface/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-sand/80 md:flex-row md:justify-between md:px-8">
          <p>
            © {year} {site.name}, {site.location.city}, {site.location.country}
          </p>
          <p>Event venue in Ndola · Wedding gardens in Ndola · Event gardens Ndola</p>
        </div>
      </div>
    </footer>);

}