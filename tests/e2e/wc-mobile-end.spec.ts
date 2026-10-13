import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';
import { WC_COPY, WC_FIGMA, WC_FIGMA_SM } from './wc-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma workers’ comp mobile 390 sections', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('each section matches mobile space, copy, and gutters', async ({ page }) => {
    await page.goto('/workers-comp');
    await noHorizontalScroll(page);
    await expect(page.locator('#cases')).toBeHidden();

    const results = page.locator('#results');
    await expectColor(results, WC_FIGMA.pine);
    await expectPadX(results, WC_FIGMA_SM.pageX);
    await expectPadY(results, WC_FIGMA_SM.sectionY);
    await expect(results.getByRole('heading', { name: WC_COPY.resultsSm })).toBeVisible();
    await expectFontSize(
      results.getByRole('heading', { name: WC_COPY.resultsSm }),
      WC_FIGMA_SM.resultsH,
    );
    await expect(results.getByText('Warehouse injury, Henderson')).toBeVisible();
    await expect(results.locator('.text-result-sm').filter({ hasText: '$318,000' })).toBeVisible();
    await expect(results.getByText('denied at first').first()).toBeVisible();
    await expect(results.locator('.text-offer-mob').filter({ hasText: '$12,000' })).toBeVisible();
    await expect(
      results.getByText('Past results don’t guarantee a future outcome.', { exact: true }),
    ).toBeVisible();

    const now = page.locator('#now');
    await expectPadX(now, WC_FIGMA_SM.pageX);
    await expectPadY(now, WC_FIGMA_SM.sectionY);
    await expect(now.getByRole('heading', { name: WC_COPY.now })).toBeVisible();
    await expectFontSize(now.getByRole('heading', { name: WC_COPY.now }), WC_FIGMA_SM.section);
    await expect(now.getByText('Tell your supervisor, then text or email it.')).toBeVisible();
    await expect(now.getByText('Ask for the claim form.')).toBeVisible();
    await expect(now.getByText('Write down who saw it.')).toBeHidden();
    await expect(now.getByText('Don’t wait. Nevada: 7 days. California: 30.')).toBeVisible();

    const states = page.locator('#states');
    await expectColor(states, WC_FIGMA.cream);
    await expectPadX(states, WC_FIGMA_SM.pageX);
    await expectPadY(states, WC_FIGMA_SM.sectionY);
    await expect(states.getByRole('heading', { name: WC_COPY.statesSm })).toBeVisible();
    await expect(states.getByText('Tell your employer')).toBeVisible();
    await expect(states.locator('.text-nav').filter({ hasText: 'Within 7 days' })).toBeVisible();
    await expect(states.getByText('Your doctor')).toBeHidden();

    const form = page.locator('#review-form');
    await expectPadX(form, WC_FIGMA_SM.pageX);
    await expectPadY(form, WC_FIGMA_SM.formPy);
    await expect(form.getByRole('heading', { name: WC_COPY.formSm })).toBeVisible();
    await expect(form.getByLabel('Your name *')).toBeVisible();

    const faq = page.locator('#faq');
    await expectPadX(faq, WC_FIGMA_SM.pageX);
    expect(await px(faq, 'padding-top')).toBe(WC_FIGMA_SM.faqPt);
    expect(await px(faq, 'padding-bottom')).toBe(WC_FIGMA_SM.faqPb);
    await expect(faq.getByRole('heading', { name: WC_COPY.faqSm })).toBeVisible();
    await expect(faq.getByText('Can I be fired for filing?')).toBeVisible();

    const closing = page.locator('#closing');
    await expectPadX(closing, WC_FIGMA_SM.pageX);
    await expectPadY(closing, WC_FIGMA_SM.ctaPy);
    await expectFontSize(closing.getByText(WC_COPY.closing), WC_FIGMA_SM.close);

    const footer = page.locator('footer');
    await expectPadX(footer, WC_FIGMA_SM.pageX);
    await expectPadY(footer, WC_FIGMA_SM.footerPy);
    await expectColor(footer, WC_FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
