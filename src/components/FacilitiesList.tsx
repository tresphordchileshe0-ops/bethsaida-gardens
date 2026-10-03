import React from 'react';
import { facilities } from '../data/facilities';
import { EditableText, PlaceholderBadge } from './ui/Placeholder';
import { RevealGroup, RevealItem } from './ui/Reveal';

export function FacilitiesList() {
  return (
    <RevealGroup as="ul" className="grid border-t border-line sm:grid-cols-2" stagger={0.06}>
      {facilities.map((f) => {
        const Icon = f.icon;
        return (
          <RevealItem as="li" key={f.title} className="flex gap-5 border-b border-line py-7 sm:pr-10">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-moss/25 text-moss">
              <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-medium text-ink">{f.title}</h3>
                {!f.confirmed && <PlaceholderBadge />}
              </div>
              <p className="mt-1.5 leading-relaxed text-muted">
                <EditableText text={f.description} />
              </p>
            </div>
          </RevealItem>);

      })}
    </RevealGroup>);

}