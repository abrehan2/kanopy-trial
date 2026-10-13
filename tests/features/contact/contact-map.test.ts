import { describe, expect, test } from 'vitest';
import { toContactView } from '@/features/contact/data/contact-map';

describe('toContactView', () => {
  test('maps offices, photos, and footer contact link from the frame', () => {
    const view = toContactView();
    expect(view.nav).toHaveLength(4);
    expect(view.offices).toHaveLength(2);
    expect(view.photos).toHaveLength(2);
    expect(view.offices[0]?.state).toBe('California');
    expect(view.offices[1]?.phone).toBe('(702) 555-0163');
    expect(view.photos[0]?.caption).toBe('Irvine office');
    expect(view.footer.some((col) => col.lines.some((line) => line.href === '/contact'))).toBe(
      true,
    );
  });
});
