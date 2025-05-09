// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Added this import


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh6gK3lEAarD4lCkOKTTFD2tVbiNEvhPk",
  authDomain: "miniblog-8435f.firebaseapp.com",
  projectId: "miniblog-8435f",
  storageBucket: "miniblog-8435f.firebasestorage.app",
  messagingSenderId: "484399140356",
  appId: "1:484399140356:web:ec28ee9a4537063dd02f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
 
const auth = getAuth(app);
 
export { db, auth };