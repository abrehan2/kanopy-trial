import type { GuideCategory } from '@/features/guides/data/guides-types';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const GUIDE_CATEGORY_LABEL: Record<GuideCategory, string> = {
  'personal-injury': 'Personal injury',
  'lemon-law': 'Lemon law',
  'workers-comp': 'Workers’ comp',
};

export const GUIDE_TOPIC_HREF: Record<GuideCategory, string> = {
  'personal-injury': '/personal-injury',
  'lemon-law': '/lemon-law',
  'workers-comp': '/workers-comp',
};

export function formatGuideDate(iso: string) {
  const date = new Date(iso);
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

export function formatGuideRead(minutes: number) {
  return `${minutes} min read`;
}

export function formatGuideMeta(iso: string, minutes: number) {
  return `${formatGuideDate(iso)}  ·  ${formatGuideRead(minutes)}`;
}

export function formatGuideByline(author: string, iso: string, minutes: number) {
  return `By ${author}, California counsel  ·  ${formatGuideMeta(iso, minutes)}`;
}

export function formatGuideBylineSm(author: string, minutes: number) {
  return `${author}  ·  ${formatGuideRead(minutes)}`;
}

export function toGuideHref(slug: string) {
  return `/guides/${slug}`;
}

export function isRemoteSrc(src: string) {
  return src.startsWith('https://') || src.startsWith('http://');
}
