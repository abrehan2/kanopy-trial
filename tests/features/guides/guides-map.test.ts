import { describe, expect, test } from 'vitest';
import { filterGuideArticles, toGuidesView } from '@/features/guides/data/guides-map';
import { GUIDE_FIXTURE } from './guides-entries';

describe('toGuidesView', () => {
  test('maps every Contentful entry into a list row', () => {
    const view = toGuidesView(GUIDE_FIXTURE);
    expect(view.title).toBe('Guides');
    expect(view.articles).toHaveLength(3);
    expect(view.articles[0]?.href).toBe('/guides/other-driver-insurance');
    expect(view.articles.filter((row) => row.category === 'personal-injury')).toHaveLength(1);
    expect(view.nav.some((link) => link.href === '/guides')).toBe(true);
    expect(view.footer.some((col) => col.lines.some((line) => line.href === '/guides'))).toBe(true);
  });

  test('filters articles by topic', () => {
    const view = toGuidesView(GUIDE_FIXTURE);
    expect(filterGuideArticles(view.articles, 'lemon-law')).toHaveLength(1);
    expect(filterGuideArticles(view.articles, 'personal-injury')).toHaveLength(1);
    expect(filterGuideArticles(view.articles, 'all')).toHaveLength(3);
  });

  test('returns an empty list when Contentful is empty', () => {
    const view = toGuidesView([]);
    expect(view.articles).toHaveLength(0);
  });
});
