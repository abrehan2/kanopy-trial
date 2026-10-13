import { expect, test } from '@playwright/test';
import { COPY, FIGMA } from './figma-spec';
import { expectColor, expectFontSize, expectPadX, px } from './style';

test.describe('Figma hero', () => {
  test('matches hero height, gutter, type, and copy', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('#top');
    await expect(hero).toBeVisible();
    expect(await px(hero, 'height')).toBe(FIGMA.heroH);
    expect(await px(hero.locator('header'), 'height')).toBe(FIGMA.headerH);
    await expectPadX(hero.locator('header'), FIGMA.pageX);
    await expectColor(hero, FIGMA.hero);
    await expect(hero.getByRole('heading', { name: COPY.heroTitle })).toBeVisible();
    await expectFontSize(hero.getByRole('heading', { name: COPY.heroTitle }), FIGMA.display);
    await expect(hero.getByRole('link', { name: COPY.heroCta })).toBeVisible();
    const bar = hero.getByTestId('practice-bar');
    await expect(bar.getByText('Personal injury', { exact: true })).toBeVisible();
    await expect(bar.getByText('Lemon law', { exact: true })).toBeVisible();
    await expect(bar.getByText('Workers’ compensation', { exact: true })).toBeVisible();
    expect(await px(hero.getByTestId('practice-bar'), 'height')).toBe(FIGMA.barH);
    await expectColor(hero.getByTestId('practice-bar'), FIGMA.pine);
    const cta = hero.getByTestId('hero-cta');
    expect(await px(cta.getByRole('link', { name: COPY.heroCta }), 'height')).toBe(FIGMA.ctaH);
    expect(await px(cta.locator('div').first(), 'column-gap')).toBe(FIGMA.phoneGap);
    expect(await px(cta, 'margin-top')).toBe(FIGMA.ctaGap);
    expect(await px(cta, 'row-gap')).toBe(FIGMA.trustGap);
    await expectFontSize(cta.getByRole('link', { name: 'Call (949) 555-0148' }).first(), FIGMA.cta);
    await expectColor(hero.getByText('No fee unless we win').first(), FIGMA.dust, 'color');
  });

  test('scales the 1440 canvas when the viewport is wider', async ({ page }) => {
    await page.setViewportSize({ width: 2880, height: 900 });
    await page.goto('/');
    const zoom = await page.locator('.page-zoom').evaluate((node) => getComputedStyle(node).zoom);
    expect(parseFloat(zoom)).toBe(2);
    expect(await px(page.locator('#top'), 'height')).toBe(FIGMA.heroH);
    await expectPadX(page.locator('#top header'), FIGMA.pageX);
  });
});
