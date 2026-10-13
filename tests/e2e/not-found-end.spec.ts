import { expect, test } from '@playwright/test';
import { expectColor } from './style';
import { NOT_FOUND_COPY, NOT_FOUND_FIGMA, NOT_FOUND_PATH } from './not-found-figma-spec';

test.describe('Figma 404 end sections', () => {
  test('footer matches the shared interior frame', async ({ page }) => {
    await page.goto(NOT_FOUND_PATH);

    await expect(page.locator('#closing')).toHaveCount(0);
    await expect(page.getByRole('link', { name: NOT_FOUND_COPY.home }).first()).toBeVisible();

    const footer = page.locator('footer');
    await expectColor(footer, NOT_FOUND_FIGMA.footer);
    await expect(footer.getByRole('link', { name: 'Guides' })).toHaveAttribute('href', '/guides');
    await expect(footer.getByRole('link', { name: 'Privacy' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Terms' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Accessibility' })).toBeVisible();
  });
});
