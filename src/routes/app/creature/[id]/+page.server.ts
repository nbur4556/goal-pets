import { error } from '@sveltejs/kit';

import { findCreatureById } from '@src/lib/controllers/creatures';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	if (!locals.account) {
		throw error(401, 'not authenticated');
	}

	const creature = await findCreatureById(params.id);
  if(creature.accountId !== locals.account) {
		throw error(401, 'not authenticated');
  }

	return { creature };
};
