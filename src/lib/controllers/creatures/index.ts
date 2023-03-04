import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handleCleanup = () => {
	prisma.$disconnect();
}

export const findCreatureById = async (id: number) => {
  try {
    const creature = await prisma.creature.findUniqueOrThrow({
      where: { id: id},
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