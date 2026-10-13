import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { THANKS_COPY, THANKS_FIGMA, THANKS_FIGMA_SM, THANKS_QUERY } from './thanks-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma thanks mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(THANKS_QUERY);
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto(THANKS_QUERY);
    const header = page.locator('header');
    await expectColor(header, THANKS_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, THANKS_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await expect(menu.getByRole('link', { name: 'Practice areas' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Get my free case review' })).toBeVisible();
    expect(await px(menu, 'top')).toBe(THANKS_FIGMA_SM.headerH);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
  });

  test('hero matches mobile frame', async ({ page }) => {
    await page.goto(THANKS_QUERY);
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(THANKS_FIGMA_SM.headerH);
    await expectPadX(header, THANKS_FIGMA_SM.pageX);

    const hero = page.getByTestId('thanks-hero');
    await expect(hero.getByRole('heading', { name: THANKS_COPY.title })).toBeVisible();
    await expect(hero.getByText(THANKS_COPY.leadSm, { exact: true })).toBeVisible();
    await expect(hero.getByText(THANKS_COPY.lead)).toBeHidden();
    expect(await px(hero, 'padding-top')).toBe(THANKS_FIGMA_SM.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(THANKS_FIGMA_SM.heroPb);
    await expectPadX(hero, THANKS_FIGMA_SM.pageX);
    expect(await px(hero, 'row-gap')).toBe(THANKS_FIGMA_SM.heroGap);
    await expectFontSize(hero.getByRole('heading', { name: THANKS_COPY.title }), THANKS_FIGMA_SM.title);
    await expectFontSize(hero.getByText(THANKS_COPY.leadSm), THANKS_FIGMA_SM.lead);

    await expect(hero.getByRole('heading', { name: THANKS_COPY.waitSm })).toBeVisible();
    await expect(hero.getByRole('heading', { name: THANKS_COPY.wait })).toBeHidden();
    await expectFontSize(hero.getByRole('heading', { name: THANKS_COPY.waitSm }), THANKS_FIGMA_SM.wait);

    const items = hero.getByTestId('thanks-wait');
    await expect(items).toHaveCount(4);
    await expect(items.first()).toHaveText(THANKS_COPY.firstItemSm, { useInnerText: true });
    await expect(items.last()).toHaveText(THANKS_COPY.lastItemSm, { useInnerText: true });
    expect(await px(items.first(), 'padding-top')).toBe(THANKS_FIGMA_SM.rowY);
    await expectFontSize(items.first(), THANKS_FIGMA_SM.item);

    await expect(hero.getByText(THANKS_COPY.sooner)).toBeHidden();
    await expect(hero.getByRole('link', { name: THANKS_COPY.home })).toBeHidden();
    const call = hero.getByRole('link', { name: THANKS_COPY.call });
    await expect(call).toBeVisible();
    await expect(call).toHaveAttribute('href', 'tel:(949) 555-0148');
    expect(await px(call, 'height')).toBe(THANKS_FIGMA_SM.ctaH);
  });
});
