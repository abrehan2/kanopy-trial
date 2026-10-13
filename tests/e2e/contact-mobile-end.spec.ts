import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';
import { CONTACT_COPY, CONTACT_FIGMA, CONTACT_FIGMA_SM } from './contact-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma contact mobile 390 sections', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('form, hidden photos, and footer match mobile frame', async ({ page }) => {
    await page.goto('/contact');
    await noHorizontalScroll(page);

    const formWrap = page.locator('#review-form');
    await expectPadX(formWrap, CONTACT_FIGMA_SM.pageX);
    expect(await px(formWrap, 'padding-top')).toBe(CONTACT_FIGMA_SM.formPt);
    expect(await px(formWrap, 'padding-bottom')).toBe(CONTACT_FIGMA_SM.formPb);

    const form = formWrap.locator('form');
    await expect(form.getByRole('heading', { name: CONTACT_COPY.form })).toBeVisible();
    await expectFontSize(form.getByRole('heading', { name: CONTACT_COPY.form }), CONTACT_FIGMA_SM.formH);
    await expect(form.getByText('Your name *')).toBeVisible();
    await expect(form.getByText('First name *')).toBeHidden();
    await expect(form.getByText('Email')).toBeHidden();
    await expect(form.getByText('State *')).toBeVisible();
    await expect(form.getByRole('button', { name: CONTACT_COPY.cta })).toBeVisible();

    await expect(page.getByTestId('contact-photos')).toBeHidden();

    const footer = page.locator('footer');
    await expectPadX(footer, CONTACT_FIGMA_SM.pageX);
    await expectPadY(footer, CONTACT_FIGMA_SM.footerPy);
    await expectColor(footer, CONTACT_FIGMA.footer);
    await expect(footer.getByText('Irvine · (949) 555-0148')).toBeVisible();
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
