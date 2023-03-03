import type { Actions, PageServerLoad } from './$types';
import { createAccount, findAllAccounts } from '@src/lib/controllers/accounts';

//! Temporary load all accounts for testing
export const load = (async () => {
	const accounts = await findAllAccounts();
	console.log(accounts);
	return { accounts };
}) satisfies PageServerLoad;

export const actions = {
	//TODO: Handle errors
	createAccount: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username')?.toString();

		if (!username) {
			console.error('Error: username must be provided');
			return;
		}

		await createAccount(username);
	},
} satisfies Actions;
