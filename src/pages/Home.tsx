import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { seo } from '../data/seo';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { EventTypesPreview } from '../components/home/EventTypesPreview';
import { FacilitiesPreview } from '../components/home/FacilitiesPreview';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { ContactBand } from '../components/ContactBand';

export function Home() {
  usePageMeta(seo.home);
  return (
    <>
      <HeroSection />
      <IntroSection />
      <EventTypesPreview />
      <FacilitiesPreview />
      <GalleryPreview />
      <ContactBand />
    </>);

}