import { describe, expect, test } from 'vitest';
import {
  formatGuideByline,
  formatGuideDate,
  formatGuideRead,
  isRemoteSrc,
  toGuideHref,
} from '@/features/guides/data/guides-format';
import { parseGuideEntry } from '@/features/guides/data/guides-parse';
import { isGuidesRevalidateSecret, readGuideSlug } from '@/features/guides/data/guides-revalidate';

describe('guides format and parse', () => {
  test('formats dates, bylines, and remote image urls', () => {
    expect(formatGuideDate('2026-10-02')).toBe('October 2, 2026');
    expect(formatGuideRead(5)).toBe('5 min read');
    expect(formatGuideByline('Ludmila Kucerkova Romero', '2026-10-02', 5)).toContain('5 min read');
    expect(toGuideHref('no-problem-found')).toBe('/guides/no-problem-found');
    expect(isRemoteSrc('https://images.ctfassets.net/x/hero.jpg')).toBe(true);
    expect(isRemoteSrc('/images/guides-featured.jpg')).toBe(false);
  });

  test('parses a Contentful guide entry with an included asset', () => {
    const entry = parseGuideEntry(
      {
        fields: {
          slug: { 'en-US': 'used-cars-lemon-law' },
          title: { 'en-US': 'Does California’s lemon law cover used cars?' },
          category: { 'en-US': 'lemon-law' },
          deck: { 'en-US': 'Often, yes.' },
          publishedAt: { 'en-US': '2026-09-15' },
          readMinutes: { 'en-US': 6 },
          featured: { 'en-US': false },
          heroImage: { 'en-US': { sys: { id: 'asset-1' } } },
          heroAlt: { 'en-US': 'A car on a lift' },
          lead: { 'en-US': 'Used cars can still be lemons.' },
          sections: { 'en-US': [{ title: 'Warranty', body: 'Keep the paperwork.' }] },
        },
      },
      [{ sys: { id: 'asset-1' }, fields: { file: { 'en-US': { url: '//images.ctfassets.net/x/car.jpg' } } } }],
    );
    expect(entry?.src).toBe('https://images.ctfassets.net/x/car.jpg');
    expect(entry?.category).toBe('lemon-law');
    expect(entry?.sections).toHaveLength(1);
  });

  test('parses a CDA entry that is already unwrapped from locales', () => {
    const entry = parseGuideEntry(
      {
        fields: {
          slug: 'no-problem-found',
          title: 'What to do when the dealer says “no problem found”',
          category: 'lemon-law',
          featured: true,
          heroImage: { sys: { id: 'asset-2' } },
          lead: 'You bring your car in for the third time.',
          sections: [
            { title: 'Why that repair order still matters', body: 'Keep the order.' },
            { title: 'Next visit', bullets: ['Get a copy.'] },
          ],
        },
      },
      [{ sys: { id: 'asset-2' }, fields: { file: { url: '//images.ctfassets.net/x/hero.jpg' } } }],
    );
    expect(entry?.src).toBe('https://images.ctfassets.net/x/hero.jpg');
    expect(entry?.sections).toHaveLength(2);
  });

  test('reads a webhook slug and rejects an empty secret', () => {
    expect(readGuideSlug({ fields: { slug: { 'en-US': 'no-problem-found' } } })).toBe(
      'no-problem-found',
    );
    expect(isGuidesRevalidateSecret('nope')).toBe(false);
  });
});
