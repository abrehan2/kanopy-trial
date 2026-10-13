'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getSecondsRemaining,
  REVIEW_COOLDOWN,
  REVIEW_COOLDOWN_KEY,
  startCooldown,
} from '@/features/home/data/case-review-timer';

export function useCaseReviewCooldown() {
  // Start at 0 so SSR and the first client paint match; localStorage syncs in useEffect.
  const [secondsLeft, setSecondsLeft] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const run = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const update = () => {
      const remaining = getSecondsRemaining(REVIEW_COOLDOWN_KEY, REVIEW_COOLDOWN);
      setSecondsLeft(remaining);
      if (remaining <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    update();
    intervalRef.current = setInterval(update, 1000);
  }, []);

  useEffect(() => {
    if (getSecondsRemaining(REVIEW_COOLDOWN_KEY, REVIEW_COOLDOWN) > 0) run();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [run]);

  const start = useCallback(() => {
    startCooldown(REVIEW_COOLDOWN_KEY);
    run();
  }, [run]);

  return { secondsLeft, start };
}
