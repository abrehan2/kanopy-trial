import { describe, expect, test } from 'vitest';
import { toContactRow, toContactRows } from '@/features/example/data/contact-map';
import type { ContactDto } from '@/features/example/data/contact';

const CONTACT: ContactDto = {
  id: '1',
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: '  Hello from the inquiry  ',
};

describe('toContactRow', () => {
  test('maps the payload into the view model', () => {
    expect(toContactRow(CONTACT)).toEqual({
      id: '1',
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      summary: 'Hello from the inquiry',
    });
  });
});

describe('toContactRows', () => {
  test('maps each payload', () => {
    expect(toContactRows([CONTACT])).toHaveLength(1);
  });
});
