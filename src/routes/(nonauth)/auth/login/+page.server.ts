import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	signin: async ({ request, locals, url }) => {
		const formData = await request.formData();

		const email = formData.get('email') as string;
		console.log(' url origin ', url.origin);
		// const password = formData.get('password') as string;
		const { error: err } = await locals.sb.auth.signInWithOtp({
			email,
			options: { emailRedirectTo: url.origin }
		});

		if (err) {
			return fail(400, {
				error: 'Invalid credentials'
			});
			// return fail(500, {
			//   message: 'Server error. Try again later.'
			// });
		}

		return { message: 'success', error: false };
		// throw redirect(303, '/');
	}
};
