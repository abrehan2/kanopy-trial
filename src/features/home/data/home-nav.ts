import type { NavLink } from '@/features/home/data/home';

export const HOME_NAV: NavLink[] = [
  { href: '#advice', label: 'Practice areas' },
  { href: '#results', label: 'Results' },
  { href: '#attorneys', label: 'About' },
  { href: '#review-form', label: 'Contact' },
];

export const HOME_PRACTICES = [
  'Personal injury',
  'Lemon law',
  'Workers’ compensation',
  'California  ·  Nevada',
] as const;
