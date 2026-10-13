import { PHONE_CA } from '@/features/home/data/home';

export const NOT_FOUND_PAGE = {
  title: 'We can’t find that page.',
  lead: 'It may have moved. These will get you where you need to go.',
  leadSm: 'Try one of these instead.',
} as const;

export const NOT_FOUND_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Free case review', href: '/#review-form' },
  { label: 'Guides', href: '/guides' },
  { label: `Call ${PHONE_CA}`, href: `tel:${PHONE_CA}` },
] as const;
