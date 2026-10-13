import { expect, test, type Page } from '@playwright/test';
import { LEMON_COPY, LEMON_FIGMA, LEMON_FIGMA_SM } from './lemon-figma-spec';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma lemon law mobile 390 sections', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('each section matches mobile space, copy, and gutters', async ({ page }) => {
    await page.goto('/lemon-law');
    await noHorizontalScroll(page);
    await expect(page.locator('#cases')).toBeHidden();

    const results = page.locator('#results');
    await expectColor(results, LEMON_FIGMA.pine);
    await expectPadX(results, LEMON_FIGMA_SM.pageX);
    await expectPadY(results, LEMON_FIGMA_SM.sectionY);
    await expect(results.getByRole('heading', { name: LEMON_COPY.resultsSm })).toBeVisible();
    await expectFontSize(
      results.getByRole('heading', { name: LEMON_COPY.resultsSm }),
      LEMON_FIGMA_SM.resultsH,
    );
    await expect(results.getByText('SUV buyback, Los Angeles')).toBeVisible();
    await expect(results.locator('.text-result-sm').filter({ hasText: '$87,400' })).toBeVisible();
    await expect(results.getByText('“No problem found”')).toBeHidden();
    await expect(
      results.getByText('Past results don’t guarantee a future outcome.', { exact: true }),
    ).toBeVisible();

    const now = page.locator('#now');
    await expectPadX(now, LEMON_FIGMA_SM.pageX);
    await expectPadY(now, LEMON_FIGMA_SM.sectionY);
    await expect(now.getByRole('heading', { name: LEMON_COPY.now })).toBeVisible();
    await expectFontSize(now.getByRole('heading', { name: LEMON_COPY.now }), LEMON_FIGMA_SM.section);
    await expect(now.getByText('Go back to the dealer every time.')).toBeVisible();
    await expect(now.getByText('Keep every repair order.')).toBeVisible();
    await expect(now.getByText('Don’t sell or trade it in yet.')).toBeVisible();

    const states = page.locator('#states');
    await expectColor(states, LEMON_FIGMA.cream);
    await expectPadX(states, LEMON_FIGMA_SM.pageX);
    await expectPadY(states, LEMON_FIGMA_SM.sectionY);
    await expect(states.getByRole('heading', { name: LEMON_COPY.statesSm })).toBeVisible();
    await expect(states.getByText('Which cars')).toBeVisible();
    await expect(states.getByText('New, used and leased, under warranty')).toBeVisible();
    await expect(states.getByText('2–4 repair tries, or 30+ days in the shop')).toBeVisible();
    await expect(states.getByText('Deadline')).toBeHidden();

    const form = page.locator('#review-form');
    await expectPadX(form, LEMON_FIGMA_SM.pageX);
    await expectPadY(form, LEMON_FIGMA_SM.formPy);
    await expect(form.getByRole('heading', { name: LEMON_COPY.formSm })).toBeVisible();
    await expect(form.getByLabel('Your name *')).toBeVisible();

    const faq = page.locator('#faq');
    await expectPadX(faq, LEMON_FIGMA_SM.pageX);
    expect(await px(faq, 'padding-top')).toBe(LEMON_FIGMA_SM.faqPt);
    expect(await px(faq, 'padding-bottom')).toBe(LEMON_FIGMA_SM.faqPb);
    await expect(faq.getByRole('heading', { name: LEMON_COPY.faqSm })).toBeVisible();
    await expect(faq.getByText('Do I pay anything for a lemon law case?')).toBeVisible();

    const closing = page.locator('#closing');
    await expectPadX(closing, LEMON_FIGMA_SM.pageX);
    await expectPadY(closing, LEMON_FIGMA_SM.ctaPy);
    await expectFontSize(closing.getByText(LEMON_COPY.closing), LEMON_FIGMA_SM.close);

    const footer = page.locator('footer');
    await expectPadX(footer, LEMON_FIGMA_SM.pageX);
    await expectPadY(footer, LEMON_FIGMA_SM.footerPy);
    await expectColor(footer, LEMON_FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
