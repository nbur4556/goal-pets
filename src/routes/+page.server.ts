import { error } from '@sveltejs/kit';

import { createAccount, findAccount, findAllAccounts } from '@src/lib/controllers/accounts';

import type { Actions, PageServerLoad } from './$types';

//! Temporary load all accounts for testing
export const load = (async () => {
	const accounts = await findAllAccounts();
	return { accounts };
}) satisfies PageServerLoad;

export const actions = {
	createAccount: async (event) => {
		const data = await event.request.formData();
		const requiredData = ['username'];

		requiredData.forEach((value) => {
			if (!data.get(value)) {
				throw error(400, { message: `${value} is required` });
			}
		});

		await createAccount(data.get('username') as string);
	},
	loginAccount: async (event) => {
		const data = await event.request.formData();
		const requiredData = ['username'];

		requiredData.forEach((value) => {
			if (!data.get(value)) {
				throw error(400, { message: `${value} is required` });
			}
		});

		const account = await findAccount(data.get('username') as string);
		return account;
	},
} satisfies Actions;
