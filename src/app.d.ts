import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';
import type { Session } from '@supabase/supabase-js';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	declare namespace App {
		interface Supabase {
			Database: import('./DatabaseDefinitions').Database;
			SchemaName: 'public';
		}

		// interface Locals {}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null;
		}

		// interface Error {}
		// interface Locals {}
		interface Locals {
			sb: TypedSupabaseClient;
			session: Session | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}
