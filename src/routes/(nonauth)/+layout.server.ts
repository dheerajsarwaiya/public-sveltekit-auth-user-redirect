import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';

import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = (async (event) => {
	const session = await getServerSession(event);
	console.log('🚀 ~ file: +layout.server.ts:8 ~ constload:LayoutServerLoad= ~ session', session);

	if (session) {
		throw redirect(303, '/home');
	}
	return {
		session: null
	};
}) satisfies LayoutServerLoad;
