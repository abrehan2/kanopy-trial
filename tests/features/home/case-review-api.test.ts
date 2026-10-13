import { afterEach, describe, expect, test, vi } from 'vitest';

const post = vi.fn();
vi.mock('@/lib/http', () => ({
  http: { post },
  toErrorMessage: (error: unknown, fallback = 'Network error') =>
    error instanceof Error ? error.message : fallback,
}));

const { sendCaseReview } = await import('@/features/home/data/case-review-api');

afterEach(() => {
  post.mockReset();
});

const input = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  phone: '(555) 555-5555',
  email: 'ada@example.com',
  state: 'California',
  caseType: 'Personal injury',
  story: '',
  sms: false,
};

describe('sendCaseReview', () => {
  test('posts the review to the local route', async () => {
    post.mockResolvedValue({ data: { ok: true } });
    await sendCaseReview(input);
    expect(post.mock.calls[0]).toEqual(['/api/case-review', input]);
  });

  test('surfaces the request error', async () => {
    post.mockRejectedValue(new Error('offline'));
    await expect(sendCaseReview(input)).rejects.toThrow('offline');
  });
});
