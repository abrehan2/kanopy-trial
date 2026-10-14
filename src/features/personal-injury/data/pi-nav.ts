import type { NavLink } from '@/features/home/data/home';
import { SITE_MEDIA } from '@/lib/site-media';

export const PI_NAV: NavLink[] = [
  { href: '#cases', label: 'Practice areas' },
  { href: '/results', label: 'Results' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const PI_ASSETS = {
  freeway: SITE_MEDIA.freeway,
} as const;
