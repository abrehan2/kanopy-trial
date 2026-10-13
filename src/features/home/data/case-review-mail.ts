export const MAIL = {
  pine: '#1d393d',
  paper: '#f1eee7',
  gold: '#a88952',
  ink: '#141615',
  stone: '#5e5b53',
  dust: '#6d6a61',
  white: '#ffffff',
} as const;

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function mailDash(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : '—';
}

export function wrapMail(title: string, inner: string) {
  const { pine, paper, white, dust } = MAIL;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:${paper};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${paper};border-collapse:collapse;">
<tr><td align="center" style="padding:48px 16px;">
<table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;background:${white};border-radius:16px;border-collapse:collapse;">
<tr><td style="padding:40px;">
<p style="margin:0 0 24px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:${pine};">Olive Legal Group</p>
${inner}
<p style="margin:24px 0 0;font-family:Arial,sans-serif;font-size:12px;line-height:18px;color:${dust};">Confidential. Sending this doesn’t create an attorney–client relationship.</p>
</td></tr></table>
</td></tr></table></body></html>`;
}
