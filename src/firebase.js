import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from '../config/firebase_config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

let gp = new GoogleAuthProvider();
gp.addScope('profile');
gp.addScope('email');
export const googleProvider = gp;