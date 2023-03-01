import { expect, test } from '@playwright/test';

test.describe('landing page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('has expected content', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'Welcome to Goal Pets!' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'Create your Goal Pet Now' })).toBeVisible();
	});

	test('create goal pet link navigates to the create page', async ({ page }) => {
		await page.getByRole('link', { name: 'Create your Goal Pet Now' }).click();
		await expect(page).toHaveURL(/.*create/);
	});
});
