import { findAccount } from '@src/lib/controllers/accounts';
import { authenticateToken } from '@src/lib/controllers/auth';

import type { LayoutServerLoad } from './$types';

//TODO: Confirm not authenticated if token is expired
export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = cookies.get('session');
	if (!token) {
		return;
	}

	const tokenResult = await authenticateToken(token);
	if (!tokenResult) {
		return;
	}

	const account = await findAccount(tokenResult.accountId);
	return { account };
};
