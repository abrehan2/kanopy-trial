import { NextResponse } from 'next/server';
import {
  clientKey,
  markReviewSent,
  remainingReviewWait,
} from '@/features/home/data/case-review-limit';
import { deliverCaseReview } from '@/features/home/data/case-review-send';
import {
  CASE_REVIEW_COPY,
  caseReviewT,
  makeCaseReviewSchema,
} from '@/features/home/schemas/case-review';

export async function POST(request: Request) {
  const key = clientKey(request);
  const wait = remainingReviewWait(key);
  if (wait > 0) {
    return NextResponse.json(
      { message: `Please wait ${wait} seconds before sending again.`, retryAfter: wait },
      { status: 429, headers: { 'Retry-After': String(wait) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: CASE_REVIEW_COPY.formAlert }, { status: 400 });
  }

  const parsed = makeCaseReviewSchema(caseReviewT).safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: CASE_REVIEW_COPY.formAlert }, { status: 400 });
  }

  try {
    await deliverCaseReview(parsed.data);
    markReviewSent(key);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: 'Could not send your review. Try again.' },
      { status: 502 },
    );
  }
}
