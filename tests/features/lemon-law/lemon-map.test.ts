import { describe, expect, test } from 'vitest';
import { toLemonView } from '@/features/lemon-law/data/lemon-map';

describe('toLemonView', () => {
  test('maps every lemon law section from the frame copy', () => {
    const view = toLemonView();
    expect(view.nav).toHaveLength(4);
    expect(view.casesLeft).toHaveLength(3);
    expect(view.casesRight).toHaveLength(3);
    expect(view.results).toHaveLength(3);
    expect(view.now).toHaveLength(4);
    expect(view.states).toHaveLength(4);
    expect(view.faq).toHaveLength(4);
    expect(view.results[0]?.result).toBe('$87,400');
    expect(view.faq[0]?.answer).toContain('manufacturer pays');
  });
});
