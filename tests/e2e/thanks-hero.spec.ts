import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { THANKS_COPY, THANKS_FIGMA, THANKS_QUERY } from './thanks-figma-spec';

test.describe('Figma thanks hero', () => {
  test('matches interior header, copy, wait list, and home link', async ({ page }) => {
    await page.goto(THANKS_QUERY);
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(THANKS_FIGMA.headerH);
    await expectPadX(header, THANKS_FIGMA.headerX);
    await expectColor(header, THANKS_FIGMA.paper);

    const hero = page.getByTestId('thanks-hero');
    await expect(hero.getByRole('heading', { name: THANKS_COPY.title })).toBeVisible();
    await expect(hero.getByText(THANKS_COPY.lead)).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(THANKS_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(THANKS_FIGMA.heroPb);
    await expectPadX(hero, THANKS_FIGMA.pageX);
    expect(await px(hero, 'row-gap')).toBe(THANKS_FIGMA.heroGap);
    await expectFontSize(hero.getByRole('heading', { name: THANKS_COPY.title }), THANKS_FIGMA.title);
    await expectFontSize(hero.getByText(THANKS_COPY.lead), THANKS_FIGMA.lead);

    await expect(hero.getByRole('heading', { name: THANKS_COPY.wait })).toBeVisible();
    await expectFontSize(
      hero.getByRole('heading', { name: THANKS_COPY.wait }),
      THANKS_FIGMA.wait,
    );
    const items = hero.getByTestId('thanks-wait');
    await expect(items).toHaveCount(4);
    await expect(items.first()).toHaveText(THANKS_COPY.firstItem, { useInnerText: true });
    await expect(items.last()).toHaveText(THANKS_COPY.lastItem, { useInnerText: true });
    expect(await px(items.first(), 'padding-top')).toBe(THANKS_FIGMA.rowY);
    await expectFontSize(items.first(), THANKS_FIGMA.item);

    await expect(hero.getByRole('link', { name: THANKS_COPY.call })).toHaveAttribute(
      'href',
      'tel:(949) 555-0148',
    );
    await expect(hero.getByRole('link', { name: THANKS_COPY.home })).toHaveAttribute('href', '/');
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('contact form submit lands here with the submitted name and phone', async ({ page }) => {
    await page.route('**/api/case-review', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
    });
    await page.goto('/contact');
    const form = page.locator('#review-form');
    await form.getByLabel('First name *').fill('Maria');
    await form.getByLabel('Last name *').fill('Garcia');
    await form.getByLabel('Phone *').fill('(714) 555-0199');
    await form.getByRole('combobox', { name: 'Where did it happen? *' }).click();
    await page.getByRole('option', { name: 'California' }).click();
    await form.getByRole('combobox', { name: 'Type of case *' }).click();
    await page.getByRole('option', { name: 'Personal injury' }).click();
    await form.getByRole('button', { name: 'Get my free case review' }).click();
    await expect(page).toHaveURL(/\/thanks\?/);
    await expect(page.getByRole('heading', { name: THANKS_COPY.title })).toBeVisible();
    await expect(page.getByText(THANKS_COPY.lead)).toBeVisible();
  });
});
