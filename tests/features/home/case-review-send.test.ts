import { afterEach, describe, expect, test, vi } from 'vitest';

const send = vi.fn();
vi.mock('resend', () => ({
  Resend: class {
    emails = { send };
  },
}));

const { deliverCaseReview } = await import('@/features/home/data/case-review-send');

const values = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  phone: '(555) 555-5555',
  email: 'ada@example.com',
  state: 'California',
  caseType: 'Personal injury',
  story: 'Rear-ended on the 405.',
  sms: false,
};

afterEach(() => {
  send.mockReset();
  process.env.RESEND_API_KEY = 're_test';
});

describe('deliverCaseReview', () => {
  test('sends the inbox copy and a confirmation', async () => {
    process.env.RESEND_API_KEY = 're_test';
    send.mockResolvedValue({ data: { id: '1' } });
    await deliverCaseReview(values);
    expect(send).toHaveBeenCalledTimes(2);
    expect(send.mock.calls[0]?.[0]).toMatchObject({
      to: 'hello@kanopylabs.com',
      replyTo: 'ada@example.com',
      subject: 'New case review — Ada Lovelace',
    });
    expect(send.mock.calls[1]?.[0]).toMatchObject({
      to: 'ada@example.com',
      subject: 'We received your case review',
    });
  });

  test('skips confirmation when email is blank', async () => {
    process.env.RESEND_API_KEY = 're_test';
    send.mockResolvedValue({ data: { id: '1' } });
    await deliverCaseReview({ ...values, email: '' });
    expect(send).toHaveBeenCalledTimes(1);
  });

  test('throws when the api key is missing', async () => {
    delete process.env.RESEND_API_KEY;
    await expect(deliverCaseReview(values)).rejects.toThrow('Email is not configured');
  });
});
