import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { NOT_FOUND_COPY, NOT_FOUND_FIGMA, NOT_FOUND_PATH } from './not-found-figma-spec';

test.describe('Figma 404 hero', () => {
  test('matches interior header, title, lead, and recovery links', async ({ page }) => {
    const response = await page.goto(NOT_FOUND_PATH);
    expect(response?.status()).toBe(404);

    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(NOT_FOUND_FIGMA.headerH);
    await expectPadX(header, NOT_FOUND_FIGMA.pageX);
    await expectColor(header, NOT_FOUND_FIGMA.paper);
    await expect(header.getByRole('link', { name: 'Guides' })).toHaveAttribute('href', '/guides');
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');

    const hero = page.getByTestId('not-found-hero');
    await expect(hero.getByRole('heading', { name: NOT_FOUND_COPY.title })).toBeVisible();
    await expect(hero.getByText(NOT_FOUND_COPY.lead)).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(NOT_FOUND_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(NOT_FOUND_FIGMA.heroPb);
    await expectPadX(hero, NOT_FOUND_FIGMA.pageX);
    expect(await px(hero, 'row-gap')).toBe(NOT_FOUND_FIGMA.heroGap);
    expect(await px(hero, 'height')).toBe(NOT_FOUND_FIGMA.heroH);
    await expectFontSize(
      hero.getByRole('heading', { name: NOT_FOUND_COPY.title }),
      NOT_FOUND_FIGMA.title,
    );
    await expectFontSize(hero.getByText(NOT_FOUND_COPY.lead), NOT_FOUND_FIGMA.lead);

    const links = page.getByTestId('not-found-links');
    await expect(links.getByRole('link', { name: NOT_FOUND_COPY.home })).toHaveAttribute('href', '/');
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
    expect(await px(links, 'column-gap')).toBe(NOT_FOUND_FIGMA.linkGap);
    await expectFontSize(links.getByRole('link', { name: NOT_FOUND_COPY.home }), NOT_FOUND_FIGMA.link);
  });
});
