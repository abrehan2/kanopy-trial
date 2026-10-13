import { afterEach, describe, expect, test, vi } from 'vitest';

const get = vi.fn();
const post = vi.fn();
vi.mock('@/lib/http', () => ({
  http: { get, post },
  toErrorMessage: (error: unknown) =>
    error instanceof Error ? error.message : 'Network error',
}));

const { listContacts, createContact } = await import(
  '@/features/example/data/contact-api'
);

afterEach(() => {
  get.mockReset();
  post.mockReset();
});

describe('listContacts', () => {
  test('returns the contacts payload', async () => {
    get.mockResolvedValue({ data: [{ id: '1', name: 'Ada' }] });
    await expect(listContacts()).resolves.toEqual([{ id: '1', name: 'Ada' }]);
    expect(get.mock.calls[0]?.[0]).toBe('/contacts');
  });
});

describe('createContact', () => {
  test('posts the inquiry body', async () => {
    const input = { name: 'Ada', email: 'ada@example.com', message: 'Hi' };
    post.mockResolvedValue({ data: { id: '1', ...input } });
    await expect(createContact(input)).resolves.toMatchObject({ id: '1' });
    expect(post.mock.calls[0]).toEqual(['/contacts', input]);
  });
});
