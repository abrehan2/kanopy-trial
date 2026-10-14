import { GUIDE_ARTICLE } from '@/features/guides/data/guide-article-copy';
import {
  formatGuideByline,
  formatGuideBylineSm,
  GUIDE_CATEGORY_LABEL,
  GUIDE_TOPIC_HREF,
  toGuideHref,
} from '@/features/guides/data/guides-format';
import { GUIDES_NAV } from '@/features/guides/data/guides-nav';
import type { GuideArticleDetail, GuideEntry } from '@/features/guides/data/guides-types';
import { HOME_FOOTER } from '@/features/home/data/home-footer';

function pickRelated(slug: string, entries: readonly GuideEntry[]) {
  return entries.filter((item) => item.slug !== slug).slice(0, 2);
}

function toArticle(entry: GuideEntry): GuideArticleDetail {
  return {
    ...GUIDE_ARTICLE,
    slug: entry.slug,
    href: toGuideHref(entry.slug),
    crumbTopic: GUIDE_CATEGORY_LABEL[entry.category],
    topicHref: GUIDE_TOPIC_HREF[entry.category],
    title: entry.title,
    byline: formatGuideByline(entry.author, entry.publishedAt, entry.readMinutes),
    bylineSm: formatGuideBylineSm(entry.author, entry.readMinutes),
    src: entry.src,
    alt: entry.alt,
  };
}

export function toGuideArticleView(slug: string, entries: readonly GuideEntry[]) {
  const entry = entries.find((item) => item.slug === slug);
  if (!entry) return null;
  const related = pickRelated(slug, entries).map((item) => ({
    categoryLabel: GUIDE_CATEGORY_LABEL[item.category],
    title: item.title,
    href: toGuideHref(item.slug),
  }));
  return {
    nav: GUIDES_NAV,
    footer: HOME_FOOTER,
    article: toArticle(entry),
    lead: entry.lead,
    sections: entry.sections,
    related,
  };
}
