import { loadGuideEntries } from '@/features/guides/data/guides-api';
import { toGuideArticleView } from '@/features/guides/data/guide-article-map';

export async function getGuideArticleView(slug: string) {
  return toGuideArticleView(slug, await loadGuideEntries());
}
