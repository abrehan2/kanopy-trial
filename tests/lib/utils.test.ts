import { describe, expect, test } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn', () => {
  test('merges class names and drops conflicts', () => {
    expect(cn('p-2', 'p-4', 'text-sm')).toBe('p-4 text-sm');
  });
});
