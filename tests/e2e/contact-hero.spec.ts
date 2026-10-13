import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectGap, expectPadX, px } from './style';
import { CONTACT_COPY, CONTACT_FIGMA } from './contact-figma-spec';

test.describe('Figma contact hero', () => {
  test('matches interior header, copy, offices, and form', async ({ page }) => {
    await page.goto('/contact');
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(CONTACT_FIGMA.headerH);
    await expectPadX(header, CONTACT_FIGMA.pageX);
    await expectColor(header, CONTACT_FIGMA.paper);

    const hero = page.getByTestId('contact-hero');
    await expect(hero.getByRole('heading', { name: CONTACT_COPY.title })).toBeVisible();
    await expect(hero.getByText(CONTACT_COPY.lead)).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(CONTACT_FIGMA.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(CONTACT_FIGMA.heroPb);
    await expectPadX(hero, CONTACT_FIGMA.pageX);
    await expectGap(hero, CONTACT_FIGMA.letterGap);
    await expectFontSize(hero.getByRole('heading', { name: CONTACT_COPY.title }), CONTACT_FIGMA.title);

    const offices = hero.getByTestId('contact-office');
    await expect(offices).toHaveCount(2);
    await expect(offices.first().getByText(CONTACT_COPY.california)).toBeVisible();
    await expect(offices.first().getByRole('link', { name: CONTACT_COPY.caPhone })).toBeVisible();
    await expect(offices.last().getByText(CONTACT_COPY.nevada)).toBeVisible();
    await expect(hero.getByRole('link', { name: CONTACT_COPY.directions })).toHaveCount(2);
    await expectFontSize(offices.first().getByText(`Call ${CONTACT_COPY.caPhone}`), CONTACT_FIGMA.phone);

    const form = page.locator('#review-form form');
    await expect(form.getByRole('heading', { name: CONTACT_COPY.form })).toBeVisible();
    expect(await px(page.locator('#review-form'), 'width')).toBe(CONTACT_FIGMA.formW);
    await expect(form.getByRole('button', { name: CONTACT_COPY.cta })).toBeVisible();
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('home header and footer link into this page', async ({ page }) => {
    await page.goto('/');
    await page.locator('header').getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole('heading', { name: CONTACT_COPY.title })).toBeVisible();

    await page.goto('/');
    await page.locator('footer').getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact/);
  });
});
