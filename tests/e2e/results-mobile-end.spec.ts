import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';
import { RESULTS_COPY, RESULTS_FIGMA, RESULTS_FIGMA_SM } from './results-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma results mobile 390 sections', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('case list matches compact rows and see more', async ({ page }) => {
    await page.goto('/results');
    await noHorizontalScroll(page);

    const list = page.getByTestId('results-list');
    await expectPadX(list, RESULTS_FIGMA_SM.pageX);
    expect(await px(list, 'padding-top')).toBe(RESULTS_FIGMA_SM.listPt);
    expect(await px(list, 'padding-bottom')).toBe(RESULTS_FIGMA_SM.listPb);

    const rows = list.getByTestId('results-case');
    await expect(rows).toHaveCount(9);
    await expect(rows.nth(0)).toBeVisible();
    await expect(rows.nth(5)).toBeVisible();
    await expect(rows.nth(6)).toBeHidden();

    const first = rows.first();
    await expect(first.getByText(RESULTS_COPY.firstMetaSm)).toBeVisible();
    await expect(first.locator('.text-title')).toHaveText(RESULTS_COPY.firstResult);
    await expect(first.locator('.text-cta.line-through')).toHaveText('$15,000');
    await expectFontSize(first.locator('.text-title'), RESULTS_FIGMA_SM.result);
    expect(await px(first, 'padding-top')).toBe(RESULTS_FIGMA_SM.rowY);

    await page.getByTestId('results-see-more').click();
    await expect(rows.nth(6)).toBeVisible();
    await expect(page.getByTestId('results-see-more')).toHaveCount(0);

    await page.getByRole('tab', { name: 'Lemon' }).click();
    await expect(list.getByText(RESULTS_COPY.lemonMetaSm)).toBeVisible();
    await expect(list.getByTestId('results-case')).toHaveCount(3);
    await expect(page.getByTestId('results-see-more')).toHaveCount(0);
  });

  test('review, closing, and footer match mobile frame', async ({ page }) => {
    await page.goto('/results');
    await noHorizontalScroll(page);

    const reviews = page.getByTestId('results-reviews');
    await expectColor(reviews, RESULTS_FIGMA.pine);
    await expectPadX(reviews, RESULTS_FIGMA_SM.pageX);
    await expectPadY(reviews, RESULTS_FIGMA_SM.sectionY);
    await expect(reviews.getByRole('heading', { name: RESULTS_COPY.reviews })).toBeHidden();
    const reviewSm = page.getByTestId('results-review-sm');
    await expect(reviewSm.getByText(RESULTS_COPY.reviewQuoteSm)).toBeVisible();
    await expect(reviewSm.getByText(RESULTS_COPY.mariaSm, { exact: true })).toBeVisible();
    await expectFontSize(
      reviewSm.getByText(RESULTS_COPY.reviewQuoteSm),
      RESULTS_FIGMA_SM.reviewQuote,
    );
    await expect(reviewSm.getByRole('link', { name: RESULTS_COPY.googleSm })).toHaveAttribute(
      'href',
      /figma\.com/,
    );

    const closing = page.locator('#closing');
    await expectPadX(closing, RESULTS_FIGMA_SM.pageX);
    await expectPadY(closing, RESULTS_FIGMA_SM.ctaPy);
    await expectFontSize(closing.getByText(RESULTS_COPY.closing), RESULTS_FIGMA_SM.close);
    await expect(closing.getByRole('link', { name: 'Call (949) 555-0148' })).toBeVisible();

    const footer = page.locator('footer');
    await expectPadX(footer, RESULTS_FIGMA_SM.pageX);
    await expectPadY(footer, RESULTS_FIGMA_SM.footerPy);
    await expectColor(footer, RESULTS_FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
