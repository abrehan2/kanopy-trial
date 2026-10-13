import { expect, test, type Locator, type Page } from '@playwright/test';
import { LEMON_FIGMA_SM } from './lemon-figma-spec';
import { px } from './style';

async function box(el: Locator) {
  const value = await el.boundingBox();
  expect(value).toBeTruthy();
  return value!;
}

async function assertNowLines(page: Page, title: string) {
  const now = page.locator('#now');
  const heading = now.getByRole('heading', { name: title });
  const steps = now.getByTestId('now-steps').locator(':scope > div');
  const first = steps.first();
  const last = steps.last();
  expect(await px(first, 'border-top-width')).toBe(1);
  expect(await px(last, 'border-top-width')).toBe(2);
  expect(await px(last, 'border-bottom-width')).toBe(0);
  expect(Math.round((await box(first)).y - ((await box(heading)).y + (await box(heading)).height))).toBe(
    16,
  );
}

async function assertFaqClosed(page: Page) {
  const faq = page.locator('#faq');
  const items = faq.getByTestId('faq-item');
  const last = items.last();
  const closing = page.locator('#closing');
  expect(await items.count()).toBeGreaterThan(1);
  for (let i = 0; i < (await items.count()); i += 1) {
    await expect(items.nth(i)).toHaveAttribute('data-compact-open', 'false');
  }
  expect(await px(items.first(), 'border-top-width')).toBe(1);
  expect(await px(last, 'border-bottom-width')).toBe(0);
  expect(await px(faq, 'padding-bottom')).toBe(LEMON_FIGMA_SM.faqPb);
  const lastBox = await box(last);
  const closeBox = await box(closing);
  expect(Math.round(closeBox.y - (lastBox.y + lastBox.height))).toBe(LEMON_FIGMA_SM.faqPb);
  await expect(faq.getByTestId('faq-answer')).toBeHidden();
}

test.describe('Figma practice mobile lines', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('personal injury now rules and faq space match the frame', async ({ page }) => {
    await page.goto('/personal-injury');
    await assertNowLines(page, 'If it just happened');
    await assertFaqClosed(page);
  });

  test('lemon law now rules and faq space match the frame', async ({ page }) => {
    await page.goto('/lemon-law');
    await assertNowLines(page, 'If your car keeps breaking down');
    await assertFaqClosed(page);
  });
});
