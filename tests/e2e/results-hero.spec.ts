import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { RESULTS_COPY, RESULTS_FIGMA } from './results-figma-spec';

test.describe('Figma results hero', () => {
  test('matches interior header, hero space, and filters', async ({ page }) => {
    await page.goto('/results');
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(RESULTS_FIGMA.headerH);
    await expectPadX(header, RESULTS_FIGMA.pageX);
    await expectColor(header, RESULTS_FIGMA.paper);

    const hero = page.getByTestId('results-hero');
    await expect(hero.getByRole('heading', { name: RESULTS_COPY.hero })).toBeVisible();
    await expect(hero.getByText(RESULTS_COPY.lead)).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(RESULTS_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(RESULTS_FIGMA.heroPb);
    await expectPadX(hero, RESULTS_FIGMA.pageX);
    await expectFontSize(
      hero.getByRole('heading', { name: RESULTS_COPY.hero }),
      RESULTS_FIGMA.resultsHero,
    );

    const filters = page.getByTestId('results-filters');
    await expect(filters.getByRole('tab', { name: 'All' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await expect(filters.getByRole('tab', { name: 'Personal injury' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Lemon law' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Workers’ comp' })).toBeVisible();
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('home header and footer link into this page', async ({ page }) => {
    await page.goto('/');
    await page.locator('header').getByRole('link', { name: 'Results' }).click();
    await expect(page).toHaveURL(/\/results/);
    await expect(page.getByRole('heading', { name: RESULTS_COPY.hero })).toBeVisible();

    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Results' }).click();
    await expect(page).toHaveURL(/\/results/);
  });

  test('home see more results opens this page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'See more results' }).click();
    await expect(page).toHaveURL(/\/results/);
  });
});
