import { expect, test } from '@playwright/test';
import { PI_COPY, PI_FIGMA } from './pi-figma-spec';
import { expectColor, expectFontSize, expectGap, expectPadX, expectPadY, px } from './style';

test.describe('Figma personal injury mid sections', () => {
  test('cases grid matches Figma copy and space', async ({ page }) => {
    await page.goto('/personal-injury');
    const section = page.locator('#cases');
    await expect(section.getByRole('heading', { name: PI_COPY.cases })).toBeVisible();
    await expectPadX(section, PI_FIGMA.pageX);
    await expectFontSize(section.getByRole('heading', { name: PI_COPY.cases }), PI_FIGMA.quote);
    await expect(section.getByText('Car and truck crashes')).toBeVisible();
    await expect(section.getByText('Dog bites')).toBeVisible();
    expect(await px(section.getByText('Car and truck crashes'), 'font-size')).toBe(
      PI_FIGMA.caseTitle,
    );
  });

  test('results band is pine with mid padding', async ({ page }) => {
    await page.goto('/personal-injury');
    const section = page.locator('#results');
    await expectColor(section, PI_FIGMA.pine);
    await expectPadX(section, PI_FIGMA.pageX);
    await expectPadY(section, PI_FIGMA.sectionMid);
    await expect(section.getByRole('heading', { name: PI_COPY.results })).toBeVisible();
    await expect(section.getByText('$1,250,000').first()).toBeVisible();
    await expect(section.getByText('$64,000').first()).toBeVisible();
  });

  test('now and states sections match Figma layout', async ({ page }) => {
    await page.goto('/personal-injury');
    const now = page.locator('#now');
    await expect(now.getByRole('heading', { name: PI_COPY.now })).toBeVisible();
    await expectPadX(now, PI_FIGMA.pageX);
    await expectPadY(now, PI_FIGMA.sectionY);
    await expectGap(now.locator('div').first(), PI_FIGMA.letterGap);
    await expect(
      now.getByText('Don’t give the other driver’s insurance a recorded statement.'),
    ).toBeVisible();

    const states = page.locator('#states');
    await expectColor(states, PI_FIGMA.cream);
    await expect(states.getByRole('heading', { name: PI_COPY.states })).toBeVisible();
    await expectPadY(states, PI_FIGMA.sectionY);
    await expect(states.getByText('Deadline to file')).toBeVisible();
    await expect(states.getByText('$30,000 per person', { exact: true }).first()).toBeVisible();
    await expect(states.getByText('$25,000 per person', { exact: true }).first()).toBeVisible();
  });
});
