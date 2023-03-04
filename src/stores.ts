import { writable } from 'svelte/store';

import type { AccountClient } from './lib/types/Account';

export const account = writable<AccountClient | undefined>();
