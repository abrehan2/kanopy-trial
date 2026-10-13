import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { ABOUT_COPY, ABOUT_FIGMA } from './about-figma-spec';

test.describe('Figma about mid sections', () => {
  test('attorney cards match Figma copy and portrait height', async ({ page }) => {
    await page.goto('/about');
    const section = page.locator('#attorneys');
    await expect(section.getByRole('heading', { name: ABOUT_COPY.attorneys })).toBeVisible();
    await expectPadX(section, ABOUT_FIGMA.pageX);
    expect(await px(section, 'padding-top')).toBe(ABOUT_FIGMA.attorneysPt);
    await expectFontSize(section.getByRole('heading', { name: ABOUT_COPY.attorneys }), ABOUT_FIGMA.quote);
    await expect(section.getByRole('heading', { name: ABOUT_COPY.ludmila })).toBeVisible();
    await expect(section.getByRole('heading', { name: ABOUT_COPY.eric })).toBeVisible();
    await expect(section.getByText('California Bar No. 304180')).toBeVisible();
    await expect(section.getByText('Nevada Bar No. 14327')).toBeVisible();
    await expect(section.getByRole('link', { name: 'Book a call with Ludmila' })).toBeVisible();
    const photo = section.locator('img').first();
    expect(await px(photo, 'height')).toBe(ABOUT_FIGMA.portraitH);
    await expectFontSize(
      section.getByRole('heading', { name: ABOUT_COPY.ludmila }),
      ABOUT_FIGMA.aboutName,
    );
  });

  test('promises band is cream with pine rules', async ({ page }) => {
    await page.goto('/about');
    const section = page.locator('#promises');
    await expectColor(section, ABOUT_FIGMA.cream);
    await expectPadX(section, ABOUT_FIGMA.pageX);
    await expect(section.getByRole('heading', { name: ABOUT_COPY.promises })).toBeVisible();
    await expect(section.getByText('You get a lawyer, not a case manager.')).toBeVisible();
    await expect(section.getByText('We tell you the truth.')).toBeVisible();
    await expect(section.getByText('You can reach us.')).toBeVisible();
    await expectFontSize(
      section.getByRole('heading', { name: 'You get a lawyer, not a case manager.' }),
      ABOUT_FIGMA.process,
    );
    expect(await px(section.locator('div').filter({ hasText: 'You can reach us.' }).last(), 'border-top-width')).toBe(1);
  });
});
