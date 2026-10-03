import React from 'react';
import { StarIcon } from 'lucide-react';
import { site } from '../../data/site';

interface RatingBadgeProps {
  tone?: 'dark' | 'light';
}

export function RatingBadge({ tone = 'dark' }: RatingBadgeProps) {
  const { value, count } = site.rating;
  const text = tone === 'dark' ? 'text-ink' : 'text-surface';
  const sub = tone === 'dark' ? 'text-muted' : 'text-sand';
  const label = `${value} stars from ${count} reviews`;
  return (
    <div className="inline-flex items-center gap-3" aria-label={label}>
      <span className={`font-display text-4xl font-semibold leading-none ${text}`} aria-hidden="true">
        {value.toFixed(1)}
      </span>
      <span className="flex flex-col gap-1" aria-hidden="true">
        <span className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) =>
          <StarIcon
            key={i}
            className={`h-3.5 w-3.5 ${i < Math.round(value) ? 'fill-clay text-clay' : 'text-clay/50'}`}
            strokeWidth={1.75} />

          )}
        </span>
        <span className={`text-xs ${sub}`}>{label}</span>
      </span>
    </div>);

}