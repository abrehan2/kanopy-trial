import { toGuideArticleView } from '@/features/guides/data/guide-article-map';

export function getGuideArticleView(slug: string) {
  return toGuideArticleView(slug);
}
