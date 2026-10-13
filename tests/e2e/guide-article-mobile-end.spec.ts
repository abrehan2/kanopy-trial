import { expect, test, type Page } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';
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

test.describe('Figma guide article mobile 390 end', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('body, callout, and footer match the compact frame', async ({ page }) => {
    await page.goto(ARTICLE_PATH);
    await noHorizontalScroll(page);

    const article = page.getByTestId('guide-article');
    await expect(article.getByRole('heading', { name: ARTICLE_COPY.why })).toBeVisible();
    await expectFontSize(
      article.getByRole('heading', { name: ARTICLE_COPY.why }),
      ARTICLE_FIGMA_SM.heading,
    );
    await expect(article.getByText(ARTICLE_COPY.firstBullet)).toBeVisible();
    await expect(article.getByText(ARTICLE_COPY.lastBullet)).toBeVisible();

    const callout = page.getByTestId('guide-callout');
    await expect(callout.getByRole('heading', { name: ARTICLE_COPY.calloutSm })).toBeVisible();
    await expect(callout.getByRole('heading', { name: ARTICLE_COPY.callout })).toBeHidden();
    await expect(callout.getByText(ARTICLE_COPY.calloutBodySm)).toBeVisible();
    expect(await px(callout.getByRole('link', { name: ARTICLE_COPY.cta }), 'height')).toBe(56);

    await expect(article.getByText(ARTICLE_COPY.disclaimerSm, { exact: true })).toBeVisible();
    await expect(article.getByText(ARTICLE_COPY.disclaimer)).toBeHidden();
    await expect(page.getByTestId('guide-related-list')).toBeHidden();
    await expect(page.locator('#closing')).toBeHidden();

    const footer = page.locator('footer');
    await expectPadX(footer, ARTICLE_FIGMA_SM.pageX);
    await expectPadY(footer, ARTICLE_FIGMA_SM.footerPy);
    await expectColor(footer, ARTICLE_FIGMA.footer);
    await expect(footer.getByText('Privacy · Terms · Accessibility')).toBeVisible();
  });
});
