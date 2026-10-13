import { afterEach, describe, expect, test } from 'vitest';
import {
  clientKey,
  markReviewSent,
  remainingReviewWait,
  resetReviewLimit,
} from '@/features/home/data/case-review-limit';

afterEach(() => {
  resetReviewLimit();
});

describe('case review limit', () => {
  test('blocks a second send inside one minute', () => {
    const now = 1_000_000;
    markReviewSent('1.1.1.1', now);
    expect(remainingReviewWait('1.1.1.1', now + 1_000)).toBe(59);
    expect(remainingReviewWait('1.1.1.1', now + 60_000)).toBe(0);
  });

  test('reads the client ip from forwarded headers', () => {
    const request = new Request('http://localhost/api/case-review', {
      headers: { 'x-forwarded-for': '203.0.113.8, 10.0.0.1' },
    });
    expect(clientKey(request)).toBe('203.0.113.8');
  });
});
