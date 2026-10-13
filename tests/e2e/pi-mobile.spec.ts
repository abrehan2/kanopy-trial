import { expect, test, type Page } from '@playwright/test';
import { PI_COPY, PI_FIGMA, PI_FIGMA_SM } from './pi-figma-spec';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma personal injury mobile 390', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/personal-injury');
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
      expect(await px(page.locator('#review-form form'), 'width')).toBeLessThanOrEqual(width - 39);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto('/personal-injury');
    const header = page.locator('header');
    await expectColor(header, PI_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, PI_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await page.mouse.wheel(0, 800);
    await page.evaluate(() => window.scrollBy(0, 400));
    expect(await page.evaluate(() => window.scrollY)).toBe(0);
    await expect(menu.getByRole('link', { name: 'Practice areas' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Results' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Get my free case review' })).toBeVisible();
    await expect(menu.getByRole('link', { name: 'Call (949) 555-0148' })).toBeVisible();
    expect(await px(menu, 'top')).toBe(PI_FIGMA_SM.headerH);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).not.toBe('fixed');
  });

  test('hero matches mobile frame', async ({ page }) => {
    await page.goto('/personal-injury');
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(PI_FIGMA_SM.headerH);
    await expectPadX(header, PI_FIGMA_SM.pageX);
    await expectColor(header, PI_FIGMA.paper);

    const hero = page.getByTestId('pi-hero');
    await expect(hero.getByRole('heading', { name: PI_COPY.hero })).toBeVisible();
    await expect(hero.getByText('Personal injury')).toBeVisible();
    await expect(hero.getByText(/Practice areas/)).toBeHidden();
    await expect(hero.getByText('You focus on getting better.', { exact: true })).toBeVisible();
    expect(await px(hero, 'padding-top')).toBe(PI_FIGMA_SM.heroPt);
    expect(await px(hero, 'padding-bottom')).toBe(PI_FIGMA_SM.heroPb);
    await expectPadX(hero, PI_FIGMA_SM.pageX);
    await expectFontSize(hero.getByRole('heading', { name: PI_COPY.hero }), PI_FIGMA_SM.banner);

    const cta = hero.getByTestId('pi-hero-cta');
    expect(await px(cta.getByRole('link', { name: PI_COPY.cta }), 'height')).toBe(PI_FIGMA_SM.ctaH);
    expect(await px(cta.getByRole('link', { name: 'Call (949) 555-0148' }), 'height')).toBe(
      PI_FIGMA_SM.ctaH,
    );
    expect(await px(hero.locator('img').first(), 'height')).toBe(PI_FIGMA_SM.photoH);
    expect(await px(hero.locator('img').first(), 'width')).toBe(350);
  });

  test('each section matches mobile space, copy, and gutters', async ({ page }) => {
    await page.goto('/personal-injury');
    await noHorizontalScroll(page);

    await expect(page.locator('#cases')).toBeHidden();

    const results = page.locator('#results');
    await expectColor(results, PI_FIGMA.pine);
    await expectPadX(results, PI_FIGMA_SM.pageX);
    await expectPadY(results, PI_FIGMA_SM.sectionY);
    await expect(results.getByRole('heading', { name: PI_COPY.resultsSm })).toBeVisible();
    await expectFontSize(
      results.getByRole('heading', { name: PI_COPY.resultsSm }),
      PI_FIGMA_SM.resultsH,
    );
    await expect(results.getByText('Rear-end crash, Orange County')).toBeVisible();
    await expect(results.locator('.text-result-sm').filter({ hasText: '$1,250,000' })).toBeVisible();
    await expect(
      results.getByText('Past results don’t guarantee a future outcome.', { exact: true }),
    ).toBeVisible();

    const now = page.locator('#now');
    await expectPadX(now, PI_FIGMA_SM.pageX);
    await expectPadY(now, PI_FIGMA_SM.sectionY);
    await expect(now.getByRole('heading', { name: PI_COPY.now })).toBeVisible();
    await expectFontSize(now.getByRole('heading', { name: PI_COPY.now }), PI_FIGMA_SM.section);
    await expect(now.getByText('See a doctor within 72 hours.')).toBeVisible();
    await expect(now.getByText('Photograph everything.')).toBeVisible();
    await expect(now.getByText('Keep every bill and receipt in one place.')).toHaveCount(1);
    await expect(now.getByText('Keep every bill and receipt in one place.')).toBeHidden();
    await expect(
      now.getByText('Don’t give their insurer a recorded statement.'),
    ).toBeVisible();

    const states = page.locator('#states');
    await expectColor(states, PI_FIGMA.cream);
    await expectPadX(states, PI_FIGMA_SM.pageX);
    await expectPadY(states, PI_FIGMA_SM.sectionY);
    await expect(states.getByRole('heading', { name: PI_COPY.statesSm })).toBeVisible();
    await expectFontSize(
      states.getByRole('heading', { name: PI_COPY.statesSm }),
      PI_FIGMA_SM.section,
    );
    await expect(states.getByText('Deadline to file')).toBeVisible();
    await expect(states.getByText('CA', { exact: true }).first()).toBeVisible();
    await expect(states.getByText('NV', { exact: true }).first()).toBeVisible();
    await expect(states.getByText('$30,000 per person').first()).toBeHidden();

    const form = page.locator('#review-form');
    await expectPadX(form, PI_FIGMA_SM.pageX);
    await expectPadY(form, PI_FIGMA_SM.formPy);
    await expect(form.getByRole('heading', { name: PI_COPY.formSm })).toBeVisible();
    await expectFontSize(form.getByRole('heading', { name: PI_COPY.formSm }), PI_FIGMA_SM.formH);
    await expect(form.getByLabel('Your name *')).toBeVisible();
    await expect(form.getByLabel('First name *')).toBeHidden();

    const faq = page.locator('#faq');
    await expectPadX(faq, PI_FIGMA_SM.pageX);
    expect(await px(faq, 'padding-top')).toBe(PI_FIGMA_SM.faqPt);
    expect(await px(faq, 'padding-bottom')).toBe(PI_FIGMA_SM.faqPb);
    await expect(faq.getByRole('heading', { name: PI_COPY.faqSm })).toBeVisible();
    await expectFontSize(faq.getByRole('heading', { name: PI_COPY.faqSm }), PI_FIGMA_SM.section);
    expect(await px(faq.getByTestId('faq-item').first(), 'padding-top')).toBe(
      PI_FIGMA_SM.faqItemY,
    );

    const closing = page.locator('#closing');
    await expectPadX(closing, PI_FIGMA_SM.pageX);
    await expectPadY(closing, PI_FIGMA_SM.ctaPy);
    await expectFontSize(closing.getByText(PI_COPY.closing), PI_FIGMA_SM.close);
    await expect(closing.getByRole('link', { name: PI_COPY.cta })).toBeVisible();
    await expect(closing.getByRole('link', { name: 'Call (949) 555-0148' })).toBeVisible();

    const footer = page.locator('footer');
    await expectPadX(footer, PI_FIGMA_SM.pageX);
    await expectPadY(footer, PI_FIGMA_SM.footerPy);
    await expectColor(footer, PI_FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
