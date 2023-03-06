import { findCreatureById } from '@src/lib/controllers/creatures';

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const creature = await findCreatureById(params.id);
	return { creature };
}) satisfies PageServerLoad;
