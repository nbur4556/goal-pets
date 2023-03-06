import { error } from '@sveltejs/kit';

import { authenticate } from '@src/lib/controllers/auth';

import type { Actions, Action } from './$types';

const authenticateUser: Action = async (event) => {
	const data = await event.request.formData();
	const requireData = ['username', 'password'];

	requireData.forEach((value) => {
		if (!data.get(value)) {
			throw error(400, { message: `${value} is required` });
		}
	});

	const isAuthenticated = await authenticate(
		data.get('username') as string,
		data.get('password') as string
	);
	console.log(isAuthenticated);
};

export const actions: Actions = { default: authenticateUser };
