'use client';

import { useState } from 'react';
import type { NavLink } from '@/features/home/data/home';

type HomeMenuProps = {
  nav: NavLink[];
};

export function HomeMenu({ nav }: HomeMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-compact:block">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex w-menu flex-col gap-1.5"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="h-0.5 w-full bg-ink" />
        <span className="h-0.5 w-full bg-ink" />
      </button>
      {open ? (
        <nav className="absolute top-header-h-sm right-page-x-sm left-page-x-sm z-20 flex flex-col gap-5 bg-hero py-6">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-jost text-cta text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
