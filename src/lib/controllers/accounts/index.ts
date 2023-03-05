import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllAccounts = async () => {
	const allAccounts = await prisma.account.findMany().finally(() => prisma.$disconnect());
	return allAccounts;
};

export const findAccount = async (displayName: string) => {
	const account = await prisma.account
		.findUniqueOrThrow({
			where: { displayName: displayName },
		})
		.finally(() => prisma.$disconnect());
	return account;
};
