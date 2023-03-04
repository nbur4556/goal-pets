import { redirect, error } from '@sveltejs/kit'

import { createCreature } from '@src/lib/controllers/creatures';
import type { CreatureClient } from '@src/lib/types/Creature';

import type { Actions } from './$types';

export const actions = {
	createCreature: async (event) => {
    const data = await event.request.formData();
    const requiredData = ['accountId', 'name', 'type']

    requiredData.forEach(value => {
      if (!data.get(value)) {
        throw error(400, {message: `${value} is required`});
      }
    });

		const creatureData: CreatureClient = {
			name: data.get('name') as string,
			type: data.get('type') as string,
			description: data.get('description') as string,
		};

    const accountId = parseInt(data.get('accountId') as string);
    const creature = await createCreature(creatureData, accountId);

    if (creature?.id) {
      throw redirect(302, `/creature/${creature.id}`)
    }
	},
} satisfies Actions;
