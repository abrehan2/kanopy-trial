import { expect, test } from '@playwright/test';
import { LEMON_COPY, LEMON_FIGMA } from './lemon-figma-spec';
import { expectColor, expectFontSize, expectGap, expectPadX, px } from './style';

test.describe('Figma lemon law hero', () => {
  test('matches interior header, hero space, and shop photo', async ({ page }) => {
    await page.goto('/lemon-law');
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(LEMON_FIGMA.headerH);
    await expectPadX(header, LEMON_FIGMA.pageX);
    await expectColor(header, LEMON_FIGMA.paper);

    const hero = page.locator('#top > section');
    await expect(hero.getByRole('heading', { name: LEMON_COPY.hero })).toBeVisible();
    await expect(hero.getByText(/Practice areas/)).toBeVisible();
    await expect(hero.getByText('Lemon law')).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(LEMON_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(LEMON_FIGMA.heroPb);
    await expectPadX(hero, LEMON_FIGMA.pageX);
    await expectGap(hero, LEMON_FIGMA.colGap);
    await expectFontSize(hero.getByRole('heading', { name: LEMON_COPY.hero }), LEMON_FIGMA.banner);

    const photo = hero.locator('img').first();
    expect(await px(photo, 'width')).toBe(LEMON_FIGMA.photo);
    expect(await px(photo, 'height')).toBe(LEMON_FIGMA.photo);
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('home advice links into this page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'More about lemon law' }).click();
    await expect(page).toHaveURL(/\/lemon-law/);
    await expect(page.getByRole('heading', { name: LEMON_COPY.hero })).toBeVisible();
  });

  test('home practice bar links into this page', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('practice-bar').getByRole('link', { name: 'Lemon law' }).click();
    await expect(page).toHaveURL(/\/lemon-law/);
    await expect(page.getByRole('heading', { name: LEMON_COPY.hero })).toBeVisible();
  });

  test('home footer links into this page', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Lemon law' }).click();
    await expect(page).toHaveURL(/\/lemon-law/);
    await expect(page.getByRole('heading', { name: LEMON_COPY.hero })).toBeVisible();
  });
});
