import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight';

interface ButtonLinkProps {
  to: string;
  variant?: Variant;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-clay text-surface hover:bg-claydeep hover:shadow-[0_14px_30px_-12px_rgba(160,86,58,0.7)]',
  secondary: 'border border-ink/25 text-ink hover:border-ink hover:bg-surface hover:shadow-[0_14px_30px_-16px_rgba(31,42,30,0.4)]',
  light: 'bg-surface text-mossdeep hover:bg-canvas hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.45)]',
  outlineLight: 'border border-surface/50 text-surface backdrop-blur-sm hover:border-surface hover:bg-surface/15'
};

export function ButtonLink({ to, variant = 'primary', external = false, children, className = '' }: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-4 text-[15px] font-medium transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variants[variant]} ${className}`;

  if (external) {
    const isWeb = to.startsWith('http');
    return (
      <a href={to} className={classes} {...isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {}}>
        {children}
      </a>);

  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>);

}