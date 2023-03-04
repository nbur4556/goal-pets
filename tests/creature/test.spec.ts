import { expect, test } from '@playwright/test';

test.describe('creature-data page', () => {
	test('has expected content', async ({ page }) => {
		await page.goto('/creature/1');
		await expect(page.getByTestId('temp-creature')).toBeVisible();
		await expect(page.getByTestId('display-name')).toBeVisible();
		await expect(page.getByTestId('display-type')).toBeVisible();
		await expect(page.getByTestId('display-description')).toBeVisible();
	});
  
  //TODO: Test for error page on invalid creature id
});
