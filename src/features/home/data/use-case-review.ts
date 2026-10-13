'use client';

import { useState } from 'react';
import { sendCaseReview } from '@/features/home/data/case-review-api';
import { useCaseReviewCooldown } from '@/features/home/data/use-case-review-cooldown';
import {
  formatWaitTime,
  getSecondsRemaining,
  REVIEW_COOLDOWN,
  REVIEW_COOLDOWN_KEY,
} from '@/features/home/data/case-review-timer';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';
import { showError, showErrorFrom, showSuccess } from '@/lib/toast';

type UseCaseReviewSubmitOptions = { toast?: boolean };

export function useCaseReviewSubmit(options?: UseCaseReviewSubmitOptions) {
  const [saving, setSaving] = useState(false);
  const { secondsLeft, start } = useCaseReviewCooldown();
  const toast = options?.toast ?? true;

  const submit = async (values: CaseReviewValues) => {
    const wait = getSecondsRemaining(REVIEW_COOLDOWN_KEY, REVIEW_COOLDOWN);
    if (wait > 0) {
      showError(`Please wait ${formatWaitTime(wait)} before sending again.`);
      return false;
    }
    setSaving(true);
    try {
      await sendCaseReview(values);
      start();
      if (toast) showSuccess('We’ll call you back shortly.');
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      if (message.startsWith('Please wait')) start();
      showErrorFrom(error, 'Could not send your review. Try again.');
      return false;
    } finally {
      setSaving(false);
    }
  };

  return { submit, saving, secondsLeft };
}
