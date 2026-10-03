import React from 'react';
import { PencilLineIcon } from 'lucide-react';
import { usePlaceholderMarkers } from '../../contexts/PlaceholderContext';
import { isPlaceholder } from '../../utils/contact';

interface EditableTextProps {
  text: string;
  forcePlaceholder?: boolean;
}

/** Renders text; if it is placeholder content, marks it with a dashed underline. */
export function EditableText({ text, forcePlaceholder = false }: EditableTextProps) {
  const show = usePlaceholderMarkers();
  const placeholder = forcePlaceholder || isPlaceholder(text);
  if (!placeholder || !show) return <>{text}</>;
  return (
    <span
      className="underline decoration-clay/60 decoration-dashed decoration-1 underline-offset-[5px]"
      title="Placeholder — replace with confirmed details">
      
      {text}
    </span>);

}

interface PlaceholderBadgeProps {
  label?: string;
  tone?: 'light' | 'dark';
}

export function PlaceholderBadge({ label = 'To confirm', tone = 'light' }: PlaceholderBadgeProps) {
  const show = usePlaceholderMarkers();
  if (!show) return null;
  const toneClass =
  tone === 'light' ? 'border-clay/50 text-clay bg-surface' : 'border-sand/50 text-sand bg-transparent';
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-dashed px-2 py-0.5 text-[11px] font-medium ${toneClass}`}>
      
      <PencilLineIcon className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
      {label}
    </span>);

}