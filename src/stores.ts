import { writable } from 'svelte/store';

import type { PetType } from './types/PetType';

export const pet = writable<PetType>({ name: '', description: '', type: '' });
