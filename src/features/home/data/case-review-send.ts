import { Resend, type CreateEmailOptions } from 'resend';
import {
  CONFIRM_SUBJECT,
  confirmHtml,
  confirmText,
} from '@/features/home/data/case-review-confirm';
import { leadHtml, leadSubject, leadText } from '@/features/home/data/case-review-lead';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';

const FROM = process.env.CASE_REVIEW_FROM ?? 'Olive Legal Group <hello@kanopylabs.com>';
const INBOX = process.env.CASE_REVIEW_INBOX ?? 'hello@kanopylabs.com';

async function sendOrThrow(resend: Resend, payload: CreateEmailOptions) {
  const { error } = await resend.emails.send(payload);
  if (error) throw new Error(error.message);
}

export async function deliverCaseReview(values: CaseReviewValues) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('Email is not configured');

  const resend = new Resend(key);
  const replyTo = values.email.trim() || undefined;

  await sendOrThrow(resend, {
    from: FROM,
    to: INBOX,
    replyTo,
    subject: leadSubject(values),
    html: leadHtml(values),
    text: leadText(values),
  });

  if (!values.email.trim()) return;

  await sendOrThrow(resend, {
    from: FROM,
    to: values.email.trim(),
    subject: CONFIRM_SUBJECT,
    html: confirmHtml(values),
    text: confirmText(values),
  });
}
