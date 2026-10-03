import type { VenueImage } from '../types/content';

// ─────────────────────────────────────────────────────────────
// PHOTOS — to add or replace a photo, edit an entry below.
// • width/height: the photo's real pixel size.
// • isSample: true = temporary stand-in image. Replace with a real
//   venue photo and set isSample to false.
// • Real photos are always shown whole (never cropped or stretched).
//   Where a frame is a different shape, the gap is filled with a soft
//   blurred copy of the same photo.
// ─────────────────────────────────────────────────────────────

export const venueImages: VenueImage[] = [
{
  id: 'garden-pool',
  src: "/pasted-image.jpg",
  alt: 'Landscaped lawn, brick garden path and swimming pool with shaded umbrellas at Bethsaida Gardens, Kansenshi, Ndola',
  caption: 'The gardens and pool',
  width: 359,
  height: 473,
  category: 'Gardens',
  isSample: false
},
{
  id: 'hero-gardens-wide',
  src: "/14ff8312-78b5-4fa4-a55f-0e8ea52593a3.jpg",
  alt: 'Wedding gardens in Ndola at golden hour with lawn, brick path, palms and pool (sample image)',
  caption: 'Gardens at golden hour',
  width: 1376,
  height: 768,
  category: 'Gardens',
  isSample: true
},
{
  id: 'hero-evening-wide',
  src: "/ffaaac98-77b2-4bca-97db-61768a9296a4.jpg",
  alt: 'Evening garden reception with string lights at an event venue in Ndola (sample image)',
  caption: 'An evening reception',
  width: 1376,
  height: 768,
  category: 'Evenings',
  isSample: true
},
{
  id: 'wedding-lawn',
  src: "/a6a9f3ff-4ce9-4a98-b6fa-cdd897524277.jpg",
  alt: 'Outdoor wedding ceremony set up on a garden lawn — wedding venue in Ndola (sample image)',
  caption: 'Ceremony on the lawn',
  width: 928,
  height: 1152,
  category: 'Events',
  isSample: true
},
{
  id: 'reception-tables',
  src: "/105e030c-79ab-4e03-b1b7-3c3a723e2a2b.jpg",
  alt: 'Reception tables dressed with flowers in event gardens in Ndola (sample image)',
  caption: 'Reception tables',
  width: 1248,
  height: 832,
  category: 'Décor',
  isSample: true
},
{
  id: 'evening-lights',
  src: "/08e6e4f2-abe0-4f79-8398-8ce6cbdc2c89.jpg",
  alt: 'Garden lit with string lights in the evening at an event venue in Ndola (sample image)',
  caption: 'Evenings in the garden',
  width: 896,
  height: 1195,
  category: 'Evenings',
  isSample: true
},
{
  id: 'corporate-gazebo',
  src: "/b01556ca-0dee-4c80-a963-3b1d2bfd9e0a.jpg",
  alt: 'Seating arranged under a canopy for a corporate function in a garden in Ndola (sample image)',
  caption: 'Corporate set-up',
  width: 1184,
  height: 888,
  category: 'Events',
  isSample: true
},
{
  id: 'birthday-table',
  src: "/1fa81d5d-73b8-462b-9b22-826d7e86973d.jpg",
  alt: 'Birthday cake and flowers on a celebration table outdoors (sample image)',
  caption: 'Birthday celebration',
  width: 928,
  height: 1160,
  category: 'Décor',
  isSample: true
}];


// Which photo appears where. Change an id to swap the photo.
export const imageSlots = {
  // Home page slideshow, in order.
  hero: ['hero-gardens-wide', 'garden-pool', 'hero-evening-wide'],
  pageHeroes: {
    about: 'hero-gardens-wide',
    events: 'hero-evening-wide',
    gallery: 'garden-pool',
    packages: 'reception-tables',
    contact: 'hero-gardens-wide'
  },
  about: 'garden-pool',
  homeGallery: ['garden-pool', 'wedding-lawn', 'reception-tables', 'evening-lights', 'hero-gardens-wide', 'birthday-table']
};