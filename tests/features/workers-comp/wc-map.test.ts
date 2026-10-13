import { describe, expect, test } from 'vitest';
import { toWcView } from '@/features/workers-comp/data/wc-map';

describe('toWcView', () => {
  test('maps every workers’ comp section from the frame copy', () => {
    const view = toWcView();
    expect(view.nav).toHaveLength(4);
    expect(view.casesLeft).toHaveLength(3);
    expect(view.casesRight).toHaveLength(3);
    expect(view.results).toHaveLength(3);
    expect(view.now).toHaveLength(5);
    expect(view.states).toHaveLength(4);
    expect(view.faq).toHaveLength(4);
    expect(view.results[0]?.result).toBe('$318,000');
    expect(view.faq[0]?.answer).toContain('illegal in both states');
  });
});
