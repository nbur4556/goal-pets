import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handleCleanup = () => {
	console.log('disconnect from database');
	prisma.$disconnect();
};

export const findAllAccounts = async () => {
	try {
		const allAccounts = await prisma.account.findMany();
		return allAccounts;
	} catch (err) {
		//TODO: Handle Errors
		console.error(err);
	} finally {
		handleCleanup();
	}
};

export const createAccount = async (username: string) => {
	try {
		await prisma.account.create({
			data: {
				username: username,
			},
		});
	} catch (err) {
		//TODO: Handle Errors
		console.error(err);
	} finally {
		handleCleanup();
	}
};
