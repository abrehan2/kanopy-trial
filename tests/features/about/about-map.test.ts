import { describe, expect, test } from 'vitest';
import { toAboutView } from '@/features/about/data/about-map';

describe('toAboutView', () => {
  test('maps every about section from the frame copy', () => {
    const view = toAboutView();
    expect(view.nav).toHaveLength(4);
    expect(view.attorneys).toHaveLength(2);
    expect(view.promises).toHaveLength(3);
    expect(view.offices).toHaveLength(2);
    expect(view.attorneys[0]?.name).toContain('Ludmila');
    expect(view.promises[0]?.title).toContain('lawyer, not a case manager');
    expect(view.footer.some((col) => col.lines.some((line) => line.href === '/about'))).toBe(true);
  });
});
