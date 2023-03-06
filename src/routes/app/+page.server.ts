import { error } from '@sveltejs/kit';

import { findCreaturesByAccount } from '@src/lib/controllers/creatures';

import type { PageServerLoad } from './creature/$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.account) {
		throw error(401, 'not authenticated');
	}

	const { creatures } = await findCreaturesByAccount(locals.account);
	return { creatures };
};
