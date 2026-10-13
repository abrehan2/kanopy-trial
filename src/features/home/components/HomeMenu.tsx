'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HomeMenuPanel } from '@/features/home/components/HomeMenuPanel';
import { lockPageScroll, unlockPageScroll } from '@/features/home/data/lock-page-scroll';
import type { NavLink } from '@/features/home/data/home';
import { cn } from '@/lib/utils';

type HomeMenuProps = {
  nav: NavLink[];
  ctaHref?: string;
};

export function HomeMenu({ nav, ctaHref = '#review-form' }: HomeMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const scrollY = lockPageScroll();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      unlockPageScroll(scrollY);
    };
  }, [open]);

  return (
    <div className="hidden max-compact:block">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="relative z-30 flex h-4 w-menu flex-col justify-center"
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={cn(
            'absolute h-0.5 w-full bg-ink transition-transform',
            open ? 'rotate-45' : '-translate-y-1',
          )}
        />
        <span
          className={cn(
            'absolute h-0.5 w-full bg-ink transition-transform',
            open ? '-rotate-45' : 'translate-y-1',
          )}
        />
      </button>
      {open
        ? createPortal(
            <HomeMenuPanel nav={nav} ctaHref={ctaHref} onClose={() => setOpen(false)} />,
            document.body,
          )
        : null}
    </div>
  );
}
