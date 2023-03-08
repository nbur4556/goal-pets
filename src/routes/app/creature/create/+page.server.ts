import { redirect, error } from '@sveltejs/kit';

import { createCreature } from '@src/lib/controllers/creatures';
import { paths } from '@src/lib/paths';
import type { CreatureClient } from '@src/lib/types/Creature';

import type { Action, Actions } from './$types';

const newCreature: Action = async ({ locals, request }) => {
	const data = await request.formData();
	const requiredData = ['name', 'type'];

	if (!locals.account) {
		throw error(401, { message: 'not authenticated' });
	}

	requiredData.forEach((value) => {
		if (!data.get(value)) {
			throw error(400, { message: `${value} is required` });
		}
	});

	const creatureData: CreatureClient = {
		name: data.get('name') as string,
		type: data.get('type') as string,
		description: data.get('description') as string,
	};

	const creature = await createCreature(creatureData, locals.account);

	if (creature?.id) {
		throw redirect(302, paths.app.creature.id(creature.id.toString()));
	}
};

export const actions: Actions = { default: newCreature };
