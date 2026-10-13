import { PHONE_CA, PHONE_NV, type FooterCol } from '@/features/home/data/home';

export const HOME_FOOTER: FooterCol[] = [
  {
    title: 'Practice areas',
    lines: [
      { label: 'Personal injury', href: '/personal-injury' },
      { label: 'Lemon law', href: '/lemon-law' },
      { label: 'Workers’ compensation', href: '/workers-comp' },
    ],
  },
  {
    title: 'Firm',
    lines: [
      { label: 'Results', href: '/results' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'California',
    lines: [
      { label: 'Irvine office' },
      { label: '18101 Von Karman Ave, Suite 1200' },
      { label: PHONE_CA },
    ],
  },
  {
    title: 'Nevada',
    lines: [
      { label: 'Henderson office' },
      { label: '3333 E Serene Ave, Suite 150' },
      { label: PHONE_NV },
    ],
  },
];
