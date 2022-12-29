<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const { notes } = data;
	console.log('notes ', notes);
</script>

<h1 class="text-3xl font-bold underline">User Home!</h1>
<div>Data coming from database</div>
{#each notes as note}
	<div>{note.text}</div>
{/each}

<form method="POST" action="?/signout" class="card shadow-xl  bg-white my-10">
	<button class="btn btn-primary">Sign out</button>
</form>
