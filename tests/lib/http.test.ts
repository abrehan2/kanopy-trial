import { describe, expect, test } from 'vitest';
import { toErrorMessage } from '@/lib/http';

describe('toErrorMessage', () => {
  test('prefers the backend message on an axios error', () => {
    const error = {
      isAxiosError: true,
      message: 'Request failed',
      response: { data: { message: 'Email already used' } },
    };
    expect(toErrorMessage(error)).toBe('Email already used');
  });

  test('falls back for unknown errors', () => {
    expect(toErrorMessage('nope', 'Network error')).toBe('Network error');
  });
});
