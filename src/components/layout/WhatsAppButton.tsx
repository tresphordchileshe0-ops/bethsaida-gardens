import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircleIcon } from 'lucide-react';
import { whatsappLink } from '../../utils/contact';
import { site } from '../../data/site';

export function WhatsAppButton() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, I'd like to enquire about a booking.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-moss px-4 py-3.5 text-surface shadow-lg shadow-mossdeep/20 transition-colors duration-150 ease-out hover:bg-mossdeep md:px-5">
      
      <MessageCircleIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      <span className="hidden text-[15px] font-medium sm:inline">WhatsApp</span>
    </a>);

}