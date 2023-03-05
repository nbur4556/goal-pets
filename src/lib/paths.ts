export const paths = {
	home: '/',
	auth: {
		register: '/auth/register',
	},
	creature: {
		id: (id: string) => `/creature/${id}`,
		create: '/creature/create',
	},
};
