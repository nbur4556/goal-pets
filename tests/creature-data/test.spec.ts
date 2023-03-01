import { expect, test } from '@playwright/test';

test.describe('creature-data page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/creature-data');
  });

  test('has expected content', async ({page}) => {
    await expect(page.getByTestId('temp-creature')).toBeVisible();
    await expect(page.getByTestId('display-name')).toBeVisible();
    await expect(page.getByTestId('display-type')).toBeVisible();
    await expect(page.getByTestId('display-description')).toBeEmpty();
  });
});