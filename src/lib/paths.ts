export const paths = {
	home: '/',
	app: {
		home: '/app',
		creature: {
			id: (id: string) => `/app/creature/${id}`,
			create: '/app/creature/create',
		},
	},
	auth: {
		register: '/auth/register',
		login: '/auth/login',
	},
};
