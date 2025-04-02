import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
// import type { Actions, PageServerLoad } from './demo/lucia/$types';

export const load: PageServerLoad = async (event: any) => {
    return { user: event.locals.user };
};

