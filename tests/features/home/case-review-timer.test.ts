import { afterEach, describe, expect, test } from 'vitest';
import {
  formatWaitTime,
  getSecondsRemaining,
  REVIEW_COOLDOWN,
  REVIEW_COOLDOWN_KEY,
  reviewSubmitLabel,
  startCooldown,
} from '@/features/home/data/case-review-timer';

afterEach(() => {
  localStorage.clear();
});

describe('case review timer', () => {
  test('persists the remaining second across reads', () => {
    startCooldown(REVIEW_COOLDOWN_KEY);
    expect(getSecondsRemaining(REVIEW_COOLDOWN_KEY, REVIEW_COOLDOWN)).toBeGreaterThanOrEqual(59);
    expect(getSecondsRemaining(REVIEW_COOLDOWN_KEY, REVIEW_COOLDOWN)).toBeGreaterThan(0);
  });

  test('treats a stale stamp as expired', () => {
    localStorage.setItem(REVIEW_COOLDOWN_KEY, String(Date.now() - 61_000));
    expect(getSecondsRemaining(REVIEW_COOLDOWN_KEY, REVIEW_COOLDOWN)).toBe(0);
  });

  test('labels the submit button for wait and send', () => {
    expect(reviewSubmitLabel(true, 12)).toBe('Sending…');
    expect(reviewSubmitLabel(false, 9)).toBe('Try again in 00:09');
    expect(reviewSubmitLabel(false, 0)).toBe('Get my free case review');
    expect(formatWaitTime(60)).toBe('01:00');
  });
});
