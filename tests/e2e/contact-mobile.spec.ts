import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { CONTACT_COPY, CONTACT_FIGMA, CONTACT_FIGMA_SM } from './contact-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma contact mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/contact');
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
      expect(await px(page.locator('#review-form form'), 'width')).toBeLessThanOrEqual(width - 39);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto('/contact');
    const header = page.locator('header');
    await expectColor(header, CONTACT_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, CONTACT_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await expect(menu.getByRole('link', { name: 'Practice areas' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Get my free case review' })).toBeVisible();
    expect(await px(menu, 'top')).toBe(CONTACT_FIGMA_SM.headerH);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
  });

  test('hero matches mobile frame', async ({ page }) => {
    await page.goto('/contact');
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(CONTACT_FIGMA_SM.headerH);
    await expectPadX(header, CONTACT_FIGMA_SM.pageX);

    const copy = page.getByTestId('contact-copy');
    await expect(copy.getByRole('heading', { name: CONTACT_COPY.title })).toBeVisible();
    await expect(copy.getByText(CONTACT_COPY.leadSm, { exact: true })).toBeVisible();
    await expect(copy.getByText(CONTACT_COPY.lead)).toBeHidden();
    expect(await px(copy, 'padding-top')).toBe(CONTACT_FIGMA_SM.heroPt);
    expect(await px(copy, 'padding-bottom')).toBe(CONTACT_FIGMA_SM.heroPb);
    await expectPadX(copy, CONTACT_FIGMA_SM.pageX);
    expect(await px(copy, 'row-gap')).toBe(CONTACT_FIGMA_SM.heroGap);
    await expectFontSize(copy.getByRole('heading', { name: CONTACT_COPY.title }), CONTACT_FIGMA_SM.title);

    await expect(page.getByTestId('contact-office').first()).toBeHidden();
    const calls = page.getByTestId('contact-calls');
    await expect(calls.getByRole('link', { name: CONTACT_COPY.callCa })).toHaveAttribute(
      'href',
      'tel:(949) 555-0148',
    );
    await expect(calls.getByRole('link', { name: CONTACT_COPY.callNv })).toBeVisible();
    expect(await px(calls.getByRole('link', { name: CONTACT_COPY.callCa }), 'height')).toBe(
      CONTACT_FIGMA_SM.ctaH,
    );
  });
});
