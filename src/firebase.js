// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLdJyTkx_kgT44VSR6PWZpOhZ_Awkq4Mg",
    authDomain: "factor-66587.firebaseapp.com",
    projectId: "factor-66587",
    storageBucket: "factor-66587.firebasestorage.app",
    messagingSenderId: "978357214670",
    appId: "1:978357214670:web:8beb6d8a20a1bba57c9f9f",
    measurementId: "G-WG59XRMB98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);