import { createServerClient } from '@supabase/ssr';
import { redirect } from '@sveltejs/kit';
import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_PUBLISHABLE_KEY,
	PUBLIC_SUPABASE_SCHEMA
} from '$env/static/public';

export const load = async ({ cookies }) => {
	const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
		cookies: {
			get: (key) => cookies.get(key),
			set: (key, value, options) => cookies.set(key, value, { path: '/', ...options }),
			remove: (key, options) => cookies.delete(key, { path: '/', ...options })
		},
		db: {
			schema: PUBLIC_SUPABASE_SCHEMA || 'public'
		}
	});

	/*
	const {
		data: { user },
		error
	} = await supabase.auth.getUser();

	if (error || !user) throw redirect(302, '/login');

	*/
	// ✅ do authenticated DB writes/reads here using `supabase.from(...)`

	// await supabase.from('...')

	return {};
};
