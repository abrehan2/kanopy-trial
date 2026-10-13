import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY } from './style';
import { WC_COPY, WC_FIGMA } from './wc-figma-spec';

test.describe('Figma workers’ comp end sections', () => {
  test('reuses case review form spacing from home', async ({ page }) => {
    await page.goto('/workers-comp');
    const section = page.locator('#review-form');
    await expect(section.getByRole('heading', { name: WC_COPY.form })).toBeVisible();
    await expectPadX(section, WC_FIGMA.pageX);
    await expectPadY(section, WC_FIGMA.formPy);
    await expectColor(section, WC_FIGMA.paper);
    await expect(section.getByLabel('First name *')).toBeVisible();
    await expect(section.getByRole('button', { name: WC_COPY.cta })).toBeVisible();
  });

  test('faq, closing, and footer match the frame', async ({ page }) => {
    await page.goto('/workers-comp');
    const faq = page.locator('#faq');
    await expect(faq.getByRole('heading', { name: WC_COPY.faq })).toBeVisible();
    await expectPadX(faq, WC_FIGMA.pageX);
    await expectPadY(faq, WC_FIGMA.sectionY);
    await expectFontSize(faq.getByRole('heading', { name: WC_COPY.faq }), WC_FIGMA.quote);
    await expect(faq.getByText('Can I be fired for filing?')).toBeVisible();
    await expect(faq.getByText(/illegal in both states/)).toBeVisible();

    const closing = page.locator('#closing');
    await expectColor(closing, WC_FIGMA.pine);
    await expectPadY(closing, WC_FIGMA.ctaPy);
    await expect(closing.getByText(WC_COPY.closing)).toBeVisible();

    const footer = page.locator('footer');
    await expectColor(footer, WC_FIGMA.footer);
    await expect(footer.getByText('Irvine office')).toBeVisible();
    await expect(footer.getByText('Henderson office')).toBeVisible();
  });
});
