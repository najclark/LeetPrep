<head>
	<link href="https://cdn.jsdelivr.net/npm/beercss@3.2.4/dist/cdn/beer.min.css" rel="stylesheet">
	<script context="module" src="https://cdn.jsdelivr.net/npm/beercss@3.2.4/dist/cdn/beer.min.js"></script>
</head>

<script>
	import { auth } from './firebase';
	import { userStore } from 'sveltefire';
	import GoogleSignInButton from './GoogleSignInButton.svelte';
    import GoogleSignOutButton from './GoogleSignOutButton.svelte';
    import RadarChart from './RadarChart.svelte';

	const user = userStore(auth);

	let displayUserModal = false;
</script>

<header>
	<nav>
		<h5 class="max center-align">🚀 LeetPrep</h5>
		{#if $user}
			<button class="circle transparent" on:click={() => {displayUserModal = !displayUserModal}}>
				<img alt="" class="responsive" src="{$user.photoURL}">
			</button>

			<dialog class="modal" class:active="{displayUserModal}" id="usermodal">
				<h5>{$user.email}</h5>
				<div>...</div>
				<nav class="right-align">
				  <button class="border" on:click={() => {displayUserModal = false}}>Cancel</button>
				  <GoogleSignOutButton on:signedout={() => {displayUserModal = false}} />
				</nav>
			</dialog>
		{:else}
			<GoogleSignInButton />
		{/if}
	</nav>
</header>

<RadarChart />
