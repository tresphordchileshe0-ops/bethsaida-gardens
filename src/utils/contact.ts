import { site } from '../data/site';

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink(): string {
  return `tel:${site.phone.tel}`;
}

export function directionsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location.mapQuery)}`;
}

export function mapEmbedLink(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(site.location.mapQuery)}&z=15&output=embed`;
}

export function isPlaceholder(text: string): boolean {
  return text.trim().startsWith('[');
}