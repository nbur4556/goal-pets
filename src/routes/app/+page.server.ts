import { error, redirect } from '@sveltejs/kit';

import { removeAuthentication } from '@src/lib/controllers/auth';
import { findCreaturesByAccount } from '@src/lib/controllers/creatures';
import { paths } from '@src/lib/paths';

import type { Action, Actions, PageServerLoad } from './creature/$types';

const logout: Action = async ({ locals, cookies }) => {
  await removeAuthentication(locals.account);
  locals.account = "";
  cookies.delete('session');

  throw redirect(302, paths.home);
}

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.account) {
		throw error(401, 'not authenticated');
	}

	const { creatures } = await findCreaturesByAccount(locals.account);
	return { creatures };
};


export const actions: Actions = { default: logout }