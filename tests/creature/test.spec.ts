import { expect, test } from '@playwright/test';
import dotenv from 'dotenv';

test.describe('creature-data page', () => {
  test.beforeEach(() => dotenv.config());

	test.beforeEach(async ({ page }) => {
    const username = process.env.TEST_USERNAME as string;
    const password = process.env.TEST_PASSWORD as string;

		await page.goto('/auth/login');
    await page.getByTestId('username').type(username);
    await page.getByTestId('password').type(password);
    await page.getByTestId('submit-button').click();
	});

	test('has expected content', async ({ page }) => {
		await page.goto('/app/creature/78d303c5-8c3d-4d16-a97e-bcc162d52dca');
		await expect(page.getByTestId('temp-creature')).toBeVisible();
		await expect(page.getByTestId('display-name')).toBeVisible();
		await expect(page.getByTestId('display-type')).toBeVisible();
		await expect(page.getByTestId('display-description')).toBeVisible();
	});

	// TODO Test for error page on invalid creature id
});
