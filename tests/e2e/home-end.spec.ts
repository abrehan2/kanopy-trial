import { expect, test } from '@playwright/test';
import { COPY, FIGMA } from './figma-spec';
import { expectColor, expectFontSize, expectGap, expectPadX, expectPadY, px } from './style';

test.describe('Figma process through footer', () => {
  test('process, review, offices, faq, closing, and footer match Figma', async ({ page }) => {
    await page.goto('/');

    const process = page.locator('#process');
    await expectPadX(process, FIGMA.pageX);
    await expectPadY(process, FIGMA.sectionLg);
    await expect(process.getByRole('heading', { name: COPY.process })).toBeVisible();
    await expect(process.getByText('Today')).toBeVisible();

    const review = page.locator('#review');
    await expectPadX(review, FIGMA.pageX);
    await expectPadY(review, FIGMA.sectionLg);
    await expectFontSize(review.locator('p').first(), FIGMA.quote);
    expect(await px(review.locator('p').first(), 'width')).toBe(FIGMA.quoteW);
    await expect(review.getByText(COPY.review)).toBeVisible();

    const offices = page.locator('#offices');
    await expectColor(offices, FIGMA.pine);
    await expect(offices.getByRole('heading', { name: COPY.offices })).toBeVisible();
    await expectFontSize(offices.getByRole('heading', { name: COPY.offices }), FIGMA.banner);
    await expect(offices.getByText('Irvine office')).toBeVisible();

    const faq = page.locator('#faq');
    await expectPadX(faq, FIGMA.pageX);
    await expectPadY(faq, FIGMA.sectionY);
    await expectGap(faq, FIGMA.colGap);
    await expect(faq.getByRole('heading', { name: COPY.faq })).toBeVisible();

    const closing = page.locator('#closing');
    await expectColor(closing, FIGMA.pine);
    await expectPadX(closing, FIGMA.pageX);
    await expectPadY(closing, FIGMA.ctaPy);
    await expect(closing.getByText(COPY.closing)).toBeVisible();

    const footer = page.locator('footer');
    await expectColor(footer, FIGMA.footer);
    await expectPadX(footer, FIGMA.pageX);
    expect(await px(footer, 'padding-top')).toBe(FIGMA.footerPt);
    expect(await px(footer, 'padding-bottom')).toBe(FIGMA.footerPb);
    await expect(footer.getByText(COPY.footer).first()).toBeVisible();
  });
});
