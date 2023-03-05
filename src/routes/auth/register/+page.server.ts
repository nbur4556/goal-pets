import { error } from '@sveltejs/kit';

import { register } from '@src/lib/controllers/auth';

import type { Actions, Action } from './$types';

//TODO: password strength requirements
const registerUser: Action = async (event) => {
	const data = await event.request.formData();
	const requireData = ['username', 'password', 'confirmPassword'];

	requireData.forEach((value) => {
		if (!data.get(value)) {
			throw error(400, { message: `${value} is required` });
		}
	});

	if (data.get('password') !== data.get('confirmPassword')) {
		throw error(400, { message: 'password and confirm password do not match' });
	}

	const user = register(data.get('username') as string, data.get('password') as string);
	return user;
};

export const actions: Actions = { default: registerUser };
