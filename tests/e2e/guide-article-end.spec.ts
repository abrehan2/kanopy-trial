import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadY, px } from './style';
import { ARTICLE_COPY, ARTICLE_FIGMA, ARTICLE_PATH } from './guide-article-figma-spec';

test.describe('Figma guide article end sections', () => {
  test('body, callout, related, and footer match the frame', async ({ page }) => {
    await page.goto(ARTICLE_PATH);
    const article = page.getByTestId('guide-article');
    await expect(article.getByRole('heading', { name: ARTICLE_COPY.why })).toBeVisible();
    await expect(article.getByRole('heading', { name: ARTICLE_COPY.next })).toBeVisible();
    await expect(article.getByRole('heading', { name: ARTICLE_COPY.lawyer })).toBeVisible();
    await expect(article.getByText(ARTICLE_COPY.firstBullet)).toBeVisible();
    await expect(article.getByText(ARTICLE_COPY.lastBullet)).toBeVisible();
    await expectFontSize(article.getByText(ARTICLE_COPY.firstBullet), ARTICLE_FIGMA.body);
    await expectFontSize(
      article.getByRole('heading', { name: ARTICLE_COPY.why }),
      ARTICLE_FIGMA.heading,
    );

    const callout = page.getByTestId('guide-callout');
    await expect(callout.getByRole('heading', { name: ARTICLE_COPY.callout })).toBeVisible();
    await expect(callout.getByRole('link', { name: ARTICLE_COPY.cta })).toHaveAttribute(
      'href',
      '/#review-form',
    );
    await expect(article.getByText(ARTICLE_COPY.disclaimer)).toBeVisible();

    const related = page.getByTestId('guide-related-list');
    await expect(related.getByRole('heading', { name: ARTICLE_COPY.related })).toBeVisible();
    const rows = related.getByTestId('guide-related');
    await expect(rows).toHaveCount(2);
    await expect(rows.first()).toContainText(ARTICLE_COPY.relatedFirst);
    await expect(rows.last()).toContainText(ARTICLE_COPY.relatedLast);

    const closing = page.locator('#closing');
    await expectColor(closing, ARTICLE_FIGMA.pine);
    await expectPadY(closing, ARTICLE_FIGMA.ctaPy);
    await expect(closing.getByText(ARTICLE_COPY.closing)).toBeVisible();

    const footer = page.locator('footer');
    await expectColor(footer, ARTICLE_FIGMA.footer);
    await expect(footer.getByRole('link', { name: 'Guides' })).toHaveAttribute('href', '/guides');
  });
});
