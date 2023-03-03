import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const actions = {
	//TODO: Type the event
	createAccount: async (event: any) => {
		const data = await event.request.formData();

		try {
			const username = data.get('username');

			const account = await prisma.account.create({
				data: {
					username: username,
				},
			});

      console.log(account);
		} catch (err) {
			console.error(err);
		} finally {
			prisma.$disconnect();
		}
	},
};
