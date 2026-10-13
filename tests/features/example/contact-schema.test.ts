import { describe, expect, test } from 'vitest';
import { contactT, makeContactSchema } from '@/features/example/schemas/contact';

const schema = makeContactSchema(contactT);

describe('makeContactSchema', () => {
  test('accepts a complete inquiry', () => {
    const parsed = schema.safeParse({
      name: 'Ada',
      email: 'ada@example.com',
      message: 'Hello',
    });
    expect(parsed.success).toBe(true);
  });

  test('rejects an empty name and invalid email', () => {
    const parsed = schema.safeParse({
      name: '  ',
      email: 'not-an-email',
      message: '',
    });
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      expect(parsed.error.flatten().fieldErrors.name?.[0]).toBe('Name is required');
      expect(parsed.error.flatten().fieldErrors.email?.[0]).toBe('Enter a valid email');
    }
  });
});
