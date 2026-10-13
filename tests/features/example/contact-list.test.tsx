import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { ContactList } from '@/features/example/components/ContactList';
import { renderWithProviders } from '../../utils/render';

describe('ContactList', () => {
  test('renders mapped rows', () => {
    renderWithProviders(
      <ContactList
        rows={[
          {
            id: '1',
            name: 'Ada',
            email: 'ada@example.com',
            summary: 'Hello',
          },
        ]}
        loading={false}
        error={false}
      />,
    );

    expect(screen.getByText('Ada').textContent).toBe('Ada');
    expect(screen.getByText('Hello').textContent).toBe('Hello');
  });

  test('shows an empty dash when there are no rows', () => {
    renderWithProviders(<ContactList rows={[]} loading={false} error={false} />);
    expect(screen.getByText('—').textContent).toBe('—');
  });
});
