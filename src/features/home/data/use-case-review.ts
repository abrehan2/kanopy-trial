'use client';

import { useState } from 'react';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';
import { showSuccess } from '@/lib/toast';

export function useCaseReviewSubmit() {
  const [saving, setSaving] = useState(false);

  const submit = async (_values: CaseReviewValues) => {
    setSaving(true);
    try {
      showSuccess('We’ll call you back shortly.');
    } finally {
      setSaving(false);
    }
  };

  return { submit, saving };
}
