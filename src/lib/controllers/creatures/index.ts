import { PrismaClient } from '@prisma/client';
import type { CreatureClient } from '@src/lib/types/Creature';

const prisma = new PrismaClient();

const handleCleanup = () => {
	prisma.$disconnect();
};

export const findCreatureById = async (id: number) => {
	try {
		const creature = await prisma.creature.findUniqueOrThrow({
			where: { id: id },
		});
		return creature;
	} catch (err) {
		//TODO: Handle Errors
		console.error(err);
		throw err;
	} finally {
		handleCleanup();
	}
};

export const createCreature = async (creatureData: CreatureClient, accountId: number) => {
	try {
		const creature = await prisma.creature.create({
			data: {
				...creatureData,
				//TODO: Validate accountId
				accountId: accountId,
			},
		});
		return creature;
	} catch (err) {
		//TODO: Handle Errors
		console.error(err);
	} finally {
		handleCleanup();
	}
};
