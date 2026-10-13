import { describe, expect, test } from 'vitest';
import { confirmHtml, confirmText, reviewPhone } from '@/features/home/data/case-review-confirm';
import { leadHtml, leadSubject, leadText } from '@/features/home/data/case-review-lead';
import { escapeHtml, MAIL, mailDash } from '@/features/home/data/case-review-mail';
import { PHONE_NV } from '@/features/home/data/home';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';

const values: CaseReviewValues = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  phone: '(555) 555-5555',
  email: 'ada@example.com',
  state: 'California',
  caseType: 'Personal injury',
  story: 'Rear-ended on the 405.',
  sms: true,
};

describe('case review mail', () => {
  test('escapes html and dashes blank fields', () => {
    expect(escapeHtml('<script>alert("x")</script>')).toBe(
      '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;',
    );
    expect(mailDash('  ')).toBe('—');
  });

  test('picks the Nevada line for Nevada reviews', () => {
    expect(reviewPhone('Nevada')).toBe(PHONE_NV);
  });

  test('builds a branded confirmation', () => {
    const html = confirmHtml(values);
    expect(html).toContain('Olive Legal Group');
    expect(html).toContain(MAIL.pine);
    expect(html).toContain(MAIL.gold);
    expect(html).toContain('Hi Ada');
    expect(confirmText(values)).toContain('Hi Ada,');
  });

  test('lists every submitted field for the inbox', () => {
    expect(leadSubject(values)).toBe('New case review — Ada Lovelace');
    expect(leadText(values)).toContain('SMS updates: Yes');
    expect(leadHtml({ ...values, story: '<b>hack</b>' })).toContain('&lt;b&gt;hack&lt;/b&gt;');
    expect(leadHtml({ ...values, story: '<b>hack</b>' })).not.toContain('<b>hack</b>');
  });
});
