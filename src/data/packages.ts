import type { ServicePackage } from '../types/content';

// ─────────────────────────────────────────────────────────────
// PACKAGES & SERVICES — everything here is placeholder content.
// Replace the [bracketed] lines with confirmed offerings & prices.
// ─────────────────────────────────────────────────────────────

export const servicePackages: ServicePackage[] = [
{
  title: 'Venue Hire',
  description: 'Hire of the gardens for your ceremony, reception or gathering.',
  includes: ['[Areas of the venue included]', '[Hire duration]', '[Seating / tables included]'],
  pricing: 'Price on enquiry'
},
{
  title: 'Event Services',
  description: 'Support to help set up and run your event on the day.',
  includes: ['[Set-up & décor options]', '[Tents or canopies]', '[On-the-day staff]'],
  pricing: 'Price on enquiry'
},
{
  title: 'Food & Catering',
  description: 'Food and drinks for your guests, if offered for your event.',
  includes: ['[Menu or platter options]', '[Drinks options]', '[Outside caterer policy]'],
  pricing: 'Price on enquiry'
}];


export const bookingSteps = [
{
  title: 'Send an enquiry',
  description: 'Share your date, event type and guest numbers using the form or WhatsApp.'
},
{
  title: 'Confirm availability',
  description: 'We get back to you to confirm availability and talk through your plans.'
},
{
  title: '[Visit & confirm booking]',
  description: '[Describe how site visits, deposits and confirmations work]'
}];