import { describe, expect, test, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

const listContacts = vi.fn();
vi.mock('@/features/example/data/contact-api', () => ({
  listContacts,
  createContact: vi.fn(),
}));

const { useContacts } = await import('@/features/example/data/use-contact');

describe('useContacts', () => {
  test('maps the live response into the view model', async () => {
    listContacts.mockResolvedValue([
      {
        id: '1',
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        message: 'Hello from the inquiry',
      },
    ]);

    const { result } = renderHook(() => useContacts());
    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe(false);
    expect(result.current.rows).toEqual([
      {
        id: '1',
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        summary: 'Hello from the inquiry',
      },
    ]);
  });
});
