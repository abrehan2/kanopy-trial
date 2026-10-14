import { SITE_MEDIA } from '@/lib/site-media';

export const CONTACT_PAGE = {
  title: 'Talk to us',
  lead: 'Fill out the form, or call the office closest to you. Either way, a real person gets back to you.',
  leadSm: 'Tap to call the office closest to you.',
  directions: 'Directions',
  callCa: 'Call California',
  callNv: 'Call Nevada',
} as const;

export const CONTACT_ASSETS = {
  irvine: SITE_MEDIA.irvine,
  henderson: SITE_MEDIA.henderson,
} as const;
