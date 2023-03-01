import { expect, test } from '@playwright/test';

const type = 'intellectual';

test.describe('create page - enter creature data', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/create');
		await page.getByTestId(`${type}-type`).click();
	});

	test('has expected content', async ({ page }) => {
		await expect(page.getByTestId('name-input')).toBeVisible();
		await expect(page.getByTestId('description-input')).toBeVisible();
		await expect(page.getByTestId('submit-button')).toBeVisible();
	});

	test('name input value adds the name to a created creature', async ({ page }) => {
		const testName = 'John Doe';

		await page.getByTestId('name-input').type(testName);
		await page.getByTestId('submit-button').click();

		await expect(page).toHaveURL(/.*creature-data/);
		await expect(page.getByTestId('display-name')).toContainText(testName);
	});

	test('description input value adds the description to a created creature', async ({ page }) => {
		const testDescription = 'Lorem Ipsum';

		await page.getByTestId('description-input').type(testDescription);
		await page.getByTestId('submit-button').click();

		await expect(page).toHaveURL(/.*creature-data/);
		await expect(page.getByTestId('display-description')).toContainText(testDescription);
	});
});
