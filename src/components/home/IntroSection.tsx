import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { site } from '../../data/site';
import { imageSlots } from '../../data/images';
import { getImage } from '../../utils/images';
import { RatingBadge } from '../ui/RatingBadge';
import { Reveal } from '../ui/Reveal';
import { VenuePhoto } from '../ui/VenuePhoto';

export function IntroSection() {
  const photo = getImage(imageSlots.about);

  return (
    <section aria-labelledby="intro-title" className="relative bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 font-display text-xl italic text-clay">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
              Welcome to {site.name}
            </p>
            <h2 id="intro-title" className="font-display text-[42px] font-medium leading-[1.05] text-ink md:text-[64px]">
              An event venue in Ndola where the garden does the decorating.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-muted">{site.intro}</p>
            <div>
              <div className="border-y border-line py-5">
                <RatingBadge />
              </div>
              <Link
                to="/about"
                className="group mt-6 inline-flex items-center gap-2 font-medium text-clay">
                
                Discover the venue
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true" />
                
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-5">
          <VenuePhoto image={photo} className="mx-auto max-w-[420px] lg:ml-auto lg:mr-0" showCaption />
        </Reveal>
      </div>
    </section>);

}