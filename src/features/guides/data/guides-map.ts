import { GUIDES_PAGE } from '@/features/guides/data/guides-copy';
import { type GuideFilter } from '@/features/guides/data/guides-filters';
import {
  formatGuideDate,
  formatGuideRead,
  GUIDE_CATEGORY_LABEL,
  toGuideHref,
} from '@/features/guides/data/guides-format';
import { GUIDES_NAV } from '@/features/guides/data/guides-nav';
import type { GuideArticle, GuideEntry } from '@/features/guides/data/guides-types';
import { HOME_FOOTER } from '@/features/home/data/home-footer';

export function filterGuideArticles(articles: readonly GuideArticle[], filter: GuideFilter) {
  return filter === 'all' ? [...articles] : articles.filter((row) => row.category === filter);
}

function toListArticle(entry: GuideEntry): GuideArticle {
  return {
    category: entry.category,
    categoryLabel: GUIDE_CATEGORY_LABEL[entry.category],
    title: entry.title,
    deck: entry.deck,
    date: formatGuideDate(entry.publishedAt),
    read: formatGuideRead(entry.readMinutes),
    slug: entry.slug,
    href: toGuideHref(entry.slug),
    hideOnCompact: entry.hideOnCompact,
  };
}

export function toGuidesView(entries: readonly GuideEntry[]) {
  return {
    nav: GUIDES_NAV,
    title: GUIDES_PAGE.title,
    lead: GUIDES_PAGE.lead,
    articles: entries.map(toListArticle),
    footer: HOME_FOOTER,
  };
}
