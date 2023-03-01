import { expect, test } from '@playwright/test';

test.describe('create page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/create');
	});

	test('has expected content', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'New Creature' })).toBeVisible();
		await expect(page.getByTestId('page-description')).toBeVisible();
		await expect(page.getByTestId('page-subheading')).toBeVisible();

		await expect(page.getByTestId('intellectual-type')).toBeVisible();
		await expect(page.getByTestId('physical-type')).toBeVisible();
		await expect(page.getByTestId('social-type')).toBeVisible();
		await expect(page.getByTestId('financial-type')).toBeVisible();
		await expect(page.getByTestId('occupational-type')).toBeVisible();
		await expect(page.getByTestId('spiritual-type')).toBeVisible();
		await expect(page.getByTestId('environmental-type')).toBeVisible();
		await expect(page.getByTestId('emotional-type')).toBeVisible();
		await expect(page.getByTestId('other-type')).toBeVisible();
	});

	test('other type button displays form to input type name', async ({ page }) => {
		await expect(page.getByTestId('type-input')).not.toBeVisible();
		await expect(page.getByTestId('submit-button')).not.toBeVisible();

		await page.getByTestId('other-type').click();

		await expect(page.getByTestId('type-input')).toBeVisible();
		await expect(page.getByTestId('submit-button')).toBeVisible();
	});
});
