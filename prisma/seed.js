import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const accountData = [
	{ username: 'nbur4556' },
	{ username: 'testAccount1' },
	{ username: 'testAccount2' },
];

const creatureData = [
	{ name: 'Test Creature 1', type: 'Test Type 1', description: 'Test Description 1', accountId: 1 },
	{ name: 'Test Creature 2', type: 'Test Type 2', description: 'Test Description 2', accountId: 2 },
	{ name: 'Test Creature 3', type: 'Test Type 3', description: 'Test Description 3', accountId: 3 },
	{ name: 'Test Creature 4', type: 'Test Type 4', description: 'Test Description 4', accountId: 1 },
	{ name: 'Test Creature 5', type: 'Test Type 5', description: 'Test Description 5', accountId: 1 },
	{ name: 'Test Creature 6', type: 'Test Type 6', description: 'Test Description 6', accountId: 2 },
];

async function main() {
  for (const data of accountData) {
    const result = await prisma.account.upsert({
			where: { username: data.username },
			update: {},
			create: { username: data.username },
		});
    console.log(result);
  }

  for (const data of creatureData) {
    const result = await prisma.creature.create({
			data: {
				name: data.name,
				type: data.type,
				description: data.description,
				accountId: data.accountId,
			},
		});
    console.log(result);
  }
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (err) => {
		console.error(err);
		await prisma.$disconnect();
		process.exit(1);
	});
