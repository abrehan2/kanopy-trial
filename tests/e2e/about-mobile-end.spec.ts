import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';
import { ABOUT_COPY, ABOUT_FIGMA, ABOUT_FIGMA_SM } from './about-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma about mobile 390 sections', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('attorneys and promises match mobile frame', async ({ page }) => {
    await page.goto('/about');
    await noHorizontalScroll(page);

    const attorneys = page.locator('#attorneys');
    await expectPadX(attorneys, ABOUT_FIGMA_SM.pageX);
    expect(await px(attorneys, 'padding-top')).toBe(ABOUT_FIGMA_SM.attorneysPt);
    expect(await px(attorneys, 'padding-bottom')).toBe(ABOUT_FIGMA_SM.attorneysPb);
    await expect(attorneys.getByRole('heading', { name: ABOUT_COPY.attorneys })).toBeHidden();
    await expect(attorneys.getByRole('heading', { name: ABOUT_COPY.ludmilaSm, exact: true })).toBeVisible();
    await expect(attorneys.getByRole('heading', { name: ABOUT_COPY.ludmila })).toBeHidden();
    await expect(attorneys.getByText('California · Irvine', { exact: true })).toBeVisible();
    await expect(attorneys.getByText('Personal injury and lemon law.')).toBeVisible();
    await expect(attorneys.getByText('California Bar No. 304180')).toBeHidden();
    await expect(attorneys.getByRole('link', { name: 'Book a call with Ludmila' })).toBeHidden();
    await expectFontSize(
      attorneys.getByRole('heading', { name: ABOUT_COPY.ludmilaSm, exact: true }),
      ABOUT_FIGMA_SM.aboutName,
    );
    expect(await px(attorneys.locator('img').first(), 'height')).toBe(ABOUT_FIGMA_SM.portraitH);

    const promises = page.locator('#promises');
    await expectColor(promises, ABOUT_FIGMA.cream);
    await expectPadX(promises, ABOUT_FIGMA_SM.pageX);
    await expectPadY(promises, ABOUT_FIGMA_SM.sectionY);
    await expect(promises.getByRole('heading', { name: ABOUT_COPY.promisesSm })).toBeVisible();
    await expect(promises.getByRole('heading', { name: ABOUT_COPY.promises })).toBeHidden();
    await expectFontSize(
      promises.getByRole('heading', { name: ABOUT_COPY.promisesSm }),
      ABOUT_FIGMA_SM.promises,
    );
    await expect(promises.getByRole('heading', { name: 'A lawyer, not a case manager.' })).toBeVisible();
    await expect(promises.getByText('You get a lawyer, not a case manager.')).toBeHidden();
    await expect(promises.getByText('The truth about your case.')).toBeVisible();
    await expect(promises.getByText('Someone who picks up.')).toBeVisible();
    await expectFontSize(
      promises.getByRole('heading', { name: 'A lawyer, not a case manager.' }),
      ABOUT_FIGMA_SM.promiseRow,
    );
  });

  test('reused offices, closing, and footer match mobile frame', async ({ page }) => {
    await page.goto('/about');
    await noHorizontalScroll(page);

    const offices = page.locator('#offices');
    await expectColor(offices, ABOUT_FIGMA.pine);
    await expectPadX(offices, ABOUT_FIGMA_SM.pageX);
    await expect(offices.getByRole('heading', { name: ABOUT_COPY.officesSm })).toBeVisible();
    await expectFontSize(
      offices.getByRole('heading', { name: ABOUT_COPY.officesSm }),
      ABOUT_FIGMA_SM.banner,
    );
    await expect(offices.getByText('Same two attorneys in both.')).toBeVisible();
    await expect(offices.getByText('Irvine · (949) 555-0148')).toBeVisible();

    const closing = page.locator('#closing');
    await expectPadX(closing, ABOUT_FIGMA_SM.pageX);
    await expectPadY(closing, ABOUT_FIGMA_SM.ctaPy);
    await expectFontSize(closing.getByText(ABOUT_COPY.closing), ABOUT_FIGMA_SM.close);
    await expect(closing.getByRole('link', { name: ABOUT_COPY.cta })).toHaveAttribute(
      'href',
      '/#review-form',
    );
    await expect(closing.getByRole('link', { name: 'Call (949) 555-0148' })).toBeVisible();

    const footer = page.locator('footer');
    await expectPadX(footer, ABOUT_FIGMA_SM.pageX);
    await expectPadY(footer, ABOUT_FIGMA_SM.footerPy);
    await expectColor(footer, ABOUT_FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
