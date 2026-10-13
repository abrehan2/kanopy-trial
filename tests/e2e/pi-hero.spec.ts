import { expect, test } from '@playwright/test';
import { PI_COPY, PI_FIGMA } from './pi-figma-spec';
import { expectColor, expectFontSize, expectGap, expectPadX, px } from './style';

test.describe('Figma personal injury hero', () => {
  test('matches interior header, hero space, and freeway photo', async ({ page }) => {
    await page.goto('/personal-injury');
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(PI_FIGMA.headerH);
    await expectPadX(header, PI_FIGMA.pageX);
    await expectColor(header, PI_FIGMA.paper);

    const hero = page.locator('#top > section');
    await expect(hero.getByRole('heading', { name: PI_COPY.hero })).toBeVisible();
    await expect(hero.getByText(/Practice areas/)).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(PI_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(PI_FIGMA.heroPb);
    await expectPadX(hero, PI_FIGMA.pageX);
    await expectGap(hero, PI_FIGMA.colGap);
    await expectFontSize(hero.getByRole('heading', { name: PI_COPY.hero }), PI_FIGMA.banner);

    const photo = hero.locator('img').first();
    expect(await px(photo, 'width')).toBe(PI_FIGMA.photo);
    expect(await px(photo, 'height')).toBe(PI_FIGMA.photo);
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('home advice links into this page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'More about personal injury' }).click();
    await expect(page).toHaveURL(/\/personal-injury/);
    await expect(page.getByRole('heading', { name: PI_COPY.hero })).toBeVisible();
  });
});
