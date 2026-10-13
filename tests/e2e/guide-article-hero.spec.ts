import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, px } from './style';
import { ARTICLE_COPY, ARTICLE_FIGMA, ARTICLE_PATH } from './guide-article-figma-spec';

test.describe('Figma guide article hero', () => {
  test('matches interior header, crumb, title, and photo', async ({ page }) => {
    await page.goto(ARTICLE_PATH);
    const header = page.locator('header');
    await expect(header).toBeVisible();
    expect(await px(header, 'height')).toBe(ARTICLE_FIGMA.headerH);
    await expectPadX(header, 64);
    await expectColor(header, ARTICLE_FIGMA.paper);

    const article = page.getByTestId('guide-article');
    await expect(article.getByText(ARTICLE_COPY.crumb)).toBeVisible();
    await expect(article.getByRole('link', { name: 'Guides' })).toHaveAttribute('href', '/guides');
    await expect(article.getByRole('heading', { name: ARTICLE_COPY.title })).toBeVisible();
    await expect(article.getByText(ARTICLE_COPY.byline)).toBeVisible();
    expect(await px(article, 'padding-top')).toBe(ARTICLE_FIGMA.articlePt);
    expect(await px(article, 'padding-bottom')).toBe(ARTICLE_FIGMA.articlePb);
    await expectPadX(article, ARTICLE_FIGMA.pageX);
    expect(await px(article, 'row-gap')).toBe(ARTICLE_FIGMA.articleGap);
    await expectFontSize(
      article.getByRole('heading', { name: ARTICLE_COPY.title }),
      ARTICLE_FIGMA.title,
    );

    const photo = article.locator('img');
    expect(await px(photo, 'width')).toBe(ARTICLE_FIGMA.photoW);
    expect(await px(photo, 'height')).toBe(ARTICLE_FIGMA.photoH);
    await expect(article.getByText(ARTICLE_COPY.lead)).toBeVisible();
    await expect(header.locator('a').first()).toHaveAttribute('href', '/');
  });
});
