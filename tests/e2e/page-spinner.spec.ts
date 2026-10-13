import { expect, test } from '@playwright/test';

test.describe('Logo page spinner', () => {
  test('refresh HTML paints the logo spinner', async ({ request }) => {
    const html = await (await request.get('/workers-comp')).text();
    expect(html).toContain('logo-spinner');
    expect(html).toContain('logo-horizontal.svg');
  });

  test('spinner is gone once the page is ready', async ({ page }) => {
    await page.goto('/workers-comp');
    await expect(page.getByTestId('logo-spinner')).toHaveCount(0);
    await expect(page.getByTestId('logo-horizontal').first()).toBeVisible();
  });

  test('home refresh HTML also paints the logo spinner', async ({ request }) => {
    const html = await (await request.get('/')).text();
    expect(html).toContain('logo-spinner');
  });
});
