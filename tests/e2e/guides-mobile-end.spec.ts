import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';
import { GUIDES_COPY, GUIDES_FIGMA, GUIDES_FIGMA_SM } from './guides-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma guides mobile 390 sections', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('list, closing, and footer match the compact frame', async ({ page }) => {
    await page.goto('/guides');
    await noHorizontalScroll(page);

    const list = page.getByTestId('guides-list');
    await expectPadX(list, GUIDES_FIGMA_SM.pageX);
    expect(await px(list, 'padding-bottom')).toBe(GUIDES_FIGMA_SM.listPb);

    const rows = list.getByTestId('guides-row');
    await expect(rows).toHaveCount(3);
    await expect(rows.first().getByRole('heading')).toHaveText(GUIDES_COPY.firstTitle);
    await expect(rows.last().getByRole('heading')).toHaveText(GUIDES_COPY.lastTitleSm);
    await expect(rows.last()).toBeVisible();
    expect(await px(rows.first(), 'padding-top')).toBe(GUIDES_FIGMA_SM.rowY);

    await page.getByRole('tab', { name: 'Work' }).click();
    await expect(list.getByTestId('guides-row')).toHaveCount(1);
    await expect(list.getByRole('heading', { name: GUIDES_COPY.lastTitle })).toBeVisible();

    const closing = page.locator('#closing');
    await expectPadX(closing, GUIDES_FIGMA_SM.pageX);
    await expectPadY(closing, GUIDES_FIGMA_SM.ctaPy);
    await expectFontSize(closing.getByText(GUIDES_COPY.closing), 30);
    await expect(closing.getByRole('link', { name: 'Call (949) 555-0148' })).toBeVisible();

    const footer = page.locator('footer');
    await expectPadX(footer, GUIDES_FIGMA_SM.pageX);
    await expectPadY(footer, GUIDES_FIGMA_SM.footerPy);
    await expectColor(footer, GUIDES_FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
