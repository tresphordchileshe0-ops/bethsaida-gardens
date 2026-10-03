import { TreesIcon, WavesIcon, UmbrellaIcon, UtensilsIcon, CarIcon, PlugIcon } from 'lucide-react';
import type { Facility } from '../types/content';

// ─────────────────────────────────────────────────────────────
// FACILITIES — set "confirmed: true" once a facility is verified.
// Unconfirmed items show a "To confirm" marker.
// ─────────────────────────────────────────────────────────────

export const facilities: Facility[] = [
{
  icon: TreesIcon,
  title: 'Landscaped gardens',
  description: 'Green lawns, garden paths and mature trees throughout the grounds.',
  confirmed: true
},
{
  icon: WavesIcon,
  title: 'Swimming pool',
  description: 'A poolside area set within the gardens.',
  confirmed: true
},
{
  icon: UmbrellaIcon,
  title: 'Shaded seating',
  description: 'Umbrella-shaded tables and seating around the grounds.',
  confirmed: true
},
{
  icon: UtensilsIcon,
  title: 'Food & drinks',
  description: '[Describe on-site food, drinks and catering options]',
  confirmed: false
},
{
  icon: CarIcon,
  title: 'Parking',
  description: '[Describe parking availability]',
  confirmed: false
},
{
  icon: PlugIcon,
  title: 'Power & sound',
  description: '[Describe power supply, generator back-up or sound options]',
  confirmed: false
}];