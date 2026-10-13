import { GUIDES_ARTICLES, type GuideArticle } from '@/features/guides/data/guides-articles';
import { GUIDES_FEATURED, GUIDES_PAGE } from '@/features/guides/data/guides-copy';
import { type GuideFilter } from '@/features/guides/data/guides-filters';
import { GUIDES_NAV } from '@/features/guides/data/guides-nav';
import { HOME_FOOTER } from '@/features/home/data/home-footer';

export function filterGuideArticles(articles: readonly GuideArticle[], filter: GuideFilter) {
  return filter === 'all' ? [...articles] : articles.filter((row) => row.category === filter);
}

export function showGuideFeatured(filter: GuideFilter) {
  return filter === 'all' || filter === GUIDES_FEATURED.category;
}

export function toGuidesView() {
  return {
    nav: GUIDES_NAV,
    title: GUIDES_PAGE.title,
    lead: GUIDES_PAGE.lead,
    featured: GUIDES_FEATURED,
    articles: GUIDES_ARTICLES,
    footer: HOME_FOOTER,
  };
}
