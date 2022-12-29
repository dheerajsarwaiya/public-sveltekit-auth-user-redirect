<script lang="ts">
	import type { ActionData } from './$types';

	import { page } from '$app/stores';
	export let form: ActionData;
	console.log('form ', form);
</script>

{#if !$page.data.session}
	<form method="POST" action="?/signin" class="shadow-xl w-96 bg-white dark:bg-gray-800 my-10 p-4">
		<div class="card-body">
			<h2 class="card-title">Login with Email</h2>
			<input
				type="text"
				placeholder="Email"
				class="input input-bordered w-full max-w-xs"
				name="email"
			/>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Send magic link</button>
			</div>
			{#if !form?.error && form?.message == 'success'}
				<!-- this message is ephemeral; it exists because the page was rendered in
         response to a form submission. it will vanish if the user reloads -->
				<p>Please check your email for the login link</p>
			{/if}
		</div>
	</form>
{/if}
