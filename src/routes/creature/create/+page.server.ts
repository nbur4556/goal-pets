import { createCreature } from '@src/lib/controllers/creatures';
import type { CreatureClient } from '@src/lib/types/Creature';

import type { Actions } from './$types';

export const actions = {
	createCreature: async (event) => {
		const data = await event.request.formData();

		if (!data.get('name') || !data.get('description')) {
			console.error('name and type required');
			return;
		}

		const creatureData: CreatureClient = {
			name: data.get('name') as string,
			type: data.get('type') as string,
			description: data.get('description') as string,
		};

		//TODO: Set account id
    //TODO: Return a response
		await createCreature(creatureData, 1);
	},
} satisfies Actions;
