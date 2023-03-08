import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userData = [
	{
		username: 'nbur4556',
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
		username: 'testAccount1',
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
		username: 'testAccount2',
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
	console.log(process.env.SEED_USER_PASSWORD);

	for (const data of userData) {
		const passwordHash = await bcrypt.hash(process.env.SEED_USER_PASSWORD, 10);
		const result = await prisma.user.create({
			data: {
				username: data.username,
				passwordHash: passwordHash,
				account: {
					create: {
						displayName: data.username,
						creatures: {
							create: data.creatures,
						},
					},
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
