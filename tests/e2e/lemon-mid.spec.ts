import { expect, test } from '@playwright/test';
import { LEMON_COPY, LEMON_FIGMA } from './lemon-figma-spec';
import { expectColor, expectFontSize, expectGap, expectPadX, expectPadY, px } from './style';

test.describe('Figma lemon law mid sections', () => {
  test('lemons grid matches Figma copy and space', async ({ page }) => {
    await page.goto('/lemon-law');
    const section = page.locator('#cases');
    await expect(section.getByRole('heading', { name: LEMON_COPY.cases })).toBeVisible();
    await expectPadX(section, LEMON_FIGMA.pageX);
    await expectFontSize(section.getByRole('heading', { name: LEMON_COPY.cases }), LEMON_FIGMA.quote);
    await expect(section.getByText('Engine and transmission')).toBeVisible();
    await expect(section.getByText('EVs and trucks')).toBeVisible();
    expect(await px(section.getByText('Engine and transmission'), 'font-size')).toBe(
      LEMON_FIGMA.caseTitle,
    );
  });

  test('results band is pine with mid padding', async ({ page }) => {
    await page.goto('/lemon-law');
    const section = page.locator('#results');
    await expectColor(section, LEMON_FIGMA.pine);
    await expectPadX(section, LEMON_FIGMA.pageX);
    await expectPadY(section, LEMON_FIGMA.sectionMid);
    await expect(section.getByRole('heading', { name: LEMON_COPY.results })).toBeVisible();
    await expect(section.getByText('$87,400').first()).toBeVisible();
    await expect(section.getByText('$58,250').first()).toBeVisible();
    await expect(section.getByText('Dealer said', { exact: true })).toBeVisible();
    await expect(section.getByText('Buyback', { exact: true })).toBeVisible();
  });

  test('now and states sections match Figma layout', async ({ page }) => {
    await page.goto('/lemon-law');
    const now = page.locator('#now');
    await expect(now.getByRole('heading', { name: LEMON_COPY.now })).toBeVisible();
    await expectPadX(now, LEMON_FIGMA.pageX);
    await expectPadY(now, LEMON_FIGMA.sectionY);
    await expectGap(now.locator('div').first(), LEMON_FIGMA.letterGap);
    await expect(
      now.getByText('Don’t sell or trade it in yet, and don’t pay for repairs the warranty should cover.').first(),
    ).toBeVisible();

    const states = page.locator('#states');
    await expectColor(states, LEMON_FIGMA.cream);
    await expect(states.getByRole('heading', { name: LEMON_COPY.states })).toBeVisible();
    await expectPadY(states, LEMON_FIGMA.sectionY);
    await expect(states.getByText('Which cars')).toBeVisible();
    await expect(states.getByText('New cars only').first()).toBeVisible();
    await expect(states.getByText('Generally 4 years').first()).toBeVisible();
  });
});
