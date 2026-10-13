import { GUIDES_FEATURED } from '@/features/guides/data/guides-copy';

export const GUIDE_ARTICLE = {
  slug: GUIDES_FEATURED.slug,
  href: GUIDES_FEATURED.href,
  crumbGuides: 'Guides',
  crumbSep: '  /  ',
  crumbTopic: 'Lemon law',
  crumbHref: '/guides',
  topicHref: '/lemon-law',
  title: GUIDES_FEATURED.title,
  byline: 'By Ludmila Kucerkova Romero, California counsel  ·  October 2, 2026  ·  5 min read',
  bylineSm: 'Ludmila Kucerkova Romero  ·  5 min read',
  src: GUIDES_FEATURED.src,
  alt: GUIDES_FEATURED.alt,
  disclaimer: 'This is general information, not legal advice for your situation.',
  disclaimerSm: 'General information, not legal advice.',
  relatedTitle: 'Related guides',
  calloutTitle: 'Is this happening to you?',
  calloutTitleSm: 'Happening to you?',
  calloutBody: 'Send us your repair orders. We’ll tell you for free whether you have a case.',
  calloutBodySm: 'We’ll tell you for free if you have a case.',
  calloutCta: 'Get my free case review',
  calloutHref: '/#review-form',
} as const;

export const GUIDE_RELATED = [
  { categoryLabel: 'Lemon law', title: 'Does California’s lemon law cover used cars?' },
  { categoryLabel: 'Personal injury', title: 'Should you talk to the other driver’s insurance company?' },
] as const;
