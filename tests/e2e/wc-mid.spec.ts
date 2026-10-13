import { expect, test } from '@playwright/test';
import { expectColor, expectFontSize, expectGap, expectPadX, expectPadY, px } from './style';
import { WC_COPY, WC_FIGMA } from './wc-figma-spec';

test.describe('Figma workers’ comp mid sections', () => {
  test('injuries grid matches Figma copy and space', async ({ page }) => {
    await page.goto('/workers-comp');
    const section = page.locator('#cases');
    await expect(section.getByRole('heading', { name: WC_COPY.cases })).toBeVisible();
    await expectPadX(section, WC_FIGMA.pageX);
    await expectFontSize(section.getByRole('heading', { name: WC_COPY.cases }), WC_FIGMA.quote);
    await expect(section.getByText('Back, neck and shoulder')).toBeVisible();
    await expect(section.getByText('Hurt by someone else on the job')).toBeVisible();
    expect(await px(section.getByText('Back, neck and shoulder'), 'font-size')).toBe(
      WC_FIGMA.caseTitle,
    );
  });

  test('results band is pine with mid padding', async ({ page }) => {
    await page.goto('/workers-comp');
    const section = page.locator('#results');
    await expectColor(section, WC_FIGMA.pine);
    await expectPadX(section, WC_FIGMA.pageX);
    await expectPadY(section, WC_FIGMA.sectionMid);
    await expect(section.getByRole('heading', { name: WC_COPY.results })).toBeVisible();
    await expect(section.getByText('$318,000').first()).toBeVisible();
    await expect(section.getByText('$92,000').first()).toBeVisible();
    await expect(section.getByText('At first', { exact: true }).first()).toBeVisible();
    await expect(section.getByText('Denied', { exact: true }).first()).toBeVisible();
  });

  test('now and states sections match Figma layout', async ({ page }) => {
    await page.goto('/workers-comp');
    const now = page.locator('#now');
    await expect(now.getByRole('heading', { name: WC_COPY.now })).toBeVisible();
    await expectPadX(now, WC_FIGMA.pageX);
    await expectPadY(now, WC_FIGMA.sectionY);
    await expectGap(now.locator('div').first(), WC_FIGMA.letterGap);
    await expect(
      now.getByText('Don’t wait. Nevada gives you 7 days to report it, California 30.').first(),
    ).toBeVisible();

    const states = page.locator('#states');
    await expectColor(states, WC_FIGMA.cream);
    await expect(states.getByRole('heading', { name: WC_COPY.states })).toBeVisible();
    await expectPadY(states, WC_FIGMA.sectionY);
    await expect(states.getByText('Tell your employer')).toBeVisible();
    await expect(states.getByText('Within 7 days').first()).toBeVisible();
    await expect(states.getByText('DWC-1, from your employer').first()).toBeVisible();
  });
});
