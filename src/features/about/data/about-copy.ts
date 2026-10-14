import { SITE_MEDIA } from '@/lib/site-media';

export const ABOUT_PAGE = {
  title: 'A small firm,\non purpose.',
  titleSm: 'A small firm, on purpose.',
  lead: 'Two attorneys, two offices, and a small team. We stay small so the lawyer you meet is the one who works your case.',
  leadSm: 'The lawyer you meet is the one who works your case.',
  photoAlt: 'Olive grove at sunrise',
  attorneysTitle: 'Your attorneys',
  portraitNote: 'Portrait to shoot',
  promisesTitle: 'What you can expect from us',
  promisesTitleSm: 'What to expect',
} as const;

export const ABOUT_ASSETS = {
  hero: SITE_MEDIA.aboutHero,
  ludmila: SITE_MEDIA.ludmila,
  eric: SITE_MEDIA.eric,
} as const;
