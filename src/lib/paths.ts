export const paths = {
	home: '/',
	auth: {
		register: '/auth/register',
		login: '/auth/login',
	},
	creature: {
		id: (id: string) => `/creature/${id}`,
		create: '/creature/create',
	},
};
