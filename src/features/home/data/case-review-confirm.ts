import { escapeHtml, MAIL, wrapMail } from '@/features/home/data/case-review-mail';
import { PHONE_CA, PHONE_NV } from '@/features/home/data/home';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';

export const CONFIRM_SUBJECT = 'We received your case review';

export function reviewPhone(state: string) {
  return state === 'Nevada' ? PHONE_NV : PHONE_CA;
}

export function confirmText(values: CaseReviewValues) {
  const phone = reviewPhone(values.state);
  return [
    `Hi ${values.firstName},`,
    '',
    'Thanks for writing in. One of our lawyers will call you back shortly to talk through your case.',
    '',
    `If you would rather not wait, call ${phone}.`,
    '',
    'Olive Legal Group',
    '',
    'Confidential. Sending this doesn’t create an attorney–client relationship.',
  ].join('\n');
}

export function confirmHtml(values: CaseReviewValues) {
  const { pine, ink, gold } = MAIL;
  const phone = reviewPhone(values.state);
  const p = `margin:0 0 14px;font-family:Arial,sans-serif;font-size:16px;line-height:26px;color:${ink};`;
  return wrapMail(
    CONFIRM_SUBJECT,
    `<p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:28px;color:${pine};">We received your review</p>
<p style="${p}">Hi ${escapeHtml(values.firstName)},</p>
<p style="${p}">Thanks for writing in. One of our lawyers will call you back shortly to talk through your case.</p>
<p style="margin:0;font-family:Arial,sans-serif;font-size:16px;line-height:26px;color:${ink};">If you would rather not wait, call <a href="tel:${phone.replace(/\D/g, '')}" style="color:${gold};">${phone}</a>.</p>`,
  );
}
