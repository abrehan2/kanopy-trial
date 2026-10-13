import { describe, expect, test } from 'vitest';
import { caseReviewT, makeCaseReviewSchema } from '@/features/home/schemas/case-review';

const schema = makeCaseReviewSchema(caseReviewT);

const valid = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  phone: '(555) 555-5555',
  email: 'ada@example.com',
  state: 'California',
  caseType: 'Personal injury',
  story: 'Rear-ended on the 405.',
  sms: false,
};

describe('makeCaseReviewSchema', () => {
  test('accepts a complete review', () => {
    expect(schema.safeParse(valid).success).toBe(true);
  });

  test('allows a blank email', () => {
    expect(schema.safeParse({ ...valid, email: '' }).success).toBe(true);
  });

  test('rejects an incomplete phone number', () => {
    const parsed = schema.safeParse({ ...valid, phone: '(714) 555-01' });
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      expect(parsed.error.flatten().fieldErrors.phone?.[0]).toBe(
        'Enter a 10-digit phone number',
      );
    }
  });

  test('rejects missing required fields with Figma copy', () => {
    const parsed = schema.safeParse({
      ...valid,
      firstName: '  ',
      lastName: '',
      phone: '',
      state: '',
      caseType: '',
      email: 'not-an-email',
    });
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const fields = parsed.error.flatten().fieldErrors;
      expect(fields.firstName?.[0]).toBe('Enter your first name');
      expect(fields.lastName?.[0]).toBe('Enter your last name');
      expect(fields.phone?.[0]).toBe('Enter a 10-digit phone number');
      expect(fields.state?.[0]).toBe('Choose a state');
      expect(fields.caseType?.[0]).toBe('Choose a type of case');
      expect(fields.email?.[0]).toBe('Enter a valid email');
    }
  });
});
