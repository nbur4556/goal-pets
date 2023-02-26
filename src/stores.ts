import { writable } from 'svelte/store';

import type { CreatureType } from './types/CreatureType';

export const creature = writable<CreatureType>({ name: '', description: '', type: '' });
