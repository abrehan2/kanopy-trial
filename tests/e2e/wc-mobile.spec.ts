import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { WC_COPY, WC_FIGMA, WC_FIGMA_SM } from './wc-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma workers’ comp mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/workers-comp');
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
      expect(await px(page.locator('#review-form form'), 'width')).toBeLessThanOrEqual(width - 39);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto('/workers-comp');
    const header = page.locator('header');
    await expectColor(header, WC_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, WC_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await page.mouse.wheel(0, 800);
    await page.evaluate(() => window.scrollBy(0, 400));
    expect(await page.evaluate(() => window.scrollY)).toBe(0);
    await expect(menu.getByRole('link', { name: 'Practice areas' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Get my free case review' })).toBeVisible();
    expect(await px(menu, 'top')).toBe(WC_FIGMA_SM.headerH);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).not.toBe('fixed');
  });

  test('hero matches mobile frame', async ({ page }) => {
    await page.goto('/workers-comp');
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(WC_FIGMA_SM.headerH);
    await expectPadX(header, WC_FIGMA_SM.pageX);
    await expectColor(header, WC_FIGMA.paper);

    const hero = page.getByTestId('wc-hero');
    await expect(hero.getByRole('heading', { name: WC_COPY.hero })).toBeVisible();
    await expect(hero.getByText('Workers’ comp')).toBeVisible();
    await expect(hero.getByText(/Practice areas/)).toBeHidden();
    await expect(hero.getByText('We step in when the claim is delayed or denied.')).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(WC_FIGMA_SM.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(WC_FIGMA_SM.heroPb);
    await expectPadX(hero, WC_FIGMA_SM.pageX);
    await expectFontSize(hero.getByRole('heading', { name: WC_COPY.hero }), WC_FIGMA_SM.banner);

    const cta = hero.getByTestId('wc-hero-cta');
    expect(await px(cta.getByRole('link', { name: WC_COPY.cta }), 'height')).toBe(WC_FIGMA_SM.ctaH);
    expect(await px(cta.getByRole('link', { name: 'Call (949) 555-0148' }), 'height')).toBe(
      WC_FIGMA_SM.ctaH,
    );
    expect(await px(hero.locator('img').first(), 'height')).toBe(WC_FIGMA_SM.photoH);
    expect(await px(hero.locator('img').first(), 'width')).toBe(350);
  });
});
