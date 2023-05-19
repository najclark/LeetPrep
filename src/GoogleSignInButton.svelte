<script>
    import { auth, googleProvider } from './firebase';
    import { signInWithPopup } from 'firebase/auth';
    
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var firebaseuser = result.user;

        if(firebaseuser) {
            console.log(firebaseuser)
        }
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error)
      });
    };
</script>

<button on:click={handleGoogleLogin}>Sign in with Google</button>
