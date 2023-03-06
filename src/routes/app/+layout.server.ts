import { findAccount } from '@src/lib/controllers/accounts';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.account) {
		return;
	}

	const account = await findAccount(locals.account);
	return { account };
};
