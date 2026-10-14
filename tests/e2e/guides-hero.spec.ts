import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { GUIDES_COPY, GUIDES_FIGMA } from './guides-figma-spec';

test.describe('Figma guides hero', () => {
  test('matches interior header, copy, filters, and the Contentful list', async ({ page }) => {
    await page.goto('/guides');
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(GUIDES_FIGMA.headerH);
    await expectPadX(header, GUIDES_FIGMA.pageX);
    await expectColor(header, GUIDES_FIGMA.paper);

    const hero = page.getByTestId('guides-hero');
    await expect(hero.getByRole('heading', { name: GUIDES_COPY.title })).toBeVisible();
    await expect(hero.getByText(GUIDES_COPY.lead)).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(GUIDES_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(GUIDES_FIGMA.heroPb);
    await expectPadX(hero, GUIDES_FIGMA.pageX);
    expect(await px(hero, 'row-gap')).toBe(GUIDES_FIGMA.heroGap);
    await expectFontSize(hero.getByRole('heading', { name: GUIDES_COPY.title }), GUIDES_FIGMA.title);
    await expectFontSize(hero.getByText(GUIDES_COPY.lead), GUIDES_FIGMA.lead);

    const filters = page.getByTestId('guides-filters');
    await expect(filters.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true');
    await expect(filters.getByRole('tab', { name: 'Personal injury' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Lemon law' })).toBeVisible();
    await expect(filters.getByRole('tab', { name: 'Workers’ comp' })).toBeVisible();
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');

    const rows = page.getByTestId('guides-row');
    await expect(rows).toHaveCount(3);
    await expect(rows.first()).toHaveAttribute('href', '/guides/other-driver-insurance');
  });

  test('filters the list by topic', async ({ page }) => {
    await page.goto('/guides');
    const filters = page.getByTestId('guides-filters');
    await filters.getByRole('tab', { name: 'Lemon law' }).click();
    await expect(page.getByTestId('guides-row')).toHaveCount(1);
    await expect(page.getByRole('heading', { name: GUIDES_COPY.lemonRow })).toBeVisible();

    await filters.getByRole('tab', { name: 'Personal injury' }).click();
    await expect(page.getByTestId('guides-row')).toHaveCount(1);
  });

  test('home header and footer link into this page', async ({ page }) => {
    await page.goto('/');
    await page.locator('header').getByRole('link', { name: 'Guides' }).click();
    await expect(page).toHaveURL(/\/guides/);
    await expect(page.getByRole('heading', { name: GUIDES_COPY.title })).toBeVisible();

    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Guides' }).click();
    await expect(page).toHaveURL(/\/guides/);
  });

  test('list row opens its article', async ({ page }) => {
    await page.goto('/guides');
    await page.getByTestId('guides-row').first().click();
    await expect(page).toHaveURL(/\/guides\/other-driver-insurance/);
    await expect(page.getByRole('heading', { name: GUIDES_COPY.firstTitle })).toBeVisible();
  });
});
