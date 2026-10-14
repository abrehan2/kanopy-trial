import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import {
  NOT_FOUND_COPY,
  NOT_FOUND_FIGMA,
  NOT_FOUND_FIGMA_SM,
  NOT_FOUND_PATH,
} from './not-found-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma 404 mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(NOT_FOUND_PATH);
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto(NOT_FOUND_PATH);
    const header = page.locator('header');
    await expectColor(header, NOT_FOUND_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, NOT_FOUND_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await expect(menu.getByRole('link', { name: 'Guides' })).toBeVisible();
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
  });

  test('hero matches the mobile frame', async ({ page }) => {
    await page.goto(NOT_FOUND_PATH);
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(NOT_FOUND_FIGMA_SM.headerH);
    await expectPadX(header, NOT_FOUND_FIGMA_SM.pageX);

    const hero = page.getByTestId('not-found-hero');
    await expect(hero.getByRole('heading', { name: NOT_FOUND_COPY.title })).toBeVisible();
    await expect(hero.getByText(NOT_FOUND_COPY.leadSm, { exact: true })).toBeVisible();
    await expect(hero.getByText(NOT_FOUND_COPY.lead)).toBeHidden();
    expect(await px(hero, 'padding-top')).toBe(NOT_FOUND_FIGMA_SM.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(NOT_FOUND_FIGMA_SM.heroPb);
    await expectPadX(hero, NOT_FOUND_FIGMA_SM.pageX);
    expect(await px(hero, 'row-gap')).toBe(NOT_FOUND_FIGMA_SM.heroGap);
    expect(await px(hero, 'height')).toBe(NOT_FOUND_FIGMA_SM.heroH);
    await expectFontSize(
      hero.getByRole('heading', { name: NOT_FOUND_COPY.title }),
      NOT_FOUND_FIGMA_SM.title,
    );
    await expectFontSize(hero.getByText(NOT_FOUND_COPY.leadSm, { exact: true }), NOT_FOUND_FIGMA_SM.lead);

    const links = page.getByTestId('not-found-links');
    const home = links.getByRole('link', { name: NOT_FOUND_COPY.home });
    await expect(home).toHaveAttribute('href', '/');
    await expect(links.getByRole('link', { name: NOT_FOUND_COPY.review })).toHaveAttribute(
      'href',
      '/#review-form',
    );
    await expect(links.getByRole('link', { name: NOT_FOUND_COPY.guides })).toHaveAttribute(
      'href',
      '/guides',
    );
    await expect(links.getByRole('link', { name: NOT_FOUND_COPY.call })).toHaveAttribute(
      'href',
      'tel:(949) 555-0148',
    );
    expect(await px(links, 'row-gap')).toBe(NOT_FOUND_FIGMA_SM.linkGap);
    expect(await px(home, 'height')).toBe(NOT_FOUND_FIGMA_SM.linkH);
    await expectFontSize(home, NOT_FOUND_FIGMA_SM.link);
  });
});
