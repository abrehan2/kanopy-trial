import { expect, test, type Locator, type Page } from '@playwright/test';
import { px } from './style';

async function expectEqualPadY(item: Locator, expected: number) {
  expect(await px(item, 'padding-top')).toBe(expected);
  expect(await px(item, 'padding-bottom')).toBe(expected);
}

async function expectOpenGap(item: Locator, expected: number) {
  expect(await px(item, 'row-gap')).toBe(expected);
}

async function assertAccordion(page: Page, padY: number, openGap: number) {
  const items = page.locator('#faq [data-testid="faq-item"]');
  const count = await items.count();
  expect(count).toBeGreaterThan(1);

  for (let i = 0; i < count; i += 1) {
    const item = items.nth(i);
    if (!(await item.isVisible())) continue;
    await expectEqualPadY(item, padY);
  }

  const first = items.first();
  await expect(first).toHaveAttribute('data-open', 'true');
  await expectOpenGap(first, openGap);

  const closed = items.nth(1);
  await closed.getByRole('button').click();
  await expect(closed).toHaveAttribute('data-open', 'true');
  await expectEqualPadY(closed, padY);
  await expectOpenGap(closed, openGap);
  await expectEqualPadY(first, padY);
}

test.describe('Figma FAQ accordion spacing', () => {
  test('home accordion keeps equal pad and open gap', async ({ page }) => {
    await page.goto('/');
    await assertAccordion(page, 24, 14);
  });

  test('personal injury accordion keeps equal pad and open gap', async ({ page }) => {
    await page.goto('/personal-injury');
    await assertAccordion(page, 26, 12);
  });
});
