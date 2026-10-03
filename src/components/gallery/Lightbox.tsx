import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { VenueImage } from '../../types/content';

interface LightboxProps {
  images: VenueImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null && images[index] !== undefined;

  useEffect(() => {
    if (!open || index === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, index, images.length, onClose, onNavigate]);

  const img = index !== null ? images[index] : undefined;
  const navBtn =
  'inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface/10 text-surface transition-colors duration-150 ease-out hover:bg-surface/20';

  return (
    <AnimatePresence>
      {open && img && index !== null &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={img.caption}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-0 z-50 flex flex-col bg-mossdeep/95"
        onClick={onClose}>
        
          <div className="flex items-center justify-between px-5 py-4 text-sand">
            <p className="text-sm">
              {index + 1} / {images.length}
            </p>
            <button ref={closeRef} type="button" onClick={onClose} className={navBtn} aria-label="Close gallery">
              <XIcon className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center gap-4 px-4 pb-4" onClick={(e) => e.stopPropagation()}>
            <button
            type="button"
            className={`${navBtn} hidden shrink-0 md:inline-flex`}
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            aria-label="Previous photo">
            
              <ChevronLeftIcon className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <figure className="flex h-full min-h-0 max-w-5xl flex-col items-center justify-center">
              <img
              src={img.src}
              alt={img.alt}
              className="max-h-[calc(100vh-180px)] w-auto max-w-full rounded-md object-contain" />
            
              <figcaption className="mt-3 text-center text-sm text-sand">
                {img.caption}
                {img.isSample && <span className="ml-2 text-sand/70">(sample photo)</span>}
              </figcaption>
            </figure>
            <button
            type="button"
            className={`${navBtn} hidden shrink-0 md:inline-flex`}
            onClick={() => onNavigate((index + 1) % images.length)}
            aria-label="Next photo">
            
              <ChevronRightIcon className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex justify-center gap-3 pb-6 md:hidden" onClick={(e) => e.stopPropagation()}>
            <button type="button" className={navBtn} onClick={() => onNavigate((index - 1 + images.length) % images.length)} aria-label="Previous photo">
              <ChevronLeftIcon className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <button type="button" className={navBtn} onClick={() => onNavigate((index + 1) % images.length)} aria-label="Next photo">
              <ChevronRightIcon className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}