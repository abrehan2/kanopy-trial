import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectPadX, expectPadY, px } from './style';
import { GUIDES_COPY, GUIDES_FIGMA } from './guides-figma-spec';

test.describe('Figma guides end sections', () => {
  test('list, closing CTA, and shared footer match the frame', async ({ page }) => {
    await page.goto('/guides');
    const list = page.getByTestId('guides-list');
    await expectPadX(list, GUIDES_FIGMA.pageX);
    expect(await px(list, 'padding-bottom')).toBe(GUIDES_FIGMA.listPb);

    const rows = page.getByTestId('guides-row');
    await expect(rows).toHaveCount(3);
    await expect(rows.first().getByRole('heading')).toHaveText(GUIDES_COPY.firstTitle);
    await expect(rows.last().getByRole('heading')).toHaveText(GUIDES_COPY.lastTitleSm);
    expect(await px(rows.first(), 'padding-top')).toBe(GUIDES_FIGMA.rowY);
    expect(await px(rows.first(), 'column-gap')).toBe(GUIDES_FIGMA.rowGap);
    await expectFontSize(rows.first().getByRole('heading'), 28);

    const closing = page.locator('#closing');
    await expectColor(closing, GUIDES_FIGMA.pine);
    await expectPadY(closing, GUIDES_FIGMA.ctaPy);
    await expect(closing.getByText(GUIDES_COPY.closing)).toBeVisible();
    await expect(closing.getByRole('link', { name: GUIDES_COPY.cta })).toHaveAttribute(
      'href',
      '/#review-form',
    );

    const footer = page.locator('footer');
    await expectColor(footer, GUIDES_FIGMA.footer);
    await expect(footer.getByRole('link', { name: 'Guides' })).toHaveAttribute('href', '/guides');
    await expect(page.locator('header').getByRole('link', { name: 'Guides' })).toHaveAttribute(
      'href',
      '/guides',
    );
  });
});
