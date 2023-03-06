import { redirect, error } from '@sveltejs/kit';

import { createCreature } from '@src/lib/controllers/creatures';
import { paths } from '@src/lib/paths';
import type { CreatureClient } from '@src/lib/types/Creature';

import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const requiredData = ['accountId', 'name', 'type'];

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

		const accountId = data.get('accountId') as string;
		const creature = await createCreature(creatureData, accountId);

		if (creature?.id) {
			throw redirect(302, paths.creature.id(creature.id.toString()));
		}
	},
} satisfies Actions;
