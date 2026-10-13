import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import {
  ARTICLE_COPY,
  ARTICLE_FIGMA,
  ARTICLE_FIGMA_SM,
  ARTICLE_PATH,
} from './guide-article-figma-spec';

async function noHorizontalScroll(page: Page) {
  const { scrollW, clientW } = await page.evaluate(() => ({
    scrollW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    clientW: document.documentElement.clientWidth,
  }));
  expect(scrollW).toBeLessThanOrEqual(clientW + 1);
}

test.describe('Figma guide article mobile 390 hero', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('has no horizontal scroll at common phone widths', async ({ page }) => {
    for (const width of [320, 360, 375, 390, 414]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(ARTICLE_PATH);
      await page.waitForLoadState('networkidle');
      await noHorizontalScroll(page);
    }
  });

  test('mobile menu matches paper surface and closes cleanly', async ({ page }) => {
    await page.goto(ARTICLE_PATH);
    const header = page.locator('header');
    await expectColor(header, ARTICLE_FIGMA.paper);
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menu = page.getByTestId('mobile-menu');
    await expect(menu).toBeVisible();
    await expectColor(menu, ARTICLE_FIGMA.paper);
    expect(await page.evaluate(() => getComputedStyle(document.body).position)).toBe('fixed');
    await expect(menu.getByRole('link', { name: 'Guides' })).toBeVisible();
    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(menu).toBeHidden();
  });

  test('hero matches the mobile frame', async ({ page }) => {
    await page.goto(ARTICLE_PATH);
    await noHorizontalScroll(page);

    const header = page.locator('header');
    expect(await px(header, 'height')).toBe(ARTICLE_FIGMA_SM.headerH);
    await expectPadX(header, ARTICLE_FIGMA_SM.pageX);

    const article = page.getByTestId('guide-article');
    await expect(article.getByText(ARTICLE_COPY.crumb)).toBeVisible();
    await expect(article.getByRole('heading', { name: ARTICLE_COPY.title })).toBeVisible();
    await expect(article.getByText(ARTICLE_COPY.bylineSm, { exact: true })).toBeVisible();
    await expect(article.getByText(ARTICLE_COPY.byline)).toBeHidden();
    expect(await px(article, 'padding-top')).toBe(ARTICLE_FIGMA_SM.articlePt);
    expect(await px(article, 'padding-bottom')).toBe(ARTICLE_FIGMA_SM.articlePb);
    await expectPadX(article, ARTICLE_FIGMA_SM.pageX);
    expect(await px(article, 'row-gap')).toBe(ARTICLE_FIGMA_SM.articleGap);
    await expectFontSize(
      article.getByRole('heading', { name: ARTICLE_COPY.title }),
      ARTICLE_FIGMA_SM.title,
    );
    expect(await px(article.locator('img'), 'height')).toBe(ARTICLE_FIGMA_SM.photoH);
    await expectFontSize(article.getByText(ARTICLE_COPY.lead), ARTICLE_FIGMA_SM.body);
  });
});
