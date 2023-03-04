import { writable } from 'svelte/store';

import type { AccountClient } from './lib/types/Account';
import type { CreatureClient } from './lib/types/Creature';

export const account = writable<AccountClient | undefined>();
export const creature = writable<CreatureClient>({ name: '', description: '', type: '' });
