import { expect, test } from '@playwright/test';

test.describe('landing page', () => {
  test.beforeAll(() => dotenv.config());
	test.beforeEach(async ({ page }) => {
     // LOGIN
     const username = process.env.TEST_USERNAME as string;
     const password = process.env.TEST_PASSWORD as string;
     await page.goto('/auth/login');
     await page.getByTestId('username').type(username);
     await page.getByTestId('password').type(password);
     await page.getByTestId('submit-button').click();

		await page.goto('/app');
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
