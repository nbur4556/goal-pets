import { PrismaClient } from '@prisma/client';
import type { CreatureClient } from '@src/lib/types/Creature';

const prisma = new PrismaClient();

export const findCreatureById = async (id: number) => {
	const creature = await prisma.creature
		.findUniqueOrThrow({
			where: { id: id },
		})
		.finally(() => prisma.$disconnect());
	prisma.$disconnect();
	return creature;
};

export const createCreature = async (creatureData: CreatureClient, accountId: number) => {
	const creature = await prisma.creature
		.create({
			data: {
				...creatureData,
				// TODO Validate accountId
				accountId: accountId,
			},
		})
		.finally(() => prisma.$disconnect());
	return creature;
};
