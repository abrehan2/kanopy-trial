import { afterEach, describe, expect, test, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { REVIEW_COOLDOWN_KEY } from '@/features/home/data/case-review-timer';

const sendCaseReview = vi.fn();
const showSuccess = vi.fn();
const showError = vi.fn();
const showErrorFrom = vi.fn();

vi.mock('@/features/home/data/case-review-api', () => ({ sendCaseReview }));
vi.mock('@/lib/toast', () => ({ showSuccess, showErrorFrom, showError }));

const { useCaseReviewSubmit } = await import('@/features/home/data/use-case-review');

const values = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  phone: '(555) 555-5555',
  email: 'ada@example.com',
  state: 'California',
  caseType: 'Personal injury',
  story: '',
  sms: false,
};

afterEach(() => {
  localStorage.clear();
  sendCaseReview.mockReset();
  showSuccess.mockReset();
  showError.mockReset();
  showErrorFrom.mockReset();
});

describe('useCaseReviewSubmit', () => {
  test('posts the review and toasts success', async () => {
    sendCaseReview.mockResolvedValue(undefined);
    const { result } = renderHook(() => useCaseReviewSubmit());

    await act(async () => {
      await expect(result.current.submit(values)).resolves.toBe(true);
    });

    expect(sendCaseReview).toHaveBeenCalledWith(values);
    expect(showSuccess).toHaveBeenCalledWith('We’ll call you back shortly.');
  });

  test('toasts the error and keeps the form', async () => {
    sendCaseReview.mockRejectedValue(new Error('offline'));
    const { result } = renderHook(() => useCaseReviewSubmit());

    await act(async () => {
      await expect(result.current.submit(values)).resolves.toBe(false);
    });

    expect(showErrorFrom).toHaveBeenCalled();
  });

  test('blocks a second send while the cooldown is running', async () => {
    localStorage.setItem(REVIEW_COOLDOWN_KEY, Date.now().toString());
    const { result } = renderHook(() => useCaseReviewSubmit());

    await act(async () => {
      await expect(result.current.submit(values)).resolves.toBe(false);
    });

    expect(sendCaseReview).not.toHaveBeenCalled();
    expect(showError).toHaveBeenCalled();
  });
});
