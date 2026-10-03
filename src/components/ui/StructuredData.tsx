import React from 'react';
import { site } from '../../data/site';
import { getImage } from '../../utils/images';
import { imageSlots } from '../../data/images';

/** Local business data for search engines (Google, Bing). */
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: site.name,
    description: site.intro,
    image: getImage(imageSlots.hero).src,
    telephone: site.phone.display,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.city,
      addressRegion: site.location.area,
      addressCountry: 'ZM'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}