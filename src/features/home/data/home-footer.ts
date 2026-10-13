import { PHONE_CA, PHONE_NV, type FooterCol } from '@/features/home/data/home';

export const HOME_FOOTER: FooterCol[] = [
  {
    title: 'Practice areas',
    lines: ['Personal injury', 'Lemon law', 'Workers’ compensation'],
  },
  {
    title: 'Firm',
    lines: ['Results', 'About', 'Contact'],
  },
  {
    title: 'California',
    lines: ['Irvine office', '18101 Von Karman Ave, Suite 1200', PHONE_CA],
  },
  {
    title: 'Nevada',
    lines: ['Henderson office', '3333 E Serene Ave, Suite 150', PHONE_NV],
  },
];
