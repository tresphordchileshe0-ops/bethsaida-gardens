import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { FacilitiesList } from '../FacilitiesList';

export function FacilitiesPreview() {
  return (
    <section aria-labelledby="facilities-preview" className="bg-sand/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="facilities-preview"
              kicker="On the grounds"
              title="Facilities"
              description="Space to gather, shade to rest and a garden setting your guests will remember." />
            
            <Reveal delay={0.1}>
              <Link to="/packages" className="group mt-8 inline-flex items-center gap-2 font-medium text-clay">
                Packages & services
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true" />
                
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FacilitiesList />
        </div>
      </div>
    </section>);

}