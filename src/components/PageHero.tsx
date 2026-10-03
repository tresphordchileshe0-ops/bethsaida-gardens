import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { getImage } from '../utils/images';
import { FramedPhoto } from './ui/FramedPhoto';
import { PlaceholderBadge } from './ui/Placeholder';

interface PageHeroProps {
  kicker: string;
  title: string;
  description?: string;
  imageId: string;
  compact?: boolean;
}

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

/** Full-bleed image banner with parallax for inner pages. */
export function PageHero({ kicker, title, description, imageId, compact = false }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const image = getImage(imageId);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className={`relative flex w-full items-end overflow-hidden bg-mossdeep ${
      compact ? 'h-[52svh] min-h-[420px]' : 'h-[68svh] min-h-[500px]'}`
      }>
      
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-x-0 -top-[5%] h-[115%]">
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}>
          
          <FramedPhoto image={image} priority className="h-full w-full" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-mossdeep/50" aria-hidden="true" />

      <motion.div
        style={reduce ? undefined : { y: textY, opacity }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex items-center gap-3 font-display text-xl italic text-sand">
          
          <span className="h-px w-8 bg-sand/70" aria-hidden="true" />
          {kicker}
        </motion.p>
        <h1 className="mt-4 overflow-hidden font-display text-5xl font-medium leading-[1] tracking-[-0.01em] text-surface md:text-7xl lg:text-[88px]">
          <motion.span
            className="block pb-[0.06em]"
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, delay: 0.15, ease }}>
            
            {title}
          </motion.span>
        </h1>
        {description &&
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-surface/90">
          
            {description}
          </motion.p>
        }
      </motion.div>
    </section>);

}
