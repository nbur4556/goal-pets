import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//TODO: Add users to account data
const accountData = [
	{
		displayName: 'nbur4556',
		creatures: [
			{
				name: 'Test Creature 1',
				type: 'Test Type 1',
				description: 'Test Description 1',
			},
			{
				name: 'Test Creature 4',
				type: 'Test Type 4',
				description: 'Test Description 4',
			},
			{
				name: 'Test Creature 5',
				type: 'Test Type 5',
				description: 'Test Description 5',
			},
		],
	},
	{
		displayName: 'testAccount1',
		creatures: [
			{
				name: 'Test Creature 2',
				type: 'Test Type 2',
				description: 'Test Description 2',
			},
			{
				name: 'Test Creature 6',
				type: 'Test Type 6',
				description: 'Test Description 6',
			},
		],
	},
	{
		displayName: 'testAccount2',
		creatures: [
			{
				name: 'Test Creature 3',
				type: 'Test Type 3',
				description: 'Test Description 3',
			},
		],
	},
];

async function main() {
	for (const data of accountData) {
		const result = await prisma.account.upsert({
			where: { displayName: data.displayName },
			update: {},
			create: {
				displayName: data.displayName,
				creatures: {
					create: data.creatures,
				},
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
