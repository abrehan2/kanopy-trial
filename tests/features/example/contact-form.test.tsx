import { describe, expect, test, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/features/example/components/ContactForm';
import { renderWithProviders } from '../../utils/render';

describe('ContactForm', () => {
  test('blocks submit until the inquiry is valid', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(<ContactForm onSubmit={onSubmit} saving={false} />);

    await user.click(screen.getByRole('button', { name: 'Send' }));

    expect(screen.getByText('Name is required').textContent).toBe('Name is required');
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('submits a valid inquiry', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    const user = userEvent.setup();
    renderWithProviders(<ContactForm onSubmit={onSubmit} saving={false} />);

    await user.type(screen.getByLabelText('Name'), 'Ada');
    await user.type(screen.getByLabelText('Email'), 'ada@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello');
    await user.click(screen.getByRole('button', { name: 'Send' }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        name: 'Ada',
        email: 'ada@example.com',
        message: 'Hello',
      }),
    );
  });
});
