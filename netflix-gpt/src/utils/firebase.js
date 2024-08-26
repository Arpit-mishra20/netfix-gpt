// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMI-0I8trFEH2UagjXavJ9bPXxGM3N-yg",
  authDomain: "netflixgpt-9d407.firebaseapp.com",
  projectId: "netflixgpt-9d407",
  storageBucket: "netflixgpt-9d407.appspot.com",
  messagingSenderId: "276324068339",
  appId: "1:276324068339:web:dd0393b7a6cf1d087b0086",
  measurementId: "G-WXQRPV4B28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();