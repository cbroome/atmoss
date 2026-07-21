import { createClient } from '@supabase/supabase-js';
import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_PUBLISHABLE_KEY,
	PUBLIC_SUPABASE_SCHEMA
} from '$env/static/public';

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const schema = PUBLIC_SUPABASE_SCHEMA || 'public';

export const supabase = createClient(supabaseUrl, supabaseKey, {
	db: {
		schema
	}
});
