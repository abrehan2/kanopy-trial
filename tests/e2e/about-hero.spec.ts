import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectGap, expectPadX, px } from './style';
import { ABOUT_COPY, ABOUT_FIGMA } from './about-figma-spec';

test.describe('Figma about hero', () => {
  test('matches interior header, hero space, and grove photo', async ({ page }) => {
    await page.goto('/about');
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(ABOUT_FIGMA.headerH);
    await expectPadX(header, ABOUT_FIGMA.pageX);
    await expectColor(header, ABOUT_FIGMA.paper);

    const hero = page.getByTestId('about-hero');
    await expect(hero.getByRole('heading', { name: ABOUT_COPY.hero })).toBeVisible();
    await expect(hero.getByText(ABOUT_COPY.lead)).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(ABOUT_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(ABOUT_FIGMA.heroPb);
    await expectPadX(hero, ABOUT_FIGMA.pageX);
    await expectGap(hero.locator('div').first(), ABOUT_FIGMA.letterGap);
    await expectFontSize(hero.getByRole('heading', { name: ABOUT_COPY.hero }), ABOUT_FIGMA.aboutHero);

    const photo = hero.locator('img').first();
    expect(await px(photo, 'height')).toBe(ABOUT_FIGMA.photoH);
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('home header links into this page', async ({ page }) => {
    await page.goto('/');
    await page.locator('header').getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: ABOUT_COPY.hero })).toBeVisible();
  });

  test('home footer links into this page', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: ABOUT_COPY.hero })).toBeVisible();
  });
});
