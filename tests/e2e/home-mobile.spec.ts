import { expect, test, type Page } from '@playwright/test';
import { COPY, FIGMA, FIGMA_SM } from './figma-spec';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma home mobile 390', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
      expect(await px(page.locator('#review-form form'), 'width')).toBeLessThanOrEqual(width - 39);
    }
  });

  test('hero matches mobile frame', async ({ page }) => {
    await page.goto('/');
    await noHorizontalScroll(page);
    const hero = page.locator('#top');
    await expect(hero).toBeVisible();
    expect(await px(hero, 'height')).toBe(FIGMA_SM.heroH);
    expect(await px(hero.locator('header'), 'height')).toBe(FIGMA_SM.headerH);
    await expectPadX(hero.locator('header'), FIGMA_SM.pageX);
    await expectColor(hero, FIGMA.hero);
    await expectFontSize(hero.getByRole('heading', { name: COPY.heroTitle }), FIGMA_SM.display);
    const cta = hero.getByTestId('hero-cta');
    expect(await px(cta, 'margin-top')).toBe(FIGMA_SM.ctaGap);
    expect(await px(cta.getByRole('link', { name: COPY.heroCta }), 'height')).toBe(FIGMA_SM.ctaH);
    expect(await px(cta.getByRole('link', { name: 'Call (949) 555-0148' }), 'height')).toBe(
      FIGMA_SM.ctaH,
    );
    expect(await px(cta.locator('div').first(), 'row-gap')).toBe(FIGMA_SM.phoneGap);
    expect(await px(cta, 'row-gap')).toBe(FIGMA_SM.trustGap);
    expect(await px(hero.getByTestId('practice-bar'), 'height')).toBe(FIGMA_SM.barH);
    await expectPadX(hero.getByTestId('practice-bar'), FIGMA_SM.pageX);
    await expect(hero.getByText('California  ·  Nevada')).toBeVisible();
  });

  test('open menu covers the hero copy', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, FIGMA.paper);
    const covered = await page.evaluate(() => {
      const title = document.querySelector('#top h1');
      if (!title) return false;
      const box = title.getBoundingClientRect();
      const el = document.elementFromPoint(box.left + 24, box.top + 24);
      return Boolean(el?.closest('[data-testid="mobile-menu"]'));
    });
    expect(covered).toBe(true);
    await expect(menu.getByRole('link', { name: 'Results' })).toBeVisible();
  });

  test('each section matches mobile space, copy, and gutters', async ({ page }) => {
    await page.goto('/');
    await noHorizontalScroll(page);

    const form = page.locator('#review-form');
    await expectPadX(form, FIGMA_SM.pageX);
    await expectPadY(form, FIGMA_SM.formPy);
    expect(await px(form, 'row-gap')).toBe(32);
    await expect(
      form.getByRole('heading', { name: 'What’s your case worth? Find out free.' }),
    ).toBeVisible();
    await expectFontSize(
      form.getByRole('heading', { name: 'What’s your case worth? Find out free.' }),
      FIGMA_SM.formH,
    );
    await expect(form.getByLabel('Your name *')).toBeVisible();
    await expect(form.getByLabel('First name *')).toBeHidden();
    expect(await px(form.locator('form'), 'padding-left')).toBe(20);
    await expect(form.getByRole('checkbox')).toBeVisible();
    expect(await px(form.getByRole('checkbox'), 'width')).toBe(FIGMA.check);

    const attorneys = page.locator('#attorneys');
    await expectPadX(attorneys, FIGMA_SM.pageX);
    expect(await px(attorneys, 'padding-top')).toBe(8);
    expect(await px(attorneys, 'padding-bottom')).toBe(FIGMA_SM.sectionY);
    await expect(
      attorneys.getByRole('heading', { name: 'You’ll talk to a lawyer, not a call center.' }),
    ).toBeVisible();
    expect(await px(attorneys.getByTestId('attorney-photo'), 'height')).toBe(FIGMA_SM.photoH);
    expect(await px(attorneys.getByTestId('attorney-photo'), 'width')).toBe(350);

    const results = page.locator('#results');
    await expectColor(results, FIGMA.pine);
    await expectPadX(results, FIGMA_SM.pageX);
    await expectPadY(results, FIGMA_SM.sectionY);
    await expect(
      results.getByRole('heading', { name: 'What insurance offered vs. what we got' }),
    ).toBeVisible();
    await expectFontSize(
      results.getByRole('heading', { name: 'What insurance offered vs. what we got' }),
      FIGMA_SM.resultsH,
    );
    await expect(results.locator('.text-result-sm').filter({ hasText: '$1,250,000' })).toBeVisible();

    const advice = page.locator('#advice');
    await expectPadX(advice, FIGMA_SM.pageX);
    await expectPadY(advice, FIGMA_SM.sectionY);
    await expect(advice.getByRole('heading', { name: 'Just happened? Start here.' })).toBeVisible();
    await expectFontSize(
      advice.getByRole('heading', { name: 'Just happened? Start here.' }),
      FIGMA_SM.section,
    );
    await expect(advice.getByText('Car crash')).toBeVisible();

    const process = page.locator('#process');
    await expectPadX(process, FIGMA_SM.pageX);
    await expectPadY(process, FIGMA_SM.sectionY);
    await expectColor(process, FIGMA.cream);
    await expect(process.getByRole('heading', { name: COPY.process })).toBeVisible();
    await expect(process.getByText('We tell you if you have a case.')).toBeVisible();

    const review = page.locator('#review');
    await expectPadX(review, FIGMA_SM.pageX);
    await expectPadY(review, FIGMA_SM.sectionY);
    await expect(review.getByText('They offered me $15,000')).toBeVisible();
    await expectFontSize(review.locator('p').nth(1), FIGMA_SM.quote);

    const offices = page.locator('#offices');
    await expectPadX(offices, FIGMA_SM.pageX);
    expect(await px(offices, 'padding-top')).toBe(64);
    await expect(offices.getByRole('heading', { name: 'Irvine and Henderson.' })).toBeVisible();
    await expectFontSize(
      offices.getByRole('heading', { name: 'Irvine and Henderson.' }),
      FIGMA_SM.banner,
    );

    const faq = page.locator('#faq');
    await expectPadX(faq, FIGMA_SM.pageX);
    expect(await px(faq, 'padding-top')).toBe(24);
    expect(await px(faq, 'padding-bottom')).toBe(64);
    await expect(faq.getByRole('heading', { name: COPY.faq })).toBeVisible();
    await expectFontSize(faq.getByRole('heading', { name: COPY.faq }), FIGMA_SM.banner);
    await expect(faq.getByText('Do I have to go to court?')).toBeHidden();

    const closing = page.locator('#closing');
    await expectPadX(closing, FIGMA_SM.pageX);
    await expectPadY(closing, FIGMA_SM.ctaPy);
    expect(await px(closing, 'row-gap')).toBe(16);
    await expectFontSize(closing.getByText(COPY.closing), FIGMA_SM.close);
    await expect(closing.getByRole('link', { name: COPY.heroCta })).toBeVisible();
    await expect(closing.getByRole('link', { name: 'Call (949) 555-0148' })).toBeVisible();

    const footer = page.locator('footer');
    await expectPadX(footer, FIGMA_SM.pageX);
    await expectPadY(footer, FIGMA_SM.footerPy);
    await expectColor(footer, FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
