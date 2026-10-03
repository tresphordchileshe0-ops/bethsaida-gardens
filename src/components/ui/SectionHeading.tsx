import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  id?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  as = 'h2',
  align = 'left',
  tone = 'dark',
  id
}: SectionHeadingProps) {
  const Heading = as;
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';
  const titleColor = tone === 'dark' ? 'text-ink' : 'text-surface';
  const bodyColor = tone === 'dark' ? 'text-muted' : 'text-sand';
  const kickerColor = tone === 'dark' ? 'text-clay' : 'text-sand';
  const size = as === 'h1' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-[56px]';

  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      {kicker &&
      <p className={`mb-4 flex items-center gap-3 font-display text-xl italic ${kickerColor} ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
          {kicker}
        </p>
      }
      <Heading id={id} className={`font-display font-medium leading-[1.02] tracking-[-0.01em] ${size} ${titleColor}`}>
        {title}
      </Heading>
      {description && <p className={`mt-6 text-lg leading-relaxed ${bodyColor}`}>{description}</p>}
    </Reveal>);

}