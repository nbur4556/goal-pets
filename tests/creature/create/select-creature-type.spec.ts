import { expect, test } from '@playwright/test';

const types = [
	'intellectual',
	'physical',
	'social',
	'financial',
	'occupational',
	'spiritual',
	'environmental',
	'emotional',
];

test.describe('create page - select creature type', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('creature/create');
	});

	test('has expected content', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'New Creature' })).toBeVisible();
		await expect(page.getByTestId('page-description')).toBeVisible();
		await expect(page.getByTestId('page-subheading')).toBeVisible();

		for (const type of types) {
			await expect(page.getByTestId(`${type}-type`)).toBeVisible();
		}
	});

	test('other type button displays form to input type name', async ({ page }) => {
		await expect(page.getByTestId('type-input')).not.toBeVisible();
		await expect(page.getByTestId('submit-button')).not.toBeVisible();

		await page.getByTestId('other-type').click();

		await expect(page.getByTestId('type-input')).toBeVisible();
		await expect(page.getByTestId('submit-button')).toBeVisible();
	});

  //TODO: Reinclude tests when authorization is added
	for (const type of types) {
		test.skip(`${type} button adds the ${type} type to a created creature`, async ({ page }) => {
			await page.getByTestId(`${type}-type`).click();
			await page.getByTestId('submit-button').click();

			await expect(page).toHaveURL(/.*creature-data/);
			await expect(page.getByTestId('display-type')).toContainText(type);
		});
	}

  //TODO: Reinclude tests when authorization is added
	test.skip('other button add a user entered type to a created creature', async ({ page }) => {
		const testType = 'Test';

		await page.getByTestId('other-type').click();
		await page.getByTestId('type-input').type(testType);
		await page.getByTestId('submit-button').click();
		await page.getByTestId('submit-button').click();

		await expect(page).toHaveURL(/.*creature-data/);
		await expect(page.getByTestId('display-type')).toContainText(testType);
	});
});
