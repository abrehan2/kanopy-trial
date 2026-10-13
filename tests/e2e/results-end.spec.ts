import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY } from './style';
import { RESULTS_COPY, RESULTS_FIGMA } from './results-figma-spec';

test.describe('Figma results end sections', () => {
  test('reviews, closing, and footer match the frame', async ({ page }) => {
    await page.goto('/results');

    const reviews = page.getByTestId('results-reviews');
    await expectColor(reviews, RESULTS_FIGMA.pine);
    await expectPadX(reviews, RESULTS_FIGMA.pageX);
    await expectPadY(reviews, RESULTS_FIGMA.sectionY);
    await expect(reviews.getByRole('heading', { name: RESULTS_COPY.reviews })).toBeVisible();
    await expectFontSize(
      reviews.getByRole('heading', { name: RESULTS_COPY.reviews }),
      RESULTS_FIGMA.quote,
    );
    await expect(reviews.getByTestId('results-review')).toHaveCount(4);
    await expect(reviews.getByText(RESULTS_COPY.maria)).toBeVisible();
    await expect(reviews.getByRole('link', { name: RESULTS_COPY.google })).toBeVisible();

    const closing = page.locator('#closing');
    await expectColor(closing, RESULTS_FIGMA.pine);
    await expectPadY(closing, RESULTS_FIGMA.ctaPy);
    await expectPadX(closing, RESULTS_FIGMA.pageX);
    await expect(closing.getByText(RESULTS_COPY.closing)).toBeVisible();
    await expect(closing.getByRole('link', { name: RESULTS_COPY.cta })).toHaveAttribute(
      'href',
      '/#review-form',
    );

    const footer = page.locator('footer');
    await expectColor(footer, RESULTS_FIGMA.footer);
    await expect(footer.getByRole('link', { name: 'Results' })).toHaveAttribute(
      'href',
      '/results',
    );
  });
});
