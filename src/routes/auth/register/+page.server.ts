import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';

import { register, TOKEN_EXPIRATION } from '@src/lib/controllers/auth';
import { paths } from '@src/lib/paths';

import type { Actions, Action } from './$types';

const checkPasswordRequirements = (password: string): boolean => {
	const hasNumber = /\d/;
	const hasUppercase = /[A-Z]/;
	const hasLowercase = /[a-z]/;
	const hasSpecialChar = /[\W_]/;

	return (
		password.length >= 8 &&
		hasNumber.test(password) &&
		hasUppercase.test(password) &&
		hasLowercase.test(password) &&
		hasSpecialChar.test(password)
	);
};

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

	if (checkPasswordRequirements(data.get('password') as string) !== true) {
		throw error(400, { message: 'password does not meet requirements' });
	}

	const token = await register(data.get('username') as string, data.get('password') as string);
	if (token) {
		event.cookies.set('session', token, {
			path: '/',
			sameSite: 'strict',
			secure: env.NODE_ENV === 'production',
			maxAge: TOKEN_EXPIRATION,
		});

		throw redirect(302, paths.app.home);
	}
};

export const actions: Actions = { default: registerUser };
