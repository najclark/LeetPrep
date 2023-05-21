<script>
    export let options;
    export let selected;
</script>

<nav class="no-space">
    {#each options as option, i}
        <button class="small border" 
                class:left-round={i == 0} 
                class:no-round={i != 0 && i != options.length - 1} 
                class:right-round={i == options.length - 1}
                class:primary={$selected == option}
                on:click={() => {$selected = option}}>
            <span>{option}</span>
        </button>
    {/each}
</nav>