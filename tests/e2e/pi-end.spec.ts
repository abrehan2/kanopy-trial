import { expect, test } from '@playwright/test';
import { PI_COPY, PI_FIGMA } from './pi-figma-spec';
import { expectColor, expectFontSize, expectPadX, expectPadY } from './style';

test.describe('Figma personal injury end sections', () => {
  test('reuses case review form spacing from home', async ({ page }) => {
    await page.goto('/personal-injury');
    const section = page.locator('#review-form');
    await expect(section.getByRole('heading', { name: PI_COPY.form })).toBeVisible();
    await expectPadX(section, PI_FIGMA.pageX);
    await expectPadY(section, PI_FIGMA.formPy);
    await expectColor(section, PI_FIGMA.paper);
    await expect(section.getByLabel('First name *')).toBeVisible();
    await expect(section.getByRole('button', { name: PI_COPY.cta })).toBeVisible();
  });

  test('faq, closing, and footer match the frame', async ({ page }) => {
    await page.goto('/personal-injury');
    const faq = page.locator('#faq');
    await expect(faq.getByRole('heading', { name: PI_COPY.faq })).toBeVisible();
    await expectPadX(faq, PI_FIGMA.pageX);
    await expectPadY(faq, PI_FIGMA.sectionY);
    await expectFontSize(faq.getByRole('heading', { name: PI_COPY.faq }), PI_FIGMA.quote);
    await expect(
      faq.getByText('The insurance company already called me. What do I say?'),
    ).toBeVisible();
    await expect(faq.getByText(/claim number/)).toBeVisible();

    const closing = page.locator('#closing');
    await expectColor(closing, PI_FIGMA.pine);
    await expectPadY(closing, PI_FIGMA.ctaPy);
    await expect(closing.getByText(PI_COPY.closing)).toBeVisible();

    const footer = page.locator('footer');
    await expectColor(footer, PI_FIGMA.footer);
    await expect(footer.getByText('Irvine office')).toBeVisible();
    await expect(footer.getByText('Henderson office')).toBeVisible();
  });
});
