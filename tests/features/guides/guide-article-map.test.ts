import { describe, expect, test } from 'vitest';
import { toGuideArticleView } from '@/features/guides/data/guide-article-map';

describe('toGuideArticleView', () => {
  test('maps the static lemon-law article from the frame', () => {
    const view = toGuideArticleView('no-problem-found');
    expect(view?.article.title).toContain('no problem found');
    expect(view?.lead).toContain('third time');
    expect(view?.sections).toHaveLength(3);
    expect(view?.related).toHaveLength(2);
    expect(view?.nav.some((link) => link.href === '/guides')).toBe(true);
  });

  test('returns null for an unknown slug', () => {
    expect(toGuideArticleView('missing')).toBeNull();
  });
});
