import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY } from './style';
import { ABOUT_COPY, ABOUT_FIGMA } from './about-figma-spec';

test.describe('Figma about end sections', () => {
  test('reuses offices, closing, and footer from the shared shell', async ({ page }) => {
    await page.goto('/about');
    const offices = page.locator('#offices');
    await expectColor(offices, ABOUT_FIGMA.pine);
    await expect(offices.getByRole('heading', { name: ABOUT_COPY.offices })).toBeVisible();
    await expectFontSize(offices.getByRole('heading', { name: ABOUT_COPY.offices }), ABOUT_FIGMA.banner);
    await expect(offices.getByText('Irvine office')).toBeVisible();
    await expect(offices.getByText('Henderson office')).toBeVisible();

    const closing = page.locator('#closing');
    await expectColor(closing, ABOUT_FIGMA.pine);
    await expectPadY(closing, ABOUT_FIGMA.ctaPy);
    await expectPadX(closing, ABOUT_FIGMA.pageX);
    await expect(closing.getByText(ABOUT_COPY.closing)).toBeVisible();
    await expect(closing.getByRole('link', { name: ABOUT_COPY.cta })).toHaveAttribute(
      'href',
      '/#review-form',
    );

    const footer = page.locator('footer');
    await expectColor(footer, ABOUT_FIGMA.footer);
    await expect(footer.getByText('Irvine office')).toBeVisible();
    await expect(footer.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
  });
});
