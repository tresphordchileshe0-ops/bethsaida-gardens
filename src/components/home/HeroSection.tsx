import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { PauseIcon, PlayIcon } from 'lucide-react';
import { site } from '../../data/site';
import { imageSlots } from '../../data/images';
import { getImage } from '../../utils/images';
import { ButtonLink } from '../ui/ButtonLink';
import { EditableText, PlaceholderBadge } from '../ui/Placeholder';
import { FramedPhoto } from '../ui/FramedPhoto';

const SLIDE_MS = 6500;
const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const slides = imageSlots.hero.map(getImage);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useEffect(() => {
    if (paused || reduce || slides.length < 2) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, reduce, slides.length]);

  const slide = slides[index];
  const words = site.name.split(' ');

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-mossdeep">
      
      {/* Background slideshow with parallax */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-x-0 -top-[4%] h-[112%]">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}>
            
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1.12 }}
              animate={{ scale: reduce ? 1.12 : 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.2, ease: 'linear' }}>
              
              <FramedPhoto image={slide} priority className="h-full w-full" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Scrims for legibility (solid, layered) */}
      <div className="absolute inset-0 bg-mossdeep/45" aria-hidden="true" />

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-28 md:px-8 md:pb-32">
        
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex items-center gap-3 font-display text-xl italic text-sand md:text-2xl">
          
          <span className="h-px w-10 bg-sand/70" aria-hidden="true" />
          {site.category} · {site.location.area}, {site.location.city}
        </motion.p>

        <h1
          id="hero-title"
          className="mt-5 font-display text-[68px] font-medium leading-[0.9] tracking-[-0.015em] text-surface sm:text-[104px] lg:text-[148px]">
          
          {words.map((w, i) =>
          <span key={w} className="block overflow-hidden pb-[0.06em]">
              <motion.span
              className="block"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease }}>
              
                {w}
              </motion.span>
            </span>
          )}
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}>
            
            <p className="max-w-md text-lg leading-relaxed text-surface/90 md:text-xl">
              <EditableText text={site.tagline} forcePlaceholder={site.taglineIsPlaceholder} />
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Enquire About a Booking</ButtonLink>
              <ButtonLink to="/gallery" variant="outlineLight">
                View Our Gallery
              </ButtonLink>
            </div>
          </motion.div>

          {/* Slide controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4">
            
            <div className="flex flex-col items-start gap-2 lg:items-end">
              <div className="flex items-center gap-2">
                <span className="text-sm text-surface/80" aria-live="polite">
                  {slide.caption}
                </span>
                {slide.isSample && <PlaceholderBadge label="Sample photo" tone="dark" />}
              </div>
              <div className="flex gap-2" role="tablist" aria-label="Choose slide">
                {slides.map((s, i) =>
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show slide ${i + 1}: ${s.caption}`}
                  onClick={() => setIndex(i)}
                  className="relative h-1 w-12 overflow-hidden rounded-full bg-surface/30 py-0">
                  
                    {i === index &&
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-surface"
                    initial={{ width: paused || reduce ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: paused || reduce ? 0 : SLIDE_MS / 1000, ease: 'linear' }} />

                  }
                  </button>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface/40 text-surface transition-colors duration-150 ease-out hover:bg-surface/15">
              
              {paused ? <PlayIcon className="h-4 w-4" strokeWidth={1.5} /> : <PauseIcon className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-surface/70 md:flex" aria-hidden="true">
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-surface/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-surface"
            animate={reduce ? undefined : { y: ['-100%', '250%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
          
        </span>
      </div>
    </section>);

}