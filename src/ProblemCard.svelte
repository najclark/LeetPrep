<script>
    import { writable } from 'svelte/store';
    import Stopwatch from './Stopwatch.svelte';
    import RadioButtons from './RadioButtons.svelte';

    export let name;
    export let difficulty;

    let problemModalActive = false;
    let elapsedSeconds = writable(0);
    let paused = true;

    let status = writable("");
    let timeComplexity = writable("");
    let spaceComplexity = writable("");

    const saveRecord = () => {
        problemModalActive = false
        // TODO: save the record
    }
</script>

<article class="">
    <div class="grid">
        <div class="s8">
            <h5>{name}</h5>
            <p class="italic">Last Tried: 23 days ago</p>
        </div>
        <!-- <a class="chip small right s4"> -->
            <button class="chip small right s4">{difficulty}</button>
        <!-- </a> -->
    </div>
    <nav>
      <button on:click={() => problemModalActive = true}>Try Problem</button>
    </nav>
</article>

<dialog class="center-align modal border large-blur" class:active="{problemModalActive}">
    <button class="transparent extra"><h5>{name}</h5><i class="bold">arrow_outward</i></button>
    <div>
        <Stopwatch {elapsedSeconds} {paused} />
        <button class="absolute right middle transparent circle extra" on:click={() => paused = !paused}>
            <i class="bold">{paused ? 'play_arrow' : 'pause'}</i>
        </button>
    </div>
    <div class="medium-space"></div>
    <table class="right-align">
        <tbody>
        <tr>
            <td>Status</td>
            <td><RadioButtons options={["COMPLETED", "GAVE UP"]} selected={status} /></td>
        </tr>
        <tr>
            <td>Time Complexty</td>
            <td><RadioButtons options={["OPTIMAL", "NON-OPTIMAL"]} selected={timeComplexity} /></td>
        </tr>
        <tr>
            <td>Space Complexty</td>
            <td><RadioButtons options={["OPTIMAL", "NON-OPTIMAL"]} selected={spaceComplexity} /></td>
        </tr>
        </tbody>
    </table>
    <nav class="right-align">
      <button class="absolute left border" on:click={() => problemModalActive = false}>Cancel</button>
      <button on:click={saveRecord}>Submit</button>
    </nav>
</dialog>