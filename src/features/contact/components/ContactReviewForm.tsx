'use client';

import { useRouter } from 'next/navigation';
import { CaseReviewForm } from '@/features/home/components/CaseReviewForm';
import { toThanksHref } from '@/features/thanks/data/thanks-map';

export function ContactReviewForm() {
  const router = useRouter();

  return (
    <CaseReviewForm
      onSuccess={(values) => router.push(toThanksHref(values.firstName, values.phone))}
    />
  );
}
