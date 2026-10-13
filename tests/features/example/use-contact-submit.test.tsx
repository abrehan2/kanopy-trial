import { describe, expect, test, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';

const createContact = vi.fn();
const showSuccess = vi.fn();
const showErrorFrom = vi.fn();

vi.mock('@/features/example/data/contact-api', () => ({
  createContact,
  listContacts: vi.fn(),
}));
vi.mock('@/lib/toast', () => ({ showSuccess, showErrorFrom, showError: vi.fn() }));

const { useContactSubmit } = await import(
  '@/features/example/data/use-contact-submit'
);

describe('useContactSubmit', () => {
  test('posts the inquiry and toasts success', async () => {
    createContact.mockResolvedValue({ id: '1' });
    const onCreated = vi.fn();
    const { result } = renderHook(() => useContactSubmit(onCreated));
    const values = { name: 'Ada', email: 'ada@example.com', message: 'Hi' };

    await act(async () => {
      await result.current.submit(values);
    });

    expect(createContact).toHaveBeenCalledWith(values);
    expect(showSuccess).toHaveBeenCalledWith('Inquiry sent');
    expect(onCreated).toHaveBeenCalled();
  });
});
