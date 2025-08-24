import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFT-ELZ3SMB9raP_NBww4kH-WzkgGkHeg",
  authDomain: "dine-time-cf8b9.firebaseapp.com",
  projectId: "dine-time-cf8b9",
  storageBucket: "dine-time-cf8b9.firebasestorage.app",
  messagingSenderId: "935838058479",
  appId: "1:935838058479:web:dbeb5d6d353510dc2b981a",
  measurementId: "G-2VRQRY8HE4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);