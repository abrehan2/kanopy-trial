import { expect, test } from '@playwright/test';
import { expectColor } from './style';
import { THANKS_COPY, THANKS_FIGMA, THANKS_QUERY } from './thanks-figma-spec';

test.describe('Figma thanks end sections', () => {
  test('reuses the shared footer and does not add a thanks nav link', async ({ page }) => {
    await page.goto(THANKS_QUERY);
    const footer = page.locator('footer');
    await expectColor(footer, THANKS_FIGMA.footer);
    await expect(footer.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    await expect(footer.getByRole('link', { name: THANKS_COPY.home })).toHaveCount(0);

    await page.goto('/');
    await expect(page.locator('header').getByRole('link', { name: 'Thanks' })).toHaveCount(0);
    await expect(page.locator('footer').getByRole('link', { name: 'Thanks' })).toHaveCount(0);
  });
});
