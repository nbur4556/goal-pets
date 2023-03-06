import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

//TODO: Use JWTs

export const register = async (username: string, password: string) => {
	const passwordHash = await bcrypt.hash(password, 10);
	console.log(passwordHash);

	const user = await prisma.user.create({
		data: {
			username: username,
			passwordHash: passwordHash,
			//TODO: Remove user auth token. This should be optional
			userAuthToken: crypto.getRandomValues(new Uint32Array(1))[0].toString(),
			account: {
				create: {
					displayName: username,
				},
			},
		},
	});

	return user;
};

export const authenticate = async (username: string, password: string) => {
	const user = await prisma.user.findUniqueOrThrow({
		where: { username: username },
		select: { passwordHash: true },
	});

	const result = await bcrypt.compare(password, user.passwordHash);
	return result;
};
