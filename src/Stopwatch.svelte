<script>
    import { onDestroy } from "svelte";

    export let elapsedSeconds;
    export let paused = true;

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    let ticker = setInterval(() => {
        if (!paused) {
            $elapsedSeconds += 1
            seconds += 1;

            let carry = Math.floor(seconds / 60);
            minutes += carry;

            carry = Math.floor(minutes / 60);
            hours += carry;

            seconds %= 60;
            minutes %= 60;
        }
    }, 1000)

    onDestroy(() => {
        clearInterval(ticker);
    })
</script>

<div class="row center-align">
    <h1 class="bold">{zeroPad(hours, 2)}h</h1>
    <h1 class="bold">{zeroPad(minutes, 2)}m</h1>
    <h1 class="bold">{zeroPad(seconds, 2)}s</h1>
</div>

<style>
    h1 {
		color: var(--secondary);
	}
</style>