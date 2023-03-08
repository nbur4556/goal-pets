import { PrismaClient } from '@prisma/client';
import type { CreatureClient } from '@src/lib/types/Creature';

const prisma = new PrismaClient();

export const findCreaturesByAccount = async (accountId: string) => {
	const creatures = await prisma.account
		.findUniqueOrThrow({
			where: { id: accountId },
			select: { creatures: true },
		})
		.finally(() => prisma.$disconnect());

	return creatures;
};

export const findCreatureById = async (id: string) => {
	const creature = await prisma.creature
		.findUniqueOrThrow({
			where: { id: id },
		})
		.finally(() => prisma.$disconnect());
	prisma.$disconnect();
	return creature;
};

export const createCreature = async (creatureData: CreatureClient, accountId: string) => {
	const creature = await prisma.creature
		.create({
			data: {
				...creatureData,
				accountId: accountId,
			},
		})
		.finally(() => prisma.$disconnect());
	return creature;
};
