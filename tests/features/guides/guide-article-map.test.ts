import { describe, expect, test } from 'vitest';
import { toGuideArticleView } from '@/features/guides/data/guide-article-map';
import { GUIDE_FIXTURE } from './guides-entries';

describe('toGuideArticleView', () => {
  test('maps a Contentful guide into the article view', () => {
    const view = toGuideArticleView('other-driver-insurance', GUIDE_FIXTURE);
    expect(view?.article.title).toContain('insurance company');
    expect(view?.lead).toContain('insurer will call');
    expect(view?.sections).toHaveLength(2);
    expect(view?.related).toHaveLength(2);
    expect(view?.related[0]?.href).toBe('/guides/nevada-seven-days');
    expect(view?.nav.some((link) => link.href === '/guides')).toBe(true);
  });

  test('returns null for an unknown slug', () => {
    expect(toGuideArticleView('missing', GUIDE_FIXTURE)).toBeNull();
    expect(toGuideArticleView('other-driver-insurance', [])).toBeNull();
  });
});
