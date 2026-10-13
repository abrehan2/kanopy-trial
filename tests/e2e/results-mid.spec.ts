import { expect, test } from '@playwright/test';
import { expectFontSize, expectPadX, px } from './style';
import { RESULTS_COPY, RESULTS_FIGMA } from './results-figma-spec';

test.describe('Figma results mid sections', () => {
  test('case rows match Figma copy and columns', async ({ page }) => {
    await page.goto('/results');
    const list = page.getByTestId('results-list');
    await expectPadX(list, RESULTS_FIGMA.pageX);
    expect(await px(list, 'padding-top')).toBe(RESULTS_FIGMA.listPt);
    expect(await px(list, 'padding-bottom')).toBe(RESULTS_FIGMA.listPb);

    const rows = list.getByTestId('results-case');
    await expect(rows).toHaveCount(9);
    const first = rows.first();
    await expect(first.getByRole('heading', { name: RESULTS_COPY.firstTitle })).toBeVisible();
    await expect(first.getByText('Personal injury · Orange County, 2024')).toBeVisible();
    await expect(first.getByText('Offered')).toBeVisible();
    await expect(first.locator('.text-case-sm.line-through')).toHaveText('$15,000');
    await expect(first.locator('.w-results-amt')).toHaveText(RESULTS_COPY.firstResult);
    await expectFontSize(
      first.getByRole('heading', { name: RESULTS_COPY.firstTitle }),
      RESULTS_FIGMA.caseTitle,
    );
    await expectFontSize(first.locator('.w-results-amt'), RESULTS_FIGMA.result);
    expect(await px(first, 'padding-top')).toBe(RESULTS_FIGMA.rowY);
    expect(await px(first.locator('.w-result-offer'), 'width')).toBe(RESULTS_FIGMA.offerW);
    expect(await px(first.locator('.w-results-amt'), 'width')).toBe(RESULTS_FIGMA.amtW);
  });

  test('filters narrow the case list', async ({ page }) => {
    await page.goto('/results');
    const list = page.getByTestId('results-list');
    await page.getByRole('tab', { name: 'Lemon law' }).click();
    await expect(list.getByTestId('results-case')).toHaveCount(3);
    await expect(
      list.getByRole('heading', { name: RESULTS_COPY.lemonTitle }),
    ).toBeVisible();
    await expect(
      list.getByRole('heading', { name: RESULTS_COPY.firstTitle }),
    ).toHaveCount(0);

    await page.getByRole('tab', { name: 'Personal injury' }).click();
    await expect(list.getByTestId('results-case')).toHaveCount(3);
    await page.getByRole('tab', { name: 'Workers’ comp' }).click();
    await expect(list.getByTestId('results-case')).toHaveCount(3);
    await page.getByRole('tab', { name: 'All' }).click();
    await expect(list.getByTestId('results-case')).toHaveCount(9);
  });
});
