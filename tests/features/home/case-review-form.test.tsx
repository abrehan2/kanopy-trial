import { afterEach, describe, expect, test, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CaseReviewForm } from '@/features/home/components/CaseReviewForm';
import { REVIEW_COOLDOWN_KEY } from '@/features/home/data/case-review-timer';
import { renderWithProviders } from '../../utils/render';

vi.mock('@/lib/toast', () => ({
  showSuccess: vi.fn(),
  showErrorFrom: vi.fn(),
  showError: vi.fn(),
}));
vi.mock('@/features/home/data/case-review-api', () => ({
  sendCaseReview: vi.fn().mockResolvedValue(undefined),
}));

afterEach(() => {
  localStorage.clear();
});

describe('CaseReviewForm', () => {
  test('shows the Figma error banner and field copy', async () => {
    const user = userEvent.setup();
    renderWithProviders(<CaseReviewForm />);

    await user.click(screen.getByRole('button', { name: 'Get my free case review' }));

    expect(screen.getByText('Please fix the fields marked below.')).toBeTruthy();
    expect(screen.getAllByText('Enter your first name').length).toBeGreaterThan(0);
    expect(screen.getByText('Enter your last name')).toBeTruthy();
    expect(screen.getByText('Enter a 10-digit phone number')).toBeTruthy();
    expect(screen.getByText('Choose a state')).toBeTruthy();
    expect(screen.getByText('Choose a type of case')).toBeTruthy();
  });

  test('submits a valid review', async () => {
    const { showSuccess } = await import('@/lib/toast');
    const user = userEvent.setup();
    renderWithProviders(<CaseReviewForm />);

    await user.type(screen.getByLabelText('First name *'), 'Ada');
    await user.type(screen.getByLabelText('Last name *'), 'Lovelace');
    await user.type(screen.getByLabelText('Phone *'), '(555) 555-5555');
    await user.click(screen.getByRole('combobox', { name: 'Where did it happen? *' }));
    await user.click(await screen.findByRole('option', { name: 'California' }));
    await user.click(screen.getByRole('combobox', { name: 'Type of case *' }));
    await user.click(await screen.findByRole('option', { name: 'Personal injury' }));
    await user.click(screen.getByRole('button', { name: 'Get my free case review' }));

    await waitFor(() => expect(showSuccess).toHaveBeenCalled());
    expect((screen.getByRole('button', { name: /try again in/i }) as HTMLButtonElement).disabled).toBe(
      true,
    );
  });

  test('keeps the cooldown after remount', async () => {
    localStorage.setItem(REVIEW_COOLDOWN_KEY, Date.now().toString());
    renderWithProviders(<CaseReviewForm />);
    await waitFor(() =>
      expect(
        (screen.getByRole('button', { name: /try again in/i }) as HTMLButtonElement).disabled,
      ).toBe(true),
    );
  });
});
