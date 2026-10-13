import { describe, expect, test } from 'vitest';
import { toPiView } from '@/features/personal-injury/data/pi-map';

describe('toPiView', () => {
  test('maps every personal injury section from the frame copy', () => {
    const view = toPiView();
    expect(view.nav).toHaveLength(5);
    expect(view.casesLeft).toHaveLength(3);
    expect(view.casesRight).toHaveLength(3);
    expect(view.results).toHaveLength(3);
    expect(view.now).toHaveLength(5);
    expect(view.states).toHaveLength(4);
    expect(view.faq).toHaveLength(4);
    expect(view.footer).toHaveLength(4);
    expect(view.results[0]?.result).toBe('$1,250,000');
    expect(view.faq[0]?.answer).toContain('claim number');
  });
});
