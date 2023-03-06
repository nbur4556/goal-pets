import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';

const prisma = new PrismaClient();
//TODO: Make reusable
const tokenExpiration = 60 * 60 * 12;

interface AuthTokenPayload extends JwtPayload {
	accountId: string;
	userId: string;
}

const signToken = async (userId: string, accountId: string) => {
	const token = await jwt.sign({ userId: userId, accountId: accountId }, env.JWT_SECRET, {
		expiresIn: tokenExpiration,
	});

	await prisma.user.update({
		where: { id: userId },
		data: { userAuthToken: token },
	});

	return token;
};

export const register = async (username: string, password: string) => {
	const passwordHash = await bcrypt.hash(password, 10);

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

	return signToken(user.id, user.accountId);
};

export const authorize = async (username: string, password: string) => {
	const user = await prisma.user.findUniqueOrThrow({
		where: { username: username },
	});

	const result = await bcrypt.compare(password, user.passwordHash);

	if (result !== true) {
		throw 'authorization failed';
	}

	return signToken(user.id, user.accountId);
};

export const authenticateToken = async (token: string) => {
	const result = jwt.verify(token, env.JWT_SECRET) as AuthTokenPayload;

	const user = await prisma.user.findUniqueOrThrow({
		where: { id: result.userId },
		select: { userAuthToken: true },
	});

	if (token !== user.userAuthToken) {
		return;
	}

	return result;
};
