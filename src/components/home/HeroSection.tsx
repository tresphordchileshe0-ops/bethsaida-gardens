import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useEffect(() => {
    if (paused || reduce || slides.length < 2) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, SLIDE_MS);

    return () => window.clearTimeout(timer);
  }, [index, paused, reduce, slides.length]);

  const slide = slides[index];
  const words = site.name.split(' ');

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-mossdeep"
    >
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="absolute inset-x-0 -top-[4%] h-[112%]"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1.12 }}
              animate={{ scale: reduce ? 1.12 : 1 }}
              transition={{
                duration: SLIDE_MS / 1000 + 1.2,
                ease: 'linear',
              }}
            >
              <FramedPhoto
                image={slide}
                priority
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div
        className="absolute inset-0 bg-mossdeep/45"
        aria-hidden="true"
      />

      <motion.div
        style={
          reduce
            ? undefined
            : {
                y: contentY,
                opacity: contentOpacity,
              }
        }
        className="relative mx-auto w-full max-w-7xl px-5 pb-28 md:px-8 md:pb-32"
      >
        <h1
          id="hero-title"
          className="mt-0 font-display text-[68px] font-medium leading-[0.9] tracking-[-0.015em] text-surface sm:text-[104px] lg:text-[148px]"
        >
          {words.map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className="block overflow-hidden pb-[0.06em]"
            >
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + wordIndex * 0.12,
                  ease,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease,
            }}
          >
            <p className="max-w-md text-lg leading-relaxed text-surface/90 md:text-xl">
              <EditableText
                text={site.tagline}
                forcePlaceholder={site.taglineIsPlaceholder}
              />
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">
                Enquire About a Booking
              </ButtonLink>

              <ButtonLink to="/gallery" variant="outlineLight">
                View Our Gallery
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay:
