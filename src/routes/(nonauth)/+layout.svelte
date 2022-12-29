<script>
	import '../../app.css';
	import { supabaseClient } from '$lib/config/supabase/db';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="min-h-screen flex flex-col items-center bg-gray-200 dark:bg-gray-600">
	<slot />
</div>
