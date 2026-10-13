import { http, toErrorMessage } from '@/lib/http';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';

export async function sendCaseReview(input: CaseReviewValues) {
  try {
    await http.post('/api/case-review', input);
  } catch (error) {
    throw new Error(toErrorMessage(error, 'Could not send your review. Try again.'));
  }
}
