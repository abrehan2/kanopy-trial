import { describe, expect, test } from 'vitest';
import { filterGuideArticles, showGuideFeatured, toGuidesView } from '@/features/guides/data/guides-map';

describe('toGuidesView', () => {
  test('maps the listing, featured story, and shared footer', () => {
    const view = toGuidesView();
    expect(view.title).toBe('Guides');
    expect(view.articles).toHaveLength(6);
    expect(view.featured.category).toBe('lemon-law');
    expect(view.articles.filter((row) => row.category === 'personal-injury')).toHaveLength(3);
    expect(view.nav.some((link) => link.href === '/guides')).toBe(true);
    expect(view.footer.some((col) => col.lines.some((line) => line.href === '/guides'))).toBe(true);
    expect(view.articles.at(-1)?.hideOnCompact).toBe(true);
  });

  test('filters articles and hides featured when the topic does not match', () => {
    const view = toGuidesView();
    expect(filterGuideArticles(view.articles, 'lemon-law')).toHaveLength(1);
    expect(showGuideFeatured('lemon-law')).toBe(true);
    expect(showGuideFeatured('personal-injury')).toBe(false);
    expect(filterGuideArticles(view.articles, 'all')).toHaveLength(6);
  });
});
