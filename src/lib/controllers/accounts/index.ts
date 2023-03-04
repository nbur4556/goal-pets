import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllAccounts = async () => {
	const allAccounts = await prisma.account.findMany().finally(() => prisma.$disconnect());
	return allAccounts;
};

export const findAccount = async (username: string) => {
	const account = await prisma.account
		.findUniqueOrThrow({
			where: { username: username },
		})
		.finally(() => prisma.$disconnect());
	return account;
};

export const createAccount = async (username: string) => {
	const account = await prisma.account
		.create({
			data: {
				username: username,
			},
		})
		.finally(() => prisma.$disconnect());
	return account;
};
