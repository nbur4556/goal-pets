import { createAccount, findAccount, findAllAccounts } from '@src/lib/controllers/accounts';

import type { Actions, PageServerLoad } from './$types';

//! Temporary load all accounts for testing
export const load = (async () => {
	const accounts = await findAllAccounts();
	return { accounts };
}) satisfies PageServerLoad;

//TODO: Handle errors
export const actions = {
	createAccount: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username')?.toString();

		if (!username) {
			console.error('Error: username must be provided');
			return;
		}

		await createAccount(username);
	},
	loginAccount: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username')?.toString();

		if (!username) {
			console.error('Error: username must be provided');
			return;
		}

		return findAccount(username);
	},
} satisfies Actions;
