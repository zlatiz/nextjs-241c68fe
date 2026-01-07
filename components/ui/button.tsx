import React from 'react';

export type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
};

export default function Button({ href, children, variant = 'primary' }: ButtonProps): JSX.Element {
  const base = 'yellow-button';
  const className = variant === 'primary' ? base : 'px-3 py-2 rounded';
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
