import { describe, expect, test } from 'vitest';
import { toNotFoundView } from '@/features/not-found/data/not-found-map';

describe('toNotFoundView', () => {
  test('maps the static 404 frame', () => {
    const view = toNotFoundView();
    expect(view.title).toContain('find that page');
    expect(view.lead).toContain('may have moved');
    expect(view.leadSm).toContain('instead');
    expect(view.links).toHaveLength(4);
    expect(view.links[0]?.href).toBe('/');
    expect(view.links[2]?.href).toBe('/guides');
    expect(view.nav.some((link) => link.href === '/guides')).toBe(true);
  });
});
