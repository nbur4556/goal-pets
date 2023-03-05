import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const register = async (username: string, password: string) => {
	const passwordHash = await bcrypt.hash(password, 10);
	console.log(passwordHash);

	const user = await prisma.user.create({
		data: {
			username: username,
			passwordHash: passwordHash,
			//TODO: Remove user auth token. This should be optional
			userAuthToken: '',
			account: {
				create: {
					displayName: username,
				},
			},
		},
	});

	console.log(user);
	return user;
};
