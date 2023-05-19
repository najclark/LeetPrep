<script>
    import { createEventDispatcher } from 'svelte';
    import { auth } from './firebase';
    import { signOut } from 'firebase/auth';
    
    const dispatch = createEventDispatcher();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch('signedout');
        })
    };
</script>

<button on:click={handleSignOut}>Sign Out</button>
