import { describe, expect, test } from 'vitest';
import { toResultsView } from '@/features/results/data/results-map';

describe('toResultsView', () => {
  test('maps every results section from the frame copy', () => {
    const view = toResultsView();
    expect(view.nav).toHaveLength(4);
    expect(view.cases).toHaveLength(9);
    expect(view.reviews).toHaveLength(4);
    expect(view.cases.filter((row) => row.category === 'lemon-law')).toHaveLength(3);
    expect(view.cases[0]?.result).toBe('$1,250,000');
    expect(view.reviews[0]?.byline).toContain('Maria');
    expect(view.footer.some((col) => col.lines.some((line) => line.href === '/results'))).toBe(
      true,
    );
  });
});
