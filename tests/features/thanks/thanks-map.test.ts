import { describe, expect, test } from 'vitest';
import { formatThanksLead, formatThanksTitle, toThanksHref, toThanksView } from '@/features/thanks/data/thanks-map';

describe('toThanksView', () => {
  test('personalizes the Figma title and lead from the submitted name and phone', () => {
    const view = toThanksView('Maria', '(714) 555-0199');
    expect(view.title).toBe('Thanks, Maria. We have it.');
    expect(view.lead).toContain('(714) 555-0199');
    expect(view.leadSm).toBe('We’ll call you at (714) 555-0199.');
    expect(view.items).toHaveLength(4);
    expect(view.items[0]?.labelSm).toBe('Police report number');
    expect(view.nav.some((link) => link.href === '/contact')).toBe(true);
  });

  test('falls back when name and phone are missing', () => {
    const view = toThanksView();
    expect(formatThanksTitle()).toBe('Thanks. We have it.');
    expect(formatThanksLead()).toContain('will call you.');
    expect(view.title).toBe('Thanks. We have it.');
  });

  test('builds the thanks href from the submitted fields', () => {
    expect(toThanksHref('Maria', '(714) 555-0199')).toBe(
      '/thanks?name=Maria&phone=%28714%29+555-0199',
    );
  });
});
