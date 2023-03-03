import { PrismaClient } from '@prisma/client';

import type { Actions, PageServerLoad } from './$types';

const prisma = new PrismaClient();

//! Temporary load all accounts for testing
export const load = (async () => {
  try {
    const allAccounts = await prisma.account.findMany();
    return {allAccounts}
  } catch(err) {
    console.error(err);
  } finally {
    prisma.$disconnect();
  }
}) satisfies PageServerLoad;

export const actions = {
  //TODO: Handle errors
	createAccount: async (event) => {
		const data = await event.request.formData();
    const username = data.get('username')?.toString();

    if(!username) {
      console.error('Error: username must be provided');
      return;
    }

		try {
			await prisma.account.create({
				data: {
					username: username,
				},
			});
		} catch (err) {
			console.error(err);
		} finally {
			prisma.$disconnect();
		}
	},
} satisfies Actions;
