import type { GuideFilter } from '@/features/guides/data/guides-filters';

export type GuideCategory = Exclude<GuideFilter, 'all'>;

export type GuideArticle = {
  category: GuideCategory;
  categoryLabel: string;
  title: string;
  deck: string;
  date: string;
  read: string;
  slug: string;
  href: string;
  hideOnCompact?: boolean;
};

export type GuideSection =
  | { title: string; body: string }
  | { title: string; bullets: readonly string[] };

export type GuideEntry = {
  slug: string;
  title: string;
  deck: string;
  category: GuideCategory;
  publishedAt: string;
  readMinutes: number;
  author: string;
  featured: boolean;
  hideOnCompact?: boolean;
  src: string;
  alt: string;
  lead: string;
  sections: readonly GuideSection[];
};

export type GuideArticleDetail = {
  slug: string;
  href: string;
  crumbGuides: string;
  crumbSep: string;
  crumbTopic: string;
  crumbHref: string;
  topicHref: string;
  title: string;
  byline: string;
  bylineSm: string;
  src: string;
  alt: string;
  disclaimer: string;
  disclaimerSm: string;
  relatedTitle: string;
  calloutTitle: string;
  calloutTitleSm: string;
  calloutBody: string;
  calloutBodySm: string;
  calloutCta: string;
  calloutHref: string;
};
