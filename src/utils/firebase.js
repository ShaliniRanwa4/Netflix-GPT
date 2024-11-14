// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5YG659-oOhvQwZBTj8Q2gi-ehyOs4sNw",
  authDomain: "netflixgpt-1327e.firebaseapp.com",
  projectId: "netflixgpt-1327e",
  storageBucket: "netflixgpt-1327e.firebasestorage.app",
  messagingSenderId: "239165577549",
  appId: "1:239165577549:web:fa4bea63a019674e0e3f04",
  measurementId: "G-2KLWPQ898V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
