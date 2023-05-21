<head>
	<link href="https://cdn.jsdelivr.net/npm/beercss@3.2.4/dist/cdn/beer.min.css" rel="stylesheet">
	<script context="module" src="https://cdn.jsdelivr.net/npm/beercss@3.2.4/dist/cdn/beer.min.js"></script>
</head>

<script>
	import { onMount } from "svelte";
	import { auth } from './firebase';
	import { userStore } from 'sveltefire';
	import GoogleSignInButton from './GoogleSignInButton.svelte';
    import GoogleSignOutButton from './GoogleSignOutButton.svelte';
    import RadarChart from './RadarChart.svelte';
    import ProblemCard from './ProblemCard.svelte';

	const user = userStore(auth);

	let displayUserModal = false;
	let displayProblemModal = false;
</script>

<header>
	<nav class="left-round">
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

<div id="skill-chart">
	<RadarChart />
	<button class="absolute right bottom circle">
		<i>edit</i>
	</button>
</div>
<div>
	<div class="medium-space"></div>
	<article class="surface-variant">
		<details>
			<summary class="none">
				<div class="row">
					<div class="max">
						<h5>Recommended Practice</h5>
					</div>
					<i>lock</i>
				</div>
			</summary>
		</details>
	</article>
	<article class="surface-variant">
		<details>
			<summary class="none">
				<div class="row">
					<div class="max">
						<h5>Array</h5>
					</div>
					<i>arrow_drop_down</i>
				</div>
			</summary>
			<div class="row scroll">
				<ProblemCard name="Two Sum" difficulty="Easy" />
				<ProblemCard name="Climb Stairs" difficulty="Medium" />
			</div>
		</details>
	</article>
</div>


<style>
	#usermodal {
		z-index: 1;
		background-color: white;
	}

	#skill-chart {
		width: 100%;
		height: 40%;
		z-index: 0;

		display: flex;
		justify-content: center;
	}

	:global(body) {
		--primary:#62d3ff;
		--on-primary:#003546;
		--primary-container:#004d64;
		--on-primary-container:#bae9ff;
		--secondary:#b4cad6;
		--on-secondary:#1f333c;
		--secondary-container:#354a53;
		--on-secondary-container:#d0e6f2;
		--tertiary:#c5c2ea;
		--on-tertiary:#2e2d4c;
		--tertiary-container:#454365;
		--on-tertiary-container:#e3dfff;
		--error:#ffb4a9;
		--error-container:#930006;
		--on-error:#680003;
		--on-error-container:#ffdad4;
		--background:#191c1e;
		--on-background:#e1e2e4;
		--surface:#191c1e;
		--on-surface:#e1e2e4;
		--surface-variant:#40484c;
		--on-surface-variant:#c0c8cd;
		--outline:#8a9296;
		--inverse-on-surface:#191c1e;
		--inverse-surface:#e1e2e4;
		--inverse-primary:#006684;

		background-color: var(--background) !important;
	}
</style>
