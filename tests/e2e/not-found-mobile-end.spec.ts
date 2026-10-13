import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectPadX, expectPadY } from './style';
import { NOT_FOUND_FIGMA, NOT_FOUND_FIGMA_SM, NOT_FOUND_PATH } from './not-found-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma 404 mobile 390 end', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('footer matches the compact frame', async ({ page }) => {
    await page.goto(NOT_FOUND_PATH);
    await noHorizontalScroll(page);

    await expect(page.locator('#closing')).toHaveCount(0);

    const footer = page.locator('footer');
    await expectPadX(footer, NOT_FOUND_FIGMA_SM.pageX);
    await expectPadY(footer, NOT_FOUND_FIGMA_SM.footerPy);
    await expectColor(footer, NOT_FOUND_FIGMA.footer);
    await expect(footer.getByText('Irvine · (949) 555-0148')).toBeVisible();
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
