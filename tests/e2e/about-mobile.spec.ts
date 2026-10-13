import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { ABOUT_COPY, ABOUT_FIGMA, ABOUT_FIGMA_SM } from './about-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma about mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/about');
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto('/about');
    const header = page.locator('header');
    await expectColor(header, ABOUT_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, ABOUT_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await expect(menu.getByRole('link', { name: 'Practice areas' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Get my free case review' })).toBeVisible();
    expect(await px(menu, 'top')).toBe(ABOUT_FIGMA_SM.headerH);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).not.toBe('fixed');
  });

  test('hero matches mobile frame', async ({ page }) => {
    await page.goto('/about');
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(ABOUT_FIGMA_SM.headerH);
    await expectPadX(header, ABOUT_FIGMA_SM.pageX);
    await expectColor(header, ABOUT_FIGMA.paper);

    const hero = page.getByTestId('about-hero');
    await expect(hero.getByRole('heading', { name: ABOUT_COPY.hero })).toBeVisible();
    await expect(hero.getByText(ABOUT_COPY.leadSm, { exact: true })).toBeVisible();
    await expect(hero.getByText(ABOUT_COPY.lead)).toBeHidden();
    expect(await px(hero, 'padding-top')).toBe(ABOUT_FIGMA_SM.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(ABOUT_FIGMA_SM.heroPb);
    await expectPadX(hero, ABOUT_FIGMA_SM.pageX);
    await expectFontSize(hero.getByRole('heading', { name: ABOUT_COPY.hero }), ABOUT_FIGMA_SM.aboutHero);
    expect(await px(hero.locator('img').first(), 'height')).toBe(ABOUT_FIGMA_SM.photoH);
    expect(await px(hero.locator('img').first(), 'width')).toBe(350);
  });
});
