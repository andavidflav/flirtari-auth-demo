// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNV5uSyC10gbGAPCcUICp28ADQKmwF-BY",
  authDomain: "flirtaiapplite.firebaseapp.com",
  projectId: "flirtaiapplite",
  storageBucket: "flirtaiapplite.firebasestorage.app",
  messagingSenderId: "110581744173",
  appId: "1:110581744173:web:565072cc9ffc3ff7bd6ea4",
  measurementId: "G-L8V8E6FX4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth and Providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, twitterProvider };
