import { escapeHtml, MAIL, mailDash, wrapMail } from '@/features/home/data/case-review-mail';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';

export function leadSubject(values: CaseReviewValues) {
  return `New case review — ${values.firstName} ${values.lastName}`;
}

export function leadRows(values: CaseReviewValues) {
  return [
    ['Name', `${values.firstName} ${values.lastName}`],
    ['Phone', values.phone],
    ['Email', mailDash(values.email)],
    ['Where it happened', values.state],
    ['Type of case', values.caseType],
    ['What happened', mailDash(values.story)],
    ['SMS updates', values.sms ? 'Yes' : 'No'],
  ] as const;
}

export function leadText(values: CaseReviewValues) {
  const lines = leadRows(values).map(([label, value]) => `${label}: ${value}`);
  return ['New case review', '', ...lines].join('\n');
}

export function leadHtml(values: CaseReviewValues) {
  const { ink, stone, paper, pine } = MAIL;
  const rows = leadRows(values)
    .map(([label, value], index) => {
      const bg = index % 2 === 0 ? paper : MAIL.white;
      const safe = escapeHtml(value).replaceAll('\n', '<br />');
      return `<tr>
<td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:13px;color:${stone};width:38%;background:${bg};">${escapeHtml(label)}</td>
<td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:15px;color:${ink};background:${bg};">${safe}</td>
</tr>`;
    })
    .join('');

  return wrapMail(
    leadSubject(values),
    `<p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:28px;color:${pine};">New case review</p>
<p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:15px;line-height:24px;color:${stone};">A visitor asked for a free case review.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows}</table>`,
  );
}
