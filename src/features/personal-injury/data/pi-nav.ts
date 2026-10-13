import type { NavLink } from '@/features/home/data/home';

export const PI_NAV: NavLink[] = [
  { href: '#cases', label: 'Practice areas' },
  { href: '#results', label: 'Results' },
  { href: '/#attorneys', label: 'About' },
  { href: '#review-form', label: 'Contact' },
];

export const PI_ASSETS = {
  freeway: '/images/pi-freeway.jpg',
} as const;
