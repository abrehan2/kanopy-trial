import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectPadX, expectPadY } from './style';
import { THANKS_FIGMA, THANKS_FIGMA_SM, THANKS_QUERY } from './thanks-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma thanks mobile 390 footer', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('footer matches the compact frame', async ({ page }) => {
    await page.goto(THANKS_QUERY);
    await noHorizontalScroll(page);

    const footer = page.locator('footer');
    await expectPadX(footer, THANKS_FIGMA_SM.pageX);
    await expectPadY(footer, THANKS_FIGMA_SM.footerPy);
    await expectColor(footer, THANKS_FIGMA.footer);
    await expect(footer.getByText('Irvine · (949) 555-0148')).toBeVisible();
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
