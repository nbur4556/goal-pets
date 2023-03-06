import type { Handle } from '@sveltejs/kit';

import { authenticateToken } from '@src/lib/controllers/auth';

//TODO: Confirm not authenticated if token is expired
export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('session');
	if (!token) {
		return resolve(event);
	}

	const authResult = await authenticateToken(token);
	if (!authResult?.accountId) {
		return resolve(event);
	}

	event.locals.account = authResult.accountId;
	return resolve(event);
};
