import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
// import type { Actions, PageServerLoad } from './demo/lucia/$types';

export const load: PageServerLoad = async (event: any) => {
    if (!event.locals.user) {
		console.log("PAGE: redirect to login")
        throw redirect(302, '/login');
    }
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/login');
	},
};
