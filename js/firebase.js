import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPGrea6_tM5VIgISZ-7Qpuz1FznTMM4Ys",
  authDomain: "web40-eaaed.firebaseapp.com",
  projectId: "web40-eaaed",
  storageBucket: "web40-eaaed.appspot.com",
  messagingSenderId: "490967556796",
  appId: "1:490967556796:web:56e6c84bc57061d5ac66b9"
}; 
const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};