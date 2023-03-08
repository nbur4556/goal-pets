import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllAccounts = async () => {
	const allAccounts = await prisma.account.findMany().finally(() => prisma.$disconnect());
	return allAccounts;
};

export const findAccount = async (accountId: string) => {
	const account = await prisma.account
		.findUniqueOrThrow({
			where: { id: accountId },
		})
		.finally(() => prisma.$disconnect());
	return account;
};
