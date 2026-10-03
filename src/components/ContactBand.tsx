import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MessageCircleIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { site } from '../data/site';
import { imageSlots } from '../data/images';
import { getImage } from '../utils/images';
import { telLink, whatsappLink } from '../utils/contact';
import { ButtonLink } from './ui/ButtonLink';
import { FramedPhoto } from './ui/FramedPhoto';
import { Reveal } from './ui/Reveal';

interface ContactBandProps {
  title?: string;
}

export function ContactBand({ title = 'Planning a celebration? Let’s talk about your date.' }: ContactBandProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const image = getImage(imageSlots.hero[imageSlots.hero.length - 1]);

  return (
    <section ref={ref} aria-labelledby="contact-band-title" className="relative overflow-hidden bg-mossdeep">
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-x-0 -top-[15%] h-[130%]">
        <FramedPhoto image={image} className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-mossdeep/75" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-12 md:items-end md:px-8 md:py-32">
        <Reveal className="md:col-span-7">
          <h2 id="contact-band-title" className="font-display text-[42px] font-medium leading-[1.05] text-surface md:text-[60px]">
            {title}
          </h2>
          <p className="mt-6 flex items-center gap-2 text-sand">
            <MapPinIcon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.5} aria-hidden="true" />
            {site.location.full}
          </p>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
          <ButtonLink to="/contact" variant="light">
            Enquire About a Booking
          </ButtonLink>
          <ButtonLink to={whatsappLink(`Hello ${site.name}, I'd like to enquire about a booking.`)} external variant="outlineLight">
            <MessageCircleIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
            WhatsApp
          </ButtonLink>
          <ButtonLink to={telLink()} external variant="outlineLight" className="sm:hidden">
            <PhoneIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
            Call {site.phone.display}
          </ButtonLink>
        </Reveal>
      </div>
    </section>);

}