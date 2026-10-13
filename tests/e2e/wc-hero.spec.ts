import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectGap, expectPadX, px } from './style';
import { WC_COPY, WC_FIGMA } from './wc-figma-spec';

test.describe('Figma workers’ comp hero', () => {
  test('matches interior header, hero space, and warehouse photo', async ({ page }) => {
    await page.goto('/workers-comp');
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(WC_FIGMA.headerH);
    await expectPadX(header, WC_FIGMA.pageX);
    await expectColor(header, WC_FIGMA.paper);

    const hero = page.getByTestId('wc-hero');
    await expect(hero.getByRole('heading', { name: WC_COPY.hero })).toBeVisible();
    await expect(hero.getByText(/Practice areas/)).toBeVisible();
    await expect(hero.getByText('Workers’ comp')).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(WC_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(WC_FIGMA.heroPb);
    await expectPadX(hero, WC_FIGMA.pageX);
    await expectGap(hero, WC_FIGMA.colGap);
    await expectFontSize(hero.getByRole('heading', { name: WC_COPY.hero }), WC_FIGMA.banner);

    const photo = hero.locator('img').first();
    expect(await px(photo, 'width')).toBe(WC_FIGMA.photo);
    expect(await px(photo, 'height')).toBe(WC_FIGMA.photo);
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('home advice links into this page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'More about workers’ comp' }).click();
    await expect(page).toHaveURL(/\/workers-comp/);
    await expect(page.getByRole('heading', { name: WC_COPY.hero })).toBeVisible();
  });

  test('home practice bar links into this page', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('practice-bar').getByRole('link', { name: 'Workers’ compensation' }).click();
    await expect(page).toHaveURL(/\/workers-comp/);
    await expect(page.getByRole('heading', { name: WC_COPY.hero })).toBeVisible();
  });

  test('home footer links into this page', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Workers’ compensation' }).click();
    await expect(page).toHaveURL(/\/workers-comp/);
    await expect(page.getByRole('heading', { name: WC_COPY.hero })).toBeVisible();
  });
});
