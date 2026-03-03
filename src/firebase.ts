import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnuUFVpJER-y6Em0o-Gpslgt-egR5Rbs8",
    authDomain: "expense-tracker-ba96b.firebaseapp.com",
    projectId: "expense-tracker-ba96b",
    storageBucket: "expense-tracker-ba96b.firebasestorage.app",
    messagingSenderId: "541855392059",
    appId: "1:541855392059:web:4964711b9620745d2b571e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
