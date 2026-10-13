import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { RESULTS_COPY, RESULTS_FIGMA, RESULTS_FIGMA_SM } from './results-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma results mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/results');
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto('/results');
    const header = page.locator('header');
    await expectColor(header, RESULTS_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, RESULTS_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await expect(menu.getByRole('link', { name: 'Practice areas' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Get my free case review' })).toBeVisible();
    expect(await px(menu, 'top')).toBe(RESULTS_FIGMA_SM.headerH);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
  });

  test('hero matches mobile frame', async ({ page }) => {
    await page.goto('/results');
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(RESULTS_FIGMA_SM.headerH);
    await expectPadX(header, RESULTS_FIGMA_SM.pageX);

    const hero = page.getByTestId('results-hero');
    await expect(hero.getByRole('heading', { name: RESULTS_COPY.heroSm })).toBeVisible();
    await expect(hero.getByRole('heading', { name: RESULTS_COPY.hero })).toBeHidden();
    await expect(hero.getByText(RESULTS_COPY.leadSm, { exact: true })).toBeVisible();
    await expect(hero.getByText(RESULTS_COPY.lead)).toBeHidden();
    expect(await px(hero, 'padding-top')).toBe(RESULTS_FIGMA_SM.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(RESULTS_FIGMA_SM.heroPb);
    await expectPadX(hero, RESULTS_FIGMA_SM.pageX);
    await expectFontSize(
      hero.getByRole('heading', { name: RESULTS_COPY.heroSm }),
      RESULTS_FIGMA_SM.resultsHero,
    );

    const filters = page.getByTestId('results-filters');
    await expect(filters.getByRole('tab', { name: 'All' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Injury' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Lemon' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Work' })).toBeVisible();
    await expect(filters.getByText('Personal injury')).toBeHidden();
  });
});
