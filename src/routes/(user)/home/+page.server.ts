import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = (async ({ locals }) => {
	// get sample data from database
	console.log(' am i coming here ');
	const { session } = locals;
	// console.log('🚀 ~ file: +page.server.ts:10 ~ constload:PageServerLoad= ~ session', session);

	if (!session) {
		throw redirect(307, '/auth/login');
	}

	return {
		notes: []
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	signout: async ({ locals }) => {
		await locals.sb.auth.signOut();
		throw redirect(303, '/');
	}
};
