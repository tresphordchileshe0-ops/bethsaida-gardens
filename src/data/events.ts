import type { EventCategory } from '../types/content';

// ─────────────────────────────────────────────────────────────
// EVENT CATEGORIES — add, remove or reorder entries freely.
// "imageId" must match an id in data/images.ts.
// Lines in [brackets] are placeholders to replace.
// ─────────────────────────────────────────────────────────────

export const eventCategories: EventCategory[] = [
{
  slug: 'weddings',
  title: 'Weddings',
  summary: 'Exchange vows on open lawns framed by tropical greenery.',
  details:
  'The gardens offer a natural backdrop for ceremonies, receptions and photographs, with space to arrange your day the way you imagine it.',
  imageId: 'wedding-lawn',
  idealFor: ['Garden ceremonies', 'Receptions', '[Add confirmed wedding details]']
},
{
  slug: 'birthdays',
  title: 'Birthday Celebrations',
  summary: 'Milestone birthdays and relaxed afternoons with family and friends.',
  details:
  'From intimate lunches to larger parties, celebrate outdoors in a calm setting with room for everyone to gather.',
  imageId: 'birthday-table',
  idealFor: ['Milestone birthdays', 'Family gatherings', '[Add confirmed details]']
},
{
  slug: 'corporate',
  title: 'Corporate Functions',
  summary: 'Team days, year-end functions and client gatherings away from the office.',
  details:
  'A change of scenery for your team or clients — somewhere quiet to meet, recognise achievements or simply celebrate the year.',
  imageId: 'corporate-gazebo',
  idealFor: ['Year-end functions', 'Team days', '[Add confirmed details]']
},
{
  slug: 'private',
  title: 'Private Celebrations',
  summary: 'Anniversaries, engagements, bridal showers and family occasions.',
  details:
  'Mark the moments that matter in a private, peaceful setting — ideal for gatherings where good company comes first.',
  imageId: 'reception-tables',
  idealFor: ['Anniversaries', 'Engagements & showers', '[Add confirmed details]']
},
{
  slug: 'other',
  title: 'Other Special Events',
  summary: 'Have something else in mind? Tell us about it.',
  details:
  'Graduations, reunions, church and community gatherings — get in touch to talk through your plans and check availability.',
  imageId: 'evening-lights',
  idealFor: ['Graduations', 'Reunions', '[Add confirmed details]']
}];