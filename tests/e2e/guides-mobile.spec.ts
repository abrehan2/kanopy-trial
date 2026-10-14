import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { GUIDES_COPY, GUIDES_FIGMA, GUIDES_FIGMA_SM } from './guides-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma guides mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/guides');
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto('/guides');
    const header = page.locator('header');
    await expectColor(header, GUIDES_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, GUIDES_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await expect(menu.getByRole('link', { name: 'Practice areas' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Guides' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Get my free case review' })).toBeVisible();
    expect(await px(menu, 'top')).toBe(GUIDES_FIGMA_SM.headerH);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
  });

  test('hero and list match the mobile frame', async ({ page }) => {
    await page.goto('/guides');
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(GUIDES_FIGMA_SM.headerH);
    await expectPadX(header, GUIDES_FIGMA_SM.pageX);

    const hero = page.getByTestId('guides-hero');
    await expect(hero.getByRole('heading', { name: GUIDES_COPY.title })).toBeVisible();
    await expect(hero.getByText(GUIDES_COPY.leadSm, { exact: true })).toBeVisible();
    await expect(hero.getByText(GUIDES_COPY.lead)).toBeHidden();
    expect(await px(hero, 'padding-top')).toBe(GUIDES_FIGMA_SM.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(GUIDES_FIGMA_SM.heroPb);
    await expectPadX(hero, GUIDES_FIGMA_SM.pageX);
    expect(await px(hero, 'row-gap')).toBe(GUIDES_FIGMA_SM.heroGap);
    await expectFontSize(hero.getByRole('heading', { name: GUIDES_COPY.title }), GUIDES_FIGMA_SM.title);
    await expectFontSize(hero.getByText(GUIDES_COPY.leadSm, { exact: true }), GUIDES_FIGMA_SM.lead);

    const filters = page.getByTestId('guides-filters');
    await expect(filters.getByRole('tab', { name: 'All' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Injury' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Lemon' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Work' })).toBeVisible();
    await expect(filters.getByText('Personal injury')).toBeHidden();

    const rows = page.getByTestId('guides-row');
    await expect(rows).toHaveCount(3);
    await expect(rows.first().getByRole('heading')).toHaveText(GUIDES_COPY.firstTitle);
  });
});
