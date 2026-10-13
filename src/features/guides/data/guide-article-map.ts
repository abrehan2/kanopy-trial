import {
  GUIDE_ARTICLE,
  GUIDE_RELATED,
} from '@/features/guides/data/guide-article-copy';
import {
  GUIDE_ARTICLE_LEAD,
  GUIDE_ARTICLE_SECTIONS,
} from '@/features/guides/data/guide-article-body';
import { GUIDES_NAV } from '@/features/guides/data/guides-nav';
import { HOME_FOOTER } from '@/features/home/data/home-footer';

export function toGuideArticleView(slug: string) {
  if (slug !== GUIDE_ARTICLE.slug) return null;
  return {
    nav: GUIDES_NAV,
    footer: HOME_FOOTER,
    article: GUIDE_ARTICLE,
    lead: GUIDE_ARTICLE_LEAD,
    sections: GUIDE_ARTICLE_SECTIONS,
    related: GUIDE_RELATED,
  };
}
