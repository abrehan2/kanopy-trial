import { describe, expect, test } from 'vitest';
import { toHomeView } from '@/features/home/data/home-map';

describe('toHomeView', () => {
  test('maps every home section from the frame copy', () => {
    const view = toHomeView();
    expect(view.nav).toHaveLength(4);
    expect(view.practices).toHaveLength(4);
    expect(view.results).toHaveLength(3);
    expect(view.advice).toHaveLength(3);
    expect(view.steps).toHaveLength(4);
    expect(view.offices).toHaveLength(2);
    expect(view.faq).toHaveLength(6);
    expect(view.footer).toHaveLength(4);
    expect(view.results[0]?.result).toBe('$1,250,000');
  });
});
