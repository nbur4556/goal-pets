import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handleCleanup = () => {
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

export const findAccount = async (username: string) => {
	try {
		const account = await prisma.account.findUniqueOrThrow({
			where: { username: username },
		});
		return account;
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
