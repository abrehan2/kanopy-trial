import { expect, test } from '@playwright/test';
import { LEMON_COPY, LEMON_FIGMA } from './lemon-figma-spec';
import { expectColor, expectFontSize, expectPadX, expectPadY } from './style';

test.describe('Figma lemon law end sections', () => {
  test('reuses case review form spacing from home', async ({ page }) => {
    await page.goto('/lemon-law');
    const section = page.locator('#review-form');
    await expect(section.getByRole('heading', { name: LEMON_COPY.form })).toBeVisible();
    await expectPadX(section, LEMON_FIGMA.pageX);
    await expectPadY(section, LEMON_FIGMA.formPy);
    await expectColor(section, LEMON_FIGMA.paper);
    await expect(section.getByLabel('First name *')).toBeVisible();
    await expect(section.getByRole('button', { name: LEMON_COPY.cta })).toBeVisible();
  });

  test('faq, closing, and footer match the frame', async ({ page }) => {
    await page.goto('/lemon-law');
    const faq = page.locator('#faq');
    await expect(faq.getByRole('heading', { name: LEMON_COPY.faq })).toBeVisible();
    await expectPadX(faq, LEMON_FIGMA.pageX);
    await expectPadY(faq, LEMON_FIGMA.sectionY);
    await expectFontSize(faq.getByRole('heading', { name: LEMON_COPY.faq }), LEMON_FIGMA.quote);
    await expect(faq.getByText('Do I pay anything for a lemon law case?')).toBeVisible();
    await expect(faq.getByText(/manufacturer pays your attorney fees/)).toBeVisible();

    const closing = page.locator('#closing');
    await expectColor(closing, LEMON_FIGMA.pine);
    await expectPadY(closing, LEMON_FIGMA.ctaPy);
    await expect(closing.getByText(LEMON_COPY.closing)).toBeVisible();

    const footer = page.locator('footer');
    await expectColor(footer, LEMON_FIGMA.footer);
    await expect(footer.getByText('Irvine office')).toBeVisible();
    await expect(footer.getByText('Henderson office')).toBeVisible();
  });
});
