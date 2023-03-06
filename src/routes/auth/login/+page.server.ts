import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';

import { authorize } from '@src/lib/controllers/auth';
import { paths } from '@src/lib/paths';

import type { Actions, Action } from './$types';

const tokenExpiration = 60 * 60 * 12;

const authenticateUser: Action = async (event) => {
	const data = await event.request.formData();
	const requireData = ['username', 'password'];

	requireData.forEach((value) => {
		if (!data.get(value)) {
			throw error(400, { message: `${value} is required` });
		}
	});

	const token = await authorize(data.get('username') as string, data.get('password') as string);
	if (token) {
		event.cookies.set('session', token, {
			path: '/',
			sameSite: 'strict',
			secure: env.NODE_ENV === 'production',
			maxAge: tokenExpiration,
		});

		throw redirect(302, paths.home);
	}
};

export const actions: Actions = { default: authenticateUser };
